import React, { useState } from 'react';
import './AnalyzeDashboard.css';
import MetricCircle from './MetricCircle';
import SummaryCard from './SummaryCard';
import PerformanceBar from './PerformanceBar';
import AnalysisDrawer from './AnalysisDrawer';

export default function AnalyzeDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>BlendSpec Studio</h1>
        <p className="last-scan">Last scan: Today at 2:34 PM • TechFlow Inc.</p>
      </header>

      <div className="dashboard-grid">
        {/* Executive Summary Section */}
        <div className="grid-span-2 main-card">
          <div className="flex-row">
            <MetricCircle score={7.5} />
            <SummaryCard 
              title="Executive Summary"
              content="Strong positioning foundation with strategic clarity. Primary blocker: Trust infrastructure underdevelopment limiting conversion potential."
              bullets={[
                { type: 'success', text: 'Positioning clarity above industry average' },
                { type: 'warning', text: 'Trust signals need immediate attention' },
                { type: 'info', text: 'Strategic intent clear, execution gaps identified' }
              ]}
            />
          </div>
        </div>

        {/* Marketing Verdict */}
        <div className="main-card clickable" onClick={() => setDrawerOpen(true)}>
          <SummaryCard 
            title="Marketing Verdict"
            badge="Good Performance"
            subtitle="Solid Foundation Detected"
            content="Clear positioning with audience alignment. Messaging is consistent across channels."
          />
        </div>

        {/* Strategic Verdict */}
        <div className="main-card">
          <SummaryCard 
            icon="⚠️"
            title="Strategic Verdict"
            badge="SEO Weakness"
            subtitle="Trust Gap Critical"
            content="Credibility infrastructure needs immediate development to unlock conversion potential."
          />
        </div>

        {/* Performance Sections */}
        <div className="main-card">
          <h3>LinkedIn Performance</h3>
          <PerformanceBar label="Content Quality" percentage={75} color="#000" />
          <PerformanceBar label="Engagement Rate" percentage={62} color="#000" />
          <p className="card-footer">Strong thought leadership. Weak conversion bridge.</p>
        </div>
      </div>

      <AnalysisDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}