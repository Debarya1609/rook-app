import { useState } from "react";
import AppIntro from "./components/AppIntro/AppIntro";
import AppShell from "./layouts/AppShell";
import Home from "./pages/Home";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <AppIntro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <AppShell>
      <Home />
    </AppShell>
  );
}
