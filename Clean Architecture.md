---
tags:
  - arquitetura-de-sistemas
  - clean-architecture
  - design
data: 2026-06-01
status: em-estudo
---

# Clean Architecture

> [!summary] Em uma frase
> **Clean Architecture** (de Robert C. Martin, o "Uncle Bob") é um jeito de organizar o código em **camadas**, mantendo a **regra de negócio no centro** e os **detalhes** (banco, framework, telas, APIs) na **borda** — com as dependências sempre apontando **para dentro**.

> [!note] Por que esta nota existe
> No vault, **sempre** comparamos os conceitos de arquitetura com a Clean Architecture. Esta é a nota de referência para esses links.

## 🎯 A ideia, bem simples

O coração do seu sistema (as **regras do negócio**) não deveria depender de **detalhes que mudam**: qual banco de dados, qual framework, qual tela, qual API externa. Esses detalhes devem ser **plugáveis** — trocáveis sem afetar o núcleo.

A regra principal é **A Regra da Dependência**: as setas de dependência apontam **de fora para dentro**. O núcleo não conhece o mundo externo; o mundo externo é que conhece o núcleo.

```
   ┌─────────────────────────────────────────────┐
   │  Frameworks & Drivers (UI, DB, Web, APIs)    │  ← detalhes, borda
   │   ┌───────────────────────────────────────┐  │
   │   │  Adaptadores (controllers, gateways)   │  │
   │   │   ┌─────────────────────────────────┐  │  │
   │   │   │  Casos de Uso (regras do app)    │ │  │
   │   │   │   ┌───────────────────────────┐  │ │  │
   │   │   │   │  Entidades (regras puras)  │ │ │  │
   │   │   │   └───────────────────────────┘  │ │  │
   │   │   └─────────────────────────────────┘  │  │
   │   └───────────────────────────────────────┘  │
   └─────────────────────────────────────────────┘
        dependências apontam SEMPRE para dentro →
```

## 🍔 Comparação com o mundo real — um restaurante

- **Entidades / Casos de uso** = a **receita e o modo de cozinhar** (o que faz o restaurante ser ele mesmo). Não muda se você troca o fornecedor.
- **Detalhes (borda)** = o **fornecedor de ingredientes, o fogão, o sistema de caixa**. Dá pra trocar o fornecedor sem mudar a receita.

Se trocar o fogão (banco de dados) te obriga a reescrever a receita (regra de negócio), a arquitetura está **errada**.

## 🔗 Como se conecta com as outras notas do vault

| Conceito do vault | Relação com a Clean Architecture |
|-------------------|----------------------------------|
| [[Interfaces e Contratos]] | é o mecanismo central: o núcleo define a interface, a borda implementa |
| [[Acoplamento e Coesão]] | a Regra da Dependência = baixo acoplamento e núcleo coeso |
| [[Empacotamento de Componentes]] | empacotar por função ≈ separar por camada/responsabilidade |
| [[Componentes]] | SGBD, hardware e apps comerciais = os "detalhes" da borda |
| [[Reuso de Componentes]] | núcleo independente de detalhes → reusável em vários contextos |

## 💻 Exemplo em React + TypeScript

O núcleo (caso de uso) **não conhece** a API nem o React. Ele só conhece uma **interface**. O detalhe (fetch) é plugado na borda.

```ts
// NÚCLEO — regra de negócio, não sabe o que é HTTP nem React
export interface RepositorioPedidos {
  buscarPorUsuario(userId: string): Promise<Pedido[]>;
}

export class ListarPedidosDoUsuario {
  constructor(private repo: RepositorioPedidos) {} // depende da INTERFACE
  executar(userId: string) {
    return this.repo.buscarPorUsuario(userId);
  }
}
```

```tsx
// BORDA — detalhe plugável: implementa a interface usando fetch
export class RepositorioPedidosHttp implements RepositorioPedidos {
  async buscarPorUsuario(userId: string) {
    const res = await fetch(`/api/pedidos?user=${userId}`);
    return res.json();
  }
}

// A tela injeta o detalhe no núcleo. Trocar HTTP por mock/GraphQL não afeta a regra.
function MeusPedidos({ userId }: { userId: string }) {
  const caso = new ListarPedidosDoUsuario(new RepositorioPedidosHttp());
  // ...usa caso.executar(userId) e renderiza...
  return <div>Lista de pedidos…</div>;
}
```

## 🔗 Relacionados

- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Empacotamento de Componentes]]
- [[Componentes]]
- [[Reuso de Componentes]]

---
*Estudo iniciado em 2026-06-01*
