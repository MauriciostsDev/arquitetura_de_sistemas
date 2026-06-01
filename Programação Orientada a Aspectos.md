---
tags:
  - arquitetura-de-sistemas
  - paradigma
  - aspectos
data: 2026-06-01
status: em-estudo
---

# Programação Orientada a Aspectos

> [!summary] Em uma frase
> **Programação Orientada a Aspectos (AOP)** separa as "preocupações transversais" (segurança, transação, log) da regra de negócio, aplicando-as **por fora**, sem espalhar esse código por todo lugar.

## 🎯 A ideia, bem simples

Tem coisas que aparecem em **todo lugar** do sistema: verificar login, registrar log, abrir transação. Se você escrever isso dentro de cada função, vira **repetição e bagunça**. A AOP junta cada uma dessas preocupações num **"aspecto"** e o aplica automaticamente onde for preciso — a regra de negócio fica limpa.

> [!note] Termo-chave: cross-cutting concern
> É uma preocupação que **"corta atravessado"** várias partes do sistema (ex.: segurança aparece no pagamento, no cadastro, na entrega…). A AOP centraliza isso num só lugar. No CCM, é assim que o [[Containers|container]] encaminha requisições e aplica serviços sem o componente saber.

## 🍔 Comparação com o mundo real — sistema de incêndio do prédio

Os **sprinklers e alarmes** de um prédio passam por **todos os andares**, mas nenhum morador instala o seu. É um sistema **transversal**, gerenciado de forma central, que protege todo mundo sem cada apartamento se preocupar. Um aspecto (segurança, log) é esse "sistema de incêndio" do software.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> AOP é uma **ferramenta** para alcançar o objetivo da Clean Architecture: manter a regra de negócio **livre de detalhes**. Em vez de a lógica chamar "checarSegurança()", o aspecto faz isso na **borda**.
> **Cuidado:** os aspectos costumam vir de um framework — mantenha-os na periferia, para o núcleo não depender do framework de AOP.

## 💻 Exemplo em React + TypeScript

Um HOC (ou middleware) é o "aspecto": embrulha o componente e injeta o comportamento transversal.

```tsx
// ASPECTO de logging aplicado por fora — o componente não tem código de log
function comLog<P extends object>(Componente: React.ComponentType<P>, nome: string) {
  return (props: P) => {
    console.log(`[render] ${nome}`); // preocupação transversal, centralizada
    return <Componente {...props} />;
  };
}

const Carrinho = comLog(CarrinhoBase, "Carrinho");
```

## ✅ Por que importa

- **Regra de negócio limpa** (sem código repetido de infra no meio).
- **Manutenção fácil**: muda a regra de segurança/log em **um lugar só**.
- Base de como [[Containers|containers]] aplicam serviços automaticamente.

## 🔗 Relacionados

- [[Containers]]
- [[Programação Declarativa]]
- [[Clean Architecture]]
- [[Abstração]]

---
*Estudo iniciado em 2026-06-01*
