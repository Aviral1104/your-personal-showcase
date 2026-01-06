import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Dog, Apple, Hand } from "lucide-react";

const projects = [
  {
    icon: Dog,
    title: "DAWG: Stray Dog Detection System",
    description: "Implemented an enhanced YOLOv7 algorithm to detect stray dogs and relay information to the nearest Municipal Corporation for animal welfare management.",
    tags: ["YOLOv7", "Computer Vision", "Python", "Object Detection"],
  },
  {
    icon: Bot,
    title: "AI-Based Career Counsellor",
    description: "Developed an AI model to suggest personalized career options based on user responses and preferences using machine learning algorithms.",
    tags: ["Machine Learning", "Python", "AI", "Recommendation System"],
  },
  {
    icon: Brain,
    title: "Alzheimer's Detection using CNN",
    description: "Utilized Convolutional Neural Networks to detect Alzheimer's from brain X-rays, achieving high accuracy in early diagnosis for medical applications.",
    tags: ["CNN", "Deep Learning", "Medical AI", "TensorFlow"],
  },
  {
    icon: Apple,
    title: "FRUITIPEDIA: Automated Fruit Grading",
    description: "Engineered an automated fruit grading system using CNNs and created a comprehensive encyclopedia for various fruit classes and varieties.",
    tags: ["CNN", "Image Classification", "Python", "Agriculture Tech"],
  },
  {
    icon: Hand,
    title: "ASL Gesture Recognition System",
    description: "Developed a real-time American Sign Language gesture recognition system using TensorFlow/Keras, OpenCV, and MediaPipe for hand landmark detection.",
    tags: ["TensorFlow", "OpenCV", "MediaPipe", "Real-time AI"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of AI/ML projects demonstrating expertise in computer vision, 
            deep learning, and real-world problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 bg-background border-border/50 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent w-fit mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <project.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs font-normal"
                    >
                      {tag}
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

export default ProjectsSection;
