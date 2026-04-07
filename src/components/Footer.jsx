import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jonathan-lognon', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jonathan-lognon', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:levilognon7@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Jonathan Lognon</h3>
            <p className="text-gray-400 mb-4">
              Développeur Full-Stack spécialisé en Django REST et React.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2470a7] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '#home' },
                { label: 'À propos', href: '#about' },
                { label: 'Compétences', href: '#skills' },
                { label: 'Projets', href: '#projects' },
                { label: 'Expérience', href: '#experience' },
                { label: 'Contact', href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#41abb4] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Abidjan, Côte d'Ivoire</li>
              <li>💼 Eranove Academy – GLAB</li>
              <li>💼 Disponible pour projets</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          {/* Verset biblique */}
          <div className="text-center mb-6">
            <p className="text-gray-300 italic text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein."
            </p>
            <p className="text-gray-500 text-xs mt-2">Romains 8:28</p>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Jonathan Lognon. Fait avec <Heart className="w-4 h-4 text-red-500" /> et passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

