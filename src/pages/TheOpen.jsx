import MajorLeaderboard from "../MajorLeaderboard";

const THEME = {
  path: "/open",
  headerBg: "linear-gradient(160deg, #060809 0%, #0d1520 40%, #121c2a 70%, #060a10 100%)",
  accent: "#C8A951",
  accentFaint: "rgba(200,169,81,0.12)",
  accentGlow: "rgba(200,169,81,0.5)",
  tableHeaderBg: "linear-gradient(90deg, #060a10 0%, #0d1c2e 40%, #152435 100%)",
  tableHeaderColor: "#0d1c2e",
  leaderRowBg: "#f7f4ec",
  projectedWinnerBg: "linear-gradient(150deg, #0a1520 0%, #0d1c2e 45%, #060c14 100%)",
  badge1Bg: "linear-gradient(135deg, #d4b96a 0%, #9e7c30 100%)",
  badge1Text: "#fff",
  leaderboardUrl: null,
  watchLiveUrl: null,
};

const PLACEHOLDER = [
  { name: "TBD", pick1: "—", pick2: "—", winPct: "" },
];
const PLACEHOLDER_SCORES = {
  TBD: { pick1: [null, null, null, null], pick2: [null, null, null, null] },
};

export default function TheOpen() {
  return <MajorLeaderboard theme={THEME} participants={PLACEHOLDER} scores={PLACEHOLDER_SCORES} comingSoon />;
}
