import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'ai-tools', label: 'AI Tools' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const next = stored ?? (prefersDark ? 'dark' : 'light')
    setTheme(next)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleNavClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 shadow-lg">
      <div className="container flex items-center justify-between h-16">
        <div className="text-lg font-semibold flex items-center gap-2 text-white drop-shadow-sm">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs">A</span>
          Aryan
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => {
            const isActive = activeSection === s.id
            return (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className={`group relative pb-1 transition-colors ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className={`${
                  isActive
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'
                    : ''
                } group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-colors`}>
                  {s.label}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap rounded-md px-2 py-1 text-[11px] text-white bg-slate-800/90 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {s.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 transition-all ${
                    isActive ? 'w-full bg-gradient-to-r from-cyan-400 to-blue-500' : 'w-0 bg-transparent'
                  }`}
                />
              </button>
            )
          })}
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="ml-2 rounded-md bg-slate-800 border border-slate-600 px-3 py-1 text-xs text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="rounded-md bg-slate-800 border border-slate-600 px-3 py-1 text-xs text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
          >
            {theme === 'dark' ? 'L' : 'D'}
          </button>
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-md bg-slate-800 border border-slate-600 p-2 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <span className="sr-only">Toggle menu</span>
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-lg">
          <div className="container py-2 flex flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className="py-2 text-left text-slate-200 hover:text-white transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar