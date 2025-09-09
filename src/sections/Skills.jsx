import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'TypeScript', level: 90, icon: '🔷' },
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 90, icon: '🎨' },
      { name: 'HTML/CSS', level: 95, icon: '🌐' },
    ]
  },
  {
    title: 'Design & UX',
    skills: [
      { name: 'Figma', level: 85, icon: '🎨' },
      { name: 'UI/UX Design', level: 80, icon: '✨' },
      { name: 'Accessibility', level: 75, icon: '♿' },
      { name: 'UX Writing', level: 70, icon: '✍️' },
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85, icon: '📦' },
      { name: 'Vite', level: 90, icon: '⚡' },
      { name: 'AI Tools', level: 95, icon: '🤖' },
    ]
  }
]

function Skills() {
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
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center text-shadow">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-gray-100 group-hover:text-cyan-300 transition-colors text-shadow">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-300 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${
                        skill.level >= 90 ? 'from-green-400 to-emerald-500' :
                        skill.level >= 80 ? 'from-cyan-400 to-blue-500' :
                        skill.level >= 70 ? 'from-purple-400 to-pink-500' :
                        'from-orange-400 to-red-500'
                      } rounded-full shadow-sm`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills