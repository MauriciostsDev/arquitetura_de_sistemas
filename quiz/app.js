/* ============================================================================
 *  ENGINE DO QUIZ  —  genérica, sem nenhuma questão hardcoded.
 *  Lê tudo de window.BANCO_QUESTOES (definido em data/questoes.js).
 * ========================================================================== */
(function () {
  "use strict";

  const BANCO = Array.isArray(window.BANCO_QUESTOES) ? window.BANCO_QUESTOES : [];

  /* ----------------------------- utilidades ------------------------------ */
  const $ = (sel) => document.querySelector(sel);
  const criar = (tag, props) => Object.assign(document.createElement(tag), props || {});

  function embaralhar(lista) {
    const a = lista.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function listaDeTopicos() {
    const set = new Map();
    for (const q of BANCO) set.set(q.topico, (set.get(q.topico) || 0) + 1);
    return [...set.entries()]
      .map(([nome, total]) => ({ nome, total }))
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt"));
  }

  function mostrarTela(id) {
    for (const sec of document.querySelectorAll("main > section")) sec.hidden = sec.id !== id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ------------------------------- estado -------------------------------- */
  const estado = {
    questoes: [],        // { ...questao, opcoes: [{texto, correta}] }
    indice: 0,
    respostas: [],       // { topico, correta:boolean }
    embaralharAlt: true,
    respondidaAtual: false,
  };

  /* --------------------------- TELA DE INÍCIO ---------------------------- */
  function montarInicio() {
    const topicos = listaDeTopicos();
    $("#resumo-banco").textContent =
      `${BANCO.length} questões disponíveis em ${topicos.length} tópicos.`;

    const lista = $("#lista-topicos");
    lista.innerHTML = "";
    for (const t of topicos) {
      const id = "tp-" + t.nome.replace(/\W+/g, "-");
      const wrap = criar("label", { className: "topico-item" });
      const cb = criar("input", { type: "checkbox", value: t.nome, checked: true, id });
      cb.className = "tp-check";
      const txt = criar("span", { textContent: t.nome });
      const badge = criar("span", { className: "badge", textContent: t.total });
      wrap.append(cb, txt, badge);
      lista.append(wrap);
    }

    $("#sel-todos").onclick = () =>
      document.querySelectorAll(".tp-check").forEach((c) => (c.checked = true));
    $("#sel-nenhum").onclick = () =>
      document.querySelectorAll(".tp-check").forEach((c) => (c.checked = false));
    $("#btn-iniciar").onclick = iniciar;
  }

  function topicosSelecionados() {
    return [...document.querySelectorAll(".tp-check:checked")].map((c) => c.value);
  }

  function iniciar() {
    const selec = topicosSelecionados();
    if (selec.length === 0) {
      $("#aviso-inicio").textContent = "Selecione ao menos um tópico para começar.";
      return;
    }
    $("#aviso-inicio").textContent = "";

    estado.embaralharAlt = $("#embaralhar-alt").checked;

    let pool = BANCO.filter((q) => selec.includes(q.topico));
    pool = embaralhar(pool);

    const limiteRaw = $("#qtd").value;
    if (limiteRaw !== "todas") pool = pool.slice(0, Number(limiteRaw));

    estado.questoes = pool.map((q) => {
      const opcoes = q.alternativas.map((texto, i) => ({ texto, correta: i === q.correta }));
      return { ...q, opcoes: estado.embaralharAlt ? embaralhar(opcoes) : opcoes };
    });
    estado.indice = 0;
    estado.respostas = [];

    mostrarTela("tela-quiz");
    renderQuestao();
  }

  /* ----------------------------- TELA DE QUIZ ---------------------------- */
  function renderQuestao() {
    estado.respondidaAtual = false;
    const q = estado.questoes[estado.indice];
    const n = estado.questoes.length;

    $("#progresso-texto").textContent = `Questão ${estado.indice + 1} de ${n}`;
    $("#progresso-barra").style.width = `${(estado.indice / n) * 100}%`;
    $("#q-topico").textContent = q.topico;
    $("#q-enunciado").textContent = q.enunciado;
    $("#q-explicacao").hidden = true;
    $("#q-explicacao").textContent = "";
    $("#btn-proxima").hidden = true;

    const cont = $("#q-alternativas");
    cont.innerHTML = "";
    q.opcoes.forEach((op, i) => {
      const btn = criar("button", { className: "alternativa", type: "button" });
      const letra = criar("span", { className: "letra", textContent: String.fromCharCode(65 + i) });
      const txt = criar("span", { className: "texto", textContent: op.texto });
      btn.append(letra, txt);
      btn.onclick = () => responder(btn, op);
      cont.append(btn);
    });
  }

  function responder(btnEscolhido, opcao) {
    if (estado.respondidaAtual) return;
    estado.respondidaAtual = true;

    const q = estado.questoes[estado.indice];
    const botoes = [...document.querySelectorAll("#q-alternativas .alternativa")];

    botoes.forEach((b, i) => {
      b.disabled = true;
      if (q.opcoes[i].correta) b.classList.add("correta");
    });
    if (!opcao.correta) btnEscolhido.classList.add("errada");

    estado.respostas.push({ topico: q.topico, correta: !!opcao.correta });

    const exp = $("#q-explicacao");
    exp.hidden = false;
    exp.innerHTML =
      `<strong>${opcao.correta ? "✅ Correto!" : "❌ Incorreto."}</strong> ${q.explicacao || ""}`;

    const ultima = estado.indice === estado.questoes.length - 1;
    const btn = $("#btn-proxima");
    btn.hidden = false;
    btn.textContent = ultima ? "Ver resultado" : "Próxima →";
    btn.onclick = proxima;
  }

  function proxima() {
    if (estado.indice < estado.questoes.length - 1) {
      estado.indice++;
      renderQuestao();
    } else {
      finalizar();
    }
  }

  /* --------------------------- TELA DE RESULTADO ------------------------- */
  function finalizar() {
    const total = estado.respostas.length;
    const acertos = estado.respostas.filter((r) => r.correta).length;
    const pct = total ? Math.round((acertos / total) * 100) : 0;

    $("#res-nota").textContent = `${acertos} / ${total}`;
    $("#res-pct").textContent = `${pct}%`;
    $("#res-pct").className = "res-pct " + (pct >= 70 ? "bom" : pct >= 50 ? "medio" : "ruim");
    $("#res-msg").textContent =
      pct >= 70 ? "Mandou bem! Conteúdo dominado." :
      pct >= 50 ? "Quase lá — revise os tópicos abaixo." :
      "Vale revisar as notas e tentar de novo.";

    // desempenho por tópico
    const porTopico = {};
    for (const r of estado.respostas) {
      porTopico[r.topico] = porTopico[r.topico] || { acertos: 0, total: 0 };
      porTopico[r.topico].total++;
      if (r.correta) porTopico[r.topico].acertos++;
    }
    const tbody = $("#res-tabela tbody");
    tbody.innerHTML = "";
    Object.entries(porTopico)
      .sort((a, b) => a[0].localeCompare(b[0], "pt"))
      .forEach(([topico, d]) => {
        const tr = criar("tr");
        const taxa = Math.round((d.acertos / d.total) * 100);
        tr.innerHTML =
          `<td>${topico}</td><td>${d.acertos}/${d.total}</td>` +
          `<td><span class="mini-barra"><i style="width:${taxa}%"></i></span> ${taxa}%</td>`;
        tbody.append(tr);
      });

    mostrarTela("tela-resultado");
  }

  /* ------------------------------ inicialização -------------------------- */
  function init() {
    if (BANCO.length === 0) {
      $("#resumo-banco").textContent =
        "Nenhuma questão encontrada. Verifique se data/questoes.js foi carregado.";
      $("#btn-iniciar").disabled = true;
      return;
    }
    montarInicio();
    $("#btn-refazer").onclick = iniciar;            // refaz com a mesma seleção
    $("#btn-voltar").onclick = () => mostrarTela("tela-inicio");

    // atalhos de teclado: 1-9 escolhe alternativa, Enter avança
    document.addEventListener("keydown", (e) => {
      if (!$("#tela-quiz").hidden) {
        const botoes = [...document.querySelectorAll("#q-alternativas .alternativa")];
        const num = Number(e.key);
        if (num >= 1 && num <= botoes.length && !estado.respondidaAtual) {
          botoes[num - 1].click();
        } else if (e.key === "Enter" && estado.respondidaAtual) {
          proxima();
        }
      } else if (!$("#tela-inicio").hidden && e.key === "Enter") {
        iniciar();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
