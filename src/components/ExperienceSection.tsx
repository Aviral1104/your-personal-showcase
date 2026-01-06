import { Award } from "lucide-react";

const experiences = [
  {
    period: "2021 — 2025",
    title: "Machine Learning Engineer (Student)",
    organization: "VIT Bhopal · Independent Projects",
    description: [
      "Designed and implemented end-to-end machine learning systems across Computer Vision and Reinforcement Learning.",
      "Built real-time pipelines for hand gesture recognition, object detection, and control-based environments.",
      "Focused on robustness, inference speed, and real-world deployment constraints.",
    ],
    tags: ["Python", "TensorFlow", "PyTorch", "YOLOv8", "OpenCV", "Gym"],
  },
  {
    period: "2022 — Present",
    title: "Applied AI Research & Experimentation",
    organization: "Self-Driven",
    description: [
      "Experimented with CNNs, RL agents, and optimization strategies across multiple environments.",
      "Documented learnings through articles and open-source implementations.",
    ],
    tags: ["Research", "Deep Learning", "RL", "Writing"],
  },
  {
    period: "Nov 2023 — Jan 2024",
    title: "Project Trainee",
    organization: "Trinetradhar Info Solution Pvt. Ltd.",
    description: [
      "Designed and implemented database for UP Prosecution Department e-Reporting System.",
      "Conducted testing and performance tuning for system reliability.",
    ],
    tags: ["Database Design", "SQL", "Testing"],
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
    <section id="experience" className="py-24 bg-card/30 border-y border-border relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Experience
            </h2>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l border-border">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-glow-cyan" />
                  <p className="font-mono text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary text-sm mb-3">{exp.organization}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border card-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary/50">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{cert.title}</h3>
                      <p className="text-primary text-xs">{cert.org}</p>
                      <p className="text-muted-foreground text-xs font-mono mt-1">{cert.year}</p>
                    </div>
                  </div>
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
