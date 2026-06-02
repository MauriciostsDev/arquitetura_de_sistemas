---
tags:
  - arquitetura-de-sistemas
  - componentes
  - implementacao
  - qualidade
data: 2026-06-01
status: em-estudo
---

# Implementação de Componentes

> [!summary] Resumo
> Implementar é construir de verdade o componente. Quem escreve o código é o programador, seguindo a especificação do arquiteto e com a qualidade conferindo.

## O que é

É a hora em que o desenho vira código. Cada papel faz uma parte:

| Papel | O que faz |
|-------|-----------|
| Desenvolvedor | escreve o código do componente |
| Arquiteto | escreve a especificação e os padrões a seguir |
| Garantia da Qualidade (QA) | define o processo que evita erro durante a construção |
| Controle da Qualidade (QC) | confere o componente pronto |

## Exemplo do dia a dia

Cozinha de restaurante:
- A receita = [[Especificação de Componentes|especificação]] (o arquiteto diz o que fazer e em que padrão).
- O cozinheiro = desenvolvedor (faz o prato).
- As regras de higiene e o passo a passo = [[Garantia da Qualidade]] (evita erro enquanto cozinha).
- O chef provando antes de servir = [[Controle da Qualidade]] (confere o resultado).

O prato só sai se seguiu a receita e passou na prova.

## No código

A especificação vira uma interface; o desenvolvedor implementa cumprindo o contrato:

```ts
// especificação (o arquiteto define o contrato)
interface Cupom {
  aplicar(valor: number): number; // entrada e saída combinadas
}

// implementação (o desenvolvedor escreve)
class CupomDez implements Cupom {
  aplicar(valor: number) {
    return valor * 0.9; // 10% de desconto
  }
}
```

## Comparação com Clean Architecture

A separação "arquiteto define a interface / desenvolvedor implementa" é o coração da Clean Architecture: o contrato manda, a implementação obedece. Ver [[Clean Architecture]].

## Relacionados

- [[Especificação de Componentes]]
- [[Especificação vs Construção de Componentes]]
- [[Garantia da Qualidade]]
- [[Controle da Qualidade]]
- [[Interfaces e Contratos]]

---
*Estudo iniciado em 2026-06-01*
