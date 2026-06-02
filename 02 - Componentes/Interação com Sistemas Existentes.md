---
tags:
  - arquitetura-de-sistemas
  - componentes
  - integracao
  - reuso
data: 2026-06-02
status: em-estudo
---

# Interação com Sistemas Existentes

> [!summary] Resumo
> No mundo real, a maioria dos componentes já existe (sistemas prontos ou produtos de prateleira). Você os usa pela API deles, sempre por uma interface bem definida.

## O que é

A teoria fala muito de "criar componentes novos", mas na prática você quase sempre **liga seu sistema a coisas que já existem**: um serviço interno antigo da empresa ou um produto pronto de fora.

A regra: fale com esses componentes prontos **pela API/interface** que eles oferecem. E essa interface precisa ser **bem especificada** — sem dúvida sobre como usar e o que volta de resposta. Você não mexe no que está dentro deles; só usa a porta de entrada.

## Exemplo do dia a dia

Você não constrói o mapa do mundo para ter rota no seu app: usa a **API do Google Maps**. Não faz a maquininha do banco: usa a **API de um gateway de pagamento**. Não calcula frete sozinho: usa a **API dos Correios**. Em todos, você só conhece a porta de entrada (a API) e o que ela devolve.

## No código

Boa prática: não espalhe o serviço externo pelo código. Esconda ele atrás de uma interface sua. Assim, se trocar de fornecedor, muda um arquivo só:

```ts
// SUA interface, do seu jeito (o "contrato" que seu sistema entende)
interface ServicoFrete {
  calcular(cep: string): Promise<number>;
}

// adaptador: conversa com o sistema pronto (Correios) por trás da sua interface
class FreteCorreios implements ServicoFrete {
  async calcular(cep: string) {
    const res = await fetch(`https://api.correios.com/frete?cep=${cep}`);
    const dados = await res.json();
    return dados.valor; // traduz a resposta deles para o seu formato
  }
}

// seu código depende só de ServicoFrete, nunca da API dos Correios direto
function mostrarFrete(servico: ServicoFrete, cep: string) {
  return servico.calcular(cep);
}
```

Se amanhã trocar Correios por transportadora própria, você cria outro `implements ServicoFrete` e o resto do sistema nem percebe.

## Construção: montar a partir de peças prontas

"Construção" aqui é juntar componentes que já existem no ambiente de TI e desenhar uma **interface de usuário** por cima, formando a aplicação. Você monta mais do que escreve do zero.

Um ponto importante: cada componente pronto que você usa é um **item separado com versão própria**. Você precisa controlar **qual versão** de cada um está usando, porque uma atualização pode mudar o comportamento.

> [!note] Na prática hoje
> Isso é exatamente o seu `package.json` + lockfile (npm/yarn), as imagens com tag no Docker, ou as versões fixadas de cada API/SDK. Cada dependência é um "item de configuração": você fixa a versão e atualiza com cuidado (semver: major pode quebrar). É gerenciamento de dependências.

## Comparação com Clean Architecture

Esconder o sistema externo atrás da sua própria interface é o que a Clean Architecture chama de **adaptador na borda** (às vezes "camada anticorrupção"): o núcleo fala a língua dele e o adaptador traduz para a API de fora. Trocar o fornecedor não toca no núcleo. Ver [[Clean Architecture]] e [[Interfaces e Contratos]].

## Relacionados

- [[Reuso de Componentes]]
- [[Componentes]]
- [[Interfaces e Contratos]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-02*
