import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'Frontend Development',
    subtitle: 'Core web technologies for building modern apps',
    theme: 'blue',
    skills: [
      { 
        name: 'JavaScript', 
        icon: '🟨', 
        tooltip: 'Building interactive web applications with ES6+ features'
      },
      { 
        name: 'TypeScript', 
        icon: '🔷', 
        tooltip: 'Type-safe JavaScript for scalable applications'
      },
      { 
        name: 'React', 
        icon: '⚛️', 
        tooltip: 'Building SPAs with hooks and modern React patterns'
      },
      { 
        name: 'Tailwind CSS', 
        icon: '🎨', 
        tooltip: 'Utility-first CSS framework for rapid UI development'
      },
      { 
        name: 'HTML/CSS', 
        icon: '🌐', 
        tooltip: 'Semantic markup and responsive styling fundamentals'
      },
    ]
  },
  {
    title: 'Design & UX',
    subtitle: 'Creating intuitive and accessible user experiences',
    theme: 'purple',
    skills: [
      { 
        name: 'Figma', 
        icon: '🎨', 
        tooltip: 'Collaborative design and prototyping platform'
      },
      { 
        name: 'UI/UX Design', 
        icon: '✨', 
        tooltip: 'User-centered design principles and interface creation'
      },
      { 
        name: 'Accessibility', 
        icon: '♿', 
        tooltip: 'WCAG guidelines and inclusive design practices'
      },
      { 
        name: 'UX Writing', 
        icon: '✍️', 
        tooltip: 'Crafting clear, helpful microcopy and content strategy'
      },
    ]
  },
  {
    title: 'Tools & Technologies',
    subtitle: 'Development workflow and productivity tools',
    theme: 'green',
    skills: [
      { 
        name: 'Git', 
        icon: '📦', 
        tooltip: 'Version control and collaborative development'
      },
      { 
        name: 'Vite', 
        icon: '⚡', 
        tooltip: 'Fast build tool and development server'
      },
      { 
        name: 'AI Tools', 
        icon: '🤖', 
        tooltip: 'Leveraging AI for enhanced development productivity'
      },
    ]
  }
]

const themeStyles = {
  blue: {
    card: 'border-blue-500/20 hover:border-blue-400/40',
    title: 'text-blue-400',
    badge: 'bg-gray-100/90 text-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-blue-500/25',
    glow: 'hover:shadow-blue-500/20'
  },
  purple: {
    card: 'border-purple-500/20 hover:border-purple-400/40',
    title: 'text-purple-400',
    badge: 'bg-gray-100/90 text-gray-700 hover:bg-purple-500 hover:text-white hover:shadow-purple-500/25',
    glow: 'hover:shadow-purple-500/20'
  },
  green: {
    card: 'border-green-500/20 hover:border-green-400/40',
    title: 'text-green-400',
    badge: 'bg-gray-100/90 text-gray-700 hover:bg-green-500 hover:text-white hover:shadow-green-500/25',
    glow: 'hover:shadow-green-500/20'
  }
}

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-shadow">
          Skills & Expertise
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-shadow">
          A comprehensive toolkit for building modern, accessible, and intelligent web experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const theme = themeStyles[category.theme]
          
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border ${theme.card} shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${theme.title} mb-3 text-shadow`}>
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`
                      inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                      ${theme.badge} shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer
                      border border-gray-200/50 hover:border-transparent
                    `}>
                      <span className="text-sm">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20
                          bg-gray-900/95 text-white text-xs px-3 py-2 rounded-lg shadow-xl
                          border border-gray-700/50 backdrop-blur-sm
                          whitespace-nowrap max-w-xs"
                      >
                        {skill.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2
                          border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills