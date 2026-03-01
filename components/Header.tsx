
import React from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  onLogoClick: (page?: string) => void;
  activePage: string;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen, onLogoClick, activePage }) => {
  const logoUrl = "https://res.cloudinary.com/dddvmez6s/image/upload/v1769032878/Image_13-01-2026_at_21.43-Photoroom_u2pmtm.png";
  
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 flex justify-between items-center bg-transparent transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src={logoUrl} 
          alt="Centflow Logo" 
          className="h-12 sm:h-16 md:h-24 lg:h-28 w-auto object-contain cursor-pointer transition-transform hover:scale-105 active:scale-95 drop-shadow-[0_0_15px_rgba(45,71,255,0.2)]" 
          onClick={() => onLogoClick('Home')}
        />
      </div>

      {/* Menu Button */}
      <div className="flex justify-end">
        <button 
          onClick={onMenuToggle}
          className="relative w-12 h-12 md:w-14 md:h-14 flex flex-col justify-center items-center group bg-black/40 backdrop-blur-md border border-white/5 rounded-full transition-all hover:bg-black/60 shadow-xl"
        >
          <div className={`w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
          <div className={`w-5 md:w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
    </nav>
  );
};
