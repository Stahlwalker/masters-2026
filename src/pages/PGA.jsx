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
  leaderboardUrl: "https://www.pgachampionship.com/leaderboard",
  watchLiveUrl: "https://www.pgachampionship.com/how-to-watch",
};

const PARTICIPANTS = [
  { name: "Tori",   pick1: "Scottie Scheffler", pick2: "—", winPct: "", draftOrder: 1 },
  { name: "Nate",   pick1: "Rory McIlroy",      pick2: "—", winPct: "", draftOrder: 2 },
  { name: "Floyd",  pick1: "Cameron Young",     pick2: "—", winPct: "", draftOrder: 3 },
  { name: "Sandy",  pick1: "Matt Fitzpatrick",  pick2: "—", winPct: "", draftOrder: 4 },
  { name: "Conor",  pick1: "Jon Rahm",          pick2: "—", winPct: "", draftOrder: 5 },
  { name: "Luke",   pick1: "Bryson DeChambeau", pick2: "—", winPct: "", draftOrder: 6 },
  { name: "Jackie", pick1: "Collin Morikawa",   pick2: "—", winPct: "", draftOrder: 7 },
  { name: "Cathy",  pick1: "Ludvig Aberg",       pick2: "—", winPct: "", draftOrder: 8 },
  { name: "Mandy",  pick1: "Tommy Fleetwood",    pick2: "Chris Gotterup", winPct: "", draftOrder: 9 },
];

const SCORES = {
  Tori:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Nate:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Floyd:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Sandy:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Conor:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Luke:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Jackie: { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Cathy:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Mandy:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
};

export default function PGA() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
