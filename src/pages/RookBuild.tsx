import React, { useState } from 'react';
import ProjectGrid from '../components/ProjectBox/ProjectGrid';
import HomeDialogbox from '../components/HomeDialogbox';

const MOCK_CREATIONS = [
  { id: 'c1', name: 'New Campaign Draft', platform: 'Social', dateCreated: '2026-02-04', status: 'Pending' },
];

export default function RookBuild() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="page-content-wrapper">
      <ProjectGrid 
        title="Rook Create" 
        projects={MOCK_CREATIONS} 
        onNew={() => setIsDialogOpen(true)} 
      />

      <HomeDialogbox 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        defaultMode="create" 
      />
    </div>
  );
}