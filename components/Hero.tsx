
import React, { useState, useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
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

  const googleIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  const trustpilotIcon = (
    <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 9.124l-9.154-.001-2.846-8.814-2.846 8.814-9.154.001 7.405 5.382-2.827 8.705 7.422-5.392 7.422 5.392-2.827-8.705 7.405-5.382z" />
    </svg>
  );

  const starIcon = (
    <svg className="w-3 h-3 text-primary fill-primary" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000520]" />

        <div className="absolute inset-0 opacity-40 mix-blend-screen">
          <img
            src="https://res.cloudinary.com/dddvmez6s/image/upload/v1771174260/campaign-creators-gMsnXqILjp4-unsplash_u3dflw.jpg"
            alt="Centflow Command Center"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            width="1920"
            height="1080"
          />
        </div>

        <div className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'linear-gradient(#2D47FF 1px, transparent 1px), linear-gradient(90deg, #2D47FF 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.3)_0%,transparent_70%)] pointer-events-none" />
      </div>

      <div
        ref={ref}
        style={{
          transition: 'all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          transitionDelay: '400ms',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <div className="inline-block px-5 py-2 border border-primary/50 text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-10 animate-pulse bg-primary/10 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(45,71,255,0.4)] font-jura">
          WEBSITES • SEO • PAID MEDIA • AI AUTOMATION
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-10 leading-[0.85] font-anton text-white uppercase drop-shadow-[0_0_40px_rgba(45,71,255,0.5)]">
          CONVERT CLICKS <br className="hidden sm:block" />
          TO <span className="text-primary italic">CAPITAL</span>
        </h1>

        <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 font-sf font-light leading-relaxed px-4 sm:px-0">
          We design structured growth systems that turn traffic into qualified enquiries — and automate the follow-up so every opportunity is captured.
        </p>

        <div className="flex flex-col items-center gap-4 mb-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://calendar.app.google/nxhNSQ1mE7rXg7Lu7" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-primary text-white font-bold text-sm rounded-full overflow-hidden transition-all shadow-[0_0_40px_rgba(45,71,255,0.6)] hover:shadow-[0_0_60px_rgba(45,71,255,0.8)] active:scale-95 font-jura uppercase tracking-[0.4em] inline-block">
              <span className="relative z-10">Book a Discovery Call</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
            </a>
            <button className="group relative px-8 py-4 border border-primary/40 text-white font-bold text-sm rounded-full overflow-hidden backdrop-blur-md transition-all hover:border-primary active:scale-95 font-jura uppercase tracking-[0.4em] bg-primary/5">
              <span className="relative z-10">View Case Studies</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
            </button>
          </div>
          <p className="text-[11px] text-white/40 font-sf tracking-widest uppercase">15-minute review. No pressure. Clear next steps.</p>
          <p className="text-[12px] text-white/30 font-sf mt-1">Trusted by service businesses building predictable growth.</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-16 pt-12 border-t border-white/10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              {googleIcon}
              <span className="text-white font-jura font-bold text-lg md:text-xl">VERIFIED</span>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => <React.Fragment key={i}>{starIcon}</React.Fragment>)}
            </div>
            <span className="text-[9px] text-primary/60 uppercase tracking-[0.3em] font-bold font-sf">Google Partner</span>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-primary/20" />

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {trustpilotIcon}
              <span className="text-white font-jura font-bold text-lg md:text-xl">Trustpilot</span>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => <React.Fragment key={i}>{starIcon}</React.Fragment>)}
            </div>
            <span className="text-[9px] text-primary/60 uppercase tracking-[0.3em] font-bold font-sf">5.0 Star Rating</span>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-primary/20" />

          <div className="flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/30 rounded-2xl group transition-all hover:bg-primary/20">
            <div className="relative">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <div className="absolute inset-0 bg-primary/40 blur-md rounded-full -z-10 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-[9px] font-bold text-white font-jura uppercase tracking-widest leading-none">Security Protocol</div>
              <div className="text-[8px] font-bold text-primary/60 uppercase tracking-widest mt-1">Verified Deployment</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden lg:block">
        <div className="w-6 h-10 border border-primary/40 rounded-full flex justify-center p-1.5 backdrop-sm">
          <div className="w-1 h-2 bg-primary rounded-full shadow-[0_0_10px_#2D47FF]" />
        </div>
      </div>
    </section>
  );
};
