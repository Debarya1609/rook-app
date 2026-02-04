import React, { useState } from 'react';
import ProjectGrid from '../components/ProjectBox/ProjectGrid';
import HomeDialogbox from '../components/HomeDialogbox';

const MOCK_EVALUATIONS = [
  { id: 'e1', name: 'Competitor Comparison A', platform: 'Web', dateCreated: '2026-02-04', status: 'Analyzed' },
];

export default function RookEvaluate() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="page-content-wrapper">
      <ProjectGrid 
        title="Rook Evaluate" 
        projects={MOCK_EVALUATIONS} 
        onNew={() => setIsDialogOpen(true)} 
      />

      <HomeDialogbox 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        defaultMode="evaluate" 
      />
    </div>
  );
}