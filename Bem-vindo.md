---
tags:
  - arquitetura-de-sistemas
  - moc
  - indice
data: 2026-06-01
status: em-estudo
---

# 🏛️ Arquitetura de Sistemas — Índice (MOC)

> [!summary] O que é esta nota
> Este é o **mapa central** (MOC – *Map of Content*) do estudo. Use-o como porta de entrada: cada link leva a uma nota com **linguagem simples, analogia do mundo real, comparação com [[Clean Architecture]] e exemplo em React TS**.

> [!tip] Trilha sugerida de leitura
> Fundamentos → Componentes (estrutura) → Implementação & Qualidade → Distribuição & Ambientes → Frameworks. Siga os 🟢 na ordem se estiver começando.

## 🧩 1. Fundamentos (os conceitos-base)

Os tijolos mentais que aparecem em todo o resto.

- 🟢 [[Abstração]] — focar no **o quê**, esconder o **como**
- 🟢 [[Interfaces e Contratos]] — o "cardápio" público de um componente
- 🟢 [[Acoplamento e Coesão]] — baixa dependência + foco interno
- [[Congeneridade]] — compatibilidade/conformidade entre componentes ⚠️ *revisar com professor*

## 📦 2. Componentes — estruturação

Como agrupar e de onde vêm as peças.

- 🟢 [[Empacotamento de Componentes]] — juntar por função; a interface esconde o interior
- [[Componentes]] — os **tipos** (hardware, SO, SGBD, comerciais…) e provisionamento
- [[Reuso de Componentes]] — não reinventar a roda

## 🛠️ 3. Implementação & Qualidade

Construir de verdade, com qualidade.

- [[Implementação de Componentes]] — quem faz o quê (dev, arquiteto, qualidade)
- [[Especificação de Componentes]] — a "ficha técnica" feita pelo arquiteto
- [[Garantia da Qualidade]] — **QA**: cuida do **processo** (previne)
- [[Controle da Qualidade]] — **QC**: cuida do **produto** (inspeciona)

## 🌐 4. Distribuição & Ambientes

Onde e como os componentes rodam e conversam.

- [[Distribuição de Componentes]] — espalhar em containers, conectar via middleware
- [[Middleware]] — o "garçom" que conecta componentes distribuídos
- [[Ambiente de Componentes]] — o "lugar" que oferece serviços prontos
- [[Containers]] — hospedam os componentes e gerenciam ativação/recursos (ciclo de vida)
- [[Serviços de Infraestrutura]] — transações, segurança, concorrência
- [[Programação Declarativa]] — dizer o **o quê** e deixar o framework resolver
- [[Programação Orientada a Aspectos]] — separar preocupações transversais (segurança, log) da lógica

## 🧱 5. Frameworks & Tecnologias

Implementações concretas dos conceitos acima.

- [[Framework CCM (CORBA Component Model)]] — o "padrão IKEA" de componentes server-side
- [[CORBA]] — o middleware/tradutor universal por baixo do CCM
- [[CIDL]] — linguagem **declarativa** que descreve o componente (e as 4 categorias)
- [[CIF]] — gera os *skeletons* (navegação, ativação, estado) a partir da CIDL
- [[POA (Portable Object Adapter)]] — direciona a chamada remota ao objeto certo (servant)

## 🧭 6. Referência transversal

- ⭐ [[Clean Architecture]] — **comparada em todas as notas**: regra de negócio no centro, detalhes na borda

---

## 🗺️ Como tudo se conecta

```
        FUNDAMENTOS                        Clean Architecture
   Abstração · Interfaces                   (lente usada em
   Acoplamento/Coesão  ───────────────────  TODAS as notas)
          │
          ▼
   ESTRUTURA DOS COMPONENTES
   Empacotamento · Componentes · Reuso
          │
          ▼
   IMPLEMENTAÇÃO & QUALIDADE
   Especificação → Implementação → QA/QC
          │
          ▼
   DISTRIBUIÇÃO & AMBIENTES
   Distribuição · Middleware · Ambiente
   Serviços de Infra · Prog. Declarativa
          │
          ▼
   FRAMEWORKS
   CCM ── construído sobre ──> CORBA (usa POA p/ achar o objeto)
   ├─ Modelo de Programação: CIDL (descreve) → CIF (gera skeletons)
   └─ Modelo de Execução: Containers (hospedam + ciclo de vida, via AOP)
```

> [!note] Padrão das notas
> Toda nota segue: **frontmatter** (tags/data/status), **callout de resumo**, **analogia do mundo real** (iFood, cozinha, shopping…), **comparação com Clean Architecture** e, quando ajuda, **código React TS**. Cada `[[link]]` tem sua própria nota.

---
*Índice criado em 2026-06-01 · 24 notas*
