---
tags:
  - arquitetura-de-sistemas
  - processo
  - gestao
data: 2026-06-02
status: em-estudo
---

# Modelos de Desenvolvimento

> [!summary] Resumo
> São formas de organizar as fases de construção de um software. O mais usado hoje é o iterativo e incremental (base do ágil).

## O que é

Cada modelo organiza de um jeito as fases (requisitos, projeto, código, testes):

| Modelo | Como funciona |
|--------|---------------|
| Cascata | fases em sequência, uma depois da outra, sem voltar atrás |
| Cascata com retroalimentação | igual à cascata, mas pode voltar à fase anterior para corrigir |
| Espiral | ciclos focados em analisar riscos a cada volta |
| Incremental | entrega o sistema em pedaços que vão somando |
| Iterativo e incremental | repete ciclos (iterativo) entregando partes que crescem (incremental) |

A resposta da questão 1 do [[Simulado 1 - Provisionamento e Componentes]] foi **iterativo e incremental**: é o que melhor garante abordar tudo aos poucos, ajustando no caminho.

## Exemplo do dia a dia

Construir uma casa:
- **Cascata**: fechar a planta 100% antes de assentar o primeiro tijolo. Se errou a planta, já era.
- **Iterativo e incremental**: levanta um cômodo, mostra para o dono, ajusta, e parte para o próximo. Vai crescendo e corrigindo.

## Hoje em dia

Hoje domina o **iterativo e incremental** na forma de **ágil** (Scrum, Kanban): entregas curtas, feedback rápido, ajuste constante. A cascata pura virou mais coisa de contrato rígido ou contexto histórico — mas conhecer os modelos ajuda a entender de onde o ágil veio e quando cada um faz sentido.

## No código (analogia com sprints)

Iterativo e incremental, na prática, é entregar em ciclos que somam funcionalidade:

```ts
// cada sprint adiciona um pedaço pronto e utilizável
const sprints = [
  ["login"],                        // entrega 1: já dá pra entrar
  ["login", "catalogo"],            // entrega 2: soma o catálogo
  ["login", "catalogo", "pagamento"], // entrega 3: soma o pagamento
];
// a cada ciclo, mostra para o cliente e ajusta
```

## Relacionados

- [[Grupos de Processos de Projeto]]
- [[Implementação de Componentes]]

---
*Estudo iniciado em 2026-06-02*
