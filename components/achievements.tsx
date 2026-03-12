'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function Achievements() {
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
    <section id="achievements" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16"
        >
          Achievements
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-48 bg-background border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-accent mb-2">🏆</div>
                  <p className="text-muted-foreground">Achievement {i}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
