import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitError, setSubmitError] = useState('')
  const destinationEmail = 'levilognon7@gmail.com'
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL
  const resetStatusTimeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (resetStatusTimeoutRef.current) {
        clearTimeout(resetStatusTimeoutRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitError('')

    if (!contactApiUrl) {
      setSubmitStatus('error')
      setSubmitError("Configuration manquante: définissez VITE_CONTACT_API_URL pour activer l'envoi en production.")
      setIsSubmitting(false)
      return
    }

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    if (trimmedData.message.length < 20) {
      setSubmitStatus('error')
      setSubmitError('Le message doit contenir au moins 20 caractères.')
      setIsSubmitting(false)
      return
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...trimmedData,
          source: 'portfolio',
          sentAt: new Date().toISOString(),
        }),
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      resetStatusTimeoutRef.current = setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      if (error?.name === 'AbortError') {
        setSubmitError('Le serveur met trop de temps à répondre. Réessayez dans quelques instants.')
      } else {
        setSubmitError("Échec de l'envoi. Vérifiez votre connexion ou réessayez plus tard.")
      }
    } finally {
      clearTimeout(timeoutId)
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${destinationEmail}`,
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/jonathan-lognon',
      color: 'bg-gray-900 hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/jonathan-lognon',
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/2250788037761',
      color: 'bg-green-500 hover:bg-green-600',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="gradient-text">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264370] via-[#2470a7] to-[#41abb4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discutons de votre projet et voyons comment je peux vous aider à concrétiser vos idées
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez un message</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700 font-medium">
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </p>
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-red-700 font-medium">
                  {submitError || "Une erreur est survenue. Contactez-moi directement par email ou WhatsApp."}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2470a7] focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2470a7] focus:border-transparent transition-all"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2470a7] focus:border-transparent transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={20}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2470a7] focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-[#2470a7] text-white rounded-lg font-semibold shadow-lg hover:bg-[#264370] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f0f5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2470a7]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href={`mailto:${destinationEmail}`}
                      className="text-[#2470a7] hover:text-[#264370] transition-colors"
                    >
                      {destinationEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0f9f3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#55a93d]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Localisation</p>
                    <p className="text-gray-600">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Réseaux sociaux</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} text-white rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e8f0f5] to-[#f0f9f3] rounded-xl p-6 border border-[#2470a7]/20">
              <h4 className="font-bold text-gray-900 mb-2">Disponibilité</h4>
              <p className="text-gray-700 mb-4">
                Je suis disponible pour discuter de nouveaux projets, collaborations ou opportunités.
              </p>
              <p className="text-sm text-gray-600">
                Temps de réponse moyen : <strong>24-48 heures</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

