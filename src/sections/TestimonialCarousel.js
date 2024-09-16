import React, { useRef, useEffect, useState } from 'react';
import './TestimonialCarousel.css';

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Freelance Designer",
    content: "As a solo entrepreneur, this product has been invaluable. It's like having a whole team at my fingertips."
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "CTO, InnovateTech",
    content: "The level of customer support we've received is outstanding. They're always there when we need them."
  },
  {
    id: 3,
    name: "David Kim",
    role: "Product Manager, StartupX",
    content: "This solution has streamlined our processes and significantly boosted our team's efficiency."
  },
  {
    id: 4,
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours."
  },
  {
    id: 5,
    name: "Sarah Lee",
    role: "Marketing Director, GrowthCo",
    content: "I can't imagine running our campaigns without this tool. It's been a game-changer for our team's productivity."
  }
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollWidth = carousel.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed here
      carousel.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="testimonial-carousel-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-carousel-wrapper">
        <div
          className="testimonial-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
              <div className="quote-icon">❝</div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;