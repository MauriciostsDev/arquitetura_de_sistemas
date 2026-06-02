---
tags:
  - arquitetura-de-sistemas
  - qualidade
  - processo
data: 2026-06-01
status: em-estudo
---

# Garantia da Qualidade

> [!summary] Resumo
> Garantia da Qualidade (QA) cuida do processo: define o jeito de trabalhar que evita o erro antes dele acontecer.

## O que é

QA olha para o **processo**, não para o produto pronto. A pergunta é "estamos construindo do jeito certo?". Na prática: revisão de código, padrões de escrita, testes automáticos, definição do que é "pronto". Tudo para o erro ser raro desde o começo.

A diferença que cai em prova: **QA é preventiva (processo); [[Controle da Qualidade|QC]] é corretiva (produto pronto)**.

## Exemplo do dia a dia

As regras de higiene e o passo a passo da cozinha: lavar as mãos, conferir validade, seguir a ordem. Existem para o prato sair certo na origem, antes de qualquer prova.

## No código

QA aparece como automações que rodam durante o trabalho. Exemplo de um teste que faz parte do processo:

```ts
import { aplicarDesconto } from "./desconto";

test("desconto de 10% em 100 vira 90", () => {
  expect(aplicarDesconto(100, 0.1)).toBe(90);
});
// rodar testes a cada commit é uma prática de garantia da qualidade
```

## Por que importa

- Evita o erro na fonte, em vez de caçar depois.
- Deixa tudo consistente (mesmo padrão).
- Sai mais barato: prevenir custa menos que corrigir.

## Relacionados

- [[Controle da Qualidade]]
- [[Implementação de Componentes]]
- [[Especificação de Componentes]]

---
*Estudo iniciado em 2026-06-01*
