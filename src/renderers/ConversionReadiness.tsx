import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  data: RookAnalyzeOutputV1["conversion_readiness"];
};

export default function ConversionReadiness({ data }: Props) {
  return (
    <Section title="Conversion Readiness">
      <div className="space-y-4">
        <p>
          <span className="text-neutral-400">Readiness score:</span>{" "}
          {data.score}/10
        </p>

        {data.primary_call_to_action && (
          <p>
            <span className="text-neutral-400">Primary call to action:</span>{" "}
            {data.primary_call_to_action}
          </p>
        )}

        {data.friction_points.length > 0 && (
          <div>
            <p className="text-neutral-400 mb-1">Friction points</p>
            <ul className="list-disc list-inside text-sm text-neutral-300">
              {data.friction_points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {data.conversion_logic_gap && (
          <p>
            <span className="text-neutral-400">Conversion logic gap:</span>{" "}
            {data.conversion_logic_gap}
          </p>
        )}

        <p className="text-sm text-neutral-300">
          {data.justification}
        </p>
      </div>
    </Section>
  );
}
