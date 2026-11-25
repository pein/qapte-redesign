import { CERTIFICATIONS } from "../lib/data"
import { ArrowUpRight } from "./Icons"
import { SectionTop } from "./SectionTop"

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="shell">
        <SectionTop
          index="02"
          label="Certifications"
          title="Choisissez votre préparation."
          intro="Deux parcours, le même standard de rigueur : des examens blancs originaux, des corrections détaillées et un entraînement au format réel."
        />
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => (
            <article key={cert.id} className="cert-card">
              <div className="cert-head">
                <span className="label">{cert.code}</span>
                <span className="status-pill">{cert.exams}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-format mono">{cert.format}</p>
              <div className="cert-pricing">
                <div><span className="label">Examens seuls</span><strong>19,99 €</strong></div>
                <div><span className="label">Avec Testéo</span><strong>29,99 €</strong></div>
              </div>
              <div className="cert-actions">
                <a className="btn btn-accent btn-sm" href={cert.freeHref} target="_blank" rel="noreferrer">
                  {cert.free}
                </a>
                <a className="text-link" href={cert.detailsHref} target="_blank" rel="noreferrer">
                  Voir les examens <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
