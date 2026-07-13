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
  leaderboardUrl: "https://www.theopen.com/leaderboard",
  watchLivePlaceholder: true,
  potAmount: "$100",
};

// Snake draft — R1 forward, R2 reverse
// R1: Cathy(1) → Tori(2) → Mandy(3) → Conor(4) → Jackie(5) → Luke(6) → Nate(7) → Floyd(8) → Brandon(9) → Sandy(10)
// R2: Sandy(11) → Brandon(12) → Floyd(13) → Nate(14) → Luke(15) → Jackie(16) → Conor(17) → Mandy(18) → Tori(19) → Cathy(20)
const PARTICIPANTS = [
  { name: "Cathy",   pick1: "TBD", pick2: "TBD", draftOrder: 1  },
  { name: "Tori",    pick1: "TBD", pick2: "TBD", draftOrder: 2  },
  { name: "Mandy",   pick1: "TBD", pick2: "TBD", draftOrder: 3  },
  { name: "Conor",   pick1: "TBD", pick2: "TBD", draftOrder: 4  },
  { name: "Jackie",  pick1: "TBD", pick2: "TBD", draftOrder: 5  },
  { name: "Luke",    pick1: "TBD", pick2: "TBD", draftOrder: 6  },
  { name: "Nate",    pick1: "TBD", pick2: "TBD", draftOrder: 7  },
  { name: "Floyd",   pick1: "TBD", pick2: "TBD", draftOrder: 8  },
  { name: "Brandon", pick1: "TBD", pick2: "TBD", draftOrder: 9  },
  { name: "Sandy",   pick1: "TBD", pick2: "TBD", draftOrder: 10 },
];

const SCORES = {
  Cathy:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Tori:    { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Mandy:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Conor:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Jackie:  { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Luke:    { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Nate:    { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Floyd:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Brandon: { pick1: [null, null, null, null], pick2: [null, null, null, null] },
  Sandy:   { pick1: [null, null, null, null], pick2: [null, null, null, null] },
};

export default function TheOpen() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
