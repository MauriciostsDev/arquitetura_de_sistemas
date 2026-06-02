---
tags:
  - arquitetura-de-sistemas
  - ccm
  - ambiente
  - execucao
data: 2026-06-01
status: em-estudo
---

# Containers

> [!summary] Em uma frase
> O **container** é o "ambiente de execução" que **hospeda** os componentes (empacotados em DLLs) e cuida da parte chata por eles — **ligar/desligar** o componente para poupar memória e **adaptar** os serviços de transação, segurança, persistência e notificação.

## 🎯 A ideia, bem simples

O componente quer só cuidar da **regra de negócio**. Ele **não quer saber** de detalhes como criar hierarquia de [[POA (Portable Object Adapter)|POAs]], localizar serviços do CCM ou gerenciar memória. O **container resolve tudo isso por baixo** — o componente fica "limpo".

> [!note] Como ele encaminha as chamadas
> O container usa **[[Programação Orientada a Aspectos]]** para interceptar a requisição do cliente e encaminhá-la ao componente certo, aplicando no caminho as regras transversais (segurança, transação…) **sem o componente precisar chamar nada disso**.

## 🍔 Comparação com o mundo real — recepção de um hotel

O **hotel** é o container; o **quarto/hóspede** é o componente:

- O quarto só é **preparado (ativado)** quando chega hóspede; quando ele sai, o quarto é **liberado (desativado)** para economizar limpeza/energia. → poupar recursos.
- O hóspede não instala a própria fechadura nem gerencia a luz: a **recepção/infra do hotel** fornece tudo (segurança, energia, telefone). → camada de adaptação.

> [!tip] Versão moderna: serverless (AWS Lambda)
> O container é o avô do **serverless**. No Lambda, a função "acorda" na primeira chamada (*cold start*) e "dorme" depois de ociosa, liberando memória — exatamente a **ativação/desativação** dos containers CCM.

## ⚙️ Funcionalidades do container

| Funcionalidade | O que faz (jeito simples) |
|----------------|---------------------------|
| **Ativação/desativação** | liga o componente só quando precisa, preservando recursos (memória) |
| **Camada de adaptação de serviços** | conecta o componente a **transação, persistência, segurança e notificação** |
| **Camada de adaptação para call-backs** | trata as chamadas de retorno (o servidor chamando de volta o cliente) |
| **Gerência de políticas do [[POA (Portable Object Adapter)|POA]]** | cuida de como os objetos do servidor são criados/encontrados |

## ♻️ Gerenciamento do ciclo de vida (as 4 políticas)

O container decide **quando ligar e desligar** o componente. Cada política equilibra **economia de memória** vs. **custo de ligar/desligar**:

| Política | Quando ativa/desativa | Trade-off |
|----------|------------------------|-----------|
| **Por método** | liga e desliga **a cada chamada de método** | usa memória só durante a operação, mas paga o **custo de ativar/desativar toda hora** |
| **Por transação** | liga/desliga **a cada transação** | memória fica alocada **durante toda a transação** |
| **Por chamada + desativação explícita** | ativa na **1ª chamada**; só desativa quando a **aplicação pedir** | controle nas mãos da aplicação; libera memória quando ela mandar |
| **Por chamada + liberação tardia** | ativa na 1ª chamada e desativa ao fim da operação, **mas a memória fica alocada** até o **container decidir** liberar | desativa rápido, mas segura a memória para reusar (evita custo de realocar) |

> [!note] A intuição
> É o mesmo dilema de "desligar a luz toda vez que sai do cômodo" (economiza energia, mas desgasta o interruptor) vs. "deixar ligada um tempo" (gasta energia, mas evita liga-desliga). O container escolhe a estratégia conforme a necessidade.

## 🧠 Comparação com a Clean Architecture

> [!info] Conexão com [[Clean Architecture]]
> O texto do material é praticamente uma definição de Clean Architecture: *"os componentes não precisam saber como tratar problemas como criação de POAs e localizar serviços do CCM"*. Isso é **a Regra da Dependência**: o **núcleo (componente)** ignora os **detalhes (infraestrutura)**.
>
> - O container é a **camada de frameworks & drivers** (a borda).
> - O termo do material **"camada de adaptação"** é literalmente o que a Clean Architecture chama de **adaptadores de interface**: o container adapta o mundo externo (transação, segurança) para o componente, atrás de [[Interfaces e Contratos|interfaces]].
>
> Resultado: você pode trocar a infraestrutura sem tocar na regra de negócio.

## 💻 Exemplo em React + TypeScript

O ciclo de vida do container ≈ **mount/unmount** de um componente React. O `useEffect` com função de limpeza é a "ativação/desativação que libera recursos":

```tsx
// O React "ativa" no mount e "desativa" no unmount — igual ao container CCM
function ComponenteServidor({ id }: { id: string }) {
  useEffect(() => {
    const conexao = abrirRecurso(id);     // ATIVAÇÃO: aloca recurso ao entrar
    return () => conexao.fechar();        // DESATIVAÇÃO: libera memória ao sair
  }, [id]);
  return <div>Servindo {id}…</div>;
}
```

E a "camada de adaptação" (serviços transversais aplicados sem o componente chamar) ≈ um **Higher-Order Component** que injeta segurança/transação por fora:

```tsx
// AOP na prática: o "container" embrulha o componente e aplica regras transversais
function comInfraestrutura<P extends object>(Componente: React.ComponentType<P>) {
  return (props: P) => {
    if (!usuarioAutenticado()) return <p>Acesso negado</p>; // segurança
    // ...aqui caberiam transação, logging, etc. — o Componente nem sabe disso
    return <Componente {...props} />;
  };
}

const ComponenteProtegido = comInfraestrutura(ComponenteServidor);
```

> [!note] A ponte
> O `comInfraestrutura` faz o papel do **container**: o `ComponenteServidor` só tem a lógica; segurança/recursos são aplicados **por fora**, via [[Programação Orientada a Aspectos|aspectos]].

## 🔗 Relacionados

- [[Programação Orientada a Aspectos]]
- [[POA (Portable Object Adapter)]]
- [[Ambiente de Componentes]]
- [[Serviços de Infraestrutura]]
- [[Framework CCM (CORBA Component Model)]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
