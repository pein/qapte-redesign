import { TRAINER_OFFER } from "../lib/data"
import { ArrowUpRight } from "./Icons"
import { SectionTop } from "./SectionTop"

export function Trainers() {
  return (
    <section className="section" id="formateurs">
      <div className="shell">
        <SectionTop
          index="06"
          label="Formateurs"
          title={TRAINER_OFFER.headline}
          intro={TRAINER_OFFER.description}
        />
        <div className="trainer-card">
          <div>
            <span className="label">{TRAINER_OFFER.title}</span>
            <p className="trainer-price">{TRAINER_OFFER.price} <span>{TRAINER_OFFER.unit}</span></p>
          </div>
          <div className="trainer-details">
            {TRAINER_OFFER.details.map((detail) => (
              <span key={detail} className="trust-chip">{detail}</span>
            ))}
          </div>
          <a className="btn btn-ink" href={TRAINER_OFFER.href} target="_blank" rel="noreferrer">
            {TRAINER_OFFER.cta} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
