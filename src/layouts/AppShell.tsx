import { type ReactNode, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./AppShell.css";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((p) => !p)}
      />

      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
