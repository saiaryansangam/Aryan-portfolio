import { motion } from 'framer-motion'

function Contact() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-shadow">Get in touch</h2>
        <p className="mt-3 text-gray-100 text-shadow">Have a project or idea? I'd love to hear from you.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow"
        >
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition" 
              placeholder="Your name" 
            />
            <input 
              type="email" 
              className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition" 
              placeholder="Email" 
            />
            <input 
              className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition sm:col-span-2" 
              placeholder="Subject" 
            />
            <textarea 
              rows={6} 
              className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition sm:col-span-2" 
              placeholder="Message" 
            />
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 w-max shadow hover:from-cyan-600 hover:to-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-white text-shadow">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-gray-100 text-shadow">
              <span className="h-2 w-2 rounded-full bg-cyan-400 inline-block" />
              aryan@example.com
            </li>
            <li className="flex items-center gap-3 text-gray-100 text-shadow">
              <span className="h-2 w-2 rounded-full bg-blue-500 inline-block" />
              +91 90000 00000
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-white text-shadow">Social</h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map((s) => (
                <motion.a
                  key={s}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="px-3 py-1.5 rounded-full border border-white/30 bg-white/10 text-gray-100 hover:bg-white/20 hover:text-white transition"
                  href="#"
                  target="_blank"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact