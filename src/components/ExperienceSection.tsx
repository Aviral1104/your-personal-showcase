import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, PenLine } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    title: "Project Trainee",
    organization: "Trinetradhar Info Solution Pvt. Ltd.",
    period: "Nov 2023 - Jan 2024",
    description: [
      "Designed and implemented the database for the 'e-Reporting System for Uttar Pradesh Prosecution Department'",
      "Conducted extensive testing and applied performance tuning for optimal system reliability",
    ],
  },
  {
    type: "work",
    icon: PenLine,
    title: "Author",
    organization: "Medium",
    period: "Aug 2022 - Present",
    description: [
      "Write engaging articles on Science and Cosmos",
      "Utilize data visualization to create illustrative graphics for complex scientific concepts",
    ],
  },
];

const education = {
  icon: GraduationCap,
  title: "Bachelor of Technology (B.Tech)",
  organization: "Vellore Institute of Technology",
  period: "Aug 2021 - Jul 2025",
  specialization: "Computer Science with AI & ML Specialization",
  gpa: "GPA: 8.6/10",
  highlights: [
    "Participated in Omdena local project on monitoring water quality using satellite imagery and GIS",
    "Coursework: Deep Learning, NLP, Computer Vision, Artificial Neural Networks",
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.organization}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <Card className="border-l-4 border-l-accent-foreground bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{education.title}</h4>
                    <p className="text-primary font-medium">{education.organization}</p>
                    <p className="text-muted-foreground text-sm">{education.specialization}</p>
                    <p className="text-accent-foreground font-semibold text-sm mt-1">{education.gpa}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                    {education.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {education.highlights.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
