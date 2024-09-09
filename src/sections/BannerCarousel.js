import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './BannerCarousel.css';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);
  const slideDuration = 5000; // 5 seconds per slide
  
  const banners = [
    {
      title: "Lenovo IDG & ISG Distribution",
      subtitle: "Leader expands with Lenovo portfolio of products, solutions, software, and services ranges from PCs and smartphones to smart collaboration.",
      buttonText: "Explore Solutions",
      bgImage: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/leaderdealershop_banner1.jpg",
      logo: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/lenovo_logo.png",
    },
    {
      title: "UniFi Physical Security Innovations",
      subtitle: "Enhanced security and simplified management at scale with a redesigned dashboard, streamlined device management, and revamped access policies.",
      buttonText: "Learn More",
      bgImage: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/leaderdealershop_banner2.jpg",
      logo: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/u_icon.png",
    },
    {
      title: "Defeat Cyberattacks",
      subtitle: "Award-winning endpoint and network threat protection, trusted by more than half a million customers worldwide.",
      buttonText: "Learn More",
      bgImage: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/leaderdealershop_banner3.jpg",
      logo: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/sophos_only.png",
    },
  ];

  const startTransition = useCallback((newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setNextSlide(newIndex);
    
    // Start fade out
    setTimeout(() => {
      // Fade in new slide
      setCurrentSlide(newIndex);
      setNextSlide(null);
      
      // End transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  }, [isTransitioning]);

  const goToNextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % banners.length;
    startTransition(newIndex);
    setProgress(0);
  }, [currentSlide, banners.length, startTransition]);

  const goToPrevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + banners.length) % banners.length;
    startTransition(newIndex);
    setProgress(0);
  }, [currentSlide, banners.length, startTransition]);

  useEffect(() => {
    const advanceSlide = () => {
      if (!isTransitioning) {
        goToNextSlide();
      }
    };

    progressInterval.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          advanceSlide();
          return 0;
        }
        return prevProgress + (100 / (slideDuration / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval.current);
  }, [goToNextSlide, isTransitioning]);

  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    startTransition(index);
    setProgress(0);
  };

  return (
    <div className="banner-carousel">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-image ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${banner.bgImage})`,
            display: index === currentSlide || index === nextSlide ? 'block' : 'none',
          }}
        ></div>
      ))}
      <div className={`banner-content ${!isTransitioning ? 'active' : ''}`}>
        <div className="banner-logo">
          <img src={banners[currentSlide].logo} alt="Logo" />
        </div>
        <div className="banner-text">
          <h2>{banners[currentSlide].title}</h2>
          <p>{banners[currentSlide].subtitle}</p>
          <button className="cta-button">
            {banners[currentSlide].buttonText}
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
      
      <button 
        className="nav-button prev-button"
        onClick={goToPrevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft />
      </button>
      
      <button 
        className="nav-button next-button"
        onClick={goToNextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight />
      </button>
      
      <div className="pagination">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
          >
            {index === currentSlide && (
              <div 
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;