'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About Me</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a B.Tech Computer Science & Engineering student at Lovely Professional University, passionate about building systems that scale and solve real-world problems.
            </p>
            
            <p>
              My approach is hands-on — I build projects to understand how real-world systems work, from frontend interfaces to the concepts behind cloud infrastructure.
            </p>
            
            <p>
              Currently, I'm focused on strengthening my foundations in cloud computing and full-stack web development, while actively working on projects that demonstrate clean architecture and scalable design.
            </p>
            
            <p>
              I believe in continuous learning and building incrementally — starting with strong fundamentals before moving toward more advanced implementations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
