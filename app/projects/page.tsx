import { getPortfolioData } from "@/lib/portfolio-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"
import { AnimatedBackground } from "@/components/animated-background"

export default async function ProjectsPage() {
  const data = await getPortfolioData()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-20 pb-16">
        <ProjectsSection projects={data.projects} />
      </div>
      <Footer />
    </div>
  )
}
