---
tags:
  - arquitetura-de-sistemas
  - componentes
  - framework
  - corba
data: 2026-06-01
status: em-estudo
---

# Framework CCM (CORBA Component Model)

> [!summary] Em uma frase
> O **CCM** é um framework de componentes **do lado do servidor** que facilita **criar e instalar** aplicações distribuídas por componentes — basicamente, um "padrão de fábrica" para transformar objetos [[CORBA]] em componentes prontos para plugar.

## 🎯 A ideia, bem simples

Montar uma aplicação distribuída na mão é trabalhoso: você teria que cuidar de comunicação, empacotamento, instalação e execução de cada peça. O **CCM padroniza tudo isso**. Você foca em escrever o componente; o framework cuida da "burocracia" de distribuir, empacotar, instalar e rodar.

É um framework **server-side** (roda no servidor) e os componentes podem ser de vários tipos, como vimos em [[Componentes]].

## 🍔 Comparação com o mundo real — montar móvel com padrão IKEA

Pensa num móvel modular padrão IKEA:

- cada peça tem **encaixes padronizados** (você sabe onde conecta o quê),
- vem com **manual de montagem** (instalação padronizada),
- e cabe em **caixas padronizadas** (empacotamento).

O CCM é esse "padrão IKEA" para componentes de software: encaixes, empacotamento e instalação **todos padronizados**, então qualquer peça monta com qualquer outra.

## 🧩 Os 2 níveis de componentes do CCM

| Nível | O que oferece |
|-------|---------------|
| **Básico** | uma forma **simplificada** de distribuir um objeto [[CORBA]] como componente (o essencial para plugar) |
| **Estendido** | recursos mais ricos: **portas** de comunicação (facetas, receptáculos, eventos), atributos e *home* — para componentes mais sofisticados |

> [!note] As "portas" (jeito simples)
> - **Faceta** = uma interface que o componente **oferece** ("eu forneço isto"). → ○
> - **Receptáculo** = uma interface que o componente **precisa** ("eu dependo disto"). → ⊃
> - **Home** = o "gerente de fábrica" que **cria e administra** as instâncias do componente.
>
> É o mesmo papo de [[Interfaces e Contratos]]: oferecido vs. requerido.

## 🗂️ Os 5 modelos do CCM

> [!important] O texto trouxe as descrições; aqui vão com os nomes
> Cada "modelo" cuida de uma etapa da vida do componente.

| # | Modelo | O que define (descrição do material) | Conecta com |
|---|--------|--------------------------------------|-------------|
| 1 | **Abstrato** | os **atributos, portas de comunicação e home** dos componentes | [[Interfaces e Contratos]] |
| 2 | **De Programação** | composto pela **[[CIDL]]** (Component Implementation Definition Language) e pelo **[[CIF]]** (Component Implementation Framework) | [[Implementação de Componentes]] |
| 3 | **De Empacotamento** | como os componentes e suas implementações devem ser **empacotados** | [[Empacotamento de Componentes]] |
| 4 | **De Implantação (Deployment)** | um **mecanismo padrão para instalar** aplicações | [[Distribuição de Componentes]] |
| 5 | **De Execução** | o **ambiente de execução** para as instâncias do componente (os **[[Containers]]**) | [[Ambiente de Componentes]] |

> [!tip] Como decorar
> Pense no **ciclo de vida**: eu **descrevo** o componente (1 abstrato) → **implemento** (2 programação) → **empacoto** (3) → **instalo** (4 deployment) → **rodo** (5 execução). É só seguir do nascimento ao funcionamento.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> O CCM e a Clean Architecture **não são a mesma coisa**, mas se encaixam:
>
> - **CCM** é um **framework de infraestrutura** (a borda externa da Clean Architecture: "frameworks & drivers"). Ele resolve **distribuição, empacotamento, instalação e execução** — tudo **detalhe**, não regra de negócio.
> - O **Modelo Abstrato** (portas: facetas/receptáculos) é o que mais lembra a Clean Architecture: são **interfaces** que separam o que o componente **oferece** do que **requer** — exatamente as fronteiras (boundaries) que mantêm o núcleo desacoplado.
>
> **O cuidado de sempre:** sua regra de negócio não deveria depender do CCM. O CCM fica na **borda**; o núcleo fala só com **interfaces**. Se trocar o CCM te obrigasse a reescrever o domínio, a separação estaria errada.

## 💻 Exemplo em React + TypeScript

As **portas** do CCM (faceta = oferecida, receptáculo = requerida) têm um paralelo direto em TS/React: o que o componente **provê** vs. o que ele **recebe via props** (injeção).

```ts
// FACETA: interface que o componente OFERECE para os outros usarem
export interface ServicoPedido {
  criar(itens: string[]): Promise<string>; // retorna id do pedido
}

// RECEPTÁCULO: interface que o componente PRECISA receber de fora
export interface GatewayPagamento {
  cobrar(pedidoId: string, valor: number): Promise<{ ok: boolean }>;
}
```

```tsx
// O componente React "Checkout" expõe um comportamento (faceta) e
// DEPENDE de um gateway injetado por props (receptáculo) — desacoplado.
function Checkout({ gateway }: { gateway: GatewayPagamento }) {  // ⊃ receptáculo
  async function finalizar() {
    const { ok } = await gateway.cobrar("pedido-123", 50);
    alert(ok ? "Pago!" : "Erro");
  }
  return <button onClick={finalizar}>Finalizar pedido</button>;
}

// "Home" = a fábrica que cria a instância já com suas dependências plugadas
function criarCheckout(gateway: GatewayPagamento) {
  return <Checkout gateway={gateway} />;
}
```

> [!note] A ponte
> `Checkout` **oferece** um comportamento (faceta) e **requer** um `GatewayPagamento` (receptáculo), recebido de fora — igual ao Modelo Abstrato do CCM. A função `criarCheckout` faz o papel do **home** (cria a instância com as dependências prontas).

## 🔗 Relacionados

- [[CORBA]]
- [[Ambiente de Componentes]]
- [[Distribuição de Componentes]]
- [[Empacotamento de Componentes]]
- [[Implementação de Componentes]]
- [[Interfaces e Contratos]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
