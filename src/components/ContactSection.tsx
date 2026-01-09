import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Open to opportunities, collaborations, and thoughtful conversations around AI, systems, and long-term thinking.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm">
            <a
              href="mailto:asthana.aviral0902@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              asthana.aviral0902@gmail.com
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              +91 8528830902
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Lucknow, India
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/aviral-asthana-4393b4234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="gap-2 border-border hover:border-primary hover:text-primary transition-all group"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Button>
            </a>
            <a
              href="https://twitter.com/actual_aviral"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="gap-2 border-border hover:border-primary hover:text-primary transition-all group"
              >
                <Twitter className="w-4 h-4" />
                @actual_aviral
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Button>
            </a>
            <a
              href="https://github.com/Aviral1104"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="gap-2 border-border hover:border-primary hover:text-primary transition-all group"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Button>
            </a>
            <a href="/Resume_Aviral_Asthana.pdf" download>
              <Button
                variant="outline"
                className="gap-2 border-border hover:border-primary hover:text-primary transition-all group"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
            <a href="mailto:asthana.aviral0902@gmail.com">
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 border-glow-cyan">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
