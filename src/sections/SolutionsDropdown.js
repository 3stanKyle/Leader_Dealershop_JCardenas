import React from 'react';

const solutionsItems = [
  { 
    title: "Unified Communications", 
    description: "Connect to anyone on any device from anywhere",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/headset-40.png",
    href: "/solutions/unified-communications" 
  },
  { 
    title: "Meeting Rooms", 
    description: "Enhance collaboration in diverse meeting spaces",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/video-call-40.png",
    href: "/solutions/meeting-rooms" 
  },
  { 
    title: "Leader Cloud", 
    description: "Your path to a profitable business in the cloud",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/cloud-40.png",
    href: "/solutions/leader-cloud" 
  },
  { 
    title: "UniFi Networks", 
    description: "The comprehensive solution for all your IT needs",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/network-40.png",
    href: "/solutions/unifi-networks" 
  },
  { 
    title: "Breeze Connect", 
    description: "Your telco service provider with exceptional reliability",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/voip-40.png",
    href: "/solutions/breeze-connect" 
  },
  { 
    title: "Smart Infrastructure", 
    description: "Infrastructure solutions to organizations of all sizes",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/servers-48.png",
    href: "/solutions/smart-infrastructure" 
  },
];

const SolutionsDropdown = () => {
  return (
    <div className="nav-dropdown dropdown-menu-solutions">
      {solutionsItems.map((item) => (
        <a key={item.title} href={item.href} className="dropdown-menu-item">
          <div className="dropdown-menu-content">
            <div className="dropdown-menu-icon">
                <img width="40" height="40" src={item.icon} alt={item.title} />
            </div>
            <h3 className="dropdown-menu-item-title">{item.title}</h3>
            <p className="dropdown-menu-item-description">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SolutionsDropdown;