import type { ReactNode } from "react"

type SectionTopProps = {
  index: string
  label: string
  title: ReactNode
  intro?: ReactNode
  side?: ReactNode
  dark?: boolean
}

export function SectionTop({ label, title, intro, side, dark }: SectionTopProps) {
  return (
    <div className={`section-top${dark ? " is-dark" : ""}`}>
      <div className="section-title-wrap">
        <h2 className="section-title">{title}</h2>
        <p className="section-meta label">{label}</p>
      </div>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {side ? <div className="section-side">{side}</div> : null}
    </div>
  )
}
