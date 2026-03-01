
import React, { useEffect, useRef, useState } from 'react';

export const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { title: "Audit & Discover", desc: "Data deep dive to find low-hanging fruit." },
    { title: "Strategy Phase", desc: "Bespoke roadmap built for growth targets." },
    { title: "Execution", desc: "Specialists launch high-performance campaigns." },
    { title: "Optimize & Scale", desc: "Continuous testing to ensure maximum profit." }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-32 lg:py-48 bg-black relative overflow-hidden">
      <div 
        style={{ 
          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)', 
          transitionDelay: '500ms',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-center mb-16 md:mb-28 uppercase tracking-tighter text-white leading-[0.9] md:leading-[0.85]">
          OUR <span className="text-primary italic">PROCESS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-primary/10 z-0 overflow-hidden">
            <div 
              className={`h-full bg-primary shadow-[0_0_15px_#2D47FF] transition-all duration-[1500ms] ease-in-out delay-[1000ms]`}
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-black border-[1px] border-primary/30 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                <span className="text-4xl font-bold font-jura text-white">0{i + 1}</span>
              </div>
              <h4 className="text-2xl font-bold font-jura mb-6 text-white uppercase">{step.title}</h4>
              <p className="text-gray-500 font-sf font-light text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
