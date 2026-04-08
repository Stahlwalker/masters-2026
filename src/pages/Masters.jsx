import MajorLeaderboard from "../MajorLeaderboard";

const THEME = {
  path: "/",
  headerBg: "linear-gradient(160deg, #0a0f0d 0%, #111815 40%, #0d1a12 70%, #080c0a 100%)",
  accent: "#FCE300",
  accentFaint: "rgba(252,227,0,0.12)",
  accentGlow: "rgba(252,227,0,0.5)",
  tableHeaderBg: "linear-gradient(90deg, #0f3d26 0%, #1C4932 40%, #1a5c3a 100%)",
  tableHeaderColor: "#1C4932",
  leaderRowBg: "#fffbe6",
  projectedWinnerBg: "linear-gradient(150deg, #1a5c3a 0%, #1C4932 45%, #0a2d1a 100%)",
  badge1Bg: "linear-gradient(135deg, #ffe600 0%, #fca500 100%)",
  badge1Text: "#1C4932",
  leaderboardUrl: "https://www.masters.com/en_US/scores/index.html",
  watchLiveUrl: "https://www.masters.com/en_US/live/index.html",
};

const PARTICIPANTS = [
  { name: "Floyd", pick1: "Scottie Scheffler", pick2: "Akshay Bhatia",    winPct: "18.2%" },
  { name: "Tori",  pick1: "Bryson DeChambeau", pick2: "Matt Fitzpatrick", winPct: "13.7%" },
  { name: "Conor", pick1: "Jon Rahm",          pick2: "Tommy Fleetwood",  winPct: "13.2%" },
  { name: "Jackie",pick1: "Rory McIlroy",      pick2: "Jordan Spieth",    winPct: "9.1%"  },
  { name: "Cathy", pick1: "Xander Schauffele", pick2: "Collin Morikawa",  winPct: "9.1%"  },
  { name: "Nate",  pick1: "Justin Rose",       pick2: "Cameron Young",    winPct: "7.8%"  },
  { name: "Luke",  pick1: "Ludvig Åberg",      pick2: "Justin Thomas",    winPct: "6.7%"  },
  { name: "Sandy", pick1: "J.J. Spaun",        pick2: "Robert MacIntyre", winPct: "4.6%"  },
];

const SCORES = {
  Floyd:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Tori:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Conor:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Jackie: { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Cathy:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Nate:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Luke:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Sandy:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
};

export default function Masters() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
