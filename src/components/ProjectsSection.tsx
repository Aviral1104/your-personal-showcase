import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const cardStyles = [
  {
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    border: "hover:border-violet-500/50",
    text: "group-hover:text-violet-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    border: "hover:border-cyan-500/50",
    text: "group-hover:text-cyan-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    border: "hover:border-pink-500/50",
    text: "group-hover:text-pink-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    border: "hover:border-green-500/50",
    text: "group-hover:text-green-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    border: "hover:border-orange-500/50",
    text: "group-hover:text-orange-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    border: "hover:border-blue-500/50",
    text: "group-hover:text-blue-400",
  },
];

const projects = [
  {
    title: "ASL Gesture Recognition System",
    description: "Real-time ASL gesture recognition using TensorFlow/Keras for CNN training, OpenCV for image processing, and MediaPipe for hand landmark detection.",
    tags: ["TensorFlow", "OpenCV", "MediaPipe", "Deep Learning"],
    github: "https://github.com/Aviral1104/ASL-Gesture-Recognition-System",
  },
  {
    title: "Reinforcement Learning in Action",
    description: "Task-based implementations of reinforcement learning algorithms ranging from classical methods to modern actor-critic architectures like DDPG and TD3.",
    tags: ["Reinforcement Learning", "DDPG", "TD3", "Gym"],
    github: "https://github.com/Aviral1104/Reinforcement-Learning-in-Action-Task-Based-Approaches",
  },
  {
    title: "Cricket Field Object Detection",
    description: "YOLOv8-based object detection system for cricket analytics. Detects pitch, ball, and bat from match footage with real-time inference.",
    tags: ["YOLOv8", "Computer Vision", "ONNX", "OpenCV"],
    github: "https://github.com/Aviral1104/Cricket-field-Object-Detection",
    demo: "https://drive.google.com/file/d/12hs2Fy9Sbx0MWycYCgU-UotIZaP0p5-c/view",
  },
  {
    title: "DAWG: Stray Dog Detection",
    description: "Enhanced YOLOv7 algorithm to detect stray dogs and relay information to the nearest Municipal Corporation for animal welfare management.",
    tags: ["YOLOv7", "Computer Vision", "Python"],
    github: "https://github.com/Aviral1104",
  },
  {
    title: "Alzheimer's Detection using CNN",
    description: "Convolutional Neural Networks to detect Alzheimer's from brain X-rays, achieving high accuracy in early diagnosis for medical applications.",
    tags: ["CNN", "Medical AI", "TensorFlow"],
    github: "https://github.com/Aviral1104",
  },
  {
    title: "Applied Machine Learning",
    description: "In-depth notebooks exploring applied machine learning techniques with mathematical intuition and implementation details.",
    tags: ["Machine Learning", "Jupyter", "Python"],
    github: "https://github.com/Aviral1104/Applied-Machine-Learning",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Projects focused on robustness, inference speed, and real-world deployment constraints.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const style = cardStyles[index % cardStyles.length];
            return (
              <div
                key={index}
                className={`group p-6 rounded-xl bg-card border border-border transition-all duration-500 hover:-translate-y-2 ${style.glow} ${style.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className={`font-display text-lg font-semibold text-foreground mb-3 transition-colors duration-300 ${style.text}`}>
                  {project.title}
                </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs font-mono bg-secondary/50 text-muted-foreground border border-border transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-all duration-300 hover:gap-3"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-all duration-300 hover:gap-3"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
