/**
 * Direção visual: Caderno de Campo Técnico — neoeditorial técnico com papel mineral,
 * grafite, Verde Circuito e elementos de percurso inspirados em manuais de engenharia.
 */
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  HardDrive,
  Landmark,
  LockKeyhole,
  Network,
  Play,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SimuladoSection from "@/components/SimuladoSection";

type Subject = {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  accent: string;
  summary: string;
  examFocus: string;
  topics: string[];
  map: { label: string; detail: string }[];
  comparison: {
    heading: string;
    columns: [string, string, string];
    rows: [string, string, string][];
  };
  video: {
    id: string;
    title: string;
    duration: string;
    note: string;
  };
};

const subjects: Subject[] = [
  {
    id: "arquitetura",
    code: "ARQ.01",
    title: "Arquitetura de Computadores",
    shortTitle: "Arquitetura",
    icon: Cpu,
    accent: "#157A6E",
    summary:
      "Entenda o computador como uma cadeia de execução: software instrui o processador, o processador lê e escreve dados em níveis de memória e o armazenamento preserva o estado de longo prazo.",
    examFocus:
      "Relacione hierarquia de memória, ciclos de instrução e conversões entre decimal, binário e hexadecimal em situações práticas.",
    topics: [
      "Hardware, software e firmware",
      "CPU, registradores e ciclo de instrução",
      "Cache, RAM, ROM e memória virtual",
      "SSD, HDD e sistemas de numeração",
    ],
    map: [
      { label: "Processador", detail: "busca · decodifica · executa" },
      { label: "Memória", detail: "registrador · cache · RAM" },
      { label: "Armazenamento", detail: "SSD · HDD · persistência" },
      { label: "Software", detail: "SO · drivers · aplicações" },
    ],
    comparison: {
      heading: "Hierarquia de memória",
      columns: ["Componente", "Papel principal", "Leitura de prova"],
      rows: [
        ["Registradores", "Dados imediatos da CPU", "Maior velocidade e menor capacidade."],
        ["Cache", "Reduz latência da RAM", "Níveis L1/L2/L3 aproximam CPU e dados."],
        ["RAM", "Área de trabalho volátil", "Perde conteúdo sem energia."],
        ["SSD / HDD", "Persistência de arquivos", "SSD usa memória flash; HDD usa discos magnéticos."],
      ],
    },
    video: {
      id: "4w-4-aoJLgA",
      title: "Tecnologia da Informação para Concursos — do zero",
      duration: "Aula introdutória",
      note: "Use como aquecimento e avance para as anotações de CPU, memória e conversões desta trilha.",
    },
  },
  {
    id: "sistemas-operacionais",
    code: "SO.02",
    title: "Sistemas Operacionais",
    shortTitle: "Sistemas Operacionais",
    icon: Server,
    accent: "#3E6A89",
    summary:
      "O sistema operacional intermedeia aplicações e hardware: agenda processos, administra memória, oferece sistema de arquivos e cria isolamento para cargas virtuais.",
    examFocus:
      "Diferencie processo e thread, paginação e segmentação, permissões de arquivo e os papéis de host, guest e hypervisor.",
    topics: [
      "Windows Server e GNU/Linux",
      "Processos, threads e escalonamento",
      "Memória, paginação e swap",
      "Sistema de arquivos e virtualização",
    ],
    map: [
      { label: "Processos", detail: "estado · thread · escalonador" },
      { label: "Memória", detail: "RAM · páginas · swap" },
      { label: "Arquivos", detail: "diretórios · ACL · permissões" },
      { label: "Virtualização", detail: "host · hypervisor · guest" },
    ],
    comparison: {
      heading: "Ambientes e camadas de execução",
      columns: ["Elemento", "Característica", "Ponto de atenção"],
      rows: [
        ["Windows Server", "Família Microsoft para serviços corporativos", "Integração frequente com AD, políticas e serviços de rede."],
        ["GNU/Linux", "Kernel e distribuições livres", "Permissões, shell e estrutura do sistema de arquivos são recorrentes."],
        ["Processo", "Programa em execução com recursos", "Pode ter várias threads compartilhando memória."],
        ["Hypervisor", "Cria e gerencia máquinas virtuais", "Tipo 1 executa sobre hardware; Tipo 2 executa sobre um SO host."],
      ],
    },
    video: {
      id: "TvddG2fD2O4",
      title: "AULA 2 — Sistemas Operacionais Windows e Linux",
      duration: "Videoaula pública",
      note: "Assista com o foco em diferenças de administração, arquivos e permissões; complemente a parte de virtualização pelo mapa mental.",
    },
  },
  {
    id: "redes",
    code: "RED.03",
    title: "Redes de Computadores",
    shortTitle: "Redes",
    icon: Network,
    accent: "#B45C48",
    summary:
      "Redes transportam dados por camadas. Dominar modelos, endereçamento e serviços ajuda a explicar o caminho de um pacote do usuário até uma aplicação distribuída.",
    examFocus:
      "Associe cada protocolo à sua camada, calcule sub-redes com cuidado e diferencie função de switch, roteador, firewall, proxy e servidor DNS.",
    topics: [
      "OSI, TCP/IP, TCP e UDP",
      "IPv4, IPv6, máscara e roteamento",
      "Switches, roteadores, VLAN e VPN",
      "DHCP, DNS, proxy e firewall",
    ],
    map: [
      { label: "Camadas", detail: "OSI · TCP/IP · encapsulamento" },
      { label: "Endereços", detail: "IPv4 · IPv6 · CIDR" },
      { label: "Infraestrutura", detail: "switch · roteador · VLAN" },
      { label: "Serviços", detail: "DNS · DHCP · VPN · firewall" },
    ],
    comparison: {
      heading: "Protocolos e dispositivos em contraste",
      columns: ["Item", "Função", "Armadilha recorrente"],
      rows: [
        ["TCP", "Transporte orientado à conexão", "Confiabilidade, ordenação e controle de fluxo têm custo."],
        ["UDP", "Transporte sem conexão", "Não garante entrega, mas reduz overhead."],
        ["Switch", "Comuta quadros em uma LAN", "Normalmente opera na camada de enlace."],
        ["Roteador", "Encaminha pacotes entre redes", "Usa endereços IP e tabelas de roteamento."],
        ["DNS / DHCP", "Resolve nomes / entrega configuração", "DNS não atribui IP; DHCP não resolve nomes."],
      ],
    },
    video: {
      id: "QKgnlMWggoY",
      title: "Aula de Revisão Geral de Redes de Computadores — Tecnologia da Informação",
      duration: "1h39min",
      note: "Revisão extensa para consolidar modelos, protocolos e infraestrutura. Use os marcadores desta página como checklist enquanto assiste.",
    },
  },
  {
    id: "banco-de-dados",
    code: "BD.04",
    title: "Banco de Dados",
    shortTitle: "Banco de Dados",
    icon: Database,
    accent: "#805E3B",
    summary:
      "Banco de dados transforma fatos do negócio em estruturas consultáveis. A prova costuma cobrar a passagem entre modelo conceitual, relacional e comandos SQL.",
    examFocus:
      "Faça a ponte entre entidades, chaves, cardinalidades, normalização e consultas SELECT com junções, filtros, agrupamentos e transações.",
    topics: [
      "Modelo Entidade-Relacionamento",
      "Modelo relacional, chaves e normalização",
      "SQL: DDL, DML, DCL e TCL",
      "MySQL, PostgreSQL, SQL Server e Oracle",
    ],
    map: [
      { label: "Modelagem", detail: "entidade · atributo · relacionamento" },
      { label: "Relacional", detail: "tabela · chave · integridade" },
      { label: "SQL", detail: "DDL · DML · DCL · TCL" },
      { label: "SGBDs", detail: "MySQL · PG · SQL Server · Oracle" },
    ],
    comparison: {
      heading: "SGBDs relacionais do edital",
      columns: ["SGBD", "Perfil", "Leitura estratégica"],
      rows: [
        ["MySQL", "Popular em aplicações web", "Conheça SQL padrão e mecanismos de armazenamento sem prender-se a sintaxe proprietária."],
        ["PostgreSQL", "Livre e extensível", "Destaque para aderência a padrões e recursos avançados."],
        ["SQL Server", "Ecossistema Microsoft", "Frequentemente relacionado a T-SQL e ferramentas corporativas."],
        ["Oracle", "Corporativo e robusto", "Atenção a PL/SQL, transações e características próprias em questões específicas."],
      ],
    },
    video: {
      id: "F5VcXbdFV-U",
      title: "TI para concursos — Revisão de Bancos de Dados",
      duration: "Videoaula pública",
      note: "Priorize modelagem e SQL; pause a aula ao encontrar uma regra de integridade e reescreva-a no seu caderno de revisão.",
    },
  },
  {
    id: "desenvolvimento",
    code: "DEV.05",
    title: "Desenvolvimento de Sistemas",
    shortTitle: "Desenvolvimento",
    icon: Code2,
    accent: "#5A697A",
    summary:
      "Desenvolver sistemas é decidir como um produto nasce, evolui e preserva qualidade. Linguagens, processos, modelagem e padrões são camadas complementares dessa disciplina.",
    examFocus:
      "Compare ciclos de vida, práticas ágeis e diagramas UML; reconheça quando um padrão de projeto resolve uma responsabilidade recorrente.",
    topics: [
      "Python, Java e PHP",
      "Engenharia e ciclo de vida de software",
      "Scrum, Kanban e métricas de fluxo",
      "UML e padrões de projeto",
    ],
    map: [
      { label: "Linguagens", detail: "Python · Java · PHP" },
      { label: "Processo", detail: "requisitos · projeto · teste · entrega" },
      { label: "Agilidade", detail: "Scrum · Kanban · melhoria" },
      { label: "Design", detail: "UML · padrões · baixo acoplamento" },
    ],
    comparison: {
      heading: "Métodos e artefatos de desenvolvimento",
      columns: ["Elemento", "Propósito", "Como distinguir"],
      rows: [
        ["Scrum", "Organiza entregas iterativas", "Trabalha com sprints, papéis e eventos definidos."],
        ["Kanban", "Torna o fluxo de trabalho visível", "Limita WIP e busca fluxo contínuo; não exige sprint."],
        ["UML", "Modela estrutura e comportamento", "Diagramas são linguagens de representação, não metodologia ágil."],
        ["Padrões de projeto", "Nomeiam soluções reutilizáveis", "Ajudam a reduzir acoplamento e clarificar responsabilidades."],
      ],
    },
    video: {
      id: "zZbR1mmQBs0",
      title: "Engenharia de Software — Metodologias Ágeis (Parte 01)",
      duration: "Videoaula pública",
      note: "Assista comparando o que é prescritivo no Scrum e o que é orientado ao fluxo no Kanban; essa oposição aparece com frequência em itens objetivos.",
    },
  },
  {
    id: "seguranca",
    code: "SEG.06",
    title: "Segurança da Informação",
    shortTitle: "Segurança",
    icon: ShieldCheck,
    accent: "#8C5149",
    summary:
      "Segurança é gestão de risco aplicada à informação. Princípios, controles, continuidade, normas e proteção de dados devem ser interpretados como um sistema coerente.",
    examFocus:
      "Associe controles à tríade CIA, diferencie autenticação de autorização, compare criptografia simétrica e assimétrica e conecte LGPD a governança de dados.",
    topics: [
      "Confidencialidade, integridade e disponibilidade",
      "Criptografia, acesso e vulnerabilidades",
      "Continuidade de negócio e resposta a incidentes",
      "ISO 27001/27002 e LGPD",
    ],
    map: [
      { label: "Princípios", detail: "CIA · risco · ativo" },
      { label: "Proteção", detail: "criptografia · autenticação · acesso" },
      { label: "Resiliência", detail: "backup · continuidade · incidente" },
      { label: "Conformidade", detail: "ISO 27001 · ISO 27002 · LGPD" },
    ],
    comparison: {
      heading: "Princípios, controles e normas",
      columns: ["Conceito", "Pergunta central", "Exemplo de leitura"],
      rows: [
        ["Confidencialidade", "Quem pode acessar?", "Criptografia e controle de acesso reduzem exposição indevida."],
        ["Integridade", "O dado foi alterado indevidamente?", "Hash, assinatura e trilha de auditoria oferecem evidência."],
        ["Disponibilidade", "O serviço está acessível quando necessário?", "Redundância, backup e continuidade fortalecem o objetivo."],
        ["ISO 27001 / 27002", "Como gerir e orientar controles?", "A primeira trata do SGSI; a segunda apresenta orientação de controles."],
      ],
    },
    video: {
      id: "Gfh2bxe3hGU",
      title: "Aula Segurança da Informação — aprenda o essencial",
      duration: "41min",
      note: "Fundamentos para estabelecer vocabulário. Em seguida, revise normas, continuidade e LGPD com os quatro nós do mapa mental.",
    },
  },
  {
    id: "governanca",
    code: "GOV.07",
    title: "Governança de TI",
    shortTitle: "Governança",
    icon: Landmark,
    accent: "#4B6D65",
    summary:
      "Governança conecta tecnologia a objetivos institucionais. Frameworks ajudam a organizar decisões, serviços, controles e entregas de projetos de TI.",
    examFocus:
      "Não trate ITIL, COBIT e gestão de projetos como sinônimos: compare finalidade, escopo e vocabulário para selecionar o framework adequado ao enunciado.",
    topics: [
      "ITIL v3 e ITIL 4",
      "COBIT e objetivos de governança",
      "Gestão de projetos de TI",
      "Portfólio, serviços, riscos e valor",
    ],
    map: [
      { label: "Governança", detail: "direção · valor · risco · controle" },
      { label: "COBIT", detail: "objetivos · alinhamento · avaliação" },
      { label: "ITIL", detail: "serviços · práticas · cadeia de valor" },
      { label: "Projetos", detail: "escopo · prazo · custo · risco" },
    ],
    comparison: {
      heading: "Frameworks de decisão e entrega",
      columns: ["Referência", "Centro de gravidade", "Como reconhecer"],
      rows: [
        ["ITIL v3", "Ciclo de vida de serviços", "Estratégia, desenho, transição, operação e melhoria."],
        ["ITIL 4", "Sistema de valor de serviço", "Práticas e cadeia de valor substituem leitura rígida por processos."],
        ["COBIT", "Governança e gestão corporativa de TI", "Alinha objetivos, controle, risco e benefícios ao negócio."],
        ["Gestão de projetos", "Entrega temporária de resultado", "Equilibra escopo, prazo, custo, riscos e partes interessadas."],
      ],
    },
    video: {
      id: "sAYrajGEM6A",
      title: "COBIT 2019 — Governança e Gestão de TI",
      duration: "Videoaula pública",
      note: "Use a aula para fixar COBIT e depois contraste com o foco operacional de serviços do ITIL na tabela comparativa.",
    },
  },
];

