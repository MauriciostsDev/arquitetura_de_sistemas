---
tags:
  - arquitetura-de-sistemas
  - corba
  - ccm
data: 2026-06-01
status: em-estudo
---

# POA (Portable Object Adapter)

> [!summary] Em uma frase
> O **POA** é a peça do [[CORBA]] que fica entre o **ORB** (que recebe as chamadas remotas) e os **objetos de verdade** (servants), decidindo **qual objeto** atende cada pedido e **gerenciando o ciclo de vida** deles.

## 🎯 A ideia, bem simples

Quando uma chamada chega da rede, alguém precisa **encontrar/criar o objeto certo** para responder e depois **liberá-lo**. Esse "alguém" é o POA. Ele **adapta** a chamada genérica do ORB para um objeto concreto. No CCM, o [[Containers|container]] gerencia as **políticas do POA** para você — você não mexe nisso na mão.

## 🍔 Comparação com o mundo real — recepcionista/telefonista

Liga para uma empresa grande: você não sabe o ramal de ninguém. A **telefonista (POA)** atende, descobre **quem** deve falar com você e **transfere** a ligação. Quando acaba, ela libera a linha. O ORB é a linha externa; o POA é quem direciona para a pessoa (servant) certa.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> O POA é um **adaptador de infraestrutura** (borda). Ele faz a ponte entre o protocolo remoto (detalhe) e o objeto de negócio — exatamente o papel de um **adaptador de interface** na Clean Architecture. O objeto de negócio não precisa saber que existe POA; isso fica escondido na periferia.

## 💻 Exemplo em React + TypeScript

O POA "acha o objeto certo para a requisição". O paralelo é um **roteador/dispatcher** que mapeia um id para o handler correto:

```ts
// "POA" em espírito: mapeia a requisição para o objeto (servant) que vai atendê-la
const servants: Record<string, () => Promise<string>> = {
  pedido: () => Promise.resolve("atendido por ServantPedido"),
  pagamento: () => Promise.resolve("atendido por ServantPagamento"),
};

function despachar(tipo: string) {
  const servant = servants[tipo];           // encontra o objeto certo
  if (!servant) throw new Error("sem servant");
  return servant();                          // ativa e delega
}
```

## 🔗 Relacionados

- [[CORBA]]
- [[Containers]]
- [[Framework CCM (CORBA Component Model)]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
