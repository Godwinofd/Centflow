import React, { useEffect, useState, useRef } from 'react';

const PILL_DATA = [
  { text: "ROI +300%", size: "scale-100", speed: 0.05, top: "20%", left: "15%", color: "bg-primary" },
  { text: "SCALE", size: "scale-75", speed: 0.03, top: "15%", left: "75%", color: "bg-white/10" },
  { text: "CONVERT", size: "scale-110", speed: 0.08, top: "60%", left: "10%", color: "bg-white/5" },
  { text: "ADS", size: "scale-90", speed: 0.04, top: "75%", left: "80%", color: "bg-primary/20" },
  { text: "GROWTH", size: "scale-125", speed: 0.06, top: "40%", left: "85%", color: "bg-white/10" },
  { text: "FLOW", size: "scale-75", speed: 0.02, top: "85%", left: "30%", color: "bg-white/5" },
];

export const HeroBackgroundUI: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-200"></div>
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {PILL_DATA.map((pill, i) => (
        <div
          key={i}
          className={`absolute transition-transform duration-700 ease-out ${pill.size} hidden md:block`}
          style={{
            top: pill.top,
            left: pill.left,
            transform: `translate(${mousePos.x * pill.speed * 20}px, ${mousePos.y * pill.speed * 20}px) rotate(${mousePos.x * 0.1}deg)`,
          }}
        >
          <div className={`
            px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl
            flex items-center justify-center font-jura font-bold text-[10px] tracking-[0.3em] uppercase
            ${pill.color} text-white whitespace-nowrap
            animate-float
          `}
          style={{ animationDelay: `${i * 0.8}s` }}>
            {pill.text}
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
