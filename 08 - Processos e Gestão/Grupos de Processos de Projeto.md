---
tags:
  - arquitetura-de-sistemas
  - processo
  - gestao
data: 2026-06-02
status: em-estudo
---

# Grupos de Processos de Projeto

> [!summary] Resumo
> São as 5 fases pelas quais um projeto passa: Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento.

## O que é

A gestão de projetos (modelo clássico, estilo PMBOK) agrupa o trabalho em 5 grupos:

| Grupo | O que acontece |
|-------|----------------|
| Iniciação | abre o projeto (o "termo de abertura") e define o objetivo |
| Planejamento | planeja escopo, prazo, custo, qualidade |
| Execução | faz o trabalho de fato |
| Monitoramento e Controle | acompanha, compara com o plano e corrige |
| Encerramento | fecha o projeto e registra o aprendizado |

A resposta da questão 10 do [[Simulado 1 - Provisionamento e Componentes]]: **desenvolver o termo de abertura = Iniciação** (é o ponto de partida).

## Exemplo do dia a dia

Organizar uma festa:
- Iniciação: decidir que vai ter festa e por quê.
- Planejamento: lista de convidados, orçamento, data.
- Execução: comprar, decorar, cozinhar.
- Monitoramento e Controle: ver se está saindo conforme o plano e ajustar.
- Encerramento: limpar, pagar contas, ver o que deu certo para a próxima.

## No código (só para fixar a ordem)

```ts
enum GrupoDeProcesso {
  Iniciacao,        // 1 - abre (termo de abertura)
  Planejamento,     // 2 - planeja
  Execucao,         // 3 - faz
  MonitoramentoControle, // 4 - acompanha e corrige
  Encerramento,     // 5 - fecha
}
```

## Hoje em dia

Esse modelo é o tradicional. Em muitos times de software hoje se usa **ágil (Scrum)**, onde essas fases não são uma sequência única: viram ciclos curtos que se repetem (cada sprint planeja, executa, monitora e fecha um pedaço). Mas os grupos continuam caindo em prova e ajudam a organizar qualquer projeto, mesmo fora de software.

## Relacionados

- [[Modelos de Desenvolvimento]]
- [[Implementação de Componentes]]

---
*Estudo iniciado em 2026-06-02*
