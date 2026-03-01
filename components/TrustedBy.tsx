
import React, { useState, useEffect, useRef } from 'react';

const LOGOS = [
  "https://res.cloudinary.com/dddvmez6s/image/upload/v1769887587/Image_31-01-2026_at_19.25_affvga.jpg",
  "https://res.cloudinary.com/dddvmez6s/image/upload/v1769887587/Image_31-01-2026_at_19.25_1_gjr0mb.jpg",
  "https://res.cloudinary.com/dddvmez6s/image/upload/v1769887587/Image_31-01-2026_at_19.25_2_hqiyyn.jpg",
  "https://res.cloudinary.com/dddvmez6s/image/upload/v1769887586/Image_31-01-2026_at_19.25_4_rgok8x.jpg",
  "https://res.cloudinary.com/dddvmez6s/image/upload/v1769887586/Image_31-01-2026_at_19.26_ryqphw.jpg",
  "https://res.cloudinary.com/dddvmez6s/image/upload/v1769887587/Image_31-01-2026_at_19.25_3_hwcmhc.jpg"
];

export const TrustedBy: React.FC = () => {
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
    <section className="bg-black py-16 md:py-24 border-b border-white/5 relative z-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div 
        ref={ref}
        className="container mx-auto px-6"
      >
        <div 
          style={{ 
            transition: 'all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)', 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
          className="text-center mb-16"
        >
          <span className="text-primary font-jura font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">
            Trusted by Industry Leaders
          </span>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {LOGOS.map((logo, index) => (
            <div 
              key={index}
              style={{ 
                transition: 'all 800ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)'
              }}
              className="group relative flex items-center justify-center h-20 w-full max-w-[180px] transition-all duration-500"
            >
              {/* 
                Trick: To remove white backgrounds of JPGs on a black site:
                1. Use mix-blend-mode: screen (keeps light, makes dark transparent)
                2. Use filter: invert(1) (turns white background black/transparent, turns logo opposite colors)
                3. Use hue-rotate(180deg) (flips logo colors back to original)
                4. brightness/contrast adjustments to clean up edges
              */}
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="max-h-full max-w-full object-contain mix-blend-screen transition-all duration-500 group-hover:scale-110"
                style={{
                  filter: 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.1)'
                }}
              />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-full scale-50 group-hover:scale-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
