import { useState, useEffect } from 'react';

const Banner = ({ bannerData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0)); 
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg"> [cite: 39]
      <img 
        src={bannerData.imageUrl} 
        alt={bannerData.title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 text-white">
        <h1 className="text-4xl font-bold mb-2">{bannerData.title}</h1> [cite: 37]
        <p className="text-lg opacity-90">{bannerData.description}</p> [cite: 37]
      </div>
    </div>
  );
};

export default Banner;