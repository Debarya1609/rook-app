import AnalysisPage from "./layouts/AnalysisPage";
import ReportHeader from "./components/ReportHeader";

import StrategicVerdict from "./renderers/StrategicVerdict";
import IntentAndPositioning from "./renderers/IntentAndPositioning";
import AudienceAnalysis from "./renderers/AudienceAnalysis";
import TrustAndCredibility from "./renderers/TrustAndCredibility";
import MessagingEffectiveness from "./renderers/MessagingEffectiveness";
import ConversionReadiness from "./renderers/ConversionReadiness";
import FinalScore from "./renderers/FinalScore";

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
    <AnalysisPage>
      <ReportHeader
        platform={analysis.meta.platform}
        asset={analysis.meta.asset_identifier}
        generatedAt={analysis.meta.generated_at}
      />

      <StrategicVerdict verdict={analysis.strategic_verdict} />
      <IntentAndPositioning data={analysis.intent_and_positioning} />
      <AudienceAnalysis data={analysis.audience_analysis} />
      <TrustAndCredibility data={analysis.trust_and_credibility} />
      <MessagingEffectiveness data={analysis.messaging_effectiveness} />
      <ConversionReadiness data={analysis.conversion_readiness} />
      <FinalScore data={analysis.final_score} />
    </AnalysisPage>
  );
}
