
import React, { useState, useEffect, useRef } from 'react';

export const WebDesignBenefits: React.FC = () => {
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
      title: "Enhanced Online Presence",
      desc: "We create websites with excellent user experiences that are simple to navigate and provide users with the information they want fast and efficiently.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 21v-1m0-11a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      )
    },
    {
      title: "Increased Productivity",
      desc: "All of our services are geared around providing you with the greatest possible experience from the first day to the final day of working together.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Targeted Customer Growth",
      desc: "A variety of technologies allow us to monitor what people are saying about your brand and industry on the internet, allowing us to have a better idea of what has to be done to improve your company's online image.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Professionalisation of Brand",
      desc: "When our team creates a website, we make sure it meets and surpasses all expectations of your brand. We don't cut corners, which is why we've partnered with some of the nation's greatest businesses. For your outcomes, we'll construct unique responsive web design and development services.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-3.061 3.42 3.42 0 016.438 0 3.42 3.42 0 001.946 3.061 3.42 3.42 0 010 6.606 3.42 3.42 0 00-1.946 3.061 3.42 3.42 0 01-6.438 0 3.42 3.42 0 00-1.946-3.061 3.42 3.42 0 010-6.606z" />
        </svg>
      )
    },
    {
      title: "Better Business Credibility",
      desc: "According to IE Domain Registry, 67% of internet users will not suggest a company with a badly designed website. So, by hiring a professional website designer in Ireland to create your website, you can improve your company's reputation.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Long Term Relationship",
      desc: "Our customer experience is what we value in the long term. Working with Centflow will provide you with a long-term, reliable, and efficient technology partner who you can call on to help address any web challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className={`container mx-auto px-6 transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="mb-20">
          <h4 className="text-white font-jura font-bold text-sm md:text-xl uppercase tracking-[0.2em] mb-4">HOW YOU BENEFIT FROM</h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-anton text-primary uppercase tracking-tighter leading-none">
            CHOOSING US AS YOUR <span className="text-white italic">WEB DESIGNER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {benefits.map((benefit, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'}`}>
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary bg-primary/5 hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(45,71,255,0.2)]">
                  {benefit.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold font-jura text-primary uppercase mb-4 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 font-sf text-base md:text-lg font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};
