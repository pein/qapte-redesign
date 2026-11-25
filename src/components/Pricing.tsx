import { OFFERS } from "../lib/data"
import { ArrowUpRight, Check } from "./Icons"
import { SectionTop } from "./SectionTop"

export function Pricing() {
  return (
    <section className="section" id="tarifs">
      <div className="shell">
        <SectionTop
          index="05"
          label="Tarifs"
          title="Des offres claires, sans abonnement."
          intro="Choisissez le niveau d’accompagnement qui vous convient. Paiement unique, accès sécurisé par Stripe selon les informations publiques de QApte."
        />
        <div className="pricing-grid">
          {OFFERS.map((offer) => (
            <article key={offer.id} className={`price-card${offer.featured ? " is-featured" : ""}`}>
              <div className="price-head">
                <span className="label">{offer.name}</span>
                {offer.featured ? <span className="status-pill">Le plus choisi</span> : null}
              </div>
              <p className="price-value">{offer.price}</p>
              <p className="price-note label">{offer.note}</p>
              <p className="price-desc">{offer.description}</p>
              <ul className="price-features">
                {offer.features.map((feature) => (
                  <li key={feature}><Check size={14} />{feature}</li>
                ))}
              </ul>
              <a className={`btn btn-sm ${offer.featured ? "btn-accent" : "btn-ink"}`} href={offer.href} target="_blank" rel="noreferrer">
                {offer.cta} <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
        <p className="section-foot label">QApte ne conserve aucune donnée bancaire selon la page tarifs publique.</p>
      </div>
    </section>
  )
}
