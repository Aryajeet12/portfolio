'use client'

import { motion } from 'framer-motion'

const technicalSkills = [
  'Java',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Cloud Computing Basics',
]

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Continuous Learning',
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
