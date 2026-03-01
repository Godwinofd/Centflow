
import React, { useState, useEffect, useRef } from 'react';

interface CaseStudy {
  id: string;
  industry: string;
  client: string;
  task: string;
  strategy: string;
  metrics: { label: string; value: string; color: string; percent: number }[];
  image: string;
}

export const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const cases: CaseStudy[] = [
    {
      id: "LOG-042",
      industry: "E-Commerce",
      client: "Coving Direct",
      task: "Increase sales volume by 50% while maintaining target ROAS.",
      strategy: "Deployed a full-funnel Meta & Google Ads ecosystem paired with an optimized VSL-style conversion landing page.",
      metrics: [
        { label: "CPA Reduction", value: "-65%", color: "#2D47FF", percent: 85 },
        { label: "Conversion Rate", value: "+72%", color: "#2D47FF", percent: 72 },
        { label: "ROAS Increase", value: "x4.2", color: "#2D47FF", percent: 94 }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const successLogos = [
    "https://res.cloudinary.com/dddvmez6s/image/upload/v1771774239/Image_22-02-2026_at_15.29_g1b82u.jpg",
    "https://res.cloudinary.com/dddvmez6s/image/upload/v1771774213/Image_22-02-2026_at_15.29_1_pcoxpm.jpg",
    "https://res.cloudinary.com/dddvmez6s/image/upload/v1771774213/Image_22-02-2026_at_15.29_2_j2gap9.jpg"
  ];

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

  return (
    <section ref={sectionRef} className="py-32 md:py-64 bg-black relative overflow-hidden border-b border-white/5">
      {/* Structural Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2D47FF 1px, transparent 1px), linear-gradient(90deg, #2D47FF 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div 
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-primary/20 rounded-full text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-8 font-jura bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Deployment Results
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-white uppercase tracking-tighter leading-[0.85] mb-4">
              PROVEN <br /><span className="text-primary italic">SUCCESS</span>
            </h2>
          </div>
          <div className="lg:mb-4">
            <p className="text-gray-500 font-sf text-xl font-light max-w-sm leading-relaxed border-l border-primary/30 pl-8">
              Documented performance logs from our most recent infrastructure deployments.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
          {/* Metadata & Metrics Side */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold font-jura text-gray-400 tracking-widest uppercase">{cases[0].id}</span>
                <span className="w-8 h-[1px] bg-white/10" />
                <span className="text-primary font-jura font-bold text-xs tracking-widest uppercase">{cases[0].industry}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold font-jura text-white mb-6 uppercase tracking-tight">{cases[0].client}</h3>
              <p className="text-gray-400 font-sf text-xl font-light leading-relaxed mb-8">
                {cases[0].task}
              </p>
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:border-primary/30 transition-all">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 font-jura">Strategy Applied</p>
                <p className="text-white/80 font-sf font-light leading-relaxed italic text-lg">"{cases[0].strategy}"</p>
              </div>
            </div>

            <div className="space-y-6">
              {cases[0].metrics.map((metric, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] font-jura">{metric.label}</span>
                    <span className="text-3xl font-bold font-jura text-primary tracking-tighter">{metric.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary shadow-[0_0_15px_rgba(45,71,205,0.5)] transition-all duration-[2000ms] ease-out delay-500"
                      style={{ width: isVisible ? `${metric.percent}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Side */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] pointer-events-none group-hover:border-primary/30 transition-all duration-700" />
            <div className="absolute top-0 right-0 p-8 text-primary/20 text-[120px] font-bold font-jura leading-none pointer-events-none">
              #01
            </div>

            <div className="aspect-[16/10] bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
              <img 
                src={cases[0].image} 
                alt={cases[0].client} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-primary mb-4" />
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-jura">Status</div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest font-jura">Verified Deployment</span>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="text-[8px] font-mono text-primary/40 text-right leading-tight uppercase">
                    SYS.LOG_ACCESS: GRANTED<br />
                    DATA_ENCRYPTION: AES-256<br />
                    TRAFFIC_SRC: MULTI_CHANNEL
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/20 rounded-full animate-ping pointer-events-none" />
            </div>
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
          </div>
        </div>

        {/* Partner Logos Row */}
        <div className="pt-16 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold font-jura text-gray-600 uppercase tracking-[0.5em]">
              Market Authority Verified
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {successLogos.map((logo, i) => (
              <div key={i} className="group relative w-32 md:w-40 lg:w-48 h-20 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Market Partner ${i + 1}`} 
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 mix-blend-screen"
                  style={{
                    filter: 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.1)'
                  }}
                />
                <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all rounded-full scale-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
