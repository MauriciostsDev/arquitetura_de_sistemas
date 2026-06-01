---
tags:
  - arquitetura-de-sistemas
  - componentes
  - ambiente
  - distribuicao
data: 2026-06-01
status: em-estudo
---

# Ambiente de Componentes

> [!summary] Em uma frase
> Um **ambiente de componentes** é o "lugar" (um ambiente de objetos distribuídos) onde os componentes rodam, que oferece **serviços prontos de infraestrutura** (transações, segurança, concorrência) — desde que o componente siga as **regras padrão** desse ambiente.

## 🎯 A ideia, bem simples

Um componente sozinho não faz tudo. Ele precisa de coisas chatas e repetidas: controlar transações, cuidar de segurança, lidar com vários usuários ao mesmo tempo (concorrência). Em vez de cada componente reimplementar isso, **o ambiente entrega de graça** — o componente só precisa **seguir as regras da casa** para "plugar" e usar.

> [!note] Definição do material
> "Ambiente de componente é um meio ambiente de **objetos distribuídos**. Os componentes devem estar em conformidade a um conjunto de **regras padrão** para operar nesse ambiente, e há um conjunto de **serviços de infraestrutura** (transações, segurança, concorrência…) dos quais o componente de aplicação pode depender."

## 🍔 Comparação com o mundo real — um shopping center

O **shopping** é o ambiente; as **lojas** são os componentes:

- O shopping fornece a **infraestrutura**: energia, segurança, estacionamento, limpeza, ar-condicionado.
- A loja **não gera a própria energia** nem contrata seu próprio segurança — ela **depende** dos serviços do shopping.
- Mas, para entrar, a loja precisa **seguir as regras do shopping** (horário, padrão de fachada, contrato).

Trocando em miúdos: a loja foca em **vender** (a regra de negócio dela) e deixa a **infraestrutura** com o shopping. É exatamente isso que um ambiente de componentes faz. Ver [[Serviços de Infraestrutura]].

## ⚙️ Declarativo (via framework) vs. explícito (na mão)

O material foca nos ambientes que entregam a infraestrutura de forma **declarativa**, usando **framework** — também chamada de **"programação baseada em atributo"** — em vez de você chamar tudo na mão dentro da lógica.

> [!important] A diferença na prática
> - **Explícito (imperativo):** você escreve, dentro da regra de negócio, "abrir transação… se der erro, desfazer… checar permissão…". A lógica fica **suja**, misturada com infraestrutura.
> - **Declarativo (por atributo):** você só **marca/anota** "isto precisa de transação" e "isto exige login", e o **framework cuida do resto**. A lógica fica **limpa**.
>
> O material prefere o declarativo porque dá uma **base mais sólida** para aplicações distribuídas em escala empresarial. Ver [[Programação Declarativa]].

## 🗂️ As opções citadas

> [!info] Sem julgamento de "qual é melhor"
> O material **não** compara qual é superior — só apresenta os conceitos. Aqui vai só o mapa:

| Ambiente | Dependência de Plataforma | Dependência de Linguagem |
|----------|---------------------------|--------------------------|
| **Microsoft COM+** | Windows | Nenhuma |
| **Enterprise JavaBeans (EJB)** | Nenhuma | Java |

- **COM+** → preso ao **Windows**, mas aceita várias linguagens.
- **EJB** → roda em **qualquer plataforma** (graças à JVM), mas é preso ao **Java**.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> Os dois pensamentos **se alinham na intenção**, mas atuam em **lugares diferentes**:
>
> - **Clean Architecture** diz: mantenha a **regra de negócio limpa**, sem detalhes de infraestrutura grudados nela.
> - O **ambiente de componentes declarativo** é uma **ferramenta** que ajuda nisso: ao deixar transação/segurança como **anotações** tratadas pelo framework, a infraestrutura sai de dentro da lógica → o núcleo fica mais limpo.
>
> **A diferença/cuidado:** se você espalhar atributos do framework por toda a regra de negócio, ela passa a **depender do framework** — o oposto do que a Clean Architecture quer (núcleo independente de detalhes). O ideal é usar o declarativo **na borda**, não no coração do domínio.

## 💻 Exemplo em React + TypeScript

React é **declarativo** por natureza — ótimo para sentir a diferença. Em vez de mandar "passos" na mão, você **declara** o que quer e o framework executa:

```tsx
// ❌ Imperativo (na mão): você comanda cada passo da infraestrutura da UI
const el = document.createElement("button");
el.textContent = "Pagar";
el.addEventListener("click", pagar);
document.body.appendChild(el);

// ✅ Declarativo: você DECLARA o que quer; o React cuida de criar/atualizar/remover
function BotaoPagar() {
  return <button onClick={pagar}>Pagar</button>;
}
```

E a "programação baseada em atributo" do material lembra um **decorator** (anotação) que injeta infraestrutura sem sujar a lógica:

```ts
// pseudo-decorator: "marque" que este caso de uso precisa de transação + auth.
// O framework lê o atributo e cuida disso — a lógica não chama nada de infra.
@Transacional()
@RequerLogin()
class ConfirmarPedido {
  executar(pedidoId: string) {
    // só REGRA DE NEGÓCIO aqui — nada de "abrir transação" ou "checar token"
    return this.repo.confirmar(pedidoId);
  }
}
```

> [!note] A sacada
> No declarativo você diz **o quê** (precisa de transação/login) e o ambiente resolve o **como**. É o mesmo espírito de [[Abstração|abstração]]: esconder o detalhe e focar no essencial.

## 🔗 Relacionados

- [[Containers]]
- [[Serviços de Infraestrutura]]
- [[Programação Declarativa]]
- [[Distribuição de Componentes]]
- [[Middleware]]
- [[Clean Architecture]]
- [[Abstração]]

---
*Estudo iniciado em 2026-06-01*
