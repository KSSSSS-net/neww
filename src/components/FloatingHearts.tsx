import { useEffect, useState } from "react";

const HEARTS = ["❤️", "💛", "💗", "💖", "💕", "💞", "💓", "🧡", "💘"];

interface FloatingHeart {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  swayDuration: number;
  swayDelay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generated: FloatingHeart[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 14,
      delay: Math.random() * 10,
      swayDuration: 3 + Math.random() * 5,
      swayDelay: Math.random() * 3,
      size: 1 + Math.random() * 1.4,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-sway"
          style={{
            left: `${heart.left}%`,
            top: "100%",
            ["--sway-duration" as string]: `${heart.swayDuration}s`,
            ["--sway-delay" as string]: `${heart.swayDelay}s`,
          }}
        >
          <div
            className="animate-float-up"
            style={{
              fontSize: `${heart.size}rem`,
              ["--duration" as string]: `${heart.duration}s`,
              ["--delay" as string]: `${heart.delay}s`,
            }}
          >
            {heart.emoji}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
