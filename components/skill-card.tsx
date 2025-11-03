"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import type { Skill } from "@/lib/portfolio-data"
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiDocker, SiTailwindcss } from "react-icons/si"

interface SkillCardProps {
  skill: Skill
  index: number
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  database: SiPostgresql,
  docker: SiDocker,
  tailwind: SiTailwindcss,
  framer: SiReact,
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent = iconMap[skill.icon.toLowerCase()] || SiReact

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
      },
    },
  }

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      className={`relative p-6 rounded-lg border border-border bg-card/50 transition-all duration-300 cursor-pointer overflow-hidden ${
        isExpanded ? "glow-cyan md:col-span-2" : "glow-purple"
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.category}</p>
            </div>
          </div>
          <div className="text-sm font-bold text-primary">{skill.level}/5</div>
        </div>

        {/* Radial Progress Bar */}
        <div className="mb-4">
          <motion.div
            variants={progressVariants}
            className="h-2 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
            style={{ width: `${(skill.level / 5) * 100}%` }}
          />
        </div>

        {/* Expandable Description */}
        {isExpanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-muted-foreground"
          >
            {skill.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
