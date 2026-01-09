const technologies = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "OpenCV",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

const TechStackBadges = () => {
  const total = technologies.length;
  const angleStep = 360 / total;

  return (
    <div className="mb-16 flex justify-center">
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border border-border/30" />
        <div className="absolute inset-[15%] rounded-full border border-border/20" />
        <div className="absolute inset-[35%] rounded-full border border-border/10" />

        {/* Center dot */}
        <div className="absolute inset-[45%] rounded-full bg-primary/20" />

        {/* Orbiting logos */}
        <div 
          className="absolute inset-0"
          style={{
            animation: 'orbit 60s linear infinite',
          }}
        >
          {technologies.map((tech, index) => {
            const angle = index * angleStep;
            const radius = 42; // percentage from center
            const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
            const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

            return (
              <div
                key={tech.name}
                className="absolute group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-card border border-border/50 p-1.5 md:p-2 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                  style={{
                    animation: 'counter-orbit 60s linear infinite',
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Tooltip */}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counter-orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default TechStackBadges;
