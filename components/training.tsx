'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const trainings = [
  {
    id: 1,
    title: 'Data Structures and Algorithms (DSA)',
    description: 'Learning core problem-solving techniques, algorithm design, and logical thinking using common data structures.',
  },
  {
    id: 2,
    title: 'MERN Stack Training',
    description: 'Learning full-stack web development using MongoDB, Express, React, and Node.js while building practical projects.',
  },
]

export function Training() {
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
    <section id="training" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16"
        >
          Training & Development
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {trainings.map((training) => (
            <motion.div key={training.id} variants={itemVariants}>
              <Card className="h-full bg-background border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">→</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {training.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {training.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
