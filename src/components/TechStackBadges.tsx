import { useState } from "react";

interface TechBadge {
  name: string;
  icon: string;
  color: string;
  textColor?: string;
}

const techStack: TechBadge[] = [
  // Languages
  { name: "Python", icon: "🐍", color: "hsl(207 89% 35%)", textColor: "hsl(53 100% 65%)" },
  { name: "C++", icon: "⚡", color: "hsl(220 60% 50%)" },
  { name: "Java", icon: "☕", color: "hsl(15 75% 45%)" },
  { name: "JavaScript", icon: "📜", color: "hsl(50 95% 50%)", textColor: "hsl(0 0% 10%)" },
  
  // ML/DL Frameworks
  { name: "TensorFlow", icon: "🧠", color: "hsl(22 95% 52%)" },
  { name: "PyTorch", icon: "🔥", color: "hsl(10 85% 55%)" },
  { name: "Keras", icon: "K", color: "hsl(0 75% 50%)" },
  { name: "Scikit-learn", icon: "🔬", color: "hsl(25 90% 55%)" },
  
  // Data Science
  { name: "NumPy", icon: "🔢", color: "hsl(210 75% 50%)" },
  { name: "Pandas", icon: "🐼", color: "hsl(260 50% 45%)" },
  { name: "Matplotlib", icon: "📊", color: "hsl(200 60% 40%)" },
  { name: "SciPy", icon: "∫", color: "hsl(200 80% 45%)" },
  
  // Computer Vision
  { name: "OpenCV", icon: "👁️", color: "hsl(120 70% 35%)" },
  { name: "MediaPipe", icon: "🖐️", color: "hsl(195 85% 45%)" },
  { name: "YOLOv8", icon: "🎯", color: "hsl(280 60% 50%)" },
  
  // Web & Backend
  { name: "FastAPI", icon: "⚡", color: "hsl(165 75% 40%)" },
  { name: "Flask", icon: "🌶️", color: "hsl(0 0% 20%)" },
  { name: "Django", icon: "🎸", color: "hsl(155 45% 35%)" },
  
  // Cloud & DevOps
  { name: "AWS", icon: "☁️", color: "hsl(35 95% 50%)", textColor: "hsl(0 0% 10%)" },
  { name: "Docker", icon: "🐳", color: "hsl(200 80% 50%)" },
  { name: "Git", icon: "📦", color: "hsl(15 85% 50%)" },
  
  // Databases
  { name: "MongoDB", icon: "🍃", color: "hsl(140 50% 40%)" },
  { name: "MySQL", icon: "🗄️", color: "hsl(200 85% 40%)" },
  { name: "PostgreSQL", icon: "🐘", color: "hsl(215 60% 45%)" },
  
  // Other
  { name: "Jupyter", icon: "📓", color: "hsl(25 90% 55%)" },
  { name: "Streamlit", icon: "🎈", color: "hsl(0 85% 60%)" },
  { name: "Hugging Face", icon: "🤗", color: "hsl(45 95% 55%)", textColor: "hsl(0 0% 10%)" },
];

const TechStackBadges = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">💻</span>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
          Tech Stack
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2 md:gap-3">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm transition-all duration-300 border border-transparent"
              style={{
                backgroundColor: tech.color,
                color: tech.textColor || "white",
                transform: hoveredIndex === index ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
                boxShadow: hoveredIndex === index 
                  ? `0 8px 25px ${tech.color}80, 0 0 15px ${tech.color}40` 
                  : "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-sm md:text-base">{tech.icon}</span>
              <span className="uppercase tracking-wide font-bold">{tech.name}</span>
            </div>
            
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
              style={{
                backgroundColor: tech.color,
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Animated floating particles */}
      <div className="relative h-4 mt-4 overflow-hidden opacity-50">
        <div 
          className="absolute w-1 h-1 rounded-full bg-primary animate-float"
          style={{ left: "10%", animationDelay: "0s" }}
        />
        <div 
          className="absolute w-1 h-1 rounded-full bg-accent animate-float"
          style={{ left: "30%", animationDelay: "0.5s" }}
        />
        <div 
          className="absolute w-1 h-1 rounded-full bg-primary animate-float"
          style={{ left: "50%", animationDelay: "1s" }}
        />
        <div 
          className="absolute w-1 h-1 rounded-full bg-accent animate-float"
          style={{ left: "70%", animationDelay: "1.5s" }}
        />
        <div 
          className="absolute w-1 h-1 rounded-full bg-primary animate-float"
          style={{ left: "90%", animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};

export default TechStackBadges;
