"use client"

import { motion } from "framer-motion"
import type { Experience } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  experience: Experience
  index: number
  isLeft: boolean
}

export function ExperienceCard({ experience, index, isLeft }: ExperienceCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex gap-8 mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div variants={dotVariants} className="w-4 h-4 rounded-full bg-primary glow-cyan" />
        {index < 1 && <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent mt-4" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <motion.div
          className="p-6 rounded-lg border border-border bg-card/50 glow-purple hover:border-primary transition-colors duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1">{experience.role}</h3>
            <p className="text-sm text-primary font-semibold">{experience.company}</p>
            <p className="text-xs text-muted-foreground mt-1">{experience.duration}</p>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">→</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-primary/10 text-primary border-primary/30 hover:border-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
