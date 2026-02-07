import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnalysisDrawer.css';

interface BulletPoint {
  label: string;
  text: string;
}

interface AnalysisDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  category?: string;
  assessment?: string;
  trustSignals?: BulletPoint[];
  secondaryConcerns?: string[];
}

export default function AnalysisDrawer({
  isOpen,
  onClose,
  title = "Strategic Verdict - Deep Dive",
  category = "DEEP DIVE ANALYSIS",
  assessment = "While your strategic intent is clear and positioning is sound, execution reveals a critical gap in trust infrastructure. This is the primary barrier preventing conversion of engaged prospects into customers.",
  trustSignals = [
    { label: "GENERIC TESTIMONIALS", text: "Lacking specific outcomes or verifiable proof points." },
    { label: "AUTHORITY MARKERS", text: "No third-party validation or industry certifications visible." },
    { label: "TEMPORAL EVIDENCE", text: "Limited before/after demonstrations of workflow optimization." }
  ],
  secondaryConcerns = [
    "SEO Architecture: Technical foundation is adequate, but strategic keywords are missing.",
    "Content Velocity: Post frequency is inconsistent across LinkedIn and Instagram."
  ]
}: AnalysisDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div 
            className="drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button className="drawer-close-icon" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="drawer-content">
              <header className="drawer-header">
                <span className="drawer-category">{category}</span>
                <h2 className="drawer-title">{title}</h2>
              </header>

              <div className="drawer-section">
                <h3 className="section-heading">STRATEGIC ASSESSMENT & GAPS:</h3>
                <p className="section-text">{assessment}</p>
              </div>

              <div className="drawer-section">
                <h3 className="section-heading">CURRENT TRUST SIGNALS:</h3>
                <div className="trust-signals-list">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="signal-item">
                      <span className="signal-label">— {signal.label}:</span>
                      <span className="signal-desc">{signal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="drawer-section">
                <h3 className="section-heading">SECONDARY STRATEGIC CONCERNS:</h3>
                <ul className="secondary-list">
                  {secondaryConcerns.map((concern, index) => (
                    <li key={index}>{index + 1}. {concern}</li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="drawer-footer">
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText(assessment)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy to Clipboard
              </button>
            </footer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}