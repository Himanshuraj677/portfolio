"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Project } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="relative h-80 rounded-lg overflow-hidden border border-border bg-card/50 glow-cyan transition-all duration-300 hover:border-primary">
          {/* Image */}
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skillsUsed.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {project.skillsUsed.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.skillsUsed.length - 3}
                </Badge>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
