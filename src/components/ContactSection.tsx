import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just chatting about AI and technology.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <a
              href="mailto:asthana.aviral0902@gmail.com"
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-primary mb-4" />
              <p className="font-semibold text-foreground text-sm mb-1">Email</p>
              <p className="text-muted-foreground text-xs break-all">asthana.aviral0902@gmail.com</p>
            </a>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <Phone className="w-6 h-6 text-primary mb-4" />
              <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
              <p className="text-muted-foreground text-xs">+91 8528830902</p>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <MapPin className="w-6 h-6 text-primary mb-4" />
              <p className="font-semibold text-foreground text-sm mb-1">Location</p>
              <p className="text-muted-foreground text-xs">Lucknow, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/aviral-asthana-4393b4234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="rounded-full gap-2 group">
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
              <Button variant="outline" size="lg" className="rounded-full gap-2 group">
                <Twitter className="w-4 h-4" />
                @actual_aviral
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Button>
            </a>
            <a href="mailto:asthana.aviral0902@gmail.com">
              <Button size="lg" className="rounded-full gap-2">
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
