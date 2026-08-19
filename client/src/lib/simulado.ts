/**
 * Direção editorial: Simulado Trilha TI — itens autorais, situacionais e equilibrados
 * para transformar o conteúdo do edital em prática verificável.
 */
export type SimuladoQuestion = {
  id: string;
  subjectId: string;
  subject: string;
  stem: string;
  options: [string, string, string, string, string];
  answer: number;
  explanation: string;
};

export const simuladoConfig = {
  durationMinutes: 120,
  title: "Simulado Geral — Analista de Tecnologia da Informação",
  distribution: [
    ["Arquitetura de Computadores", 9],
    ["Sistemas Operacionais", 9],
    ["Redes de Computadores", 9],
    ["Banco de Dados", 9],
    ["Desenvolvimento de Sistemas", 8],
    ["Segurança da Informação", 8],
    ["Governança de TI", 8],
  ] as const,
};

export const simuladoQuestions: SimuladoQuestion[] = [
  {
    id: "arq-01", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "Em um computador, um programa de inicialização permanece armazenado em memória não volátil e executa antes do carregamento do sistema operacional. Esse programa é classificado como:",
    options: ["aplicação de usuário", "firmware", "driver em modo usuário", "memória cache", "hipervisor"], answer: 1,
    explanation: "Firmware é software gravado em memória não volátil e responsável por inicializar ou controlar diretamente o hardware. BIOS e UEFI são exemplos usuais.",
  },
  {
    id: "arq-02", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "No ciclo básico de uma instrução, a CPU obtém a próxima instrução da memória, interpreta seu código e realiza a operação correspondente. A sequência correta é:",
    options: ["executar, buscar e decodificar", "decodificar, executar e buscar", "buscar, decodificar e executar", "armazenar, buscar e interromper", "compilar, interpretar e executar"], answer: 2,
    explanation: "O ciclo clássico é busca (fetch), decodificação (decode) e execução (execute). Em arquiteturas modernas há otimizações, mas essa é a referência conceitual cobrada em prova.",
  },
  {
    id: "arq-03", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "O valor hexadecimal 2F corresponde, no sistema decimal, a:",
    options: ["31", "42", "45", "47", "52"], answer: 3,
    explanation: "Em hexadecimal, 2F equivale a 2 × 16 + 15, totalizando 47 em decimal.",
  },
  {
    id: "arq-04", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "A principal finalidade da memória cache é:",
    options: ["substituir permanentemente o armazenamento secundário", "reduzir a latência média de acesso aos dados mais usados pela CPU", "guardar arquivos após o desligamento do equipamento", "converter instruções de máquina em linguagem de alto nível", "isolar processos em máquinas virtuais"], answer: 1,
    explanation: "A cache mantém cópias de dados e instruções com alta probabilidade de reutilização, aproximando-os da CPU e diminuindo o tempo médio de acesso em relação à RAM.",
  },
  {
    id: "arq-05", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "Sobre a memória RAM, assinale a alternativa correta.",
    options: ["É não volátil e guarda o firmware do fabricante.", "É usada exclusivamente para arquivos de backup.", "É volátil e armazena dados em uso durante a execução.", "Possui menor velocidade que um disco rígido por definição.", "É acessada somente pelo sistema operacional."], answer: 2,
    explanation: "A RAM é memória principal e volátil: seu conteúdo é perdido sem energia. Ela sustenta processos e dados em uso, com acesso muito mais rápido que o armazenamento secundário.",
  },
  {
    id: "arq-06", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "Em um sistema que usa memória virtual paginada, quando uma página necessária não está na RAM, ocorre:",
    options: ["interrupção de compilação", "falha de página, com busca da página no armazenamento secundário", "substituição automática da CPU", "conversão da página em registrador", "desligamento obrigatório do processo"], answer: 1,
    explanation: "A ausência da página referenciada na memória principal provoca uma page fault. O sistema operacional localiza a página no armazenamento secundário e a carrega, possivelmente substituindo outra.",
  },
  {
    id: "arq-07", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "Uma diferença típica entre SSD e HDD é que o SSD:",
    options: ["depende de discos magnéticos rotativos", "armazena dados apenas em memória RAM", "usa memória flash e não possui partes mecânicas móveis", "não permite acesso aleatório", "não pode ser usado como unidade de sistema"], answer: 2,
    explanation: "O SSD utiliza memória flash, sem pratos ou cabeças mecânicas. Isso costuma reduzir latência e melhorar resistência a impactos em comparação com HDDs convencionais.",
  },
  {
    id: "arq-08", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "Qual elemento atua como ponte entre o sistema operacional e um dispositivo específico, traduzindo requisições genéricas em comandos adequados ao hardware?",
    options: ["compilador", "driver", "processador", "registrador", "cache L1"], answer: 1,
    explanation: "O driver é o componente de software que permite ao sistema operacional interagir com um dispositivo de hardware por meio de uma interface apropriada.",
  },
  {
    id: "arq-09", subjectId: "arquitetura", subject: "Arquitetura de Computadores",
    stem: "Em uma hierarquia tradicional de memória, o componente que tende a apresentar maior capacidade e maior tempo de acesso é:",
    options: ["registrador", "cache L1", "cache L2", "memória RAM", "armazenamento secundário"], answer: 4,
    explanation: "O armazenamento secundário, como SSD ou HDD, oferece grande capacidade e persistência, mas é mais lento que registradores, caches e RAM.",
  },
  {
    id: "so-01", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "Sobre processos e threads, é correto afirmar que:",
    options: ["threads de processos distintos compartilham automaticamente toda a memória", "um processo pode conter múltiplas threads que compartilham recursos do processo", "uma thread sempre possui espaço de endereçamento independente", "processo e thread são sinônimos no escalonador", "threads não podem executar concorrentemente"], answer: 1,
    explanation: "Threads pertencentes ao mesmo processo compartilham recursos como espaço de endereçamento e arquivos abertos, embora cada uma possua contexto próprio de execução.",
  },
  {
    id: "so-02", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "O objetivo central do escalonador de processos é:",
    options: ["converter código-fonte em código de máquina", "definir quais processos ou threads usarão a CPU e em que ordem", "armazenar cópias de segurança de arquivos", "criptografar o sistema de arquivos", "atribuir endereços IP aos serviços"], answer: 1,
    explanation: "O escalonador seleciona unidades prontas para execução e define a ordem de uso do processador de acordo com a política adotada, como prioridade ou fatias de tempo.",
  },
  {
    id: "so-03", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "Em GNU/Linux, as permissões de leitura, escrita e execução são tradicionalmente associadas a:",
    options: ["usuário proprietário, grupo e outros usuários", "administrador, convidado e auditor", "cliente, servidor e roteador", "processo, thread e daemon", "kernel, driver e firmware"], answer: 0,
    explanation: "O modelo clássico de permissões Linux organiza os bits r, w e x para o proprietário, o grupo associado e os demais usuários.",
  },
  {
    id: "so-04", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "Uma máquina virtual executada sobre um hipervisor do tipo 1 caracteriza-se porque o hipervisor:",
    options: ["opera diretamente sobre o hardware", "depende obrigatoriamente de um navegador", "executa apenas aplicações web", "não suporta sistemas convidados", "substitui o sistema de arquivos do host"], answer: 0,
    explanation: "O hipervisor tipo 1, também chamado bare-metal, executa diretamente no hardware. O tipo 2, por sua vez, é executado sobre um sistema operacional hospedeiro.",
  },
  {
    id: "so-05", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "A utilização de swap em um sistema operacional está associada principalmente a:",
    options: ["um protocolo de roteamento", "uma área de disco usada como extensão da memória virtual", "um tipo de permissão de arquivo", "um serviço de diretório Windows", "um mecanismo de VLAN"], answer: 1,
    explanation: "Swap é espaço em armazenamento secundário que pode sustentar páginas de memória virtual. Seu uso excessivo tende a degradar o desempenho por ser muito mais lento que RAM.",
  },
  {
    id: "so-06", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "No Windows Server, uma lista de controle de acesso (ACL) é usada para:",
    options: ["registrar o clock da CPU", "definir permissões de usuários e grupos sobre objetos", "atribuir endereços IPv6", "instalar um hipervisor", "criar tabelas relacionais"], answer: 1,
    explanation: "ACLs associam identidades ou grupos a permissões sobre objetos, como arquivos e pastas, permitindo controle granular de acesso.",
  },
  {
    id: "so-07", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "Uma condição necessária para a ocorrência de deadlock é:",
    options: ["preempção obrigatória de todos os recursos", "ausência de espera por recursos", "existência de espera circular entre processos", "execução de apenas uma thread", "uso exclusivo de memória virtual"], answer: 2,
    explanation: "Entre as condições clássicas de Coffman está a espera circular: cada processo aguarda um recurso mantido pelo próximo processo da cadeia.",
  },
  {
    id: "so-08", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "Em um sistema de arquivos, metadados descrevem, por exemplo:",
    options: ["o conteúdo semântico de um documento", "o endereço IP do usuário que criou o arquivo", "atributos como tamanho, proprietário, permissões e datas", "somente a extensão visível do arquivo", "a chave de criptografia de todo o disco"], answer: 2,
    explanation: "Metadados são dados sobre o arquivo: tamanho, localização, proprietário, permissões, datas e outros atributos administrativos, não o conteúdo propriamente dito.",
  },
  {
    id: "so-09", subjectId: "sistemas-operacionais", subject: "Sistemas Operacionais",
    stem: "O isolamento proporcionado pela virtualização permite que máquinas virtuais distintas:",
    options: ["usem necessariamente o mesmo sistema operacional", "compartilhem automaticamente a memória de cada processo", "executem ambientes convidados independentes sobre a mesma infraestrutura física", "dispensem gerenciamento de recursos pelo host", "operem sem qualquer camada de software"], answer: 2,
    explanation: "A virtualização abstrai recursos físicos para criar ambientes convidados separados, que podem executar sistemas operacionais e aplicações distintos no mesmo host.",
  },
  {
    id: "red-01", subjectId: "redes", subject: "Redes de Computadores",
    stem: "No modelo TCP/IP, o DNS é normalmente classificado na camada de:",
    options: ["acesso à rede", "internet", "transporte", "aplicação", "física"], answer: 3,
    explanation: "DNS é um serviço de aplicação que resolve nomes em informações utilizadas pelas aplicações. Ele usa protocolos de transporte e rede, mas não pertence a essas camadas.",
  },
  {
    id: "red-02", subjectId: "redes", subject: "Redes de Computadores",
    stem: "A característica que diferencia o TCP do UDP é que o TCP:",
    options: ["não utiliza portas", "é orientado à conexão e provê mecanismos de confiabilidade", "opera exclusivamente em IPv6", "não pode transportar dados de aplicações", "elimina a necessidade de endereços IP"], answer: 1,
    explanation: "TCP estabelece conexão lógica e oferece controle de sequência, confirmação e retransmissão. UDP é mais simples e não oferece essas garantias por padrão.",
  },
  {
    id: "red-03", subjectId: "redes", subject: "Redes de Computadores",
    stem: "Uma rede IPv4 com máscara /26 possui quantos endereços utilizáveis por sub-rede, considerando a reserva convencional de endereço de rede e broadcast?",
    options: ["30", "62", "64", "126", "254"], answer: 1,
    explanation: "Uma máscara /26 deixa 6 bits para hosts: 2⁶ = 64 endereços totais. Subtraindo rede e broadcast, restam 62 utilizáveis.",
  },
  {
    id: "red-04", subjectId: "redes", subject: "Redes de Computadores",
    stem: "O gateway padrão de uma estação em uma LAN deve ser utilizado quando ela precisa:",
    options: ["resolver um nome de domínio local", "obter automaticamente uma máscara de rede", "enviar tráfego destinado a outra rede", "comutar um quadro entre portas da mesma VLAN", "registrar uma nova conta de usuário"], answer: 2,
    explanation: "O gateway padrão é o roteador usado para alcançar destinos fora da sub-rede local. Para destinos locais, a estação envia diretamente ao host correspondente.",
  },
  {
    id: "red-05", subjectId: "redes", subject: "Redes de Computadores",
    stem: "Um endereço IPv6 possui, em sua forma completa, quantos bits?",
    options: ["32", "48", "64", "96", "128"], answer: 4,
    explanation: "IPv6 utiliza endereços de 128 bits, ampliando significativamente o espaço de endereçamento em comparação aos 32 bits do IPv4.",
  },
  {
    id: "red-06", subjectId: "redes", subject: "Redes de Computadores",
    stem: "A função mais diretamente associada ao DHCP é:",
    options: ["filtrar conexões por política de segurança", "traduzir nomes em endereços IP", "atribuir dinamicamente parâmetros de rede aos clientes", "criar túneis criptografados entre filiais", "encaminhar pacotes entre AS autônomos"], answer: 2,
    explanation: "DHCP entrega dinamicamente configuração como endereço IP, máscara, gateway e servidores DNS. A resolução de nomes é responsabilidade do DNS.",
  },
  {
    id: "red-07", subjectId: "redes", subject: "Redes de Computadores",
    stem: "Uma VLAN é utilizada principalmente para:",
    options: ["aumentar o tamanho físico de um cabo", "separar logicamente domínios de broadcast em uma infraestrutura comutada", "substituir protocolos de roteamento", "criptografar todos os pacotes de uma LAN", "fornecer endereços IP públicos"], answer: 1,
    explanation: "VLANs segmentam logicamente uma rede de switches, criando domínios de broadcast distintos. A comunicação entre VLANs exige roteamento de camada 3.",
  },
  {
    id: "red-08", subjectId: "redes", subject: "Redes de Computadores",
    stem: "Em uma política corporativa, um firewall é empregado primariamente para:",
    options: ["armazenar cópias de arquivos", "filtrar tráfego com base em regras", "atribuir endereços aos hosts", "alterar a topologia física da LAN", "compilar aplicações de rede"], answer: 1,
    explanation: "Firewalls aplicam regras de filtragem e inspeção ao tráfego. Podem atuar em diferentes camadas, mas seu papel central é controlar o fluxo conforme a política de segurança.",
  },
  {
    id: "red-09", subjectId: "redes", subject: "Redes de Computadores",
    stem: "Uma VPN é adequada para permitir que usuários remotos acessem recursos corporativos porque, em geral, ela:",
    options: ["elimina o uso de autenticação", "cria um túnel lógico protegido sobre uma rede pública", "transforma IP privado em endereço MAC", "substitui DNS e DHCP simultaneamente", "impede qualquer roteamento entre redes"], answer: 1,
    explanation: "VPNs estabelecem túneis lógicos, normalmente com autenticação e criptografia, para proteger comunicações realizadas sobre redes públicas ou não confiáveis.",
  },
  {
    id: "bd-01", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "No modelo Entidade-Relacionamento, um relacionamento representa:",
    options: ["um atributo que identifica unicamente uma tabela", "uma associação conceitual entre entidades", "uma instrução de alteração de dados", "um arquivo físico do SGBD", "um mecanismo exclusivo de bancos não relacionais"], answer: 1,
    explanation: "Relacionamentos expressam associações entre entidades no modelo conceitual, como Cliente realiza Pedido. Eles podem ter cardinalidades e atributos próprios.",
  },
  {
    id: "bd-02", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "A chave primária de uma tabela relacional deve:",
    options: ["aceitar valores repetidos para facilitar joins", "identificar unicamente cada linha e não admitir valor nulo", "existir apenas em tabelas de dimensão", "ser sempre composta por três colunas", "conter obrigatoriamente texto alfanumérico"], answer: 1,
    explanation: "A chave primária identifica cada tupla de forma única. Por essa razão, seus valores devem ser únicos e não nulos; ela pode ser simples ou composta.",
  },
  {
    id: "bd-03", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "Uma tabela está em terceira forma normal quando, além das condições anteriores, evita dependências transitivas de atributos não-chave em relação à chave primária.",
    options: ["Verdadeiro, pois 3FN busca reduzir dependências transitivas inadequadas.", "Falso, pois 3FN exige que toda tabela tenha apenas uma coluna.", "Falso, pois dependências transitivas são obrigatórias em 3FN.", "Falso, pois normalização se aplica somente a NoSQL.", "Verdadeiro apenas para tabelas sem chave primária."], answer: 0,
    explanation: "A 3FN busca reduzir redundância e anomalias eliminando dependências transitivas entre atributos não-chave e a chave. Ela não exige tabelas de uma única coluna.",
  },
  {
    id: "bd-04", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "Qual comando pertence tipicamente à categoria DDL (Data Definition Language)?",
    options: ["SELECT", "INSERT", "UPDATE", "CREATE TABLE", "GRANT"], answer: 3,
    explanation: "CREATE TABLE define uma estrutura de dados e é DDL. SELECT, INSERT e UPDATE atuam sobre dados; GRANT é normalmente classificado como DCL.",
  },
  {
    id: "bd-05", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "Uma consulta que deve retornar somente linhas com correspondência entre as tabelas Pedido e Cliente deve usar, conceitualmente:",
    options: ["CROSS JOIN", "INNER JOIN", "FULL OUTER JOIN", "LEFT JOIN sem condição", "UNION ALL"], answer: 1,
    explanation: "INNER JOIN retorna as combinações que satisfazem a condição de junção. LEFT e FULL JOIN preservam linhas sem correspondência em um ou ambos os lados.",
  },
  {
    id: "bd-06", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "Após agrupar vendas por departamento, a cláusula usada para filtrar os grupos cujo total ultrapasse determinado valor é:",
    options: ["WHERE", "ORDER BY", "HAVING", "DISTINCT", "VALUES"], answer: 2,
    explanation: "WHERE filtra linhas antes do agrupamento. HAVING filtra os grupos resultantes de GROUP BY e pode usar expressões agregadas, como SUM().",
  },
  {
    id: "bd-07", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "No contexto ACID, a propriedade de atomicidade significa que uma transação:",
    options: ["é executada apenas por um usuário", "tem todas as suas operações confirmadas ou todas desfeitas", "não pode ser interrompida por falha elétrica", "usa somente uma tabela", "não registra alterações em log"], answer: 1,
    explanation: "Atomicidade trata a transação como uma unidade indivisível: ou todas as operações são efetivadas, ou nenhuma delas permanece após falha ou rollback.",
  },
  {
    id: "bd-08", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "O uso de um índice em uma coluna tende a ser mais útil quando essa coluna é frequentemente:",
    options: ["usada em filtros, ordenações ou junções seletivas", "preenchida apenas uma vez e nunca consultada", "composta exclusivamente por valores nulos", "utilizada para armazenar imagens de grande porte", "removida antes de toda consulta"], answer: 0,
    explanation: "Índices podem acelerar buscas, ordenações e junções ao reduzir a quantidade de dados examinados, especialmente em colunas seletivas. Há custo de armazenamento e manutenção em escritas.",
  },
  {
    id: "bd-09", subjectId: "banco-de-dados", subject: "Banco de Dados",
    stem: "Uma chave estrangeira é usada para:",
    options: ["criptografar dados de uma tabela", "referenciar uma chave candidata de outra tabela e reforçar integridade referencial", "substituir toda chave primária", "agrupar linhas por valor numérico", "criar automaticamente um backup"], answer: 1,
    explanation: "A chave estrangeira cria um vínculo entre tabelas e ajuda a impedir referências inválidas. Ela normalmente aponta para uma chave primária ou candidata na tabela referenciada.",
  },
  {
    id: "dev-01", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "A engenharia de requisitos busca, entre outros objetivos:",
    options: ["substituir a fase de testes por documentação", "identificar, analisar, validar e gerenciar necessidades das partes interessadas", "eliminar a participação de usuários", "definir somente a linguagem de programação", "transformar diagramas UML em código de máquina"], answer: 1,
    explanation: "Engenharia de requisitos trata de elicitação, análise, especificação, validação e gestão de mudanças das necessidades que orientarão a solução.",
  },
  {
    id: "dev-02", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "No Scrum, quem maximiza o valor do produto resultante do trabalho do time é, em regra, o:",
    options: ["Scrum Master", "Product Owner", "gerente funcional", "arquiteto corporativo", "administrador de banco de dados"], answer: 1,
    explanation: "O Product Owner é responsável por maximizar o valor do produto e gerenciar efetivamente o Product Backlog. O Scrum Master apoia a aplicação do framework.",
  },
  {
    id: "dev-03", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "No Kanban, o limite de trabalho em progresso (WIP limit) tem como finalidade principal:",
    options: ["impedir qualquer mudança de prioridade", "limitar itens simultâneos para melhorar o fluxo e evidenciar gargalos", "definir a duração fixa de uma sprint", "eliminar a necessidade de visualização do trabalho", "substituir retrospectivas por auditorias"], answer: 1,
    explanation: "Limitar WIP reduz multitarefa excessiva, expõe gargalos e favorece a conclusão de itens. Kanban trabalha com fluxo contínuo e não depende de sprints.",
  },
  {
    id: "dev-04", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "O diagrama UML mais associado à representação de interações entre atores externos e funcionalidades do sistema é o diagrama de:",
    options: ["classes", "casos de uso", "implantação", "componentes", "objetos"], answer: 1,
    explanation: "Diagramas de casos de uso apresentam atores e suas interações com funcionalidades do sistema. Eles ajudam na visão de requisitos funcionais em alto nível.",
  },
  {
    id: "dev-05", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "O padrão Strategy é apropriado quando se deseja:",
    options: ["garantir uma única instância global de uma classe", "encapsular algoritmos intercambiáveis atrás de uma interface comum", "criar objetos sem usar construtores", "persistir objetos diretamente em banco relacional", "modelar dependência entre tabelas"], answer: 1,
    explanation: "Strategy define uma família de algoritmos, encapsula cada um e permite sua troca sem alterar o contexto que os utiliza. Singleton atende a um problema diferente.",
  },
  {
    id: "dev-06", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "Em testes de software, um teste unitário procura avaliar principalmente:",
    options: ["o comportamento de uma unidade pequena e isolável de código", "a compatibilidade entre todos os serviços de produção", "a aceitação final por usuários reais", "a capacidade máxima do servidor de banco", "o processo de compra de infraestrutura"], answer: 0,
    explanation: "Testes unitários verificam unidades menores, como funções ou métodos, isoladamente. Testes de integração, sistema e aceitação possuem escopos mais amplos.",
  },
  {
    id: "dev-07", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "Uma característica comum de linguagens como Python, Java e PHP é que elas:",
    options: ["não possuem bibliotecas padrão", "são incapazes de suportar orientação a objetos", "podem ser usadas para desenvolver aplicações de propósito geral", "executam exclusivamente em navegadores", "não podem interagir com bancos de dados"], answer: 2,
    explanation: "Python, Java e PHP são linguagens de propósito geral amplamente utilizadas em diversos tipos de aplicações. Cada uma tem modelos de execução e ecossistemas próprios.",
  },
  {
    id: "dev-08", subjectId: "desenvolvimento", subject: "Desenvolvimento de Sistemas",
    stem: "Uma entrega incremental em ciclo de vida de software se caracteriza por:",
    options: ["aguardar todo o escopo antes de disponibilizar qualquer funcionalidade", "disponibilizar partes funcionais do produto em incrementos sucessivos", "eliminar a necessidade de planejamento", "proibir testes automatizados", "substituir requisitos por código legado"], answer: 1,
    explanation: "A abordagem incremental entrega capacidade utilizável em partes sucessivas. Isso possibilita feedback e evolução progressiva, sem dispensar planejamento ou qualidade.",
  },
  {
    id: "seg-01", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "A capacidade de um serviço permanecer acessível a usuários autorizados quando necessário está associada ao princípio de:",
    options: ["confidencialidade", "integridade", "disponibilidade", "autenticidade", "não repúdio"], answer: 2,
    explanation: "Disponibilidade é o componente da tríade CIA relacionado a acesso oportuno e confiável a informações e serviços por usuários autorizados.",
  },
  {
    id: "seg-02", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "O uso de uma função hash sobre um arquivo é especialmente útil para verificar sua:",
    options: ["disponibilidade", "integridade", "localização física", "classificação tributária", "velocidade de transmissão"], answer: 1,
    explanation: "Um hash permite comparar a impressão digital de um arquivo. Alterações no conteúdo tendem a produzir valor diferente, auxiliando na verificação de integridade.",
  },
  {
    id: "seg-03", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "Em criptografia simétrica, a mesma chave secreta é usada, em geral, para:",
    options: ["assinar digitalmente e emitir certificados", "criptografar e descriptografar a mensagem", "atribuir endereços IP", "autenticar um usuário sem armazenar segredo", "substituir políticas de acesso"], answer: 1,
    explanation: "Criptografia simétrica usa uma chave compartilhada para cifrar e decifrar. O desafio principal é distribuir e proteger essa chave de forma segura.",
  },
  {
    id: "seg-04", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "Em um modelo RBAC, as permissões são concedidas prioritariamente a:",
    options: ["endereços IP públicos", "papéis ou funções organizacionais", "dispositivos de armazenamento", "versões de sistema operacional", "links de rede"], answer: 1,
    explanation: "Role-Based Access Control associa permissões a papéis, como Analista ou Gestor, e usuários recebem os direitos correspondentes aos papéis atribuídos.",
  },
  {
    id: "seg-05", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "A análise de vulnerabilidades tem como objetivo principal:",
    options: ["eliminar a necessidade de controles preventivos", "identificar fragilidades conhecidas e apoiar sua priorização e tratamento", "garantir que nenhum incidente ocorra", "substituir testes de backup", "dispensar inventário de ativos"], answer: 1,
    explanation: "A análise identifica vulnerabilidades e subsidia priorização por risco. Ela não elimina controles, inventário nem a possibilidade de incidentes.",
  },
  {
    id: "seg-06", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "Um plano de continuidade de negócio deve tratar, entre outros aspectos:",
    options: ["somente a troca de senhas dos usuários", "estratégias para manter ou retomar processos críticos após interrupções", "apenas aquisição de novos servidores", "a exclusão imediata de todos os logs", "somente o layout da rede local"], answer: 1,
    explanation: "Continuidade de negócio prepara a organização para manter ou recuperar processos críticos diante de interrupções. Inclui estratégias, responsabilidades, testes e comunicação.",
  },
  {
    id: "seg-07", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "A relação mais adequada entre ISO/IEC 27001 e ISO/IEC 27002 é:",
    options: ["a 27001 é voltada ao sistema de gestão; a 27002 oferece orientação para controles", "a 27002 certifica organizações e a 27001 é exclusiva para hardware", "ambas tratam apenas de criptografia simétrica", "a 27001 substitui integralmente políticas de segurança", "a 27002 se aplica somente a bancos de dados"], answer: 0,
    explanation: "A ISO/IEC 27001 especifica requisitos para um SGSI; a ISO/IEC 27002 apresenta orientações e boas práticas para controles de segurança da informação.",
  },
  {
    id: "seg-08", subjectId: "seguranca", subject: "Segurança da Informação",
    stem: "Segundo a LGPD, dados anonimizados são aqueles relativos a titular que não possa ser identificado, considerando meios técnicos razoáveis e disponíveis no momento de seu tratamento.",
    options: ["Verdadeiro, pois a anonimização busca afastar a identificação do titular.", "Falso, pois todo dado anonimizado contém CPF obrigatório.", "Falso, pois anonimização é sinônimo de criptografia reversível.", "Verdadeiro apenas se os dados forem públicos.", "Falso, pois dados pessoais nunca podem ser protegidos."], answer: 0,
    explanation: "A anonimização busca tornar o titular não identificável por meios razoáveis e disponíveis. Ela não se confunde necessariamente com criptografia, que pode ser reversível mediante chave.",
  },
  {
    id: "gov-01", subjectId: "governanca", subject: "Governança de TI",
    stem: "No ITIL v3, o ciclo de vida de serviço contempla, entre outras etapas:",
    options: ["estratégia, desenho, transição, operação e melhoria contínua", "planejamento, compilação, execução e garbage collection", "modelagem, normalização, indexação e backup", "projeto físico, lógico e conceitual de banco", "aquisição, criptografia, roteamento e auditoria"], answer: 0,
    explanation: "ITIL v3 organiza práticas de gestão de serviços ao redor do ciclo de vida: estratégia, desenho, transição, operação e melhoria contínua de serviço.",
  },
  {
    id: "gov-02", subjectId: "governanca", subject: "Governança de TI",
    stem: "No ITIL 4, o Service Value System (SVS) descreve como os componentes e atividades de uma organização trabalham juntos para facilitar a criação de valor por meio de serviços.",
    options: ["Verdadeiro", "Falso, pois o ITIL 4 elimina a noção de valor", "Falso, pois SVS é um protocolo de rede", "Falso, pois se aplica apenas a desenvolvimento de software", "Falso, pois é exclusivo do COBIT"], answer: 0,
    explanation: "O SVS é um conceito central do ITIL 4. Ele mostra como princípios, governança, cadeia de valor, práticas e melhoria contínua se combinam para criar valor.",
  },
  {
    id: "gov-03", subjectId: "governanca", subject: "Governança de TI",
    stem: "No contexto do COBIT, governança e gestão se distinguem porque a governança:",
    options: ["direciona, avalia e monitora, enquanto a gestão planeja, constrói, executa e monitora atividades", "é responsável somente por instalar softwares", "elimina a necessidade de objetivos corporativos", "atua apenas no nível operacional", "substitui toda gestão de projetos"], answer: 0,
    explanation: "COBIT separa governança de gestão. A governança avalia necessidades, direciona prioridades e monitora; a gestão planeja, constrói, executa e acompanha atividades para atingir objetivos.",
  },
  {
    id: "gov-04", subjectId: "governanca", subject: "Governança de TI",
    stem: "Em gestão de projetos, a alteração de escopo sem avaliação de impacto pode afetar diretamente:",
    options: ["somente o nome do projeto", "prazo, custo, riscos e qualidade", "apenas o endereço IP dos servidores", "somente a política de backup", "a sintaxe de comandos SQL"], answer: 1,
    explanation: "Escopo, prazo, custo e qualidade são dimensões interdependentes. Mudanças não controladas de escopo podem aumentar esforço, riscos e comprometer entregas.",
  },
  {
    id: "gov-05", subjectId: "governanca", subject: "Governança de TI",
    stem: "Uma parte interessada de projeto (stakeholder) é corretamente entendida como:",
    options: ["somente o patrocinador financeiro", "qualquer pessoa, grupo ou organização que pode afetar, ser afetada ou perceber-se afetada pelo projeto", "apenas o gerente de projetos", "somente usuários finais internos", "apenas fornecedores contratados"], answer: 1,
    explanation: "Stakeholders incluem patrocinadores, usuários, equipes, fornecedores, órgãos reguladores e outros atores que possam afetar ou ser afetados pelo projeto.",
  },
  {
    id: "gov-06", subjectId: "governanca", subject: "Governança de TI",
    stem: "Um portfólio de projetos é composto por iniciativas agrupadas para facilitar gestão e alinhamento estratégico, ainda que não possuam necessariamente dependência direta entre si.",
    options: ["Verdadeiro", "Falso, pois portfólio é sinônimo de cronograma", "Falso, pois portfólios só podem conter um projeto", "Falso, pois somente programas possuem alinhamento estratégico", "Falso, pois projetos nunca podem ser agrupados"], answer: 0,
    explanation: "Portfólios reúnem projetos, programas e outros trabalhos para gestão e alinhamento estratégico. Diferentemente de programas, as iniciativas não precisam ter interdependência operacional.",
  },
  {
    id: "gov-07", subjectId: "governanca", subject: "Governança de TI",
    stem: "Na gestão de riscos de projetos, uma resposta adequada a uma ameaça pode ser:",
    options: ["ignorar todo risco identificado", "mitigar sua probabilidade ou impacto", "transformar automaticamente a ameaça em requisito", "eliminar a comunicação com stakeholders", "registrar o risco somente depois do encerramento"], answer: 1,
    explanation: "Mitigar é uma estratégia de resposta a ameaças que busca reduzir probabilidade e/ou impacto. Outras opções podem incluir evitar, transferir ou aceitar, conforme o caso.",
  },
  {
    id: "gov-08", subjectId: "governanca", subject: "Governança de TI",
    stem: "Uma matriz RACI é útil para esclarecer responsabilidades porque distingue, entre outros, quem executa uma atividade e quem responde em última instância por ela.",
    options: ["Verdadeiro", "Falso, pois RACI mede somente custos", "Falso, pois RACI é técnica de criptografia", "Falso, pois não admite consultados ou informados", "Falso, pois se limita a diagramas UML"], answer: 0,
    explanation: "RACI explicita papéis: Responsible (executa), Accountable (responde), Consulted (é consultado) e Informed (é informado), auxiliando governança e coordenação.",
  },
];

export const subjectOrder = [
  "arquitetura",
  "sistemas-operacionais",
  "redes",
  "banco-de-dados",
  "desenvolvimento",
  "seguranca",
  "governanca",
];
