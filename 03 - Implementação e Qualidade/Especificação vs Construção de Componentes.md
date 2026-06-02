---
tags:
  - arquitetura-de-sistemas
  - componentes
  - uml
  - especificacao
data: 2026-06-02
status: em-estudo
---

# Especificação vs Construção de Componentes

> [!summary] Resumo
> A especificação diz o que o componente deve oferecer (as interfaces). A construção é o componente de verdade que cumpre isso. Em UML, o componente "realiza" a interface que a especificação "oferece".

## O que é

Dois lados da mesma peça:
- **Especificação**: o contrato. Diz quais interfaces o componente oferece (ex.: `createCustomer`, `deleteCustomer`, `getCustomerDetails`).
- **Construção**: o componente real que implementa esse contrato.

Em UML isso aparece com alguns rótulos (estereótipos):
- `<<comp spec>>` = a especificação do componente.
- `<<interface type>>` / `<<interface>>` = a interface oferecida.
- `<<offers>>` = a especificação oferece a interface.
- `<<realize>>` = o componente realiza (cumpre) a especificação e a interface.

A vantagem: a correspondência é simples. O que a especificação **oferece**, a construção **realiza**. Um para um.

## Exemplo do dia a dia

A planta de uma casa. A planta (especificação) diz "aqui vai uma porta de 80cm que liga a sala à cozinha". O pedreiro (construção) realiza isso com uma porta de verdade. A planta não diz a marca da dobradiça nem o tipo de madeira; isso é problema da construção.

## No código

A especificação é a interface; a construção é a classe que a implementa (o "realize" da UML):

```ts
// ESPECIFICAÇÃO (o que o componente oferece) — o <<interface type>>
interface ICustomerMgt {
  createCustomer(nome: string): string;       // retorna o id
  deleteCustomer(id: string): void;
  getCustomerDetails(id: string): { id: string; nome: string };
}

// CONSTRUÇÃO (o componente que "realiza" a especificação)
class CustomerMgr implements ICustomerMgt {
  createCustomer(nome: string) { return "c1"; }
  deleteCustomer(id: string) { /* ... */ }
  getCustomerDetails(id: string) { return { id, nome: "Ana" }; }
}
```

## Mapeamento de construção e restrições

Quando você pega a especificação (abstrata) e constrói numa tecnologia real, surgem pontos que precisam ser decididos, porque cada linguagem/tecnologia trata de um jeito:

| Ponto | O que decidir |
|-------|---------------|
| Parâmetros das operações | tipos e direção (entra / sai / entra-e-sai / retorno) e como passar referências |
| Erros e exceções | como sinalizar falha (lançar exceção, retornar código, objeto de erro) |
| Herança de interface | se a tecnologia suporta uma interface herdar de outra, e como |
| Sequência de operações | a ordem em que as operações podem/devem ser chamadas |
| Propriedades da interface | atributos expostos pela interface |
| Criação do objeto | como a instância do componente é criada |
| Eventos | como o componente avisa que algo aconteceu |

Exemplo prático da diferença: a especificação diz "deletar cliente pode falhar". Em uma linguagem você resolve com exceção; em outra, com um retorno:

```ts
// opção A: erro por exceção
deleteCustomer(id: string): void; // lança erro se não existir

// opção B: erro no retorno (sem exceção)
deleteCustomer(id: string): { ok: boolean; erro?: string };
```

A especificação é a mesma; a construção muda conforme essas restrições.

## Comparação com Clean Architecture

É a mesma divisão da Clean Architecture: a especificação é a interface (a fronteira definida pelo núcleo) e a construção é a implementação na borda. O "mapeamento e restrições" é exatamente o trabalho do adaptador: encaixar o contrato abstrato numa tecnologia concreta. Ver [[Clean Architecture]] e [[Interfaces e Contratos]].

## Hoje em dia

Desenhar isso com estereótipos UML formais é coisa mais acadêmica. Na prática de hoje:
- A "especificação" virou a **interface no código** (interface do TypeScript/Java) ou um **contrato** em OpenAPI (REST) / Protobuf (gRPC).
- A "construção" é a classe/serviço que implementa esse contrato.
- Ferramentas **geram os stubs** a partir do contrato (OpenAPI Generator, protoc), e o desenvolvedor só preenche a lógica.

As "restrições de mapeamento" continuam existindo: cada linguagem trata exceção, parâmetros e eventos de um jeito. Por isso contratos como Protobuf definem isso de forma explícita.

## Relacionados

- [[Especificação de Componentes]]
- [[Implementação de Componentes]]
- [[Interfaces e Contratos]]
- [[Framework CCM (CORBA Component Model)]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-02*
