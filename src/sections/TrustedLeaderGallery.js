import React, { useEffect, useRef, useState } from 'react';
import './TrustedLeaderGallery.css';

const TrustedLeaderGallery = () => {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/20230912-_dsc8559-1.jpg", alt: "Trust Image 1" },
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/img_0182.jpg", alt: "Trust Image 2" },
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/img_0571.jpg", alt: "Trust Image 3" },
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/img_0689.jpg", alt: "Trust Image 4" },
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-255.jpg", alt: "Trust Image 5" },
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-142.jpg", alt: "Trust Image 6" },
    { src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-206.jpg", alt: "Trust Image 6" }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrolling = false;
    let scrollAmount = 0;
    const speed = 0.5;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }

        if (scrolling) {
          requestAnimationFrame(autoScroll);
        }
      }
    };

    scrolling = true;
    autoScroll();

    const handleMouseEnter = () => {
      scrolling = false;
    };

    const handleMouseLeave = () => {
      scrolling = true;
      autoScroll();
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrolling = false;
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = (currentImageIndex + direction + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  return (
    <div className="container">
      <div className="headlineSection">
        <h1 className="mainHeadline">
            Trusted by 1,000's of IT Resellers for over 27 Years
        </h1>
        <p className="description">
          We have over 27+ years of service to the Australian IT channel and we're committed to help you grow your business in every step of your journey to profitability.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="galleryContainer"
      >
        <div className="imageStrip">
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="imageWrapper"
              onClick={() => openModal(image, index % images.length)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className={`modal ${selectedImage ? 'modalOpen' : ''}`} onClick={closeModal}>
        <div className="modalContent" onClick={e => e.stopPropagation()}>
          {selectedImage && (
            <>
              <button className="closeButton" onClick={closeModal}>&times;</button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modalImage"
              />
              <button 
                className="navigationButton prevButton" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
              >
                &#8249;
              </button>
              <button 
                className="navigationButton nextButton" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
              >
                &#8250;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrustedLeaderGallery;