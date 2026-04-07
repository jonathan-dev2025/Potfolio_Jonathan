import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, CheckCircle } from 'lucide-react'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/photo-jonathan.jpeg"
                  alt="Jonathan Lognon"
                  className="w-10 h-10 rounded-lg object-cover border-2 border-[#2470a7] shadow-md group-hover:shadow-lg transition-shadow"
                  onError={(e) => {
                    // Si la photo n'existe pas, masquer l'image
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900 leading-tight">
                  Jonathan Lognon
                </span>
                <span className="text-xs text-gray-500 leading-tight">
                  Django REST et React
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2470a7] hover:bg-[#e8f0f5] rounded-lg transition-all duration-200"
                >
                  {item.name}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-[#2470a7] hover:bg-[#e8f0f5] rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header

