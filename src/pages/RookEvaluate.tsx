import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/ProjectBox/ProjectGrid';
import HomeDialogbox from '../components/HomeDialogbox';
import './CustomRookPages.css'; 

// Import local asset
import RookEvaluateLogo from '../assets/Rook_Evaluate.png';

const MOCK_EVALUATIONS = [
  { id: 'e1', name: 'Competitor Comparison A', platform: 'Website', dateCreated: '2026-02-04', status: 'Analyzed' },
  { id: 'e2', name: 'Market Gap Analysis', platform: 'LinkedIn', dateCreated: '2026-02-05', status: 'In Progress' },
];

export default function RookEvaluate() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = MOCK_EVALUATIONS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="analyze-container">
      {/* 1. Hero Card Section */}
      <motion.div 
        className="hero-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="hero-logo-wrapper">
          <img src={RookEvaluateLogo} alt="Rook Evaluate" className="hero-logo" />
        </div>
        <div className="hero-content">
          <h1>Rook Evaluate</h1>
          <p>
            Benchmark your digital presence against industry leaders. Compare product 
            URLs side-by-side to identify competitive advantages, UX friction, and 
            conversion opportunities through deep AI evaluation.
          </p>
        </div>
      </motion.div>

      {/* 2. Visual Divider */}
      <hr className="header-divider" />

      {/* 3. Utility Toolbar */}
      <div className="utility-toolbar">
        <div className="left-actions">
          <button className="primary-btn" onClick={() => setIsDialogOpen(true)}>
            + New Evaluation
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
              placeholder="Search evaluations..." 
              className="toolbar-search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 4. Content Section */}
      <main className="grid-section">
        <ProjectGrid 
          title="Rook Evaluate"
          projects={filteredProjects} 
          onNew={() => setIsDialogOpen(true)} 
        />
      </main>

      {/* 5. Configuration Dialog (Set to Evaluate Mode) */}
      <HomeDialogbox 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        defaultMode="evaluate"
      />
    </div>
  );
}