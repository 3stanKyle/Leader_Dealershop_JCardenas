import React, { useState } from 'react';
import UbiquitiNetworks from './UbiquitiNetworks';
import './KeySolutions.css';

const KeySolutions = () => {
  const [activeTab, setActiveTab] = useState('Ubiquiti Networks');

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

  return (
    <div className="key-solutions">
      <h1>Our Key Solutions</h1>
      <p className="description">
        Our commitment to partner success is underpinned by our deep vendor expertise, on-site knowledge, and the dedicated efforts of our pre-sales solution teams. Coupled with access to a wide range of programs, tools, and resources, we empower you with the brands we distribute.
      </p>
      
      <div className="tabs">
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

      {renderTabContent()}
    </div>
  );
};

export default KeySolutions;