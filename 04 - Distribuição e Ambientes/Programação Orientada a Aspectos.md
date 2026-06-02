---
tags:
  - arquitetura-de-sistemas
  - paradigma
  - aspectos
data: 2026-06-01
status: em-estudo
---

# Programação Orientada a Aspectos

> [!summary] Resumo
> AOP separa coisas que aparecem em todo lugar (segurança, log, transação) da regra de negócio, aplicando-as por fora.

## O que é

Tem código que se repete por todo o sistema: checar login, registrar log, abrir transação. Se você espalha isso dentro de cada função, vira bagunça. A AOP junta cada uma dessas preocupações num "aspecto" e aplica automaticamente onde precisa. A regra de negócio fica limpa.

> [!note] Termo: cross-cutting concern (preocupação transversal)
> É algo que "corta atravessado" o sistema (segurança aparece no pagamento, no cadastro, na entrega). A AOP centraliza isso num lugar só.

## Exemplo do dia a dia

O sistema de incêndio do prédio: sprinklers e alarmes passam por todos os andares, mas nenhum morador instala o seu. É transversal e gerenciado num lugar só. Um aspecto (segurança, log) é esse "sistema de incêndio" do software.

## No código

Um "embrulho" que adiciona log por fora, sem o componente ter código de log:

```tsx
// aspecto de log aplicado por fora
function comLog<P extends object>(Componente: React.ComponentType<P>, nome: string) {
  return (props: P) => {
    console.log(`[render] ${nome}`); // preocupação transversal, num lugar só
    return <Componente {...props} />;
  };
}

const Carrinho = comLog(CarrinhoBase, "Carrinho");
```

## Hoje em dia

A palavra "AOP" caiu de moda, mas a ideia está em tudo: **middlewares** do Express, **interceptors** do Axios/Angular, **decorators** do NestJS, **Higher-Order Components** e o `withAuth` do dia a dia. Todos aplicam comportamento transversal por fora.

## Comparação com Clean Architecture

AOP ajuda a manter a regra de negócio livre de detalhes: em vez de a lógica chamar "checarSegurança()", o aspecto faz isso na borda. Cuidado para não prender o núcleo ao framework de aspectos. Ver [[Clean Architecture]].

## Relacionados

- [[Containers]]
- [[Programação Declarativa]]
- [[Abstração]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
