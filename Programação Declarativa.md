---
tags:
  - arquitetura-de-sistemas
  - paradigma
  - frameworks
data: 2026-06-01
status: em-estudo
---

# Programação Declarativa

> [!summary] Em uma frase
> Programar **declarativamente** é dizer **o quê** você quer e deixar o framework descobrir **como** fazer — em vez de escrever passo a passo na mão (imperativo).

## 🎯 A ideia, bem simples

- **Imperativo** = você dá **a receita passo a passo**: "faça isso, depois aquilo, depois aquilo outro".
- **Declarativo** = você diz **o resultado desejado**: "quero isto pronto" — e quem resolve os passos é o framework/ambiente.

No contexto de componentes, isso aparece como **"programação baseada em atributo"**: você **marca/anota** o que um componente precisa (ex.: `@Transacional`, `@RequerLogin`) e o ambiente cuida do resto. Ver [[Ambiente de Componentes]] e [[Serviços de Infraestrutura]].

## 🍔 Comparação com o mundo real — táxi vs. GPS

- **Imperativo:** você dá ao motorista **cada conversão**: "vire à direita, siga 200m, vire à esquerda…".
- **Declarativo:** você diz só **o destino** ("Aeroporto") e o GPS/motorista resolve o caminho.

Declarativo = você cuida do **destino**, não do trajeto.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> O estilo declarativo **ajuda** a manter a regra de negócio limpa: detalhes de infraestrutura viram **anotações na borda**, não código no meio do domínio. **Cuidado:** se as anotações forem de um framework específico e estiverem no coração do domínio, o núcleo passa a depender do framework — o oposto do que a Clean Architecture quer. Use o declarativo perto da **borda**.

## 💻 Exemplo em React + TypeScript

React é o exemplo mais didático de declarativo: você **declara a UI** em função do estado, sem manipular o DOM na mão.

```tsx
// DECLARATIVO: "quando 'carregando', mostre isto; senão, mostre a lista".
// Você não manda criar/remover elementos — só declara o resultado.
function ListaPedidos({ carregando, pedidos }: { carregando: boolean; pedidos: string[] }) {
  return carregando
    ? <p>Carregando…</p>
    : <ul>{pedidos.map(p => <li key={p}>{p}</li>)}</ul>;
}
```

## ✅ Por que importa

- Código mais **limpo e curto** (menos passos manuais).
- **Menos erros** de bastidor (o framework já resolve transação, render, etc.).
- Separa **o quê** (sua intenção) do **como** (o mecanismo) — puro [[Abstração|abstração]].

## 🔗 Relacionados

- [[Ambiente de Componentes]]
- [[Serviços de Infraestrutura]]
- [[Abstração]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
