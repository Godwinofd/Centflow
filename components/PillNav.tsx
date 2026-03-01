
import React, { useState, useRef, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: NavItem[];
  activeHref?: string;
  onNavigate?: (href: string) => void;
  className?: string;
  baseColor?: string;
  pillColor?: string;
  pillTextColor?: string;
  hoveredPillTextColor?: string;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref = "/",
  onNavigate,
  className = "",
  baseColor = "#000000",
  pillColor = "#ffffff",
  pillTextColor = "#000000",
  hoveredPillTextColor = "#ffffff"
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const updatePill = (index: number | null) => {
    if (index === null) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const item = itemsRef.current[index];
    if (item && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      setPillStyle({
        width: itemRect.width,
        height: itemRect.height,
        left: itemRect.left - navRect.left,
        top: itemRect.top - navRect.top,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    // Initial active state or updates
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex !== -1 && hoveredIndex === null) {
      updatePill(activeIndex);
    }
  }, [activeHref]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    updatePill(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex !== -1) {
      updatePill(activeIndex);
    } else {
      updatePill(null);
    }
  };

  return (
    <div 
      ref={navRef}
      className={`relative flex items-center p-1.5 rounded-full shadow-2xl transition-all duration-500 bg-black/40 backdrop-blur-md border border-white/5 ${className}`}
      style={{ backgroundColor: `${baseColor}cc` }}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Section */}
      <div className="flex items-center pl-3 pr-4 border-r border-white/10 mr-2">
        <img 
          src={logo} 
          alt={logoAlt} 
          className="h-8 md:h-10 w-auto object-contain cursor-pointer transition-transform hover:scale-110" 
          onClick={() => onNavigate?.('/')}
        />
      </div>

      {/* Nav Items Container */}
      <div className="relative flex items-center">
        {/* Sliding Pill Background */}
        <div 
          className="absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full z-0"
          style={{
            ...pillStyle,
            backgroundColor: pillColor,
          }}
        />

        {/* Buttons */}
        {items.map((item, index) => {
          const isActive = activeHref === item.href;
          const isHovered = hoveredIndex === index;
          
          return (
            <button
              key={item.label}
              // Fixed: Ensure ref callback returns void instead of the element to satisfy React.Ref callback type requirements
              ref={(el) => { itemsRef.current[index] = el; }}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => onNavigate?.(item.href)}
              className={`relative z-10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest font-jura transition-colors duration-500 rounded-full whitespace-nowrap`}
              style={{
                color: (isHovered || (isActive && hoveredIndex === null)) ? pillTextColor : '#888888'
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PillNav;
