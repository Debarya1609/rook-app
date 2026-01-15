import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  data: RookAnalyzeOutputV1["audience_analysis"];
};

export default function AudienceAnalysis({ data }: Props) {
  return (
    <Section title="Audience Analysis">
      <div className="space-y-4">
        {data.intended_audience && (
          <p>
            <span className="text-neutral-400">Intended audience:</span>{" "}
            {data.intended_audience}
          </p>
        )}

        <p>
          <span className="text-neutral-400">Actual audience:</span>{" "}
          {data.actual_audience}
        </p>

        <p>
          <span className="text-neutral-400">Audience clarity score:</span>{" "}
          {data.audience_clarity.score}/10
        </p>

        <p className="text-sm text-neutral-300">
          {data.audience_clarity.justification}
        </p>

        {data.market_mismatch.exists && (
          <>
            <p className="text-neutral-400">Market mismatch detected</p>
            {data.market_mismatch.explanation && (
              <p className="text-sm text-neutral-300">
                {data.market_mismatch.explanation}
              </p>
            )}
          </>
        )}
      </div>
    </Section>
  );
}
