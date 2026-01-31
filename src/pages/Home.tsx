import { useState } from "react"
import "./Home.css"
import HomeDialogbox from "../components/HomeDialogbox"

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="home">
      {/* Reverted back to the original PNG background */}
      <img src="/graphics/dots-fade.png" className="bg-dots" alt="" />

      <div className="home-content">
        <img src="/rook-logo.png" alt="ROOK" className="home-logo" />

        {/* Keeping the layout focused on the logo and CTA */}
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