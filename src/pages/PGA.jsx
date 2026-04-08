import MajorLeaderboard from "../MajorLeaderboard";

const THEME = {
  path: "/pga",
  headerBg: "linear-gradient(160deg, #05080f 0%, #0c1528 40%, #0e1a30 70%, #070c1a 100%)",
  accent: "#BFA868",
  accentFaint: "rgba(191,168,104,0.12)",
  accentGlow: "rgba(191,168,104,0.5)",
  tableHeaderBg: "linear-gradient(90deg, #05080f 0%, #00274C 40%, #0a3060 100%)",
  tableHeaderColor: "#00274C",
  leaderRowBg: "#f5f0e6",
  projectedWinnerBg: "linear-gradient(150deg, #0a1e3d 0%, #00274C 45%, #050f1f 100%)",
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

export default function PGA() {
  return <MajorLeaderboard theme={THEME} participants={PLACEHOLDER} scores={PLACEHOLDER_SCORES} comingSoon />;
}
