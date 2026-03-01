import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, isVisible }: { end: number, duration?: number, isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 500);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration]);

  return <>{count}%</>;
};

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 38, label: "of users stop engaging with a website if the layout looks outdated" },
    { value: 53, label: "of mobile visitors leave a page if it takes longer than 3 seconds to load" },
    { value: 75, label: "of users judge a business’s credibility based on website design" },
    { value: 94, label: "of first impressions relate to visual design and usability" }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div 
        style={{ 
          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)', 
          transitionDelay: '500ms',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-anton text-primary mb-4 transition-all duration-500 group-hover:scale-110">
                <CountUp end={stat.value} isVisible={isVisible} />
              </div>
              
              <div className="relative mb-8">
                <div className={`h-[1px] bg-primary transition-all duration-1000 delay-[1000ms] ${isVisible ? 'w-16 group-hover:w-24' : 'w-0'}`} />
              </div>

              <p className="text-gray-400 font-sf text-sm md:text-base leading-relaxed max-w-[260px] group-hover:text-white transition-colors duration-500 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};