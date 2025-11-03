"use client"

import { motion } from "framer-motion"
import type { Education } from "@/lib/portfolio-data"
import { EducationCard } from "./education-card"
import { SectionContainer } from "./section-container"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
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
    <SectionContainer id="education" className="bg-card/20">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Education
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My academic journey and qualifications
          </motion.p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: education.length * 0.2 + 0.3 }}
          className="mt-16 p-8 rounded-lg border border-border bg-card/50 glow-purple text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">Continuous Learning</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond formal education, I'm committed to staying updated with the latest technologies and best practices
            through online courses, certifications, and community engagement.
          </p>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
