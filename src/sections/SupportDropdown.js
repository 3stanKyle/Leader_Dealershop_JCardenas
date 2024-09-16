import React from 'react';

const supportItems = [
  { 
    title: "Warranty", 
    description: "Providing you with the best possible technical guidance",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/warranty-48.png",
    href: "/support/warranty" 
  },
  { 
    title: "Leader Devices", 
    description: "Explore the entire range of Leader device solutions",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/computer-48.png",
    href: "/support/leader-devices" 
  },
  { 
    title: "Find Reseller", 
    description: "Look up the closest Leader device dealer near you",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/locator-48.png",
    href: "/support/find-reseller" 
  },
];

const SupportDropdown = () => {
  return (
    <div className="nav-dropdown dropdown-menu-support">
      {supportItems.map((item) => (
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

export default SupportDropdown;