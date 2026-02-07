import { useState, useCallback, useRef } from "react";

interface RunawayButtonProps {
  onGiveUp?: () => void;
}

const RunawayButton = ({ onGiveUp }: RunawayButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const messages = [
    "No 😢",
    "Are you sure? 🥺",
    "Think again! 💭",
    "Really?? 😭",
    "Please? 🙏",
    "Don't do this! 💔",
    "Nooooo! 😩",
    "Come on! 🌸",
  ];

  const runAway = useCallback(() => {
    const newCount = escapeCount + 1;
    setEscapeCount(newCount);

    // Random position within reasonable bounds
    const maxX = 200;
    const maxY = 150;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setPosition({ x: newX, y: newY });

    if (newCount >= 8 && onGiveUp) {
      onGiveUp();
    }
  }, [escapeCount, onGiveUp]);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: "80px", minWidth: "200px" }}>
      <button
        className="btn-no absolute cursor-pointer select-none whitespace-nowrap"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.15s ease-out",
          left: "50%",
          top: "50%",
          marginLeft: "-60px",
          marginTop: "-24px",
        }}
        onMouseEnter={runAway}
        onTouchStart={runAway}
        onClick={runAway}
      >
        {messages[Math.min(escapeCount, messages.length - 1)]}
      </button>
    </div>
  );
};

export default RunawayButton;
