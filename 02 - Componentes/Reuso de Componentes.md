---
tags:
  - arquitetura-de-sistemas
  - componentes
  - reuso
data: 2026-06-01
status: em-estudo
---

# Reuso de Componentes

> [!summary] Resumo
> Reusar é aproveitar o que já existe em vez de fazer de novo, e construir o novo de um jeito que dê para reaproveitar depois.

## O que é

Não reinventar a roda. Ao montar um sistema novo: liste o que precisa, pegue emprestado tudo que já existe, construa só o que falta e deixe esse novo pronto para o próximo projeto usar.

## Exemplo do dia a dia

Para fazer um bolo, você não planta o trigo nem cria a galinha: compra farinha e ovos prontos e faz só a montagem. Software igual: aproveita o pronto e foca no que é seu.

## No código

Uma função de formatar dinheiro escrita uma vez e usada em todo lugar:

```ts
// escrito uma vez
export function formatarBRL(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
```

```tsx
// reusado em qualquer tela, sem reescrever
import { formatarBRL } from "./formatarBRL";

function ItemCarrinho({ nome, preco }: { nome: string; preco: number }) {
  return <li>{nome} — {formatarBRL(preco)}</li>;
}
```

Dica: se você copiou e colou a mesma lógica em 3 lugares, ali deveria ter um componente reutilizável.

## Comparação com Clean Architecture

A Clean Architecture facilita o reuso: como a regra de negócio não depende de banco nem framework, dá para usar o mesmo núcleo numa API, num app e num site. Peças soltas reusam fácil; peças grudadas, não. Ver [[Clean Architecture]] e [[Acoplamento e Coesão]].

## Por que importa

- Menos esforço e custo (não refaz o que existe).
- Menos bugs (a peça já foi testada antes).
- Padronização (todo mundo usa a mesma peça).

## Relacionados

- [[Componentes]]
- [[Interação com Sistemas Existentes]]
- [[Empacotamento de Componentes]]
- [[Acoplamento e Coesão]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
