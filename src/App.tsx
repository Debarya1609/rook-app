import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import RookAnalyze from "./pages/RookAnalyze";
import RookEvaluate from "./pages/RookEvaluate";
import RookCreate from "./pages/RookBuild";

// Define the available pages for TypeScript safety
type NavID = "home" | "analyze" | "evaluate" | "build";

export default function App() {
  const [activePage, setActivePage] = useState<NavID>("home");

  return (
    <div className="app-container" style={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Sidebar handles navigation updates */}
      <Sidebar 
        activeId={activePage} 
        onNavigate={(id) => setActivePage(id)} 
      />

      {/* Main Content Area: Flex-1 fills the remaining screen */}
      <main className="main-content" style={{ flex: 1, overflowY: "auto", background: "#fcfcfc" }}>
        {activePage === "home" && <Home />}
        {activePage === "analyze" && <RookAnalyze />}
        {activePage === "evaluate" && <RookEvaluate />}
        {activePage === "build" && <RookCreate />}
      </main>
    </div>
  );
}