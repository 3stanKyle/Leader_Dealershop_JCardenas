import React from 'react';

const trainingItems = [
  { 
    title: "Webinar Schedules", 
    description: "Gain invaluable knowledge from industry experts",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/training-48.png",
    href: "/training/webinar-schedules" 
  },
  { 
    title: "Certification Courses", 
    description: "Upskill and earn certifications recognized by top vendors",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/certificate-48.png",
    href: "/training/certification-courses" 
  },
  { 
    title: "Video Library", 
    description: "learn at your own pace from our comprehensive video library",
    icon: "https://newsabalita.wordpress.com/wp-content/uploads/2024/09/video-library-48.png",
    href: "/training/video-library" 
  },
];

const TrainingDropdown = () => {
  return (
    <div className="nav-dropdown dropdown-menu-training">
      {trainingItems.map((item) => (
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

export default TrainingDropdown;