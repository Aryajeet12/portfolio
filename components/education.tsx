'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const educationData = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    degree: 'B.Tech Computer Science & Engineering',
    cgpa: 'CGPA: 6.7',
    icon: '🎓',
  },
  {
    id: 2,
    institution: 'Class 12',
    degree: 'Secondary Education',
    cgpa: 'Percentage: 70%',
    icon: '📚',
  },
  {
    id: 3,
    institution: 'Class 10',
    degree: 'Secondary School',
    cgpa: 'Percentage: 82%',
    icon: '✏️',
  },
]

export function Education() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16"
        >
          Education
        </motion.h2>

        <motion.div
          className="space-y-6 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {educationData.map((education) => (
            <motion.div key={education.id} variants={itemVariants}>
              <Card className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="p-6 flex gap-6">
                  <div className="text-5xl flex-shrink-0">{education.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {education.institution}
                    </h3>
                    <p className="text-accent font-semibold mb-2">
                      {education.degree}
                    </p>
                    <p className="text-muted-foreground">
                      {education.cgpa}
                    </p>
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
