import { Card, CardContent } from "@/components/ui/card";
import { Award, Cloud, Database, Code, GraduationCap } from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    icon: Database,
    title: "Database Developer on Oracle Cloud",
    issuer: "Oracle",
    year: "2024",
  },
  {
    icon: Code,
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    year: "2023",
  },
  {
    icon: GraduationCap,
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    year: "2022",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group text-center hover:shadow-lg transition-all duration-300 bg-card border-border/50 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-accent mb-4 group-hover:bg-primary transition-colors">
                  <cert.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs mt-1 font-mono">{cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
