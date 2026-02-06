import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import "./HomeDialogbox.css"

// Specific SVG Icons for the Platforms
const Icons = {
  Website: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  ),
  X: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768" /></svg>
  ),
  YouTube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  ),
  Reddit: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 7v2"/><path d="M17 12h-2"/><path d="M7 12H9"/></svg>
  )
}

const platforms = [
  { label: "Website", prefix: "", icon: Icons.Website },
  { label: "Instagram", prefix: "https://instagram.com/", icon: Icons.Instagram },
  { label: "LinkedIn", prefix: "https://linkedin.com/in/", icon: Icons.LinkedIn },
  { label: "X (Twitter)", prefix: "https://x.com/", icon: Icons.X },
  { label: "YouTube", prefix: "https://youtube.com/@", icon: Icons.YouTube },
  { label: "Reddit", prefix: "https://reddit.com/u/", icon: Icons.Reddit },
]

type Mode = "analyze" | "evaluate" | "create"
type Props = { open: boolean; onClose: () => void; defaultMode?: Mode; }

export default function HomeDialogbox({ open, onClose, defaultMode = "analyze" }: Props) {
  const [mode, setMode] = useState<Mode>(defaultMode)
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])
  const [userInput, setUserInput] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) setMode(defaultMode)
  }, [open, defaultMode])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const fullLink = selectedPlatform.prefix + userInput

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="dialog-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div 
            className="dialog-card" 
            initial={{ opacity: 0, scale: 0.95, y: 10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
          >
            <div className="dialog-header">
              <div className="img-render">
                <img src="/rook-logo.png" alt="ROOK Logo" className="dialog-logo" />
              </div>
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

              {mode === "analyze" && (
                <div className="input-group">
                  <label>Data Source</label>
                  <div className="hybrid-input-wrapper">
                    <div className="hybrid-input">
                      <div className="platform-trigger" onClick={() => setShowDropdown(!showDropdown)} ref={dropdownRef}>
                        {selectedPlatform.icon}
                        <AnimatePresence>
                          {showDropdown && (
                            <motion.div 
                              className="custom-dropdown-menu"
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.15, ease: "easeOut" }}
                            >
                              {platforms.map((p) => (
                                <div key={p.label} className="dropdown-item" onClick={(e) => {
                                  e.stopPropagation(); // Prevents trigger from re-opening
                                  setSelectedPlatform(p);
                                  setShowDropdown(false);
                                }}>
                                  {p.icon} <span>{p.label}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <input 
                        type="text" 
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={selectedPlatform.label === "Website" ? "https://..." : "Username..."} 
                      />
                    </div>
                    {userInput && (
                      <div className="link-preview-text">
                        Target: <span>{fullLink}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {mode === "evaluate" && (
                <div className="dual-input-row">
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