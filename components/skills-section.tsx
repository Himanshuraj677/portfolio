"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import type { Skill } from "@/lib/portfolio-data"
import { SkillCard } from "./skill-card"
import { SectionContainer } from "./section-container"

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = useMemo(() => [...new Set(skills.map((s) => s.category))], [skills])

  // Filter skills by category
  const filteredSkills = useMemo(() => {
    if (!selectedCategory) return skills
    return skills.filter((s) => s.category === selectedCategory)
  }, [skills, selectedCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <SectionContainer id="skills" className="bg-card/20">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and proficiencies
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground glow-cyan"
                : "bg-card border border-border text-muted-foreground hover:text-primary"
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground glow-purple"
                  : "bg-card border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  )
}
