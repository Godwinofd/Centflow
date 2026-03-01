
import React, { useState, useEffect } from 'react';
import { Plasma } from './Plasma';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  isPaidMedia?: boolean;
  metadata?: { label: string; value: string }[];
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, badge, isPaidMedia, metadata }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const dataPills = isPaidMedia 
    ? [
        { text: "ROAS: 4.8X", top: "25%", left: "10%", delay: "0s" },
        { text: "LEAD_FLOW: ACTIVE", top: "70%", left: "15%", delay: "0.2s" },
        { text: "CPC_OPTIMIZED", top: "15%", left: "80%", delay: "0.4s" },
        { text: "SCALE_READY", top: "65%", left: "85%", delay: "0.6s" },
      ]
    : [
        { text: "ESTD: 2024", top: "20%", left: "12%", delay: "0s" },
        { text: "CULTURE: BOLD", top: "75%", left: "18%", delay: "0.2s" },
        { text: "TECH: STACKED", top: "18%", left: "78%", delay: "0.4s" },
        { text: "GOAL: DOMINANCE", top: "70%", left: "82%", delay: "0.6s" },
      ];

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-black border-b border-white/5">
      {/* Deep Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          <Plasma color="#2D47FF" speed={0.2} opacity={0.7} scale={1.2} />
        </div>
        
        {/* Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #2D47FF 1px, transparent 1px),
              linear-gradient(to bottom, #2D47FF 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} 
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.15)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Floating Meta Pills */}
      {dataPills.map((pill, i) => (
        <div 
          key={i}
          className={`absolute hidden lg:flex items-center gap-3 px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-primary/20 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ 
            top: pill.top, 
            left: pill.left, 
            transitionDelay: pill.delay,
            animation: `float-slow ${7 + i}s ease-in-out infinite`
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#2D47FF]" />
          <span className="text-[10px] font-jura font-bold text-white tracking-[0.25em] uppercase">{pill.text}</span>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`max-w-6xl mx-auto text-center transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header Badge */}
          <div className="inline-flex items-center gap-4 px-4 md:px-5 py-1.5 md:py-2 border border-primary/30 rounded-full text-[8px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] text-primary uppercase mb-8 md:mb-12 font-jura bg-primary/10 backdrop-blur-md shadow-[0_0_30px_rgba(45,71,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            {badge || 'System Protocol'}
          </div>
          
          {/* Dynamic Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-8 md:mb-12 text-white uppercase font-anton tracking-tighter leading-[0.9] md:leading-[0.85] text-glow drop-shadow-[0_0_50px_rgba(45,71,255,0.3)] px-2">
            {title.split(' ').map((word, i) => {
              const isHighlight = (i > 5 && isPaidMedia) || (word.toUpperCase() === 'CENTFLOW') || (word.toUpperCase() === 'DOMINANCE');
              return (
                <span key={i} className={isHighlight ? "text-primary italic" : "text-white"}>
                  {word}{' '}
                  {i === Math.floor(title.split(' ').length / 2) && <br className="hidden md:block" />}
                </span>
              );
            })}
          </h1>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
             <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-primary/40" />
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 backdrop-blur-sm relative">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-10" />
             </div>
             <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          {/* Subtitle with specialized About Us styling */}
          <p className="text-lg md:text-3xl text-gray-300 max-w-4xl mx-auto font-sf font-light leading-relaxed mb-12 md:mb-16 px-4">
            {subtitle}
          </p>

          {/* Technical Metadata Bar for About Us */}
          {metadata && (
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 md:pt-12 border-t border-white/10 mt-8 md:mt-12">
              {metadata.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[8px] md:text-[9px] font-bold text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1.5 md:mb-2 font-jura">{item.label}</span>
                  <span className="text-white font-jura text-lg md:text-xl font-bold tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }
      `}</style>
    </section>
  );
};
