'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: 'text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@yourprofile',
      href: 'https://github.com/yourprofile',
      color: 'text-gray-400',
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91xxxxxxxxxx',
      color: 'text-green-400',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-accent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className={`${contact.color} text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
