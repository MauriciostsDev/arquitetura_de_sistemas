---
tags:
  - arquitetura-de-sistemas
  - componentes
  - distribuicao
  - middleware
data: 2026-06-01
status: em-estudo
---

# Distribuição de Componentes

> [!summary] Resumo
> Distribuir é decidir onde cada pacote roda e como eles conversam, mesmo em máquinas diferentes. Quem faz essa conversa é o [[Middleware|middleware]].

## O que é

Depois de [[Empacotamento de Componentes|empacotar]] por função, esses pacotes não precisam rodar na mesma máquina. Distribuir é: espalhar os componentes por servidores/containers, conectá-los pelo middleware e garantir que cada lugar tenha a configuração e a segurança certas.

## Exemplo do dia a dia

No app de delivery, os pacotes ficam em servidores separados: pagamentos num lugar (com segurança alta), catálogo em outro, entrega em outro. O cliente nunca fala direto com a cozinha nem com o banco: tudo passa pelo middleware, que sabe encontrar cada um.

Os componentes ficam em **containers**, e a regra é: dentro do mesmo container só entram componentes com a **mesma configuração** (mesma segurança, mesmas transações). É como separar a cozinha do caixa do restaurante: cada ambiente tem suas regras.

## Descritores de distribuição

A configuração de cada componente fica escrita num **descritor** (tradicionalmente em XML; hoje YAML/JSON). É a ficha de instruções que diz ao middleware como tratar cada componente. Ela garante três coisas: os componentes se conectam certo, cada camada tem o suporte necessário e a segurança correta está aplicada.

```yaml
# descritor (versão simples, em YAML como se usa hoje)
componente: Pagamentos
seguranca: alta          # só autenticado acessa
exigeLogin: true
transacao: obrigatoria   # tudo ou nada
conecta: ServicoBancario
container: pagamentos-seguro
```

## Comparação com Clean Architecture

A regra "cada container só com a mesma configuração" combina com separar responsabilidades. E o objetivo de fundo é **trocar um servidor sem derrubar os outros** — baixo acoplamento. Ver [[Acoplamento e Coesão]] e [[Clean Architecture]].

> [!note] Sobre "forte acoplagem" no material
> O material fala em "forte acoplagem para a organização". O sentido prático é integração forte (tudo conectado e confiável), não dependência rígida. Confirme com o professor.

## Relacionados

- [[Empacotamento de Componentes]]
- [[Middleware]]
- [[Acoplamento e Coesão]]
- [[Containers]]

---
*Estudo iniciado em 2026-06-01*
