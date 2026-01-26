import { useState } from "react"
import "./Home.css"
import HomeDialogbox from "../components/HomeDialogbox"

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="home">
      <img src="/graphics/dots-fade.png" className="bg-dots" />

      <div className="home-content">
        <img src="/rook-logo.png" alt="ROOK" className="home-logo" />

        <p className="home-description">
          ROOK is an AI-powered digital marketing analyst designed to help refine
          digital presence with consultant-grade reasoning.
        </p>

        <button
          className="primary-cta"
          onClick={() => setIsDialogOpen(true)}
        >
          + New Project
        </button>
      </div>

      {/* Dialogbox */}
      <HomeDialogbox
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  )
}
