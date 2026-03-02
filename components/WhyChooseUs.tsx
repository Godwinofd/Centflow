
import React, { useState, useEffect, useRef } from 'react';

export const WhyChooseUs: React.FC = () => {
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
    <section className="py-24 md:py-48 bg-black relative overflow-hidden border-b border-white/5">
      {/* Technical Background Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D47FF 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-[1200ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-10 font-jura">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              THE OPERATING MODEL
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-anton text-white leading-[0.9] mb-8 tracking-tighter uppercase">
              Infrastructure Built <br />
              <span className="text-primary italic relative">
                For Revenue.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 blur-sm" />
              </span>
            </h2>

            <p className="text-gray-500 font-sf text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
              Centflow operates as a growth systems partner — not a campaign executor. Every engagement begins with a structured audit, delivers a defined architecture, and is measured against one consistent benchmark: qualified enquiries and booked revenue. Each month, you know exactly what's performing, what's been optimised, and what comes next.
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Revenue-First Evaluation", desc: "Every system we build is measured against enquiry volume and booking rate. If a channel isn't producing revenue, it gets restructured." },
                { title: "Attribution at Every Touchpoint", desc: "From first search to submitted form, every step is tracked. You receive complete visibility into which channels and pages are generating your highest-value enquiries." },
                { title: "Defined Rollout Process", desc: "We follow a fixed deployment sequence — audit, design, build, activate — with clear milestones at each stage. No scope drift, no ambiguity." },
                { title: "Monthly Performance Reviews", desc: "Each month delivers a structured report: what converted, what was adjusted, what's being tested, and where growth is heading. Clear data, plain language." },
              ].map((pillar, i) => (
                <div key={i} className="group p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    <span className="text-[10px] font-bold font-jura uppercase tracking-widest text-primary">{pillar.title}</span>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-400 font-sf text-sm font-light leading-relaxed transition-colors">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap gap-6 mb-10 py-6 border-t border-b border-white/5">
              {[
                { stat: "48hrs", label: "Audit to growth plan delivery" },
                { stat: "100%", label: "Enquiry attribution tracked" },
                { stat: "3× avg", label: "Enquiry volume within 90 days" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold font-anton text-primary tracking-tight">{m.stat}</span>
                  <span className="text-[10px] font-sf text-gray-500 uppercase tracking-widest mt-1">{m.label}</span>
                </div>
              ))}
            </div>

            <a href="https://calendar.app.google/nxhNSQ1mE7rXg7Lu7" target="_blank" rel="noopener noreferrer" className="group relative px-10 py-5 bg-primary text-white font-bold text-xs rounded-full overflow-hidden transition-all shadow-[0_15px_40px_rgba(45,71,255,0.3)] hover:shadow-[0_20px_60px_rgba(45,71,255,0.5)] active:scale-95 font-jura uppercase tracking-[0.3em] flex items-center gap-4 inline-flex">
              <span className="relative z-10">Book a Discovery Call</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </a>
          </div>

          {/* iPhone Mockup Side */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] animate-float-slow">
              {/* Dynamic Glow */}
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full scale-90 opacity-50" />

              {/* iPhone 16 Pro Style Frame */}
              <div className="relative rounded-[3.5rem] p-2 bg-[#1a1a1a] border-[1px] border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19.5] transform rotate-[4deg] group hover:rotate-0 transition-transform duration-1000 ease-out">
                {/* Steel Bezel Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />

                {/* Screen Container */}
                <div className="w-full h-full rounded-[2.8rem] bg-[#fdfdfd] overflow-hidden relative border border-white/5 ring-1 ring-black shadow-inner">
                  {/* User provided dashboard image */}
                  <img
                    src="https://res.cloudinary.com/dddvmez6s/image/upload/v1771763567/Image_22-02-2026_at_12.26_mwsxdk.jpg"
                    alt="Centflow Results Dashboard"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                  />

                  {/* Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Dynamic Island Notch */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 border border-white/5 flex items-center justify-end px-3 shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/10 shadow-inner" />
                </div>

                {/* Side Buttons */}
                <div className="absolute top-28 -left-[1px] w-[3px] h-12 bg-white/10 rounded-r-sm" />
                <div className="absolute top-44 -left-[1px] w-[3px] h-16 bg-white/10 rounded-r-sm" />
                <div className="absolute top-64 -left-[1px] w-[3px] h-16 bg-white/10 rounded-r-sm" />
                <div className="absolute top-36 -right-[1px] w-[3px] h-24 bg-white/10 rounded-l-sm" />
              </div>

              {/* Floating Badge UI */}
              <div className="absolute -bottom-6 -left-12 bg-black/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl z-20 hidden md:block group-hover:translate-y-2 transition-transform duration-700">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-jura font-bold text-white tracking-widest uppercase">Growth Active</span>
                    <span className="text-[8px] font-sf text-primary/80 uppercase font-bold tracking-widest mt-0.5">Verified Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
