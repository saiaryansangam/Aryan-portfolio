import './index.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import AITools from './sections/AITools'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

// Floating Logos Component
const FloatingLogos = () => {
  const logos = [
    { name: 'React', emoji: '⚛️' },
    { name: 'JavaScript', emoji: '🟨' },
    { name: 'TypeScript', emoji: '🔷' },
    { name: 'Tailwind', emoji: '🎨' },
    { name: 'Vite', emoji: '⚡' },
    { name: 'Git', emoji: '📦' },
    { name: 'AI', emoji: '🤖' },
    { name: 'Figma', emoji: '🎨' },
  ]

  return (
    <div className="floating-logos">
      {logos.map((logo, index) => (
        <div
          key={logo.name}
          className="logo-float text-4xl sm:text-5xl lg:text-6xl"
          style={{
            animationDelay: `${index * 2}s`,
            animationDuration: `${15 + index * 2}s`
          }}
        >
          {logo.emoji}
        </div>
      ))}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'ai-tools', 'blog', 'contact']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id)
          })
        },
        { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <FloatingLogos />
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <section id="home" className="section container"><Home /></section>
        <section id="about" className="section container"><About /></section>
        <section id="experience" className="section container"><Experience /></section>
        <section id="projects" className="section container"><Projects /></section>
        <section id="skills" className="section container"><Skills /></section>
        <section id="ai-tools" className="section container"><AITools /></section>
        <section id="blog" className="section container"><Blog /></section>
        <section id="contact" className="section container"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App