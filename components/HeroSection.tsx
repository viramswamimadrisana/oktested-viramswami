'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  
  const slides = [
    {
      image: '/slider-1.jpg',
      title: 'જય શ્રી વડવાળા ધામ',
      subtitle: 'આધ્યાત્મિક શાંતિ અને ભક્તિનું કેન્દ્ર',
      cta: 'અધિક જાણો'
    },
    {
      image: '/slider-2.png',
      title: 'શ્રી વિરમ સ્વામી મહારાજ',
      subtitle: 'આપણા આરાધ્ય દેવ',
      cta: 'જીવન ચરિત્ર'
    },
    {
      image: '/slider-3.jpg',
      title: 'પંચમહોત્સવ',
      subtitle: 'વાર્ષિક ઉત્સવ અને સમારોહ',
      cta: 'ઉત્સવ જુઓ'
    }
  ];

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', String(1 - progress));
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="relative w-full h-[90vh] max-h-[900px] overflow-hidden">
      <Swiper
        className="w-full h-full"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'hero-bullet',
          bulletActiveClass: 'hero-bullet-active',
          renderBullet: (index, className) => {
            return `<span class="${className}">
              <span class="bullet-inner"></span>
              <span class="bullet-title">${slides[index].title.substring(0, 15)}${slides[index].title.length > 15 ? '...' : ''}</span>
            </span>`;
          }
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        speed={1000}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-20 md:items-center md:justify-center md:pb-0 text-center px-4">
                <div className="max-w-4xl space-y-4 md:space-y-6 transform translate-y-8 opacity-0 transition-all duration-1000 ease-out swiper-slide-active:translate-y-0 swiper-slide-active:opacity-100">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 tracking-wide leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-amber-200 font-medium mb-6 md:mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="px-6 py-2 md:px-8 md:py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="hero-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-1 md:space-x-2"></div>

        {/* Navigation Arrows */}
        <button className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Autoplay Progress */}
        <div className="absolute bottom-20 right-4 md:right-8 w-12 h-12 flex items-center justify-center z-10">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-full h-full transform -rotate-90">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#ffffff20" strokeWidth="3"></circle>
            <circle cx="24" cy="24" r="20" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="125.6" strokeDashoffset="calc(125.6 * (1 - var(--progress, 0)))"></circle>
          </svg>
          <span ref={progressContent} className="absolute text-xs text-white"></span>
        </div>
      </Swiper>

      {/* Custom scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;