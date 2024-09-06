import React, { useState, useRef, useEffect } from 'react';
import UbiquitiNetworks from './UbiquitiNetworks';
import './KeySolutions.css';

const KeySolutions = () => {
  const [activeTab, setActiveTab] = useState('Ubiquiti Networks');
  const tabsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const tabs = ['Unified Communications', 'Leader Cloud', 'Ubiquiti Networks', 'Breeze Connect', 'Smart Infrastructure'];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Ubiquiti Networks':
        return <UbiquitiNetworks />;
      case 'Unified Communications':
        return <div>Unified Communications content coming soon...</div>;
      case 'Leader Cloud':
        return <div>Leader Cloud content coming soon...</div>;
      case 'Breeze Connect':
        return <div>Breeze Connect content coming soon...</div>;
      case 'Smart Infrastructure':
        return <div>Smart Infrastructure content coming soon...</div>;
      default:
        return null;
    }
  };

  const handleMouseDown = (e) => {
    if (!isOverflowing) return;
    setIsDragging(true);
    setStartX(e.pageX - tabsRef.current.offsetLeft);
    setScrollLeft(tabsRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = x - startX;
    tabsRef.current.scrollLeft = scrollLeft - walk;
  };

  const checkOverflow = () => {
    if (tabsRef.current) {
      const isOverflowing = tabsRef.current.scrollWidth > tabsRef.current.clientWidth;
      setIsOverflowing(isOverflowing);
      tabsRef.current.classList.toggle('overflowing', isOverflowing);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    return () => {
      window.removeEventListener('resize', checkOverflow);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  return (
    <div className="key-solutions">
      <div className='ks-container'>
        <h1>Our Key Solutions</h1>
        <p className="description">
        From cutting-edge unified networking products to business infrastructure solutions, discover our key solutions curated to grow your business.
        </p>
        
        <div 
          className="tabs" 
          ref={tabsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {tabs.map((tab) => (
            <button 
              key={tab} 
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default KeySolutions;