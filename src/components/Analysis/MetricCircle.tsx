import React from 'react';
import './MetricCircle.css';

interface MetricCircleProps {
  score: number; // e.g., 7.5
}

export default function MetricCircle({ score }: MetricCircleProps) {
  // SVG Circle calculations
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  // Offset represents the "empty" part of the circle
  const strokeDashoffset = circumference - (score / 10) * circumference;

  return (
    <div className="metric-container">
      <svg viewBox="0 0 36 36" className="circular-chart">
        {/* Background Track */}
        <path
          className="circle-bg"
          d={`M18 2.0845 a ${radius} ${radius} 0 0 1 0 31.831 a ${radius} ${radius} 0 0 1 0 -31.831`}
        />
        {/* Progress Bar */}
        <path
          className="circle"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          d={`M18 2.0845 a ${radius} ${radius} 0 0 1 0 31.831 a ${radius} ${radius} 0 0 1 0 -31.831`}
        />
      </svg>
      <div className="percentage-display">
        <span className="score-value">{score}</span>
        <span className="score-total">/10</span>
      </div>
    </div>
  );
}