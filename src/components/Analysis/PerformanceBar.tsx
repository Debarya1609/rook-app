import React from 'react';
import './PerformanceBar.css';

interface PerformanceBarProps {
  label: string;
  percentage: number; // e.g., 75
  color?: string;    // Optional override, defaults to black
}

export default function PerformanceBar({ label, percentage, color = "#000" }: PerformanceBarProps) {
  return (
    <div className="perf-bar-group">
      <div className="perf-labels">
        <span className="perf-label-text">{label}</span>
        <span className="perf-percentage-text">{percentage}%</span>
      </div>
      <div className="bar-track">
        <div 
          className="bar-fill" 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: color 
          }}
        ></div>
      </div>
    </div>
  );
}