
import React, { useState, useEffect, useRef } from 'react';

export const CanYouRelate: React.FC = () => {
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

  const painPoints = [
    {
      code: "ERR_01",
      title: "VANISHING BUDGET",
      text: "Capital is being injected into ad platforms without clear attribution or measurable return on investment.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3 1.343 3 3-1.343 3-3 3m0-12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3m0 12V3m0 18v-3" />
        </svg>
      )
    },
    {
      code: "ERR_02",
      title: "DIGITAL STATIC",
      text: "Lack of a unified digital architecture makes it impossible to track leads or maintain brand authority.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.043 9.043 0 0112.728 0m-14.142-4.243a12.586 12.586 0 0117.678 0" />
        </svg>
      )
    },
    {
      code: "ERR_03",
      title: "MARKET DISPLACEMENT",
      text: "Established competitors are aggressively claiming high-intent search traffic and dominating SERP rankings.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      code: "ERR_04",
      title: "DORMANT INTAKE",
      text: "Enquiry volume is suboptimal. Your target audience is unaware of your service deployment capabilities.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-32 lg:py-64 bg-black relative overflow-hidden">
      {/* Technical Background Details */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[250px] pointer-events-none" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-32 gap-8 md:gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-6 md:mb-10 font-jura bg-primary/5">
              System Diagnostics Required
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-0">
              CAN YOU <br /><span className="text-primary italic">RELATE?</span>
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-gray-500 font-sf text-base md:text-lg font-light leading-relaxed border-l-2 border-primary/20 pl-6 md:pl-8">
              Stagnation isn't a business failure—it's an infrastructure error. We identify the bottlenecks preventing your capital from scaling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
          {painPoints.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 md:p-14 bg-[#050505] border border-white/5 rounded-[2rem] md:rounded-[3.5rem] hover:border-primary/50 transition-all duration-700 overflow-hidden flex flex-col"
            >
              {/* Technical Scan Decoration */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D47FF 1px, transparent 0)', backgroundSize: '30px 30px' }} />
              <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-14">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 border border-primary/20 group-hover:rotate-12 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold font-jura text-gray-800 uppercase tracking-[0.4em] border-b border-white/10 pb-1 group-hover:text-primary transition-colors">
                    {item.code}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-jura mb-8 text-white group-hover:text-primary transition-colors uppercase tracking-tight leading-none">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 font-sf font-light text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.text}
                </p>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="w-12 h-[1px] bg-primary/20 group-hover:w-20 group-hover:bg-primary transition-all duration-700" />
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-75" />
                    <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-150" />
                  </div>
                </div>
              </div>

              {/* Holographic Border Flare */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 md:gap-12 py-8 md:py-8 px-8 md:px-16 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group/cta w-full sm:w-auto">
             <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
               <span className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.4em] font-jura mb-2">Ready to re-engineer?</span>
               <h4 className="text-lg md:text-xl font-bold font-jura text-white uppercase tracking-tight">Schedule your initial audit</h4>
             </div>
             <button className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-[0_0_20px_rgba(45,71,255,0.4)]">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
             </button>
             
             {/* Dynamic Light Sweep */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};
