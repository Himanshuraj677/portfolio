"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Contact } from "@/lib/portfolio-data"
import { ContactForm } from "./contact-form"
import { SectionContainer } from "./section-container"
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react"

interface ContactSectionProps {
  contact: Contact
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
}

export function ContactSection({ contact }: ContactSectionProps) {
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
    <SectionContainer id="contact" className="bg-card/20">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-primary transition-colors glow-purple"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-foreground hover:text-primary transition-colors">{contact.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-primary transition-colors glow-cyan"
            >
              <div className="p-3 rounded-lg bg-accent/10">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-semibold text-foreground hover:text-accent transition-colors">{contact.phone}</p>
              </div>
            </a>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">Connect on Social</p>
              <div className="flex flex-wrap gap-3">
                {contact.social.map((social) => {
                  const IconComponent = iconMap[social.icon.toLowerCase()] || Github
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary hover:text-primary transition-all duration-300 glow-purple hover:glow-cyan"
                      title={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center p-8 rounded-lg border border-border bg-card/50 glow-cyan"
        >
          <p className="text-muted-foreground mb-4">Looking to collaborate or have an exciting opportunity?</p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
          >
            <Mail size={18} />
            Start a Conversation
          </a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
