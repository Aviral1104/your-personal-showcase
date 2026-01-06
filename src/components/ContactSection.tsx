import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about AI and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-background border-border/50">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-accent mb-4">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">Available for emails</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-background border-border/50">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-accent mb-4">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 8528830902</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-background border-border/50">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-accent mb-4">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Lucknow, India</p>
              </CardContent>
            </Card>
          </div>

          {/* Social Connect */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-6">Connect With Me</h3>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://linkedin.com/in/aviral-asthana-4393b4234"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a
                href="https://twitter.com/actual_aviral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </Button>
              </a>
              <a href="mailto:contact@aviralashtana.com">
                <Button size="lg" className="gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
