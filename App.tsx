
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { IdeaToReality } from './components/IdeaToReality';
import { CanYouRelate } from './components/CanYouRelate';
import { Benefits } from './components/Benefits';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { RecentProjects } from './components/RecentProjects';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PaidMediaContent } from './components/PaidMediaContent';
import { ServiceHero } from './components/ServiceHero';
import { AgencyStats } from './components/AgencyStats';
import { TeamStory } from './components/TeamStory';
import { WebsiteAudit } from './components/WebsiteAudit';
import { Blog } from './components/Blog';
import { WebDesignBenefits } from './components/WebDesignBenefits';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigate = (page: string = 'Home') => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activePage === 'Book a 15min Call') {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [activePage]);

  const renderContent = () => {
    if (activePage === 'Website Audit') {
      return <WebsiteAudit />;
    }

    if (activePage === 'Blog') {
      return (
        <div className="bg-black min-h-screen relative z-10">
          <ServiceHero 
            title="THE PERFORMANCE LOG" 
            subtitle="Deep insights into SEO, performance architecture, and the digital marketing protocols driving capital for elite brands." 
            badge="AGENCY INTELLIGENCE" 
          />
          <Blog />
          <div className="py-32 text-center">
            <button 
              onClick={() => handleNavigate('Home')}
              className="group relative px-10 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all shadow-lg active:scale-95 font-jura uppercase tracking-widest text-sm"
            >
              <span className="relative z-10">Back to Overview</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>
        </div>
      );
    }

    if (activePage === 'Get In Touch') {
      return (
        <div className="bg-black min-h-screen relative z-10">
          <ServiceHero 
            title="INITIATE PROTOCOL" 
            subtitle="Ready to transform your digital static into capital? Our engineers are standing by to audit your growth engine." 
            badge="SECURE UPLINK" 
          />
          <Contact />
          <div className="py-32 text-center">
            <button 
              onClick={() => handleNavigate('Home')}
              className="group relative px-10 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all shadow-lg active:scale-95 font-jura uppercase tracking-widest text-sm"
            >
              <span className="relative z-10">Back to Overview</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>
        </div>
      );
    }

    const isServicePage = [
      'Paid Media',
      'Webdesign',
      'About Us'
    ].includes(activePage);

    if (activePage === 'Book a 15min Call') {
       return (
        <div className="pt-32 bg-black min-h-screen relative z-10 flex flex-col">
          <div className="text-center mb-8 px-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-anton text-primary uppercase leading-tight tracking-tighter text-glow">
              Reserve Your <span className="italic text-white">Strategy Call</span>
            </h1>
            <p className="text-gray-400 font-sf mt-4 max-w-2xl mx-auto font-light">
              Pick a time that works for you. Let's audit your current systems and engineer a growth engine that actually converts.
            </p>
          </div>
          
          <div className="flex-grow container mx-auto px-4 pb-20">
            <div 
              className="calendly-inline-widget w-full rounded-3xl overflow-hidden border border-white/5 bg-[#080808] shadow-2xl" 
              data-url="https://calendly.com/oskar-centflow-agency" 
              style={{ minWidth: '320px', height: '700px' }} 
            />
          </div>
        </div>
       );
    }

    if (isServicePage) {
      const isPaidMedia = activePage === 'Paid Media';
      const isAboutUs = activePage === 'About Us';
      const isWebdesign = activePage === 'Webdesign';
      
      let title = activePage;
      let subtitle = `Engineering next-level excellence in ${activePage}. We combine data-driven strategies with cutting-edge technology to dominate the digital landscape.`;
      let badge = "Performance Protocol";
      let metadata;

      if (isPaidMedia) {
        title = "THE BEST DIGITAL MARKETING AGENCY FOR BRANDS THAT DEMAND RESULTS";
        subtitle = "No matter the channel, our measurable, data-driven strategies adapt and outpace your competition. No fluff, just real impact where it counts.";
      } else if (isWebdesign) {
        title = "HIGH-PERFORMANCE WEBDESIGN & DEVELOPMENT";
        subtitle = "We engineer digital infrastructures designed for conversion. Every pixel is placed with ROI in mind, ensuring your site is a growth engine, not just a brochure.";
        badge = "DEVELOPMENT HUB";
      } else if (isAboutUs) {
        title = "DISCOVER CENTFLOW";
        subtitle = "Experience accelerated growth through innovative digital architectures designed for absolute market dominance.";
        badge = "AGENCY OVERVIEW";
        metadata = [
          { label: "ESTABLISHED", value: "2024" },
          { label: "HEADQUARTERS", value: "DUBLIN, IE" },
          { label: "CORE MISSION", value: "SCALABILITY" }
        ];
      }

      return (
        <div className="bg-black min-h-screen relative z-10">
          <ServiceHero title={title} subtitle={subtitle} badge={badge} isPaidMedia={isPaidMedia} metadata={metadata} />
          
          {isAboutUs && (
            <>
              <AgencyStats />
              <TeamStory />
              <Testimonials />
            </>
          )}
          {isPaidMedia && <PaidMediaContent />}
          {isWebdesign && (
            <div className="mt-12">
              <WebDesignBenefits />
              <RecentProjects standalone={true} />
            </div>
          )}

          <div className="py-32 text-center">
            <div className="mt-16 w-32 h-[1px] bg-primary mx-auto rounded-full mb-16 shadow-[0_0_20px_#2D47FF]" />
            <button 
              onClick={() => handleNavigate('Home')}
              className="group relative px-10 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all shadow-lg active:scale-95 font-jura uppercase tracking-widest text-sm"
            >
              <span className="relative z-10">Back to Overview</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-black relative z-10">
        <Hero />
        <TrustedBy />
        <IdeaToReality />
        <div id="relate"><CanYouRelate /></div>
        <div id="digital-services"><Services /></div>
        <div id="benefits"><Benefits /></div>
        <div id="why-choose-us"><WhyChooseUs /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="case-studies"><CaseStudies /></div>
        <div id="recent-projects"><RecentProjects /></div>
        <div id="process"><Process /></div>
        <div id="faq"><FAQ /></div>
        <div id="contact"><Contact /></div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-black overflow-x-hidden font-sf">
      <Header 
        onMenuToggle={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        onLogoClick={handleNavigate}
        activePage={activePage}
      />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
