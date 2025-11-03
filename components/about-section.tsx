"use client"

import { motion } from "framer-motion"
import type { About } from "@/lib/portfolio-data"
import { SectionContainer } from "./section-container"

interface AboutSectionProps {
  data: About
}

export function AboutSection({ data }: AboutSectionProps) {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <SectionContainer id="about">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              {data.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3">
              {data.facts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
            {/* Experience Card */}
            <div className="p-6 rounded-lg border border-border bg-card/50 glow-cyan">
              <p className="text-sm text-muted-foreground mb-2">Experience</p>
              <p className="text-4xl font-bold gradient-text">{data.experience}</p>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-lg border border-border bg-card/50 glow-purple">
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="text-2xl font-semibold text-foreground">{data.location}</p>
            </div>

            {/* Image Placeholder */}
            <div className="relative w-full h-64 rounded-lg border-2 border-primary overflow-hidden glow-cyan">
              <img
                src="/developer-workspace.jpg"
                alt="Workspace"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
