import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AnalysisPage({ children }: Props) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {children}
      </div>
    </div>
  );
}
