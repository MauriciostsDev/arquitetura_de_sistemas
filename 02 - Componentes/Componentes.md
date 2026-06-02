---
tags:
  - arquitetura-de-sistemas
  - componentes
  - provisionamento
  - reuso
data: 2026-06-01
status: em-estudo
---

# Componentes (tipos e de onde vêm)

> [!summary] Resumo
> Um componente é uma peça que entrega um tipo de serviço. Você monta o sistema juntando peças e, sempre que dá, reaproveita as que já existem.

## O que é

Montar um sistema é como montar um PC: você compra placa-mãe, fonte e memória (peças prontas) e só junta. Se faltar uma peça que ninguém vende, aí você manda fazer. Em software é igual: cada componente entrega um serviço, e o arquiteto combina peças, preferindo as que já existem.

## Os tipos de componentes

| Tipo | O que entrega | Exemplo |
|------|---------------|---------|
| Hardware | máquina/capacidade | servidor, celular |
| Sistema Operacional | base para rodar | Linux, Windows, Android |
| SGBD (banco de dados) | guardar e buscar dados | PostgreSQL, MySQL |
| Aplicativos comerciais | software pronto comprado | ERP, gateway de pagamento (Stripe) |
| Sistemas existentes | o que a empresa já tem | login antigo da empresa |
| A desenvolver | o que ainda não existe | tela nova de "favoritos" |

Regra do arquiteto: liste o que precisa, **reuse tudo que já existe**, construa só o que falta, e deixe o novo pronto para ser reusado depois.

## Exemplo do dia a dia

Quando montaram o app de delivery, não reinventaram tudo: alugaram servidor na nuvem, usaram banco pronto, terceirizaram o pagamento (não fizeram a maquininha do banco) e reaproveitaram o login que já tinham. Só construíram o que era exclusivo deles: a rota do entregador e a tela de cardápio.

## No código

O que é exclusivo (rota do entregador) você escreve; o que é comum (pagamento) você pluga de um pronto, atrás de uma interface:

```ts
interface GatewayPagamento {
  cobrar(pedidoId: string, valor: number): Promise<boolean>;
}

// peça comprada, reutilizada (não escrevemos o banco)
class PagamentoStripe implements GatewayPagamento {
  cobrar(pedidoId: string, valor: number) {
    return Promise.resolve(true);
  }
}

// peça exclusiva nossa, construída do zero
function calcularRota(origem: string, destino: string): string {
  return `rota de ${origem} até ${destino}`;
}
```

## Comparação com Clean Architecture

São coisas diferentes que se encaixam:
- Aqui a pergunta é "**de onde** vem cada peça?" (comprar, reusar ou construir).
- Clean Architecture pergunta "**como** organizar as peças por dentro?".
- Ponto em comum: SGBD, apps comerciais e hardware são os "detalhes" que ficam na borda e devem ser plugáveis (trocáveis sem afetar o núcleo). Ver [[Clean Architecture]].

## Relacionados

- [[Reuso de Componentes]]
- [[Empacotamento de Componentes]]
- [[Interfaces e Contratos]]
- [[Clean Architecture]]

---
*Estudo iniciado em 2026-06-01*
