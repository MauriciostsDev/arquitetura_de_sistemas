---
tags:
  - arquitetura-de-sistemas
  - distribuicao
  - middleware
  - corba
data: 2026-06-01
status: em-estudo
---

# CORBA

> [!summary] Em uma frase
> **CORBA** (Common Object Request Broker Architecture) é um padrão antigo de **middleware** que permite objetos em **máquinas e linguagens diferentes** chamarem uns aos outros como se estivessem juntos.

## 🎯 A ideia, bem simples

Imagina um objeto em **Java** num servidor precisando chamar um objeto em **C++** em outro servidor. Eles nem falam a mesma língua, nem estão no mesmo lugar. O CORBA é o **tradutor universal** no meio que faz essa chamada funcionar.

A peça central é o **ORB** (Object Request Broker): ele recebe o pedido, encontra o objeto certo (onde quer que esteja), entrega a chamada e devolve a resposta. Os contratos são escritos numa linguagem neutra, a **IDL** (Interface Definition Language).

> [!note] Onde entra o CCM
> O [[Framework CCM (CORBA Component Model)]] foi construído **em cima** do CORBA: ele pega esses objetos CORBA e os transforma em **componentes** prontos para plugar (com empacotamento, instalação e execução padronizados).

## 🍔 Comparação com o mundo real — intérprete na ONU

Numa reunião da ONU, um delegado fala português e outro fala japonês. Eles não se entendem direto — há **intérpretes** que traduzem em tempo real, e todos seguem um **protocolo** comum de fala. O **ORB** é esse intérprete + protocolo: cada objeto fala sua língua, e o CORBA garante o entendimento.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> CORBA é **middleware** — ou seja, um **detalhe de infraestrutura** (borda externa na Clean Architecture). A regra de negócio **não deveria saber** que a comunicação acontece via CORBA; isso fica escondido atrás de uma [[Interfaces e Contratos|interface]]. Se amanhã trocar CORBA por REST/gRPC, o núcleo não deveria mudar.

## 💻 Exemplo em React + TypeScript

A IDL do CORBA é só um **contrato neutro**. Em TS, o paralelo é definir uma `interface` que esconde **como** a chamada remota acontece:

```ts
// "IDL" em espírito: o contrato, sem dizer se é CORBA, REST ou gRPC por baixo
export interface ServicoEstoque {
  temEstoque(produtoId: string): Promise<boolean>;
}

// a implementação concreta (o "ORB" do mundo real) fica escondida
export class ServicoEstoqueRemoto implements ServicoEstoque {
  async temEstoque(produtoId: string) {
    const res = await fetch(`/api/estoque/${produtoId}`);
    return (await res.json()).disponivel;
  }
}
```

## ⏳ Contexto histórico

CORBA foi muito usado nos anos 1990/2000 para integração corporativa. Hoje é considerado **legado** — foi largamente substituído por **REST, gRPC e mensageria**. Mas o **conceito** (objetos remotos conversando via um intermediário padronizado) segue vivo e é a base para entender o [[Framework CCM (CORBA Component Model)|CCM]].

## 🔗 Relacionados

- [[Framework CCM (CORBA Component Model)]]
- [[Middleware]]
- [[Distribuição de Componentes]]
- [[Interfaces e Contratos]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
