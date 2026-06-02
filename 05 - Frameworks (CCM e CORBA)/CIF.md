---
tags:
  - arquitetura-de-sistemas
  - corba
  - ccm
  - frameworks
data: 2026-06-01
status: em-estudo
---

# CIF (Component Implementation Framework)

> [!summary] Resumo
> O CIF lê a [[CIDL]] e gera sozinho o código repetitivo do componente (o esqueleto), cuidando de navegação, ativação e estado. Você só preenche a regra de negócio.

## O que é

O CCM tem muitas interfaces obrigatórias. Escrever tudo na mão seria repetitivo demais. O CIF gera esse esqueleto a partir da descrição da [[CIDL]]. O "encanamento" vem pronto; você completa com a lógica.

> [!note] O que é "esqueleto" (skeleton)
> É o código base que recebe a chamada e já sabe ligar o componente, achar as partes e cuidar do estado. Você não escreve isso, só completa.

## Exemplo do dia a dia

A CIDL é a receita; o CIF é a forma de bolo com a massa pré-pronta. Você não modela cada bolo do zero: coloca na forma padronizada (o esqueleto) e cuida só do recheio (a regra de negócio).

## No código

A ideia de "gerar o esqueleto e você completa" é como um hook que já cuida do trabalho repetido:

```ts
// "esqueleto" gerado: cuida do encanamento (buscar, estado de carregando)
function useRecurso<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    fetch(url).then(r => r.json()).then(d => { setData(d); setCarregando(false); });
  }, [url]);
  return { data, carregando };
}
```

```tsx
// você só completa com a sua parte
function Pedidos() {
  const { data, carregando } = useRecurso<string[]>("/api/pedidos");
  if (carregando) return <p>Carregando…</p>;
  return <ul>{data?.map(p => <li key={p}>{p}</li>)}</ul>;
}
```

## Hoje em dia

CIF é legado, mas "gerar código repetitivo para você focar no que importa" é o pão de cada dia hoje: **scaffolding** (`create-react-app`, `nest g`), **ORMs** que geram acesso ao banco, geração de cliente a partir de **OpenAPI/GraphQL**, e o próprio compilador do TypeScript. Tudo CIF em espírito.

## Comparação com Clean Architecture

O CIF é infraestrutura de borda: gera o encanamento e deixa esses detalhes fora da regra de negócio. Cuidado para sua lógica não passar a depender das classes geradas. Ver [[Clean Architecture]].

## Relacionados

- [[CIDL]]
- [[Framework CCM (CORBA Component Model)]]
- [[Programação Declarativa]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
