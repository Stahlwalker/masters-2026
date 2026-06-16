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
  { name: "Jackie",  pick1: "Scottie Scheffler", pick2: "—", winPct: "", draftOrder: 1  },
  { name: "Nate",    pick1: "Rory McIlroy", pick2: "—", winPct: "", draftOrder: 2  },
  { name: "Cathy",   pick1: "Cameron Young", pick2: "—", winPct: "", draftOrder: 3  },
  { name: "Brandon", pick1: "Xander Schauffele", pick2: "Aaron Rai", winPct: "", draftOrder: 4  },
  { name: "Mandy",   pick1: "Matt Fitzpatrick", pick2: "Chris Gotterup", winPct: "", draftOrder: 5  },
  { name: "Luke",    pick1: "Ludvig Åberg", pick2: "Bryson DeChambeau", winPct: "", draftOrder: 6  },
  { name: "Sandy",   pick1: "Tommy Fleetwood", pick2: "J.J. Spaun", winPct: "", draftOrder: 7  },
  { name: "Conor",   pick1: "Brooks Koepka", pick2: "Justin Thomas", winPct: "", draftOrder: 8  },
  { name: "Floyd",   pick1: "Collin Morikawa", pick2: "Ben Griffin", winPct: "", draftOrder: 9  },
  { name: "Tori",    pick1: "Jon Rahm", pick2: "Wyndham Clark", winPct: "", draftOrder: 10 },
];

const SCORES = Object.fromEntries(
  PARTICIPANTS.map(({ name }) => [name, { pick1: [null, null, null, null], pick2: [null, null, null, null] }])
);

export default function USOpen() {
  return <MajorLeaderboard theme={THEME} participants={PARTICIPANTS} scores={SCORES} />;
}
