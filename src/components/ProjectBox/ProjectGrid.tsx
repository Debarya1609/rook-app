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
      <div className="projects-section">
        <div className="grid-layout">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
  );
}