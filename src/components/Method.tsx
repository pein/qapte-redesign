import { METHOD_STEPS } from "../lib/data"
import { SectionTop } from "./SectionTop"

export function Method() {
  return (
    <section className="section" id="methode">
      <div className="shell">
        <SectionTop
          index="03"
          label="Méthode"
          title="Un parcours simple, du premier examen à la maîtrise."
          intro="Chaque étape a un rôle précis. Vous ne faites pas que répondre à des questions : vous comprenez, corrigez et consolidez."
        />
        <div className="method-list">
          {METHOD_STEPS.map((step) => (
            <div key={step.id} className="method-item">
              <div className="method-index mono">{step.index}</div>
              <div className="method-main">
                <h3>{step.title}</h3>
                <p className="method-headline">{step.headline}</p>
                <p className="method-summary">{step.summary}</p>
              </div>
              <div className="method-detail label">{step.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
