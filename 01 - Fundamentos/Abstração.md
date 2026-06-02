---
tags:
  - arquitetura-de-sistemas
  - componentes
  - conceitos
data: 2026-06-01
status: em-estudo
---

# Abstração

> [!summary] Resumo
> Abstrair é olhar só para o que uma coisa faz e ignorar como ela faz por dentro.

## O que é

Você usa algo sem precisar saber como funciona lá dentro. Quem usa vê o resultado; os detalhes ficam escondidos. Isso deixa o sistema mais fácil de entender e de mudar.

## Exemplo do dia a dia

Apertar "Pagar com Pix" no app. Você só quer pagar. Por trás rola validar cartão, falar com o banco e gerar recibo, mas você não vê nada disso, só a confirmação. Outro caso: dirigir um carro. Você usa volante, freio e acelerador sem saber como o motor funciona. Trocar o motor não muda o jeito de dirigir.

## No código

Quem chama `pagar` não sabe (nem precisa) como o pagamento acontece:

```ts
// quem usa só conhece isto:
function pagar(pedidoId: string, valor: number): Promise<boolean> {
  // por dentro: validar cartão, chamar banco, gerar recibo...
  // quem chama não vê nada disso
  return Promise.resolve(true);
}

// uso: simples, sem detalhes
const ok = await pagar("pedido-123", 50);
```

## Comparação com Clean Architecture

A Clean Architecture vive de abstração: a regra de negócio fala com uma interface (o "o quê") e não sabe se por trás tem banco, API ou outra coisa (o "como"). Ver [[Clean Architecture]].

## Por que importa

- Você pensa em poucas coisas de cada vez, não em tudo junto.
- Permite trocar o "como" sem quebrar quem usa.
- É a base para [[Empacotamento de Componentes|empacotar]] e criar [[Interfaces e Contratos|interfaces]].

## Relacionados

- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Empacotamento de Componentes]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
