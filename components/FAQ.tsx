
import React, { useState, useEffect, useRef } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs: FAQItem[] = [
    { 
      q: "How long until I see tangible results from my investment?", 
      a: "Performance marketing (PPC) can show lead generation within 24-48 hours of campaign activation. For conversion rate optimization and SEO, we typically see significant infrastructure improvements within 30 days, with compounding growth curves over 3-6 months." 
    },
    { 
      q: "Do you have a minimum contract length for growth engineering?", 
      a: "We prioritize performance-based partnerships. While we recommend a 3-month initial cycle to fully optimize data models and landing page performance, we operate on mutual growth targets rather than restrictive long-term lock-ins." 
    },
    { 
      q: "Which platform is best suited for my specific industry?", 
      a: "This is determined during our initial 'Audit & Discover' phase. We analyze competitor density, search volume, and audience behavior to decide whether Meta's behavioral targeting or Google's intent-based search will yield the highest ROAS for your business." 
    },
    { 
      q: "How does Centflow track the success of my campaigns?", 
      a: "We implement advanced server-side tracking and custom GTM (Google Tag Manager) configurations. You receive a real-time data dashboard tracking CPA, ROAS, and lead quality, ensuring full transparency of every euro spent." 
    },
    { 
      q: "What sets Centflow apart from traditional creative agencies?", 
      a: "Most agencies focus on aesthetics; we focus on engineering. We treat your digital presence as a conversion engine, using mathematical certainty and technical optimization to ensure your traffic actually turns into capital." 
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-32 lg:py-48 bg-black relative overflow-hidden border-y border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2D47FF 1px, transparent 1px), linear-gradient(90deg, #2D47FF 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div 
        className={`container mx-auto px-6 max-w-5xl relative z-10 transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="text-center mb-12 md:mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-primary/20 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6 md:mb-8 font-jura bg-primary/5">
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.85]">
            FREQUENTLY ASKED <br /><span className="text-primary italic">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`transition-all duration-500 transform border rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group bg-white/[0.01] hover:bg-white/[0.03] ${
                active === i ? 'border-primary/50 ring-1 ring-primary/20' : 'border-white/5'
              }`}
            >
              <button 
                onClick={() => setActive(active === i ? null : i)} 
                className="w-full p-6 md:p-10 text-left flex justify-between items-center gap-4 group/btn relative transition-all"
              >
                <span className={`text-base md:text-xl font-bold font-jura transition-colors duration-300 ${active === i ? 'text-primary' : 'text-white'}`}>
                  {faq.q}
                </span>
                
                <div className={`relative flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  active === i 
                    ? 'bg-primary border-primary rotate-45 text-white shadow-[0_0_15px_rgba(45,71,255,0.5)]' 
                    : 'border-white/10 text-gray-500 group-hover:border-primary/50 group-hover:text-primary'
                }`}>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  active === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 md:px-10 pb-8 md:pb-10 text-gray-400 font-sf font-light leading-relaxed text-base md:text-lg border-t border-white/5 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 font-sf text-sm font-light mb-8 italic">Still have technical inquiries?</p>
          <button className="flex items-center gap-4 mx-auto group">
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] font-jura group-hover:text-primary transition-colors">Speak with an Engineer</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
