---
tags:
  - arquitetura-de-sistemas
  - design
  - solid
data: 2026-06-02
status: em-estudo
---

# Princípio de Substituição de Liskov

> [!summary] Resumo
> Se um tipo B "é um" tipo A, então usar B no lugar de A não pode quebrar nada. O substituto tem que cumprir todas as promessas do original.

## O que é

É o "L" do SOLID. Quando um subtipo herda/implementa um tipo, ele tem que se comportar do jeito que quem usa o tipo pai espera. Regra prática (a parte que o material cita):

- A subclasse pode **aceitar mais** entradas que a pai (afrouxar a pré-condição), nunca exigir mais.
- A subclasse pode **garantir mais** no resultado (apertar a pós-condição), nunca entregar menos.

Assim, quem confia nas garantias do tipo pai nunca é surpreendido pelo filho.

## Exemplo do dia a dia

Você aluga um carro e te dão um modelo "equivalente". Esse substituto tem que fazer tudo que o original fazia: andar, frear, ter ar. Se o substituto não freia, ele quebrou a promessa. O clássico em código: uma função espera um "Pássaro que voa" e alguém passa um "Pinguim" (que não voa) — o pinguim não serve de substituto ali.

## No código

A função usa o tipo pai e tem que funcionar com qualquer filho:

```ts
interface Pagamento {
  cobrar(valor: number): Promise<boolean>; // promessa: tenta cobrar e diz se deu certo
}

class PagamentoCartao implements Pagamento {
  async cobrar(valor: number) { return valor > 0; }
}

// QUEBRA Liskov: lança erro em vez de cumprir a promessa de devolver true/false
class PagamentoQuebrado implements Pagamento {
  async cobrar(): Promise<boolean> { throw new Error("não implementado"); }
}

// quem usa confia na promessa do tipo Pagamento:
async function finalizar(p: Pagamento) {
  const ok = await p.cobrar(50); // com PagamentoQuebrado, estoura aqui -> surpresa ruim
  return ok;
}
```

## Por que importa (na prática)

- Evita o bug clássico de "criei uma subclasse e o sistema quebrou em outro lugar".
- É a base para confiar em interfaces: se todo mundo respeita o contrato, você troca implementações sem medo.

## Comparação com Clean Architecture

A Clean Architecture só funciona se os substitutos respeitarem Liskov: você troca o banco real por um fake nos testes confiando que ambos cumprem a mesma interface. Se o fake mente, a troca quebra. Ver [[Clean Architecture]] e [[Interfaces e Contratos]].

## Relacionados

- [[Interfaces e Contratos]]
- [[Múltiplas Interfaces]]
- [[Acoplamento e Coesão]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-02*
