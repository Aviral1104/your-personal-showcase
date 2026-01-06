import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar/Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-foreground flex items-center justify-center text-background font-display text-2xl font-bold shadow-lg">
              AA
            </div>
          </div>

          {/* Name - Large Display Typography */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground mb-6 uppercase">
            Aviral Asthana
          </h1>

          {/* Tagline */}
          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-12">
            Machine Learning Engineer Building Intelligent Systems
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <a
              href="https://linkedin.com/in/aviral-asthana-4393b4234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/actual_aviral"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:asthana.aviral0902@gmail.com"
              className="p-3 rounded-xl bg-card border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("projects")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border border-border bg-card hover:bg-secondary transition-all duration-300 animate-bounce"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
