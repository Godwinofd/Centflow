
import React, { useState, useEffect, useRef } from 'react';

export const PaidMediaContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const [approachVisible, setApproachVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const approachObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setApproachVisible(true);
      },
      { threshold: 0.1 }
    );
    if (approachRef.current) approachObserver.observe(approachRef.current);

    return () => {
      observer.disconnect();
      approachObserver.disconnect();
    };
  }, []);

  const processSteps = [
    { title: "1. RESEARCH & STRATEGY", desc: "We start with market and competitor analysis, building campaigns around proven buyer personas and keyword/audience data specific to nutrition and health." },
    { title: "2. CREATIVE DEVELOPMENT", desc: "We use a blend of polished ad creative and UGC (user-generated content) to capture attention and drive clicks — tested against compliance standards before launch." },
    { title: "3. CAMPAIGN BUILD", desc: "We structure campaigns in Meta and Google Ads for clear data, efficient testing, and rapid scaling." },
    { title: "4. TESTING & OPTIMISATION", desc: "Hook and creative testing (first 3 seconds, messaging angles), A/B audience and placement tests, and ongoing budget reallocation to maximise ROAS." },
    { title: "5. REPORTING & INSIGHTS", desc: "Every client gets access to a live analytics dashboard (integrated with Meta, Google, email, and sales) showing performance, CPA, ROAS, and profitability." }
  ];

  const deliverables = [
    { title: "Meta Ads Management", desc: "Campaign build, testing, optimisation, and scaling.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Google Ads Management", desc: "Search, shopping, and retargeting campaigns aligned with supplement buying intent.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { title: "Creative Testing Frameworks", desc: "Variant edits, hooks, and UGC pipelines.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { title: "Compliance Support", desc: "Campaign built to avoid rejection and minimise account risk.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Full Funnel Integration", desc: "Paid ads aligned with CRO, email flows, and organic social for maximum efficiency.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
  ];

  const whyChooseUs = [
    { label: "Niche Specialists", value: "We focus on e-commerce brands." },
    { label: "Compliance-First Approach", value: "Our ads get approved faster, without violations, and deliver sustainable growth." },
    { label: "Performance-Driven", value: "Every campaign is measured against ROAS, CPA, and profitability — not vanity metrics." },
    { label: "Scalable Systems", value: "From early tests to high-volume campaigns, we provide a clear pathway to growth." }
  ];

  const approachPillars = [
    {
      id: "01.",
      title: "BEST PRACTICES ARE DEAD.",
      desc: "Instead, we run thousands of marketing experiments every year to understand what works and what's next. Our clients capitalize on change, move faster and beat competitors."
    },
    {
      id: "02.",
      title: "REVENUE > CLICKS AND CONVERSIONS.",
      desc: "We build more revenue with fewer costs. Even better, we measure it all and help you explain the impact you're making to your boss and your board."
    },
    {
      id: "03.",
      title: "YOU *CAN* PROVE YOUR IMPACT.",
      desc: "Everything we do revolves around your goals and how we're pacing towards them. Clear plans, process, and communication help you prove marketing's efficacy to all of your stakeholders."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 space-y-32">
      {/* Essential Section - Optimized Layout */}
      <section 
        ref={sectionRef}
        className={`max-w-7xl mx-auto transition-all duration-[1500ms] cubic-bezier(0.25, 0.1, 0.25, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-8 font-jura bg-primary/5">
              Protocol Foundation
            </div>
            
            <h3 className="text-4xl md:text-6xl font-bold font-jura text-white uppercase tracking-tighter mb-12 leading-none">
              WHY PAID ADS ARE <br /><span className="text-primary italic">ESSENTIAL</span>
            </h3>

            <div className="space-y-10">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary to-transparent" />
                <p className="text-gray-400 font-sf text-xl font-light leading-relaxed">
                  For e-commerce focused brands, paid advertising is one of the fastest and most effective ways to drive new customer acquisition. Platforms like Meta (Facebook & Instagram) and Google Ads allow you to reach highly targeted audiences, test creative quickly, and scale campaigns based on real performance data.
                </p>
              </div>

              <div className="p-8 md:p-10 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-24 h-24 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-500 font-jura font-bold text-[10px] tracking-[0.3em] uppercase">Industry Warning: High Restriction</span>
                  </div>
                  <p className="text-gray-300 font-sf text-lg font-light leading-relaxed">
                    But this industry is also one of the most heavily restricted. Ads for supplements face strict scrutiny on both Meta and Google. Without the right approach, campaigns are often rejected, throttled, or accounts suspended entirely.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-sf text-2xl font-medium leading-tight border-l-4 border-primary pl-8 relative z-10">
                  At Centflow, we specialise in supplement advertising. We combine compliance expertise with performance-driven strategy to ensure campaigns are not only approved, but profitable.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full animate-ping" />
              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-primary font-jura uppercase tracking-widest">Compliance Status</div>
                  <div className="text-3xl font-bold font-jura text-white tracking-tighter">99.8% ACCURACY</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="relative z-10 space-y-6">
                 <div className="space-y-3">
                   <div className="flex justify-between text-[8px] font-bold font-jura text-gray-500 tracking-[0.2em] uppercase">
                     <span>Ad Approval Probability</span>
                     <span className="text-primary">High</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-[95%] shadow-[0_0_15px_#2D47FF]" />
                   </div>
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between text-[8px] font-bold font-jura text-gray-500 tracking-[0.2em] uppercase">
                     <span>Account Safety Rating</span>
                     <span className="text-primary">Optimized</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-[98%] shadow-[0_0_15px_#2D47FF]" />
                   </div>
                 </div>
              </div>
              <div className="relative z-10 pt-10 border-t border-white/5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-[8px] font-bold text-gray-500 font-jura uppercase mb-1">CPA Target</div>
                    <div className="text-xl font-bold font-jura text-white">-42.5%</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-[8px] font-bold text-gray-500 font-jura uppercase mb-1">Scale Index</div>
                    <div className="text-xl font-bold font-jura text-white">x5.0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-black border border-white/10 rounded-lg text-[8px] font-mono text-primary uppercase tracking-widest z-20">
              SYS_ID: OPT_MODULE_ECOM
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Optimized Flow */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-6 font-jura bg-primary/5">
            Operational Lifecycle
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-jura text-white uppercase tracking-tighter leading-none">
            OUR PAID ADVERTISING <br /><span className="text-primary italic">PROCESS</span>
          </h3>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 relative">
                  <span className="text-xl font-bold font-jura text-white group-hover:text-primary transition-colors">{i + 1}</span>
                  <div className="absolute -inset-2 border border-primary/0 group-hover:border-primary/20 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] group-hover:border-primary/20 transition-all flex-grow">
                  <h4 className="text-white font-jura font-bold text-xs tracking-widest mb-4 uppercase leading-tight h-[3em] flex items-center justify-center">{step.title.split('. ')[1]}</h4>
                  <p className="text-gray-500 font-sf text-sm font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section - Optimized Matrix */}
      <section className="max-w-7xl mx-auto py-32 border-y border-white/5 relative">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
          <svg className="w-64 h-64 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 18l-8-4v-8.2l8 4 8-4v8.2l-8 4zm-7.4-12.2l7.4 3.7 7.4-3.7L12 4.1 4.6 7.8z"/>
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="text-primary font-jura font-bold text-[10px] tracking-[0.4em] uppercase mb-4">Output Parameters</div>
            <h3 className="text-4xl md:text-6xl font-bold font-jura text-white uppercase tracking-tighter leading-none">
              WHAT WE <span className="text-primary italic">DELIVER</span>
            </h3>
          </div>
          <div className="lg:pt-10">
             <p className="text-gray-500 font-sf text-base max-w-xs leading-relaxed border-l border-primary/20 pl-6">
               Precision-engineered assets and management protocols built for elite market performance.
             </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <div key={i} className={`group p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] hover:border-primary/40 transition-all relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h4 className="text-white font-jura font-bold text-xl uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-gray-500 font-sf text-base font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                 <span className="text-[8px] font-mono text-gray-500 tracking-widest uppercase">Spec: High_Perf</span>
                 <div className="flex gap-1">
                   {[1,2,3].map(dot => <div key={dot} className="w-1 h-1 rounded-full bg-primary/40" />)}
                 </div>
              </div>
            </div>
          ))}
          <div className="hidden lg:flex p-10 bg-primary/5 border border-primary/10 rounded-[3rem] flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.1)_0%,transparent_70%)] animate-pulse" />
             <div className="relative z-10">
               <div className="text-5xl font-bold font-jura text-white mb-2 tracking-tighter">100%</div>
               <div className="text-[10px] font-bold text-primary font-jura uppercase tracking-[0.3em]">Scalability Protocol</div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Centflow Section */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold font-jura text-white uppercase tracking-tighter mb-16 leading-none">
          WHY NUTRITION BRANDS <br />CHOOSE <span className="text-primary italic text-glow">CENTFLOW</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/30" />
              <div className="text-primary text-[10px] font-bold font-jura uppercase tracking-[0.3em] mb-3">{item.label}</div>
              <p className="text-white font-sf text-lg font-light leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Optimized Approach Section (From Image) */}
      <section 
        ref={approachRef}
        className={`max-w-7xl mx-auto py-32 bg-[#050505] rounded-[4rem] border border-white/5 p-8 md:p-20 relative overflow-hidden transition-all duration-[1500ms] ${approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Background Ambience */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] -mr-96 -mt-96 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D47FF 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12 relative z-10">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold font-jura text-white leading-[0.9] tracking-tighter uppercase mb-2">
              Winning in the new world
            </h3>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light font-sf text-gray-500 italic tracking-tight">
              means breaking old rules
            </h3>
          </div>
          
          <button className="group relative px-10 py-5 bg-primary text-white font-bold rounded-xl overflow-hidden transition-all shadow-[0_10px_30px_rgba(45,71,255,0.4)] hover:shadow-[0_20px_50px_rgba(45,71,255,0.6)] active:scale-95 font-jura uppercase tracking-[0.3em] text-[10px]">
            <span className="relative z-10">Our Approach</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 relative z-10">
          {approachPillars.map((pillar, i) => (
            <div key={i} className="flex flex-col group">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-primary font-jura font-bold text-4xl group-hover:scale-110 transition-transform">{pillar.id}</span>
                <div className="h-[1px] bg-white/10 flex-grow group-hover:bg-primary/30 transition-colors" />
              </div>
              <h4 className="text-2xl font-bold font-jura text-white mb-6 leading-tight uppercase tracking-tight group-hover:text-primary transition-colors">
                {pillar.title}
              </h4>
              <p className="text-gray-400 font-sf font-light leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                {pillar.desc}
              </p>
              
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[8px] font-bold text-primary uppercase tracking-[0.4em] font-jura">Core Pillar</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical Deco Footer */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-6 opacity-30">
          <div className="flex gap-4">
             <span className="text-[8px] font-mono text-white tracking-widest uppercase">COORD: 53.3498° N, 6.2603° W</span>
             <span className="text-[8px] font-mono text-white tracking-widest uppercase">AUTH: CENT_ENG_PROTOCOL</span>
          </div>
          <div className="h-4 w-48 bg-white/5 rounded-full overflow-hidden">
             <div className="h-full bg-primary/40 w-1/3 animate-pulse" />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};
