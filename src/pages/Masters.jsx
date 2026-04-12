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
  Floyd:  { pick1: [-2,   0,  -7, null],                    pick2: [+1, +6, null, null], pick2Cut: true  },  // Scheffler -2/E/-7, Bhatia +1/+6 (CUT)
  Tori:   { pick1: [+4,  +6, null, null], pick1Cut: true,    pick2: [+2, -1,  -3, null]                  },  // DeChambeau +4/+6 (CUT), Fitzpatrick +2/-1/-3
  Conor:  { pick1: [+6,  +4,  +5, null],                    pick2: [-1, -5,  -4, null]                  },  // Rahm +6/+4/+5, Fleetwood -1/-5/-4
  Jackie: { pick1: [-5, -12, -11, null],                    pick2: [0,  +1,  -1, null]                  },  // McIlroy -5/-12/-11, Spieth E/+1/-1
  Cathy:  { pick1: [-2,  -2,  -4, null],                    pick2: [+2, -1,  -5, null]                  },  // Schauffele -2/-2/-4, Morikawa +2/-1/-5
  Nate:   { pick1: [-2,  -5,  -8, null],                    pick2: [+1, -4, -11, null]                  },  // Rose -2/-5/-8, Young +1/-4/-11
  Luke:   { pick1: [+2,   0,  -3, null],                    pick2: [0,  +2,  +1, null]                  },  // Åberg +2/E/-3, Thomas E/+2/+1
  Sandy:  { pick1: [+2,  +5, null, null], pick1Cut: true,    pick2: [+8, +7, null, null], pick2Cut: true  },  // Spaun +2/+5 (CUT), MacIntyre +8/+7 (CUT)
};

export default function Masters() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
