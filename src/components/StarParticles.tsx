import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const StarParticles = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starArray: Star[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.3)`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: '15%',
          left: '10%',
          animation: 'shootingStar 6s linear infinite',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: '25%',
          left: '60%',
          animation: 'shootingStar 8s linear infinite',
          animationDelay: '5s',
        }}
      />
      <div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: '10%',
          left: '80%',
          animation: 'shootingStar 7s linear infinite',
          animationDelay: '8s',
        }}
      />
      
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          15% {
            transform: translateX(200px) translateY(200px) rotate(45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(200px) translateY(200px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default StarParticles;
