---
tags:
  - arquitetura-de-sistemas
  - clean-architecture
  - design
data: 2026-06-01
status: em-estudo
---

# Clean Architecture

> [!summary] Resumo
> Jeito de organizar o código em camadas: a regra de negócio no centro e os detalhes (banco, framework, tela, API) na borda. As dependências sempre apontam para dentro.

> [!note] Para que serve esta nota
> No vault a gente sempre compara os conceitos com a Clean Architecture. Esta é a nota de referência desses links.

## O que é

O coração do sistema (as regras do negócio) não deveria depender de coisas que mudam: qual banco, qual framework, qual tela. Esses detalhes ficam na borda e devem ser trocáveis sem afetar o centro.

A regra principal (Regra da Dependência): as setas apontam de fora para dentro. O núcleo não conhece a borda; a borda é que conhece o núcleo.

## Exemplo do dia a dia

Um restaurante:
- A **receita e o modo de cozinhar** = regra de negócio (o que faz o restaurante ser ele mesmo).
- O **fornecedor, o fogão e o sistema de caixa** = detalhes da borda (dá pra trocar sem mudar a receita).

Se trocar o fogão (o banco de dados) te obriga a reescrever a receita (a regra de negócio), a arquitetura está errada.

## No código

O núcleo conhece só uma interface; o detalhe (fetch) é plugado na borda:

```ts
// núcleo: não sabe o que é HTTP nem React
interface RepositorioPedidos {
  buscarPorUsuario(userId: string): Promise<string[]>;
}

class ListarPedidos {
  constructor(private repo: RepositorioPedidos) {} // depende da interface
  executar(userId: string) {
    return this.repo.buscarPorUsuario(userId);
  }
}
```

```ts
// borda: implementa a interface usando fetch
class RepositorioPedidosHttp implements RepositorioPedidos {
  async buscarPorUsuario(userId: string) {
    const res = await fetch(`/api/pedidos?user=${userId}`);
    return res.json();
  }
}

// trocar fetch por um fake (em teste) não muda o núcleo
const caso = new ListarPedidos(new RepositorioPedidosHttp());
```

## Hoje em dia

Clean Architecture é atual e muito usada, principalmente em sistemas que vão durar e crescer. As mesmas ideias aparecem com outros nomes: Arquitetura Hexagonal (Ports & Adapters) e Onion Architecture. A essência é sempre a mesma: regra de negócio no centro, detalhes plugáveis na borda.

## Como se liga ao resto do vault

| Conceito | Relação |
|----------|---------|
| [[Interfaces e Contratos]] | é o mecanismo central: núcleo define, borda implementa |
| [[Acoplamento e Coesão]] | a Regra da Dependência = baixo acoplamento |
| [[Componentes]] | banco, hardware e apps comerciais são os "detalhes" da borda |
| [[Reuso de Componentes]] | núcleo independente vira reusável |

## Relacionados

- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Empacotamento de Componentes]]
- [[Componentes]]

---
*Estudo iniciado em 2026-06-01*
