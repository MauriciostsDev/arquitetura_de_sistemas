---
tags:
  - arquitetura-de-sistemas
  - componentes
  - conceitos
data: 2026-06-01
status: em-estudo
---

# Abstração

> [!summary] Em uma frase
> **Abstrair** é pensar no **o quê** (o que algo faz / entrega) em vez do **como** (como faz por dentro), ignorando os detalhes que não importam para quem usa.

## 🎯 O que é

Abstração é a ferramenta mental que permite lidar com sistemas grandes sem enlouquecer: você **esconde a complexidade** atrás de algo simples de usar. Você usa uma função, um pacote ou um serviço **sem se preocupar com o conteúdo**.

> [!important] Abstrair ≠ esconder por esconder
> A abstração expõe **o essencial** (o que serve) e oculta **o acidental** (como foi feito). É o que a [[Interfaces e Contratos|interface]] faz: mostra o contrato, esconde a implementação.

## 🍔 Analogia do dia a dia — o botão "pagar"

Quando você toca em **"Pagar com Pix"** no iFood:

- você só pensa em "quero pagar",
- por trás acontece muita coisa (validar cartão/chave, falar com o banco, autorizar valor, gerar recibo),
- mas **nada disso aparece pra você** — você só vê a confirmação.

Você está usando uma **abstração**: a função `cobrar(pedido)` resolve tudo, e os detalhes ficam escondidos.

## 🚗 Outra analogia — dirigir um carro

Você usa o **volante, o acelerador e o freio** (a interface) sem saber como funcionam a injeção eletrônica ou a transmissão (a implementação). Trocar o motor não muda o jeito de dirigir — porque a abstração se mantém.

## 🧱 Níveis de abstração

A arquitetura é feita de **camadas de abstração**, cada uma escondendo a de baixo:

```
Você ("quero pagar")
   ↓  abstrai
Função cobrar(pedido)
   ↓  abstrai
Validar cartão · Chamar banco · Gerar recibo
   ↓  abstrai
Rede, protocolos, bytes...
```

Cada nível só precisa entender o nível imediatamente abaixo — não o fundo do poço.

## ✅ Por que importa

- **Reduz complexidade**: você raciocina sobre poucos conceitos de cada vez.
- **Habilita o encapsulamento e o baixo acoplamento** ([[Acoplamento e Coesão]]).
- É a base para [[Empacotamento de Componentes|empacotar componentes]] e definir [[Interfaces e Contratos|interfaces]].

## 🔗 Relacionados

- [[Empacotamento de Componentes]]
- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]

---
*Estudo iniciado em 2026-06-01*
