import { useParallax } from "@/hooks/useScrollAnimation";
import FlyingBirds from "./FlyingBirds";

const LightModeBackground = () => {
  const scrollY = useParallax();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            hsl(200 100% 85%) 0%, 
            hsl(200 90% 75%) 30%, 
            hsl(195 85% 70%) 60%, 
            hsl(190 80% 65%) 100%
          )`,
        }}
      />

      {/* Sun */}
      <div
        className="absolute w-32 h-32 rounded-full"
        style={{
          top: '10%',
          right: '15%',
          background: `radial-gradient(circle, 
            hsl(45 100% 70%) 0%, 
            hsl(40 100% 60%) 50%, 
            hsl(35 100% 55%) 100%
          )`,
          boxShadow: `
            0 0 60px hsl(45 100% 70% / 0.8),
            0 0 120px hsl(40 100% 60% / 0.5),
            0 0 200px hsl(35 100% 55% / 0.3)
          `,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Sun rays */}
      <div
        className="absolute w-48 h-48 rounded-full opacity-30"
        style={{
          top: '8%',
          right: '12%',
          background: `radial-gradient(circle, 
            hsl(45 100% 80% / 0.4) 0%, 
            transparent 70%
          )`,
          transform: `translateY(${scrollY * 0.1}px)`,
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Clouds */}
      <div
        className="absolute"
        style={{
          top: '15%',
          left: '10%',
          transform: `translateX(${scrollY * 0.05}px)`,
        }}
      >
        <Cloud size={120} opacity={0.9} />
      </div>
      
      <div
        className="absolute"
        style={{
          top: '8%',
          left: '35%',
          transform: `translateX(${scrollY * 0.08}px)`,
        }}
      >
        <Cloud size={100} opacity={0.85} />
      </div>

      <div
        className="absolute"
        style={{
          top: '20%',
          left: '55%',
          transform: `translateX(${scrollY * 0.03}px)`,
        }}
      >
        <Cloud size={80} opacity={0.8} />
      </div>

      <div
        className="absolute"
        style={{
          top: '5%',
          left: '75%',
          transform: `translateX(${scrollY * 0.06}px)`,
        }}
      >
        <Cloud size={90} opacity={0.75} />
      </div>

      {/* Animated floating clouds */}
      <div
        className="absolute animate-drift"
        style={{
          top: '25%',
          left: '5%',
        }}
      >
        <Cloud size={70} opacity={0.7} />
      </div>

      <div
        className="absolute animate-float"
        style={{
          top: '12%',
          right: '40%',
          animationDelay: '-3s',
        }}
      >
        <Cloud size={60} opacity={0.65} />
      </div>

      {/* Colorful accent orbs */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
        style={{
          top: '30%',
          left: '10%',
          background: 'hsl(280 70% 60%)',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-15"
        style={{
          top: '50%',
          right: '15%',
          background: 'hsl(340 80% 65%)',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-18"
        style={{
          bottom: '20%',
          left: '30%',
          background: 'hsl(200 80% 55%)',
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* Flying Birds */}
      <FlyingBirds />

      {/* Bottom gradient for content readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            hsl(var(--background) / 0.1) 40%,
            hsl(var(--background) / 0.4) 70%,
            hsl(var(--background) / 0.8) 90%,
            hsl(var(--background)) 100%
          )`,
        }}
      />
    </div>
  );
};

const Cloud = ({ size = 100, opacity = 0.9 }: { size?: number; opacity?: number }) => (
  <div
    className="relative"
    style={{
      width: size,
      height: size * 0.6,
      opacity,
    }}
  >
    {/* Main cloud body */}
    <div
      className="absolute rounded-full"
      style={{
        width: size * 0.5,
        height: size * 0.5,
        left: size * 0.25,
        bottom: 0,
        background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 30% 96%) 100%)',
        boxShadow: '0 4px 20px hsl(210 30% 90% / 0.5)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: size * 0.4,
        height: size * 0.4,
        left: size * 0.05,
        bottom: size * 0.05,
        background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 30% 96%) 100%)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: size * 0.45,
        height: size * 0.45,
        right: size * 0.05,
        bottom: size * 0.08,
        background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 30% 96%) 100%)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: size * 0.35,
        height: size * 0.35,
        left: size * 0.35,
        top: 0,
        background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 30% 98%) 100%)',
      }}
    />
  </div>
);

export default LightModeBackground;
