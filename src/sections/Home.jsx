import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

// Easily switch background variants: 'modern', 'dark', or 'vibrant'
const HERO_BG_VARIANTS = {
  modern: 'bg-gradient-to-r from-blue-50 via-purple-100 to-blue-200',
  dark: 'bg-gradient-to-r from-gray-900 via-purple-900 to-black',
  vibrant: 'bg-gradient-to-r from-purple-200 to-pink-200',
}

function Home() {
  const selectedBackground = HERO_BG_VARIANTS.modern
  return (
    <div className="relative">
      {/* Background variant (switch by changing selectedBackground) */}
      <div className={`absolute inset-0 -z-20 rounded-[28px] ${selectedBackground}`}></div>
      {/* Subtle gradient frame */}
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-r from-fuchsia-400/30 via-blue-400/30 to-fuchsia-400/30 p-[2px]"></div>
      <div className="rounded-[26px] bg-white/70 dark:bg-gray-950/70 backdrop-blur p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ y: 0, filter: 'drop-shadow(0 8px 16px rgba(2,6,23,0.08))' }}
            animate={{
              y: [0, -16, 0, -10, 0],
              filter: [
                'drop-shadow(0 12px 24px rgba(37, 99, 235, 0.15))',
                'drop-shadow(0 20px 30px rgba(109, 40, 217, 0.20))',
                'drop-shadow(0 14px 22px rgba(37, 99, 235, 0.14))',
                'drop-shadow(0 18px 28px rgba(109, 40, 217, 0.18))',
                'drop-shadow(0 12px 24px rgba(37, 99, 235, 0.15))',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="will-change-transform rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 shadow-xl sm:shadow-2xl p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 text-xs text-gray-700 border border-gray-300 rounded-full px-3 py-1 mb-5">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" /> Available for freelance
              </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">
                <Typewriter
                  words={["Hello, I'm Aryan,"]}
                  loop={0}
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1600}
                />
              </span>
              <br />
              <span className="text-gray-900">a </span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                   Front-end Developer
                </span>
                <span className="absolute -inset-1 -z-10 from-cyan-400/15 to-blue-500/15 bg-gradient-to-r rounded-lg" />
              </span>
            </h1>
            <p className="mt-5 text-gray-700 max-w-xl">
              Product Designer and Frontend developer based in India. I craft clean, classical interfaces and
              thoughtful user experiences for startups and brands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow hover:opacity-90">Hire Me</a>
              <a href="#projects" className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">View Work</a>
            </div>
            </div>
          </motion.div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20">
                <img
                  src="/20250809_220351.jpg"
                  alt="Aryan profile"
                  className="h-64 w-64 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem] object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
              <div className="absolute right-[-28px] top-10 grid grid-cols-3 gap-2 text-gray-300 dark:text-gray-700">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-current inline-block" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home