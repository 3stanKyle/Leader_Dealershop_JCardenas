import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './UbiquitiNetworks.css';

const UbiquitiNetworks = () => {
  const [activeVideo, setActiveVideo] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressCircleRef = useRef(null);

  const ubiquitiContent = [
    { 
      id: 1, 
      title: 'UniFi Site Manager', 
      desc: 'One interface for managing all sites and technology with total control.',
      videoUrl: 'https://ui.com/microsite/static/media/site-manager.8c851713.mp4'
    },
    { 
      id: 2, 
      title: 'UniFi Cloud Gateways', 
      desc: 'Internet gateways with powerful cybersecurity and routing capabilities.',
      videoUrl: 'https://ui.com/microsite/static/media/cloud-gateway.4ea1a729.mp4'
    },
    { 
      id: 3, 
      title: 'UniFi Switching', 
      desc: 'High-capacity network switches for massive scalability.',
      videoUrl: 'https://ui.com/microsite/static/media/switching.658e2911.mp4'
    }
  ];

  const featureCards = [
    { 
      title: 'Physical Security', 
      desc: 'Groundbreaking security and simplified management at scale with an intuitive dashboard, streamlined device management, and access policies.',
      posterUrl: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/ui_physical-security.jpg'
    },
    { 
      title: 'Scalable WiFi', 
      desc: 'A massively scalable WiFi 7 platform capable of delivering wired-like user experiences. Start with one AP and effortlessly scale to hundreds.',
      posterUrl: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/ui_scalable-wifi.jpg'
    },
    { 
      title: 'New Integrations', 
      desc: 'From managed VoIP solutions with effortless deployment to plug-and-play mobile routers and premium audio, UniFi has it all in store for you.',
      posterUrl: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/ui_new-integrations.jpg'
    }
  ];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error attempting to play video:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      if (progressCircleRef.current) {
        const circumference = 2 * Math.PI * 27;
        const offset = circumference - (progress / 100) * circumference;
        progressCircleRef.current.style.strokeDashoffset = offset;
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoClick = (id) => {
    setActiveVideo(id);
    setIsPlaying(true);
    setProgress(0);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.currentTime = 0;
      setProgress(0);
      if (progressCircleRef.current) {
        progressCircleRef.current.style.strokeDashoffset = 2 * Math.PI * 27;
      }
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.error("Error attempting to play video:", error);
        });
      }
    }
  }, [activeVideo]);

  const FeatureCard = ({ title, desc, posterUrl }) => (
    <div className="feature-card">
      <div className="card-image">
        <img src={posterUrl} alt={title} className="poster-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href="#" className="learn-more">
          Learn More
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className="ubiquiti-content">
        <div className="ui-container">
        <h2>UniFi Full Stack Networking</h2>
        <p className="ui-main-description">
        A comprehensive environment for all your IT needs, starting with networking and seamlessly integrating security cameras, VoIP phones, door access, and much more - All magically unified in an incredible software interface with scalable, license-free cloud.
        </p>
        <div className="unifi-section">
            <div className="unifi-list">
            <h3>How it Works</h3>
            {ubiquitiContent.map((item) => (
                <div 
                key={item.id} 
                className={`unifi-item ${activeVideo === item.id ? 'active' : ''}`}
                >
                <div className="unifi-item-header">
                    <div className="number">{item.id}</div>
                    <h4>{item.title}</h4>
                </div>
                <div className="unifi-item-content">
                    <p>{item.desc}</p>
                    <a href="#" className="watch-video" onClick={(e) => { e.preventDefault(); handleVideoClick(item.id); }}>
                    Watch Video
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </a>
                </div>
                </div>
            ))}
            </div>
            <div className="unifi-video">
            <div className="video-container">
                <video
                ref={videoRef}
                src={ubiquitiContent.find(item => item.id === activeVideo)?.videoUrl}
                onTimeUpdate={handleProgress}
                onEnded={handleVideoEnded}
                >
                Your browser does not support the video tag.
                </video>
                <div className="video-controls">
                <button onClick={togglePlayPause} className="play-pause-btn">
                    <svg className="progress-ring" width="56" height="56">
                    <circle
                        className="progress-ring__circle"
                        stroke="#006FFF"
                        strokeWidth="4"
                        fill="transparent"
                        r="26"
                        cx="28"
                        cy="28"
                        strokeDasharray={2 * Math.PI * 27}
                        ref={progressCircleRef}
                    />
                    </svg>
                    {isPlaying ? '❚❚' : '▶'}
                </button>
                </div>
            </div>
            </div>
        </div>

        <div className="feature-cards-container">
            <Swiper
            spaceBetween={'20'}
            slidesPerView={'auto'}
            breakpoints={{
                1024: {
                slidesPerView: 1, // No carousel on larger screens
                allowTouchMove: false, // Disable swipe on desktop
                spaceBetween: 0, // Ensure no extra space on desktop
                },
            }}
            className="feature-cards"
            >
            {featureCards.map((card, index) => (
                <SwiperSlide key={index}>
                <FeatureCard {...card} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </div>  
    </div>
  );
};

export default UbiquitiNetworks;