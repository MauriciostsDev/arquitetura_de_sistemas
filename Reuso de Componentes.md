---
tags:
  - arquitetura-de-sistemas
  - componentes
  - reuso
data: 2026-06-01
status: em-estudo
---

# Reuso de Componentes

> [!summary] Em uma frase
> **Reusar** é aproveitar um componente que **já existe** em vez de construir um novo — e construir os novos de um jeito que **eles também possam ser reaproveitados** depois.

## 🎯 A ideia, bem simples

Por que escrever de novo algo que já está pronto e funcionando? Reuso é isso: **não reinventar a roda**. O arquiteto, ao desenhar um sistema novo:

1. lista os componentes necessários,
2. **pega emprestado** tudo que já existe,
3. só manda **construir o que falta**,
4. e deixa esse novo componente **pronto para o próximo projeto reusar**.

## 🍔 Comparação com o mundo real — receita de bolo

Você não planta o trigo nem cria a galinha pra fazer um bolo: você **compra farinha e ovos** (componentes prontos) e só faz a parte que é sua — a montagem. Reuso de software é igual: aproveitar o que já existe e focar no que é exclusivo do seu projeto.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> A Clean Architecture **não fala "reuse"** com essa palavra, mas ela **habilita o reuso**: ao manter a **regra de negócio independente** de banco, framework e APIs externas, o seu núcleo vira um componente **portável** — dá pra reaproveitar o mesmo núcleo numa API, num app mobile ou num site.
>
> **Diferença:** "reuso de componentes" é o **objetivo/prática** (aproveitar peças); a Clean Architecture é **uma forma de organizar** que torna o reuso possível (peças desacopladas reusam fácil; peças grudadas, não — ver [[Acoplamento e Coesão]]).

## 💻 Exemplo em React + TypeScript

Um hook reutilizável: a lógica de "formatar dinheiro" vira um componente de uso geral, reaproveitado em qualquer tela.

```ts
// utilitário reutilizável — escrito uma vez, usado em todo o sistema
export function formatarBRL(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
```

```tsx
// qualquer componente reusa, sem reimplementar a formatação
import { formatarBRL } from "./formatarBRL";

function ItemCarrinho({ nome, preco }: { nome: string; preco: number }) {
  return <li>{nome} — {formatarBRL(preco)}</li>;
}
```

> [!tip] Sinal de bom reuso
> Se você se pegou copiando e colando a mesma lógica em 3 lugares, provavelmente ali deveria existir **um componente reutilizável**.

## ✅ Por que importa

- **Menos esforço e custo**: não se constrói o que já existe.
- **Menos bugs**: componente reusado já foi testado em outros lugares.
- **Padronização**: todo mundo usa a mesma peça, do mesmo jeito.

## 🔗 Relacionados

- [[Componentes]]
- [[Clean Architecture]]
- [[Empacotamento de Componentes]]
- [[Acoplamento e Coesão]]

---
*Estudo iniciado em 2026-06-01*
