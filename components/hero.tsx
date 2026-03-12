'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

const TypingText = () => {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState(0)

  const phrases = [
    "Hi myself Aryajeet Kumar",
    "Full stack web developer",
    "Cloud computing"
  ]

  useEffect(() => {
    const currentPhrase = phrases[phase % phrases.length]
    const speed = 60
    const deleteSpeed = 40

    const timer = setTimeout(() => {
      if (text.length < currentPhrase.length) {
        // Typing phase
        setText(currentPhrase.slice(0, text.length + 1))
      } else {
        // Completed typing, wait before deleting
        setTimeout(() => {
          // Start deleting
          const deleteTimer = setInterval(() => {
            setText((prev) => {
              if (prev.length === 0) {
                clearInterval(deleteTimer)
                setPhase((p) => p + 1)
                return ''
              }
              return prev.slice(0, -1)
            })
          }, deleteSpeed)
        }, 1500)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, phase])

  return (
    <div className="text-2xl md:text-3xl font-light text-accent text-balance min-h-12">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  )
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        className="container mx-auto px-4 z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary bg-primary/10 flex items-center justify-center overflow-hidden hover:border-accent transition-colors duration-300">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl md:text-5xl font-bold text-primary">
              AK
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypingText />
        </motion.div>
        
        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-8"
        >
          <Link href="#about" className="text-accent hover:text-primary transition-colors">
            <ArrowDown size={32} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
