import { useEffect, useState } from "react";

const CONFETTI_FLOWERS = ["🌸", "🌺", "🌷", "🌹", "💐", "🏵️", "💮", "🌼", "💕", "💗", "💖"];

interface ConfettiPiece {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

interface FlowerConfettiProps {
  active: boolean;
}

const FlowerConfetti = ({ active }: FlowerConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) return;

    const burst: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      emoji: CONFETTI_FLOWERS[Math.floor(Math.random() * CONFETTI_FLOWERS.length)],
      left: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 1.5,
      size: 1 + Math.random() * 2,
    }));
    setPieces(burst);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: "-5%",
            fontSize: `${piece.size}rem`,
            ["--confetti-duration" as string]: `${piece.duration}s`,
            ["--confetti-delay" as string]: `${piece.delay}s`,
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
};

export default FlowerConfetti;
