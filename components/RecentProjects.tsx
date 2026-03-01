
import React, { useState, useEffect, useRef } from 'react';

interface RecentProjectsProps {
  standalone?: boolean;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ standalone = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(standalone);
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

  const projects = [
    { 
      id: "CD98-B6AD",
      website: "https://consulting.framer.media",
      title: "Consulting — Business & Agency", 
      cat: "Strategic Consulting / UX", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771379427/Image_18-02-2026_at_01.49_pt5s5z.jpg" 
    },
    { 
      id: "6117-AE6B",
      website: "https://xtract.framer.ai",
      title: "Xtract", 
      cat: "AI Automation Agency", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771427263/Image_18-02-2026_at_15.06_1_l6inni.jpg" 
    },
    { 
      id: "E90E-7C8B",
      website: "https://limitless.framer.photos/?via=hxmzaehsan&utm_source=framer",
      title: "Limitless", 
      cat: "Scale-up Agency", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771427264/Image_18-02-2026_at_15.06_r1yxep.jpg" 
    },
    { 
      id: "8772-5A29",
      website: "https://palmer-template.framer.website",
      title: "Palmer®", 
      cat: "Minimal Portfolio & Agency", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771427265/Screenshot_2026-02-18_at_15.05.39_jkl6qo.png" 
    },
    { 
      id: "6A09-E80F",
      website: "https://civitas.framer.website",
      title: "Civitas", 
      cat: "Law & Legal Services", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771427165/Image_18-02-2026_at_15.04_u28fml.jpg" 
    },
    { 
      id: "37C9-D31A",
      website: "https://artemis1.framer.website",
      title: "Artemis", 
      cat: "Modern Designer Portfolio", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771426893/Image_18-02-2026_at_15.01_uayfa4.jpg" 
    },
    { 
      id: "ACB5-8DBE",
      website: "https://nubien.framer.website",
      title: "Nubien", 
      cat: "Premium AI Agency & Studio", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771427472/Image_18-02-2026_at_15.10_rvwaed.jpg" 
    },
    { 
      id: "STRONGX",
      website: "https://strongx.framer.website",
      title: "StrongX", 
      cat: "Fitness Ecosystem", 
      img: "https://res.cloudinary.com/dddvmez6s/image/upload/v1771427776/Image_18-02-2026_at_15.15_hbuo9w.jpg" 
    }
  ];

  const handleNavigate = (target: string) => {
    if (target.startsWith('http')) {
      window.open(target, '_blank');
      return;
    }
    const currentHost = window.location.host;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
    if (uuidRegex.test(currentHost)) {
      const newHost = currentHost.replace(uuidRegex, target);
      window.open(`${window.location.protocol}//${newHost}`, '_blank');
    } else {
      window.open(`/${target}`, '_blank');
    }
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className={`${standalone ? 'py-12 md:py-24' : 'py-16 md:py-32 lg:py-64'} bg-black relative overflow-hidden ${!standalone && 'border-t border-white/5'}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(45,71,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D47FF 1px, transparent 0)', backgroundSize: '60px 60px' }} />

      <div 
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {!standalone && (
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-6 md:mb-8 font-jura bg-primary/5">
                Production Environment
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-anton text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-0">
                RECENT <br /><span className="text-primary italic">DEPLOYMENTS</span>
              </h2>
            </div>
            <div className="lg:max-w-xs lg:mb-4">
              <p className="text-gray-500 font-sf text-sm md:text-base font-light leading-relaxed border-l-2 border-primary/20 pl-6">
                A curated log of high-performance infrastructures engineered for our elite partners.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-700">
          {visibleProjects.map((p) => (
            <div 
              key={p.id} 
              onClick={() => handleNavigate(p.website)}
              className="group relative flex flex-col bg-[#050505] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-primary/50 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[8px] font-bold font-jura text-white tracking-[0.2em] uppercase">
                    DEPLOY_{p.id}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                    <span className="text-[8px] font-bold font-jura text-white tracking-widest uppercase">LIVE_STATUS: OK</span>
                  </div>
                </div>
                {/* View Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8 md:mb-10">
                  <p className="text-primary text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] mb-2 font-jura">{p.cat}</p>
                  <h4 className="text-lg md:text-2xl font-bold font-jura text-white uppercase tracking-tight leading-none h-[2em] flex items-center group-hover:text-primary transition-colors">{p.title}</h4>
                </div>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3 group/btn">
                    <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em] font-jura group-hover/btn:text-primary transition-colors">View Deployment</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-500">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-[7px] font-mono text-gray-800 uppercase tracking-widest text-right leading-none">
                    DATA_SRC: AUTH<br />
                    RT: INT_GRID
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {!standalone && (
          <div className="mt-20 text-center">
             <button 
                onClick={() => setShowAll(!showAll)}
                className="group relative px-10 py-5 border border-white/10 text-white font-bold text-[10px] rounded-full overflow-hidden transition-all hover:border-primary/50 active:scale-95 font-jura uppercase tracking-[0.5em] shadow-2xl"
             >
                <span className="relative z-10">
                  {showAll ? "Minimize Infrastructure" : "Access Full Portfolio"}
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
             </button>
          </div>
        )}
      </div>
    </section>
  );
};
