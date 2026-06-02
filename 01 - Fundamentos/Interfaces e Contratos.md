---
tags:
  - arquitetura-de-sistemas
  - componentes
  - design
data: 2026-06-01
status: em-estudo
---

# Interfaces e Contratos

> [!summary] Resumo
> Interface é a lista do que um componente oferece para os outros usarem, sem mostrar como faz por dentro. É um contrato.

## O que é

A interface diz **o que** o componente entrega (entradas e saídas). É a única parte que os outros enxergam; o resto fica escondido. Enquanto o contrato não muda, quem oferece e quem usa podem evoluir cada um do seu jeito.

## Exemplo do dia a dia

O cardápio do restaurante. Ele lista o que você pode pedir (pizza, refrigerante). Você pede pelo nome e recebe o prato, sem saber como a cozinha prepara. Se o restaurante trocar o forno ou a receita, o cardápio continua igual e você continua pedindo do mesmo jeito.

## No código

A interface é o contrato; quem implementa cumpre. Dá pra ter várias implementações:

```ts
interface Pagamento {
  cobrar(pedidoId: string, valor: number): Promise<boolean>;
}

class PagamentoStripe implements Pagamento {
  cobrar(pedidoId: string, valor: number) {
    return Promise.resolve(true); // usa a Stripe por dentro
  }
}

class PagamentoFake implements Pagamento {
  cobrar() {
    return Promise.resolve(true); // versão para testes
  }
}
```

Quem usa só conhece `Pagamento`. Trocar Stripe por outro provedor não quebra nada.

## Comparação com Clean Architecture

Interface é a peça central da Clean Architecture: o núcleo define a interface e a borda (banco, API, framework) implementa. Por isso dá pra trocar a borda sem tocar no núcleo. Ver [[Clean Architecture]].

## Sobre as "bolinhas e soquetes" dos diagramas

Em diagramas UML de componentes aparecem dois símbolos: a bolinha (o) é a interface **fornecida** ("eu ofereço isto") e o soquete (semicírculo) é a interface **requerida** ("eu preciso disto"). Eles se encaixam: um componente oferece, o outro consome.

## Relacionados

- [[Abstração]]
- [[Múltiplas Interfaces]]
- [[Princípio de Substituição de Liskov]]
- [[Acoplamento e Coesão]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
