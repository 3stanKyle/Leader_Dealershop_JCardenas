import React, { useState } from 'react';
import './NavBar.css';

const menuItems = [
  { title: "Value", href: "/value" },
  { title: "Vendors", href: "/vendors" },
  {
    title: "Solutions",
    items: [
      { title: "Solution 1", href: "/solutions/solution-1" },
      { title: "Solution 2", href: "/solutions/solution-2" },
    ],
  },
  {
    title: "Training",
    items: [
      { title: "Course 1", href: "/training/course-1" },
      { title: "Course 2", href: "/training/course-2" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Help Center", href: "/support/help-center" },
      { title: "FAQs", href: "/support/faqs" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Our Story", href: "/about/our-story" },
      { title: "Team", href: "/about/team" },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Sales", href: "/contact/sales" },
      { title: "Support", href: "/contact/support" },
    ],
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <a href="/" className="logo">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 190 96" style={{enableBackground: "new 0 0 190 96"}}>
            <style type="text/css">
              {`.st0{fill:#037CC1;}
                .st1{fill:#FFFFFF;}`}
            </style>
            <g>
              <rect className="st0" width="190" height="96"/>
              <g>
                <path className="st1" d="M44.3,62.4H25V33.5h8V56h11.3V62.4z"/>
                <path className="st1" d="M64.5,40H45.2v-6.5h19.3V40z M64.5,62.4H45.2V44.8h19.3v6.4H53.2V56h11.3V62.4z"/>
                <path className="st1" d="M94.2,62.5H66.5l5.4-17.6h7.5l-3.2,10.6h7.6l-8.1-22H84L94.2,62.5z"/>
                <path className="st1" d="M121.3,48.1c0,4.1-1.5,7.5-4.6,10.1c-3.2,2.8-7.6,4.2-13,4.2h-8V44.8h8v11.3c2.9,0,5.1-0.7,6.7-2
                  c1.7-1.4,2.6-3.5,2.6-6.2c0-2.6-0.9-4.5-2.7-5.9s-4-2-6.7-2h-8v-6.5h7.9c5.5,0,9.8,1.4,13.1,4.3C119.8,40.5,121.3,43.9,121.3,48.1
                  z"/>
                <path className="st1" d="M141.9,40h-19.3v-6.5h19.3V40z M141.8,62.4h-19.3V44.8h19.3v6.4h-11.3V56h11.3V62.4z"/>
                <path className="st1" d="M165,40.5c0,1.7-0.3,3.1-1,4.2c-0.7,1.2-2.1,2.4-4.2,3.4c1.6,1.1,2.7,2,3.2,2.8c0.7,1.1,1,2.8,1,5.1v6.4h-7.6
                  v-6.4c0-1.5-0.4-2.7-1.2-3.6s-1.9-1.3-3.3-1.3h-8v-6.4h7.8h0.7c1.2,0,2.1-0.1,2.6-0.3c0.9-0.3,1.3-0.9,1.3-1.9
                  c0-1.1-0.5-1.8-1.5-2.2c-0.6-0.3-1.7-0.4-3.1-0.4h-8v-6.4h8.1c5,0,8.6,0.8,10.8,2.4C164.2,37.2,165,38.7,165,40.5z"/>
              </g>
            </g>
          </svg>
        </a>
        <nav className="nav-menu">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.title} className="nav-item">
                {item.items ? (
                  <>
                    <span className="nav-link nav-link-with-dropdown">
                      {item.title}
                      <DropdownArrow />
                    </span>
                    <ul className="nav-dropdown">
                      {item.items.map((subItem) => (
                        <li key={subItem.title} className="dropdown-item">
                          <a href={subItem.href} className="dropdown-link">
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
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
          <button className="button button-outline">Become a reseller</button>
          <button className="button button-primary">Sign In</button>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu open">
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
          <ul className="mobile-nav-list">
            {menuItems.map((item) => (
              <li key={item.title} className="mobile-nav-item">
                <a
                  href={item.href || '#'}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}