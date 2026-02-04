import { motion, type Variants, AnimatePresence } from "framer-motion";
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
import "./Sidebar.css";

type NavID = "home" | "analyze" | "evaluate" | "create";

interface SidebarProps {
  activeId: NavID;
  onNavigate: (id: NavID) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "analyze", label: "Rook Analyze", icon: Search },
  { id: "evaluate", label: "Rook Evaluate", icon: CheckCircle },
  { id: "create", label: "Rook Create", icon: Sparkles },
] as const;

const sidebarVariants: Variants = {
  expanded: { width: 240 },
  collapsed: { width: 72 },
};

export default function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

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
              const isActive = item.id === activeId; // Highlight logic
              
              return (
                <div 
                  key={item.id} 
                  className={`sidebar-item ${isActive ? "active" : ""}`}
                  onClick={() => onNavigate(item.id)} // Trigger navigation
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

        {/* User Profile Block: Pinned to floor using CSS margin-top: auto */}
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