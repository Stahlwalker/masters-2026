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
  potAmount: "$45",
};

const PARTICIPANTS = [
  { name: "Nate",   pick1: "Rory McIlroy",      pick1Rank: 2,  pick2: "Sepp Straka",       pick2Rank: 13, winPct: "11.6%", draftOrder: 2 },
  { name: "Sandy",  pick1: "Matt Fitzpatrick",  pick1Rank: 4,  pick2: "Xander Schauffele", pick2Rank: 11, winPct: "11.6%", draftOrder: 4 },
  { name: "Mandy",  pick1: "Tommy Fleetwood",   pick1Rank: 6,  pick2: "Chris Gotterup",    pick2Rank: 10, winPct: "11.6%", draftOrder: 9 },
  { name: "Jackie", pick1: "Collin Morikawa",   pick1Rank: 5,  pick2: "Justin Thomas",     pick2Rank: 16, winPct: "11.4%", draftOrder: 7 },
  { name: "Cathy",  pick1: "Ludvig Aberg",      pick1Rank: 15, pick2: "Justin Rose",       pick2Rank: 7,  winPct: "11.4%", draftOrder: 8 },
  { name: "Floyd",  pick1: "Cameron Young",     pick1Rank: 3,  pick2: "Akshay Bhatia",     pick2Rank: 23, winPct: "11.3%", draftOrder: 3 },
  { name: "Tori",   pick1: "Scottie Scheffler", pick1Rank: 1,  pick2: "Rickie Fowler",     pick2Rank: 36, winPct: "11.0%", draftOrder: 1 },
  { name: "Luke",   pick1: "Bryson DeChambeau", pick1Rank: 28, pick2: "Shane Lowry",       pick2Rank: 38, winPct: "10.1%", draftOrder: 6 },
  { name: "Conor",  pick1: "Jon Rahm",          pick1Rank: 20, pick2: "Jordan Spieth",     pick2Rank: 51, winPct: "9.9%",  draftOrder: 5 },
];

const SCORES = {
  Tori:   { pick1: [-3,  -2, -1,   -2],                     pick2: [0,  +1, -1,   +4]                    },  // Scheffler 67/71/71/69=-2, Fowler 70/71/68/75=+4
  Nate:   { pick1: [+4,  +1, -3,   -4],                     pick2: [+3, +6, null, null], pick2Cut: true  },  // McIlroy 74/67/66/69=-4, Straka CUT
  Floyd:  { pick1: [+1,  -2,  0,    0],                     pick2: [+1, +5, null, null], pick2Cut: true  },  // Young 71/67/72/70=E, Bhatia CUT
  Sandy:  { pick1: [0,   +2, +3,   -2],                     pick2: [-2, +1, -3,   -4]                    },  // Fitzpatrick 70/72/71/65=-2, Schauffele 68/73/66/69=-4
  Conor:  { pick1: [-1,  -1, -4,   -6],                     pick2: [-1, +1, +1,   -1]                    },  // Rahm 69/70/67/68=-6, Spieth 69/72/70/68=-1
  Luke:   { pick1: [+6,  +7, null, null], pick1Cut: true,   pick2: [-2, +4, +4,   +2]                    },  // DeChambeau CUT, Lowry 68/76/70/68=+2
  Jackie: { pick1: [-1,  +1, +5,   +3],                     pick2: [-1, -2,  0,   -5]                    },  // Morikawa 69/72/74/68=+3, Thomas 69/69/72/65=-5
  Cathy:  { pick1: [+2,  -2, -4,   -5],                     pick2: [0,  +3, -2,   -3]                    },  // Åberg 72/66/68/69=-5, Rose 70/73/65/69=-3
  Mandy:  { pick1: [+2,  +5, null, null], pick1Cut: true,   pick2: [+2, -3, -2,   -3]                    },  // Fleetwood CUT, Gotterup 72/65/71/69=-3
};

export default function PGA() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} final />;
}
