---
tags:
  - arquitetura-de-sistemas
  - componentes
  - padroes
data: 2026-06-02
status: em-estudo
---

# Padrão Factory (Criação de Objetos)

> [!summary] Resumo
> Em vez de criar o objeto direto com "new" espalhado pelo código, você usa uma fábrica: um lugar só responsável por montar e entregar a instância pronta.

## O que é

Uma fábrica é um pedaço de código cujo trabalho é **criar instâncias** de outra coisa, já com as dependências montadas. Quem precisa do objeto pede para a fábrica, em vez de montar na mão. Vantagem: a criação fica num lugar só, fácil de mudar e de testar.

## Exemplo do dia a dia

Você não monta seu carro peça por peça: a fábrica entrega ele pronto. Se a fábrica troca um fornecedor de peça, você nem percebe — continua recebendo um carro pronto.

## No código

Sem fábrica (criação espalhada e acoplada):

```ts
// toda tela precisa saber montar o serviço com suas dependências
const servico = new ServicoPedido(new RepositorioHttp(), new Logger());
```

Com fábrica (um lugar só monta):

```ts
// fábrica: o único lugar que sabe como montar o serviço
function criarServicoPedido(): ServicoPedido {
  return new ServicoPedido(new RepositorioHttp(), new Logger());
}

// quem usa só pede pronto:
const servico = criarServicoPedido();
```

Trocar `RepositorioHttp` por um fake (em teste) ou por outra fonte muda só a fábrica, não as telas.

## Hoje em dia

A ideia de "fábrica de objetos" é super usada, com nomes atuais: **factory functions**, **injeção de dependência** (DI) do Angular/NestJS/Spring, e os **provider/context** do React. Tudo isso é: alguém monta o objeto pronto e te entrega, para você não dar `new` em tudo.

> [!note] O que joguei fora do material
> Os nomes antigos dessa fábrica (`IClassFactory` do COM+ e o "objeto inicial" do EJB) são legado. O conceito é o que importa.

## Comparação com Clean Architecture

A fábrica costuma ficar na borda e é onde você "liga os fios": monta o caso de uso com as implementações concretas e entrega para a tela. O núcleo não dá `new` em detalhes; a fábrica faz isso por fora. Ver [[Clean Architecture]].

## Relacionados

- [[Componentes]]
- [[Acoplamento e Coesão]]
- [[Clean Architecture]]
- [[Interfaces e Contratos]]

---
*Estudo iniciado em 2026-06-02*
