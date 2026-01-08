import { useEffect, useState } from "react";

interface Bird {
  id: number;
  startX: number;
  startY: number;
  speed: number;
  size: number;
  delay: number;
}

const FlyingBirds = () => {
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    const birdArray: Bird[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startX: -100 - Math.random() * 200,
      startY: 5 + Math.random() * 25,
      speed: 15 + Math.random() * 10,
      size: 12 + Math.random() * 8,
      delay: Math.random() * 20,
    }));
    setBirds(birdArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="absolute"
          style={{
            top: `${bird.startY}%`,
            left: `${bird.startX}px`,
            animation: `flyAcross ${bird.speed}s linear ${bird.delay}s infinite`,
          }}
        >
          <BirdShape size={bird.size} />
        </div>
      ))}
      
      <style>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(30vw) translateY(-10px);
          }
          50% {
            transform: translateX(60vw) translateY(5px);
          }
          75% {
            transform: translateX(90vw) translateY(-5px);
          }
          100% {
            transform: translateX(120vw) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const BirdShape = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 24 12"
    fill="none"
    className="animate-[flapWings_0.3s_ease-in-out_infinite]"
  >
    <path
      d="M12 6 C8 2, 4 0, 0 2 C4 4, 8 4, 12 6 C16 4, 20 4, 24 2 C20 0, 16 2, 12 6"
      fill="hsl(220 15% 25%)"
      opacity="0.7"
    />
    <style>{`
      @keyframes flapWings {
        0%, 100% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.6);
        }
      }
    `}</style>
  </svg>
);

export default FlyingBirds;
