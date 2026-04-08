import { useState, useEffect } from "react";

const PARTICIPANTS = [
  { name: "Floyd", pick1: "Scottie Scheffler", pick2: "Akshay Bhatia",       winPct: "18.2%" },
  { name: "Tori",  pick1: "Bryson DeChambeau", pick2: "Matt Fitzpatrick",    winPct: "13.7%" },
  { name: "Conor", pick1: "Jon Rahm",          pick2: "Tommy Fleetwood",     winPct: "13.2%" },
  { name: "Jackie",pick1: "Rory McIlroy",      pick2: "Jordan Spieth",       winPct: "9.1%"  },
  { name: "Cathy", pick1: "Xander Schauffele", pick2: "Collin Morikawa",     winPct: "9.1%"  },
  { name: "Nate",  pick1: "Justin Rose",       pick2: "Cameron Young",       winPct: "7.8%"  },
  { name: "Luke",  pick1: "Ludvig Åberg",      pick2: "Justin Thomas",       winPct: "6.7%"  },
  { name: "Sandy", pick1: "J.J. Spaun",        pick2: "Robert MacIntyre",    winPct: "4.6%"  },
];

// Scores relative to par per round [R1, R2, R3, R4]. null = not yet played.
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

const DAYS = ["R1 (Thu)", "R2 (Fri)", "R3 (Sat)", "R4 (Sun)"];

// Auto-detect the latest round that has any score entered
const latestRound = () => {
  let last = 0;
  for (const p of Object.values(SCORES)) {
    for (let i = 0; i < 4; i++) {
      if (p.pick1[i] !== null || p.pick2[i] !== null) last = i;
    }
  }
  return last;
};

const trophy = (place) => {
  if (place === 1) return "🥇";
  if (place === 2) return "🥈";
  if (place === 3) return "🥉";
  return null;
};

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

const GREEN = "#006747";
const DARK_GREEN = "#1C4932";
const YELLOW = "#FCE300";

const scoreColor = (n) => {
  if (n === null) return "#999";
  if (n < 0) return "#c0392b";
  if (n === 0) return GREEN;
  return "#1a1a1a";
};

const formatScore = (n) => {
  if (n === null) return "—";
  if (n === 0) return "E";
  if (n > 0) return `+${n}`;
  return `${n}`;
};

const getTotal = (name, day) => {
  const p = SCORES[name];
  return {
    pick1Total: p.pick1[day],
    pick2Total: p.pick2[day],
  };
};

const getBestScore = (name, day) => {
  const { pick1Total, pick2Total } = getTotal(name, day);
  if (pick1Total === null && pick2Total === null) return null;
  if (pick1Total === null) return pick2Total;
  if (pick2Total === null) return pick1Total;
  return Math.min(pick1Total, pick2Total);
};

