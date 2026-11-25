import { PROOF_POINTS, SITE, TRUST_POINTS } from "../lib/data"
import { ArrowRight, ArrowUpRight } from "./Icons"

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            Préparez vos certifications <span className="hero-accent">ISTQB</span> avec calme et méthode.
          </h1>
          <p className="hero-kicker label">Examens blancs · corrections détaillées · coach Testéo</p>
          <p className="hero-intro">
            QApte propose des examens blancs originaux, des corrections expliquées, un renforcement
            ciblé et un coach IA optionnel pour arriver serein le jour de l’épreuve.
          </p>
          <div className="hero-actions">
            <a className="btn btn-accent" href={SITE.freeExamUrl} target="_blank" rel="noreferrer">
              Essayer un examen blanc gratuit
              <ArrowRight size={15} />
            </a>
            <a className="text-link" href="#methode">
              Voir la méthode QApte
              <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="hero-note label">
            Préparation indépendante · Certification non incluse · Données de démonstration sur cette page
          </p>
        </div>

        <div className="hero-panel" aria-label="Aperçu de l'expérience QApte">
          <div className="hero-panel-head">
            <span className="label">Aperçu / CTFL</span>
            <span className="status-pill">Démo</span>
          </div>
          <div className="hero-panel-body">
            <div className="hero-question-meta">
              <span className="mono">Question 4/10</span>
              <span className="mono">52:18</span>
            </div>
            <p className="hero-question">
              Parmi les propositions suivantes, laquelle n’est PAS un objectif habituel du test ?
            </p>
            <div className="hero-options">
              <div className="hero-option"><span>A</span>Trouver des défauts et des défaillances</div>
              <div className="hero-option"><span>B</span>Réduire le niveau de risque lié à une qualité insuffisante</div>
              <div className="hero-option is-correct"><span>C</span>Prouver que le logiciel ne contient plus aucun défaut</div>
              <div className="hero-option"><span>D</span>Fournir des informations pour la prise de décision</div>
            </div>
            <div className="hero-explain">
              <span className="label">Correction expliquée</span>
              <p>Le test réduit le risque et révèle des défauts, mais il ne peut pas prouver l’absence totale de défauts.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="shell hero-proof">
        <div className="proof-grid">
          {PROOF_POINTS.map((point) => (
            <div key={point.label} className="proof-item">
              <span className="proof-value">{point.value}</span>
              <span className="proof-label">{point.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-marquee" aria-label="Points clés QApte">
          <div className="hero-marquee-track">
            {[...TRUST_POINTS, ...TRUST_POINTS, ...TRUST_POINTS, ...TRUST_POINTS].map((point, i) => (
              <span key={`${point}-${i}`} className="hero-marquee-item">{point}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
