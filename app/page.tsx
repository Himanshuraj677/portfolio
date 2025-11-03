import { getPortfolioData } from "@/lib/portfolio-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AnimatedBackground } from "@/components/animated-background"

export default async function Home() {
  const data = await getPortfolioData()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <Footer />
    </div>
  )
}
