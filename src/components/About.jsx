import { motion } from 'framer-motion'
import { Code, Rocket, Target } from 'lucide-react'

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const values = [
    {
      icon: Code,
      title: 'Code de qualité',
      description:
        'Développement de code propre, maintenable et conforme aux meilleures pratiques du développement logiciel.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description:
        'Optimisation des architectures et des applications pour garantir rapidité, stabilité et scalabilité.',
    },
    {
      icon: Target,
      title: 'Solutions sur mesure',
      description:
        'Conception de solutions adaptées aux besoins spécifiques de chaque projet, en tenant compte des enjeux techniques et métiers.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            À <span className="gradient-text">propos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264370] via-[#2470a7] to-[#41abb4] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Développeur Full-Stack spécialisé en <strong className="text-[#2470a7]">Django REST</strong> et{' '}
              <strong className="text-[#2470a7]">React</strong>, j&apos;accompagne entreprises, startups et institutions dans la
              conception et le développement d&apos;applications web robustes, sécurisées et évolutives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mon expérience au sein d&apos;<strong className="text-[#2470a7]">Eranove Academy</strong> m&apos;a permis de
              développer une expertise complète, allant de la création d&apos;APIs performantes à la réalisation
              d&apos;interfaces modernes et intuitives, jusqu&apos;au déploiement de solutions web en production.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              J&apos;adopte une approche orientée qualité, performance et expérience utilisateur, avec pour objectif de
              livrer des produits fiables répondant précisément aux besoins métiers et aux attentes des utilisateurs
              finaux.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2470a7] to-[#41abb4] rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#e8f0f5] to-[#f0f9f3] rounded-2xl p-8 shadow-xl">
                <img
                  src="/photo-jonathan.jpeg"
                  alt="Jonathan Lognon"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-6"
                  onError={(e) => {
                    // Si la photo n'existe pas, masquer l'image
                    e.target.style.display = 'none'
                  }}
                />
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#e8f0f5] rounded-full flex items-center justify-center">
                      <Code className="w-6 h-6 text-[#2470a7]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Développeur Full-Stack</h3>
                      <p className="text-sm text-gray-600">Django REST et React</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">📍 Localisation</p>
                    <p className="font-medium text-gray-900">Abidjan, Côte d'Ivoire</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">💼 Entreprise</p>
                    <p className="font-medium text-gray-900">Eranove Academy – GLAB</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#e8f0f5] rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[#2470a7]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

