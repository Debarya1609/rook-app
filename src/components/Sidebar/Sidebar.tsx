import { motion, type Variants, AnimatePresence } from "framer-motion";
import {
  Home,
  Search,
  CheckCircle,
  Sparkles,
  ChevronLeft,
  User,
  Settings
} from "lucide-react";
import { useState } from "react";
import "./Sidebar.css";

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "analyze", label: "Rook Analyze", icon: Search },
  { id: "evaluate", label: "Rook Evaluate", icon: CheckCircle },
  { id: "create", label: "Rook Create", icon: Sparkles },
];

const sidebarVariants: Variants = {
  expanded: { width: 240 },
  collapsed: { width: 72 },
};

const labelVariants: Variants = {
  expanded: { opacity: 1, x: 0, display: "block" },
  collapsed: { opacity: 0, x: -10, transitionEnd: { display: "none" } },
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const activeId = "home";

  return (
    <motion.aside
      className="sidebar"
      variants={sidebarVariants}
      animate={collapsed ? "collapsed" : "expanded"}
      initial={false}
    >
      <div className="sidebar-content">
        {/* Top Section */}
        <div className="sidebar-top">
          <button className="collapse-btn" onClick={() => setCollapsed((v) => !v)}>
            <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
              <ChevronLeft size={18} />
            </motion.div>
          </button>
        </div>

        {/* This is the key: The nav-container takes all remaining space */}
        <div className="sidebar-nav-container">
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeId;
              return (
                <div key={item.id} className={`sidebar-item ${isActive ? "active" : ""}`}>
                  <div className="icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <motion.span className="label" variants={labelVariants}>
                    {item.label}
                  </motion.span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Profile Bar Section - Now guaranteed to be at the bottom */}
        <div className="sidebar-profile">
          <div className="profile-container">
            <div className="profile-avatar">
              <User size={20} />
            </div>
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.div 
                  className="profile-details"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                >
                  <p className="profile-name">Dev User</p>
                  <p className="profile-email">dev@rook.ai</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {!collapsed && <Settings size={18} className="settings-icon" />}
        </div>
      </div>
    </motion.aside>
  );
}