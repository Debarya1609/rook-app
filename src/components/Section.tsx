import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="border border-neutral-800 rounded-lg p-6 mb-6">
      <h2 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
        {title}
      </h2>
      <div className="text-neutral-200 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
