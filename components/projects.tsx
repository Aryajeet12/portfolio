'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Employee Management System',
    description: 'A Java-based system that manages employee records, allowing users to add, update, delete, and organize employee data efficiently.',
    technologies: ['Java', 'GUI', 'Database'],
    link: '#',
  },
  {
    id: 2,
    title: 'Game Recommendation Chatbot',
    description: 'A chatbot-based web application that recommends games to users based on their preferences using interactive UI and basic recommendation logic.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
]

export function Projects() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16"
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-accent text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
