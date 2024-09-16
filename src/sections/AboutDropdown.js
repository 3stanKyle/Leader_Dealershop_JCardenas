import React from 'react';

const aboutItems = [
  { 
    title: "Core Values", 
    description: "Discover why Leader is committed to your success",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/champion-48.png",
    href: "/about/core-values" 
  },
  { 
    title: "Our History", 
    description: "Learn our humble beginnings from foundation in 1996 to date",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/history-48.png",
    href: "/support/our-history" 
  },
  { 
    title: "Careers", 
    description: "Explore opportunities and grow your career with Leader",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/careers-48.png",
    href: "/support/careers" 
  },
  { 
    title: "News", 
    description: "See the latest updates and announcements from Leader",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/news-48.png",
    href: "/support/news" 
  },
];

const AboutDropdown = () => {
  return (
    <div className="nav-dropdown dropdown-menu-about">
      {aboutItems.map((item) => (
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

export default AboutDropdown;