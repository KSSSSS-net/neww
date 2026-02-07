import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import FlowerConfetti from "@/components/FlowerConfetti";

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const yesScale = 1 + noCount * 0.4;

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);
  };

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-valentine-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      <FlowerConfetti active={showConfetti} />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {!accepted ? (
          <div className="animate-fade-in">
            <div className="text-7xl mb-6 animate-pulse-heart">💕</div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-valentine-pink mb-4 leading-tight">
              Tanushree!
            </h1>

            <p className="font-display text-3xl sm:text-4xl text-foreground mb-2">
              Will you be my
            </p>
            <p className="font-display text-5xl sm:text-6xl text-valentine-rose mb-12 animate-pulse-heart">
              Valentine? 💗
            </p>

            <div className="flex items-center justify-center gap-6 relative">
              <div className="animate-float-button relative z-10">
                <button
                  className="btn-yes cursor-pointer"
                  onClick={handleYes}
                  style={{
                    transform: `scale(${yesScale})`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  Yes! 💖
                </button>
              </div>

              <div className="animate-float-button" style={{ animationDelay: "0.4s" }}>
                <button className="btn-no cursor-pointer" onClick={handleNo}>
                  No 😢
                </button>
              </div>
            </div>

          </div>
        ) : (
          <div className="transition-all duration-700 ease-out animate-fade-in">
            <div className="text-8xl mb-6">🥰</div>

            <h1 className="font-display text-5xl sm:text-7xl text-valentine-pink mb-6">
              Yaaay! 🎉
            </h1>

            <p className="font-display text-3xl sm:text-4xl text-foreground mb-4">
              I knew you'd say yes!
            </p>

            <p className="font-body text-xl text-muted-foreground mb-8">
              You just made me the happiest person ever! 💕
            </p>

            <div className="text-6xl animate-pulse-heart">
              💖✨💖
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
