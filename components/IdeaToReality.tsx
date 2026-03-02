
import React, { useState, useEffect, useRef } from 'react';

interface IdeaToRealityProps {
  onNavigate: (page?: string) => void;
}


export const IdeaToReality: React.FC<IdeaToRealityProps> = ({ onNavigate }) => {
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

  const features = [
    { title: "Conversion-first websites", desc: "Every page is structured around one objective: turning visitors into qualified enquiries." },
    { title: "SEO architecture that compounds", desc: "Search visibility designed to attract high-intent prospects month after month." },
    { title: "Paid media tied to revenue", desc: "Campaigns engineered around booked enquiries — not impressions or vanity metrics." },
    { title: "AI-powered lead capture & follow-up", desc: "Instant responses and automated nurturing so no opportunity goes cold." },
  ];

  return (
    <section className="py-16 md:py-32 lg:py-48 bg-black relative overflow-hidden border-b border-white/5">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div
        ref={ref}
        style={{
          transition: 'all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side - Now on Left for Desktop */}
          <div className="order-1 lg:order-1 relative">
            <div className="aspect-square relative rounded-[3rem] overflow-hidden border border-white/10 group">
              <img
                src="https://res.cloudinary.com/dddvmez6s/image/upload/v1771191558/vitaly-gariev-lZXX-QVdyXY-unsplash_q5qjrs.jpg"
                alt="Web Design Transformation"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Floating Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 blur-[60px] rounded-full" />
            </div>

            {/* Subtle UI Accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-[2rem]" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-[2rem]" />
          </div>

          {/* Text Content - Now on Right for Desktop */}
          <div className="order-2 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold tracking-widest text-white uppercase mb-8 font-jura">
              HOW WE BUILD GROWTH
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-white leading-[0.9] md:leading-[0.85] mb-8 md:mb-10 tracking-tighter uppercase">
              Built to{' '}
              <span className="relative inline-block px-3 md:px-4 py-1 mx-1 -rotate-1 bg-primary text-white shadow-[0_0_25px_rgba(45,71,255,0.4)]">
                Convert.
              </span>{' '}
              Engineered{' '}
              <span className="relative inline-block px-3 md:px-4 py-1 mx-1 rotate-1 bg-primary text-white shadow-[0_0_25px_rgba(45,71,255,0.4)]">
                to Scale.
              </span>
            </h2>

            <p className="text-gray-400 font-sf text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-xl">
              Most service businesses don't lack traffic — they lack structure.<br /><br />
              Slow websites, unclear messaging, and inconsistent follow-up quietly erode revenue.<br /><br />
              We design the complete growth infrastructure — from first click to confirmed booking — so every touchpoint is built to convert.
            </p>

            <ul className="space-y-5 mb-12">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-sf text-base font-light group-hover:text-white transition-colors">
                    <span className="text-white font-semibold">{feature.title}</span> — {feature.desc}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onNavigate('How It Works')}
              className="group relative px-10 py-5 bg-primary text-white font-bold text-xs rounded-xl overflow-hidden transition-all shadow-[0_15px_35px_rgba(45,71,255,0.3)] hover:shadow-[0_20px_50px_rgba(45,71,255,0.5)] active:scale-95 font-jura uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="relative z-10">See How It Works</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
