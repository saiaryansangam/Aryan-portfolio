function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Aryan — UI/UX Designer
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-violet-300">LinkedIn</a>
          <a href="#" className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-violet-300">GitHub</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-violet-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer


