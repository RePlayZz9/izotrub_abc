import React from "react";

export const AdvantagesSection = (): JSX.Element => {
  return (
    <section className="absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px] left-4 sm:left-6 md:left-8 lg:left-[78px] w-full max-w-[90%] sm:max-w-[85%] md:max-w-[800px] py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-col">
        <h1 className="[font-family:'Stem-Medium',Helvetica] font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-[64px]">
          Трубы и фасонные
        </h1>
        <h1 className="mt-1 [font-family:'Stem-Medium',Helvetica] font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-[64px]">
          изделия в
        </h1>
        <h1 className="mt-1 [font-family:'Stem-Medium',Helvetica] font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[74px] tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-[75px]">
          ППУ-ИЗОЛЯЦИИ
        </h1>        
      </div>
    </section>
  );
};