---
tags:
  - arquitetura-de-sistemas
  - componentes
  - design
data: 2026-06-01
status: em-estudo
---

# Interfaces e Contratos

> [!summary] Em uma frase
> Uma **interface** é o "contrato" público de um componente: a lista do que ele oferece para os outros usarem — **sem revelar como faz** por dentro.

## 🎯 O que é

A interface define **o que** um componente entrega, não **como**. Ela é a única parte visível de fora; todo o resto fica encapsulado ([[Empacotamento de Componentes]]).

> [!note] Contrato
> Quem oferece a interface **promete** cumprir aquilo (entrada → saída); quem usa **confia** na promessa sem olhar o interior. Enquanto o contrato não muda, os dois lados podem evoluir de forma independente — isso é o que garante o **baixo acoplamento** ([[Acoplamento e Coesão]]).

## 🍔 Analogia do dia a dia — o cardápio

O **cardápio** de um restaurante é uma interface:

- ele lista **o que você pode pedir** (`pizza margherita`, `refrigerante`),
- você pede pelo nome e recebe o prato,
- você **não precisa saber** como a cozinha prepara, qual fogão usa, ou quem é o cozinheiro.

Se o restaurante trocar o forno ou a receita interna, **o cardápio continua igual** — e você continua pedindo do mesmo jeito. Isso é uma interface estável escondendo a implementação.

## 🧩 No diagrama UML

No diagrama "Implementação de componentes" (Dinner Now), as **bolinhas e soquetes** (○ e ⊃) são interfaces:

- `MealOrdering`, `PaymentAuthorization`, `Kitchen` são os **contratos** entre os servidores.
- A **bolinha (○)** = interface **fornecida** ("eu ofereço isto").
- O **soquete (⊃)** = interface **requerida** ("eu preciso disto").
- Eles se encaixam: um componente fornece, o outro consome.

## ✅ Por que importa

- Permite **trocar a implementação** sem quebrar quem usa (basta manter o contrato).
- Permite **times independentes** trabalhando em paralelo, cada um só conhecendo as interfaces alheias.
- É a base da **abstração** ([[Abstração]]) e do **baixo acoplamento** ([[Acoplamento e Coesão]]).

## 🔗 Relacionados

- [[Empacotamento de Componentes]]
- [[Abstração]]
- [[Acoplamento e Coesão]]
- [[Middleware]]

---
*Estudo iniciado em 2026-06-01*
