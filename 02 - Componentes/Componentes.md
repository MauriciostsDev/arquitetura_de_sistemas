---
tags:
  - arquitetura-de-sistemas
  - componentes
  - provisionamento
  - reuso
data: 2026-06-01
status: em-estudo
---

# Componentes (tipos e provisionamento)

> [!summary] Em uma frase
> Um **componente** é uma peça construída para **entregar um tipo de serviço**. O sistema é montado juntando vários tipos de componentes — e, sempre que possível, **reaproveitando** os que já existem em vez de criar do zero.

## 🎯 A ideia, bem simples

Pensa em **montar um PC gamer**. Você não fabrica cada peça: você **compra** a placa-mãe, a fonte, a memória (peças que já existem) e só monta. Se faltar uma peça específica que ninguém vende, **aí sim** você manda fabricar.

Software funciona igual. Cada **componente** entrega um "tipo de serviço", e o arquiteto monta o sistema combinando peças — preferindo as que já existem.

## 🧱 Os tipos de componentes

Os componentes são separados pelo **grupo de serviço** que oferecem:

| Tipo | O que entrega | Exemplo no mundo real |
|------|---------------|------------------------|
| **Hardware** | máquina física / capacidade | o servidor, o celular |
| **Sistema Operacional** | base pra tudo rodar | Linux, Windows, Android |
| **SGBD** (banco de dados) | guardar e buscar dados | PostgreSQL, MySQL |
| **Aplicativos comerciais** | software pronto comprado | um ERP, um gateway de pagamento (Stripe) |
| **Sistemas existentes** | o que a empresa já fez | o sistema de login antigo da empresa |
| **A serem desenvolvidos** | o que ainda não existe | a tela nova de "favoritos" |

> [!tip] A regra de ouro do arquiteto
> 1. Olha os requisitos do novo sistema.
> 2. Identifica **todos** os componentes necessários.
> 3. **Reusa** tudo que já existe ([[Reuso de Componentes]]).
> 4. **Só constrói o que não existe.**
> 5. Constrói de um jeito que esse novo componente também possa ser **reusado no futuro**.

## 🍔 Comparação com o mundo real — o iFood

Quando o iFood foi montado, ninguém reinventou tudo:

- **Hardware/SO** → alugaram servidores na nuvem (AWS) em vez de comprar máquina.
- **SGBD** → usaram um banco pronto (ex.: PostgreSQL).
- **Aplicativo comercial** → o pagamento por cartão foi terceirizado (ex.: um gateway tipo Stripe/Cielo) — **não** escreveram a maquininha do banco.
- **Sistema existente** → reaproveitaram o login que já tinham.
- **A desenvolver** → só construíram o que era exclusivo deles: o algoritmo de rota do entregador, a tela de cardápio etc.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> A ideia de "componente entrega um nível de serviço e a gente reusa os que existem" **conversa** com a Clean Architecture, mas **não é a mesma coisa** — veja a diferença:
>
> - **Aqui (provisionamento)**: a preocupação é "**de onde** vem cada peça?" (comprar, reusar ou construir).
> - **Clean Architecture**: a preocupação é "**como** organizar as peças por dentro?" — separando **regra de negócio** (núcleo) de **detalhes** (banco, framework, APIs externas) e fazendo as dependências sempre apontarem **para dentro**.
>
> **O ponto em comum:** os tipos "SGBD", "aplicativos comerciais" e "hardware" são exatamente o que a Clean Architecture chama de **detalhes/infraestrutura** — coisas que ficam na **borda** e devem ser **plugáveis** (trocáveis sem afetar o núcleo). Reusar um gateway de pagamento pronto só é seguro **se** ele estiver isolado atrás de uma [[Interfaces e Contratos|interface]], que é justamente o que a Clean Architecture exige.

```
   Clean Architecture (camadas)         Tipos de componente
   ┌───────────────────────────┐
   │   Regras de Negócio        │  ←── "A serem desenvolvidos" (o seu núcleo)
   │  ┌─────────────────────┐   │
   │  │   Casos de Uso       │  │
   │  │  ┌───────────────┐   │  │
   │  │  │  Entidades     │  │  │
   │  │  └───────────────┘   │  │
   │  └─────────────────────┘   │
   │   Frameworks & Drivers     │  ←── SGBD, SO, apps comerciais, hardware
   └───────────────────────────┘       (detalhes plugáveis na borda)
```

## 💻 Exemplo em React + TypeScript

Imagine o componente de **Pagamento**. Em vez de o app depender direto de um provedor comercial (Stripe), a gente define uma **interface** (o contrato) e "pluga" a implementação — exatamente o que permite **reusar** e **trocar** sem dor:

```ts
// contrato: o que um "componente de pagamento" precisa entregar
export interface GatewayPagamento {
  cobrar(pedidoId: string, valor: number): Promise<{ ok: boolean }>;
}

// componente COMERCIAL reutilizado (não construímos o banco!)
export class PagamentoStripe implements GatewayPagamento {
  async cobrar(pedidoId: string, valor: number) {
    // ...chama a API pronta da Stripe...
    return { ok: true };
  }
}
```

```tsx
// O componente React só conhece o CONTRATO, nunca o provedor real.
// Trocar Stripe por outro = trocar 1 linha, sem mexer na tela. (Clean Architecture na prática)
function BotaoPagar({ gateway, pedidoId, valor }: {
  gateway: GatewayPagamento; // <- dependência da INTERFACE, não da implementação
  pedidoId: string;
  valor: number;
}) {
  async function handleClick() {
    const { ok } = await gateway.cobrar(pedidoId, valor);
    alert(ok ? "Pagamento aprovado!" : "Falhou");
  }

  return <button onClick={handleClick}>Pagar R$ {valor}</button>;
}
```

> [!note] Por que isso ilustra o conceito
> O `BotaoPagar` **reusa** um componente comercial (Stripe) sem se acoplar a ele. Se amanhã a empresa trocar de gateway, basta passar outra implementação de `GatewayPagamento` — a tela nem percebe. É reuso + borda plugável + baixo [[Acoplamento e Coesão|acoplamento]].

## 🔗 Relacionados

- [[Reuso de Componentes]]
- [[Clean Architecture]]
- [[Empacotamento de Componentes]]
- [[Implementação de Componentes]]
- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]

---
*Estudo iniciado em 2026-06-01*
