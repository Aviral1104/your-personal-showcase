import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle overlay for hero content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />

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

    </section>
  );
};

export default HeroSection;
