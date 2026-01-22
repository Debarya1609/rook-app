import {
  BarChart2,
  Brain,
  FilePlus,
  Home,
  Menu,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-expanded={!collapsed}
      >
        <Menu size={20} />
      </button>

      <nav className="sidebar-nav">
        <SidebarItem icon={<Home size={18} />} label="Home" collapsed={collapsed} />
        <SidebarItem icon={<BarChart2 size={18} />} label="Rook Analyze" collapsed={collapsed} />
        <SidebarItem icon={<Settings size={18} />} label="Rook Build" collapsed={collapsed} />
        <SidebarItem icon={<Brain size={18} />} label="Rook Evaluate" collapsed={collapsed} />
        <SidebarItem icon={<FilePlus size={18} />} label="Rook Create" collapsed={collapsed} />
      </nav>
    </aside>
  );
}

/* ---------------- Sidebar Item ---------------- */

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  onClick?: () => void;
};

function SidebarItem({ icon, label, collapsed, onClick }: SidebarItemProps) {
  return (
    <button
      className="sidebar-item"
      onClick={onClick}
      title={collapsed ? label : undefined}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </button>
  );
}
