---
tags:
  - arquitetura-de-sistemas
  - moc
  - indice
data: 2026-06-01
status: em-estudo
---

# Arquitetura de Sistemas — Índice

> [!summary] O que é esta nota
> O mapa central do estudo. Cada link leva a uma nota curta e prática, com exemplo do dia a dia, exemplo em código e (quando o assunto é antigo) uma seção "Hoje em dia" explicando onde ele se encaixa agora.

> [!tip] Por onde começar
> Siga a ordem das pastas: Fundamentos, depois Componentes, Implementação e Qualidade, Distribuição e Ambientes e, por fim, Frameworks.

> [!info] Pastas (com cores)
> As notas ficam em pastas por tema, cada uma com cor no explorador e no grafo:
> 01 Fundamentos (azul) · 02 Componentes (verde) · 03 Implementação e Qualidade (laranja) · 04 Distribuição e Ambientes (roxo) · 05 Frameworks CCM e CORBA (vermelho) · 06 Referência (teal) · 07 Simulados (rosa) · 08 Processos e Gestão (índigo).
> Os links funcionam por nome do arquivo, então mover de pasta não quebra nada.

## 1. Fundamentos

- [[Abstração]] — olhar o que faz, esconder o como
- [[Interfaces e Contratos]] — o "cardápio" público de um componente
- [[Múltiplas Interfaces]] — um componente com vários papéis; prefira interfaces pequenas
- [[Princípio de Substituição de Liskov]] — o substituto cumpre todas as promessas do original (SOLID)
- [[Acoplamento e Coesão]] — pouca dependência por fora, foco por dentro
- [[Níveis de Modelo]] — do conceitual (problema) à implementação (código)
- [[Casos de Uso - include x extend]] — include = sempre; extend = às vezes (opcional)
- [[Congeneridade]] — componentes compatíveis (termo de material; revisar com professor)

## 2. Componentes

- [[Empacotamento de Componentes]] — juntar por função; a interface esconde o interior
- [[Componentes]] — os tipos (hardware, SO, banco, comerciais) e de onde vêm
- [[Reuso de Componentes]] — não reinventar a roda
- [[Interação com Sistemas Existentes]] — usar componentes prontos pela API, atrás de uma interface
- [[Padrão Factory]] — uma fábrica monta e entrega o objeto pronto
- [[Granularidade de Componentes]] — peça grande (implantar) x pequena (projetar); monolito x microserviço

## 3. Implementação e Qualidade

- [[Implementação de Componentes]] — quem faz o quê (dev, arquiteto, qualidade)
- [[Especificação de Componentes]] — a "ficha técnica" feita pelo arquiteto
- [[Especificação vs Construção de Componentes]] — contrato (UML) x componente real, e as restrições
- [[Garantia da Qualidade]] — QA: cuida do processo (previne)
- [[Controle da Qualidade]] — QC: cuida do produto pronto (confere)

## 4. Distribuição e Ambientes

- [[Distribuição de Componentes]] — espalhar em containers, conectar pelo middleware
- [[Middleware]] — o intermediário que conecta componentes distantes
- [[Ambiente de Componentes]] — o "lugar" que oferece serviços prontos
- [[Containers]] — onde o componente roda; liga/desliga para poupar memória
- [[Serviços de Infraestrutura]] — transação, segurança, concorrência
- [[Programação Declarativa]] — dizer o que quer e o framework resolve
- [[Programação Orientada a Aspectos]] — separar segurança/log da lógica

## 5. Frameworks (CCM e CORBA) — conteúdo legado

Cada nota tem "Hoje em dia" mostrando o equivalente atual.

- [[Framework CCM (CORBA Component Model)]] — padronizar componentes (hoje: Docker, K8s, serverless)
- [[CORBA]] — chamada remota antiga (hoje: REST, gRPC, GraphQL)
- [[CIDL]] — descrever o componente (hoje: decorators, YAML, schema)
- [[CIF]] — gerar código repetitivo (hoje: scaffolding, ORM, OpenAPI)
- [[POA (Portable Object Adapter)]] — direcionar a chamada (hoje: routers, gateways)

## 6. Referência

- [[Clean Architecture]] — comparada em todas as notas: regra de negócio no centro, detalhes na borda
- [[Arquitetura em Camadas]] — cada camada usa só a de baixo (a "avó" da Clean Architecture)

## 7. Simulados

Questões de prova com gabarito, para revisar.

- [[Simulado 1 - Provisionamento e Componentes]] — 10 questões (modelos, componentes, CORBA, camadas, processos)

## 8. Processos e Gestão

Como o projeto e o desenvolvimento são organizados.

- [[Modelos de Desenvolvimento]] — cascata, espiral, iterativo e incremental (base do ágil)
- [[Grupos de Processos de Projeto]] — Iniciação, Planejamento, Execução, Monitoramento, Encerramento

---

## Como tudo se conecta

```
   FUNDAMENTOS                         Clean Architecture
   Abstração, Interfaces               (usada como comparação
   Acoplamento e Coesão  ───────────    em todas as notas)
          |
          v
   COMPONENTES (estrutura)
   Empacotamento, Componentes, Reuso
          |
          v
   IMPLEMENTAÇÃO E QUALIDADE
   Especificação -> Implementação -> QA/QC
          |
          v
   DISTRIBUIÇÃO E AMBIENTES
   Distribuição, Middleware, Ambiente,
   Containers, Serviços de Infra, AOP
          |
          v
   FRAMEWORKS (legado)
   CCM  -- em cima do -->  CORBA (usa POA)
   CIDL (descreve) -> CIF (gera código)
```

> [!note] Estilo das notas
> Sem emojis, linguagem simples e direta. Cada nota: resumo, o que é, exemplo do dia a dia, exemplo em código, comparação com Clean Architecture e, se for legado, "Hoje em dia". Cada link tem sua própria nota.

---
*Índice atualizado em 2026-06-02 · 35 notas + simulado + app de quiz*
