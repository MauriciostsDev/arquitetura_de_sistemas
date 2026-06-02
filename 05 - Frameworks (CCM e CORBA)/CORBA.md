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

> [!summary] Resumo
> CORBA é um padrão antigo de [[Middleware|middleware]] que deixava objetos em máquinas e linguagens diferentes se chamarem como se estivessem juntos.

## O que é

Imagine um objeto em Java num servidor precisando chamar um objeto em C++ em outro. Línguas diferentes, lugares diferentes. O CORBA era o tradutor universal no meio. A peça central é o **ORB**: recebe o pedido, acha o objeto certo, entrega a chamada e devolve a resposta. Os contratos eram escritos numa linguagem neutra, a **IDL**.

## Exemplo do dia a dia

Reunião da ONU: um fala português, outro japonês. Os **intérpretes** traduzem em tempo real e todos seguem um protocolo de fala. O ORB é esse intérprete: cada objeto fala sua língua e o CORBA garante o entendimento.

## No código

A IDL era só um contrato neutro. Hoje, em TS, o equivalente é uma interface que esconde como a chamada remota acontece:

```ts
// contrato, sem dizer se por baixo é CORBA, REST ou gRPC
interface ServicoEstoque {
  temEstoque(produtoId: string): Promise<boolean>;
}

class ServicoEstoqueRemoto implements ServicoEstoque {
  async temEstoque(produtoId: string) {
    const res = await fetch(`/api/estoque/${produtoId}`);
    return (await res.json()).disponivel;
  }
}
```

## Hoje em dia

CORBA é legado, dos anos 1990/2000, e quase não aparece em sistema novo. Foi substituído por **REST**, **gRPC** (que é o parente direto e moderno do CORBA), **GraphQL** e **filas de mensagens**. Mas a ideia central — objetos/serviços remotos conversando por um intermediário com contrato definido — é exatamente o que você usa hoje ao chamar uma API. Entender CORBA ajuda a entender de onde isso tudo veio e o [[Framework CCM (CORBA Component Model)|CCM]].

## Comparação com Clean Architecture

CORBA é detalhe de infraestrutura (borda). A regra de negócio não deveria saber que a chamada vai por CORBA; isso fica atrás de uma interface. Trocar CORBA por gRPC não deveria mexer no núcleo. Ver [[Clean Architecture]].

## Relacionados

- [[Framework CCM (CORBA Component Model)]]
- [[Middleware]]
- [[Distribuição de Componentes]]
- [[Interfaces e Contratos]]

---
*Estudo iniciado em 2026-06-01*
