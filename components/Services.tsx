
import React, { useState, useEffect, useRef } from 'react';

export const Services: React.FC = () => {
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

  const services = [
    { 
      id: "CF-01",
      title: "Webdesign / Development", 
      desc: "Increase your web traffic/conversion with Centflow's award winning web development/design.", 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 
    },
    { 
      id: "CF-02",
      title: "Paid Media", 
      desc: "Book out your calendar with high quality jobs for the next 6 months using Meta and Google Ads.", 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg> 
    },
    { 
      id: "CF-03",
      title: "SEO / GEO", 
      desc: "Rank top of google with our expertise in keyword research and company awareness.", 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> 
    },
    { 
      id: "CF-04",
      title: "AI Automations", 
      desc: "Automate your daily tasks and enquiry intake with Centflow's high level of expertise.", 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> 
    },
    { 
      id: "CF-05",
      title: "Brandscaling", 
      desc: "Scale your e-commerce brand with Centflow's expertise in conversion optimisation.", 
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> 
    }
  ];

  return (
    <section className="py-16 md:py-32 lg:py-40 bg-black relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D47FF 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-4 md:mb-6 font-jura bg-primary/5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                Technical Capabilities
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-white uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
                GROWTH <br /><span className="text-primary italic">INFRASTRUCTURE</span>
              </h2>
            </div>
            <div className="lg:mb-4">
              <p className="text-gray-500 font-sf text-sm md:text-base font-light max-w-sm leading-relaxed">
                Precision-engineered systems designed to dominate market share and drive scalable revenue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group relative bg-white/[0.01] border border-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-primary/50 transition-all duration-700 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-6 right-8 text-[8px] font-bold font-jura text-gray-700 tracking-widest group-hover:text-primary/50 transition-colors">
                  {service.id}
                </div>

                <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 mb-8 border border-white/5 group-hover:border-primary/50 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-jura mb-6 text-white group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">
                    {service.title.split(' / ').map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        {index === 0 && service.title.includes(' / ') && <span className="text-gray-800 mx-1">/</span>}
                      </React.Fragment>
                    ))}
                  </h3>
                  
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors font-sf text-sm font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-primary text-[9px] font-bold uppercase tracking-[0.3em] font-jura cursor-pointer group/link">
                      <span className="relative overflow-hidden inline-block">
                        <span className="block group-hover/link:-translate-y-full transition-transform duration-300">Explore</span>
                        <span className="absolute top-full left-0 block group-hover/link:-translate-y-full transition-transform duration-300">Detail</span>
                      </span>
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
