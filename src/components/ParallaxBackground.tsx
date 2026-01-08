import { useParallax } from "@/hooks/useScrollAnimation";
import { useTheme } from "@/hooks/useTheme";
import spaceBackground from "@/assets/space-background.jpg";
import LightModeBackground from "./LightModeBackground";
import StarParticles from "./StarParticles";

const ParallaxBackground = () => {
  const scrollY = useParallax();
  const { theme } = useTheme();

  if (theme === "light") {
    return <LightModeBackground />;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Space background with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${spaceBackground})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Star Particles */}
      <StarParticles />

      {/* Overlay gradients for smooth section transitions */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              hsl(var(--background) / 0.3) 20%,
              hsl(var(--background) / 0.5) 40%,
              hsl(var(--background) / 0.7) 60%,
              hsl(var(--background) / 0.85) 80%,
              hsl(var(--background)) 100%
            )
          `,
        }}
      />

      {/* Subtle animated glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] animate-drift"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] animate-float"
        style={{ 
          animationDelay: "-4s",
          transform: `translateY(${scrollY * 0.1}px)` 
        }}
      />
      <div
        className="absolute top-2/3 right-1/6 w-[300px] h-[300px] rounded-full bg-[hsl(var(--glow-pink))]/3 blur-[100px] animate-drift"
        style={{ 
          animationDelay: "-8s",
          transform: `translateY(${scrollY * 0.2}px)` 
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
    </div>
  );
};

export default ParallaxBackground;
