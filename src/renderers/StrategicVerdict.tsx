import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  verdict: RookAnalyzeOutputV1["strategic_verdict"];
};

export default function StrategicVerdict({ verdict }: Props) {
  return (
    <Section title="Strategic Verdict">
      <p className="mb-4">{verdict.summary}</p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="text-neutral-400">Core problem:</span>{" "}
          {verdict.core_problem}
        </p>

        {verdict.core_strength && (
          <p>
            <span className="text-neutral-400">Core strength:</span>{" "}
            {verdict.core_strength}
          </p>
        )}

        <p>
          <span className="text-neutral-400">Primary risk:</span>{" "}
          {verdict.primary_risk}
        </p>

        <p>
          <span className="text-neutral-400">Actually resonates with:</span>{" "}
          {verdict.who_this_is_actually_for}
        </p>
      </div>
    </Section>
  );
}
