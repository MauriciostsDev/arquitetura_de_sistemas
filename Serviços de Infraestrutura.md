---
tags:
  - arquitetura-de-sistemas
  - infraestrutura
  - ambiente
data: 2026-06-01
status: em-estudo
---

# Serviços de Infraestrutura

> [!summary] Em uma frase
> São os serviços "de bastidor" que o **[[Ambiente de Componentes|ambiente]]** oferece prontos — **transações, segurança, concorrência** etc. — para que o componente **não precise reimplementá-los** e foque só na regra de negócio.

## 🎯 A ideia, bem simples

São tarefas que **todo sistema sério precisa**, mas que **não são o negócio em si**. Em vez de cada componente refazer, o ambiente entrega como serviço compartilhado.

| Serviço | O que faz | Em uma frase |
|---------|-----------|--------------|
| **Transações** | tudo acontece ou nada acontece | "cobrou? então registra. Falhou? desfaz tudo." |
| **Segurança** | autenticação e autorização | "só entra quem pode" |
| **Concorrência** | vários usuários ao mesmo tempo | "mil pessoas pedindo sem bagunçar os dados" |

## 🍔 Comparação com o mundo real — infraestrutura do prédio

Num prédio comercial, você (a empresa) não instala sua própria rede elétrica, nem o elevador, nem contrata segurança da portaria. **O prédio fornece**; você só usa e segue as regras. Serviços de infraestrutura são a "água, luz e portaria" do mundo dos componentes.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> Na Clean Architecture, esses serviços são **detalhes da borda** (camada de frameworks & drivers). A regra de negócio **usa** segurança/transação por meio de uma [[Interfaces e Contratos|interface]], mas **não deve depender** de uma implementação específica. Assim você troca o provedor de infraestrutura sem tocar no núcleo.

## 💻 Exemplo em React + TypeScript

A segurança (um serviço de infraestrutura) exposta como contexto reutilizável — telas consomem sem reimplementar login:

```tsx
type Auth = { usuario: string | null; podeAcessar: (recurso: string) => boolean };
const AuthContext = createContext<Auth>({ usuario: null, podeAcessar: () => false });

// componente só PERGUNTA ao serviço; não implementa a regra de segurança
function AreaPagamentos() {
  const { podeAcessar } = useContext(AuthContext);
  if (!podeAcessar("pagamentos")) return <p>Acesso negado</p>;
  return <PainelPagamentos />;
}
```

## 🔗 Relacionados

- [[Ambiente de Componentes]]
- [[Programação Declarativa]]
- [[Clean Architecture]]
- [[Middleware]]

---
*Estudo iniciado em 2026-06-01*
