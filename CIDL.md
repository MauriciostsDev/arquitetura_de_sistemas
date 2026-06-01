---
tags:
  - arquitetura-de-sistemas
  - corba
  - ccm
  - declarativo
data: 2026-06-01
status: em-estudo
---

# CIDL (Component Implementation Definition Language)

> [!summary] Em uma frase
> A **CIDL** é uma **linguagem declarativa** do [[Framework CCM (CORBA Component Model)|CCM]] usada para **descrever** a implementação e a **persistência de estado** dos componentes e seus *homes* — você diz **como o componente deve se comportar**, e o [[CIF]] gera o código repetitivo a partir disso.

## 🎯 A ideia, bem simples

Em vez de escrever na mão todo o "esqueleto" de um componente (como ele ativa, navega, guarda estado), você **declara** essas características num arquivo CIDL. É um **formulário de configuração**: você preenche o que o componente é, e a ferramenta gera o resto. Puro espírito de [[Programação Declarativa]].

## 🗂️ As 4 categorias de componente (a tabela reconstruída)

O arquivo CIDL especifica em qual **categoria** o componente se encaixa. Cada categoria define como o componente lida com **estado** e **persistência**:

| Categoria | CORBA usage model | Tipo de API do container | Interface base chaveada | Exemplo |
|-----------|-------------------|--------------------------|-------------------------|---------|
| **Service** | Stateless | Session | Não | Componentes do sistema |
| **Session** | Conversational | Session | Não | Interfaces de interação |
| **Process** | Durável (Durable) | Entity | Não | Regras de negócio |
| **Entity** | Durável (Durable) | Entity | **Sim** | Objetos de negócio |

> [!note] Lendo a tabela do jeito simples
> - **Service** = **sem memória**. Cada chamada é independente (como uma calculadora: não lembra a conta anterior).
> - **Session** = **lembra durante a conversa**. Guarda estado enquanto você interage, mas some no fim (como um carrinho de compras antes de finalizar).
> - **Process** = **durável**, mas sem identidade pública. Estado persistido; representa um **processo de negócio**.
> - **Entity** = **durável e com chave** (identidade). É um **objeto de negócio** que existe no banco e pode ser encontrado pela chave (ex.: o Pedido nº 123).

## 🍔 Comparação com o mundo real — pedido no iFood

- **Service** → a **calculadora de frete**: você manda o CEP, ela devolve o valor e esquece tudo.
- **Session** → o **carrinho** enquanto você escolhe: lembra os itens durante a navegação.
- **Process** → o **fluxo do pedido** sendo processado (cobrar → separar → despachar): tem estado que dura, mas é um processo.
- **Entity** → o **Pedido nº 123** salvo no banco: tem identidade, dá pra buscar depois.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> A divisão por **estado/persistência** lembra a separação de camadas da Clean Architecture:
> - **Entity (CCM)** ≈ as **Entidades** da Clean Architecture: objetos de negócio com identidade e estado durável.
> - **Service/Session** ≈ comportamentos mais próximos dos **casos de uso** e da interação.
>
> **Cuidado (não é igual):** a "Entity" do CCM é uma categoria **técnica de container** (ligada a persistência/chave), enquanto a "Entity" da Clean Architecture é uma **regra de negócio pura, sem saber de banco**. O nome coincide, o propósito não é idêntico. A CIDL, sendo **declarativa**, ajuda a manter esses detalhes de persistência **fora** da lógica — o que combina com a Clean Architecture.

## 💻 Exemplo em React + TypeScript

As categorias do CCM mapeiam quase 1:1 com **como você lida com estado no React**:

```tsx
// SERVICE (stateless): componente puro, sem memória entre chamadas
const Frete = ({ cep }: { cep: string }) => <span>Frete para {cep}</span>;

// SESSION (conversational): estado que vive durante a sessão (some no refresh)
function Carrinho() {
  const [itens, setItens] = useState<string[]>([]); // memória temporária
  return <button onClick={() => setItens([...itens, "Pizza"])}>Add ({itens.length})</button>;
}

// ENTITY (durável + chave): estado persistido, identificado por id
async function salvarPedido(pedido: { id: string; itens: string[] }) {
  await fetch(`/api/pedidos/${pedido.id}`, { method: "PUT", body: JSON.stringify(pedido) });
  // existe no banco, tem identidade (id) e pode ser buscado depois
}
```

E a própria CIDL, por ser **declarativa**, lembra um descritor/decorator que diz "este componente é durável e tem chave":

```ts
// espírito da CIDL: você DECLARA a categoria, a ferramenta gera o esqueleto
@Componente({ categoria: "Entity", durable: true, keyed: true })
class Pedido {
  constructor(public id: string, public itens: string[]) {}
}
```

## 🔗 Relacionados

- [[CIF]]
- [[Framework CCM (CORBA Component Model)]]
- [[Programação Declarativa]]
- [[Clean Architecture]]
- [[Implementação de Componentes]]

---
*Estudo iniciado em 2026-06-01*
