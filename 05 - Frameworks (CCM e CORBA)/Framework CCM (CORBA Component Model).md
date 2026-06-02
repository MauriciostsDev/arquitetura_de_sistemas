---
tags:
  - arquitetura-de-sistemas
  - componentes
  - framework
  - corba
data: 2026-06-01
status: em-estudo
---

# Framework CCM (CORBA Component Model)

> [!summary] Resumo
> O CCM é um framework do lado do servidor que padroniza criar e instalar aplicações feitas de componentes. Pense num "padrão de fábrica" para transformar objetos [[CORBA]] em peças prontas para plugar.

## O que é

Montar uma aplicação distribuída na mão dá muito trabalho: comunicação, empacotamento, instalação e execução de cada peça. O CCM padroniza isso. Você escreve o componente; o framework cuida da burocracia.

## Exemplo do dia a dia

Móvel modular padrão IKEA: encaixes padronizados, manual de montagem e caixas padronizadas. O CCM é esse "padrão IKEA" do software: encaixe, empacotamento e instalação iguais, então qualquer peça monta com qualquer outra.

## Os 2 níveis

- **Básico**: jeito simples de transformar um objeto [[CORBA]] em componente.
- **Estendido**: recursos a mais, como portas de comunicação (ver abaixo), atributos e o "home".

As "portas": **faceta** = interface que o componente oferece ("eu forneço isto"); **receptáculo** = interface que ele precisa ("eu dependo disto"); **home** = a fábrica que cria as instâncias. É o mesmo papo de [[Interfaces e Contratos]]: oferecido x requerido.

## Os 5 modelos (o ciclo de vida do componente)

| Modelo | O que define | Liga com |
|--------|--------------|----------|
| Abstrato | atributos, portas e home | [[Interfaces e Contratos]] |
| De Programação | a [[CIDL]] e o [[CIF]] | [[Implementação de Componentes]] |
| De Empacotamento | como empacotar | [[Empacotamento de Componentes]] |
| De Implantação | como instalar | [[Distribuição de Componentes]] |
| De Execução | onde rodar (os [[Containers]]) | [[Ambiente de Componentes]] |

Para decorar: descrevo (abstrato), implemento (programação), empacoto, instalo, rodo.

## No código

As portas têm paralelo direto em TS: o que o componente oferece x o que recebe de fora (props):

```tsx
// receptáculo: precisa de um pagamento vindo de fora
function Checkout({ gateway }: { gateway: { cobrar(v: number): Promise<boolean> } }) {
  return <button onClick={() => gateway.cobrar(50)}>Finalizar</button>;
}

// "home": a fábrica que cria a instância já com a dependência plugada
function criarCheckout(gateway: { cobrar(v: number): Promise<boolean> }) {
  return <Checkout gateway={gateway} />;
}
```

## Hoje em dia

CCM é legado, quase não se usa. O que sobrou e segue forte é a **ideia**: padronizar empacotamento, instalação e execução de componentes. Isso virou **containers Docker**, **Kubernetes**, **serverless** e plataformas como **Spring**. Quando você faz deploy de um microserviço hoje, está vivendo a mesma ideia que o CCM tentou padronizar.

## Comparação com Clean Architecture

O CCM é infraestrutura (borda). O Modelo Abstrato (facetas/receptáculos) são as interfaces que mantêm o núcleo solto. Cuidado: a regra de negócio não deveria depender do CCM. Ver [[Clean Architecture]].

## Relacionados

- [[CORBA]]
- [[CIDL]]
- [[CIF]]
- [[Containers]]
- [[Interfaces e Contratos]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
