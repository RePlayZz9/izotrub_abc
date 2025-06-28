import { ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const RequestQuoteSection = (): JSX.Element => {
  // Production images slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Production images data
  const productionImages = [
    { id: 1, src: "/img/proizvodstvo1.png", alt: "Production facility 1" },
    { id: 2, src: "/img/proizvodstvo2.png", alt: "Production facility 2" },
    { id: 3, src: "/img/proizvodstvo3.jpg", alt: "Production facility 3" },
    { id: 4, src: "/img/proizvodstvo4.jpg", alt: "Production facility 4" },
    { id: 5, src: "/img/proizvodstvo5.jpeg", alt: "Production facility 5" },
    { id: 6, src: "/img/proizvodstvo6.jpg", alt: "Production facility 6" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productionImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, productionImages.length]);

  // Handle manual slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Product catalog data
  const catalogItems = [
    {
      image: "/img/trubaproduct1.png",
      title: "Труба",
      alt: "Труба",
    },
    {
      image: "/img/otvodiproduct2.png",
      title: "Отвод",
      alt: "Отвод",
    },
    {
      image: "/img/uzelproduct3.png",
      title: "Сильфонный компенсационный узел",
      alt: "Сильфонный компенсационный узел",
    },
    {
      image: "/img/komplektproduct4.png",
      title: "Комплект заделки стыка",
      alt: "Комплект заделки стыка",
    },
    {
      image: "/img/sharproduct5.png",
      title: "Шаровой кран",
      alt: "Шаровой кран",
    },
    {
      image: "/img/troinikproduct6.png",
      title: "Тройник",
      alt: "Тройник",
    },
  ];

  // Advantages data with separate icon paths
  const advantages = [
    {
      icon: "/img/moneyicon.png", // First advantage icon
      title: "Гарантированное качество продукции",
      description:
        "Мы используем сертифицированные материалы и современное оборудование, обеспечивая надёжность трубопроводов в любых условиях эксплуатации.",
    },
    {
      icon: "/img/trubiicon.png", // Second advantage icon
      title: "Низкая цена без потери качества",
      description:
        "Собственное производство позволяет предлагать выгодные условия без компромиссов по прочности и теплоизоляционным характеристикам.",
    },
    {
      icon: "/img/dataicon.png", // Third advantage icon
      title: "Минимальные сроки изготовления продукции",
      description:
        "Благодаря отлаженной логистике и запасу сырья мы имеем возможность оперативно выполняем заказы даже в сжатые сроки.",
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      label: "EMAIL:",
      value: "info@example-mail.kz",
    },
    {
      label: "ТЕЛЕФОН:",
      value: "+7 (777) 777–77–77",
    },
    {
      label: "НАШ ОФИС:",
      value: "г.Астана, Жилой комплекс Название, ул. Название улицы 115",
    },
  ];

  return (
    <section className="w-full relative py-10">
      {/* Product Catalog Section */}
      <div id="catalog-section" className="container mx-auto mb-16">
        <h2 className="text-[52px] font-medium [font-family:'Stem-Medium',Helvetica] text-[#151515] leading-[60px] mb-1">
          Каталог продукции
        </h2>
        <div className="w-[57px] h-[5px] bg-[#1d468b] mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item, index) => (
            <Card
              key={index}
              className="bg-[#d9d9d9] overflow-hidden h-[303px]"
            >
              <CardContent className="p-0 relative h-full">
                <div className="relative w-full h-full p-[43px] flex items-center justify-center">
                  <img
                    className="w-[305px] h-[190px] object-cover"
                    src={item.image}
                    alt={item.alt}
                  />
                  <div className="absolute bottom-0 left-0 w-[312px] h-[61px]">
                    <div className="absolute w-[267px] h-[61px] bg-[#ffffffb8] backdrop-blur-[5px] backdrop-brightness-[100%]">
                      <div className="absolute top-4 left-[19px] [font-family:'Manrope',Helvetica] font-bold text-[#151515] text-lg leading-5">
                        {item.title}
                      </div>
                    </div>
                    <div className="absolute w-[33px] h-9 top-[25px] left-[277px] bg-[#1d468b] flex items-center justify-center">
                      <ChevronRightIcon className="w-3.5 h-2.5 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div id="advantages-section" className="container mx-auto mb-16">
        <h2 className="text-[52px] font-medium [font-family:'Stem-Medium',Helvetica] text-[#151515] leading-[60px] mb-1">
          Наши преимущества
        </h2>
        <div className="w-[57px] h-[5px] bg-[#1d468b] mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border border-[#dadada] h-[437px]">
              <CardContent className="p-8 h-full flex flex-col items-start">
                <div className="mb-8 mt-4">
                  <img
                    src={advantage.icon}
                    alt={`Advantage ${index + 1} icon`}
                    className="h-[86px] w-auto object-contain"
                  />
                </div>
                <h3 className="[font-family:'Manrope',Helvetica] font-medium text-[28px] text-[#151515] leading-[30px] mb-6 text-left">
                  {advantage.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[19px] text-[#555555] leading-[27px] text-left">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Request Quote Section */}
      <div className="w-full relative mb-16">
        <div className="bg-[url(/img/rectangle.png)] py-16">
          <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <div className="bg-[url(/img/man.png)] bg-cover bg-center h-[716px] relative">
                <img
                  className="absolute w-13 h-[76px] bottom-[180px] right-[197px]"
                  alt="Logo"
                  src="/img/logobg.png"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-6">
              <h2 className="text-[52px] font-medium [font-family:'Stem-Medium',Helvetica] text-[#151515] leading-[60px] mb-1">
                Запросить цены
              </h2>
              <div className="w-[57px] h-[5px] bg-[#1d468b] mb-8"></div>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#333333] text-lg leading-6 mb-8">
                Осуществляем доставку по всему Казахстану
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      className="h-[43px] bg-[100%_100%] px-3 py-2.5 [font-family:'Manrope',Helvetica] text-base"
                      placeholder="Ваше имя"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-base">*</span>
                  </div>
                  <div className="relative">
                    <Input
                      className="h-[43px] bg-[#f9f9fb] border border-[#d1d1d1] px-3 py-2.5 [font-family:'Manrope',Helvetica] text-base"
                      placeholder="+7 ()"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-base">*</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      className="h-[43px] bg-[100%_100%] px-3 py-2.5 [font-family:'Manrope',Helvetica] text-base"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <Select>
                      <SelectTrigger className="h-[43px] bg-[#f9f9fb] border border-[#d1d1d1] px-3 py-2.5 [font-family:'Manrope',Helvetica] text-base">
                        <SelectValue placeholder="Оптом" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wholesale">Оптом</SelectItem>
                        <SelectItem value="retail">Розницу</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-red-500 text-base">*</span>
                  </div>
                </div>
                <Textarea
                  className="h-[116px] bg-[100%_100%] px-3 py-2.5 [font-family:'Manrope',Helvetica] text-base"
                  placeholder="Комметарий"
                />
                <Button className="h-[50px] w-[267px] bg-[#1d468b] hover:bg-black transition-colors duration-300 [font-family:'Stem-Bold',Helvetica] font-bold text-white text-base tracking-[0.64px]">
                  РАСЧЕТ СТОИМОСТИ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Production Section with Image Slider */}
      <div id="production-section" className="container mx-auto mb-16">
        <h2 className="text-[52px] font-medium [font-family:'Stem-Medium',Helvetica] text-[#151515] leading-[60px] mb-1">
          Наше производство
        </h2>
        <div className="w-[57px] h-[5px] bg-[#1d468b] mb-12"></div>

        {/* Image Slider */}
        <div className="relative w-full h-[520px] mb-10 overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {productionImages.map((image, index) => (
              <div key={image.id} className="w-full h-full flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {productionImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#1d468b] scale-125' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentSlide === 0 ? productionImages.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % productionImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Animated Progress Indicator */}
        <div className="flex items-center w-[542px] h-[13px] relative mx-auto">
          <span className="[font-family:'Stem-SemiLight',Helvetica] font-light text-[#151515] text-lg leading-7">
            0{currentSlide + 1}
          </span>
          <div className="relative mx-8 flex-grow h-0.5 bg-[#d6d4d4] overflow-hidden">
            <div 
              className="h-0.5 bg-[#1d468b] transition-all duration-700 ease-out"
              style={{ 
                width: `${((currentSlide + 1) / productionImages.length) * 100}%`
              }}
            />
          </div>
          <span className="[font-family:'Stem-SemiLight',Helvetica] font-light text-[#151515] text-lg leading-7">
            0{productionImages.length}
          </span>
        </div>
      </div>

      {/* Contact Section - Contact info on LEFT, Map on RIGHT */}
      <div id="contact-section" className="container mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - LEFT SIDE */}
          <Card className="border border-[#dddddd] p-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="mb-8">
                <p className="[font-family:'Manrope',Helvetica] font-light text-[#555555] text-base leading-[26px]">
                  {info.label}
                </p>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#151515] text-[22px] leading-[42px]">
                  {info.value}
                </p>
              </div>
            ))}

            <div className="mt-8">
              <p className="[font-family:'Manrope',Helvetica] font-light text-[#555555] text-base leading-[26px] mb-4">
                ПИШИТЕ НАМ:
              </p>
              <div className="flex space-x-4">
                {/* Email Button */}
                <a
                  href="mailto:info@example-mail.kz"
                  className="w-[54px] h-[54px] border-[1.4px] border-solid border-[#151515] hover:border-[#1d468b] hover:bg-[#1d468b] transition-all duration-300 flex items-center justify-center group"
                  title="Написать на email"
                >
                  <img
                    className="w-[25px] h-[25px] group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    alt="Email icon"
                    src="/img/email.png"
                  />
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/77777777777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[54px] h-[54px] border-[1.4px] border-solid border-[#151515] hover:border-[#64c84c] hover:bg-[#64c84c] transition-all duration-300 flex items-center justify-center group"
                  title="Написать в WhatsApp"
                >
                  <img
                    className="w-[30px] h-[30px] group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    alt="WhatsApp icon"
                    src="/img/whatsappblack.png"
                  />
                </a>
              </div>
            </div>
          </Card>

          {/* Interactive Google Map - RIGHT SIDE */}
          <div className="h-[492px] relative overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5234567890123!2d71.4297!3d51.1694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47c8d4b0d%3A0x123456789abcdef0!2sAstana%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1234567890123!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location - Astana, Kazakhstan"
              className="w-full h-full"
            />
            
            {/* Custom overlay with company info */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[280px]">
              <h4 className="[font-family:'Stem-Medium',Helvetica] font-medium text-[#151515] text-lg mb-2">
                ТОО «IZO-Trub Astana»
              </h4>
              <p className="[font-family:'Manrope',Helvetica] text-[#555555] text-sm leading-5">
                г.Астана, Жилой комплекс Название, ул. Название улицы 115
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1d468b] rounded-full"></div>
                <span className="[font-family:'Manrope',Helvetica] text-[#1d468b] text-sm font-medium">
                  Наш офис
                </span>
              </div>
            </div>

            {/* Map controls overlay */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              <button
                onClick={() => window.open('https://maps.google.com/?q=Astana,Kazakhstan', '_blank')}
                className="bg-[#1d468b] hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 [font-family:'Manrope',Helvetica]"
              >
                Открыть в Google Maps
              </button>
              <button
                onClick={() => window.open('https://yandex.ru/maps/?text=Astana,Kazakhstan', '_blank')}
                className="bg-white hover:bg-gray-50 text-[#151515] border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 [font-family:'Manrope',Helvetica]"
              >
                Яндекс.Карты
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="w-full bg-[#f0f0f0] h-[196px] relative">
        <div className="container mx-auto h-full flex flex-col justify-between py-8">
          <div className="flex justify-between items-center">
            <img
              className="w-[72px] h-[68px]"
              alt="Logo"
              src="/img/logobg.png"
            />
            <button
              onClick={scrollToTop}
              className="w-[55px] h-[55px] bg-[#1d468b] hover:bg-black transition-colors duration-300 rounded-[27.66px] flex items-center justify-center cursor-pointer"
            >
              <img
                className="w-[15px] h-4.5"
                alt="Arrow up"
                src="/img/arrowupicon.png"
              />
            </button>
          </div>

          <Separator className="my-6 bg-[#dddddd]" />

          <div className="[font-family:'Stem-Light',Helvetica] font-light text-[#151515] text-[15px] tracking-[1.50px]">
            abc design
          </div>
        </div>
      </footer>
    </section>
  );
};