/**
 * Direção visual: Caderno de Campo Técnico — a prova aparece como uma folha operacional,
 * com régua de tempo, marcadores de questão e feedback objetivo de desempenho.
 */
import { useEffect, useMemo, useState } from "react";
import {
  AlarmClock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  Flag,
  Play,
  RotateCcw,
  TimerReset,
  Trophy,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { simuladoConfig, simuladoQuestions, type SimuladoQuestion } from "@/lib/simulado";

type SimuladoStage = "intro" | "running" | "result";
type SavedAttempt = {
  answers: Record<string, number>;
  currentIndex: number;
  secondsLeft: number;
};

const attemptKey = "trilha-ti-simulado-60-v1";
const choiceLetters = ["A", "B", "C", "D", "E"];

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function storageAttempt(): SavedAttempt | null {
  try {
    const saved = window.localStorage.getItem(attemptKey);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as SavedAttempt;
    if (typeof parsed.currentIndex !== "number" || typeof parsed.secondsLeft !== "number" || !parsed.answers) return null;
    return parsed;
  } catch {
    window.localStorage.removeItem(attemptKey);
    return null;
  }
}

export default function SimuladoSection() {
  const [stage, setStage] = useState<SimuladoStage>("intro");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(simuladoConfig.durationMinutes * 60);
  const [showBlankNotice, setShowBlankNotice] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  const currentQuestion = simuladoQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = simuladoQuestions.length - answeredCount;
  const progress = Math.round((answeredCount / simuladoQuestions.length) * 100);

  useEffect(() => {
    const stored = storageAttempt();
    if (stored && Object.keys(stored.answers).length > 0 && stored.secondsLeft > 0) {
      setAnswers(stored.answers);
      setCurrentIndex(Math.min(Math.max(stored.currentIndex, 0), simuladoQuestions.length - 1));
      setSecondsLeft(stored.secondsLeft);
      setStage("running");
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || stage !== "running") return;
    window.localStorage.setItem(attemptKey, JSON.stringify({ answers, currentIndex, secondsLeft }));
  }, [answers, currentIndex, isHydrated, secondsLeft, stage]);

  useEffect(() => {
    if (stage !== "running" || secondsLeft <= 0) return;
    const interval = window.setInterval(() => setSecondsLeft((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(interval);
  }, [secondsLeft, stage]);

  useEffect(() => {
    if (stage === "running" && secondsLeft === 0) conclude();
    // `conclude` intentionally does not depend on state outside this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, stage]);

  const results = useMemo(() => {
    const correct = simuladoQuestions.filter((question) => answers[question.id] === question.answer).length;
    const bySubject = simuladoConfig.distribution.map(([subject, total]) => {
      const questions = simuladoQuestions.filter((question) => question.subject === subject);
      const hits = questions.filter((question) => answers[question.id] === question.answer).length;
      return { subject, total, hits, percent: Math.round((hits / total) * 100) };
    });
    return { correct, percent: Math.round((correct / simuladoQuestions.length) * 100), bySubject };
  }, [answers]);

  function startNewAttempt() {
    window.localStorage.removeItem(attemptKey);
    setAnswers({});
    setCurrentIndex(0);
    setSecondsLeft(simuladoConfig.durationMinutes * 60);
    setShowBlankNotice(false);
    setStage("running");
  }

  function chooseAnswer(question: SimuladoQuestion, optionIndex: number) {
    setAnswers((current) => ({ ...current, [question.id]: optionIndex }));
  }

  function conclude() {
    window.localStorage.removeItem(attemptKey);
    setShowBlankNotice(false);
    setStage("result");
  }

  function requestConclusion() {
    if (unansweredCount > 0) {
      setShowBlankNotice(true);
      return;
    }
    conclude();
  }

  return (
    <section className="simulado-section" id="simulado">
      <div className="simulado-lede">
        <span className="section-index">03 / SIMULADO GERAL</span>
        <div>
          <h2>Decida sob tempo.<br /><em>Revise com método.</em></h2>
          <p>60 itens autorais, distribuídos entre todas as disciplinas do edital. A correção mostra o resultado total e onde concentrar sua próxima revisão.</p>
        </div>
      </div>

      {stage === "intro" && (
        <div className="simulado-intro">
          <div className="intro-main">
            <div className="simulado-stamp"><ClipboardCheck size={29} /><span>SIMULADO</span><b>60</b><small>itens</small></div>
            <div>
              <span className="micro-label">ANALISTA DE TECNOLOGIA DA INFORMAÇÃO</span>
              <h3>{simuladoConfig.title}</h3>
              <p>Os itens são autorais, têm cinco alternativas e foram montados para exercitar contraste conceitual, aplicação de regras e leitura de cenários de TI.</p>
            </div>
          </div>
          <div className="intro-specs" aria-label="Características do simulado">
            <span><AlarmClock size={17} /><b>{simuladoConfig.durationMinutes} min</b><small>tempo sugerido</small></span>
            <span><FileCheck2 size={17} /><b>05 opções</b><small>por questão</small></span>
            <span><Trophy size={17} /><b>7 áreas</b><small>resultado detalhado</small></span>
          </div>
          <div className="distribution-grid">
            {simuladoConfig.distribution.map(([subject, count], index) => (
              <div key={subject}><span>0{index + 1}</span><b>{subject}</b><em>{count} itens</em></div>
            ))}
          </div>
          <div className="intro-footer">
            <p><CircleAlert size={16} /> O cronômetro começa ao iniciar. Suas respostas ficam salvas neste navegador enquanto a tentativa estiver ativa.</p>
            <Button className="start-simulado" onClick={startNewAttempt}>Iniciar simulado <Play size={16} fill="currentColor" /></Button>
          </div>
        </div>
      )}

      {stage === "running" && (
        <div className="simulado-running">
          <div className="simulado-controlbar">
            <div className="simulado-running-title"><span>EM ANDAMENTO</span><b>Questão {currentIndex + 1} de {simuladoQuestions.length}</b></div>
            <Progress value={progress} className="simulado-progress" />
            <div className={`timer-display ${secondsLeft <= 300 ? "is-urgent" : ""}`}><TimerReset size={17} /> {formatTime(secondsLeft)}</div>
            <button className="finish-simulado" type="button" onClick={requestConclusion}>Finalizar <Flag size={15} /></button>
          </div>

          <div className="simulado-workspace">
            <aside className="answer-sheet" aria-label="Folha de respostas">
              <div className="answer-sheet-head"><span>FOLHA DE RESPOSTAS</span><b>{answeredCount} / 60</b></div>
              <div className="answer-grid">
                {simuladoQuestions.map((question, index) => {
                  const isActive = index === currentIndex;
                  const isAnswered = answers[question.id] !== undefined;
                  return <button key={question.id} type="button" className={`answer-number ${isActive ? "is-active" : ""} ${isAnswered ? "is-answered" : ""}`} onClick={() => setCurrentIndex(index)} aria-label={`Ir para questão ${index + 1}`}>{index + 1}</button>;
                })}
              </div>
              <div className="answer-sheet-legend"><span><i /> atual</span><span><i /> respondida</span><span><i /> em branco</span></div>
            </aside>

            <article className="question-card">
              <div className="question-meta"><span>{currentQuestion.subject}</span><span>ITEM {String(currentIndex + 1).padStart(2, "0")}</span></div>
              <h3>{currentQuestion.stem}</h3>
              <fieldset className="choices" aria-label={`Alternativas da questão ${currentIndex + 1}`}>
                {currentQuestion.options.map((option, optionIndex) => {
                  const selected = answers[currentQuestion.id] === optionIndex;
                  return (
                    <button key={option} type="button" className={`choice ${selected ? "is-selected" : ""}`} onClick={() => chooseAnswer(currentQuestion, optionIndex)}>
                      <span className="choice-letter">{choiceLetters[optionIndex]}</span><span>{option}</span>
                    </button>
                  );
                })}
              </fieldset>
              <div className="question-navigation">
                <button type="button" className="nav-question" disabled={currentIndex === 0} onClick={() => setCurrentIndex((current) => current - 1)}><ArrowLeft size={16} /> Anterior</button>
                <span>{answers[currentQuestion.id] !== undefined ? <><CheckCircle2 size={15} /> resposta registrada</> : <>Selecione uma alternativa</>}</span>
                <button type="button" className="nav-question nav-next" disabled={currentIndex === simuladoQuestions.length - 1} onClick={() => setCurrentIndex((current) => current + 1)}>Próxima <ArrowRight size={16} /></button>
              </div>
            </article>
          </div>

          {showBlankNotice && (
            <div className="blank-notice" role="alert">
              <CircleAlert size={20} />
              <p>Existem <b>{unansweredCount} itens em branco</b>. Você pode voltar à folha de respostas ou entregar mesmo assim.</p>
              <button type="button" onClick={() => setShowBlankNotice(false)}>Continuar respondendo</button>
              <button type="button" className="confirm-finish" onClick={conclude}>Entregar mesmo assim <ChevronRight size={15} /></button>
            </div>
          )}
        </div>
      )}

      {stage === "result" && (
        <div className="simulado-result">
          <div className="result-hero">
            <div className="result-score"><span>RESULTADO</span><b>{results.percent}<small>%</small></b><p>{results.correct} acertos em 60 itens</p></div>
            <div className="result-copy"><span className="micro-label">LEITURA DO DESEMPENHO</span><h3>{results.percent >= 70 ? "Base consistente. Agora, refine os contrastes." : results.percent >= 50 ? "A base apareceu. A revisão direcionada vai elevar o resultado." : "Há terreno para construir. Reabra os conceitos e avance por blocos."}</h3><p>O resultado abaixo organiza seus acertos por disciplina. Use-o como uma bússola de revisão, não como diagnóstico definitivo.</p><Button className="redo-button" onClick={startNewAttempt}><RotateCcw size={16} /> Refazer simulado</Button></div>
          </div>

          <div className="result-breakdown">
            <div className="result-heading"><span className="micro-label">DESEMPENHO POR ÁREA</span><p>O percentual de cada disciplina considera somente seus itens dentro deste simulado.</p></div>
            <div className="result-rows">
              {results.bySubject.map((item) => (
                <div className="result-row" key={item.subject}>
                  <div><b>{item.subject}</b><span>{item.hits} de {item.total} acertos</span></div>
                  <Progress value={item.percent} className="result-progress" />
                  <strong>{item.percent}%</strong>
                </div>
              ))}
            </div>
          </div>

          <details className="review-answers">
            <summary><span><ClipboardCheck size={19} /> Conferir correção comentada</span><ChevronRight size={17} /></summary>
            <div className="review-question-list">
              {simuladoQuestions.map((question, index) => {
                const selected = answers[question.id];
                const correct = selected === question.answer;
                return (
                  <article className={`review-question ${correct ? "is-correct" : "is-wrong"}`} key={question.id}>
                    <div className="review-question-head"><span>ITEM {String(index + 1).padStart(2, "0")} · {question.subject}</span>{correct ? <b><CheckCircle2 size={15} /> correta</b> : <b><XCircle size={15} /> revisar</b>}</div>
                    <p>{question.stem}</p>
                    <div className="review-answer"><span>Gabarito: <b>{choiceLetters[question.answer]}</b></span>{selected !== undefined && !correct && <span>Sua resposta: <b>{choiceLetters[selected]}</b></span>}</div>
                    <div className="explanation"><b>Por quê?</b><span>{question.explanation}</span></div>
                  </article>
                );
              })}
            </div>
          </details>
        </div>
      )}
    </section>
  );
}
