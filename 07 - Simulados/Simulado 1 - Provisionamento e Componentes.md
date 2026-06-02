---
tags:
  - arquitetura-de-sistemas
  - simulado
  - revisao
data: 2026-06-02
status: revisar
---

# Simulado 1 — Provisionamento e Componentes

> [!summary] Resumo
> 10 questões objetivas com gabarito. As marcadas com "ERREI" são prioridade de revisão. A resposta certa está em **negrito**.

> [!tip] Placar
> Acertei: 2, 5, 9, 10 (4 de 10). Revisar: 1, 3, 4, 6, 7, 8.

## 1. Modelos de desenvolvimento — ERREI

A metodologia de gestão deve contemplar quantas fases forem necessárias para garantir escopo, tempo, custo e qualidade. Qual modelo de desenvolvimento essas fases devem seguir?

- A) Cascata
- B) Cascata com retroalimentação
- C) Espiral
- D) Incremental
- **E) Iterativo e incremental** (correta)

Gabarito: iterativo e incremental — repete ciclos (iterativo) e vai entregando em partes que crescem (incremental).

## 2. Níveis de modelo

Qual modelo é independente do tipo de software ou tecnologia e representa o problema a ser resolvido?

- A) Modelo de Implementação
- B) Modelo de Especificação
- C) Modelo de Projeto
- D) Modelo de Requisitos
- **E) Modelo Conceitual** (correta)

Gabarito: o Modelo Conceitual descreve o problema, sem amarrar a nenhuma tecnologia.

## 3. Componentes — verdadeiras, EXCETO — ERREI

(a EXCETO: a alternativa correta é a **falsa**.)

- A) Podem ser definidos desde a primeira iteração do projeto.
- B) O nível de abstração é, geralmente, alto.
- C) Devem ser projetados buscando alta coesão e baixo acoplamento.
- D) Devem ter interfaces bem definidas, de preferência uma para cada serviço.
- **E) Seguindo a alta coesão, cada componente deve ter no máximo 3 interfaces.** (correta = é a falsa)

Gabarito: não existe limite de "3 interfaces". Um componente pode oferecer quantas interfaces fizer sentido. Ver [[Múltiplas Interfaces]].

## 4. Motivação do Modelo de Componentes CORBA — EXCETO — ERREI

(a EXCETO: a correta é a **falsa**.)

- A) Falta de flexibilidade para estender as funcionalidades dos objetos.
- B) Requisitos não funcionais eram especificados junto com os métodos de negócio.
- C) Necessidade de especialização das interfaces (conexões) entre objetos.
- D) Dificuldade de configurar e usar aplicações em padrões anteriores.
- **E) Necessidade de um mecanismo único de implementação.** (correta = é a falsa)

Gabarito: o CORBA/CCM não buscava um "mecanismo único de implementação". Ver [[Framework CCM (CORBA Component Model)]] (conteúdo legado).

## 5. Caso de uso: include x extend

Estacionamento: ao estacionar, o atendente registra a entrada e o cliente recebe um ticket impresso (obrigatório). Ao retirar, recebe um comprovante (fatura). É correto afirmar:

- **A) Há um relacionamento `include` de Registrar Entrada para Gerar Ticket Impresso (essencial/obrigatório).** (correta)
- B) `extend` para o ticket impresso.
- C) `extend` de Gerar Fatura para Registrar Saída.
- D) `include` opcional.
- E) `generalização`.

Gabarito: é `include` porque o ticket é **sempre** executado (obrigatório). Regra: `include` = sempre acontece; `extend` = acontece às vezes (opcional).

## 6. Princípio do componente — ERREI

O usuário do componente é isolado de como os dados são guardados ou as funções executadas. Ele depende da especificação, não da implementação. Qual princípio?

- **A) Encapsulamento** (correta)
- B) Reusabilidade
- C) Independência
- D) Extensibilidade
- E) Produtividade

Gabarito: encapsulamento = esconder o interior atrás da interface. Ver [[Empacotamento de Componentes]] e [[Abstração]].

## 7. Estratégia de análise de fluxo (workflow) — ERREI

Sobre a estratégia tradicional que analisa o fluxo do sistema, é correto:

- A) Dispensa o levantamento de requisitos.
- B) Sistemas distribuídos não podem ser representados por análise de fluxo.
- C) O objetivo principal é definir componentes reusáveis.
- D) Todas estão erradas.
- **E) As operações são representadas por componentes, ordenados pela sequência das operações.** (correta)

Gabarito: nessa estratégia, você modela os componentes na ordem do fluxo de operações.

## 8. Arquitetura de Sistemas — verdadeiras, EXCETO — ERREI

(a EXCETO: a correta é a **falsa**.)

- A) A arquitetura pode ser vista como processo e como artefato.
- B) A especificação arquitetural pode ser feita após o levantamento de requisitos (funcionais e não funcionais).
- C) Diagramas de componentes, de empacotamento e de distribuição (UML) servem na especificação.
- D) Em OO, as classes ajudam a identificar os componentes.
- **E) É tarefa da arquitetura construir o projeto detalhado dos componentes individuais.** (correta = é a falsa)

Gabarito: o **projeto detalhado** de cada componente é tarefa do design/construção, não da arquitetura. A arquitetura define a estrutura geral.

## 9. Arquitetura em Camadas

Característica principal da arquitetura em camadas:

- A) Um repositório central de dados.
- B) Separação e independência das camadas.
- C) Os dados são gerados por um componente e consumidos pelos outros.
- D) Dependem de infraestrutura de comunicação para implementar.
- **E) Cada camada depende exclusivamente dos serviços da camada inferior.** (correta)

Gabarito: numa camada bem feita, cada nível usa só o de baixo. Lembra a Regra da Dependência da [[Clean Architecture]].

## 10. Gerenciamento de processos: grupos

Desenvolver o termo de abertura do projeto pertence a qual grupo de processos?

- **A) Iniciação** (correta)
- B) Planejamento
- C) Execução
- D) Monitoramento e Controle
- E) Encerramento

Gabarito: tudo começa com a abertura do termo do projeto = Iniciação. (Os 5 grupos: Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento.)

## Temas destas questões (notas)

- [[Modelos de Desenvolvimento]] — questão 1
- [[Níveis de Modelo]] — questão 2
- [[Casos de Uso - include x extend]] — questão 5
- [[Arquitetura em Camadas]] — questão 9
- [[Grupos de Processos de Projeto]] — questão 10

## Relacionados

- [[Múltiplas Interfaces]]
- [[Empacotamento de Componentes]]
- [[Framework CCM (CORBA Component Model)]]
- [[Clean Architecture]]

---
*Simulado registrado em 2026-06-02*
