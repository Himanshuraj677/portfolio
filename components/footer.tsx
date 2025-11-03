import Link from "next/link"
import { Github, Linkedin, Code2 } from "lucide-react"
import { getPortfolioData } from "@/lib/portfolio-data"

export async function Footer() {
  const currentYear = new Date().getFullYear()
  const data = await getPortfolioData()

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold gradient-text mb-4">HR</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer crafting beautiful, scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Himanshuraj677"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/himanshu-raj-ba7643207"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/himanshuraj6771"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Code2 size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: data.footer.text }} />
        </div>
      </div>
    </footer>
  )
}
