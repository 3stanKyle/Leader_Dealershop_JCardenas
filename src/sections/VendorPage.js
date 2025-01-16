import React, { useState } from 'react';
import './VendorPageStyle.css';
import {
  Key, Briefcase, HardDrive, BarChart2, Cloud, Wrench, Shield, Building2,
  Network, Printer, Server, Database, Monitor, Cpu, Laptop, Gamepad, Wifi,
  Smartphone, Camera, Power, Home, Headphones, Video, Laptop2, Settings,
  Users, Zap, PhoneCall, ChevronDown,
} from 'lucide-react';

const categories = [
  { name: 'All', icon: null },
  { name: 'Access Control', icon: Key },
  { name: 'Accessories', icon: Briefcase },
  { name: 'Backup & Recovery', icon: HardDrive },
  { name: 'Business Applications', icon: BarChart2 },
  { name: 'Business Monitors', icon: Monitor },
  { name: 'Cloud', icon: Cloud },
  { name: 'Components', icon: Cpu },
  { name: 'Copilot + PC', icon: Laptop },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Data Centre', icon: Building2 },
  { name: 'Data Management', icon: Database },
  { name: 'Desktops', icon: Monitor },
  { name: 'Device-as-a-Service', icon: Smartphone },
  { name: 'Gaming', icon: Gamepad },
  { name: 'IoT', icon: Wifi },
  { name: 'MSPs', icon: Users },
  { name: 'Networking', icon: Network },
  { name: 'Notebooks', icon: Laptop },
  { name: 'Peripherals', icon: Headphones },
  { name: 'Printers', icon: Printer },
  { name: 'Pro AV & Displays', icon: Monitor },
  { name: 'Power Solutions', icon: Zap },
  { name: 'Remote Working', icon: Home },
  { name: 'Scanners & Mobility', icon: Smartphone },
  { name: 'Security Surveillance', icon: Camera },
  { name: 'Servers', icon: Server },
  { name: 'Storage', icon: HardDrive },
  { name: 'UC', icon: PhoneCall },
  { name: 'UPS', icon: Power },
  { name: 'Video Conferencing', icon: Video },
  { name: 'Workstations', icon: Laptop2 },
];

const dummyVendors = [
  { name: '3CX', category: 'Unified Communications', phone: '02 9065 6046', website: 'https://www.3cx.com/' },
  { name: '8WARE', category: 'Accessories', phone: '1300 308 673', website: 'https://www.leadersystems.com.au/' },
  { name: 'Acronis', category: 'Backup & Recovery', phone: '1300 308 673', website: 'https://www.acronis.com' },
  { name: 'AMD', category: 'Components', phone: '1300 308 673', website: 'https://www.amd.com/en' },
  { name: 'Astrotek', category: 'Networking', phone: '1300 308 673', website: 'https://www.leadersystems.com.au/' },
  { name: 'ATEN', category: 'Data Centre', phone: '+61-2-9114-9933', website: 'https://www.aten.com/au/en/' },
  { name: 'Avira', category: 'Cybersecurity', phone: '1300 308 673', website: 'https://www.avira.com/' },
  { name: 'Aywun', category: 'Components', phone: '1300 308 673', website: 'https://www.leadersystems.com.au/' },
];

const AccordionDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`accordion-dropdown ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={handleToggle}>
        {value.icon && React.createElement(value.icon, { size: 20 })}
        <span>{value.name}</span>
        <ChevronDown className={`dropdown-arrow ${isOpen ? 'open' : ''}`} size={20} />
      </div>
      {isOpen && (
        <div className="accordion-content">
          {options.map((option) => (
            <div
              key={option.name}
              className={`accordion-item ${option.name === value.name ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.icon && React.createElement(option.icon, { size: 20 })}
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const VendorPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredVendors = selectedCategory.name === 'All'
    ? dummyVendors
    : dummyVendors.filter((vendor) => vendor.category === selectedCategory.name);

  return (
    <div className="vendor-page">
      <div className="vendor-page-content">
        <h1 className="vendor-page-title">Our Vendor Partners</h1>
        <p className="vendor-page-subtitle">Leader is proud to represent a broad range of global and local tier-one and tier-two hardware, software, cloud and IoT vendors</p>
        
        <div className="category-selection-container">
          <h2>Select Category</h2>
          <div className="category-dropdown-wrapper">
            <AccordionDropdown
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="vendor-grid">
          {filteredVendors.map((vendor) => (
            <div key={vendor.name} className="vendor-card">
              <h3>{vendor.name}</h3>
              <p>Phone: {vendor.phone}</p>
              <p>Website: <a href={vendor.website} target="_blank" rel="noopener noreferrer">{vendor.website}</a></p>
              <button className="vendor-contact-button">Contact {vendor.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorPage;