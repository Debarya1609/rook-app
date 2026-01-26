import { motion, AnimatePresence, type Variants } from "framer-motion"
import { useState } from "react"
import "./HomeDialogbox.css"

type Mode = "analyze" | "evaluate" | "create"

type Props = {
  open: boolean
  onClose: () => void
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const dialogVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      stiffness: 260,
      damping: 24,
    },
  },
}

export default function HomeDialogbox({ open, onClose }: Props) {
  const [mode, setMode] = useState<Mode>("analyze")

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="dialog-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="dialog-card"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Logo */}
            <div className="dialog-header">
              <div className="rook-logo">R</div>
            </div>

            {/* Mode Tabs */}
            <div className="dialog-tabs">
              <button
                className={mode === "analyze" ? "active" : ""}
                onClick={() => setMode("analyze")}
              >
                Analyze
              </button>
              <button
                className={mode === "evaluate" ? "active" : ""}
                onClick={() => setMode("evaluate")}
              >
                Evaluate
              </button>
              <button
                className={mode === "create" ? "active" : ""}
                onClick={() => setMode("create")}
              >
                Create
              </button>
            </div>

            {/* Content */}
            <div className="dialog-body">
              {mode === "analyze" && (
                <>
                  <label>Project Name:</label>
                  <input placeholder="Give your Project Name..." />

                  <label>URL:</label>
                  <input placeholder="Paste any link to analyze..." />

                  <label>Prompt:</label>
                  <textarea placeholder='Default prompt "Analyze full"' />
                </>
              )}

              {mode === "evaluate" && (
                <>
                  <label>Project Name:</label>
                  <input placeholder="Give your Project Name..." />

                  <label>Left Side:</label>
                  <input placeholder="Choose the left side (Your product)..." />

                  <label>Right Side:</label>
                  <input placeholder="Choose the right side (Competitor's product)..." />

                  <label>Prompt:</label>
                  <textarea placeholder='Default prompt "Analyze full"' />
                </>
              )}

              {mode === "create" && (
                <>
                  <label>Project Name:</label>
                  <input placeholder="Give your Project Name..." />

                  <label>Social media URL (Optional):</label>
                  <input placeholder="Paste any social media link..." />

                  <label>Website URL (Optional):</label>
                  <input placeholder="Paste any website link..." />

                  <label>Idea:</label>
                  <textarea placeholder="Tell me about your Start-up idea" />
                </>
              )}
            </div>

            {/* Actions */}
            <div className="dialog-actions">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button className="save-btn">Save</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
