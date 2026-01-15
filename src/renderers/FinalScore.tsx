import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  data: RookAnalyzeOutputV1["final_score"];
};

export default function FinalScore({ data }: Props) {
  return (
    <Section title="Final Assessment">
      <div className="space-y-4">
        <p className="text-2xl font-semibold">
          {data.score} / 10
        </p>

        <p className="text-sm text-neutral-400">
          Assessment band: {data.score_band}
        </p>

        <div>
          <p className="text-neutral-400 mb-1">Why it’s not higher</p>
          <p className="text-sm text-neutral-300">
            {data.why_not_higher}
          </p>
        </div>

        <div>
          <p className="text-neutral-400 mb-1">Why it’s not lower</p>
          <p className="text-sm text-neutral-300">
            {data.why_not_lower}
          </p>
        </div>
      </div>
    </Section>
  );
}
