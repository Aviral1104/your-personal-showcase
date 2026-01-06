import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-gradient-glow animate-shimmer" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Name with Glow */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient-cyan-purple opacity-90">Aviral Asthana</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            I develop machine learning systems that prioritise robustness, latency and real-world performance over benchmark scores.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-glow-cyan"
            >
              Selected Work
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 text-muted-foreground hover:text-foreground"
            >
              Get in touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://linkedin.com/in/aviral-asthana-4393b4234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/actual_aviral"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Aviral1104"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:asthana.aviral0902@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-drift" />
      <div className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px] animate-float" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 right-1/6 w-[300px] h-[300px] rounded-full bg-[hsl(var(--glow-pink))]/5 blur-[80px] animate-drift" style={{ animationDelay: "-8s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] rounded-full bg-primary/4 blur-[60px] animate-float" style={{ animationDelay: "-2s" }} />
    </section>
  );
};

export default HeroSection;
