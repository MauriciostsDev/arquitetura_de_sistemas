---
tags:
  - arquitetura-de-sistemas
  - distribuicao
  - middleware
data: 2026-06-01
status: em-estudo
---

# Middleware

> [!summary] Em uma frase
> **Middleware** é a camada de software que fica **no meio** (*middle*) e conecta componentes que estão em camadas ou máquinas diferentes, cuidando da "conversa" entre eles.

## 🎯 O que é

Quando um sistema é distribuído ([[Distribuição de Componentes]]), seus componentes não rodam no mesmo lugar: uns ficam no celular, outros em servidores diferentes, às vezes em datacenters diferentes. O middleware é quem permite que eles se chamem **como se estivessem juntos**, escondendo:

- **onde** o outro componente está (localização),
- **como** transportar a mensagem (rede, protocolo),
- **em que formato** os dados precisam estar (tradução/serialização),
- **regras transversais**: segurança, transações, controle de erro.

## 🍔 Analogia do dia a dia — o garçom / o app do iFood

Quando você pede comida no iFood, **você não fala direto com a cozinha do restaurante**. Existe um intermediário que:

- pega o seu pedido,
- traduz para o formato que o restaurante entende,
- confere se o pagamento foi autorizado antes de mandar pra cozinha,
- e devolve a confirmação pra você.

Esse intermediário é o **middleware**. Você (componente "app do cliente") e a cozinha (componente "restaurante") nunca se conectam diretamente — sempre por meio dele, seguindo as regras dele.

## 🧩 O que o middleware faz na prática

| Função | Para que serve | Exemplo |
|--------|----------------|---------|
| **Comunicação** | levar a mensagem de um componente a outro | app → servidor de pedidos |
| **Tradução** | converter formatos entre componentes | JSON do app → formato interno do restaurante |
| **Segurança** | autenticar e autorizar chamadas | só o app logado pode cobrar |
| **Transações** | garantir que tudo aconteça ou nada aconteça | se a cobrança falha, o pedido não é enviado |
| **Localização** | achar o componente certo onde quer que ele esteja | encontrar o servidor de pagamentos disponível |

## 🔌 Tipos comuns (para aprofundar depois)

- **Message brokers / filas** (ex.: RabbitMQ, Kafka) — componentes trocam mensagens sem falar direto.
- **Servidores de aplicação** (ex.: contêineres Java EE) — hospedam componentes e aplicam as políticas dos descritores.
- **APIs / gateways** — porta de entrada que roteia chamadas para os serviços certos.

## 🔗 Relacionados

- [[Distribuição de Componentes]]
- [[Empacotamento de Componentes]]
- [[Acoplamento e Coesão]]

---
*Estudo iniciado em 2026-06-01*
