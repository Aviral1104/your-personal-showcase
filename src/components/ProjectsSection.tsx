import { Bot, Brain, Dog, Apple, Hand } from "lucide-react";

const projects = [
  {
    icon: Dog,
    title: "DAWG",
    subtitle: "Stray Dog Detection System",
    description: "Enhanced YOLOv7 algorithm to detect stray dogs and relay information to Municipal Corporations.",
    tags: ["YOLOV7", "COMPUTER VISION", "2024"],
    gradient: "card-gradient-teal",
  },
  {
    icon: Brain,
    title: "Alzheimer's Detection",
    subtitle: "CNN-based Diagnosis",
    description: "Convolutional Neural Networks to detect Alzheimer's from brain X-rays with high accuracy.",
    tags: ["CNN", "MEDICAL AI", "DEEP LEARNING"],
    gradient: "card-gradient-purple",
  },
  {
    icon: Bot,
    title: "AI Career Counsellor",
    subtitle: "Personalized Guidance",
    description: "AI model suggesting personalized career options based on user responses and preferences.",
    tags: ["MACHINE LEARNING", "AI", "PYTHON"],
    gradient: "card-gradient-pink",
  },
  {
    icon: Apple,
    title: "FRUITIPEDIA",
    subtitle: "Automated Fruit Grading",
    description: "Automated fruit grading system using CNNs with comprehensive fruit encyclopedia.",
    tags: ["CNN", "AGRICULTURE", "CLASSIFICATION"],
    gradient: "card-gradient-orange",
  },
  {
    icon: Hand,
    title: "ASL Recognition",
    subtitle: "Gesture Detection System",
    description: "Real-time American Sign Language gesture recognition using TensorFlow and MediaPipe.",
    tags: ["TENSORFLOW", "OPENCV", "REAL-TIME"],
    gradient: "card-gradient-blue",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-xl">
            AI/ML projects demonstrating expertise in computer vision, deep learning, and real-world problem solving.
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 ${project.gradient} hover-lift cursor-pointer overflow-hidden ${
                index === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              {/* Floating Icon */}
              <div className="absolute top-6 right-6 p-4 rounded-2xl bg-background/10 backdrop-blur-sm">
                <project.icon className="w-8 h-8 text-background/90" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[280px]">
                <div className="space-y-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono font-medium bg-background/20 backdrop-blur-sm rounded-full text-background/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-background">
                    {project.title}
                  </h3>
                  <p className="text-background/80 text-sm font-medium">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-background/70 text-sm leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-background/5 pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-background/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