const storageKey = "trilha-ti-concursos-progresso-v1";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [activeId, setActiveId] = useState(subjects[0].id);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as string[];
      setCompleted(parsed.filter((id) => subjects.some((subject) => subject.id === id)));
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed]);

  const active = useMemo(
    () => subjects.find((subject) => subject.id === activeId) ?? subjects[0],
    [activeId],
  );
  const ActiveIcon = active.icon;
  const isComplete = completed.includes(active.id);
  const progress = Math.round((completed.length / subjects.length) * 100);

  function chooseSubject(id: string) {
    setActiveId(id);
    window.setTimeout(() => scrollToId("estudo"), 0);
  }

  function toggleCompletion(id: string) {
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#inicio" aria-label="Trilha TI — ir para o início">
          <img src="/manus-storage/trilha-ti-logo_8d7117fb.png" alt="" className="brand-mark" />
          <span className="brand-wordmark"><b>TRILHA</b><i>/</i> TI</span>
        </a>

        <nav className="top-nav" aria-label="Navegação principal">
          <a href="#trilha">Disciplinas</a>
          <a href="#estudo">Caderno</a>
          <a href="#simulado">Simulado</a>
          <a href="#fontes">Fontes</a>
        </nav>

        <button className="progress-chip" type="button" onClick={() => scrollToId("trilha")}>
          <span className="progress-chip-ring" style={{ "--progress": `${progress}%` } as React.CSSProperties}>
            {progress}%
          </span>
          <span><b>Seu percurso</b><small>{completed.length} de {subjects.length} módulos</small></span>
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span /> ANALISTA DE TECNOLOGIA DA INFORMAÇÃO <span className="eyebrow-dot">•</span> NÍVEL SUPERIOR</div>
            <h1>O edital,<br /><em>em trilha.</em></h1>
            <p>
              Um caderno técnico para conectar fundamentos, comparar conceitos e avançar com um percurso de estudo verificável.
            </p>
            <div className="hero-actions">
              <Button className="primary-action" onClick={() => scrollToId("trilha")}>
                Abrir percurso <ArrowUpRight size={17} />
              </Button>
              <button className="text-action" type="button" onClick={() => scrollToId("estudo")}>
                Ver o caderno <ChevronRight size={18} />
              </button>
            </div>
            <div className="hero-note"><Terminal size={15} /> PROGRESSO SALVO NESTE NAVEGADOR</div>
          </div>

          <div className="hero-visual" aria-label="Caderno técnico com esquemas de tecnologia da informação">
            <img src="/manus-storage/trilha-ti-hero_1662f415.jpg" alt="Ilustração editorial de um caderno de estudos com diagramas técnicos" />
            <div className="visual-caption"><span>CAMPO DE ESTUDO</span><b>07</b> módulos conectados</div>
            <div className="floating-tag tag-one"><Cpu size={15} /> ARQ</div>
            <div className="floating-tag tag-two"><Network size={15} /> REDES</div>
          </div>

          <div className="hero-ruler" aria-hidden="true">
            <span>00</span><i /><span>01</span><i /><span>02</span><i /><span>03</span>
          </div>
        </section>

        <section className="trajectory-section" id="trilha">
          <div className="section-lede">
            <span className="section-index">01 / PERCURSO</span>
            <div>
              <h2>Comece pela peça que<br />faz sentido <em>agora.</em></h2>
              <p>Selecione uma disciplina. O caderno muda junto: conceito, mapa mental, comparação e aula indicada.</p>
            </div>
          </div>

          <div className="trajectory-layout">
            <aside className="subject-rail" aria-label="Disciplinas do edital">
              <div className="rail-caption"><BookOpen size={16} /> <span>ÍNDICE DO EDITAL</span></div>
              <div className="rail-line" aria-hidden="true" />
              {subjects.map((subject, index) => {
                const SubjectIcon = subject.icon;
                const complete = completed.includes(subject.id);
                const selected = active.id === subject.id;
                return (
                  <button
                    key={subject.id}
                    className={`subject-item ${selected ? "is-selected" : ""} ${complete ? "is-complete" : ""}`}
                    type="button"
                    onClick={() => chooseSubject(subject.id)}
                    aria-pressed={selected}
                  >
                    <span className="subject-number">0{index + 1}</span>
                    <span className="subject-icon"><SubjectIcon size={18} /></span>
                    <span className="subject-name">{subject.shortTitle}</span>
                    <span className="subject-state">{complete ? <Check size={15} /> : <ChevronRight size={15} />}</span>
                  </button>
                );
              })}
            </aside>

            <div className="roadmap-panel">
              <div className="roadmap-topline">
                <span>TRILHA ATIVA</span>
                <span>{completed.length.toString().padStart(2, "0")} / {subjects.length.toString().padStart(2, "0")} CONCLUÍDOS</span>
              </div>
              <Progress value={progress} className="route-progress" />
              <div className="roadmap-steps">
                <div className="step step-current"><b>1</b><span>Compreender</span></div>
                <div className="step"><b>2</b><span>Conectar</span></div>
                <div className="step"><b>3</b><span>Comparar</span></div>
                <div className="step"><b>4</b><span>Revisar</span></div>
              </div>
              <p>Use cada disciplina como uma folha de revisão: leia o conceito, percorra os nós, confronte os termos e assista à aula com uma pergunta de prova em mente.</p>
            </div>
          </div>
        </section>

        <section className="study-section" id="estudo">
          <div className="study-head">
            <div>
              <span className="section-index">02 / CADERNO ATIVO</span>
              <h2>Uma disciplina.<br /><em>Quatro lentes.</em></h2>
            </div>
            <div className="study-guide">
              <span><i className="guide-dot guide-teal" /> conceito</span>
              <span><i className="guide-dot guide-ink" /> mapa mental</span>
              <span><i className="guide-dot guide-coral" /> comparação</span>
            </div>
          </div>

          <article className="study-sheet" style={{ "--accent": active.accent } as React.CSSProperties}>
            <div className="sheet-margin" aria-hidden="true">
              <span>{active.code}</span>
              <span>FOLHA / 01</span>
              <span>TRILHA TI</span>
            </div>
            <div className="sheet-content">
              <div className="subject-heading">
                <div className="subject-icon-large"><ActiveIcon size={29} /></div>
                <div>
                  <span className="subject-code">{active.code}</span>
                  <h3>{active.title}</h3>
                </div>
                <button
                  className={`completion-button ${isComplete ? "is-complete" : ""}`}
                  type="button"
                  onClick={() => toggleCompletion(active.id)}
                >
                  {isComplete ? <CircleCheck size={17} /> : <span className="empty-check" />}
                  {isComplete ? "Marcado para revisão" : "Marcar como estudado"}
                </button>
              </div>

              <div className="concept-grid">
                <div className="concept-copy">
                  <span className="micro-label">CONCEITO-CHAVE</span>
                  <p className="concept-text">{active.summary}</p>
                  <div className="exam-callout">
                    <FileText size={19} />
                    <div><b>Olhar de prova</b><span>{active.examFocus}</span></div>
                  </div>
                </div>
                <div className="topic-list-wrap">
                  <span className="micro-label">O QUE O EDITAL PEDE</span>
                  <ol className="topic-list">
                    {active.topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}
                  </ol>
                </div>
              </div>

              {(active.id === "arquitetura" || active.id === "redes") && (
                <div className="subject-art-strip">
                  <img
                    src={active.id === "arquitetura" ? "/manus-storage/trilha-ti-arquitetura_522d410e.jpg" : "/manus-storage/trilha-ti-redes_ce39ffce.jpg"}
                    alt={active.id === "arquitetura" ? "Diagrama editorial de arquitetura de computadores" : "Diagrama editorial de rede e segurança"}
                  />
                  <span>{active.id === "arquitetura" ? "LEIA A MÁQUINA COMO CAMADAS" : "SIGA O PACOTE ENTRE CAMADAS"}</span>
                </div>
              )}

              <section className="lens-section map-section" aria-labelledby="mapa-title">
                <div className="lens-heading">
                  <div><span className="lens-no">A</span><span className="micro-label">MAPA MENTAL</span></div>
                  <p id="mapa-title">Não decore itens isolados: percorra as relações.</p>
                </div>
                <div className="mind-map-frame">
                  <div className="map-rings" aria-hidden="true" />
                  <div className="map-spoke spoke-1" aria-hidden="true" />
                  <div className="map-spoke spoke-2" aria-hidden="true" />
                  <div className="map-spoke spoke-3" aria-hidden="true" />
                  <div className="map-spoke spoke-4" aria-hidden="true" />
                  <div className="mind-center"><ActiveIcon size={22} /><span>{active.shortTitle}</span></div>
                  {active.map.map((node, index) => (
                    <div className={`mind-node node-${index + 1}`} key={node.label}>
                      <b>{node.label}</b><span>{node.detail}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="lens-section compare-section" aria-labelledby="tabela-title">
                <div className="lens-heading">
                  <div><span className="lens-no">B</span><span className="micro-label">TABELA COMPARATIVA</span></div>
                  <p id="tabela-title">{active.comparison.heading}: foque no contraste que muda a resposta.</p>
                </div>
                <div className="comparison-table-wrap">
                  <table className="comparison-table">
                    <thead><tr>{active.comparison.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
                    <tbody>
                      {active.comparison.rows.map((row) => (
                        <tr key={row[0]}>{row.map((cell, index) => <td key={cell} data-label={active.comparison.columns[index]}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="lens-section lesson-section" aria-labelledby="aula-title">
                <div className="lens-heading">
                  <div><span className="lens-no">C</span><span className="micro-label">VIDEOAULA</span></div>
                  <p id="aula-title">Assista com objetivo e preserve o link de origem como alternativa.</p>
                </div>
                <div className="lesson-grid">
                  <div className="lesson-meta">
                    <div className="video-index"><Play size={15} fill="currentColor" /> AULA INDICADA</div>
                    <h4>{active.video.title}</h4>
                    <p>{active.video.note}</p>
                    <div className="video-facts"><span><Clock3 size={15} /> {active.video.duration}</span><span><LockKeyhole size={15} /> player com privacidade aprimorada</span></div>
                    <a className="source-link" href={`https://www.youtube.com/watch?v=${active.video.id}`} target="_blank" rel="noreferrer">
                      Abrir no YouTube <ExternalLink size={15} />
                    </a>
                  </div>
                  <div className="video-frame">
                    <iframe
                      key={active.video.id}
                      src={`https://www.youtube-nocookie.com/embed/${active.video.id}`}
                      title={`Videoaula: ${active.video.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </section>
            </div>
          </article>
        </section>

        <SimuladoSection />

        <section className="review-section">
          <div className="review-graphic" aria-hidden="true"><Workflow size={36} /><span>REVISÃO</span><b>24h<br />7d<br />30d</b></div>
          <div className="review-copy">
            <span className="section-index">04 / RITUAL DE FIXAÇÃO</span>
            <h2>Feche a folha.<br /><em>Reabra o caminho.</em></h2>
            <p>Depois da aula, retorne ao mapa em 24 horas e use a tabela para testar diferenças. A revisão distribui o esforço e revela onde o conceito ainda não se sustenta.</p>
          </div>
          <Button variant="outline" className="review-button" onClick={() => scrollToId("trilha")}>
            Escolher próxima disciplina <ChevronRight size={17} />
          </Button>
        </section>
      </main>

      <footer className="site-footer" id="fontes">
        <div className="footer-brand"><img src="/manus-storage/trilha-ti-logo_8d7117fb.png" alt="" /><span>TRILHA / TI</span></div>
        <p>Conteúdo estruturado a partir do programa informado. As videoaulas são referências públicas do YouTube; disponibilidade e permissão de incorporação podem mudar pela decisão dos seus autores.</p>
        <a href="#inicio">Voltar ao topo <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}
