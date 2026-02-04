import { motion, AnimatePresence, type Variants } from "framer-motion"
import { useState, useEffect } from "react"
import "./HomeDialogbox.css"

// SVG Icons for the Dropdown
const Icons = {
  Custom: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  ),
  X: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768" /></svg>
  )
}

const platforms = [
  { label: "Custom", value: "", icon: Icons.Custom },
  { label: "Instagram", value: "https://instagram.com/", icon: Icons.Instagram },
  { label: "LinkedIn", value: "https://linkedin.com/in/", icon: Icons.LinkedIn },
  { label: "X / Twitter", value: "https://x.com/", icon: Icons.X },
]

type Mode = "analyze" | "evaluate" | "create"

// FIX: Added defaultMode to the Props interface
type Props = { 
  open: boolean; 
  onClose: () => void;
  defaultMode?: Mode; 
}

export default function HomeDialogbox({ open, onClose, defaultMode = "analyze" }: Props) {
  const [mode, setMode] = useState<Mode>(defaultMode)
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])

  // Sync internal mode state when the dialog is opened from different sections
  useEffect(() => {
    if (open) {
      setMode(defaultMode)
    }
  }, [open, defaultMode])

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="dialog-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div 
            className="dialog-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="dialog-header">
              <div className="rook-badge">R</div>
              <h2>Configure Project</h2>
            </div>

            <div className="dialog-tabs">
              {(["analyze", "evaluate", "create"] as Mode[]).map((m) => (
                <button key={m} className={mode === m ? "active" : ""} onClick={() => setMode(m)}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            <div className="dialog-body">
              <div className="input-group">
                <label>Project Name</label>
                <input type="text" placeholder="e.g. Q1 Market Research" />
              </div>

              {/* ANALYZE MODE */}
              {mode === "analyze" && (
                <div className="input-group">
                  <label>Data Source</label>
                  <div className="hybrid-input">
                    <div className="platform-dropdown">
                      {selectedPlatform.icon}
                      <select onChange={(e) => setSelectedPlatform(platforms.find(p => p.label === e.target.value) || platforms[0])}>
                        {platforms.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
                      </select>
                    </div>
                    <input type="text" placeholder={selectedPlatform.value ? "Username..." : "https://..."} />
                  </div>
                </div>
              )}

              {/* EVALUATE MODE */}
              {mode === "evaluate" && (
                <div className="dual-input-row" style={{ display: 'flex', gap: '10px' }}>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label>Your Product URL</label>
                    <input type="text" placeholder="Your site..." />
                  </div>
                  <div className="input-group" style={{ flex: 1 }}>
                    <label>Competitor URL</label>
                    <input type="text" placeholder="Rival site..." />
                  </div>
                </div>
              )}

              {/* CREATE/BUILD MODE */}
              {mode === "create" && (
                <div className="input-group">
                  <label>Campaign Objective</label>
                  <textarea placeholder="Describe the marketing goals or content ideas..." />
                </div>
              )}

              <div className="input-group">
                <label>System Prompt (Reasoning Level)</label>
                <textarea className="prompt-area" placeholder='Default: "Deep Analytical Review"' />
              </div>
            </div>

            <div className="dialog-footer">
              <button className="close-btn" onClick={onClose}>Close Project</button>
              <button className="save-btn">Initialize ROOK</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}