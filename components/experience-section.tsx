"use client"

import { motion } from "framer-motion"
import type { Experience } from "@/lib/portfolio-data"
import { ExperienceCard } from "./experience-card"
import { SectionContainer } from "./section-container"

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <SectionContainer id="experience">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Experience
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A timeline of my professional journey and key accomplishments
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} isLeft={index % 2 === 0} />
          ))}

          {/* Timeline End */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: experience.length * 0.2 + 0.3 }}
            className="flex justify-center mt-12"
          >
            <div className="text-center">
              <div className="w-4 h-4 rounded-full bg-accent glow-purple mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Currently exploring new opportunities</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
