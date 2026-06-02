---
tags:
  - arquitetura-de-sistemas
  - padroes
  - camadas
data: 2026-06-02
status: em-estudo
---

# Arquitetura em Camadas

> [!summary] Resumo
> Organizar o sistema em camadas, cada uma com uma responsabilidade, onde cada camada usa só os serviços da camada de baixo.

## O que é

Você separa o sistema em níveis (camadas), e cada um conversa só com o nível imediatamente abaixo. As camadas clássicas:

- **Apresentação** (a tela / interface com o usuário)
- **Negócio** (as regras do sistema)
- **Dados** (guardar e buscar no banco)

A característica principal (resposta da questão 9 do [[Simulado 1 - Provisionamento e Componentes]]): **cada camada depende exclusivamente dos serviços da camada inferior.** Isso dá separação e independência.

## Exemplo do dia a dia

Restaurante: o **salão** (atende o cliente) fala com a **cozinha** (faz o prato), que fala com o **estoque** (ingredientes). O garçom não vai mexer no estoque direto — ele pede para a cozinha. Cada um cuida da sua parte e usa só o nível de baixo.

## No código

Cada camada chama só a de baixo:

```ts
// camada de DADOS
class PedidoRepo {
  salvar(itens: string[]) { /* grava no banco */ return "p1"; }
}

// camada de NEGÓCIO (usa a de dados)
class PedidoServico {
  constructor(private repo: PedidoRepo) {}
  criar(itens: string[]) {
    if (itens.length === 0) throw new Error("pedido vazio"); // regra
    return this.repo.salvar(itens);
  }
}

// camada de APRESENTAÇÃO (usa a de negócio)
function TelaPedido(servico: PedidoServico) {
  return servico.criar(["Pizza", "Refri"]);
}
```

## Comparação com Clean Architecture

A Clean Architecture é uma evolução da arquitetura em camadas. A diferença chave: na camadas tradicional, a de cima depende da de baixo (negócio depende de dados). Na Clean Architecture, a **regra de negócio fica no centro e não depende de ninguém** — quem aponta para ela são as bordas (a dependência se inverte). Ver [[Clean Architecture]].

## Hoje em dia

Muito atual. A maioria das aplicações web é em camadas (apresentação, negócio, dados), e variações como **n-tier** e **MVC** seguem a mesma lógica. Entender camadas é base para entender [[Clean Architecture]] e arquitetura hexagonal.

## Relacionados

- [[Clean Architecture]]
- [[Acoplamento e Coesão]]
- [[Distribuição de Componentes]]

---
*Estudo iniciado em 2026-06-02*
