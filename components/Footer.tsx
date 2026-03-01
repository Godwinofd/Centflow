
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-primary border-opacity-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dddvmez6s/image/upload/v1769032878/Image_13-01-2026_at_21.43-Photoroom_u2pmtm.png" 
              alt="Centflow Logo" 
              className="h-24 w-auto object-contain brightness-110"
            />
          </div>
          <div className="flex gap-8 text-gray-500 text-sm uppercase font-bold tracking-[0.3em] font-jura">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          <div className="text-gray-500 text-sm italic font-sf">
            &copy; 2024 Centflow Digital Marketing Agency. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
