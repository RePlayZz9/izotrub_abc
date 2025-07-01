import React from "react";
import { Button } from "../../components/ui/button";
import { AdvantagesSection } from "./sections/AdvantagesSection";
import { NavbarSection } from "./sections/NavbarSection";
import { RequestQuoteSection } from "./sections/RequestQuoteSection";

export const Proto = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1366px] relative">
        <NavbarSection />

        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[681px] mt-[60px] sm:mt-[70px] md:mt-[87px] overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/img/12.mp4" type="video/mp4" />
            {/* Fallback background image if video fails to load */}
            <div className="absolute inset-0 bg-[url(/12.png)] bg-cover bg-[50%_50%]" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#181818a6]" />

          <div className="absolute w-full px-4 sm:px-6 md:px-8 lg:px-[78px] bottom-[80px] sm:bottom-[120px] md:bottom-[184px]">
            <Button className="w-full sm:w-[265px] h-[45px] sm:h-[50px] bg-[#1d468b] hover:bg-black transition-colors duration-300 rounded-none">
              <span className="font-['Stem-Bold',Helvetica] font-bold text-white text-sm sm:text-base text-center tracking-[0.64px]">
                РАСЧЕТ СТОИМОСТИ
              </span>
            </Button>
          </div>

          <div className="absolute w-full px-4 sm:px-6 md:px-8 lg:px-[78px] bottom-[140px] sm:bottom-[190px] md:bottom-[270px]">
            <div className="max-w-full lg:max-w-[604px]">
              <div className="mb-4 sm:mb-6">
                <div className="font-['Manrope',Helvetica] font-normal text-sm sm:text-base md:text-[17px] tracking-[0] leading-6 sm:leading-7">
                  <span className="text-[#d5d5d5]">Наша компания занимается </span>
                  <span className="font-semibold text-white underline">
                    производством труб{" "}
                  </span>
                  <span className="text-[#d5d5d5]">
                    в пенополиуретановой изоляции в полиэтиленовой (ПЭ) и
                    оцинкованной оболочке (ОЦ).
                  </span>
                </div>
              </div>

              <div className="font-['Manrope',Helvetica] font-normal text-sm sm:text-base md:text-[17px] tracking-[0] leading-6 sm:leading-7">
                <span className="text-[#d5d5d5]">Свое производство, </span>
                <span className="font-semibold text-white underline">
                  контроль качества
                </span>
                <span className="text-[#d5d5d5]">
                  , быстрые сроки, низкие цены.
                </span>
              </div>
            </div>
          </div>

          <AdvantagesSection />
        </div>

        <div className="relative mt-[60px] sm:mt-[70px] md:mt-[90px] flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="w-full h-[300px] sm:h-[400px] md:h-[520px] lg:ml-[30px] object-cover rounded-lg lg:rounded-none"
              alt="Image"
              src="/img/trubi.png"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:ml-[60px] xl:ml-[108px] flex flex-col px-4 lg:px-0">
            <h1 className="font-['Stem-Medium',Helvetica] font-medium text-[#151515] text-2xl sm:text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[60px]">
              ТОО «IZO-Trub Astana»
            </h1>
            <div className="w-[57px] h-[5px] mt-[12px] bg-[#1d468b]" />
            
            {/* Product Description Text */}
            <div className="mt-[20px] sm:mt-[25px] md:mt-[30px] max-w-full lg:max-w-[588px]">
              <p className="font-['Manrope',Helvetica] text-base sm:text-lg md:text-[19px] text-[#555555] leading-6 sm:leading-7 mb-3 sm:mb-4 text-left">
                Мы специализируемся на производстве и реализации стальных труб в пенополиуретановой изоляции (ППУ) в полиэтиленовой (ПЭ) и оцинкованной (ОЦ) оболочке.
              </p>
              <p className="font-['Manrope',Helvetica] text-base sm:text-lg md:text-[19px] text-[#555555] leading-6 sm:leading-7 mb-3 sm:mb-4 text-left">
                Диаметры: от 57 до 1020 мм, в наличии и под заказ
              </p>
              <p className="font-['Manrope',Helvetica] text-base sm:text-lg md:text-[19px] text-[#555555] leading-6 sm:leading-7 mb-3 sm:mb-4 text-left">
                Используем ППУ высокой плотности, обеспечивающий минимальные теплопотери и долговечность при эксплуатации теплотрасс. Осуществляем доставку по городу и на объекты. Возможна отправка по всем регионам Казахстана.
              </p>
              <p className="font-['Manrope',Helvetica] text-base sm:text-lg md:text-[19px] text-[#555555] leading-6 sm:leading-7 text-left">
                Звоните или пишите в WhatsApp — ответим оперативно, проконсультируем, подготовим расчёт!
              </p>
            </div>
          </div>
        </div>

        <RequestQuoteSection />

        {/* Floating Action Buttons */}
        <div className="fixed flex flex-col gap-[5px] w-[42px] right-[15px] sm:right-[20px] bottom-[80px] sm:bottom-[100px] z-50">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/77777777777"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] bg-[#64c84c] hover:bg-[#4fb83c] transition-colors duration-300 rounded-[21px] flex items-center justify-center shadow-lg"
          >
            <div className="relative w-[18px] h-[18px]">
              <div className="relative w-[23px] h-[23px] -top-0.5 -left-0.5 bg-[url(/img/whatsappicon.png)] ">
                <img
                  className="absolute w-5.5 h-5.5 top-5.5 left-4.5"
                  alt="WhatsApp"
                  src="/img/whatsapp.png"
                />
              </div>
            </div>
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+77777777777"
            className="w-[42px] h-[42px] bg-[#1d468b] hover:bg-[#153a7a] transition-colors duration-300 rounded-[21px] flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            <img
              className="w-[30px] h-[30px] object-contain"
              alt="Phone"
              src="/img/phonecall.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};