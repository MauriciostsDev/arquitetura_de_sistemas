---
tags:
  - arquitetura-de-sistemas
  - componentes
  - modularizacao
data: 2026-06-01
status: em-estudo
---

# Empacotamento de Componentes

> [!summary] Resumo
> Empacotar é juntar num mesmo pacote tudo que faz parte da mesma função, e depois só olhar para o que cada pacote entrega.

## O que é

Um sistema tem centenas de pedaços de código. Pensar em cada um separado é impossível. A saída é **agrupar por função**: cada grupo vira um pacote. Aí você raciocina sobre poucos blocos, não sobre as peças soltas.

## Exemplo do dia a dia

No app de delivery, agrupando por função aparecem quatro pacotes:

| Pacote | O que cuida |
|--------|-------------|
| Usuários | login, cadastro |
| Catálogo | restaurantes, cardápios |
| Pagamentos | cobrança, cartão, Pix |
| Entrega | rota, rastreio |

Abrindo o pacote "Pagamentos": por dentro tem validar cartão, falar com o banco e gerar recibo. Mas o resto do app só usa uma porta de entrada: `cobrar(pedido)`. O interior fica escondido.

## No código

O pacote expõe só o que o resto precisa usar; o resto fica privado:

```ts
// pagamentos.ts — o pacote
function validarCartao() { /* interno */ }
function chamarBanco() { /* interno */ }
function gerarRecibo() { /* interno */ }

// única coisa exportada (a "porta" do pacote):
export function cobrar(pedidoId: string, valor: number): boolean {
  validarCartao();
  chamarBanco();
  gerarRecibo();
  return true;
}
```

```ts
// resto do app — só enxerga isto:
import { cobrar } from "./pagamentos";
cobrar("pedido-123", 50);
```

## Comparação com Clean Architecture

Empacotar por função é parecido com separar por responsabilidade na Clean Architecture: cada bloco cuida de uma coisa e conversa com os outros só pela porta de entrada (interface). Ver [[Clean Architecture]].

## Por que é bom

- Menos complexidade: poucos blocos para pensar.
- Manutenção isolada: troca o interior sem afetar quem usa.
- Times independentes e reuso mais fácil.

## Relacionados

- [[Abstração]]
- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Componentes]]

---
*Estudo iniciado em 2026-06-01*
