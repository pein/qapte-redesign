import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@ui-sdk/react/dialog"
import { useEffect, useState } from "react"
import { NAV_LINKS, SITE } from "../lib/data"
import { ArrowUpRight, Close, Menu, Moon, Sun } from "./Icons"

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem("qapte-theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem("qapte-theme", theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <a href="#top" className="wordmark" aria-label="QApte accueil">
          <span className="wordmark-mark" aria-hidden="true" />
          QApte
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
            title={theme === "dark" ? "Mode clair" : "Mode sombre"}
          >
            <Sun className="icon-sun" />
            <Moon className="icon-moon" />
          </button>

          <a className="btn btn-accent btn-sm header-cta" href={SITE.freeExamUrl} target="_blank" rel="noreferrer">
            Essai gratuit
            <ArrowUpRight size={14} />
          </a>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="menu-btn" aria-label="Ouvrir le menu">
              <Menu />
            </DialogTrigger>
            <DialogContent className="mobile-menu" aria-label="Menu mobile">
              <div className="mobile-menu-head">
                <span className="wordmark">
                  <span className="wordmark-mark" aria-hidden="true" />
                  QApte
                </span>
                <DialogClose className="icon-btn" aria-label="Fermer le menu">
                  <Close />
                </DialogClose>
              </div>
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <nav className="mobile-menu-links" aria-label="Navigation mobile">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="mobile-menu-link"
                    onClick={() => setOpen(false)}
                  >
                    <span>
                      <em>0{index + 1}</em> {link.label}
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </nav>
              <div className="mobile-menu-foot">
                <a className="btn btn-accent" href={SITE.freeExamUrl} target="_blank" rel="noreferrer">
                  Essayer gratuitement
                  <ArrowUpRight size={14} />
                </a>
                <span className="label">{SITE.contactEmail}</span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
