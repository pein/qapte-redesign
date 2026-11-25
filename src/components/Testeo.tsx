import { DEMO_TESTEO, SITE } from "../lib/data"
import { ArrowUpRight } from "./Icons"
import { SectionTop } from "./SectionTop"

export function Testeo() {
  return (
    <section className="section" id="testeo">
      <div className="shell">
        <SectionTop
          index="04"
          label="Testéo"
          title="Un coach IA, quand la notion bloque."
          intro="Testéo n’est pas là pour faire l’examen à votre place. Il vous aide à comprendre une notion, avec un indice, un exemple ou un exercice."
        />
        <div className="testeo-grid">
          <div className="testeo-copy">
            <div className="testeo-points">
              <div className="testeo-point"><span className="label">Disponible</span><p>Après achat de l’offre avec coach</p></div>
              <div className="testeo-point"><span className="label">Quota</span><p>150 échanges pendant 60 jours</p></div>
              <div className="testeo-point"><span className="label">Périmètre</span><p>Par certification, pour réviser avec précision</p></div>
            </div>
            <a className="text-link" href={SITE.testeoUrl} target="_blank" rel="noreferrer">
              Découvrir Testéo <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="testeo-demo" aria-label="Exemple de conversation Testéo">
            <div className="demo-card-head">
              <span className="label">Exemple de conversation</span>
              <span className="status-pill">Démo</span>
            </div>
            <div className="testeo-chat">
              {DEMO_TESTEO.map((msg) => (
                <div key={msg.text} className={`chat-bubble is-${msg.role}`}>
                  <span className="label">{msg.role === "user" ? "Vous" : "Testéo"}</span>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <p className="demo-note label">Conversation fictive à titre d’illustration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
