import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hand Gesture Recognition System",
    description: "Real-time ASL gesture recognition using TensorFlow/Keras for CNN training, OpenCV for image processing, and MediaPipe for hand landmark detection.",
    tags: ["TensorFlow", "OpenCV", "MediaPipe", "Deep Learning"],
    github: "https://github.com/Aviral1104/Hand-Gesture-Recognition",
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
    github: "#",
  },
  {
    title: "Alzheimer's Detection using CNN",
    description: "Convolutional Neural Networks to detect Alzheimer's from brain X-rays, achieving high accuracy in early diagnosis for medical applications.",
    tags: ["CNN", "Medical AI", "TensorFlow"],
    github: "#",
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
    <section id="projects" className="py-24 bg-background relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

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
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border card-glow hover-lift"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
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
                    className="text-xs font-mono bg-secondary/50 text-muted-foreground border border-border"
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
                  className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
