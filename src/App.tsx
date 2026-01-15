import AudienceAnalysis from "./renderers/AudienceAnalysis";
import ConversionReadiness from "./renderers/ConversionReadiness";
import IntentAndPositioning from "./renderers/IntentAndPositioning";
import MessagingEffectiveness from "./renderers/MessagingEffectiveness";
import StrategicVerdict from "./renderers/StrategicVerdict";
import TrustAndCredibility from "./renderers/TrustAndCredibility";


import { RookAnalyzeOutputSchema } from "./contracts/rookAnalyzeOutput.v1";
import mockData from "./mocks/sampleAnalyzeOutput.v1.json";

export default function App() {
  const parsed = RookAnalyzeOutputSchema.safeParse(mockData);

  if (!parsed.success) {
    return (
      <div className="p-6 text-red-400">
        Invalid ROOK analysis data. Rendering aborted.
      </div>
    );
  }

  const analysis = parsed.data;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <StrategicVerdict verdict={analysis.strategic_verdict} />
      <IntentAndPositioning data={analysis.intent_and_positioning} />
      <AudienceAnalysis data={analysis.audience_analysis} />
      <TrustAndCredibility data={analysis.trust_and_credibility} />
      <MessagingEffectiveness data={analysis.messaging_effectiveness} />
      <ConversionReadiness data={analysis.conversion_readiness} />
    </main>
  );
}
