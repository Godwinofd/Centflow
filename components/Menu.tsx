
import React from 'react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const pages = [
    'Paid Media',
    'Webdesign',
    'Website Audit',
    'About Us',
    'Get In Touch',
    'Blog',
  ];

  return (
    <div
      className={`fixed inset-0 z-[110] bg-black/[0.98] backdrop-blur-3xl flex items-center justify-center menu-overlay transform transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="flex flex-col space-y-2 md:space-y-4">
          <h3 className="text-primary text-xs font-bold uppercase tracking-[0.5em] mb-6 font-jura opacity-50">Navigation</h3>
          <div className="flex flex-col gap-1 md:gap-2">
            {pages.map((page, index) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="group text-left py-1"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="text-2xl md:text-4xl lg:text-5xl font-jura font-bold text-white group-hover:text-primary transition-all flex items-center transform group-hover:translate-x-4">
                  <span className="mr-6 text-[10px] font-sf text-gray-600 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  {page}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center space-y-12 border-l border-white/5 pl-16">
          <div>
            <h4 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 font-jura opacity-50">Connect</h4>
            <div className="flex flex-col space-y-4 text-gray-500 font-sf text-lg">
              <a href="https://www.instagram.com/centflow_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <svg className="w-5 h-5 group-hover:text-primary transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@cent.flow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <svg className="w-5 h-5 group-hover:text-primary transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 font-jura opacity-50">Global Office</h4>
            <p className="text-gray-500 font-sf leading-relaxed text-lg">
              2C Bath Place, Blackrock<br />
              Co. Dublin, A94 T0C9<br />
              Ireland
            </p>
          </div>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('Get In Touch')}
              className="group relative px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(45,71,255,0.4)] transition-all rounded-full font-jura overflow-hidden"
            >
              <span className="relative z-10">Send Enquiry</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all font-jura text-sm tracking-widest uppercase"
        aria-label="Close menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
