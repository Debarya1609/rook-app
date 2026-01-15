import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  data: RookAnalyzeOutputV1["intent_and_positioning"];
};

export default function IntentAndPositioning({ data }: Props) {
  return (
    <Section title="Intent & Positioning">
      <div className="space-y-4">
        <p>
          <span className="text-neutral-400">Stated intent:</span>{" "}
          {data.stated_intent}
        </p>

        <p>
          <span className="text-neutral-400">Observed intent:</span>{" "}
          {data.observed_intent}
        </p>

        <p>
          <span className="text-neutral-400">Intent alignment:</span>{" "}
          {data.intent_alignment.level}
        </p>

        <p className="text-sm text-neutral-300">
          {data.intent_alignment.explanation}
        </p>

        <p>
          <span className="text-neutral-400">Positioning clarity score:</span>{" "}
          {data.positioning_clarity.score}/10
        </p>

        <p className="text-sm text-neutral-300">
          {data.positioning_clarity.justification}
        </p>
      </div>
    </Section>
  );
}
