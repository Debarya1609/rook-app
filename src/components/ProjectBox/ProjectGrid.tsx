import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

interface Props {
  title: string;
  projects: any[];
  onNew: () => void;
}

export default function ProjectGrid({ title, projects, onNew }: Props) {
  return (
    <div className="manage-view">
      <div className="manage-header">
        <div className="search-container">
          <input type="text" placeholder="Search here..." className="search-input" />
        </div>
        
        <div className="action-row">
          <button className="btn-black" onClick={onNew}>
            New Analysis
          </button>
          <button className="btn-black">Delete</button>
        </div>
      </div>

      <div className="projects-section">
        <h2 className="section-label">Projects</h2>
        <div className="grid-layout">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
          
          {/* Ghost button for adding new items, common in Shopify-style UIs */}
          <div className="project-box add-new-box" onClick={onNew}>
            <span>+ Add New</span>
          </div>
        </div>
      </div>
    </div>
  );
}