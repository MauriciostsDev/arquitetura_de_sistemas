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

> [!summary] Resumo
> O container é onde o componente roda. Ele liga/desliga o componente para poupar memória e entrega os serviços (segurança, transação, persistência) prontos.

> [!warning] Cuidado com o nome
> Este "container" é o do CCM/servidores de aplicação antigos. **Não é** o container do Docker (que é outra coisa: empacotar e isolar um app inteiro). Veja "Hoje em dia" no fim.

## O que é

O componente quer cuidar só da regra de negócio. Ele não quer saber de gerenciar memória nem de achar serviços do sistema. O container resolve tudo isso por baixo, e usa [[Programação Orientada a Aspectos|aspectos]] para aplicar segurança e transação sem o componente chamar nada.

## Exemplo do dia a dia

Um hotel. O quarto (componente) só é preparado quando chega hóspede e é liberado quando ele sai, para economizar. O hóspede não instala a fechadura nem cuida da energia: a recepção (container) fornece tudo.

## Funcionalidades

| Funcionalidade | O que faz |
|----------------|-----------|
| Ativar/desativar | liga o componente só quando precisa, poupando memória |
| Adaptar serviços | conecta o componente a transação, persistência, segurança, notificação |
| Adaptar call-backs | trata as chamadas de retorno |
| Políticas de objeto | cuida de como os objetos do servidor são criados/encontrados (ver [[POA (Portable Object Adapter)]]) |

## As 4 políticas de ciclo de vida

Cada uma equilibra economia de memória x custo de ligar/desligar:

| Política | Quando liga/desliga | Troca |
|----------|---------------------|-------|
| Por método | a cada chamada de método | usa pouca memória, mas paga ligar/desligar toda hora |
| Por transação | a cada transação | memória presa durante a transação |
| Chamada + desligar explícito | liga na 1ª chamada; desliga quando a app pedir | controle nas mãos da aplicação |
| Chamada + liberar depois | desliga ao fim, mas segura a memória até o container liberar | desliga rápido e reaproveita a memória |

É o dilema "apagar a luz toda vez que sai" (economiza, mas desgasta) x "deixar ligada um tempo" (gasta, mas evita liga-desliga).

## No código

O ciclo de vida do container é igual ao mount/unmount do React; o cleanup do `useEffect` é a "desativação que libera recursos":

```tsx
function ComponenteServidor({ id }: { id: string }) {
  useEffect(() => {
    const conexao = abrirRecurso(id);   // ativa: aloca recurso ao entrar
    return () => conexao.fechar();      // desativa: libera ao sair
  }, [id]);
  return <div>Servindo {id}</div>;
}
```

## Hoje em dia

O conceito de "ligar sob demanda e desligar para poupar" é exatamente o **serverless (AWS Lambda)**: a função acorda na 1ª chamada (cold start) e dorme depois de ociosa. E a entrega de serviços prontos virou o trabalho de plataformas como **Spring** e **Kubernetes**. Ou seja: o container do CCM é o avô dessas ideias.

## Comparação com Clean Architecture

O material diz que "o componente não precisa saber como achar serviços do sistema". Isso é a Regra da Dependência: o núcleo ignora a infraestrutura. O termo do material "camada de adaptação" é literalmente o adaptador da Clean Architecture. Ver [[Clean Architecture]].

## Relacionados

- [[Programação Orientada a Aspectos]]
- [[POA (Portable Object Adapter)]]
- [[Ambiente de Componentes]]
- [[Framework CCM (CORBA Component Model)]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
