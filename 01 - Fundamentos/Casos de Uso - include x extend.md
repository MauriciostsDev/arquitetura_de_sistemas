---
tags:
  - arquitetura-de-sistemas
  - uml
  - requisitos
data: 2026-06-02
status: em-estudo
---

# Casos de Uso: include x extend

> [!summary] Resumo
> include = um caso de uso sempre usa outro (obrigatório). extend = um caso de uso pode usar outro em certa condição (opcional).

## O que é

Em UML, um caso de uso pode se ligar a outro de duas formas principais:

- **include**: o caso A **sempre** executa o caso B. B é parte essencial de A.
- **extend**: o caso A **às vezes** é estendido pelo caso B, só numa condição. B é opcional.

Macete: **include = sempre; extend = às vezes.** (Foi a pegadinha da questão 5 do [[Simulado 1 - Provisionamento e Componentes]].)

## Exemplo do dia a dia

No estacionamento: "Registrar Entrada" **include** "Gerar Ticket" — o ticket é sempre impresso, é obrigatório. Já "Fechar Conta" **extend** "Aplicar Cupom" — só acontece se o cliente tiver cupom.

## No código

A diferença vira chamada obrigatória x chamada condicional:

```ts
function registrarEntrada(placa: string) {
  const ticket = gerarTicket(placa); // INCLUDE: sempre chama, é obrigatório
  return ticket;
}

function fecharConta(valor: number, cupom?: string) {
  let total = valor;
  if (cupom) {
    total = aplicarCupom(total, cupom); // EXTEND: só chama se houver cupom
  }
  return total;
}
```

## Hoje em dia

No mundo ágil, casos de uso UML deram bastante lugar às **user stories** ("como cliente, quero...") e aos critérios de aceite. Mas include/extend ainda aparecem em modelagem, em provas e em sistemas mais formais. O conceito (obrigatório x opcional) continua útil para pensar fluxos.

## Relacionados

- [[Especificação de Componentes]]
- [[Especificação vs Construção de Componentes]]
- [[Interfaces e Contratos]]

---
*Estudo iniciado em 2026-06-02*
