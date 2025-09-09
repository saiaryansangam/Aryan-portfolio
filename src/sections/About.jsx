import { motion } from 'framer-motion'

function About() {
  return (
    <section className="py-20 px-6">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full bg-white/10 backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-10 border border-white/20"
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-shadow">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-100 text-shadow">
          I'm Aryan, an AI-driven Frontend Developer passionate about building modern, responsive, and intelligent user interfaces. I specialize in combining traditional frontend technologies like React, Tailwind, and modern JavaScript with the power of AI-assisted development tools to deliver faster, cleaner, and more innovative solutions.

With a strong focus on UI/UX design, automation, and productivity, I leverage AI to speed up coding, enhance design consistency, and create interfaces that feel intuitive and future-ready. My goal is to craft seamless digital experiences that not only look great but also integrate AI-powered efficiency for startups and businesses.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              '✅ Specialized in design systems and component libraries',
              '🌟 Strong with React, Tailwind, accessibility, and modern tooling',
              '✅ Collaborative partner across product, design, and engineering',
            ].map((item) => (
              <li
                key={item}
                className="text-gray-100 text-base transition-transform duration-200 hover:scale-[1.02] hover:text-cyan-300 text-shadow"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About