import React from 'react';
import { Mail, Phone } from 'lucide-react';

const contactItems = [
  { department: "Leader Sales", number: "1300 453 233" },
  { department: "Breeze Sales", number: "1300 127 339" },
  { department: "Cloud Sales", number: "02 9064 0029" },
  { department: "Accounts", number: "1300 453 233" },
  { department: "Warranty", number: "1300 789 701" }
];

const ContactDropdown = () => {
  return (
    <div className="nav-dropdown dropdown-menu-contact">
      {contactItems.map((item, index) => (
        <div key={item.department} className={`contact-item ${index === contactItems.length - 1 ? 'last-item' : ''}`}>
          <div className="contact-department">{item.department}</div>
          <div className="contact-number">{item.number}</div>
          <div className="contact-actions">
            <button className="contact-button email-button" aria-label={`Email ${item.department}`}>
              <Mail size={16} />
            </button>
            <button className="contact-button call-button" aria-label={`Call ${item.department}`}>
              <Phone size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDropdown;