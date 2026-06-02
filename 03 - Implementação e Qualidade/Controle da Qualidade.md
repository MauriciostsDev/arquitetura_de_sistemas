---
tags:
  - arquitetura-de-sistemas
  - qualidade
  - inspecao
data: 2026-06-01
status: em-estudo
---

# Controle da Qualidade

> [!summary] Resumo
> Controle da Qualidade (QC) cuida do produto pronto: confere se o componente ficou como foi pedido.

## O que é

QC entra **depois** que o componente fica pronto. A pergunta é "o que ficou pronto está bom?". Compara o resultado real com a [[Especificação de Componentes|especificação]] e aprova ou reprova.

A diferença que cai em prova: **QC é corretiva (olha o produto); [[Garantia da Qualidade|QA]] é preventiva (olha o processo)**.

## Exemplo do dia a dia

O chef provando o prato antes de servir: confere tempero, ponto e aparência. Se não está bom, volta pra cozinha. No app de delivery, é a conferência do pedido antes de fechar a sacola: itens certos, embalagem ok.

## No código

QC é checar o pronto contra o esperado. Um teste que valida a saída final:

```ts
import { calcularFrete } from "./frete";

test("frete para CEP conhecido bate com o esperado", async () => {
  const valor = await calcularFrete("01001-000");
  expect(valor).toBe(12.5); // compara o resultado real com o especificado
});
```

## Por que importa

- Impede que peça defeituosa chegue no resto do sistema.
- Dá um critério claro: aprovado ou reprovado.
- Fecha o ciclo da qualidade junto com a [[Garantia da Qualidade]].

## Relacionados

- [[Garantia da Qualidade]]
- [[Especificação de Componentes]]
- [[Implementação de Componentes]]

---
*Estudo iniciado em 2026-06-01*
