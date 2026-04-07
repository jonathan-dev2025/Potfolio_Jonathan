import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Back-end',
      color: 'from-[#2470a7] to-[#264370]',
      skills: [
        { name: 'Django', level: 5 },
        { name: 'Django REST Framework', level: 5 },
        { name: 'Python', level: 5 },
        { name: 'FastAPI', level: 4 },
        { name: 'Node.js', level: 3 },
      ],
    },
    {
      title: 'Front-end',
      color: 'from-[#41abb4] to-[#2470a7]',
      skills: [
        { name: 'React', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'Tailwind CSS', level: 5 },
        { name: 'HTML/CSS', level: 5 },
      ],
    },
    {
      title: 'Base de données',
      color: 'from-[#55a93d] to-[#41abb4]',
      skills: [
        { name: 'PostgreSQL', level: 4 },
        { name: 'MySQL', level: 4 },
        { name: 'SQLite', level: 5 },
        { name: 'MongoDB', level: 3 },
      ],
    },
    {
      title: 'DevOps',
      color: 'from-[#bac823] to-[#55a93d]',
      skills: [
        { name: 'Docker', level: 4 },
        { name: 'Nginx', level: 4 },
        { name: 'Git & GitHub', level: 5 },
        { name: 'CI/CD', level: 3 },
        { name: 'Linux', level: 4 },
      ],
    },
    {
      title: 'Outils & Méthodes',
      color: 'from-[#fae91c] to-[#bac823]',
      skills: [
        { name: 'Git', level: 5 },
        { name: 'Postman', level: 4 },
        { name: 'VS Code', level: 5 },
        { name: 'Agile/Scrum', level: 4 },
        { name: 'Tests unitaires', level: 4 },
      ],
    },
  ]

  const StarRating = ({ level }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < level ? 'text-[#fae91c]' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Compétences <span className="gradient-text">Techniques</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264370] via-[#2470a7] to-[#41abb4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mes compétences reposent sur une maîtrise approfondie des technologies modernes du développement web,
            acquise à travers des projets concrets et des expériences professionnelles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <StarRating level={skill.level} />
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

