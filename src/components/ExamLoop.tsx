import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"
import { DEMO_QUESTION, DEMO_RESULT, DEMO_STEPS, DEMO_TESTEO } from "../lib/data"
import { ArrowUpRight, Check } from "./Icons"
import { SectionTop } from "./SectionTop"

function ExamPanel() {
  return (
    <div className="demo-card">
      <div className="demo-card-head">
        <span className="label">{DEMO_QUESTION.chapter}</span>
        <div className="demo-meta mono">
          <span>{DEMO_QUESTION.progress}</span>
          <span>{DEMO_QUESTION.timer}</span>
        </div>
      </div>
      <p className="demo-question">{DEMO_QUESTION.prompt}</p>
      <div className="demo-options">
        {DEMO_QUESTION.options.map((option, index) => (
          <div key={option} className={`demo-option${index === DEMO_QUESTION.correctIndex ? " is-correct" : ""}`}>
            <span className="mono">{String.fromCharCode(65 + index)}</span>
            <span>{option}</span>
          </div>
        ))}
      </div>
      <p className="demo-note label">Démonstration — aucune réponse enregistrée.</p>
    </div>
  )
}

function ResultPanel() {
  return (
    <div className="demo-card">
      <div className="demo-result-top">
        <div>
          <span className="label">Résultat fictif</span>
          <p className="demo-score">{DEMO_RESULT.score}</p>
        </div>
        <span className="status-pill">{DEMO_RESULT.status}</span>
      </div>
      <div className="demo-bars">
        {DEMO_RESULT.chapters.map((chapter) => (
          <div key={chapter.label} className="demo-bar-row">
            <span className="mono">{chapter.label}</span>
            <span className="demo-bar-track"><span style={{ width: `${(Number(chapter.value.split("/")[0]) / Number(chapter.value.split("/")[1])) * 100}%` }} /></span>
            <span className="mono">{chapter.value}</span>
          </div>
        ))}
      </div>
      <p className="demo-note label">{DEMO_RESULT.note}</p>
    </div>
  )
}

function CorrectionPanel() {
  return (
    <div className="demo-card">
      <div className="demo-card-head">
        <span className="label">Correction expliquée</span>
        <span className="mono">{DEMO_QUESTION.reference}</span>
      </div>
      <p className="demo-question">{DEMO_QUESTION.prompt}</p>
      <div className="demo-explain">
        <p><strong>Pourquoi C est correct :</strong> {DEMO_QUESTION.explanation}</p>
        <p><strong>À retenir :</strong> le test apporte des informations utiles et réduit le risque, sans garantir un logiciel sans défaut.</p>
      </div>
      <div className="demo-correct-list">
        {DEMO_QUESTION.options.map((option, index) => (
          <div key={option} className={`demo-correct-row${index === DEMO_QUESTION.correctIndex ? " is-correct" : ""}`}>
            <span className="mono">{String.fromCharCode(65 + index)}</span>
            <span>{option}</span>
            {index === DEMO_QUESTION.correctIndex ? <Check size={14} /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function ReinforcementPanel() {
  return (
    <div className="demo-card">
      <div className="demo-card-head">
        <span className="label">Renforcement ciblé</span>
        <span className="status-pill">Hors examen</span>
      </div>
      <p className="demo-question">Revenir sur les notions à consolider, sans relancer un examen complet.</p>
      <div className="reinforce-grid">
        <div className="reinforce-item"><span className="label">Notion</span><p>Objectifs du test</p></div>
        <div className="reinforce-item"><span className="label">Écart</span><p>Confusion test / preuve d’absence de défaut</p></div>
        <div className="reinforce-item"><span className="label">Action</span><p>Relire la section 1.1.1, puis refaire 5 questions ciblées.</p></div>
      </div>
      <p className="demo-note label">Le renforcement est distinct de l’examen.</p>
    </div>
  )
}

function TesteoPanel() {
  return (
    <div className="demo-card">
      <div className="demo-card-head">
        <span className="label">Testéo · coach IA</span>
        <span className="mono">150 échanges / 60 jours</span>
      </div>
      <div className="testeo-chat">
        {DEMO_TESTEO.map((msg) => (
          <div key={msg.text} className={`chat-bubble is-${msg.role}`}>
            <span className="label">{msg.role === "user" ? "Vous" : "Testéo"}</span>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <p className="demo-note label">Démonstration — Testéo est optionnel après achat de l’offre avec coach.</p>
    </div>
  )
}

export function ExamLoop() {
  return (
    <section className="section" id="methode-apercu">
      <div className="shell">
        <SectionTop
          index="01"
          label="Aperçu"
          title="Comprendre chaque proposition."
          intro="La méthode QApte suit un parcours simple : examen, résultat, correction, renforcement, puis Testéo si vous en avez besoin."
        />
        <Tabs defaultValue="exam" className="demo-tabs">
          <TabsList aria-label="Étapes de la méthode QApte" className="demo-tab-list">
            {DEMO_STEPS.map((step) => (
              <TabsTab key={step.id} value={step.id} className="demo-tab">
                <span className="demo-tab-label">{step.label}</span>
                <span className="demo-tab-title">{step.title}</span>
              </TabsTab>
            ))}
          </TabsList>
          <div className="demo-panels">
            <TabsPanel value="exam"><ExamPanel /></TabsPanel>
            <TabsPanel value="result"><ResultPanel /></TabsPanel>
            <TabsPanel value="correction"><CorrectionPanel /></TabsPanel>
            <TabsPanel value="reinforcement"><ReinforcementPanel /></TabsPanel>
            <TabsPanel value="testeo"><TesteoPanel /></TabsPanel>
          </div>
        </Tabs>
        <div className="section-foot">
          <span className="label">Données fictives · interface de démonstration</span>
          <a className="text-link" href="https://qapte.com/examen/examen-1" target="_blank" rel="noreferrer">
            Essayer l’examen gratuit
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
