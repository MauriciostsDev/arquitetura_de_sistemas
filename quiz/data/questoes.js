/* ============================================================================
 *  BANCO DE QUESTÕES  —  Arquitetura de Sistemas
 *  ----------------------------------------------------------------------------
 *  Este é o ÚNICO arquivo que contém conteúdo. A engine (app.js) é genérica e
 *  apenas lê o que estiver aqui — nada é hardcoded no código do app.
 *
 *  Como adicionar mais questões (quando houver novo conteúdo):
 *    - acrescente objetos ao array abaixo, no formato:
 *        {
 *          topico:       "Nome do tópico (igual ao da nota .md)",
 *          enunciado:    "Pergunta...",
 *          alternativas: ["A", "B", "C", "D"],
 *          correta:      0,            // índice (0-based) da alternativa certa
 *          explicacao:   "Por que..."  // mostrado após responder
 *        }
 *    - os tópicos do menu são gerados automaticamente a partir deste arquivo.
 * ========================================================================== */

window.BANCO_QUESTOES = [

  /* ---------------------------- Abstração --------------------------------- */
  {
    topico: "Abstração",
    enunciado: "Em arquitetura de sistemas, o que significa 'abstrair' um componente?",
    alternativas: [
      "Focar no que ele faz (o 'o quê'), escondendo como ele faz por dentro",
      "Apagar permanentemente os detalhes internos do código",
      "Tornar o componente mais lento, porém mais seguro",
      "Duplicar o componente para uso futuro"
    ],
    correta: 0,
    explicacao: "Abstrair é pensar no 'o quê' e ignorar o 'como'. A interface mostra o essencial e esconde a implementação."
  },
  {
    topico: "Abstração",
    enunciado: "Ao tocar em 'Pagar com Pix' no app, você não vê a validação do cartão, a chamada ao banco nem a geração de recibo. Isso é um exemplo de:",
    alternativas: ["Acoplamento forte", "Abstração", "Redundância", "Concorrência"],
    correta: 1,
    explicacao: "Você usa a função (cobrar) sem se preocupar com o conteúdo interno: é abstração na prática."
  },

  /* ----------------------- Acoplamento e Coesão --------------------------- */
  {
    topico: "Acoplamento e Coesão",
    enunciado: "No bom design de componentes, qual combinação é desejada?",
    alternativas: [
      "Alto acoplamento e baixa coesão",
      "Baixo acoplamento e alta coesão",
      "Alto acoplamento e alta coesão",
      "Baixo acoplamento e baixa coesão"
    ],
    correta: 1,
    explicacao: "Queremos baixa dependência entre componentes (baixo acoplamento) e partes internas bem focadas (alta coesão)."
  },
  {
    topico: "Acoplamento e Coesão",
    enunciado: "Coesão mede:",
    alternativas: [
      "O quanto um componente depende dos outros",
      "O quanto as partes internas de um componente pertencem ao mesmo propósito",
      "A quantidade de interfaces expostas",
      "O tempo de resposta do componente"
    ],
    correta: 1,
    explicacao: "Coesão é o foco interno (fazer uma coisa bem feita). A dependência entre componentes é o acoplamento."
  },
  {
    topico: "Acoplamento e Coesão",
    enunciado: "Componentes com baixo acoplamento são comparáveis a:",
    alternativas: [
      "Peças de Lego, que encaixam por um padrão e se trocam facilmente",
      "Um móvel todo colado e parafusado",
      "Uma gaveta de bagunça",
      "Um cabo soldado à placa"
    ],
    correta: 0,
    explicacao: "Baixo acoplamento = peças que se trocam pela interface, sem desmontar o resto."
  },

  /* ---------------------- Ambiente de Componentes ------------------------- */
  {
    topico: "Ambiente de Componentes",
    enunciado: "Um ambiente de componentes oferece serviços de infraestrutura dos quais o componente pode depender. São exemplos:",
    alternativas: [
      "Transações, segurança e concorrência",
      "Compilação, linkedição e depuração",
      "Marketing, vendas e RH",
      "HTML, CSS e JavaScript"
    ],
    correta: 0,
    explicacao: "O ambiente entrega pronto: suporte a transações, segurança, concorrência etc."
  },
  {
    topico: "Ambiente de Componentes",
    enunciado: "Sobre os ambientes COM+ e EJB, é correto afirmar:",
    alternativas: [
      "COM+ depende de Windows; EJB depende da linguagem Java",
      "COM+ depende de Java; EJB depende de Windows",
      "Ambos dependem de Windows",
      "Nenhum dos dois possui qualquer dependência"
    ],
    correta: 0,
    explicacao: "COM+ → plataforma Windows, sem dependência de linguagem. EJB → sem dependência de plataforma, mas preso ao Java."
  },
  {
    topico: "Ambiente de Componentes",
    enunciado: "A 'programação baseada em atributo', preferida pelo material, caracteriza uma abordagem:",
    alternativas: [
      "Declarativa, via framework",
      "Imperativa, com invocação explícita dentro da lógica",
      "Sem qualquer uso de frameworks",
      "Exclusiva de hardware"
    ],
    correta: 0,
    explicacao: "Você 'marca/anota' o que precisa (transação, segurança) e o framework cuida do resto — abordagem declarativa."
  },
  {
    topico: "Ambiente de Componentes",
    enunciado: "Por que o material prefere a abordagem declarativa (por framework) para os serviços de infraestrutura?",
    alternativas: [
      "Por fornecer uma base mais sólida para aplicações distribuídas em escala empresarial",
      "Por ser mais difícil de manter",
      "Por exigir mais código dentro da lógica de negócio",
      "Por eliminar a necessidade de servidores"
    ],
    correta: 0,
    explicacao: "Frameworks declarativos dão base mais robusta para a próxima geração de aplicações distribuídas por componentes."
  },

  /* -------------------------- Clean Architecture -------------------------- */
  {
    topico: "Clean Architecture",
    enunciado: "A 'Regra da Dependência' da Clean Architecture afirma que as dependências devem apontar:",
    alternativas: [
      "De dentro para fora",
      "De fora para dentro, em direção às regras de negócio",
      "Em qualquer direção",
      "Sempre para o banco de dados"
    ],
    correta: 1,
    explicacao: "O núcleo não conhece o mundo externo; quem aponta para o núcleo é a borda (detalhes)."
  },
  {
    topico: "Clean Architecture",
    enunciado: "Na Clean Architecture, banco de dados, frameworks e UI são tratados como:",
    alternativas: [
      "O núcleo do sistema",
      "Detalhes na borda, plugáveis",
      "Regras de negócio puras",
      "Entidades centrais"
    ],
    correta: 1,
    explicacao: "São detalhes que ficam na camada externa (frameworks & drivers) e devem ser trocáveis sem afetar o núcleo."
  },
  {
    topico: "Clean Architecture",
    enunciado: "No exemplo React, fazer o componente depender da interface GatewayPagamento (e não da Stripe diretamente) ilustra:",
    alternativas: [
      "Baixo acoplamento: dependência de uma abstração / borda plugável",
      "Alto acoplamento",
      "Baixa coesão",
      "Hardcoding"
    ],
    correta: 0,
    explicacao: "Depender da interface (não da implementação) permite trocar o provedor sem mexer na tela."
  },

  /* ------------------------------ Componentes ----------------------------- */
  {
    topico: "Componentes",
    enunciado: "Diante de um novo sistema, qual a postura recomendada ao arquiteto?",
    alternativas: [
      "Construir todos os componentes do zero",
      "Reusar os componentes existentes e só construir o que não existe",
      "Comprar obrigatoriamente todos os componentes",
      "Evitar componentes de terceiros em qualquer situação"
    ],
    correta: 1,
    explicacao: "Aplica-se reuso ao que já existe; somente o que não existe é construído (e de forma reutilizável no futuro)."
  },
  {
    topico: "Componentes",
    enunciado: "São tipos de componentes citados no material, EXCETO:",
    alternativas: [
      "Componentes de hardware",
      "Componentes de SGBD",
      "Componentes de sistema operacional",
      "Componentes de marketing"
    ],
    correta: 3,
    explicacao: "O material cita hardware, SO, SGBD, aplicativos comerciais, sistemas existentes e a serem desenvolvidos."
  },

  /* ----------------------------- Congeneridade ---------------------------- */
  {
    topico: "Congeneridade",
    enunciado: "Pela etimologia (congênere = 'do mesmo gênero'), o núcleo do conceito de congeneridade é:",
    alternativas: [
      "Compatibilidade/conformidade entre os componentes",
      "Controle de versões do código",
      "Velocidade de processamento",
      "Quantidade total de componentes"
    ],
    correta: 0,
    explicacao: "Congeneridade aponta para componentes 'da mesma espécie' (compatíveis/conformes), mais do que 'controle de mudanças'."
  },
  {
    topico: "Congeneridade",
    enunciado: "Sobre o termo 'congeneridade' na bibliografia de arquitetura, é mais correto afirmar que:",
    alternativas: [
      "Não é um termo padronizado na literatura clássica; vale confirmar a definição com o material/professor",
      "É um dos pilares centrais definidos por Robert C. Martin",
      "É sinônimo exato de polimorfismo",
      "É um padrão de projeto do catálogo GoF"
    ],
    correta: 0,
    explicacao: "O termo aparece em materiais de curso específicos, não na literatura clássica — atenção à definição cobrada."
  },

  /* ------------------------- Controle da Qualidade ------------------------ */
  {
    topico: "Controle da Qualidade",
    enunciado: "O Controle da Qualidade (QC) caracteriza-se por:",
    alternativas: [
      "Ser preventivo e focar no processo",
      "Inspecionar o produto pronto (caráter detectivo)",
      "Definir a especificação do componente",
      "Empacotar os componentes em DLLs"
    ],
    correta: 1,
    explicacao: "QC é detectivo: olha o produto pronto para verificar se está conforme a especificação."
  },
  {
    topico: "Controle da Qualidade",
    enunciado: "Qual a diferença entre Garantia (QA) e Controle (QC) da Qualidade?",
    alternativas: [
      "QA é detectivo (produto); QC é preventivo (processo)",
      "QA é preventivo (processo); QC é detectivo (produto)",
      "São exatamente sinônimos",
      "QA cuida de hardware; QC cuida de software"
    ],
    correta: 1,
    explicacao: "Garantia previne durante o processo; Controle inspeciona o produto final."
  },

  /* ------------------------- Garantia da Qualidade ------------------------ */
  {
    topico: "Garantia da Qualidade",
    enunciado: "A Garantia da Qualidade (QA) está mais associada a:",
    alternativas: [
      "Inspecionar o resultado final",
      "Definir a metodologia/processo que previne defeitos",
      "Programar o componente",
      "Distribuir os containers"
    ],
    correta: 1,
    explicacao: "QA é preventiva e foca no processo (como fazer certo desde a origem)."
  },

  /* --------------------------------- CORBA -------------------------------- */
  {
    topico: "CORBA",
    enunciado: "No CORBA, qual peça recebe a chamada, localiza o objeto certo e devolve a resposta?",
    alternativas: ["O ORB (Object Request Broker)", "O SGBD", "O container", "A DLL"],
    correta: 0,
    explicacao: "O ORB é o intermediário que roteia a chamada ao objeto, onde quer que ele esteja."
  },
  {
    topico: "CORBA",
    enunciado: "A IDL (Interface Definition Language) do CORBA serve para:",
    alternativas: [
      "Definir contratos de interface de forma neutra de linguagem",
      "Compilar o sistema operacional",
      "Armazenar dados persistentes",
      "Gerenciar a memória do container"
    ],
    correta: 0,
    explicacao: "A IDL descreve o contrato em uma linguagem neutra, permitindo objetos de linguagens diferentes conversarem."
  },
  {
    topico: "CORBA",
    enunciado: "Hoje, o CORBA é considerado:",
    alternativas: [
      "Tecnologia legada, substituída em grande parte por REST, gRPC e mensageria",
      "A tecnologia mais moderna do mercado",
      "Um banco de dados NoSQL",
      "Um sistema operacional"
    ],
    correta: 0,
    explicacao: "É legado, mas o conceito (objetos remotos via intermediário padronizado) segue importante e embasa o CCM."
  },

  /* ----------------------- Distribuição de Componentes -------------------- */
  {
    topico: "Distribuição de Componentes",
    enunciado: "Os descritores de distribuição devem garantir, EXCETO:",
    alternativas: [
      "Que os componentes sejam corretamente conectados",
      "Que as camadas tenham o nível certo de suporte/configuração",
      "Que os níveis de segurança corretos sejam implementados",
      "Que o componente seja obrigatoriamente escrito em Java"
    ],
    correta: 3,
    explicacao: "Os descritores cuidam de conexão, configuração das camadas e segurança — não impõem linguagem."
  },
  {
    topico: "Distribuição de Componentes",
    enunciado: "A regra do container na distribuição diz que, dentro de um mesmo container:",
    alternativas: [
      "Só podem existir componentes que atendam à mesma configuração",
      "Devem existir componentes de todas as configurações possíveis",
      "Não pode haver mais de um componente",
      "Os componentes não seguem nenhuma política"
    ],
    correta: 0,
    explicacao: "Cada container agrupa componentes que compartilham a mesma configuração (segurança, transação etc.)."
  },
  {
    topico: "Distribuição de Componentes",
    enunciado: "Os descritores de distribuição são, segundo o material, geralmente escritos em:",
    alternativas: ["XML", "PNG", "MP3", "DOCX"],
    correta: 0,
    explicacao: "Tradicionalmente em XML (hoje também YAML/JSON em outras tecnologias)."
  },

  /* ---------------------- Empacotamento de Componentes -------------------- */
  {
    topico: "Empacotamento de Componentes",
    enunciado: "Empacotar componentes significa:",
    alternativas: [
      "Agrupar num mesmo pacote tudo que cumpre a mesma função",
      "Compactar arquivos em formato ZIP",
      "Apagar componentes que não são usados",
      "Traduzir o código para outra linguagem"
    ],
    correta: 0,
    explicacao: "Junta-se por funcionalidade; depois o arquiteto raciocina sobre poucos blocos, não centenas de peças."
  },
  {
    topico: "Empacotamento de Componentes",
    enunciado: "Ao 'abrir' o pacote de Pagamentos, o resto do app enxerga apenas:",
    alternativas: [
      "Todos os componentes internos",
      "A interface (ex.: cobrar(pedido)), com o interior escondido",
      "O código-fonte completo",
      "O banco de dados"
    ],
    correta: 1,
    explicacao: "Só a interface é visível; os componentes internos (validar cartão, chamar banco...) ficam encapsulados."
  },
  {
    topico: "Empacotamento de Componentes",
    enunciado: "Um benefício direto do empacotamento por função é:",
    alternativas: [
      "Reduzir a complexidade: pensar em poucos blocos em vez de centenas de peças",
      "Aumentar a quantidade de bugs",
      "Obrigar todos os times a trabalhar no mesmo arquivo",
      "Impedir o reuso de componentes"
    ],
    correta: 0,
    explicacao: "Também favorece manutenção isolada, times independentes e reuso."
  },

  /* ----------------------- Especificação de Componentes ------------------- */
  {
    topico: "Especificação de Componentes",
    enunciado: "A especificação de componentes é, principalmente, responsabilidade de quem?",
    alternativas: [
      "Do arquiteto de sistemas",
      "Do cliente final",
      "Do controle de qualidade",
      "Do entregador"
    ],
    correta: 0,
    explicacao: "O arquiteto gera especificações que atendam às necessidades e sigam os padrões da organização."
  },

  /* ------------------- Framework CCM (CORBA Component Model) -------------- */
  {
    topico: "Framework CCM (CORBA Component Model)",
    enunciado: "O CCM é dividido em quantos níveis de componentes e quantos modelos?",
    alternativas: ["2 níveis e 5 modelos", "5 níveis e 2 modelos", "3 níveis e 3 modelos", "1 nível e 4 modelos"],
    correta: 0,
    explicacao: "Dois níveis (básico e estendido) e cinco modelos (abstrato, programação, empacotamento, implantação, execução)."
  },
  {
    topico: "Framework CCM (CORBA Component Model)",
    enunciado: "O CCM é um framework de componentes:",
    alternativas: [
      "Do lado do servidor (server-side), construído sobre o CORBA",
      "Exclusivo do navegador",
      "Que substitui o sistema operacional",
      "Apenas para componentes de hardware"
    ],
    correta: 0,
    explicacao: "Facilita desenvolver e instalar aplicações distribuídas baseadas em componentes, em cima do CORBA."
  },
  {
    topico: "Framework CCM (CORBA Component Model)",
    enunciado: "Qual modelo do CCM define um mecanismo padrão para a INSTALAÇÃO de aplicações?",
    alternativas: [
      "Modelo de Implantação (Deployment)",
      "Modelo Abstrato",
      "Modelo de Programação",
      "Modelo de Execução"
    ],
    correta: 0,
    explicacao: "Empacotamento define como empacotar; Implantação define como instalar; Execução define o ambiente das instâncias."
  },
  {
    topico: "Framework CCM (CORBA Component Model)",
    enunciado: "O Modelo de Programação do CCM é composto por:",
    alternativas: ["CIDL e CIF", "HTML e CSS", "ORB e DLL", "QA e QC"],
    correta: 0,
    explicacao: "CIDL (linguagem declarativa) descreve; CIF (framework) gera os skeletons."
  },

  /* ------------------------ Implementação de Componentes ------------------ */
  {
    topico: "Implementação de Componentes",
    enunciado: "A implementação dos componentes é tarefa principalmente de:",
    alternativas: [
      "Programadores, guiados pela especificação do arquiteto",
      "Apenas do arquiteto, sozinho",
      "Do setor de marketing",
      "Do usuário final"
    ],
    correta: 0,
    explicacao: "Programadores constroem; o arquiteto especifica e conduz; a qualidade fiscaliza."
  },
  {
    topico: "Implementação de Componentes",
    enunciado: "Além de programadores e arquiteto, que área participa garantindo a qualidade dos componentes?",
    alternativas: [
      "Garantia e Controle da Qualidade",
      "Apenas o financeiro",
      "Somente o suporte ao cliente",
      "Nenhuma outra área"
    ],
    correta: 0,
    explicacao: "A área de garantia e controle da qualidade provê elementos que asseguram a qualidade dos componentes."
  },

  /* ------------------------- Interfaces e Contratos ----------------------- */
  {
    topico: "Interfaces e Contratos",
    enunciado: "Uma interface funciona como um 'contrato' porque:",
    alternativas: [
      "Quem oferece promete cumprir e quem usa confia, sem ver o interior",
      "Obriga o uso de uma linguagem específica",
      "Define o hardware do servidor",
      "Armazena os dados do sistema"
    ],
    correta: 0,
    explicacao: "Enquanto o contrato não muda, os dois lados evoluem de forma independente (baixo acoplamento)."
  },
  {
    topico: "Interfaces e Contratos",
    enunciado: "No diagrama UML, a 'bolinha' (○) e o 'soquete' (⊃) representam, respectivamente:",
    alternativas: [
      "Interface fornecida e interface requerida",
      "Banco de dados e servidor",
      "Cliente e servidor",
      "Entrada e saída de hardware"
    ],
    correta: 0,
    explicacao: "Bolinha = 'eu ofereço'; soquete = 'eu preciso'. Um componente fornece, o outro consome."
  },

  /* ------------------------------- Middleware ----------------------------- */
  {
    topico: "Middleware",
    enunciado: "Middleware é melhor descrito como:",
    alternativas: [
      "A camada que fica no meio e conecta componentes distribuídos",
      "Um tipo de banco de dados",
      "A interface gráfica do usuário",
      "Um componente de hardware"
    ],
    correta: 0,
    explicacao: "Cuida de comunicação, tradução, segurança, transações e localização entre componentes distribuídos."
  },
  {
    topico: "Middleware",
    enunciado: "Na analogia do iFood, o middleware corresponde a:",
    alternativas: [
      "O intermediário (app/servidores) entre você e a cozinha do restaurante",
      "O prato de comida",
      "Apenas o entregador",
      "O cardápio impresso"
    ],
    correta: 0,
    explicacao: "Você nunca fala direto com a cozinha; o intermediário traduz e roteia o pedido."
  },

  /* --------------------------- Programação Declarativa -------------------- */
  {
    topico: "Programação Declarativa",
    enunciado: "A diferença entre declarativo e imperativo é:",
    alternativas: [
      "Declarativo diz 'o quê' se quer; imperativo descreve 'como', passo a passo",
      "Declarativo é sempre mais lento",
      "Imperativo não usa código",
      "São exatamente a mesma coisa"
    ],
    correta: 0,
    explicacao: "Analogia do GPS: você dá o destino (declarativo), não cada conversão (imperativo)."
  },

  /* ----------------------------- Reuso de Componentes --------------------- */
  {
    topico: "Reuso de Componentes",
    enunciado: "A prática de reuso de componentes recomenda:",
    alternativas: [
      "Aproveitar o que já existe e construir os novos de forma reutilizável",
      "Reescrever tudo a cada projeto",
      "Nunca usar componentes prontos",
      "Copiar e colar a mesma lógica em vários lugares"
    ],
    correta: 0,
    explicacao: "Não reinventar a roda: reusar reduz custo e bugs, e padroniza o sistema."
  },
  {
    topico: "Reuso de Componentes",
    enunciado: "A analogia da 'receita de bolo' para reuso ensina que:",
    alternativas: [
      "Você aproveita ingredientes prontos (farinha, ovos) e foca no que é seu",
      "Você deve plantar o trigo e criar a galinha",
      "Reuso não vale a pena",
      "Todo código deve ser único e irrepetível"
    ],
    correta: 0,
    explicacao: "Reusa-se o pronto e constrói-se apenas a parte exclusiva do projeto."
  },

  /* ------------------------ Serviços de Infraestrutura -------------------- */
  {
    topico: "Serviços de Infraestrutura",
    enunciado: "São serviços de infraestrutura típicos de um ambiente de componentes:",
    alternativas: [
      "Transações, segurança e concorrência",
      "Login, cadastro e catálogo",
      "HTML, CSS e JavaScript",
      "Cores, fontes e ícones"
    ],
    correta: 0,
    explicacao: "São tarefas 'de bastidor' que todo sistema sério precisa, fornecidas pelo ambiente."
  },

  /* ---------------------------------- CIDL -------------------------------- */
  {
    topico: "CIDL",
    enunciado: "A CIDL (Component Implementation Definition Language) é uma linguagem:",
    alternativas: [
      "Declarativa, para descrever implementação e persistência de estado dos componentes",
      "Imperativa, para compilar hardware",
      "De marcação visual de telas",
      "De consulta a banco de dados"
    ],
    correta: 0,
    explicacao: "Você descreve (declara) o componente e o CIF gera o esqueleto a partir disso."
  },
  {
    topico: "CIDL",
    enunciado: "Na CIDL, qual categoria de componente é durável E possui interface base chaveada (com chave)?",
    alternativas: ["Entity", "Service", "Session", "Process"],
    correta: 0,
    explicacao: "Entity = durável + chaveada (objetos de negócio). Process é durável, mas sem chave."
  },
  {
    topico: "CIDL",
    enunciado: "A categoria 'Service' caracteriza-se por ser:",
    alternativas: [
      "Stateless (sem estado entre as chamadas)",
      "Durável e com chave",
      "Conversational com persistência",
      "Sempre transacional"
    ],
    correta: 0,
    explicacao: "Service é stateless — cada chamada é independente, como uma calculadora de frete."
  },

  /* ---------------------------------- CIF --------------------------------- */
  {
    topico: "CIF",
    enunciado: "O CIF (Component Implementation Framework) usa a CIDL para:",
    alternativas: [
      "Gerar skeletons que automatizam navegação, ativação e gerenciamento de estado",
      "Desenhar a interface do usuário",
      "Substituir o banco de dados",
      "Compilar o sistema operacional"
    ],
    correta: 0,
    explicacao: "Muitas interfaces do CCM são repetitivas; o CIF gera o 'encanamento' automaticamente."
  },

  /* ------------------------------- Containers ----------------------------- */
  {
    topico: "Containers",
    enunciado: "No CCM, os componentes são empacotados em ____ e executados em servidores de componentes.",
    alternativas: ["DLLs", "PDFs", "Planilhas", "Imagens PNG"],
    correta: 0,
    explicacao: "Os componentes são empacotados em DLLs e rodam nos servidores de componentes."
  },
  {
    topico: "Containers",
    enunciado: "Uma das principais funcionalidades do container é:",
    alternativas: [
      "Ativar/desativar componentes preservando recursos como memória",
      "Escrever a regra de negócio do componente",
      "Definir a especificação do sistema",
      "Substituir o arquiteto de sistemas"
    ],
    correta: 0,
    explicacao: "Também fornece camada de adaptação a transação, persistência, segurança, notificação e call-backs."
  },
  {
    topico: "Containers",
    enunciado: "Na política de ciclo de vida 'ativação/desativação a cada chamada de método', o trade-off é:",
    alternativas: [
      "Usa memória só durante a operação, mas adiciona o custo de ativar/desativar toda hora",
      "Nunca libera a memória utilizada",
      "Elimina qualquer custo de processamento",
      "Impede o uso de transações"
    ],
    correta: 0,
    explicacao: "Economiza memória ao máximo, ao preço do custo repetido de ativação/desativação."
  },
  {
    topico: "Containers",
    enunciado: "A 'camada de adaptação' fornecida pelo container conecta o componente a serviços como:",
    alternativas: [
      "Transação, persistência, segurança e notificação",
      "Apenas renderização gráfica",
      "Somente compilação de código",
      "Marketing e vendas"
    ],
    correta: 0,
    explicacao: "Essa 'camada de adaptação' equivale aos adaptadores de interface da Clean Architecture."
  },

  /* ------------------- POA (Portable Object Adapter) ---------------------- */
  {
    topico: "POA (Portable Object Adapter)",
    enunciado: "O POA (Portable Object Adapter) tem como função:",
    alternativas: [
      "Direcionar a chamada remota ao objeto (servant) certo e gerenciar seu ciclo de vida",
      "Armazenar os dados em disco",
      "Renderizar a interface gráfica",
      "Definir a metodologia de qualidade"
    ],
    correta: 0,
    explicacao: "Fica entre o ORB e os objetos reais, como uma telefonista que transfere a ligação ao ramal certo."
  },

  /* ------------------- Programação Orientada a Aspectos ------------------- */
  {
    topico: "Programação Orientada a Aspectos",
    enunciado: "A Programação Orientada a Aspectos (AOP) serve para:",
    alternativas: [
      "Separar preocupações transversais (segurança, log, transação) da regra de negócio",
      "Acelerar o hardware",
      "Substituir o HTML",
      "Criar o banco de dados"
    ],
    correta: 0,
    explicacao: "Cross-cutting concerns ficam centralizadas em 'aspectos', mantendo a lógica limpa. É como o sistema de incêndio do prédio."
  },

  /* ============================================================================
   *  Simulado 1 — questões de prova (Provisionamento e Componentes)
   * ========================================================================== */
  {
    topico: "Modelos de Desenvolvimento",
    enunciado: "A metodologia de gestão deve contemplar quantas fases forem necessárias para garantir escopo, tempo, custo e qualidade. Qual modelo de desenvolvimento essas fases devem seguir?",
    alternativas: ["Cascata", "Cascata com retroalimentação", "Espiral", "Incremental", "Iterativo e incremental"],
    correta: 4,
    explicacao: "Iterativo e incremental: repete ciclos e entrega partes que vão crescendo. É a base do ágil."
  },
  {
    topico: "Níveis de Modelo",
    enunciado: "Qual modelo é independente do tipo de software ou de tecnologia e representa o problema a ser resolvido?",
    alternativas: ["Modelo de Implementação", "Modelo de Especificação", "Modelo de Projeto", "Modelo de Requisitos", "Modelo Conceitual"],
    correta: 4,
    explicacao: "O Modelo Conceitual descreve só o problema, sem amarrar a nenhuma tecnologia."
  },
  {
    topico: "Componentes",
    enunciado: "Sobre os componentes de um sistema, todas as afirmações são verdadeiras, EXCETO:",
    alternativas: [
      "Podem ser definidos desde a primeira iteração do projeto",
      "O nível de abstração é, geralmente, alto",
      "Devem ser projetados buscando alta coesão e baixo acoplamento",
      "Devem ter interfaces bem definidas, de preferência uma para cada serviço",
      "Seguindo a alta coesão, cada componente deve ter no máximo 3 interfaces"
    ],
    correta: 4,
    explicacao: "Falsa (por isso é a resposta): não existe limite de 3 interfaces. Um componente pode oferecer quantas fizerem sentido."
  },
  {
    topico: "Framework CCM (CORBA Component Model)",
    enunciado: "São características que levaram à especificação do Modelo de Componentes CORBA, EXCETO:",
    alternativas: [
      "Falta de flexibilidade para estender as funcionalidades dos objetos",
      "Requisitos não funcionais eram especificados junto com os métodos de negócio",
      "Necessidade de especialização das interfaces (conexões) entre objetos",
      "Dificuldade de configurar e usar aplicações em padrões anteriores",
      "Necessidade da existência de um mecanismo único de implementação"
    ],
    correta: 4,
    explicacao: "Falsa (por isso é a resposta): o CORBA/CCM não buscava um mecanismo único de implementação."
  },
  {
    topico: "Casos de Uso (include x extend)",
    enunciado: "No estacionamento, ao registrar a entrada o cliente SEMPRE recebe um ticket impresso. Qual o relacionamento entre Registrar Entrada e Gerar Ticket Impresso?",
    alternativas: [
      "include (o ticket é sempre gerado, é obrigatório)",
      "extend (o ticket é opcional na entrada)",
      "extend (de Gerar Fatura para Registrar Saída)",
      "include, porém opcional",
      "generalização"
    ],
    correta: 0,
    explicacao: "É include: o ticket é sempre executado (obrigatório). Regra: include = sempre; extend = às vezes."
  },
  {
    topico: "Empacotamento de Componentes",
    enunciado: "O usuário de um componente é isolado de como os dados são guardados ou as funções executadas; ele depende da especificação, não da implementação. Qual princípio?",
    alternativas: ["Encapsulamento", "Reusabilidade", "Independência", "Extensibilidade", "Produtividade"],
    correta: 0,
    explicacao: "Encapsulamento: esconder o interior atrás da interface; quem usa só conhece a especificação."
  },
  {
    topico: "Arquitetura de Sistemas",
    enunciado: "Sobre a estratégia tradicional que analisa o fluxo (workflow) do sistema, é correto afirmar:",
    alternativas: [
      "Essa estratégia dispensa o levantamento de requisitos",
      "Sistemas distribuídos não podem ser representados por análise de fluxo",
      "O objetivo principal é definir componentes reusáveis",
      "Todas as afirmações estão erradas",
      "As operações são representadas por componentes, ordenados pela sequência dessas operações"
    ],
    correta: 4,
    explicacao: "Nessa estratégia, os componentes são modelados na ordem do fluxo de operações."
  },
  {
    topico: "Arquitetura de Sistemas",
    enunciado: "Sobre arquitetura de sistemas, todas as afirmações são verdadeiras, EXCETO:",
    alternativas: [
      "Pode ser vista como um processo e também como um artefato",
      "A especificação pode ser feita após o levantamento de requisitos (funcionais e não funcionais)",
      "Diagramas de componentes, de empacotamento e de distribuição (UML) servem na especificação",
      "Em OO, as classes ajudam a identificar os componentes",
      "É tarefa da arquitetura construir o projeto detalhado dos componentes individuais"
    ],
    correta: 4,
    explicacao: "Falsa (por isso é a resposta): o projeto detalhado de cada componente é do design/construção, não da arquitetura."
  },
  {
    topico: "Arquitetura em Camadas",
    enunciado: "Qual é a característica principal da arquitetura em camadas?",
    alternativas: [
      "Um repositório central de dados",
      "Os dados são gerados por um componente e consumidos pelos outros",
      "Depende de uma infraestrutura de comunicação para implementar",
      "Cada camada depende exclusivamente dos serviços da camada inferior"
    ],
    correta: 3,
    explicacao: "Cada camada usa só os serviços da camada de baixo (separação e independência)."
  },
  {
    topico: "Grupos de Processos de Projeto",
    enunciado: "Desenvolver o termo de abertura do projeto pertence a qual grupo de processos?",
    alternativas: ["Iniciação", "Planejamento", "Execução", "Monitoramento e Controle", "Encerramento"],
    correta: 0,
    explicacao: "O termo de abertura abre o projeto, logo pertence à Iniciação (a primeira fase)."
  }

];
