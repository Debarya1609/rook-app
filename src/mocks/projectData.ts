export const MOCK_ANALYSIS_DATA = {
  projectName: "BlendSpec Studio",
  lastScan: "Today at 2:34 PM",
  company: "TechFlow Inc.",
  overallScore: 7.5,
  summary: {
    text: "Strong positioning foundation with strategic clarity...",
    bullets: [
      { type: 'success', text: 'Positioning clarity above industry average' },
      { type: 'warning', text: 'Trust signals need immediate attention' }
    ]
  },
  verdicts: {
    marketing: {
      badge: "Good Performance",
      subtitle: "Solid Foundation Detected",
      content: "Clear positioning with audience alignment..."
    }
  },
  performance: [
    { label: "Content Quality", percentage: 75 },
    { label: "Engagement Rate", percentage: 62 }
  ]
};