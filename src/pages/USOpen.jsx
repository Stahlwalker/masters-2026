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
  leaderboardUrl: "https://www.pgatour.com/leaderboard",
  watchLiveUrl: "https://www.usanetwork.com/live?brand=golf&callsign=golf",
  potAmount: "$50",
};

const PARTICIPANTS = [
  { name: "Jackie",  pick1: "Scottie Scheffler", pick1Rank: 1,   pick2: "Russell Henley",    pick2Rank: 5,  winPct: "10.7%", draftOrder: 1  },
  { name: "Cathy",   pick1: "Cameron Young",      pick1Rank: 3,   pick2: "Justin Rose",       pick2Rank: 7,  winPct: "10.6%", draftOrder: 3  },
  { name: "Mandy",   pick1: "Matt Fitzpatrick",   pick1Rank: 4,   pick2: "Chris Gotterup",    pick2Rank: 11, winPct: "10.5%", draftOrder: 5  },
  { name: "Sandy",   pick1: "Tommy Fleetwood",    pick1Rank: 6,   pick2: "J.J. Spaun",        pick2Rank: 9,  winPct: "10.5%", draftOrder: 7  },
  { name: "Nate",    pick1: "Rory McIlroy",       pick1Rank: 2,   pick2: "Si Woo Kim",        pick2Rank: 18, winPct: "10.4%", draftOrder: 2  },
  { name: "Floyd",   pick1: "Collin Morikawa",    pick1Rank: 10,  pick2: "Ben Griffin",       pick2Rank: 15, winPct: "10.2%", draftOrder: 9  },
  { name: "Brandon", pick1: "Xander Schauffele",  pick1Rank: 12,  pick2: "Aaron Rai",         pick2Rank: 14, winPct: "10.2%", draftOrder: 4  },
  { name: "Tori",    pick1: "Jon Rahm",           pick1Rank: 8,   pick2: "Wyndham Clark",     pick2Rank: 34, winPct: "9.8%",  draftOrder: 10 },
  { name: "Luke",    pick1: "Ludvig Åberg",       pick1Rank: 13,  pick2: "Bryson DeChambeau", pick2Rank: 32, winPct: "9.7%",  draftOrder: 6  },
  { name: "Conor",   pick1: "Brooks Koepka",      pick1Rank: 110, pick2: "Justin Thomas",     pick2Rank: 16, winPct: "7.5%",  draftOrder: 8  },
];

const SCORES = {
  Jackie:  { pick1: [+2,   0, null, null], pick2: [0,   +3, null, null] },
  Cathy:   { pick1: [+2,  +2, null, null], pick2: [+1,  +1, null, null] },
  Mandy:   { pick1: [-2,  -2, null, null], pick2: [+5,  +4, null, null] },
  Sandy:   { pick1: [0,   +1, null, null], pick2: [+7,  +8, null, null], pick2Cut: true },
  Nate:    { pick1: [-1,   0, null, null], pick2: [+7,  +6, null, null], pick2Cut: true },
  Floyd:   { pick1: [+3,  -2, null, null], pick2: [+2,  +2, null, null] },
  Brandon: { pick1: [+1,  -3, null, null], pick2: [+4,  +1, null, null] },
  Tori:    { pick1: [-2,  +6, null, null], pick1Cut: true, pick2: [-6,  -7, null, null] },
  Luke:    { pick1: [-1,  +1, null, null], pick2: [-1,  +4, null, null], pick2Cut: true },
  Conor:   { pick1: [+3, +10, null, null], pick1Cut: true, pick2: [+1,  -1, null, null] },
};

export default function USOpen() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
