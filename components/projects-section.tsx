"use client"

import { motion } from "framer-motion"
import type { Project } from "@/lib/portfolio-data"
import { ProjectCard } from "./project-card"
import { SectionContainer } from "./section-container"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

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
    <SectionContainer id="projects" className="bg-card/20">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my recent work and side projects showcasing my skills
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* All Projects Link */}
        {otherProjects.length > 0 && (
          <>
            <div className="border-t border-border my-16" />

            <div className="mb-12 text-center">
              <motion.h3
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-2xl md:text-3xl font-bold mb-4 gradient-text"
              >
                Other Projects
              </motion.h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={featuredProjects.length + index} />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </SectionContainer>
  )
}
