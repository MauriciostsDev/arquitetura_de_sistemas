---
tags:
  - arquitetura-de-sistemas
  - componentes
  - design
data: 2026-06-02
status: em-estudo
---

# Múltiplas Interfaces

> [!summary] Resumo
> Um mesmo componente pode oferecer várias interfaces ao mesmo tempo. E é melhor ter várias interfaces pequenas do que uma gigante.

## O que é

Um objeto pode ter vários "papéis" ao mesmo tempo, cada um descrito por uma interface. Exemplo do material: um documento que é, ao mesmo tempo, `Documento`, `Fatura` e `Extrato`. Quem só precisa da parte de fatura usa só a interface de fatura, sem ver o resto.

A boa prática que vem disso: **prefira interfaces pequenas e focadas** a uma interface enorme com tudo dentro. Cada cliente depende só do que usa. (Isso é o "I" do SOLID: Interface Segregation.)

## Exemplo do dia a dia

Uma impressora multifuncional. Ela imprime, escaneia e tira cópia. Em vez de uma interface gigante "MaquinaQueFazTudo", você separa: `Impressora`, `Scanner`, `Copiadora`. Quem só quer imprimir pega só `Impressora` e não se preocupa com o resto.

## No código

Uma classe pode implementar várias interfaces. Funções dependem só do papel que precisam:

```ts
interface Documento { abrir(): void; }
interface Fatura { valorTotal(): number; }
interface Extrato { periodo(): string; }

// um mesmo objeto cumpre os três papéis
class NotaFiscal implements Documento, Fatura, Extrato {
  abrir() {}
  valorTotal() { return 100; }
  periodo() { return "junho/2026"; }
}

// quem só precisa de fatura depende só de Fatura
function somar(faturas: Fatura[]) {
  return faturas.reduce((t, f) => t + f.valorTotal(), 0);
}
```

## Comparação com Clean Architecture

Combina direto: o núcleo define interfaces pequenas e específicas para o que precisa, e a borda implementa. Interface pequena = menos acoplamento. Ver [[Clean Architecture]] e [[Acoplamento e Coesão]].

## Relacionados

- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Princípio de Substituição de Liskov]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-02*
