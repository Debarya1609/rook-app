import { z } from "zod";

/**
 * ROOK Analyze Output – v1
 * 
 * Canonical, immutable contract between ROOK intelligence
 * and ROOK application UI.
 *
 * Frontend MUST NOT derive, calculate, or reinterpret values.
 * Backend MUST conform exactly.
 */

export const ROOK_ANALYZE_OUTPUT_VERSION = "rook_analyze_output_v1";

/* ---------------------------------- */
/* Meta & Integrity                   */
/* ---------------------------------- */

export const AnalysisConfidenceSchema = z.object({
  level: z.enum(["high", "medium", "low"]),
  reason: z.string(),
});

export const MetaSchema = z.object({
  version: z.literal(ROOK_ANALYZE_OUTPUT_VERSION),
  analysis_id: z.string(),
  generated_at: z.string(), // ISO-8601
  platform: z.enum([
    "website",
    "linkedin",
    "instagram",
    "x",
    "youtube",
    "reddit",
  ]),
  asset_identifier: z.string(),
  analysis_confidence: AnalysisConfidenceSchema,
});

/* ---------------------------------- */
/* Strategic Verdict                  */
/* ---------------------------------- */

export const StrategicVerdictSchema = z.object({
  summary: z.string(),
  core_problem: z.string(),
  core_strength: z.string().nullable(),
  primary_risk: z.string(),
  who_this_is_actually_for: z.string(),
});

/* ---------------------------------- */
/* Intent & Positioning               */
/* ---------------------------------- */

export const IntentAlignmentSchema = z.object({
  level: z.enum(["aligned", "partially_aligned", "misaligned"]),
  explanation: z.string(),
});

export const PositioningClaritySchema = z.object({
  score: z.number().min(0).max(10),
  justification: z.string(),
});

export const IntentAndPositioningSchema = z.object({
  stated_intent: z.string(),
  observed_intent: z.string(),
  intent_alignment: IntentAlignmentSchema,
  positioning_clarity: PositioningClaritySchema,
});

/* ---------------------------------- */
/* Audience Analysis                  */
/* ---------------------------------- */

export const AudienceClaritySchema = z.object({
  score: z.number().min(0).max(10),
  justification: z.string(),
});

export const MarketMismatchSchema = z.object({
  exists: z.boolean(),
  explanation: z.string().nullable(),
});

export const AudienceAnalysisSchema = z.object({
  intended_audience: z.string().nullable(),
  actual_audience: z.string(),
  audience_clarity: AudienceClaritySchema,
  market_mismatch: MarketMismatchSchema,
});

/* ---------------------------------- */
/* Trust & Credibility                */
/* ---------------------------------- */

export const TrustAndCredibilitySchema = z.object({
  trust_score: z.number().min(0).max(10),
  signals_present: z.array(z.string()),
  signals_missing: z.array(z.string()),
  credibility_risks: z.array(z.string()),
  justification: z.string(),
});

/* ---------------------------------- */
/* Messaging Effectiveness            */
/* ---------------------------------- */

export const MessagingEffectivenessSchema = z.object({
  clarity_score: z.number().min(0).max(10),
  key_message: z.string().nullable(),
  confusion_points: z.array(z.string()),
  language_tone_assessment: z.enum([
    "clear",
    "overcomplicated",
    "vague",
    "inconsistent",
  ]),
  justification: z.string(),
});

/* ---------------------------------- */
/* Conversion Readiness               */
/* ---------------------------------- */

export const ConversionReadinessSchema = z.object({
  score: z.number().min(0).max(10),
  primary_call_to_action: z.string().nullable(),
  friction_points: z.array(z.string()),
  conversion_logic_gap: z.string().nullable(),
  justification: z.string(),
});

/* ---------------------------------- */
/* Platform Insights                  */
/* ---------------------------------- */

export const PlatformInsightsSchema = z.object({
  platform_strengths: z.array(z.string()),
  platform_misuse: z.array(z.string()),
  missed_platform_opportunities: z.array(z.string()),
});

/* ---------------------------------- */
/* Final Score                        */
/* ---------------------------------- */

export const FinalScoreSchema = z.object({
  score: z.number().min(0).max(10),
  score_band: z.enum(["rare", "strong", "average", "weak", "critical"]),
  why_not_higher: z.string(),
  why_not_lower: z.string(),
});

/* ---------------------------------- */
/* Analyst Notes                      */
/* ---------------------------------- */

export const AnalystNotesSchema = z.object({
  assumptions_made: z.array(z.string()),
  unknowns: z.array(z.string()),
  recommended_next_analysis: z.array(z.string()),
});

/* ---------------------------------- */
/* Root Schema                        */
/* ---------------------------------- */

export const RookAnalyzeOutputSchema = z.object({
  meta: MetaSchema,
  strategic_verdict: StrategicVerdictSchema,
  intent_and_positioning: IntentAndPositioningSchema,
  audience_analysis: AudienceAnalysisSchema,
  trust_and_credibility: TrustAndCredibilitySchema,
  messaging_effectiveness: MessagingEffectivenessSchema,
  conversion_readiness: ConversionReadinessSchema,
  platform_insights: PlatformInsightsSchema,
  final_score: FinalScoreSchema,
  analyst_notes: AnalystNotesSchema,
});

export type RookAnalyzeOutputV1 = z.infer<typeof RookAnalyzeOutputSchema>;
