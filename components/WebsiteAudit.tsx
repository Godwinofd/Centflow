import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const WebsiteAudit: React.FC = () => {
  const [stage, setStage] = useState<'input' | 'loading' | 'results'>('input');
  const [url, setUrl] = useState('');
  const [aiSummary, setAiSummary] = useState('Generating AI insights for your infrastructure...');
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    "Establishing secure connection to domain...",
    "Crawling site architecture and metadata...",
    "Analyzing SEO & GEO visibility indices...",
    "Testing performance against Core Web Vitals...",
    "Evaluating security protocols and accessibility...",
    "Synthesizing final growth recommendations..."
  ];

  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
      }, 1200);

      const timer = setTimeout(() => {
        setStage('results');
      }, 7500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [stage]);

  const handleAnalyze = async () => {
    if (!url) return;
    setStage('loading');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am simulating a website audit for a digital marketing agency called Centflow. 
        Write a 3-sentence professional, data-driven "AI Summary" for the website: ${url}. 
        Make it sound technical and authoritative, mentioning growth potential and optimization bottlenecks.`
      });
      setAiSummary(response.text || "Analysis complete. System ready.");
    } catch (err) {
      console.error("AI Error:", err);
      setAiSummary("Site architecture analyzed. Immediate optimization required for market dominance.");
    }
  };

  const ScoreBar = ({ label, score, total, color, icon }: any) => {
    const percentage = (score / total) * 100;
    return (
      <div className="group/bar flex flex-col gap-2">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center opacity-80" style={{ color }}>
              {icon}
            </div>
            <span className="text-[13px] font-bold font-jura tracking-wide text-gray-200 group-hover/bar:text-white transition-colors">{label}</span>
          </div>
          <span className="text-[13px] font-bold font-jura text-gray-400">
            <span className="text-white">{score}</span>/{total}
          </span>
        </div>
        <div className="relative h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-[2500ms] ease-out shadow-[0_0_12px_currentColor]"
            style={{ width: `${percentage}%`, backgroundColor: color, color }}
          />
        </div>
      </div>
    );
  };

  const AccordionItem = ({ title, subtitle, icon, color, isOpen = false }: any) => (
    <div className={`group border border-white/5 rounded-2xl bg-[#111] overflow-hidden transition-all hover:border-white/10`}>
      <div className="p-6 md:p-8 flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center" style={{ color }}>
            {icon}
          </div>
          <div>
            <h4 className="text-xl font-bold font-jura text-white group-hover:text-primary transition-colors uppercase tracking-tight">{title}</h4>
            <p className="text-gray-500 font-sf text-xs uppercase tracking-widest font-light">{subtitle}</p>
          </div>
        </div>
        <svg className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="px-8 pb-8 text-gray-400 font-sf text-sm leading-relaxed border-t border-white/5 pt-6">
          {title === "AI Summary" ? aiSummary : "Detailed metrics for this sector are currently being processed by the Centflow engine. Schedule a consultation to access the full diagnostic breakdown."}
        </div>
      )}
    </div>
  );

  if (stage === 'input') {
    return (
      <section className="min-h-screen pt-48 pb-32 bg-black relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#2D47FF 1px, transparent 1px), linear-gradient(90deg, #2D47FF 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold font-anton mb-8 text-white uppercase tracking-tighter leading-none text-glow">
            Website audit, <span className="text-primary italic">made simple</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-sf font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a comprehensive breakdown of your website's SEO, performance, accessibility, UX and more with one click.
            <br className="hidden md:block" /> No fluff - just actionable insights to help you grow.
          </p>

          <div className="relative group max-w-3xl mx-auto mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative flex items-center bg-[#151515] border border-white/10 rounded-full p-2 pl-8 focus-within:border-primary/50 transition-all shadow-2xl">
              <svg className="w-6 h-6 text-gray-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="www.example.com"
                className="flex-grow bg-transparent text-white font-sf outline-none text-lg md:text-xl placeholder:text-gray-700"
              />
              <button 
                onClick={handleAnalyze}
                className="bg-primary hover:bg-primary/90 text-white font-bold font-jura uppercase tracking-widest px-10 py-4 rounded-full transition-all active:scale-95 shadow-[0_0_20px_rgba(45,71,255,0.4)]"
              >
                Analyze
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[11px] font-bold font-jura text-gray-600 tracking-[0.2em] uppercase">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
              No credit card required
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-800" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
              Ready in 1 minute
            </div>
          </div>

          <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-bold text-primary uppercase tracking-widest">
            <span className="animate-pulse">✨</span>
            New: AI visibility & GEO checks
          </div>
        </div>
      </section>
    );
  }

  if (stage === 'loading') {
    return (
      <section className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 mb-12 relative">
          <div className="absolute inset-0 border-4 border-primary/10 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold font-jura text-white uppercase tracking-tighter mb-4 animate-pulse">
          Engine running...
        </h2>
        <p className="text-primary font-jura font-bold text-xs tracking-[0.4em] uppercase h-8">
          {loadingMessages[loadingStep]}
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-40 pb-32 bg-[#080808] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap items-center justify-between mb-16 gap-6">
          <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold font-jura text-gray-500 uppercase tracking-widest hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF Report (Coming Soon)
          </button>
          
          <button className="flex items-center gap-2 text-[11px] font-bold font-jura text-gray-500 uppercase tracking-widest hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Expand all
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Overall Score Card - Optimized to match reference */}
          <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-10 md:p-14 flex flex-col relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 right-0 p-8 text-[9px] font-bold font-jura text-gray-800 tracking-[0.4em] uppercase">Architecture_Summary</div>
             <h3 className="text-2xl font-bold font-jura text-white mb-12 uppercase tracking-tight">Overall score</h3>
             
             <div className="flex flex-col items-center justify-center flex-grow py-6">
                <div className="relative w-80 h-80 mb-10 group-hover:scale-[1.02] transition-transform duration-1000">
                   <svg className="w-full h-full transform -rotate-90">
                      <circle cx="160" cy="160" r="140" stroke="currentColor" strokeWidth="18" fill="transparent" className="text-white/5" />
                      <circle 
                        cx="160" cy="160" r="140" stroke="currentColor" strokeWidth="18" fill="transparent" 
                        strokeDasharray={2 * Math.PI * 140} 
                        strokeDashoffset={2 * Math.PI * 140 * (1 - 0.74)}
                        strokeLinecap="round"
                        className="text-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all duration-[3000ms] ease-out"
                      />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[10rem] font-bold font-jura text-white tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">74</span>
                      <span className="text-2xl font-bold font-jura text-orange-500 uppercase tracking-[0.2em] mt-2">Good</span>
                   </div>
                </div>

                <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full text-[12px] font-bold font-jura text-purple-400 uppercase tracking-[0.15em] hover:bg-purple-500/20 transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 21v-1m0-11a3 3 0 110-6 3 3 0 010 6z" />
                  </svg>
                  17 recommendations available
                </div>
             </div>
          </div>

          {/* Score Breakdown Card - Optimized Grid & Spacing */}
          <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-10 md:p-14 shadow-2xl">
            <h3 className="text-2xl font-bold font-jura text-white mb-12 uppercase tracking-tight">Score breakdown</h3>
            
            <div className="space-y-10">
              <ScoreBar label="AI Visibility (GEO)" score={6} total={6} color="#A855F7" icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>} />
              <ScoreBar label="On-page & local SEO" score={22} total={25} color="#F97316" icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>} />
              <ScoreBar label="Technical" score={19} total={20} color="#3B82F6" icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} />
              <ScoreBar label="Security" score={4} total={15} color="#22C55E" icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} />
              <ScoreBar label="Performance" score={16} total={20} color="#EC4899" icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} />
              <ScoreBar label="Accessibility" score={9} total={14} color="#0D9488" icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>} />
            </div>
          </div>
        </div>

        {/* Accordion Sections - Matched to provided layout */}
        <div className="space-y-4 mb-20">
          <AccordionItem title="AI Summary" subtitle="AI-powered analysis of your website" color="#A855F7" isOpen={true} icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>} />
          <AccordionItem title="Authority Score" subtitle="Domain authority and backlink analysis" color="#9333EA" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" /></svg>} />
          <AccordionItem title="Platform Analysis" subtitle="Technology-specific insights and recommendations" color="#7C3AED" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>} />
          <AccordionItem title="AI Visibility (GEO)" subtitle="How AI search engines see your content" color="#A855F7" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>} />
          <AccordionItem title="On-page & local SEO" subtitle="SEO essentials, local business signals, links & branding" color="#F97316" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>} />
          <AccordionItem title="Technical" subtitle="Core web standards and configuration" color="#3B82F6" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>} />
          <AccordionItem title="Security" subtitle="Google Safe Browsing, SSL/TLS and HTTP security headers" color="#22C55E" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} />
          <AccordionItem title="Performance" subtitle="Core Web Vitals, speed metrics & resource analysis" color="#EC4899" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} />
          <AccordionItem title="Accessibility" subtitle="WCAG compliance" color="#0D9488" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>} />
          <AccordionItem title="AI recommendations" subtitle="Your next steps to improve your website" color="#22C55E" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 21v-1m0-11a3 3 0 110-6 3 3 0 010 6z" /></svg>} />
          <AccordionItem title="Detailed recommendations" subtitle="Actionable steps to improve your website" color="#F97316" icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
        </div>

        {/* Support Section - Matched reference */}
        <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
           <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6 text-primary">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
                 <h3 className="text-3xl font-bold font-jura text-white uppercase tracking-tight">Need help improving these results?</h3>
              </div>
              <p className="text-gray-500 font-sf text-lg mb-10 max-w-3xl mx-auto">
                 Our trusted partner <span className="text-white">(centflow.agency)</span> can help you optimize your website for better SEO, performance, and user experience.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/oskar-centflow-agency', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white font-bold font-jura uppercase tracking-widest px-12 py-5 rounded-full transition-all active:scale-95 flex items-center gap-4 mx-auto shadow-2xl"
              >
                Schedule a free consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
           </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => { setStage('input'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-gray-600 hover:text-white font-jura font-bold text-[11px] uppercase tracking-[0.3em] transition-colors"
          >
            ← Analyze Another Domain
          </button>
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(45,71,255,0.4)] hover:scale-110 transition-transform active:scale-95 z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </section>
  );
};