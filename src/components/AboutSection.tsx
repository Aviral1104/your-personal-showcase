import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
  },
  {
    icon: Code,
    title: "Programming & Development",
    skills: ["Python Programming", "Front-End Development", "SQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Cloud Computing", "Cloud Native Applications", "DevOps Automation", "AWS"],
  },
  {
    icon: Database,
    title: "Data Management & Analytics",
    skills: ["Database Management", "ETL Tooling", "Data Modeling", "Performance Tuning", "Data Visualization"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Machine Learning Engineer with a strong foundation in AI and deep learning, 
            experienced in shipping Python-based solutions to production. Currently pursuing 
            B.Tech in Computer Science with specialization in AI/ML at VIT with a GPA of 8.6/10. 
            Skilled in computer vision, NLP, and cloud-native development, demonstrated through 
            projects like YOLOv7 stray dog detection and CNN-based Alzheimer's detection systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent">
                    <category.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
