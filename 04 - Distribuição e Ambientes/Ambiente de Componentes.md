---
tags:
  - arquitetura-de-sistemas
  - componentes
  - ambiente
  - distribuicao
data: 2026-06-01
status: em-estudo
---

# Ambiente de Componentes

> [!summary] Resumo
> É o "lugar" onde os componentes rodam, que já entrega serviços prontos (transação, segurança, concorrência). O componente só segue as regras da casa e usa.

## O que é

Um componente não quer cuidar de coisa chata e repetida: controlar transação, segurança, vários usuários ao mesmo tempo. O ambiente entrega isso pronto. O componente só precisa seguir as regras padrão para plugar e usar. Ver [[Serviços de Infraestrutura]].

## Exemplo do dia a dia

Um shopping. O shopping (ambiente) dá energia, segurança, estacionamento e limpeza. A loja (componente) não gera a própria energia nem contrata segurança; usa o do shopping e segue as regras dele. Assim a loja foca em vender.

## Declarativo x na mão

O material prefere ambientes que entregam a infraestrutura de forma **declarativa** (você só marca "isto precisa de transação e login" e o framework resolve), em vez de **na mão** (você escreve abrir transação, checar permissão etc. no meio da lógica). O declarativo deixa a lógica limpa. Ver [[Programação Declarativa]].

## No código

Na prática, "marcar" o que precisa em vez de escrever passo a passo:

```ts
// declarativo: anota a necessidade; o ambiente cuida de transação e login
@Transacional()
@RequerLogin()
class ConfirmarPedido {
  executar(pedidoId: string) {
    return this.repo.confirmar(pedidoId); // só a regra de negócio
  }
}
```

## As opções citadas (sem dizer qual é melhor)

| Ambiente | Preso à plataforma | Preso à linguagem |
|----------|--------------------|--------------------|
| Microsoft COM+ | Windows | nenhuma |
| Enterprise JavaBeans (EJB) | nenhuma | Java |

## Hoje em dia

COM+ e EJB são antigos. A ideia de "ambiente que entrega infraestrutura pronta" vive hoje em: **servidores de aplicação** modernos (Spring), **plataformas de nuvem** (AWS, Azure), **Kubernetes** e o **serverless** (AWS Lambda). Em todos, você escreve a regra de negócio e a plataforma cuida de escalar, segurança e disponibilidade.

## Comparação com Clean Architecture

O ambiente declarativo ajuda a manter a regra de negócio limpa (a infra vira anotação na borda). Cuidado: se espalhar anotações de um framework pelo coração do domínio, o núcleo passa a depender do framework — o contrário do que a Clean Architecture quer. Use o declarativo na borda. Ver [[Clean Architecture]].

## Relacionados

- [[Containers]]
- [[Serviços de Infraestrutura]]
- [[Programação Declarativa]]
- [[Distribuição de Componentes]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
