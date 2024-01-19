import About from './components/about/About'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Review from './components/review/Review'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Review />
      <Contact />
    </>
  )
}

export default App
