import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "TensorFlow", "PyTorch"],
  },
  {
    title: "Development",
    skills: ["Python", "SQL", "Front-End Development", "API Design"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Cloud Computing", "Cloud Native Apps", "DevOps Automation"],
  },
  {
    title: "Data",
    skills: ["Database Management", "ETL", "Data Modeling", "Data Visualization"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Machine Learning Engineer with a strong foundation in AI and deep learning,
                experienced in shipping Python-based solutions to production.
              </p>
              <p>
                Currently pursuing B.Tech in Computer Science with specialization in AI/ML
                at Vellore Institute of Technology with a GPA of 8.6/10.
              </p>
              <p>
                AWS Certified Cloud Practitioner with hands-on experience in computer vision,
                NLP, and cloud-native development. I love building intelligent systems that
                solve real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">8.6</p>
                <p className="text-sm text-muted-foreground">GPA / 10</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-normal rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
