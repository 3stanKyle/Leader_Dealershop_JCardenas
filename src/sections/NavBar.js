import React, { useState } from 'react';
import './NavBar.css';
import SolutionsDropdown from './SolutionsDropdown';
import TrainingDropdown from './TrainingDropdown';
import SupportDropdown from './SupportDropdown';
import AboutDropdown from './AboutDropdown';
import ContactDropdown from './ContactDropdown';

const menuItems = [
  { title: "Value", href: "/value" },
  { title: "Vendors", href: "/vendors" },
  {
    title: "Solutions",
    dropdown: SolutionsDropdown
  },
  {
    title: "Training",
    dropdown: TrainingDropdown
  },
  {
    title: "Support",
    dropdown: SupportDropdown
  },
  {
    title: "About",
    dropdown: AboutDropdown
  },
  {
    title: "Contact",
    dropdown: ContactDropdown
  },
];

const DropdownArrow = () => (
  <svg
    className="dropdown-arrow"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-container">
              <img 
                src="https://newsabalita.wordpress.com/wp-content/uploads/2024/09/leader_proudlyaustralian_logo.png" 
                alt="Leader Proudly Australian Logo" 
                className="logo-image"
              />
            </div>
          </a>
          <nav className="nav-menu">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.title} className="nav-item">
                  {item.dropdown ? (
                    <div 
                      className="nav-item-with-dropdown"
                      onMouseEnter={() => handleDropdownToggle(item.title)}
                      onMouseLeave={() => handleDropdownToggle(null)}
                    >
                      <span className="nav-link nav-link-with-dropdown">
                        {item.title}
                        <DropdownArrow />
                      </span>
                      {activeDropdown === item.title && <item.dropdown />}
                    </div>
                  ) : (
                    <a href={item.href} className="nav-link">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="button-container">
            <button className="button button-outline">Register</button>
            <button className="button button-primary">Sign in</button>
          </div>
        </div>
      </header>
      <div className={`screen-overlay ${activeDropdown ? 'active' : ''}`}></div>
    </>
  );
}