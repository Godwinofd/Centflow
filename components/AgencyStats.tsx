
import React, { useState, useEffect, useRef } from 'react';

export const AgencyStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "5+", label: "STAFF" },
    { value: "2+", label: "YEARS OF EXPERIENCE" },
    { value: "50+", label: "CLIENTS SERVED AND GROWING!" },
    { value: "90%", label: "RETENTION RATE" }
  ];

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 bg-black border-y border-white/5 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div 
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 items-start">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <span className="text-6xl md:text-8xl font-bold font-anton text-primary tracking-tighter leading-none transition-transform duration-500 group-hover:scale-110 block">
                  {stat.value}
                </span>
                {/* Visual Accent Line */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary/20 group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
              </div>
              
              <span className="text-white font-jura text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase max-w-[180px] leading-relaxed pt-4 transition-colors group-hover:text-primary">
                {stat.label}
              </span>
              
              {/* Technical Deco */}
              <div className="mt-8 flex gap-1 opacity-20">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <div className="w-4 h-[1px] bg-primary my-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
