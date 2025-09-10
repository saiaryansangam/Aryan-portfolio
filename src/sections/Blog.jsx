import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'Building Modern UIs with AI-Assisted Development',
    excerpt: 'How I leverage AI tools like Cursor and ChatGPT to accelerate frontend development while maintaining code quality.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Development feild',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center',
    slug: 'ai-assisted-development'
  },
  {
    title: 'The Future of Frontend: React 18 and Beyond',
    excerpt: 'Exploring the latest React features, concurrent rendering, and how they impact modern web applications.',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop&crop=center',
    slug: 'react-18-future'
  },
  {
    title: 'Design Systems: Creating Consistent User Experiences',
    excerpt: 'Best practices for building scalable design systems that enhance both developer and user experience.',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop&crop=center',
    slug: 'design-systems-consistency'
  }
]

function Blog() {
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
          Latest Blog Posts
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-shadow">
          Thoughts on frontend development, AI tools, and creating exceptional user experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2 text-shadow">
                {post.title}
              </h3>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3 text-shadow">
                {post.excerpt}
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                Read more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}  
          href="/blog"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
        >
          View All Posts
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Blog