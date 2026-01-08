import { Badge } from "@/components/ui/badge";
import TechStackBadges from "./TechStackBadges";

const skillCategories = [
  {
    title: "Foundations",
    description: "Mathematics & programming fundamentals",
    skills: ["Python", "Data Structures & Algorithms", "Probability & Statistics", "Linear Algebra", "Calculus"],
  },
  {
    title: "Machine Learning",
    description: "Classical and applied ML systems",
    skills: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Evaluation", "Scikit-learn", "Applied ML Pipelines"],
  },
  {
    title: "Deep Learning",
    description: "Neural architectures & optimization",
    skills: ["CNNs", "ANNs", "TensorFlow / Keras", "PyTorch", "Optimization Techniques"],
  },
  {
    title: "Computer Vision",
    description: "Perception systems",
    skills: ["YOLOv8", "OpenCV", "MediaPipe", "Object Detection", "Image Classification"],
  },
  {
    title: "Reinforcement Learning",
    description: "Decision making & control",
    skills: ["Q-Learning", "SARSA", "Deep Q-Learning", "DDPG", "TD3", "Gym"],
  },
  {
    title: "Systems & Cloud",
    description: "Engineering mindset",
    skills: ["Database Design", "Backend Development", "AWS", "Cloud Fundamentals", "Scalable Systems"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground">
            Technical expertise across the ML stack.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <TechStackBadges />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="font-mono text-xs text-muted-foreground border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
