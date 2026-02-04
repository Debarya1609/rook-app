import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  project: {
    name: string;
    platform: string;
    dateCreated: string;
    status: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-box">
      <div className="box-preview">
        {/* Placeholder for brand/social preview */}
        <span>ROOK AI</span>
      </div>
      <div className="box-info">
        <h3 className="box-title">{project.name}</h3>
        <div className="box-metadata">
          <span className="platform-tag">{project.platform}</span>
          <span className="date-tag">{project.dateCreated}</span>
        </div>
        <div className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
          {project.status}
        </div>
      </div>
      <button className="view-btn">View Analysis</button>
    </div>
  );
}