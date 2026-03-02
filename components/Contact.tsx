
import React, { useState, useEffect, useRef } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service: service || 'Not specified', message }),
      });
      if (!res.ok) throw new Error('Send failed');
      setStatus('success');
      setName(''); setEmail(''); setService(''); setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-32 lg:py-56 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D47FF 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div
        ref={ref}
        style={{
          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          transitionDelay: '200ms',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Information Side (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/30 rounded-full text-[9px] font-bold tracking-[0.4em] text-primary uppercase mb-10 font-jura bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              DISCOVERY CALL
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-anton mb-6 md:mb-10 uppercase text-white leading-[0.9] md:leading-[0.85] tracking-tighter">
              START WITH <br /><span className="text-primary italic">CLARITY.</span>
            </h2>

            <p className="text-gray-400 text-base md:text-xl font-sf font-light mb-8 md:mb-12 leading-relaxed max-w-lg">
              If your enquiry volume has plateaued or your marketing spend isn't producing a clear return, the issue is almost always structural. In a 30-minute discovery call, we review your current setup, identify where growth is being lost, and outline the specific system changes that would address it. You leave with a clear view of the gap — and what it would take to close it.
            </p>

            {/* What happens on the call */}
            <div className="space-y-3 mb-8">
              {[
                "We map where enquiries are being lost in your current setup.",
                "We identify the tracking, conversion, or follow-up gaps costing you revenue.",
                "We outline a structured growth plan with defined next steps."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-gray-400 font-sf text-sm font-light leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-600 font-sf uppercase tracking-widest mb-10 md:mb-16">
              No obligation. No sales pressure. If the audit doesn't produce useful insight, nothing is owed.
            </p>

            <div className="space-y-6 mb-16">
              {/* Contact Channels */}
              <div className="grid grid-cols-1 gap-4">
                <a href="tel:+3530830236881" className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[9px] text-gray-500 mb-1">Phone</h4>
                    <span className="text-xl font-bold font-jura text-white">+353 0830236881</span>
                  </div>
                </a>

                <a href="mailto:enquiries@centflow-agency.com" className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[9px] text-gray-500 mb-1">General Enquiries</h4>
                    <span className="text-sm font-bold font-jura text-white">enquiries@centflow-agency.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust Grid */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest font-jura">Fast Response</span>
                </div>
                <p className="text-[10px] text-gray-500 font-sf uppercase leading-tight tracking-widest">Average reply time <br />under 24 hours.</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest font-jura">24/7 Monitoring</span>
                </div>
                <p className="text-[10px] text-gray-500 font-sf uppercase leading-tight tracking-widest">Global support for <br />active deployments.</p>
              </div>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="lg:col-span-7 relative">
            {/* Holographic Form Container */}
            <div className="relative p-1 md:p-1.5 rounded-[2rem] md:rounded-[3.5rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative bg-[#080808] p-6 md:p-16 rounded-[1.8rem] md:rounded-[3rem] border border-white/5">
                <div className="flex justify-between items-center mb-8 md:mb-12">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-jura text-white uppercase mb-2">Book Your Discovery Call</h3>
                    <p className="text-gray-500 font-sf text-[10px] md:text-xs font-light uppercase tracking-widest">Tell us about your current setup — we'll respond within 24 hours.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 px-5 py-3 bg-white/5 rounded-2xl border border-white/10">
                    <div className="relative">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                      </svg>
                      <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full" />
                    </div>
                    <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em] font-jura whitespace-nowrap">Secure Uplink Verified</span>
                  </div>
                </div>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-jura uppercase tracking-wider text-lg mb-2">Enquiry Received</h4>
                      <p className="text-gray-500 font-sf text-sm font-light leading-relaxed max-w-xs mx-auto">
                        We'll review your details and respond within 24 hours. Check your inbox for a confirmation.
                      </p>
                    </div>
                    <button onClick={() => setStatus('idle')} className="text-[10px] text-primary/60 font-jura uppercase tracking-widest hover:text-primary transition-colors">
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="relative group/field">
                        <label className="absolute -top-3 left-4 px-2 bg-[#080808] text-[9px] font-bold text-primary uppercase tracking-[0.3em] z-10 transition-colors group-hover/field:text-white">Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="w-full bg-transparent border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:border-primary/50 outline-none transition-all text-sm font-sf group-hover/field:border-white/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="relative group/field">
                        <label className="absolute -top-3 left-4 px-2 bg-[#080808] text-[9px] font-bold text-primary uppercase tracking-[0.3em] z-10 transition-colors group-hover/field:text-white">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="w-full bg-transparent border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:border-primary/50 outline-none transition-all text-sm font-sf group-hover/field:border-white/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="relative group/field">
                      <label className="absolute -top-3 left-4 px-2 bg-[#080808] text-[9px] font-bold text-primary uppercase tracking-[0.3em] z-10 transition-colors group-hover/field:text-white">Growth Objective</label>
                      <select
                        value={service}
                        onChange={e => setService(e.target.value)}
                        className="w-full bg-[#080808] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-gray-400 focus:border-primary/50 outline-none transition-all text-sm font-sf appearance-none group-hover/field:border-white/20"
                      >
                        <option value="">Select Service</option>
                        <option>Web Design / Development</option>
                        <option>Meta Ads / PPC</option>
                        <option>SEO / Organic Growth</option>
                        <option>AI Automation Ecosystem</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative group/field">
                      <label className="absolute -top-3 left-4 px-2 bg-[#080808] text-[9px] font-bold text-primary uppercase tracking-[0.3em] z-10 transition-colors group-hover/field:text-white">Project Detail</label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="w-full bg-transparent border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 text-white focus:border-primary/50 outline-none transition-all text-sm resize-none font-sf group-hover/field:border-white/20"
                        placeholder="Tell us about your current bottlenecks and growth targets..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-center text-[11px] text-red-400 font-sf tracking-wide">
                        Something went wrong. Please try again or email us directly at enquiries@centflow-agency.com
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 md:py-6 bg-primary text-white font-bold text-xs rounded-full shadow-[0_15px_40px_rgba(45,71,255,0.4)] hover:shadow-[0_20px_60px_rgba(45,71,255,0.6)] transition-all font-jura uppercase tracking-[0.4em] relative overflow-hidden group/btn disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="relative z-10">Send Enquiry</span>
                      )}
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 opacity-20" />
                    </button>

                    <p className="text-center text-[9px] text-gray-600 uppercase tracking-widest font-sf">
                      We'll only contact you in relation to your enquiry. No marketing lists.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Floating Technical Badge */}
            <div className="absolute -bottom-10 -right-4 bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl hidden md:block group-hover:translate-x-2 transition-transform duration-700">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <div className="text-[10px] font-bold text-white font-jura uppercase tracking-widest">4.9/5 Rating</div>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <svg key={s} className="w-2.5 h-2.5 text-primary fill-primary" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="text-[9px] font-sf text-gray-500 uppercase tracking-widest text-right leading-none">
                  Trusted by <br /><span className="text-white font-bold">34+ Brands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
