import { useEffect, useState } from "react";
import "./AppIntro.css";

type AppIntroProps = {
  onFinish: () => void;
};

export default function AppIntro({ onFinish }: AppIntroProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
    }, 900); // logo visible duration

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 1100); // total intro duration

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`app-intro ${!visible ? "fade-out" : ""}`}>
      <img
        src="/rook-logo.png"
        alt="ROOK"
        className="rook-logo"
        draggable={false}
      />
    </div>
  );
}
