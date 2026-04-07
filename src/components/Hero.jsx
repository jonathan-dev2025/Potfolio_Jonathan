import { motion } from 'framer-motion'
import { CheckCircle, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleDownloadCV = () => {
    // Vous pouvez ajouter un lien vers votre CV ici
    window.open('/cv-jonathan-lognon.pdf', '_blank')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2470a7] to-[#41abb4] rounded-full blur-2xl opacity-30"></div>
              <img
                src="/photo-jonathan.jpeg"
                alt="Jonathan Lognon"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                onError={(e) => {
                  // Si la photo n'existe pas, masquer l'image
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </motion.div>

          {/* Texte */}
          <div className="text-center md:text-left flex-1">
            <motion.div variants={itemVariants} className="mb-6">
              <div                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f0f5] rounded-full border border-[#2470a7]/30">
                <CheckCircle className="w-5 h-5 text-[#2470a7]" />
                <span className="text-sm font-medium text-[#264370]">
                  Vérifié • Eranove Academy – GLAB
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block">Bonjour, je suis</span>
              <span className="block gradient-text mt-2">Jonathan Lognon</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
            >
              Développeur Full-Stack spécialisé en Django REST et React
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl md:mx-0 mx-auto"
            >
              Spécialisé dans le développement d&apos;applications web performantes avec Django REST et React, de la
              conception à la mise en production.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-500 mb-12 max-w-3xl md:mx-0 mx-auto italic"
            >
              "Des solutions techniques claires qui servent des objectifs métier concrets."
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-[#2470a7] text-white rounded-lg font-semibold shadow-lg hover:bg-[#264370] transition-colors flex items-center gap-2"
              >
                Discutons de votre projet
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-white text-[#2470a7] rounded-lg font-semibold border-2 border-[#2470a7] hover:bg-[#e8f0f5] transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <span className="text-sm text-gray-500">En savoir plus</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowDown className="w-6 h-6 text-[#2470a7]" />
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500"
            >
              <span>📍</span>
              <span>Abidjan, Côte d'Ivoire</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

