import { Briefcase, GraduationCap, PenLine, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    title: "Project Trainee",
    organization: "Trinetradhar Info Solution Pvt. Ltd.",
    period: "Nov 2023 - Jan 2024",
    description: "Designed and implemented database for UP Prosecution Department e-Reporting System. Conducted testing and performance tuning.",
  },
  {
    type: "work",
    icon: PenLine,
    title: "Author",
    organization: "Medium",
    period: "Aug 2022 - Present",
    description: "Writing articles on Science and Cosmos with data visualization for complex scientific concepts.",
  },
];

const certifications = [
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2024" },
  { title: "Database Developer on Oracle Cloud", org: "Oracle", year: "2024" },
  { title: "Applied Machine Learning in Python", org: "University of Michigan", year: "2023" },
  { title: "Complete Python Bootcamp", org: "Udemy", year: "2022" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Experience & Education */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
              Experience
            </h2>

            {/* Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <p className="font-mono text-xs text-muted-foreground mb-1">{exp.period}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}

              {/* Education */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-foreground" />
                <p className="font-mono text-xs text-muted-foreground mb-1">Aug 2021 - Jul 2025</p>
                <h3 className="font-display text-xl font-semibold text-foreground">B.Tech Computer Science</h3>
                <p className="text-accent-foreground font-medium text-sm mb-2">Vellore Institute of Technology</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Specialization in AI & ML. GPA: 8.6/10. Coursework includes Deep Learning, NLP, Computer Vision.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Certifications */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
              Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 rounded-xl bg-accent w-fit mb-4">
                    <Award className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                  <p className="text-primary text-xs font-medium">{cert.org}</p>
                  <p className="text-muted-foreground text-xs font-mono mt-2">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
