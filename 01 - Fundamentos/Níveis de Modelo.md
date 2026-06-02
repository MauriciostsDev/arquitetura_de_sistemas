---
tags:
  - arquitetura-de-sistemas
  - modelagem
  - fundamentos
data: 2026-06-02
status: em-estudo
---

# Níveis de Modelo

> [!summary] Resumo
> São os níveis de um modelo, do mais abstrato (o problema) ao mais concreto (o código). Cada nível esconde mais detalhe que o anterior.

## O que é

Você descreve o sistema em camadas de abstração, do "o quê" puro até o "como" real:

| Nível | O que descreve |
|-------|----------------|
| Conceitual | o problema a resolver, sem tecnologia nenhuma |
| Especificação | o que o sistema deve fazer (contratos, interfaces) |
| Projeto (design) | como vai ser feito (decisões técnicas) |
| Implementação | o código de verdade |

O **Modelo Conceitual** é o mais independente de tecnologia: ele representa só o problema. (Foi a resposta da questão 2 do [[Simulado 1 - Provisionamento e Componentes]].)

## Exemplo do dia a dia

Fazer um bolo:
- Conceitual: "quero um bolo de chocolate".
- Especificação: a receita (ingredientes e passos, o resultado esperado).
- Projeto: escolher a forma, o forno, a marca dos ingredientes.
- Implementação: cozinhar de verdade.

## No código

A passagem da especificação para a implementação é a mesma de [[Especificação vs Construção de Componentes]]:

```ts
// nível de ESPECIFICAÇÃO: o contrato (o que faz)
interface Carrinho {
  total(): number;
}

// nível de IMPLEMENTAÇÃO: o código real (como faz)
class CarrinhoSimples implements Carrinho {
  constructor(private itens: number[]) {}
  total() { return this.itens.reduce((a, b) => a + b, 0); }
}
```

## Comparação com Clean Architecture

Os níveis batem com a ideia de manter o conceitual/especificação (regra de negócio) separados da implementação (detalhe). O conceitual é o mais "para dentro"; a implementação é a borda. Ver [[Clean Architecture]] e [[Abstração]].

## Relacionados

- [[Abstração]]
- [[Especificação vs Construção de Componentes]]
- [[Interfaces e Contratos]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-02*
