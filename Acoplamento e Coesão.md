---
tags:
  - arquitetura-de-sistemas
  - componentes
  - design
data: 2026-06-01
status: em-estudo
---

# Acoplamento e Coesão

> [!summary] Em uma frase
> **Coesão** é o quanto as coisas *dentro* de um componente combinam entre si (queremos **alta**); **acoplamento** é o quanto um componente *depende* dos outros (queremos **baixo**).

## 🧲 Acoplamento — dependência entre componentes

Acoplamento mede **o quanto um componente precisa de outro para funcionar**. Quanto mais um depende dos detalhes internos do outro, **mais forte (e pior)** é o acoplamento.

> [!important] Objetivo: baixo acoplamento (loose coupling)
> Componentes pouco acoplados podem ser **trocados, testados e mantidos isoladamente**. Se o iFood troca o provedor de pagamento, o **catálogo** de restaurantes não deveria nem perceber.

> [!analogy] Analogia do dia a dia
> **Forte acoplamento** é como um móvel onde tudo é colado e parafusado junto: pra trocar uma gaveta, você desmonta o armário inteiro.
> **Baixo acoplamento** é como peças de Lego: encaixam por um padrão (a interface) e você troca uma peça sem mexer nas outras.

## 🧩 Coesão — foco interno do componente

Coesão mede **o quanto as partes de um componente pertencem umas às outras**. Um componente coeso faz **uma coisa bem feita**.

> [!important] Objetivo: alta coesão
> O pacote "Pagamentos" só cuida de pagamento. Se ele também mexesse com cardápio e com rota de entrega, teria **baixa coesão** — viraria uma "gaveta de bagunça".

> [!analogy] Analogia do dia a dia
> **Alta coesão** = uma caixa de ferramentas só de parafusadeira (tudo ali serve ao mesmo propósito).
> **Baixa coesão** = uma gaveta com chave, talher, pilha e remédio juntos — difícil de achar e de manter.

## 🎯 A regra de ouro

> [!tip] Alta coesão + baixo acoplamento
> Esse é o objetivo de quase todo bom design de componentes. As **interfaces** ([[Interfaces e Contratos]]) e o **middleware** ([[Middleware]]) são as principais ferramentas para conseguir isso: cada componente é coeso por dentro e se conecta aos outros só pelo contrato, sem depender dos detalhes.

## ⚠️ Sobre o termo "forte acoplagem" do material

O material de [[Distribuição de Componentes]] fala em "forte acoplagem para a organização". O sentido provável é **integração forte** (tudo bem conectado e confiável), e não dependência rígida entre componentes. Na dúvida, confirme com o professor — pode ser pegadinha de prova.

## 🔗 Relacionados

- [[Empacotamento de Componentes]]
- [[Distribuição de Componentes]]
- [[Interfaces e Contratos]]
- [[Middleware]]

---
*Estudo iniciado em 2026-06-01*
