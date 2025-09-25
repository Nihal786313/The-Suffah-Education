import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const StatsSection = () => {
  const [statsRef, isVisible] = useIntersectionObserver();
  
  const stats = [
    { number: "10K+", label: "Students", icon: "👥" },
    { number: "500+", label: "Expert Faculty", icon: "👨‍🏫" },
    { number: "50+", label: "Courses", icon: "📚" },
    { number: "98%", label: "Success Rate", icon: "🎯" }
  ];
  
  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;