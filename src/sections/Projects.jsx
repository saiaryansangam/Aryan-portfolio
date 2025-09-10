import { motion } from 'framer-motion'

const projects = [
  { 
    title: 'Portfolio Website', 
    description: 'A classical, responsive portfolio with smooth scrolling and dark mode.', 
    tech: ['React', 'Vite', 'Tailwind'], 
    live: '#', 
    code: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center'
  },
  { 
    title: 'Movie Mania', 
    description: 'Reusable component library with tokens and theming.', 
    tech: ['React', 'Tailwind'], 
    live: '#', 
    code: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center'
  },
  { 
    title: 'Landing Page', 
    description: 'High-converting marketing page with A/B tested hero.', 
    tech: ['HTML', 'CSS', 'JS'], 
    live: '#', 
    code: '#',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center'
  },
]

function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-12"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-shadow">Projects</h2>
        <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200 hover:underline">See all</a>
      </motion.div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group border border-white/20 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative h-40 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-shadow">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-200">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a className="px-3 py-1.5 text-sm rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition" href={p.live} target="_blank">Live Demo</a>
                <a className="px-3 py-1.5 text-sm rounded-md border border-white/30 text-white hover:bg-white/10 transition" href={p.code} target="_blank">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects