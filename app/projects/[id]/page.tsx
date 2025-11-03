import { getPortfolioData } from "@/lib/portfolio-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ProjectDetailPage } from "@/components/project-detail-page"
import { notFound } from "next/navigation"

interface ProjectDetailProps {
  params: { id: string }
}

export async function generateStaticParams() {
  const data = await getPortfolioData()
  return data.projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const data = await getPortfolioData()
  const project = data.projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <ProjectDetailPage project={project} />
      <Footer />
    </div>
  )
}
