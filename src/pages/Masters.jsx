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
  { name: "Floyd", pick1: "Scottie Scheffler", pick1Rank: 1,  pick2: "Akshay Bhatia",    pick2Rank: 21, winPct: "18.2%", draftOrder: 1 },
  { name: "Tori",  pick1: "Bryson DeChambeau", pick1Rank: 24, pick2: "Matt Fitzpatrick",  pick2Rank: 6,  winPct: "13.7%", draftOrder: 3 },
  { name: "Conor", pick1: "Jon Rahm",          pick1Rank: 30, pick2: "Tommy Fleetwood",   pick2Rank: 4,  winPct: "13.2%", draftOrder: 8 },
  { name: "Jackie",pick1: "Rory McIlroy",      pick1Rank: 2,  pick2: "Jordan Spieth",     pick2Rank: 61, winPct: "9.1%",  draftOrder: 2 },
  { name: "Cathy", pick1: "Xander Schauffele", pick1Rank: 10, pick2: "Collin Morikawa",   pick2Rank: 7,  winPct: "9.1%",  draftOrder: 7 },
  { name: "Nate",  pick1: "Justin Rose",       pick1Rank: 9,  pick2: "Cameron Young",     pick2Rank: 3,  winPct: "7.8%",  draftOrder: 6 },
  { name: "Luke",  pick1: "Ludvig Åberg",      pick1Rank: 17, pick2: "Justin Thomas",     pick2Rank: 15, winPct: "6.7%",  draftOrder: 4 },
  { name: "Sandy", pick1: "J.J. Spaun",        pick1Rank: 5,  pick2: "Robert MacIntyre",  pick2Rank: 8,  winPct: "4.6%",  draftOrder: 5 },
];

const SCORES = {
  Floyd:  { pick1: [-2,   0,  -7, -11],                    pick2: [+1, +6, null, null], pick2Cut: true  },  // Scheffler 70/74/65/68=-11, Bhatia CUT
  Tori:   { pick1: [+4,  +6, null, null], pick1Cut: true,    pick2: [+2, -1,  -3,  -4]                  },  // DeChambeau CUT, Fitzpatrick 74/69/70/71=-4
  Conor:  { pick1: [+6,  +4,  +5,  +1],                    pick2: [-1, -5,  -4,   0]                  },  // Rahm 78/70/73/68=+1, Fleetwood 71/68/73/76=E
  Jackie: { pick1: [-5, -12, -11, -12],                    pick2: [0,  +1,  -1,  -5]                  },  // McIlroy 67/65/73/71=-12 (WINNER), Spieth 72/73/70/68=-5
  Cathy:  { pick1: [-2,  -2,  -4,  -8],                    pick2: [+2, -1,  -5,  -9]                  },  // Schauffele 70/72/70/68=-8, Morikawa 74/69/68/68=-9
  Nate:   { pick1: [-2,  -5,  -8, -10],                    pick2: [+1, -4, -11, -10]                  },  // Rose 70/69/69/70=-10, Young 73/67/65/73=-10
  Luke:   { pick1: [+2,   0,  -3,  -3],                    pick2: [0,  +2,  +1,  +2]                  },  // Åberg 74/70/69/72=-3, Thomas 72/74/71/73=+2
  Sandy:  { pick1: [+2,  +5, null, null], pick1Cut: true,    pick2: [+8, +7, null, null], pick2Cut: true  },  // Spaun CUT, MacIntyre CUT
};

export default function Masters() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} final />;
}
