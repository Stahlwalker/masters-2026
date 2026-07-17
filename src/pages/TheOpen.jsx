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
  watchLiveUrl: "https://www.randa.tv/home",
  potAmount: "$100",
};

// Snake draft — R1 forward, R2 reverse
// R1: Cathy(1) → Tori(2) → Mandy(3) → Conor(4) → Jackie(5) → Luke(6) → Nate(7) → Floyd(8) → Brandon(9) → Sandy(10)
// R2: Sandy(11) → Brandon(12) → Floyd(13) → Nate(14) → Luke(15) → Jackie(16) → Conor(17) → Mandy(18) → Tori(19) → Cathy(20)
const PARTICIPANTS = [
  { name: "Cathy",   pick1: "Scottie Scheffler", pick1Rank: 1,  pick2: "J.J. Spaun",          pick2Rank: 13, winPct: "18.1%", draftOrder: 1  },
  { name: "Tori",    pick1: "Rory McIlroy",       pick1Rank: 2,  pick2: "Wyndham Clark",        pick2Rank: 8,  winPct: "12.8%", draftOrder: 2  },
  { name: "Mandy",   pick1: "Matt Fitzpatrick",   pick1Rank: 3,  pick2: "Aaron Rai",            pick2Rank: 17, winPct: "10.1%", draftOrder: 3  },
  { name: "Luke",    pick1: "Cameron Young",      pick1Rank: 4,  pick2: "Sam Burns",            pick2Rank: 18, winPct: "9.9%",  draftOrder: 6  },
  { name: "Nate",    pick1: "Chris Gotterup",     pick1Rank: 6,  pick2: "Viktor Hovland",       pick2Rank: 12, winPct: "8.9%",  draftOrder: 7  },
  { name: "Floyd",   pick1: "Russell Henley",     pick1Rank: 5,  pick2: "Ben Griffin",          pick2Rank: 16, winPct: "8.6%",  draftOrder: 8  },
  { name: "Sandy",   pick1: "Xander Schauffele",  pick1Rank: 14, pick2: "Justin Rose",          pick2Rank: 10, winPct: "8.4%",  draftOrder: 10 },
  { name: "Conor",   pick1: "Tommy Fleetwood",    pick1Rank: 9,  pick2: "Robert MacIntyre",     pick2Rank: 15, winPct: "8.3%",  draftOrder: 4  },
  { name: "Brandon", pick1: "Jon Rahm",           pick1Rank: 11, pick2: "Ludvig Åberg",         pick2Rank: 20, winPct: "7.8%",  draftOrder: 9  },
  { name: "Jackie",  pick1: "Collin Morikawa",    pick1Rank: 7,  pick2: "Bryson DeChambeau",    pick2Rank: 37, winPct: "7.1%",  draftOrder: 5  },
];

const SCORES = {
  Cathy:   { pick1: [-2, -2, null, null], pick2: [0,  -2,   null, null] },  // Scheffler -2; Spaun -2
  Tori:    { pick1: [2,  0,  null, null], pick2: [3,  7,    null, null] },  // McIlroy 0; Clark +7
  Mandy:   { pick1: [2,  -1, null, null], pick2: [1,  2,    null, null] },  // Fitzpatrick -1; Rai +2
  Luke:    { pick1: [-3, -4, null, null], pick2: [3,  -1,   null, null] },  // Young -4; Burns -1
  Nate:    { pick1: [0,  -2, null, null], pick2: [0,  0,    null, null] },  // Gotterup -2; Hovland E
  Floyd:   { pick1: [0,  0,  null, null], pick2: [-1, -1,   null, null] },  // Henley 0; Griffin -1
  Sandy:   { pick1: [1,  1,  null, null], pick2: [5,  5,    null, null] },  // Schauffele E; Rose +5
  Conor:   { pick1: [-1, 1,  null, null], pick2: [-3, -3,   null, null] },  // Fleetwood +2 today; MacIntyre -3
  Brandon: { pick1: [-1, 1,  null, null], pick2: [1,  -1,   null, null] },  // Rahm +2 today; Åberg -1
  Jackie:  { pick1: [-2, -5, null, null], pick2: [-3, -3,   null, null] },  // Morikawa -5; DeChambeau -3
};

export default function TheOpen() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
