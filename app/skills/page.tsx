import { getPortfolioData } from "@/lib/portfolio-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SkillsSection } from "@/components/skills-section"
import { AnimatedBackground } from "@/components/animated-background"

export default async function SkillsPage() {
  const data = await getPortfolioData()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-20 pb-16">
        <SkillsSection skills={data.skills} />
      </div>
      <Footer />
    </div>
  )
}
