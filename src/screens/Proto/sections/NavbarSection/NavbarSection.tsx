import React from "react";

export const NavbarSection = (): JSX.Element => {
  // Navigation menu items data with scroll targets
  const navItems = [
    { 
      text: "КАТАЛОГ ПРОДУКЦИИ", 
      className: "left-[242px]",
      targetId: "catalog-section"
    },
    { 
      text: "НАШИ ПРЕИМУЩЕСТВА", 
      className: "left-[444px]",
      targetId: "advantages-section"
    },
    { 
      text: "ПРОИЗВОДСТВО", 
      className: "left-[656px]",
      targetId: "production-section"
    },
    { 
      text: "СВЯЖИТЕСЬ С НАМИ", 
      className: "left-[815px]",
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
  };

  return (
    <header className="w-full h-[87px] bg-white fixed top-0 z-50 shadow-sm">
      <nav className="relative w-full h-full max-w-[1376px] mx-auto">
        {/* Logo */}
        <img
          className="absolute w-16 h-[60px] top-[13px] left-[75px]"
          alt="Company logo"
          src="/img/logobg.png"
        />

        {/* Navigation Items */}
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.targetId)}
            className={`absolute h-3 top-10 ${item.className} [font-family:'Manrope',Helvetica] font-normal text-[#151515] text-[17px] tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#1d468b] transition-colors duration-200`}
          >
            {item.text}
          </button>
        ))}

        {/* Phone Icon */}
        <div className="absolute w-5 h-5 top-[37px] left-[1114px] bg-[url(/img/phone.png)] bg-[100%_100%]" />

        {/* Phone Number */}
        <div className="absolute h-3 top-10 left-[1145px] [font-family:'Stem-SemiLight',Helvetica] font-light text-[#151515] text-[17px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
          8 (777) 777–77–77
        </div>
      </nav>
    </header>
  );
};