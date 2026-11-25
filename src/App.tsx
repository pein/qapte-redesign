import { Certifications } from "./components/Certifications"
import { ExamLoop } from "./components/ExamLoop"
import { Faq } from "./components/Faq"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Method } from "./components/Method"
import { Pricing } from "./components/Pricing"
import { Testeo } from "./components/Testeo"
import { Trainers } from "./components/Trainers"

function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <ExamLoop />
        <Certifications />
        <Method />
        <Testeo />
        <Pricing />
        <Trainers />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
