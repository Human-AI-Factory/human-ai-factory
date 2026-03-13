import { useState, useEffect, useRef } from 'react'
import SideNav from './components/SideNav'
import SpiritSection from './components/SpiritSection'
import FactorySection from './components/FactorySection'
import ProjectsSection from './components/ProjectsSection'
import RoadmapSection from './components/RoadmapSection'
import Footer from './components/Footer'
import InkCanvas from './components/InkCanvas'

function App() {
  const [activeSection, setActiveSection] = useState('spirit')
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const registerSection = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <>
      <InkCanvas />
      <div className="grid-overlay" />
      <SideNav activeSection={activeSection} />

      <main>
        <section id="spirit" ref={registerSection}>
          <SpiritSection />
        </section>

        <section id="factory" ref={registerSection}>
          <FactorySection />
        </section>

        <section id="projects" ref={registerSection}>
          <ProjectsSection />
        </section>

        <section id="roadmap" ref={registerSection}>
          <RoadmapSection />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
