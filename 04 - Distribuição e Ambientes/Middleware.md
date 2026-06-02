---
tags:
  - arquitetura-de-sistemas
  - distribuicao
  - middleware
data: 2026-06-01
status: em-estudo
---

# Middleware

> [!summary] Resumo
> Middleware é o software que fica no meio e conecta componentes que estão em máquinas ou lugares diferentes.

## O que é

Num sistema distribuído, os componentes não rodam juntos: um no celular, outros em servidores diferentes. O middleware deixa eles se chamarem como se estivessem lado a lado, escondendo onde o outro está, como transportar a mensagem, em que formato os dados vão e regras como segurança e transação.

## Exemplo do dia a dia

No app de delivery, você não fala direto com a cozinha. Existe um intermediário que pega seu pedido, traduz para o formato do restaurante, confere o pagamento e devolve a confirmação. Esse intermediário é o middleware.

## O que ele faz na prática

| Função | Para que serve |
|--------|----------------|
| Comunicação | levar a mensagem de um componente a outro |
| Tradução | converter formatos (ex.: JSON do app para o formato do restaurante) |
| Segurança | só quem está logado pode chamar |
| Transação | se a cobrança falha, o pedido não segue |
| Localização | achar o servidor certo, onde quer que esteja |

## No código

Hoje o middleware mais comum é um cliente de API que esconde a rede de quem usa:

```ts
// quem usa só chama "buscarPedidos"; a rede, o formato e a URL ficam escondidos
class ApiCliente {
  async buscarPedidos(userId: string) {
    const res = await fetch(`https://api.delivery.com/pedidos?user=${userId}`);
    return res.json(); // traduz a resposta para objeto
  }
}
```

## Hoje em dia

"Middleware" continua super atual, com outras roupagens: **API Gateway** (porta de entrada que roteia chamadas), **filas de mensagens** como RabbitMQ e Kafka (componentes trocam mensagens sem falar direto) e **service mesh**. O conceito é o mesmo: algo no meio cuidando da conversa entre serviços.

## Comparação com Clean Architecture

O middleware é detalhe de infraestrutura (borda). A regra de negócio não deveria saber se a chamada vai por REST, fila ou outra coisa — isso fica escondido atrás de uma interface. Ver [[Clean Architecture]].

## Relacionados

- [[Distribuição de Componentes]]
- [[Acoplamento e Coesão]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
