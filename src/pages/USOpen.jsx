import MajorLeaderboard from "../MajorLeaderboard";

const THEME = {
  path: "/usopen",
  headerBg: "linear-gradient(160deg, #000a1a 0%, #002D72 40%, #003580 70%, #000d22 100%)",
  accent: "#BF0D3E",
  accentFaint: "rgba(191,13,62,0.12)",
  accentGlow: "rgba(191,13,62,0.5)",
  tableHeaderBg: "linear-gradient(90deg, #001845 0%, #002D72 40%, #003a8c 100%)",
  tableHeaderColor: "#002D72",
  leaderRowBg: "#fff0f3",
  projectedWinnerBg: "linear-gradient(150deg, #001845 0%, #002D72 45%, #000e2e 100%)",
  badge1Bg: "linear-gradient(135deg, #e8173e 0%, #8c0028 100%)",
  badge1Text: "#fff",
  leaderboardUrl: "https://www.usopen.com/",
  watchLiveUrl: "#",
  potAmount: "$50",
};

const PARTICIPANTS = [
  { name: "Nate",    pick1: "—", pick2: "—", winPct: "" },
  { name: "Sandy",   pick1: "—", pick2: "—", winPct: "" },
  { name: "Mandy",   pick1: "—", pick2: "—", winPct: "" },
  { name: "Jackie",  pick1: "—", pick2: "—", winPct: "" },
  { name: "Cathy",   pick1: "—", pick2: "—", winPct: "" },
  { name: "Floyd",   pick1: "—", pick2: "—", winPct: "" },
  { name: "Tori",    pick1: "—", pick2: "—", winPct: "" },
  { name: "Luke",    pick1: "—", pick2: "—", winPct: "" },
  { name: "Conor",   pick1: "—", pick2: "—", winPct: "" },
  { name: "Brandon", pick1: "—", pick2: "—", winPct: "" },
];

const SCORES = Object.fromEntries(
  PARTICIPANTS.map(({ name }) => [name, { pick1: [null, null, null, null], pick2: [null, null, null, null] }])
);

export default function USOpen() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
