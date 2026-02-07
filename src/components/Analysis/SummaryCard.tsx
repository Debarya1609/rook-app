import React from 'react';
import './SummaryCard.css';

interface Bullet {
  type: 'success' | 'warning' | 'info' | 'error';
  text: string;
}

interface SummaryCardProps {
  title: string;
  subtitle?: string;
  content: string;
  badge?: string;
  icon?: string | React.ReactNode;
  bullets?: Bullet[];
}

export default function SummaryCard({ 
  title, 
  subtitle, 
  content, 
  badge, 
  icon, 
  bullets 
}: SummaryCardProps) {
  return (
    <div className="summary-card-inner">
      <header className="summary-card-header">
        <div className="header-top">
          {icon && <span className="card-icon">{icon}</span>}
          <h3 className="card-title">{title}</h3>
          {badge && (
            <span className={`card-badge ${badge.toLowerCase().replace(/\s+/g, '-')}`}>
              {badge}
            </span>
          )}
        </div>
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
      </header>

      <div className="card-body">
        <p className="card-main-content">{content}</p>
        
        {bullets && bullets.length > 0 && (
          <ul className="card-bullets">
            {bullets.map((bullet, index) => (
              <li key={index} className={`bullet-item ${bullet.type}`}>
                <span className="bullet-icon">
                  {bullet.type === 'success' && '✓'}
                  {bullet.type === 'warning' && '⚠'}
                  {bullet.type === 'info' && '→'}
                  {bullet.type === 'error' && '✕'}
                </span>
                <span className="bullet-text">{bullet.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}