import { FOOTER_LINKS, LEGAL_NOTE, SITE } from "../lib/data"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <a href="#top" className="wordmark" aria-label="QApte accueil">
            <span className="wordmark-mark" aria-hidden="true" />
            QApte
          </a>
          <p>Préparation indépendante aux certifications du test logiciel. Examens blancs originaux, corrections expliquées, renforcement ciblé.</p>
          <a className="text-link" href={SITE.contactUrl}>{SITE.contactEmail}</a>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <span className="label">Plateforme</span>
            {FOOTER_LINKS.platform.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </div>
          <div className="footer-col">
            <span className="label">S'entraîner</span>
            {FOOTER_LINKS.practice.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label}</a>)}
          </div>
          <div className="footer-col">
            <span className="label">Légal</span>
            {FOOTER_LINKS.legal.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p className="footer-legal">{LEGAL_NOTE}</p>
        <p className="label">© 2026 QApte — Logos IT. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