export default function MastersLeaderboard() {
  const [activeDay, setActiveDay] = useState(latestRound);
  const width = useWindowWidth();
  const isMobile = width < 640;

  const sorted = [...PARTICIPANTS].sort((a, b) => {
    const sa = getBestScore(a.name, activeDay);
    const sb = getBestScore(b.name, activeDay);
    if (sa === null && sb === null) return 0;
    if (sa === null) return 1;
    if (sb === null) return -1;
    return sa - sb;
  });

  const dayLabel = DAYS[activeDay].split(" ")[0];

  const pillBtn = (active, activeStyle, inactiveStyle) => ({
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 30,
    cursor: "pointer",
    border: "none",
    ...(active ? activeStyle : inactiveStyle),
  });

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>

      {/* Header */}
      <div style={{
        background: `linear-gradient(160deg, #0f3d26 0%, ${DARK_GREEN} 40%, #1a5c3a 70%, #0d3321 100%)`,
        padding: "28px 24px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* subtle radial glow behind logo */}
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 320, height: 160,
          background: "radial-gradient(ellipse, rgba(252,227,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <img
          src="/masters-logo.png"
          alt="The Masters"
          style={{ height: isMobile ? 64 : 80, width: "auto", display: "block" }}
        />
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? 20 : 26,
            fontWeight: 600,
            color: YELLOW,
            letterSpacing: 0.5,
          }}>
            Family Pool · 2026
          </div>
          <div style={{
            width: 40, height: 1,
            background: "rgba(252,227,0,0.35)",
            margin: "8px auto 6px",
          }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 0.4 }}>
            $40 pot &nbsp;·&nbsp; best of two picks counts
          </div>
        </div>
      </div>

      {/* Round selector */}
      <div style={{
        padding: "14px 16px",
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        alignItems: "center",
        borderBottom: "1px solid var(--color-border-tertiary)",
        background: "linear-gradient(to bottom, #f5f3ee, #faf9f6)",
      }}>
        {DAYS.map((d, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            className={i === activeDay ? "round-btn-active" : ""}
            style={pillBtn(
              i === activeDay,
              { color: "#fff" },
              { background: "transparent", color: "#595959", border: "1px solid #d0cbc0" }
            )}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Leaderboard */}
      <div style={{ padding: "0 0 16px" }}>
        {isMobile ? (
          <div>
            {sorted.map((p, idx) => {
              const best = getBestScore(p.name, activeDay);
              const { pick1Total, pick2Total } = getTotal(p.name, activeDay);
              const isBest1 = pick1Total !== null && (pick2Total === null || pick1Total <= pick2Total);
              const isBest2 = pick2Total !== null && (pick1Total === null || pick2Total <= pick1Total);

              const isLeader = idx === 0;
              return (
                <div
                  key={p.name}
                  style={{
                    borderBottom: "1px solid var(--color-border-tertiary)",
                    borderLeft: isLeader ? `3px solid ${YELLOW}` : "3px solid transparent",
                    padding: "12px 16px",
                    background: isLeader ? "#fffbe6" : "#fff",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0, marginRight: 4,
                      background: isLeader ? `linear-gradient(135deg, #ffe600 0%, #fca500 100%)` : idx === 1 ? "linear-gradient(135deg, #e8e8e8 0%, #c8c8c8 100%)" : idx === 2 ? "linear-gradient(135deg, #e8d5b0 0%, #c8a96e 100%)" : "transparent",
                      fontSize: 12, fontWeight: 700,
                      color: isLeader ? DARK_GREEN : idx <= 2 ? "#555" : "#bbb",
                    }}>
                      {trophy(idx + 1) || idx + 1}
                    </span>
                    <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: 16,
                        color: "#1a1a1a",
                      }}>
                        {p.name}
                      </span>
                      <span style={{ fontSize: 11, color: "#aaa", fontWeight: 400 }}>
                        {p.winPct}
                      </span>
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 20, color: scoreColor(best) }}>
                      {formatScore(best)}
                    </span>
                  </div>
                  {[
                    { pick: "pick1", label: p.pick1, total: pick1Total, isActive: isBest1 },
                    { pick: "pick2", label: p.pick2, total: pick2Total, isActive: isBest2 },
                  ].map(({ pick, label, total, isActive }) => (
                    <div key={pick} style={{ display: "flex", alignItems: "center", paddingLeft: 28, marginBottom: 3 }}>
                      <span style={{
                        flex: 1, fontSize: 13,
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        color: isActive ? "#1a1a1a" : "#888",
                        fontWeight: isActive ? 500 : 400,
                      }}>
                        {label}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: scoreColor(total), marginLeft: 8 }}>
                        {formatScore(total)}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: `linear-gradient(90deg, #0f3d26 0%, ${DARK_GREEN} 40%, #1a5c3a 100%)` }}>
                {["#", "Person", "Pick 1", dayLabel, "Pick 2", dayLabel, "Best"].map((h, i) => (
                  <th key={i} style={{
                    textAlign: i <= 1 || i === 2 || i === 4 ? "left" : "center",
                    padding: i === 0 ? "11px 12px" : "11px 10px",
                    fontWeight: 500,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    width: i === 0 ? 36 : i === 3 || i === 5 ? 52 : i === 6 ? 64 : "auto",
                    borderBottom: `2px solid ${YELLOW}`,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((p, idx) => {
                const best = getBestScore(p.name, activeDay);
                const { pick1Total, pick2Total } = getTotal(p.name, activeDay);
                const isBest1 = pick1Total !== null && pick2Total !== null && pick1Total <= pick2Total;
                const isBest2 = pick2Total !== null && pick1Total !== null && pick2Total <= pick1Total;
                const onlyOne1 = pick1Total !== null && pick2Total === null;
                const onlyOne2 = pick2Total !== null && pick1Total === null;

                const isLeader = idx === 0;
                return (
                  <tr key={p.name} style={{
                    background: isLeader ? "#fffbe6" : idx % 2 === 0 ? "#fff" : "#faf9f6",
                    borderBottom: "1px solid var(--color-border-tertiary)",
                    borderLeft: isLeader ? `3px solid ${YELLOW}` : "3px solid transparent",
                  }}>
                    <td style={{ padding: "11px 12px", width: 36 }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: 24, height: 24, borderRadius: "50%",
                        background: isLeader ? `linear-gradient(135deg, #ffe600 0%, #fca500 100%)` : idx === 1 ? "linear-gradient(135deg, #e8e8e8 0%, #c8c8c8 100%)" : idx === 2 ? "linear-gradient(135deg, #e8d5b0 0%, #c8a96e 100%)" : "transparent",
                        fontSize: 12, fontWeight: 700,
                        color: isLeader ? DARK_GREEN : idx <= 2 ? "#555" : "#bbb",
                      }}>
                        {trophy(idx + 1) || idx + 1}
                      </span>
                    </td>
                    <td style={{ padding: "11px 10px" }}>
                      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15 }}>{p.name}</span>
                      <span style={{ fontSize: 11, color: "#aaa", fontWeight: 400, marginLeft: 6 }}>{p.winPct}</span>
                    </td>
                    <td style={{
                      padding: "11px 10px", fontSize: 13,
                      color: (isBest1 || onlyOne1) ? "#1a1a1a" : "#888",
                      fontWeight: (isBest1 || onlyOne1) ? 500 : 400,
                    }}>
                      {p.pick1}
                    </td>
                    <td style={{ textAlign: "center", padding: "11px 4px", width: 52, fontSize: 13, fontWeight: 600, color: scoreColor(pick1Total) }}>
                      {formatScore(pick1Total)}
                    </td>
                    <td style={{
                      padding: "11px 10px", fontSize: 13,
                      color: (isBest2 || onlyOne2) ? "#1a1a1a" : "#888",
                      fontWeight: (isBest2 || onlyOne2) ? 500 : 400,
                    }}>
                      {p.pick2}
                    </td>
                    <td style={{ textAlign: "center", padding: "11px 4px", width: 52, fontSize: 13, fontWeight: 600, color: scoreColor(pick2Total) }}>
                      {formatScore(pick2Total)}
                    </td>
                    <td style={{
                      textAlign: "center", padding: "11px 12px", width: 64,
                      fontWeight: 700, fontSize: 16,
                      color: scoreColor(best),
                    }}>
                      {formatScore(best)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Projected Winner */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 16px 8px",
      }}>
        <div className="shine-card" style={{
          background: `linear-gradient(150deg, #1a5c3a 0%, ${DARK_GREEN} 45%, #0a2d1a 100%)`,
          border: `2px solid ${YELLOW}`,
          borderRadius: 16,
          padding: "22px 48px",
          textAlign: "center",
          minWidth: 260,
          boxShadow: `0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px rgba(252,227,0,0.15) inset, 0 1px 0 rgba(255,255,255,0.06) inset`,
        }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 1.8,
            textTransform: "uppercase",
            color: YELLOW,
            marginBottom: 8,
            textShadow: `0 0 12px rgba(252,227,0,0.5)`,
          }}>
            ✦ Projected Winner ✦
          </div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: 30,
            fontWeight: 700,
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            lineHeight: 1.1,
          }}>
            {sorted[0].name}
          </div>
          <div style={{
            width: 32, height: 1,
            background: `linear-gradient(90deg, transparent, ${YELLOW}, transparent)`,
            margin: "10px auto 8px",
          }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 0.3 }}>
            {sorted[0].pick1} · {sorted[0].pick2}
          </div>
        </div>
      </div>

      {/* Inline footer note */}
      <div style={{ padding: "12px 16px 80px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>
          Scores relative to par · best of two picks counts
        </p>
      </div>

      {/* Sticky footer */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: `linear-gradient(90deg, #f5d800 0%, ${YELLOW} 50%, #f5d800 100%)`,
        padding: "10px 16px",
        textAlign: "center",
        zIndex: 100,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: DARK_GREEN }}>
          Made by{" "}
          <a
            href="https://lukestahl.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: DARK_GREEN, textDecoration: "underline" }}
          >
            Luke Stahl
          </a>
        </span>
      </div>
    </div>
  );
}
