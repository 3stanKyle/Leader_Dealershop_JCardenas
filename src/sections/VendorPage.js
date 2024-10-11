import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './VendorPageStyle.css';
import {
  Key,
  Briefcase,
  HardDrive,
  BarChart2,
  Cloud,
  Wrench,
  Shield,
  Building2,
  Network,
  Printer,
  Server,
  Database,
  Monitor,
  Cpu,
  Laptop,
  Gamepad,
  Wifi,
  Smartphone,
  Camera,
  Power,
  Home,
  Headphones,
  Video,
  Laptop2,
  Settings,
  Users,
  Zap,
  PhoneCall
} from 'lucide-react';

const categories = [
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

const VendorPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalIds = [1, 2, 3].map((rowIndex) => {
      return setInterval(() => {
        if (!isPaused) {
          const carousel = document.querySelector(`.category-row-${rowIndex}`);
          if (carousel) {
            const scrollAmount = rowIndex % 2 === 0 ? 1 : -1;
            carousel.scrollLeft += scrollAmount;
            if (
              (scrollAmount > 0 && carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) ||
              (scrollAmount < 0 && carousel.scrollLeft <= 0)
            ) {
              carousel.scrollLeft = scrollAmount > 0 ? 0 : carousel.scrollWidth - carousel.clientWidth;
            }
          }
        }
      }, 50);
    });

    return () => intervalIds.forEach(clearInterval);
  }, [isPaused]);

  const filteredVendors = selectedCategory
    ? dummyVendors.filter((vendor) => vendor.category === selectedCategory)
    : dummyVendors;

  return (
    <div className="vendor-page">
      <div className="vendor-page-content">
        <h1 className="vendor-page-title">Our Vendor Partners</h1>
        <p className="vendor-page-subtitle">Leader is proud to represent a broad range of global and local tier-one and tier-two hardware, software, cloud and IoT vendors</p>
      </div>
      
      <div className="category-carousel-container">
        <div className="category-carousel">
          {[1, 2, 3].map((rowIndex) => (
            <div
              key={rowIndex}
              className={`category-row category-row-${rowIndex}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="category-button"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {React.createElement(category.icon, { className: "category-icon", size: 20 })}
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="vendor-page-content">
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