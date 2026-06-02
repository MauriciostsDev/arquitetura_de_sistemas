---
tags:
  - arquitetura-de-sistemas
  - componentes
  - compatibilidade
data: 2026-06-01
status: revisar-com-professor
---

# Congeneridade

> [!summary] Resumo
> Congeneridade é os componentes serem compatíveis entre si: do mesmo padrão, falando a mesma língua, para encaixarem no projeto.

> [!warning] Termo de material de curso
> "Congeneridade" não aparece nos livros clássicos de arquitetura (Bass, Fowler, Sommerville). É termo de alguns materiais brasileiros. A leitura abaixo vem da raiz da palavra; confirme com seu professor.

## O que é

Vem de "congênere" = do mesmo gênero. Então congeneridade é a ideia de componentes **compatíveis e conformes a um mesmo padrão**. O foco é compatibilidade, não "controle de mudanças". Verificar mudanças é só uma forma de **manter** essa compatibilidade.

## Exemplo do dia a dia

Peças de Lego só encaixam porque seguem o mesmo padrão de medida. Uma peça fora do padrão não encaixa, por melhor que seja. No app de delivery: o app, o servidor de pagamento e o do restaurante precisam falar o mesmo formato. Manter todos nesse padrão, mesmo quando um muda, é manter a congeneridade.

## No código

Componentes "congêneres" quando seguem a mesma interface combinada:

```ts
// padrão único que todos seguem
interface Servico {
  versaoApi: "v1";
  responder(dado: string): string;
}

const pagamento: Servico = { versaoApi: "v1", responder: (d) => d };
const entrega: Servico = { versaoApi: "v1", responder: (d) => d };
// ambos no mesmo padrão -> encaixam. Se um virar "v2" sem combinar, quebra.
```

## Como se liga ao resto

- Depende de [[Interfaces e Contratos]] estáveis (o padrão comum).
- Anda junto com [[Acoplamento e Coesão|baixo acoplamento]].
- É conferida no [[Controle da Qualidade]].

## Relacionados

- [[Interfaces e Contratos]]
- [[Acoplamento e Coesão]]
- [[Controle da Qualidade]]

---
*Estudo iniciado em 2026-06-01*
