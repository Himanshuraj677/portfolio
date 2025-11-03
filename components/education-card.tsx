"use client"

import { motion } from "framer-motion"
import type { Education } from "@/lib/portfolio-data"

interface EducationCardProps {
  education: Education
  index: number
}

export function EducationCard({ education, index }: EducationCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="perspective"
    >
      <div className="relative p-8 rounded-lg border-2 border-primary bg-gradient-to-br from-card/80 to-card/50 glow-cyan overflow-hidden group hover:border-accent transition-colors duration-300">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Logo */}
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <img
              src={education.logo || "/placeholder.svg?height=40&width=40"}
              alt={education.institution}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-foreground mb-2">{education.degree}</h3>
          <p className="text-lg text-primary font-semibold mb-3">{education.institution}</p>
          <p className="text-sm text-muted-foreground mb-4">{education.duration}</p>

          {/* Divider */}
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />

          {/* Score */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Academic Performance</p>
            <p className="text-lg font-bold gradient-text">{education.score}</p>
          </div>
        </div>

        {/* Hover effect elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      </div>
    </motion.div>
  )
}
