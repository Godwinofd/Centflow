
import React, { useState, useEffect, useRef } from 'react';

export const TeamStory: React.FC = () => {
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

  return (
    <section className="py-24 md:py-48 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dddvmez6s/image/upload/v1771778141/8ed5c82d-d6ee-475d-b640-84c6e7c1d0d9_erw27l.jpg" 
                alt="Our Creative Environment" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
            {/* Technical Detail Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-3xl shadow-[0_20px_40px_rgba(45,71,255,0.4)] hidden md:block">
               <div className="text-[10px] font-bold font-jura text-white uppercase tracking-[0.4em]">Creative Lab</div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold font-anton text-white leading-tight mb-10 tracking-tighter uppercase">
              We’re a team of passionate creative thinkers, dreamers and <span className="text-primary italic">do-ers.</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-gray-400 font-sf text-lg md:text-xl font-light leading-relaxed">
                We’re all about unravelling the best creative solutions for each and every project we work on. We design brand identity and create beautiful packaging. We craft unique literature and innovative websites. We develop impactful marketing solutions across traditional, digital and social media.
              </p>
              
              <div className="relative py-8">
                <div className="absolute left-0 top-0 w-12 h-1 bg-primary" />
                <p className="text-white font-sf text-xl md:text-2xl font-light italic leading-relaxed">
                  We blend creativity with purpose, crafting visual communications that brands shine.
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-primary font-jura font-bold text-2xl">CORE</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Philosophy</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-jura font-bold text-2xl">VALUE</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Driven</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
