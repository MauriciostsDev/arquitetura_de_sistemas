---
tags:
  - arquitetura-de-sistemas
  - infraestrutura
  - ambiente
data: 2026-06-01
status: em-estudo
---

# Serviços de Infraestrutura

> [!summary] Resumo
> São os serviços de bastidor que o [[Ambiente de Componentes|ambiente]] entrega prontos para o componente não ter que refazer.

## O que é

Tarefas que todo sistema sério precisa, mas que não são o negócio em si:

| Serviço | O que faz |
|---------|-----------|
| Transações | tudo acontece ou nada acontece (cobrou e falhou? desfaz tudo) |
| Segurança | só entra quem pode (login e permissão) |
| Concorrência | mil pessoas ao mesmo tempo sem bagunçar os dados |

## Exemplo do dia a dia

Num prédio comercial, a empresa não instala a própria rede elétrica nem contrata a portaria; o prédio fornece e ela usa. Serviços de infraestrutura são a "água, luz e portaria" do mundo dos componentes.

## No código

A segurança como um serviço pronto que a tela só consome (não reimplementa):

```tsx
type Auth = { usuario: string | null; podeAcessar: (recurso: string) => boolean };
const AuthContext = createContext<Auth>({ usuario: null, podeAcessar: () => false });

function AreaPagamentos() {
  const { podeAcessar } = useContext(AuthContext); // usa o serviço pronto
  if (!podeAcessar("pagamentos")) return <p>Acesso negado</p>;
  return <PainelPagamentos />;
}
```

## Hoje em dia

Esses serviços continuam essenciais, só vêm de outras fontes: o **banco de dados** cuida de transações, provedores como **Auth0/Firebase Auth** cuidam de segurança, e a **nuvem** cuida de escala e concorrência. Você raramente escreve isso do zero.

## Comparação com Clean Architecture

São detalhes da borda. A regra de negócio usa segurança/transação por uma interface, sem depender do provedor específico — assim dá para trocar sem mexer no núcleo. Ver [[Clean Architecture]].

## Relacionados

- [[Ambiente de Componentes]]
- [[Programação Declarativa]]
- [[Middleware]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
