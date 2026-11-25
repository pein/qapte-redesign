import { FAQ_ITEMS } from "../lib/data"
import { Plus } from "./Icons"
import { SectionTop } from "./SectionTop"

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="shell">
        <SectionTop
          index="07"
          label="FAQ"
          title="En pratique."
          intro="Les points essentiels avant de commencer : format, indépendance, progression et fonctionnement de Testéo."
        />
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true"><Plus size={14} /></span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
