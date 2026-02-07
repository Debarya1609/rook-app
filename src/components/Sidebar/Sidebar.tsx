import { motion, type Variants } from "framer-motion";
import {
  Home as HomeIcon,
  Search,
  CheckCircle,
  Sparkles,
  ChevronLeft,
  User,
  Settings
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Added Hooks
import "./Sidebar.css";

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon, path: "/home" },
  { id: "analyze", label: "Rook Analyze", icon: Search, path: "/analyze" },
  { id: "evaluate", label: "Rook Evaluate", icon: CheckCircle, path: "/evaluate" },
  { id: "build", label: "Rook Build", icon: Sparkles, path: "/build" },
] as const;

const sidebarVariants: Variants = {
  expanded: { width: 240 },
  collapsed: { width: 72 },
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Gets current URL
  const navigate = useNavigate(); // Handles page changes

  // Professional highlight logic: check if the current path starts with the item path
  // This keeps "Rook Analyze" active even when on "/analyze/project-id"
  const getIsActive = (path: string) => {
    if (path === "/home") return location.pathname === "/home";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.aside
      className="sidebar"
      variants={sidebarVariants}
      animate={collapsed ? "collapsed" : "expanded"}
    >
      <div className="sidebar-content">
        <div className="sidebar-top">
          <button className="collapse-btn" onClick={() => setCollapsed((v) => !v)}>
            <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
              <ChevronLeft size={18} />
            </motion.div>
          </button>
        </div>

        <div className="sidebar-nav-container">
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = getIsActive(item.path);
              
              return (
                <div 
                  key={item.id} 
                  className={`sidebar-item ${isActive ? "active" : ""}`}
                  onClick={() => navigate(item.path)} // Navigate to path
                >
                  <div className="icon-wrapper">
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  {!collapsed && <span className="label">{item.label}</span>}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-profile">
          <div className="profile-container">
            <div className="profile-avatar">
              <User size={20} />
            </div>
            {!collapsed && (
              <div className="profile-details">
                <p className="profile-name">Dev User</p>
                <p className="profile-email">dev@rook.ai</p>
              </div>
            )}
          </div>
          {!collapsed && <Settings size={18} className="settings-icon" />}
        </div>
      </div>
    </motion.aside>
  );
}