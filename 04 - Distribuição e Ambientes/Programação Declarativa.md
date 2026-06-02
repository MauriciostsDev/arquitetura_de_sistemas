---
tags:
  - arquitetura-de-sistemas
  - paradigma
  - frameworks
data: 2026-06-01
status: em-estudo
---

# Programação Declarativa

> [!summary] Resumo
> Declarativo é dizer o que você quer e deixar o framework descobrir como fazer. Imperativo é escrever o passo a passo na mão.

## O que é

- **Imperativo**: você dá a receita passo a passo ("faça isso, depois aquilo").
- **Declarativo**: você diz o resultado ("quero isto pronto") e o framework resolve os passos.

Em componentes, isso aparece como anotar o que a peça precisa (`@Transacional`, `@RequerLogin`) e deixar o ambiente cuidar. Ver [[Ambiente de Componentes]].

## Exemplo do dia a dia

GPS. No imperativo você diz cada conversão ("vire à direita, siga 200m"). No declarativo você diz só o destino ("Aeroporto") e o GPS acha o caminho. Você cuida do destino, não do trajeto.

## No código

React é o exemplo mais claro: você declara como a tela deve ficar, sem mandar criar/remover elementos:

```tsx
// declarativo: "se carregando, mostre isto; senão, mostre a lista"
function ListaPedidos({ carregando, pedidos }: { carregando: boolean; pedidos: string[] }) {
  return carregando
    ? <p>Carregando…</p>
    : <ul>{pedidos.map(p => <li key={p}>{p}</li>)}</ul>;
}
```

Versão imperativa (na mão) seria criar cada `<li>` com `document.createElement` e controlar tudo.

## Hoje em dia

O estilo declarativo é o padrão do desenvolvimento atual: **React** (telas), **SQL** (você pede o resultado, o banco acha o caminho), **Terraform** (você declara a infraestrutura desejada), **CSS**. Saber a diferença ajuda a escolher a ferramenta certa.

## Comparação com Clean Architecture

O declarativo ajuda a manter a regra de negócio limpa (a infra vira anotação na borda). Cuidado: anotações de um framework no coração do domínio prendem o núcleo ao framework. Use perto da borda. Ver [[Clean Architecture]].

## Relacionados

- [[Ambiente de Componentes]]
- [[Serviços de Infraestrutura]]
- [[Abstração]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
