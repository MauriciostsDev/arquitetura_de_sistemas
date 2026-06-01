---
tags:
  - arquitetura-de-sistemas
  - componentes
  - compatibilidade
data: 2026-06-01
status: revisar-com-professor
---

# Congeneridade

> [!warning] Atenção: termo não-padronizado
> **Congeneridade** não é um termo consagrado na literatura clássica de arquitetura de software (Bass, Fowler, Sommerville etc.). Ele aparece em alguns materiais de curso brasileiros. A definição abaixo é construída a partir da **etimologia** e do contexto — **confirme o sentido exato com seu professor/material.**

> [!summary] Em uma frase
> **Congeneridade** é a qualidade de os componentes serem **congêneres** — isto é, **compatíveis, conformes a um mesmo padrão e da mesma "espécie"** — de modo que se encaixem corretamente no projeto como um todo.

## 🧬 Etimologia (a chave do conceito)

- **Congênere** = "do mesmo gênero / da mesma natureza".
- **Congeneridade** = a propriedade/estado de ser congênere → **compatibilidade e conformidade** entre componentes.

Ou seja, o **centro** do termo é **compatibilidade**, não "controle de mudanças".

## ✏️ Ajustando uma definição comum

> [!example] Análise inicial (a corrigir)
> *"Congeneridade é a verificação de mudanças entre vários componentes para que no final eles se adequem ao projeto."*

O que está certo e o que ajustar:

| Parte da frase | Avaliação |
|----------------|-----------|
| "...para que se adequem ao projeto" | ✅ correto — é o **objetivo** |
| "verificação de mudanças" | ⚠️ é um **meio**, não a essência |
| núcleo do conceito | ❌ não é "controle de mudanças" e sim **compatibilidade / conformidade** |

> [!important] Correção
> A verificação de mudanças é uma **ferramenta** para *manter* a congeneridade. A congeneridade em si é a **propriedade** de os componentes permanecerem compatíveis entre si e com os padrões do projeto.

## 🍔 Analogia do dia a dia — peças que encaixam

Pensa em montar um móvel ou peças de Lego: as peças só se encaixam porque seguem o **mesmo padrão de medida e conexão** — elas são "congêneres". Se alguém fabrica uma peça fora do padrão, ela não encaixa, por mais bem-feita que seja.

No iFood: o app, o servidor de pagamentos e o servidor do restaurante precisam falar o **mesmo "idioma"** (mesmos formatos, mesmas [[Interfaces e Contratos|interfaces]], mesmos padrões da organização). Manter todos nesse mesmo padrão — mesmo quando um deles muda — é manter a **congeneridade**.

## 🔗 Como se liga ao resto

- Depende de **[[Interfaces e Contratos|interfaces/contratos]]** estáveis: é o contrato comum que torna os componentes compatíveis.
- Anda junto com **[[Acoplamento e Coesão|baixo acoplamento]]**: componentes congêneres se integram sem dependência rígida.
- É verificada na **[[Controle da Qualidade|qualidade]]**: conferir se um componente alterado continua conforme ao padrão do projeto.
- Sustenta a **[[Distribuição de Componentes|distribuição]]**: só componentes congêneres seguem as mesmas políticas de container/middleware.

## ❓ Para confirmar com o professor

- Congeneridade = **compatibilidade/conformidade** entre componentes (leitura aqui), ou o material usa no sentido de **gestão/verificação de mudanças** (configuration/change management)?
- Os dois sentidos se tocam, mas a prova pode cobrar um deles especificamente.

## 🔗 Relacionados

- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Controle da Qualidade]]
- [[Distribuição de Componentes]]
- [[Implementação de Componentes]]

---
*Estudo iniciado em 2026-06-01*
