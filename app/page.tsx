import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Training } from '@/components/training'
import { Certificates } from '@/components/certificates'
import { Achievements } from '@/components/achievements'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
    </main>
  )
}
