---
tags:
  - arquitetura-de-sistemas
  - componentes
  - design
data: 2026-06-01
status: em-estudo
---

# Acoplamento e Coesão

> [!summary] Resumo
> Coesão: o quanto as partes de dentro de um componente combinam (queremos alta). Acoplamento: o quanto um componente depende dos outros (queremos baixo).

## O que é

- **Acoplamento** = dependência entre componentes. Quanto mais um precisa saber dos detalhes do outro, pior.
- **Coesão** = foco interno. Um componente bom faz uma coisa só, bem feita.

A meta de quase todo bom projeto: **alta coesão e baixo acoplamento**.

## Exemplo do dia a dia

- **Baixo acoplamento** é como peças de Lego: encaixam por um padrão e você troca uma sem desmontar o resto. Se o app de delivery troca o provedor de pagamento, o catálogo de restaurantes nem percebe.
- **Forte acoplamento** é um móvel todo colado: pra trocar uma gaveta, desmonta tudo.
- **Alta coesão**: uma caixa só de parafusadeira. **Baixa coesão**: uma gaveta com chave, talher, pilha e remédio juntos.

## No código

Acoplamento alto (ruim) — a tela conhece a Stripe direto:

```ts
class Tela {
  pagar() {
    const stripe = new Stripe("chave"); // preso à Stripe
    stripe.charge(50);
  }
}
```

Acoplamento baixo (bom) — a tela depende de uma interface, não de quem implementa:

```ts
interface Pagamento {
  cobrar(valor: number): Promise<boolean>;
}

class Tela {
  constructor(private pagamento: Pagamento) {} // recebe de fora
  pagar() {
    return this.pagamento.cobrar(50); // troca o provedor sem mexer aqui
  }
}
```

## Comparação com Clean Architecture

É a mesma ideia: depender de interfaces (abstrações) e não de implementações. Isso é o que mantém o núcleo do sistema solto e fácil de mudar. Ver [[Clean Architecture]].

## Sobre o termo "forte acoplagem" do material

O material de [[Distribuição de Componentes]] fala em "forte acoplagem para a organização". O sentido provável é **integração forte** (tudo conectado e confiável), não dependência rígida entre componentes. Na dúvida, confirme com o professor.

## Relacionados

- [[Interfaces e Contratos]]
- [[Empacotamento de Componentes]]
- [[Distribuição de Componentes]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
