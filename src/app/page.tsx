import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ProblemSection } from "@/components/ProblemSection";
import { PhotoDivider } from "@/components/PhotoDivider";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NextSteps } from "@/components/NextSteps";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <ProblemSection />
        <PhotoDivider />
        <ServicesSection />
        {/* Testimonials before the ask — social proof must precede CTA */}
        <TestimonialsSection />
        <NextSteps />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
