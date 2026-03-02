
import React, { useState, useEffect, useRef } from 'react';

interface HowItWorksProps {
    onNavigate: (page?: string) => void;
}

const steps = [
    {
        number: '01',
        label: 'Growth Audit',
        headline: 'We map where your growth is leaking.',
        body: 'Every engagement starts with a structured audit of your current digital presence — website performance, conversion points, search visibility, and lead handling. We identify exactly where traffic is failing to convert and where revenue is being left on the table.',
        tags: ['Website Analysis', 'SEO Audit', 'Conversion Review'],
    },
    {
        number: '02',
        label: 'System Design',
        headline: 'We architect the full growth infrastructure.',
        body: 'Based on your audit, we design a conversion-first system: a website built to turn visitors into enquiries, an SEO architecture that attracts high-intent traffic, and paid media campaigns tied directly to booked appointments — not vanity metrics.',
        tags: ['Website Blueprint', 'SEO Architecture', 'Paid Media Strategy'],
    },
    {
        number: '03',
        label: 'Build & Launch',
        headline: 'We build and deploy every layer.',
        body: 'Your new growth infrastructure is built, tested, and launched. Every page, every form, every ad campaign is engineered with a single objective: driving qualified enquiries. Nothing goes live without passing conversion benchmarks.',
        tags: ['Web Development', 'Campaign Launch', 'Quality Assurance'],
    },
    {
        number: '04',
        label: 'AI Automation',
        headline: 'We automate lead capture and follow-up.',
        body: 'Once traffic starts converting, our AI automation layer ensures no enquiry is missed. Every lead receives an instant response and enters a structured follow-up sequence — removing manual friction and guaranteeing every opportunity is captured.',
        tags: ['AI Receptionist', 'Instant Lead Response', 'Automated Follow-Up'],
    },
    {
        number: '05',
        label: 'Measure & Optimise',
        headline: 'We track what matters and compound the results.',
        body: 'Growth is not a one-time event. We monitor performance against real revenue metrics — enquiries, bookings, cost per lead — and continuously optimise every channel. You get clear reporting, no guesswork, and a system that improves month on month.',
        tags: ['Revenue Reporting', 'Continuous Optimisation', 'Monthly Reviews'],
    },
];

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transition: `all 900ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            }}
        >
            {children}
        </div>
    );
};

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
    return (
        <div className="bg-black min-h-screen relative z-10">

            {/* Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.15)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(#2D47FF 1px, transparent 1px), linear-gradient(90deg, #2D47FF 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <AnimatedSection>
                        <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold tracking-widest text-primary uppercase mb-8 font-jura">
                            THE PROCESS
                        </div>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-anton text-white leading-[0.9] tracking-tighter uppercase mb-8">
                            From First Click to{' '}
                            <span className="relative inline-block px-3 py-1 -rotate-1 bg-primary text-white shadow-[0_0_30px_rgba(45,71,255,0.5)]">
                                Confirmed Booking.
                            </span>
                        </h1>
                        <p className="text-gray-400 font-sf text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            A structured five-step system that turns your digital presence into a predictable source of qualified enquiries and revenue.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Steps */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[18px] md:left-[28px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden md:block" />

                        <div className="space-y-20 md:space-y-28">
                            {steps.map((step, i) => (
                                <AnimatedSection key={step.number} delay={i * 80}>
                                    <div className="flex gap-8 md:gap-16 items-start">
                                        {/* Step indicator */}
                                        <div className="flex-shrink-0 flex flex-col items-center gap-3 hidden md:flex">
                                            <div className="w-14 h-14 rounded-full border border-primary/40 bg-black flex items-center justify-center shadow-[0_0_20px_rgba(45,71,255,0.2)] relative z-10">
                                                <span className="text-primary font-jura font-bold text-xs tracking-widest">{step.number}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-8 border-b border-white/5 last:border-0">
                                            <div className="flex items-center gap-4 mb-5">
                                                {/* Mobile number */}
                                                <span className="md:hidden text-primary font-jura font-bold text-xs tracking-widest border border-primary/30 px-3 py-1 rounded-full">
                                                    {step.number}
                                                </span>
                                                <span className="text-[10px] font-bold tracking-[0.4em] text-primary/60 uppercase font-jura">
                                                    {step.label}
                                                </span>
                                            </div>

                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-anton text-white uppercase tracking-tight mb-5 leading-tight">
                                                {step.headline}
                                            </h2>

                                            <p className="text-gray-400 font-sf text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">
                                                {step.body}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {step.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-jura font-bold uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1.5 rounded-full bg-white/3 hover:border-primary/30 hover:text-primary/60 transition-colors cursor-default">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(45,71,255,0.1)_0%,transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
                    <AnimatedSection>
                        <div className="w-16 h-[1px] bg-primary mx-auto mb-12 shadow-[0_0_15px_#2D47FF]" />
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-anton text-white uppercase tracking-tighter mb-6 leading-tight">
                            Ready to Start the{' '}
                            <span className="text-primary italic">Process?</span>
                        </h2>
                        <p className="text-gray-400 font-sf text-lg font-light mb-12 max-w-xl mx-auto">
                            Book a 30-minute discovery call. We'll review your current setup and tell you exactly where to focus first.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <button
                                onClick={() => window.open('https://calendar.app.google/nxhNSQ1mE7rXg7Lu7', '_blank')}
                                className="group relative px-10 py-5 bg-primary text-white font-bold text-xs rounded-full overflow-hidden transition-all shadow-[0_0_40px_rgba(45,71,255,0.4)] hover:shadow-[0_0_60px_rgba(45,71,255,0.7)] active:scale-95 font-jura uppercase tracking-[0.3em]"
                            >
                                <span className="relative z-10">Book a Discovery Call</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                            </button>
                            <button
                                onClick={() => onNavigate('Home')}
                                className="text-white/40 font-jura text-xs uppercase tracking-widest hover:text-white/70 transition-colors"
                            >
                                ← Back to Overview
                            </button>
                        </div>
                        <p className="text-[11px] text-white/20 font-sf mt-5 tracking-widest uppercase">15-minute review. No pressure. Clear next steps.</p>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    );
};
