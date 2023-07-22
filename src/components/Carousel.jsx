import React from 'react';
import { useState, useEffect } from 'react';
import scrub from '../assets/scrub.jpg';
import squeegee from '../assets/squeegee.jpg';
import house from '../assets/house.jpg';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{ image: house }, { image: scrub }, { image: squeegee }];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="body-content slider-body">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`,
            }}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}

        <button className="btn btn-next" onClick={nextSlide}>
          <i class="arrow right"></i>
        </button>
        <button className="btn btn-prev" onClick={prevSlide}>
          <i class="arrow left"></i>
        </button>
      </div>
    </div>
  );
}
