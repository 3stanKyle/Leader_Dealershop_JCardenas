import React, { useState, useEffect } from 'react';
import './AnimatedStatsCounter.css';

const stats = [
  { value: 5, label: 'Warehouses, Sales & RA Australia-wide', suffix: 'X' },
  { value: 100, label: 'Australian Owned & Operated Company', suffix: '%' },
  { value: 71, label: 'Global Leading Vendors & Brands we Distribute', suffix: '+' },
  { value: 27, label: 'Years of Service to The Australian IT Channel', suffix: '' },
  { value: 1000, label: 'Local Businesses Supported by Leader', suffix: '+' }
];

const CounterItem = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 100;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current > value) {
        current = value;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <h2>{count}{suffix}</h2>
      <p>{label}</p>
    </div>
  );
};

const AnimatedStatsCounter = () => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <CounterItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedStatsCounter;