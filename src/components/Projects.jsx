import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Zap, Target, Lightbulb } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Chatbot IA Intelligent',
      description: 'Chatbot conversationnel avec NLP et intégration d’API d’IA.',
      objective: 'Assistant virtuel capable de réponses naturelles et contextualisées.',
      technologies: ['Python', 'Django REST', 'React', 'OpenAI API', 'LangChain', 'PostgreSQL', 'WebSockets'],
      achievements: [
        'Intégration d\'API d\'IA (OpenAI/GPT) pour les réponses intelligentes',
        'Interface de chat en temps réel avec WebSockets',
        'Système de mémoire conversationnelle pour le contexte',
        'Gestion de l\'historique des conversations',
        'Interface utilisateur moderne et intuitive',
      ],
      takeaway:
        'Contexte multi-messages et coûts API : cache des réponses fréquentes, limitation du contexte et streaming pour la réactivité.',
      github: 'https://github.com/jonathan-lognon/chatbot-ia',
      demo: 'https://demo-chatbot.example.com',
      image: '/project-chatbot.jpg',
    },
    {
      title: 'ERP - Gestion des Notes Étudiants',
      description: 'ERP pour notes, bulletins et suivi pédagogique.',
      objective: 'Automatiser la gestion des notes et le suivi académique.',
      technologies: ['Django', 'Django REST', 'React', 'PostgreSQL', 'Chart.js', 'PDF Generation', 'Excel Export'],
      achievements: [
        'Gestion complète des notes (CC, TP, Examens) avec calcul automatique des moyennes',
        'Génération automatique de bulletins et relevés de notes en PDF',
        'Tableau de bord statistique pour les administrateurs et enseignants',
        'Système de rôles (Admin, Enseignant, Étudiant, Secrétaire)',
        'Import/Export de données en Excel',
        'Historique complet des notes et suivi pédagogique',
      ],
      takeaway:
        'Moyennes pondérées et rôles : calculs validés, audit trail des modifications et permissions Django par profil.',
      github: 'https://github.com/jonathan-lognon/erp-notes-etudiants',
      demo: 'https://demo-erp-notes.example.com',
      image: '/project-erp-notes.jpg',
    },
    {
      title: 'Application E-Commerce Full-Stack',
      description: 'E-commerce : catalogue, panier, paiement et back-office.',
      objective: 'Solution e-commerce scalable pour une entreprise locale.',
      technologies: ['Django REST', 'React', 'PostgreSQL', 'Stripe API', 'Docker'],
      achievements: [
        'API REST complète avec authentification JWT',
        'Interface utilisateur moderne et responsive',
        'Système de paiement intégré',
        'Panel d\'administration complet',
      ],
      takeaway: 'Panier temps réel et charge catalogue : WebSockets + cache Redis.',
      github: 'https://github.com/jonathan-lognon/ecommerce-project',
      demo: 'https://demo-ecommerce.example.com',
      image: '/project-ecommerce.jpg',
    },
    {
      title: 'Système de Gestion de Projets',
      description: 'Suivi des tâches, collaboration et rapports.',
      objective: 'Outil de gestion de projets pour la productivité d’équipe.',
      technologies: ['Django', 'React', 'PostgreSQL', 'WebSockets', 'Chart.js'],
      achievements: [
        'Gestion multi-utilisateurs avec rôles',
        'Tableau de bord interactif avec statistiques',
        'Notifications en temps réel',
        'Export de rapports en PDF',
      ],
      takeaway: 'Permissions fines et état partagé : groupes Django + WebSockets.',
      github: 'https://github.com/jonathan-lognon/project-management',
      demo: 'https://demo-pm.example.com',
      image: '/project-pm.jpg',
    },
    {
      title: 'API REST pour Application Mobile',
      description: 'API pour application mobile de livraison.',
      objective: 'API scalable pour forte charge et faible latence.',
      technologies: ['Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'JWT'],
      achievements: [
        'API RESTful complète avec documentation Swagger',
        'Authentification et autorisation sécurisées',
        'Traitement asynchrone des tâches lourdes',
        'Optimisation des performances avec cache Redis',
      ],
      takeaway: 'Charge et latence : Redis, pagination efficace et tâches asynchrones Celery.',
      github: 'https://github.com/jonathan-lognon/mobile-api',
      demo: null,
      image: '/project-api.jpg',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264370] via-[#2470a7] to-[#41abb4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une sélection de réalisations : objectifs, technologies, livrables et synthèse des enjeux techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#2470a7] to-[#41abb4] flex items-center justify-center">
                <Code2 className="w-16 h-16 text-white opacity-50" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Objective */}
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Target className="w-5 h-5 text-[#2470a7] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Objectif</p>
                      <p className="text-sm text-gray-600">{project.objective}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#e8f0f5] text-[#264370] rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[#55a93d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Réalisations</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <span className="text-[#2470a7] mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Synthèse (enjeu + réponse en une lecture) */}
                <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Synthèse</p>
                      <p className="text-sm text-gray-600 leading-snug">{project.takeaway}</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#2470a7] hover:text-[#264370] font-medium text-sm transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#55a93d] hover:text-[#448731] font-medium text-sm transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Démo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Plus de projets disponibles sur mon GitHub
          </p>
          <motion.a
            href="https://github.com/jonathan-lognon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            Voir tous mes projets
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

