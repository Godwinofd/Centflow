
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
    'Book a 15min Call'
  ];

  return (
    <div 
      className={`fixed inset-0 z-[110] bg-black bg-opacity-98 backdrop-blur-3xl flex items-center justify-center menu-overlay transform transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
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
            <div className="flex flex-col space-y-3 text-gray-500 font-sf text-lg">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
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
              onClick={() => onNavigate('Book a 15min Call')}
              className="group relative px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(45,71,255,0.4)] transition-all rounded-full font-jura overflow-hidden"
            >
              <span className="relative z-10">Start Scaling Now</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors font-jura text-sm tracking-widest uppercase md:hidden"
      >
        Close [X]
      </button>
    </div>
  );
};
