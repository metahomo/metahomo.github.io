import { profile } from './profile'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="page">
      <Hero name={profile.name} tagline={profile.tagline} />
      <About paragraphs={profile.about} />
      <Skills groups={profile.skills} />
      <Projects projects={profile.projects} />
      <Contact github={profile.contact.github} email={profile.contact.email} />
    </main>
  )
}

export default App
