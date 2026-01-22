import "./Sidebar.css";
import {
  Home,
  BarChart2,
  Settings,
  Brain,
  FilePlus,
  Menu,
} from "lucide-react";

type Props = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: Props) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
      <button className="sidebar-toggle" onClick={onToggle}>
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

function SidebarItem({
  icon,
  label,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) {
  return (
    <div className="sidebar-item">
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}
