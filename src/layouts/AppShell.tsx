import { useState, type ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./AppShell.css";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
      />

      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
