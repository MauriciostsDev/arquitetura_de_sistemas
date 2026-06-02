---
tags:
  - arquitetura-de-sistemas
  - componentes
  - design
data: 2026-06-02
status: em-estudo
---

# Granularidade de Componentes

> [!summary] Resumo
> Decisão de tamanho: usar peças grandes (fáceis de implantar e substituir) ou peças pequenas (boas para organizar e entender). Nem tudo precisa ser uma peça separada e independente.

## O que é

Existe uma tensão:
- **Grosso (grande)**: bom para **implantar e substituir** — você sobe uma unidade só.
- **Fino (pequeno)**: bom para **projetar e entender** — partes menores, mais claras.

O erro comum é quebrar tudo em pecinhas separadas e independentes quando elas, na verdade, andam sempre juntas. Se duas partes só fazem sentido juntas e conversam o tempo todo, é melhor mantê-las como **uma unidade só** (com partes internas organizadas), em vez de dois componentes isolados.

## Exemplo do dia a dia

Um celular. Internamente tem câmera, tela e bateria (partes bem definidas), mas você compra e troca o celular **como uma unidade**. Não faz sentido vender a câmera como um produto separado que você pluga sozinho — ela só funciona junto com o resto.

## No código

Um módulo que expõe pouca coisa por fora, mas é bem organizado por dentro. As partes internas viajam juntas e não são "trocáveis" sozinhas:

```ts
// pedido/index.ts — a ÚNICA porta pública do módulo (a unidade que você usa/substitui)
export function criarPedido(itens: string[]) {
  const total = calcularTotal(itens); // parte interna
  return salvar({ itens, total });     // parte interna
}

// internos: não exportados; só existem para apoiar o módulo
function calcularTotal(itens: string[]) { return itens.length * 10; }
function salvar(p: { itens: string[]; total: number }) { return { id: "p1", ...p }; }
```

## Hoje em dia

Essa decisão é exatamente o debate atual de **monolito modular x microserviços**: quebrar em muitos serviços pequenos parece "mais arrumado", mas se eles dependem demais uns dos outros, vira dor de cabeça (rede, deploy, falhas). A regra prática moderna: separe em unidades diferentes só o que realmente muda e escala de forma independente; o resto, mantenha junto e organize por dentro.

> [!note] O que joguei fora do material
> O estereótipo `<<subcomp>>` da UML é detalhe acadêmico. O que importa é a decisão de granularidade, que é bem atual.

## Comparação com Clean Architecture

Separar bem por dentro (partes internas organizadas) e expor pouca coisa por fora é a mesma ideia de [[Empacotamento de Componentes|empacotar]] com uma porta pública só. Ver [[Clean Architecture]].

## Relacionados

- [[Empacotamento de Componentes]]
- [[Componentes]]
- [[Acoplamento e Coesão]]

---
*Estudo iniciado em 2026-06-02*
