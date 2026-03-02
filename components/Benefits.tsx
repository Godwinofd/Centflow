
import React, { useState, useEffect, useRef } from 'react';

export const Benefits: React.FC = () => {
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

  const benefits = [
    {
      id: "01",
      title: "Rapid System Activation",
      description: "We move from audit to active growth infrastructure within 48 hours — without cutting process corners. Speed and structure are not a trade-off.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Data-Led Optimisation",
      description: "Decisions are driven by conversion data, not assumptions. Every campaign and content decision traces back to a measurable impact on enquiry volume.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Search Visibility That Converts",
      description: "We build search presence around high-intent queries — the ones that lead to contact forms, calls, and bookings — not just traffic volume.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Complete Conversion Tracking",
      description: "Every enquiry is attributed to its source with accuracy. You always know which channel is performing, which needs adjustment, and where your next pound of spend should go.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zM9 19h6m-6 0l6-6m0 0v6a2 2 0 002 2h2a2 2 0 00-2-2zm0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-32 lg:py-56 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(45,71,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2D47FF 1px, transparent 1px), linear-gradient(90deg, #2D47FF 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-28 gap-8 md:gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-6 md:mb-10 font-jura bg-primary/5">
              The Centflow Difference
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-0">
              WHY PARTNER <br /><span className="text-primary italic">WITH US?</span>
            </h2>
          </div>
          <div className="lg:max-w-xs lg:mb-4">
            <p className="text-gray-500 font-sf text-sm md:text-base font-light leading-relaxed border-l-2 border-primary/20 pl-6">
              We replace broad marketing activity with structured revenue systems — built specifically around how your business generates enquiries, handles leads, and converts appointments into revenue.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 bg-[#050505] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-primary/50 transition-all duration-700 flex flex-col items-start overflow-hidden shadow-2xl"
            >
              {/* ID Header */}
              <div className="w-full flex justify-between items-center mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-lg">
                  {benefit.icon}
                </div>
                <span className="text-[10px] font-bold font-jura text-gray-800 group-hover:text-primary/40 transition-colors uppercase tracking-widest">
                  SYS_B_{benefit.id}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold font-jura mb-6 text-white group-hover:text-primary transition-colors uppercase tracking-tight leading-none">
                {benefit.title}
              </h3>

              <p className="text-gray-500 font-sf font-light leading-relaxed text-sm group-hover:text-gray-300 transition-colors mb-10">
                {benefit.description}
              </p>

              {/* Visual Indicator */}
              <div className="mt-auto pt-6 border-t border-white/5 w-full">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden w-full">
                  <div className="h-full bg-primary/20 group-hover:bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
              </div>

              {/* Radial Hover Glow */}
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Global Performance Metric */}
        <div className="mt-16 md:mt-24 p-1 rounded-[2rem] md:rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
          <div className="bg-black rounded-[2rem] md:rounded-full py-6 px-8 md:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-24">
            <div className="flex flex-col items-center min-w-[100px]">
              <span className="text-2xl md:text-3xl font-bold font-jura text-white tracking-tighter">100%</span>
              <span className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Full Attribution Tracking</span>
            </div>
            <div className="flex flex-col items-center min-w-[100px]">
              <span className="text-2xl md:text-3xl font-bold font-jura text-white tracking-tighter">48H</span>
              <span className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Audit to Active Deployment</span>
            </div>
            <div className="flex flex-col items-center min-w-[100px]">
              <span className="text-2xl md:text-3xl font-bold font-jura text-white tracking-tighter">3.5×</span>
              <span className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">Avg. Enquiry Return on Ad Spend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
