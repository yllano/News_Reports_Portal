import { useState, useEffect } from 'react';

const Banner = ({ bannerData, onViewMore }) => {
  const slides = bannerData.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden"
      style={{ height: 'clamp(200px, 35vw, 380px)', boxShadow: '0 16px 60px rgba(26,58,46,0.25)' }}>

      {/* Imágenes de fondo */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.imageUrl}
          alt={s.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: i === currentSlide ? 1 : 0, transition: 'opacity 0.8s ease' }}
        />
      ))}

      {/* Gradient overlay — en móvil cubre más para legibilidad */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(10,25,18,0.88) 0%, rgba(10,25,18,0.55) 55%, rgba(10,25,18,0.2) 100%)' }} />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-end sm:justify-center px-5 sm:px-10 md:px-16 pb-12 sm:pb-0"
        style={{ opacity: isAnimating ? 0 : 1, transform: isAnimating ? 'translateY(10px)' : 'translateY(0)', transition: 'all 0.35s ease' }}>

        {/* Badge — oculto en pantallas muy pequeñas */}
        <span className="hidden xs:inline-flex sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest w-fit mb-2 sm:mb-4"
          style={{ background: 'rgba(64,145,108,0.3)', color: '#74c69d', border: '1px solid rgba(116,198,157,0.4)', backdropFilter: 'blur(8px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Destacado
        </span>

        <h2 className="text-white font-black leading-tight mb-2 sm:mb-3"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 4vw, 2.8rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
          {slide.title}
        </h2>

        <p className="text-xs sm:text-sm md:text-base max-w-sm sm:max-w-lg mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none transition-colors duration-300"
          style={{ color: 'rgba(255,255,255,0.8)' }}>
          {slide.description}
        </p>

        <button
          onClick={() => onViewMore(slide)}
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm w-fit transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #40916c, #74c69d)', color: '#fff', boxShadow: '0 8px 32px rgba(64,145,108,0.4)' }}>
          Ver informe
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots + Contador — alineados en la parte inferior */}
      <div className="absolute bottom-3 sm:bottom-6 left-5 sm:left-10 md:left-16 flex items-center gap-3">
        <div className="flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="rounded-full transition-all duration-500 cursor-pointer"
              style={{
                width: index === currentSlide ? '20px' : '6px',
                height: '6px',
                background: index === currentSlide ? 'linear-gradient(90deg, #40916c, #74c69d)' : 'rgba(255,255,255,0.35)',
                boxShadow: index === currentSlide ? '0 0 10px rgba(116,198,157,0.5)' : 'none',
              }}
            />
          ))}
        </div>
        <span className="text-[10px] sm:text-xs font-bold" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Banner;