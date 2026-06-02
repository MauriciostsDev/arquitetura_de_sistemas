---
tags:
  - arquitetura-de-sistemas
  - componentes
  - modularizacao
data: 2026-06-01
status: em-estudo
---

# Empacotamento de Componentes

> [!summary] Em uma frase
> **Empacotar componentes** é juntar num mesmo "saco" tudo que faz parte da mesma função e, depois, só se preocupar com **o que cada saco entrega** — não com o que tem dentro dele.

## 🎯 A ideia central

Por trás de qualquer sistema existem dezenas (ou centenas) de pedacinhos de código: classes, funções, serviços. Se o arquiteto tivesse que pensar em cada pedacinho separado, enlouqueceria.

A solução é **agrupar por funcionalidade**. Cada grupo vira um **pacote**, e o arquiteto passa a raciocinar sobre poucos blocos que conversam entre si — não sobre as peças soltas.

## 🍔 Exemplo: App de delivery (tipo iFood)

Pensa num app de delivery. Agrupando tudo por funcionalidade, surgem quatro pacotes:

| Pacote | O que cuida |
|--------|-------------|
| **Usuários** | login, cadastro |
| **Catálogo** | restaurantes, cardápios |
| **Pagamentos** | cobrança, cartão, Pix |
| **Entrega** | rota, rastreio |

```
                    ┌─────────────────┐
                    │  Usuário (app)  │
                    └────────┬────────┘
                             ↓
   ╔═══════════════════════════════════════════════════════╗
   ║  App de delivery  (componentes agrupados por função)   ║
   ║                                                        ║
   ║  ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌───────┐ ║
   ║  │ Usuários │→ │ Catálogo │→ │ Pagamentos │→ │Entrega│ ║
   ║  │  login   │  │restaurant│  │ cartão,Pix │  │ rota  │ ║
   ║  │ cadastro │  │   menu   │  │            │  │rastreio│║
   ║  └──────────┘  └──────────┘  └────────────┘  └───────┘ ║
   ╚═══════════════════════════════════════════════════════╝
```

Visto pelos olhos do arquiteto: **quatro pacotes**, cada um com função clara, conversando entre si. Nenhum detalhe interno aparece — só o que cada bloco faz.

## 🔒 Abrindo um pacote: a interface esconde o interior

Esse é o ponto mais importante. Vamos "abrir" o pacote de **Pagamentos**:

```
                    ┌────────────────────────────────────────┐
  ┌─────────────┐   │ Pacote: Pagamentos                     │
  │ Resto do app│ → │ ┌────────────────────────────────────┐ │
  └─────────────┘   │ │ cobrar(pedido) → confirmação       │ │  ← INTERFACE
                    │ │ (a única coisa que os outros veem) │ │
                    │ └────────────────────────────────────┘ │
                    │                                        │
                    │  componentes internos (escondidos):    │
                    │  • Validar cartão   (checa dados)      │
                    │  • Chamar banco     (autoriza valor)   │
                    │  • Gerar recibo     (registra venda)   │
                    └────────────────────────────────────────┘
```

Por dentro, Pagamentos tem vários componentes (validar cartão, falar com o banco, gerar recibo). Mas o resto do app **não precisa saber de nada disso** — ele só usa a **interface**, ou seja, a função `cobrar(pedido)`.

> [!important] Abstrair
> Usar a função **sem se preocupar com o conteúdo**. Você chama `cobrar(pedido)` e recebe uma confirmação; como isso acontece por dentro é problema do pacote, não seu.

## 🧩 Conceitos-chave

> [!note] Interface
> O "contrato" público do pacote: o conjunto de funções que ele expõe para os outros usarem. É a **única** coisa visível de fora.

> [!note] Encapsulamento (information hiding)
> Esconder os detalhes internos atrás da interface. Quem usa o pacote não vê — nem deveria ver — como ele funciona por dentro.

> [!note] Abstração
> Pensar no **o quê** (o que o pacote entrega) em vez do **como** (como ele faz internamente).

## ✅ Por que isso é bom?

- **Menos complexidade**: o arquiteto raciocina sobre poucos blocos, não sobre centenas de peças.
- **Manutenção isolada**: dá pra trocar o "Chamar banco" por outro provedor sem mexer no resto do app, desde que a interface `cobrar(pedido)` continue igual.
- **Times independentes**: cada pacote pode ser cuidado por um time diferente.
- **Reuso**: um pacote com interface clara pode ser reaproveitado em outros sistemas.

## 🔗 Relacionados

- [[Acoplamento e Coesão]]
- [[Interfaces e Contratos]]
- [[Abstração]]


---
*Estudo iniciado em 2026-06-01*
