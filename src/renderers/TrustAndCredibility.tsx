import Section from "../components/Section";
import type { RookAnalyzeOutputV1 } from "../contracts/rookAnalyzeOutput.v1";

type Props = {
  data: RookAnalyzeOutputV1["trust_and_credibility"];
};

export default function TrustAndCredibility({ data }: Props) {
  return (
    <Section title="Trust & Credibility">
      <div className="space-y-4">
        <p>
          <span className="text-neutral-400">Trust score:</span>{" "}
          {data.trust_score}/10
        </p>

        {data.signals_present.length > 0 && (
          <div>
            <p className="text-neutral-400 mb-1">Signals present</p>
            <ul className="list-disc list-inside text-sm text-neutral-300">
              {data.signals_present.map((signal, i) => (
                <li key={i}>{signal}</li>
              ))}
            </ul>
          </div>
        )}

        {data.signals_missing.length > 0 && (
          <div>
            <p className="text-neutral-400 mb-1">Signals missing</p>
            <ul className="list-disc list-inside text-sm text-neutral-300">
              {data.signals_missing.map((signal, i) => (
                <li key={i}>{signal}</li>
              ))}
            </ul>
          </div>
        )}

        {data.credibility_risks.length > 0 && (
          <div>
            <p className="text-neutral-400 mb-1">Credibility risks</p>
            <ul className="list-disc list-inside text-sm text-neutral-300">
              {data.credibility_risks.map((risk, i) => (
                <li key={i}>{risk}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-sm text-neutral-300">
          {data.justification}
        </p>
      </div>
    </Section>
  );
}
