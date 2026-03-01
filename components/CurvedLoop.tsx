
import React, { useEffect, useRef, useState } from 'react';

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  curveAmount?: number;
  direction?: 'left' | 'right';
  interactive?: boolean;
  className?: string;
}

export const CurvedLoop: React.FC<CurvedLoopProps> = ({
  marqueeText = "Centflow ✦ Convert ✦ Clicks ✦ To ✦ Capital ✦",
  speed = 4,
  curveAmount = 400,
  direction = 'left',
  interactive = false,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hoverSpeedMultiplier, setHoverSpeedMultiplier] = useState(1);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const requestRef = useRef<number>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      // Create a parallax movement of +/- 80px
      setParallaxY((scrollProgress - 0.5) * 160);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const move = (speed * hoverSpeedMultiplier) / 10;
        const newOffset = direction === 'left' ? prev - move : prev + move;
        return newOffset % 100;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [speed, hoverSpeedMultiplier, direction]);

  const repeatedText = new Array(15).fill(marqueeText).join("   ");

  return (
    <section 
      ref={sectionRef}
      onMouseEnter={() => interactive && setHoverSpeedMultiplier(2.5)}
      onMouseLeave={() => interactive && setHoverSpeedMultiplier(1)}
      style={{ 
        transition: 'opacity 1500ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)', 
        transitionDelay: '500ms',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
      className={`relative py-32 md:py-48 bg-black overflow-hidden select-none ${className}`}
    >
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div 
        style={{ 
          transform: `translateY(${parallaxY}px)`,
          transition: 'transform 0.1s linear' // Linear for smooth scroll tracking
        }}
        className="w-full h-auto"
      >
        <svg 
          viewBox="0 0 1400 600" 
          className="w-full h-auto transform scale-125 md:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path 
              id="curvedPath" 
              d={`M -200 300 Q 700 ${300 + curveAmount} 1600 300`} 
            />
          </defs>
          
          {/* Shadow Text for Depth */}
          <text className="font-sf font-bold text-6xl md:text-8xl uppercase tracking-tighter fill-primary/10 transition-colors duration-700">
            <textPath href="#curvedPath" startOffset={`${offset}%`}>
              {repeatedText}
            </textPath>
          </text>

          {/* Main Visible Text */}
          <text className="font-sf font-bold text-6xl md:text-8xl uppercase tracking-tighter fill-white transition-all duration-700">
            <textPath href="#curvedPath" startOffset={`${offset}%`}>
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default CurvedLoop;
