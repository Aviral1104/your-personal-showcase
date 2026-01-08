import { useState } from "react";

interface TechItem {
  name: string;
  logo: string;
  color: string;
  bgColor: string;
}

const technologies: TechItem[] = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "hsl(207 89% 50%)",
    bgColor: "hsl(207 89% 50% / 0.15)",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "hsl(15 85% 55%)",
    bgColor: "hsl(15 85% 55% / 0.15)",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "hsl(211 60% 48%)",
    bgColor: "hsl(211 60% 48% / 0.15)",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "hsl(50 95% 50%)",
    bgColor: "hsl(50 95% 50% / 0.15)",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    color: "hsl(25 95% 55%)",
    bgColor: "hsl(25 95% 55% / 0.15)",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    color: "hsl(15 90% 55%)",
    bgColor: "hsl(15 90% 55% / 0.15)",
  },
  {
    name: "OpenCV",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    color: "hsl(120 70% 40%)",
    bgColor: "hsl(120 70% 40% / 0.15)",
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "hsl(210 75% 55%)",
    bgColor: "hsl(210 75% 55% / 0.15)",
  },
  {
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "hsl(260 50% 50%)",
    bgColor: "hsl(260 50% 50% / 0.15)",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    color: "hsl(35 95% 50%)",
    bgColor: "hsl(35 95% 50% / 0.15)",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "hsl(200 80% 50%)",
    bgColor: "hsl(200 80% 50% / 0.15)",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "hsl(15 85% 50%)",
    bgColor: "hsl(15 85% 50% / 0.15)",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "hsl(165 75% 45%)",
    bgColor: "hsl(165 75% 45% / 0.15)",
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    color: "hsl(0 0% 60%)",
    bgColor: "hsl(0 0% 60% / 0.15)",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "hsl(120 50% 45%)",
    bgColor: "hsl(120 50% 45% / 0.15)",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "hsl(200 85% 45%)",
    bgColor: "hsl(200 85% 45% / 0.15)",
  },
];

const TechStackBadges = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Double the array for seamless infinite scroll
  const doubledTech = [...technologies, ...technologies];

  return (
    <div className="mb-20">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <span className="text-xl">🛠️</span>
        </div>
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
            Tech Stack
          </h3>
          <p className="text-sm text-muted-foreground">Technologies I work with</p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Row 1 - Left to Right */}
        <div 
          className="flex gap-4 mb-4"
          style={{
            animation: isPaused ? 'none' : 'scrollLeft 30s linear infinite',
          }}
        >
          {doubledTech.slice(0, 16).map((tech, index) => (
            <TechCard
              key={`row1-${index}`}
              tech={tech}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Scrolling Row 2 - Right to Left */}
        <div 
          className="flex gap-4"
          style={{
            animation: isPaused ? 'none' : 'scrollRight 35s linear infinite',
          }}
        >
          {doubledTech.slice(8, 24).map((tech, index) => (
            <TechCard
              key={`row2-${index}`}
              tech={tech}
              index={index + 100}
              isHovered={hoveredIndex === index + 100}
              onHover={() => setHoveredIndex(index + 100)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

interface TechCardProps {
  tech: TechItem;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TechCard = ({ tech, isHovered, onHover, onLeave }: TechCardProps) => (
  <div
    className="flex-shrink-0 group cursor-pointer"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div
      className="relative flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300"
      style={{
        backgroundColor: isHovered ? tech.bgColor : 'hsl(var(--card))',
        borderColor: isHovered ? tech.color : 'hsl(var(--border))',
        transform: isHovered ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? `0 15px 40px ${tech.color}40, 0 0 20px ${tech.color}20` 
          : '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-2xl"
        style={{ backgroundColor: tech.color }}
      />
      
      {/* Logo */}
      <div 
        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg p-1.5 transition-transform duration-300"
        style={{
          backgroundColor: isHovered ? `${tech.color}20` : 'transparent',
          transform: isHovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0) scale(1)',
        }}
      >
        <img 
          src={tech.logo} 
          alt={tech.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      {/* Name */}
      <span 
        className="font-semibold text-sm md:text-base whitespace-nowrap transition-colors duration-300"
        style={{ color: isHovered ? tech.color : 'hsl(var(--foreground))' }}
      >
        {tech.name}
      </span>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div 
            className="absolute w-1.5 h-1.5 rounded-full animate-ping"
            style={{ 
              backgroundColor: tech.color,
              top: '10%',
              right: '15%',
              animationDuration: '1s',
            }}
          />
          <div 
            className="absolute w-1 h-1 rounded-full animate-ping"
            style={{ 
              backgroundColor: tech.color,
              bottom: '15%',
              left: '10%',
              animationDuration: '1.5s',
            }}
          />
        </>
      )}
    </div>
  </div>
);

export default TechStackBadges;
