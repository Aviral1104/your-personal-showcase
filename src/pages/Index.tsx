import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AnimatedSection id="about" className="scroll-mt-20">
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection id="experience" delay={100} className="scroll-mt-20">
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection id="projects" delay={100} className="scroll-mt-20">
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection id="skills" delay={100} className="scroll-mt-20">
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection id="articles" delay={100} className="scroll-mt-20">
          <ArticlesSection />
        </AnimatedSection>
        <AnimatedSection id="contact" delay={100} className="scroll-mt-20">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
