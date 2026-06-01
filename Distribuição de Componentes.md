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

> [!summary] Em uma frase
> Depois de **empacotar** os componentes ([[Empacotamento de Componentes]]), é preciso decidir **onde cada pacote vai rodar** e **como eles vão conversar entre si** — mesmo estando em máquinas diferentes. Quem cuida dessa conversa é o **middleware**.

## 🎯 O problema que a distribuição resolve

No [[Empacotamento de Componentes]] a gente agrupou o código por função (Usuários, Catálogo, Pagamentos, Entrega). Mas todos esses pacotes não precisam — e muitas vezes **não devem** — rodar na mesma máquina.

A **distribuição de componentes** é o trabalho de:

1. **Espalhar** os componentes por diferentes **containers / servidores**.
2. **Conectar** esses componentes através de **middlewares**.
3. Garantir que cada lugar tenha a **configuração, o suporte e a segurança** corretos.

## 🔌 Middleware: o "tradutor/garçom" entre componentes

> [!note] Middleware
> Camada de software que fica **no meio** (*middle*) e conecta componentes que estão em camadas ou máquinas diferentes. Ele cuida de transporte de mensagens, conversão de formatos, segurança, transações etc. — para que um componente possa chamar outro sem se preocupar com **onde** ele está.

> [!analogy] Analogia do dia a dia — o garçom do iFood
> Quando você pede no iFood, **você não fala direto com a cozinha do restaurante**. Existe um intermediário (o app + os servidores do iFood) que:
> - pega o seu pedido,
> - traduz para o formato que o restaurante entende,
> - garante que o pagamento foi autorizado antes de mandar pra cozinha,
> - e devolve a confirmação pra você.
>
> Esse intermediário é o **middleware**. Você (componente "app do cliente") e a cozinha (componente "restaurante") nunca se conectam diretamente — sempre por meio dele, seguindo as regras dele.

## 📦 Containers: onde os componentes moram

Os componentes são distribuídos em **containers**, e a regra é:

> [!important] Regra do container
> Dentro de um mesmo container **só podem existir componentes que atendam à mesma configuração** (mesmas políticas de segurança, transação, ciclo de vida etc.).

É como separar a **cozinha** e o **caixa** de um restaurante: cada um é um "ambiente" com suas próprias regras. Você não coloca quem mexe com dinheiro no mesmo ambiente de quem mexe com comida — cada ambiente tem suas exigências de higiene/segurança.

```
   ┌──────────────────────────────────────────────────────────┐
   │  Middleware  (define as políticas e conecta tudo)         │
   │                                                           │
   │   ┌─────────────────────┐     ┌─────────────────────┐     │
   │   │ Container A          │     │ Container B          │    │
   │   │ política: pagamentos │     │ política: catálogo   │    │
   │   │                      │     │                      │    │
   │   │  • Cobrança          │     │  • Restaurantes      │    │
   │   │  • Validar cartão    │     │  • Cardápios         │    │
   │   │  • Antifraude        │     │  • Busca             │    │
   │   │  (segurança ALTA)    │     │  (segurança normal)  │    │
   │   └─────────────────────┘     └─────────────────────┘     │
   └──────────────────────────────────────────────────────────┘
```

## 📄 Descritores de distribuição (deployment descriptors)

A "configuração" de cada container/componente fica escrita em **descritores de distribuição**, geralmente em **XML** (hoje também YAML/JSON). Eles funcionam como uma **ficha de instruções** que diz ao middleware como tratar cada componente.

> [!analogy] Analogia — a ficha do pedido no iFood
> O descritor é como a **ficha do pedido**: "entregar no endereço X, pagamento já aprovado, sem cebola, prioridade alta". O middleware lê essa ficha e age conforme o que está escrito, sem precisar perguntar nada.

Um descritor precisa conter informações suficientes para que:

| O descritor garante que... | Exemplo no iFood |
|----------------------------|------------------|
| **Os componentes sejam corretamente conectados** | o componente "Pagamento" sabe achar e chamar o "Banco/Adquirente" |
| **As camadas tenham o nível certo de suporte/configuração** | o container de pagamentos tem suporte a transações (ou a cobrança falha pela metade?) |
| **Os níveis de segurança corretos estejam implementados** | só componentes autenticados acessam dados de cartão; o catálogo não enxerga isso |

```xml
<!-- exemplo simplificado de descritor -->
<component name="Pagamentos">
    <security level="alta" requireAuth="true"/>
    <transaction type="required"/>
    <connects-to ref="ServicoBancario"/>
    <container>pagamentos-seguro</container>
</component>
```

## 🍔 Juntando tudo no exemplo do iFood

Imagine os pacotes distribuídos assim:

- **App do cliente** (celular) → conversa com…
- **Servidor de Pedidos** (middleware central) → que distribui para…
  - **Servidor de Pagamentos** (container de segurança alta, com transações)
  - **Servidor do Restaurante/Cozinha** (container que recebe os pedidos confirmados)
  - **Servidor de Entrega** (container que fala com o GPS do entregador)

O cliente nunca fala direto com a cozinha nem com o banco. **Tudo passa pelo middleware**, que segue as regras dos descritores de cada container. É isso que permite que esses componentes estejam em **máquinas diferentes, em lugares diferentes**, e ainda assim funcionem como um sistema só.

> [!tip] Ligação com o diagrama UML "Implementação de componentes"
> No diagrama do *Dinner Now Web Service*, o `DNCustomerServer` e o `DNKitchenServer` são **componentes distribuídos em servidores diferentes**. As "bolinhas e soquetes" (○ e ⊃) entre eles são as **interfaces** (`MealOrdering`, `PaymentAuthorization`, `Kitchen`) — exatamente os pontos onde o middleware faz a conexão entre um servidor e outro.

## 🧠 Acoplamento: um ponto de atenção

O material de estudo fala em conseguir uma **"forte acoplagem para a organização"** — ou seja, garantir que os componentes da organização estejam **bem integrados e conversando de forma confiável** por meio do middleware.

> [!warning] Cuidado com o termo
> Na maioria da literatura de arquitetura, o objetivo costuma ser o oposto: **baixo acoplamento** (*loose coupling*) entre componentes, justamente para que um possa mudar sem quebrar o outro. O middleware ajuda nisso ao **esconder a localização** e os detalhes de cada componente.
> Na prática: queremos **integração forte** (tudo conectado e funcionando), mas **dependência fraca** (trocar o servidor de pagamento não derruba o catálogo). Vale confirmar com o professor qual sentido a prova cobra. Veja [[Acoplamento e Coesão]].

## 🔗 Relacionados

- [[Empacotamento de Componentes]]
- [[Acoplamento e Coesão]]
- [[Interfaces e Contratos]]
- [[Middleware]]

---
*Estudo iniciado em 2026-06-01*
