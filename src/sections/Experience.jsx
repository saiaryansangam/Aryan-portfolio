import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: 'Frontend  Developer',
    company: 'Sciens Technologies',
    duration: 'May 2025 – Present',
    responsibilities: [
      'Working on frontend development with React and modern AI tools.',
      'Building scalable UI components and collaborating with backend teams.'
    ],
    type: 'current'
  }
]

function Experience() {
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
          Experience
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-shadow">
          Professional journey in software development and modern web technologies
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 mb-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              {/* Left side - Role and Company */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors text-shadow">
                    {exp.role}
                  </h3>
                  {exp.type === 'current' && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-300 border border-green-400/30 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg font-medium text-cyan-300 mb-3 text-shadow">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-300 font-medium">
                  {exp.duration}
                </p>
              </div>

              {/* Right side - Responsibilities */}
              <div className="flex-1 lg:max-w-md">
                <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wide">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (idx * 0.1) + 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-sm text-gray-200"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                      <span className="text-shadow">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom border accent */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Full-time Position</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional info section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20">
          <span className="text-cyan-400">💼</span>
          <span className="text-sm text-gray-200">Open to new opportunities</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
