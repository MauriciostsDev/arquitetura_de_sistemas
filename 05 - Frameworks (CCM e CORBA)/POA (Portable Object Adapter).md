---
tags:
  - arquitetura-de-sistemas
  - corba
  - ccm
data: 2026-06-01
status: em-estudo
---

# POA (Portable Object Adapter)

> [!summary] Resumo
> O POA é a peça do [[CORBA]] que fica entre o ORB (recebe a chamada da rede) e os objetos reais, decidindo qual objeto atende cada pedido e cuidando do ciclo de vida deles.

## O que é

Quando uma chamada chega da rede, alguém precisa achar (ou criar) o objeto certo para responder e depois liberá-lo. Esse alguém é o POA. Ele adapta a chamada genérica do ORB para um objeto concreto. No CCM, o [[Containers|container]] cuida das políticas do POA para você.

## Exemplo do dia a dia

A telefonista de uma empresa grande. Você liga sem saber o ramal de ninguém; ela atende, descobre quem deve falar com você e transfere. Quando acaba, libera a linha. O ORB é a linha de fora; o POA é quem direciona para a pessoa certa.

## No código

O POA "acha o objeto certo para a chamada". O paralelo é um roteador que mapeia um nome para o handler correto:

```ts
// "POA": mapeia o pedido para o objeto que vai atender
const servants: Record<string, () => Promise<string>> = {
  pedido: () => Promise.resolve("atendido pelo ServantPedido"),
  pagamento: () => Promise.resolve("atendido pelo ServantPagamento"),
};

function despachar(tipo: string) {
  const servant = servants[tipo]; // encontra o objeto certo
  if (!servant) throw new Error("sem servant");
  return servant();               // ativa e delega
}
```

## Hoje em dia

POA é detalhe interno do CORBA (legado). Mas a função dele — "receber a chamada e mandar para o objeto/função certo" — é o que todo **roteador** faz hoje: o router do **Express**, o dispatcher do **NestJS**, o roteamento de um **API Gateway**. Mesmo papel, nomes novos.

## Comparação com Clean Architecture

O POA é um adaptador na borda: liga o protocolo remoto (detalhe) ao objeto de negócio. O objeto não precisa saber que o POA existe. Ver [[Clean Architecture]].

## Relacionados

- [[CORBA]]
- [[Containers]]
- [[Framework CCM (CORBA Component Model)]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
