"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, AlertCircle } from "lucide-react"

interface FormState {
  name: string
  email: string
  message: string
  status: "idle" | "loading" | "success" | "error"
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    status: "idle",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setForm((prev) => ({ ...prev, status: "loading" }))

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (response.ok) {
        setForm({ name: "", email: "", message: "", status: "success" })
        setTimeout(() => {
          setForm((prev) => ({ ...prev, status: "idle" }))
        }, 3000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      setForm((prev) => ({ ...prev, status: "error" }))
      setTimeout(() => {
        setForm((prev) => ({ ...prev, status: "idle" }))
      }, 3000)
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Name Input */}
      <motion.div custom={0} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Himanshu Raj"
          required
          className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
        />
      </motion.div>

      {/* Email Input */}
      <motion.div custom={1} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="e.g. himanshuraj6771@gmail.com"
          required
          className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
        />
      </motion.div>

      {/* Message Input */}
      <motion.div custom={2} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message..."
          rows={6}
          required
          className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div custom={3} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <button
          type="submit"
          disabled={form.status === "loading"}
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed glow-cyan"
        >
          {form.status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </motion.div>

      {/* Status Messages */}
      {form.status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-2"
        >
          <Mail size={18} />
          Message sent successfully!
        </motion.div>
      )}

      {form.status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive flex items-center gap-2"
        >
          <AlertCircle size={18} />
          Failed to send message. Please try again.
        </motion.div>
      )}
    </form>
  )
}
