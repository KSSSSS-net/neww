import { useEffect, useState } from "react";

const FLOWERS = ["🌸", "🌺", "🌷", "🌹", "💐", "🌻", "🏵️", "💮"];

interface FloatingFlower {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  swayDuration: number;
  swayDelay: number;
  size: number;
}

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState<FloatingFlower[]>([]);

  useEffect(() => {
    const generated: FloatingFlower[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
      left: Math.random() * 100,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 12,
      swayDuration: 3 + Math.random() * 4,
      swayDelay: Math.random() * 3,
      size: 1.2 + Math.random() * 1.5,
    }));
    setFlowers(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-sway"
          style={{
            left: `${flower.left}%`,
            top: "100%",
            ["--sway-duration" as string]: `${flower.swayDuration}s`,
            ["--sway-delay" as string]: `${flower.swayDelay}s`,
          }}
        >
          <div
            className="animate-float-up"
            style={{
              fontSize: `${flower.size}rem`,
              ["--duration" as string]: `${flower.duration}s`,
              ["--delay" as string]: `${flower.delay}s`,
            }}
          >
            {flower.emoji}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
