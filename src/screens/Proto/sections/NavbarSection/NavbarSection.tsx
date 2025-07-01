import React, { useState } from "react";

export const NavbarSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items data with scroll targets
  const navItems = [
    { 
      text: "КАТАЛОГ ПРОДУКЦИИ", 
      targetId: "catalog-section"
    },
    { 
      text: "НАШИ ПРЕИМУЩЕСТВА", 
      targetId: "advantages-section"
    },
    { 
      text: "ПРОИЗВОДСТВО", 
      targetId: "production-section"
    },
    { 
      text: "СВЯЖИТЕСЬ С НАМИ", 
      targetId: "contact-section"
    },
  ];

  // Smooth scroll function
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="w-full h-[60px] sm:h-[70px] md:h-[87px] bg-white fixed top-0 z-50 shadow-sm">
      <nav className="relative w-full h-full max-w-[1376px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[75px]">
        {/* Logo */}
        <img
          className="absolute w-12 sm:w-14 md:w-16 h-[45px] sm:h-[52px] md:h-[60px] top-[7px] sm:top-[9px] md:top-[13px] left-4 sm:left-6 md:left-8 lg:left-[75px]"
          alt="Company logo"
          src="/img/logobg.png"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center h-full space-x-8 xl:space-x-12">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.targetId)}
              className="[font-family:'Manrope',Helvetica] font-normal text-[#151515] text-sm xl:text-[17px] tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#1d468b] transition-colors duration-200"
            >
              {item.text}
            </button>
          ))}
        </div>

        {/* Phone Section - Desktop */}
        <div className="hidden md:flex items-center absolute right-4 sm:right-6 md:right-8 lg:right-[75px] top-1/2 transform -translate-y-1/2">
          <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[url(/img/phone.png)] bg-[100%_100%] mr-2 sm:mr-3" />
          <div className="[font-family:'Stem-SemiLight',Helvetica] font-light text-[#151515] text-sm sm:text-base lg:text-[17px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            8 (777) 777–77–77
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 flex flex-col justify-center items-center space-y-1"
        >
          <span className={`w-6 h-0.5 bg-[#151515] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#151515] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#151515] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.targetId)}
                className="[font-family:'Manrope',Helvetica] font-normal text-[#151515] text-base tracking-[0] leading-[normal] px-6 py-3 text-left hover:text-[#1d468b] hover:bg-gray-50 transition-colors duration-200"
              >
                {item.text}
              </button>
            ))}
            {/* Phone in mobile menu */}
            <div className="flex items-center px-6 py-3 border-t border-gray-100 mt-2">
              <div className="w-4 h-4 bg-[url(/img/phone.png)] bg-[100%_100%] mr-3" />
              <div className="[font-family:'Stem-SemiLight',Helvetica] font-light text-[#151515] text-base tracking-[0] leading-[normal]">
                8 (777) 777–77–77
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};