import { motion } from 'framer-motion'

const aiTools = [
  {
    name: 'Lovable AI',
    description: 'AI-powered development platform for rapid prototyping and code generation',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cursor AI',
    description: 'AI code editor with intelligent autocomplete and code generation',
    icon: '⚡',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Claude AI',
    description: 'Advanced AI assistant for complex reasoning and creative tasks',
    icon: '🧠',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'ChatGPT',
    description: 'Versatile AI assistant for coding, design, and problem-solving',
    icon: '💬',
    color: 'from-green-500 to-emerald-500'
  }
]

function AITools() {
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
          AI Tools Integrated
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-shadow">
          Leveraging cutting-edge AI tools to accelerate development and enhance creativity
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiTools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors text-shadow">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed text-shadow">
                {tool.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AITools