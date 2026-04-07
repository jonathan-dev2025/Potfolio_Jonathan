import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'travail',
      title: 'Développeur Full-Stack',
      company: 'Eranove Academy',
      logo: '/logos/eranove-academy.png',
      location: '1er Etage Immeuble SIDAM, Plateau, Abidjan, Côte d\'Ivoire',
      period: 'Mars 2024 - Aujourd\'hui · 1 an 9 mois',
      contract: 'Temps plein · Sur site',
      technologies: ['Django REST', 'React', 'Django'],
      description:
        'Développeur Full-Stack : APIs avec Django REST Framework, interfaces avec React, données et déploiement d\'applications web pour des projets professionnels.',
      achievements: [
        'Développement d\'APIs robustes avec Django REST Framework',
        'Création d\'interfaces utilisateur modernes avec React',
        'Gestion de projets en équipe avec méthodologies Agile',
        'Réalisation de projets professionnels et applications complètes',
      ],
    },
    {
      type: 'stage',
      title: 'Développeur web',
      company: 'GS2E',
      logo: '/logos/gs2e.jpg',
      location: 'Sur site',
      period: 'Avril 2023 - Décembre 2023 · 9 mois',
      contract: 'Stage · Sur site',
      technologies: ['C#'],
      description: 'Stage en développement web avec C#. Participation à des projets de développement d\'applications web et acquisition d\'expérience professionnelle.',
      achievements: [
        'Développement d\'applications web avec C#',
        'Participation à des projets d\'équipe',
        'Apprentissage des bonnes pratiques de développement',
        'Résolution de problèmes techniques',
      ],
    },
    {
      type: 'stage',
      title: 'Développement web',
      company: 'GS2E',
      logo: '/logos/gs2e.jpg',
      location: 'Le Plateau, Abidjan, Côte d\'Ivoire',
      period: 'Novembre 2022 - Janvier 2023 · 3 mois',
      contract: 'Stage · Sur site',
      technologies: ['C#'],
      description: 'Premier stage en développement web avec C#. Initiation au développement d\'applications web et découverte de l\'environnement professionnel.',
      achievements: [
        'Initiation au développement web avec C#',
        'Découverte de l\'environnement de développement professionnel',
        'Apprentissage des bases du développement web',
        'Participation à des projets d\'équipe',
      ],
    },
  ]

  const TimelineItem = ({ experience, index, isLast }) => {
    const Icon = experience.type === 'travail' ? Briefcase : (experience.type === 'stage' ? GraduationCap : Briefcase)

    return (
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative flex gap-6"
      >
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#2470a7] to-[#41abb4]"></div>
        )}

        {/* Logo ou Icon */}
        <div className="relative z-10 flex-shrink-0">
          {experience.logo ? (
            <div className="w-12 h-12 rounded-full bg-white border-2 border-[#2470a7]/30 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // Si le logo n'existe pas, masquer l'image et afficher l'icône
                  e.target.style.display = 'none'
                  const fallback = e.target.parentElement
                  fallback.className = 'w-12 h-12 bg-gradient-to-br from-[#2470a7] to-[#41abb4] rounded-full flex items-center justify-center shadow-lg'
                  fallback.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
                }}
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-[#2470a7] to-[#41abb4] rounded-full flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-start gap-3">
                {experience.logo && (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 object-contain rounded-lg border border-gray-200 p-1 bg-white flex-shrink-0"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                  <p className="text-lg font-semibold text-[#2470a7] mb-1">{experience.company}</p>
                  {experience.contract && (
                    <p className="text-sm text-gray-500">{experience.contract}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Technologies :</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#e8f0f5] text-[#264370] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Réalisations clés :</p>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#2470a7] mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Expérience & <span className="gradient-text">Formation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264370] via-[#2470a7] to-[#41abb4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mon parcours professionnel et académique
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-600 mb-6">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets stimulants.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-[#2470a7] text-white rounded-lg font-semibold shadow-lg hover:bg-[#264370] transition-colors"
            >
              Contactez-moi
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

