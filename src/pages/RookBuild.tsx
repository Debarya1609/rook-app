import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/ProjectBox/ProjectGrid';
import HomeDialogbox from '../components/HomeDialogbox';
import './CustomRookPages.css'; 
import RookBuildLogo from '../assets/Rook_Build.png';

const MOCK_CREATIONS = [
  { id: 'c1', name: 'Q1 Launch Strategy', platform: 'YouTube', dateCreated: '2026-02-06', status: 'In Progress' },
  { id: 'c2', name: 'Social Media Blast', platform: 'Instagram', dateCreated: '2026-02-07', status: 'Pending' },
];

export default function RookBuild() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = MOCK_CREATIONS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="analyze-container">
      {/* 1. Animated Hero Card Section */}
      <motion.div 
        className="hero-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="hero-logo-wrapper">
          <img src={RookBuildLogo} alt="Rook Build" className="hero-logo" />
        </div>
        <div className="hero-content">
          <h1>Rook Build</h1>
          <p>
            Transform insights into action. Generate high-converting campaign drafts, 
            content calendars, and multi-platform marketing assets. Use specialized 
            reasoning to craft copy that resonates with your specific target audience.
          </p>
        </div>
      </motion.div>

      {/* 2. Visual Divider */}
      <hr className="header-divider" />

      {/* 3. Utility Toolbar */}
      <div className="utility-toolbar">
        <div className="left-actions">
          <button className="primary-btn" onClick={() => setIsDialogOpen(true)}>
            + New Campaign
          </button>
          <button className="secondary-btn">Delete</button>
        </div>
        
        <div className="right-actions">
          <div className="search-wrapper">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="toolbar-search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 4. Project Grid */}
      <main className="grid-section">
        <ProjectGrid 
          title="Rook Build"
          projects={filteredProjects} 
          onNew={() => setIsDialogOpen(true)} 
        />
      </main>

      {/* 5. Configuration Dialog (Set to Create Mode) */}
      <HomeDialogbox 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        defaultMode="create"
      />
    </div>
  );
}