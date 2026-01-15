import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  data: RookAnalyzeOutputV1["messaging_effectiveness"];
};

export default function MessagingEffectiveness({ data }: Props) {
  return (
    <Section title="Messaging Effectiveness">
      <div className="space-y-4">
        <p>
          <span className="text-neutral-400">Clarity score:</span>{" "}
          {data.clarity_score}/10
        </p>

        {data.key_message && (
          <p>
            <span className="text-neutral-400">Key message:</span>{" "}
            {data.key_message}
          </p>
        )}

        {data.confusion_points.length > 0 && (
          <div>
            <p className="text-neutral-400 mb-1">Confusion points</p>
            <ul className="list-disc list-inside text-sm text-neutral-300">
              {data.confusion_points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <p>
          <span className="text-neutral-400">Language tone:</span>{" "}
          {data.language_tone_assessment}
        </p>

        <p className="text-sm text-neutral-300">
          {data.justification}
        </p>
      </div>
    </Section>
  );
}
