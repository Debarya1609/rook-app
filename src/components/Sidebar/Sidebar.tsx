import { motion } from "framer-motion";
import {
  Home,
  BarChart2,
  Settings,
  Brain,
  FilePlus,
  Menu,
} from "lucide-react";
import "./Sidebar.css";

type SidebarItemType = {
  icon: React.ElementType;
  label: string;
};

const items: SidebarItemType[] = [
  { icon: Home, label: "Home" },
  { icon: BarChart2, label: "Rook Analyze" },
  { icon: Settings, label: "Rook Build" },
  { icon: Brain, label: "Rook Evaluate" },
  { icon: FilePlus, label: "Rook Create" },
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
  active?: string;
};

export default function Sidebar({
  collapsed,
  onToggle,
  active = "Home",
}: SidebarProps) {
  return (
    <motion.aside
      className="sidebar"
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <button className="sidebar-toggle" onClick={onToggle}>
        <Menu size={20} />
      </button>

      <nav className="sidebar-nav">
        {items.map(({ icon: Icon, label }) => {
          const isActive = active === label;

          return (
            <motion.button
              key={label}
              className={`sidebar-item ${isActive ? "active" : ""}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon size={18} />
              {!collapsed && <span>{label}</span>}
            </motion.button>
          );
        })}
      </nav>
    </motion.aside>
  );
}
