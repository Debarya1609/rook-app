import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import RookAnalyze from "./pages/RookAnalyze";
import RookEvaluate from "./pages/RookEvaluate";
import RookCreate from "./pages/RookBuild";
import AnalyzeProjectDetail from "./pages/AnalyzeProjectDetail";

export default function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex", width: "100vw", height: "100vh" }}>
        {/* Sidebar now listens to the URL path instead of local state */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="main-content" style={{ flex: 1, overflowY: "auto", background: "#fcfcfc" }}>
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            <Route path="/home" element={<Home />} />
            
            {/* Rook Analyze Routes */}
            <Route path="/analyze" element={<RookAnalyze />} />
            <Route path="/analyze/:id" element={<AnalyzeProjectDetail />} />
            
            {/* Other Main Pages */}
            <Route path="/evaluate" element={<RookEvaluate />} />
            <Route path="/build" element={<RookCreate />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}