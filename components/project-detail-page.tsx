"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Project } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

interface ProjectDetailPageProps {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="pt-32 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="mb-12 rounded-lg overflow-hidden border-2 border-primary glow-cyan h-96"
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Title and Description */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {project.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.longDescription}
          </motion.p>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.skillsUsed.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold glow-cyan"
            >
              <ExternalLink size={18} />
              View Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold glow-purple"
            >
              <Github size={18} />
              GitHub Repository
            </a>
            {project.blogPost && (
              <a
                href={project.blogPost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-muted text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 font-semibold"
              >
                Read Blog Post
              </a>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="p-8 rounded-lg border border-border bg-card/50 glow-cyan">
            <h3 className="text-lg font-semibold text-foreground mb-4">Project Highlights</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Built with cutting-edge technologies and best practices</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Fully responsive and optimized for all devices</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Performance-focused with smooth animations</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Open source and available on GitHub</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
