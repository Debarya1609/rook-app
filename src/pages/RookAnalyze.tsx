import React, { useState } from 'react';
import ProjectGrid from '../components/ProjectBox/ProjectGrid';
import HomeDialogbox from '../components/HomeDialogbox';

// Mock data to test the "separate boxes" look from your drawing
const MOCK_PROJECTS = [
  { id: '1', name: 'Brand Audit Q1', platform: 'Instagram', dateCreated: '2026-02-01', status: 'Analyzed' },
  { id: '2', name: 'Competitor Feed', platform: 'LinkedIn', dateCreated: '2026-02-03', status: 'In Progress' },
];

export default function RookAnalyze() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="page-content-wrapper">
      {/* 1. The Header and Grid of Boxes */}
      <ProjectGrid 
        title="Rook Analyze" 
        projects={MOCK_PROJECTS} 
        onNew={() => setIsDialogOpen(true)} 
      />

      {/* 2. The Form to add new boxes */}
      <HomeDialogbox 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        defaultMode="analyze"
      />
    </div>
  );
}