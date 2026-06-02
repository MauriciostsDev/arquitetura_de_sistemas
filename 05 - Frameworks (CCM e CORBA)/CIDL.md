---
tags:
  - arquitetura-de-sistemas
  - corba
  - ccm
  - declarativo
data: 2026-06-01
status: em-estudo
---

# CIDL (Component Implementation Definition Language)

> [!summary] Resumo
> CIDL é a linguagem do [[Framework CCM (CORBA Component Model)|CCM]] onde você descreve como o componente se comporta e guarda estado. A partir dela, o [[CIF]] gera o código repetitivo.

## O que é

Em vez de escrever na mão o esqueleto do componente (como ele liga, navega, guarda estado), você **descreve** isso num arquivo CIDL. É um formulário: você preenche o que o componente é, e a ferramenta gera o resto. É [[Programação Declarativa|declarativo]].

## As 4 categorias (por como lidam com estado)

| Categoria | Estado | Exemplo no dia a dia |
|-----------|--------|----------------------|
| Service | sem memória (stateless) | calculadora de frete: manda CEP, recebe valor, esquece |
| Session | lembra durante a conversa | carrinho enquanto você escolhe (some no fim) |
| Process | durável, mas sem identidade pública | pedido sendo processado (cobrar, separar, despachar) |
| Entity | durável e com chave (identidade) | Pedido nº 123 salvo no banco, dá pra buscar depois |

## No código

As categorias batem quase 1:1 com como você lida com estado no React:

```tsx
// Service (sem estado): componente puro
const Frete = ({ cep }: { cep: string }) => <span>Frete para {cep}</span>;

// Session (estado temporário): some no refresh
function Carrinho() {
  const [itens, setItens] = useState<string[]>([]);
  return <button onClick={() => setItens([...itens, "Pizza"])}>Add ({itens.length})</button>;
}

// Entity (estado salvo, com id): existe no banco
async function salvarPedido(pedido: { id: string; itens: string[] }) {
  await fetch(`/api/pedidos/${pedido.id}`, { method: "PUT", body: JSON.stringify(pedido) });
}
```

## Hoje em dia

A linguagem CIDL em si é legado (foi com o CCM). Mas a ideia de **descrever o componente num arquivo e deixar a ferramenta gerar o código** está em todo lugar hoje: **decorators** (NestJS, TypeORM), **anotações** do Spring, arquivos **YAML** do Kubernetes, **schema** do Prisma. Você declara, a ferramenta gera. Mesmo espírito.

## Comparação com Clean Architecture

Atenção a uma pegadinha: a **"Entity" do CCM** é categoria técnica (ligada a banco/chave), enquanto a **"Entidade" da Clean Architecture** é regra de negócio pura, sem saber de banco. Mesmo nome, propósito diferente. Ver [[Clean Architecture]].

## Relacionados

- [[CIF]]
- [[Framework CCM (CORBA Component Model)]]
- [[Programação Declarativa]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
