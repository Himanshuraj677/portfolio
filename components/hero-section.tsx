"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Hero } from "@/lib/portfolio-data"

interface HeroSectionProps {
  data: Hero
}

export function HeroSection({ data }: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const tagline = data.tagline

  useEffect(() => {
    if (displayedText.length < tagline.length) {
      const timer = setTimeout(() => {
        setDisplayedText(tagline.slice(0, displayedText.length + 1))
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [displayedText, tagline])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl text-center">
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8 inline-block">
          <div className="w-24 h-24 rounded-full border-2 border-primary glow-cyan flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold">
              HR
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          {data.name}
        </motion.h1>

        {/* Role */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-primary mb-6">
          {data.role}
        </motion.p>

        {/* Typewriter Tagline */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 h-8 min-h-8">
          {displayedText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
          {data.cta.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold glow-cyan hover:shadow-lg"
            >
              {button.label}
            </Link>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
