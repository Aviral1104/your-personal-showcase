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

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-60 right-20 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-mono text-sm md:text-base text-primary tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Machine Learning Engineer
          </p>

          {/* Name */}
          <h1 className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="block font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
              Aviral Asthana
            </span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Building systems that survive{" "}
            <span className="text-foreground font-medium">reality</span>,
            {" "}not demos that survive{" "}
            <span className="text-muted-foreground/60 italic">notebooks</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 border-glow-cyan"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get in touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://linkedin.com/in/aviral-asthana-4393b4234"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 text-muted-foreground hover:text-primary transition-all duration-300 relative"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              <Linkedin className="w-5 h-5 relative z-10" />
            </a>
            <a
              href="https://twitter.com/actual_aviral"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 text-muted-foreground hover:text-primary transition-all duration-300 relative"
              aria-label="Twitter"
            >
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              <Twitter className="w-5 h-5 relative z-10" />
            </a>
            <a
              href="https://github.com/Aviral1104"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 text-muted-foreground hover:text-primary transition-all duration-300 relative"
              aria-label="GitHub"
            >
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              <Github className="w-5 h-5 relative z-10" />
            </a>
            <a
              href="mailto:asthana.aviral0902@gmail.com"
              className="group p-3 text-muted-foreground hover:text-primary transition-all duration-300 relative"
              aria-label="Email"
            >
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              <Mail className="w-5 h-5 relative z-10" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
