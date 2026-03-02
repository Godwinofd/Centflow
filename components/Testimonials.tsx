
import React, { useState, useEffect, useRef } from 'react';

export const Testimonials: React.FC = () => {
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

  const baseTestimonials = [
    { name: "Oskar Vestergaard", role: "MD, Vester Media", text: "Within 90 days of launch, our qualified enquiry volume had more than doubled. The attribution tracking meant we could see exactly which channels were producing — and cut the ones that weren't." },
    { name: "Godwin Uzoma", role: "Founder, Zenith Global", text: "The structure of the engagement was what stood out. Every phase was defined, every deliverable had a purpose. The AI follow-up system alone recovered enquiries we would have previously lost to slow response times." },
    { name: "Sarah Jenkins", role: "CEO, TechLaunch", text: "Our previous website looked fine but converted poorly. Within weeks of the new build going live, our contact form submissions had increased significantly — and the quality of enquiries improved." },
    { name: "Emma Thompson", role: "Marketing Director", text: "The monthly reporting is the clearest we've ever received. We know what's being tested, what's converting, and what the next optimisation is. No ambiguity." },
    { name: "James Wilson", role: "Director, Wilson Group", text: "SEO had always felt like a black box to us. Centflow structured it around the search terms our actual clients use — and the enquiry increase was measurable within the first quarter." },
    { name: "Olivia Brown", role: "CMO, Bloom Digital", text: "The AI receptionist was the most impactful single change. We were losing leads to slow follow-up. Now every enquiry receives a response within minutes, and our booking rate reflects it." },
  ];

  const additionalTestimonials = Array.from({ length: 12 }).map((_, i) => ({
    name: ["Oskar", "Godwin", "Taylor", "Casey", "Morgan", "Riley"][i % 6] + " " + ["V.", "Uzoma", "Williams", "Taylor", "Davies", "Evans"][i % 6],
    role: ["CEO", "Founder", "MD", "Marketing Head", "E-com Director", "Business Owner"][i % 6],
    text: [
      "We stopped guessing which marketing was working. Full attribution tracking changed how we allocate our budget.",
      "The onboarding process was clear from day one. Every milestone was delivered on schedule.",
      "Our cost per booked appointment dropped significantly within two months of the paid media restructure.",
      "The SEO system was built around buyer intent, not just volume. We rank for the searches that actually convert.",
      "Automated follow-up removed the biggest inefficiency in our sales process. Response time went from hours to minutes.",
      "Monthly reviews are structured and specific. We always know where we stand and what happens next."
    ][i % 6]
  }));

  const allTestimonials = [...baseTestimonials, ...additionalTestimonials];
  const firstRow = allTestimonials.slice(0, Math.ceil(allTestimonials.length / 2));
  const secondRow = allTestimonials.slice(Math.ceil(allTestimonials.length / 2));

  return (
    <section className="py-16 md:py-32 lg:py-48 bg-black overflow-hidden relative border-b border-white/5">
      {/* Background Ambience - 60% Blue Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/20 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-primary/20 blur-[200px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="container mx-auto px-6 text-center mb-16 md:mb-32">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-primary/40 rounded-full text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6 md:mb-8 font-jura bg-primary/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            CLIENT OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton uppercase text-white tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
            RESULTS FROM <br /><span className="text-primary italic">THE SYSTEM.</span>
          </h2>
          <p className="text-gray-500 font-sf text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            The following are direct accounts from businesses that went through the Centflow growth infrastructure. Each reflects a specific outcome — not a general impression.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {/* Row 1: Right to Left */}
          <div className="flex overflow-hidden group py-4">
            <div className="flex animate-scroll-left group-hover:pause gap-6 md:gap-10">
              {[...firstRow, ...firstRow].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[480px] p-8 md:p-12 border border-white/10 rounded-[2rem] md:rounded-[3rem] bg-black/60 backdrop-blur-xl hover:border-primary/60 transition-all duration-700 hover:bg-primary/[0.03] group/card relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-[9px] font-bold font-jura text-primary/60 uppercase tracking-widest border border-primary/20 px-2 py-0.5 rounded bg-primary/5">
                        AUTH: OK
                      </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-200 font-sf font-light leading-relaxed mb-10 italic">"{t.text}"</p>

                    <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary shadow-[0_0_15px_rgba(45,71,255,0.2)] font-jura text-lg group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white font-jura text-base uppercase tracking-wider group-hover/card:text-primary transition-colors">{t.name}</h4>
                        <p className="text-primary/60 text-[10px] uppercase tracking-[0.2em] font-bold font-sf">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex overflow-hidden group py-4">
            <div className="flex animate-scroll-right group-hover:pause gap-6 md:gap-10">
              {[...secondRow, ...secondRow].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[480px] p-8 md:p-12 border border-white/10 rounded-[2rem] md:rounded-[3rem] bg-black/60 backdrop-blur-xl hover:border-primary/60 transition-all duration-700 hover:bg-primary/[0.03] group/card relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute -inset-px bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-[9px] font-bold font-jura text-primary/60 uppercase tracking-widest border border-primary/20 px-2 py-0.5 rounded bg-primary/5">
                        STATUS: VERIFIED
                      </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-200 font-sf font-light leading-relaxed mb-10 italic">"{t.text}"</p>

                    <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary shadow-[0_0_15px_rgba(45,71,255,0.2)] font-jura text-lg group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white font-jura text-base uppercase tracking-wider group-hover/card:text-primary transition-colors">{t.name}</h4>
                        <p className="text-primary/60 text-[10px] uppercase tracking-[0.2em] font-bold font-sf">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro-proof line */}
        <div className="container mx-auto px-6 text-center mt-16 md:mt-20">
          <p className="text-[11px] text-white/20 font-sf uppercase tracking-widest">
            Avg. client enquiry increase of 2.8× within 90 days of full system activation.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.25rem)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 1.25rem)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 55s linear infinite;
        }
        .pause {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};
