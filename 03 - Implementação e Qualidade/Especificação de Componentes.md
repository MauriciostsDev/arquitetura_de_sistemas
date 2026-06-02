---
tags:
  - arquitetura-de-sistemas
  - componentes
  - especificacao
data: 2026-06-01
status: em-estudo
---

# Especificação de Componentes

> [!summary] Resumo
> Especificar é descrever o que o componente deve fazer e que padrões seguir, antes de alguém programar.

## O que é

É o "pedido" que o arquiteto entrega ao desenvolvedor. Costuma dizer: a interface (entradas e saídas), as regras que precisa cumprir e os padrões da empresa (segurança, nomes, formato dos dados).

## Exemplo do dia a dia

A ficha técnica do prato numa cozinha: ingredientes, quantidades, modo de preparo e como deve ficar no fim. Qualquer cozinheiro que siga chega ao mesmo resultado. A especificação faz isso com o componente: qualquer dev que siga produz uma peça que encaixa.

## No código

Especificar é, na prática, definir o contrato e o que é esperado:

```ts
// especificação do componente de frete
interface CalculoFrete {
  // entrada: cep destino | saída: valor em reais
  calcular(cep: string): Promise<number>;
}
// regra combinada: cep inválido deve lançar erro; valor nunca negativo.
```

O desenvolvedor implementa essa interface; o [[Controle da Qualidade]] confere se bateu com o que foi pedido.

## Comparação com Clean Architecture

A especificação é a interface (a fronteira) da Clean Architecture: define o "o quê" sem dizer o "como". Ver [[Clean Architecture]] e [[Interfaces e Contratos]].

## Por que importa

- O dev não precisa adivinhar o que fazer (menos retrabalho).
- Garante o padrão da empresa.
- Dá um critério claro para a qualidade conferir.

## Relacionados

- [[Especificação vs Construção de Componentes]]
- [[Implementação de Componentes]]
- [[Interfaces e Contratos]]
- [[Controle da Qualidade]]

---
*Estudo iniciado em 2026-06-01*
