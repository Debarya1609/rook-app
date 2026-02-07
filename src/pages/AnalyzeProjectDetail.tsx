import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added for dynamic routing
import './AnalyzeDashboard.css';
import MetricCircle from '../components/Analysis/MetricCircle';
import SummaryCard from '../components/Analysis/SummaryCard';
import PerformanceBar from '../components/Analysis/PerformanceBar';
import AnalysisDrawer from '../components/Analysis/AnalysisDrawer';
import { ChevronLeft } from 'lucide-react'; // For a professional back button

export default function AnalyzeProjectDetail() {
  const { id } = useParams<{ id: string }>(); // Extract the project ID from the URL
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Note: Later, you will use the 'id' here to fetch specific data from your backend.
  // Example: useEffect(() => { fetchProjectData(id) }, [id]);

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="header-nav">
          <button className="back-btn" onClick={() => navigate('/analyze')}>
            <ChevronLeft size={18} />
            <span>Back to Projects</span>
          </button>
        </div>

        <div className="header-title-row">
          <h1>BlendSpec Studio</h1>
          <span className="project-id-tag">ID: {id}</span>
        </div>
        <p className="last-scan">Last scan: Today at 2:34 PM • TechFlow Inc.</p>
      </header>

      <hr className="header-divider" />

      {/* THIS DIV MUST HAVE THE 'dashboard-grid' CLASS */}
      <div className="dashboard-grid">

        {/* Block 1: Executive Summary */}
        <div className="main-card grid-span-2">
          <div className="flex-row">
            <MetricCircle score={7.5} />
            <SummaryCard
              title="Executive Summary"
              content="Strong positioning foundation with strategic clarity..."
              bullets={[
                { type: 'success', text: 'Positioning clarity above industry average' },
                { type: 'warning', text: 'Trust signals need immediate attention' },
                { type: 'info', text: 'Strategic intent clear, execution gaps identified' }
              ]}
            />
          </div>
        </div>

        {/* Block 2: Marketing Verdict */}
        <div className="main-card clickable" onClick={() => setDrawerOpen(true)}>
          <SummaryCard
            title="Marketing Verdict"
            badge="Good Performance"
            subtitle="Solid Foundation Detected"
            content="Clear positioning with audience alignment..."
          />
          <span className="view-detail-hint">Click for Deep Dive →</span>
        </div>

        {/* Block 3: Strategic Verdict */}
        <div className="main-card">
          <SummaryCard
            title="Strategic Verdict"
            badge="SEO Weakness"
            subtitle="Trust Gap Critical"
            content="Credibility infrastructure needs immediate development..."
          />
        </div>

        {/* Block 4: LinkedIn */}
        <div className="main-card">
          <h3 className="performance-title">LinkedIn Performance</h3>
          <PerformanceBar label="Content Quality" percentage={75} />
          <PerformanceBar label="Engagement Rate" percentage={62} />
          <PerformanceBar label="CTA Effectiveness" percentage={45} />
          <p className="card-footer">Strong thought leadership. Weak conversion bridge.</p>
        </div>

        {/* Block 5: Instagram */}
        <div className="main-card">
          <h3 className="performance-title">Instagram Performance</h3>
          <PerformanceBar label="Visual Consistency" percentage={82} />
          <PerformanceBar label="Strategic Intent" percentage={38} />
          <PerformanceBar label="Business Alignment" percentage={45} />
          <p className="card-footer">Aesthetic cohesion strong. Business purpose unclear.</p>
        </div>

      </div>

      <AnalysisDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}