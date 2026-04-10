import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DAYS = ["R1 (Thu)", "R2 (Fri)", "R3 (Sat)", "R4 (Sun)"];

const MAJORS = [
  { label: "Masters",         path: "/",       logo: "/logos/masters-logo.png"        },
  { label: "PGA Championship",path: "/pga",    logo: "/logos/PGA_Championship.png"    },
  { label: "U.S. Open",       path: "/usopen", logo: "/logos/US_Open_(Golf)_Logo.png" },
  { label: "The Open",        path: "/open",   logo: "/logos/open-logo.png"           },
];

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

const formatScore = (n) => {
  if (n === null) return "—";
  if (n === 0) return "E";
  if (n > 0) return `+${n}`;
  return `${n}`;
};

const scoreColor = (n, theme) => {
  if (n === null) return "#999";
  if (n < 0) return "#c0392b";
  if (n === 0) return "#888";
  return "#2563eb";
};

const latestRound = (scores) => {
  let last = 0;
  for (const p of Object.values(scores)) {
    for (let i = 0; i < 4; i++) {
      if (p.pick1[i] !== null || p.pick2[i] !== null) last = i;
    }
  }
  return last;
};

const getTotal = (scores, name, day) => {
  const p = scores[name];
  return { pick1Total: p.pick1[day], pick2Total: p.pick2[day] };
};

const getBestScore = (scores, name, day) => {
  const { pick1Total, pick2Total } = getTotal(scores, name, day);
  if (pick1Total === null && pick2Total === null) return null;
  if (pick1Total === null) return pick2Total;
  if (pick2Total === null) return pick1Total;
  return Math.min(pick1Total, pick2Total);
};

export default function MajorLeaderboard({ theme, participants, scores, comingSoon }) {
  const [activeDay, setActiveDay] = useState(() => latestRound(scores));
  const width = useWindowWidth();
  const isMobile = width < 640;

  const sorted = [...participants].sort((a, b) => {
    const sa = getBestScore(scores, a.name, activeDay);
    const sb = getBestScore(scores, b.name, activeDay);
    if (sa === null && sb === null) return 0;
    if (sa === null) return 1;
    if (sb === null) return -1;
    return sa - sb;
  });

  const dayLabel = DAYS[activeDay].split(" ")[0];

  const pillBtn = (active) => ({
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 30,
    cursor: "pointer",
    border: "none",
    ...(active
      ? {
          background: theme.tableHeaderBg,
          color: "#fff",
          boxShadow: `0 2px 10px ${theme.accentGlow}, 0 0 0 1px ${theme.accentFaint} inset`,
        }
      : { background: "transparent", color: "#595959", border: "1px solid #d0cbc0" }),
  });

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>

      {/* Header */}
      <div style={{
        background: theme.headerBg,
        padding: "28px 24px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 320, height: 160,
          background: `radial-gradient(ellipse, ${theme.accentFaint} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Major logos */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 16 : 32,
          flexWrap: "wrap",
        }}>
          {MAJORS.map(({ label, path, logo }) => {
            const active = path === theme.path;
            return (
              <Link key={label} to={path} style={{
                display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 0,
                background: active ? "rgba(255,255,255,0.95)" : "transparent",
                borderRadius: 10,
                padding: active ? "8px 14px" : 0,
                boxShadow: active ? "0 2px 16px rgba(0,0,0,0.3)" : "none",
                transition: "all 0.2s ease",
              }}>
                <img
                  src={logo}
                  alt={label}
                  style={{
                    height: active ? (isMobile ? 52 : 64) : (isMobile ? 36 : 46),
                    width: "auto",
                    display: "block",
                    opacity: active ? 1 : 0.55,
                    filter: active ? "none" : "brightness(0) invert(1) opacity(0.55)",
                    transition: "opacity 0.2s ease",
                  }}
                />
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? 20 : 26,
            fontWeight: 600,
            color: theme.accent,
            letterSpacing: 0.5,
          }}>
            Family Pool · 2026
          </div>
          <div style={{
            width: 40, height: 1,
            background: theme.accentFaint,
            margin: "8px auto 6px",
          }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 0.4 }}>
            <span className="gold-shimmer">$40</span> pot &nbsp;·&nbsp; best of two picks counts
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
        justifyContent: "space-between",
        borderBottom: "1px solid var(--color-border-tertiary)",
        background: "linear-gradient(to bottom, #f5f3ee, #faf9f6)",
      }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {DAYS.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(i)} style={pillBtn(i === activeDay)}>
              {d}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          {theme.leaderboardUrl && (
            <a href={theme.leaderboardUrl} target="_blank" rel="noopener noreferrer" style={{
              padding: "7px 14px", fontSize: 12, fontWeight: 600, borderRadius: 30,
              border: `1px solid ${theme.tableHeaderColor}`,
              color: theme.tableHeaderColor, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 5,
            }}>
              📋 Leaderboard
            </a>
          )}
          {theme.watchLiveUrl && (
            <a href={theme.watchLiveUrl} target="_blank" rel="noopener noreferrer" style={{
              padding: "7px 14px", fontSize: 12, fontWeight: 600, borderRadius: 30,
              background: "linear-gradient(135deg, #c0392b, #922b21)",
              color: "#fff", textDecoration: "none",
              display: "flex", alignItems: "center", gap: 5,
              boxShadow: "0 2px 8px rgba(192,57,43,0.35)",
            }}>
              🔴 Watch Live
            </a>
          )}
        </div>
      </div>

      {/* Coming Soon / Leaderboard */}
      {comingSoon ? (
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", padding: "80px 24px", gap: 12,
        }}>
          <div style={{ fontSize: 48 }}>⛳</div>
          <div style={{
            fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 600,
            color: theme.tableHeaderColor,
          }}>
            Coming Soon
          </div>
          <div style={{ fontSize: 14, color: "#999" }}>
            Picks and scoring will open closer to the tournament.
          </div>
        </div>
      ) : (
        <>
          {/* Leaderboard table */}
          <div style={{ padding: "0 0 16px" }}>
            {isMobile ? (
              <div>
                {sorted.map((p, idx) => {
                  const best = getBestScore(scores, p.name, activeDay);
                  const { pick1Total, pick2Total } = getTotal(scores, p.name, activeDay);
                  const isBest1 = pick1Total !== null && (pick2Total === null || pick1Total <= pick2Total);
                  const isBest2 = pick2Total !== null && (pick1Total === null || pick2Total <= pick1Total);
                  const isLeader = idx === 0;
                  return (
                    <div key={p.name} style={{
                      borderBottom: "1px solid var(--color-border-tertiary)",
                      borderLeft: isLeader ? `3px solid ${theme.accent}` : "3px solid transparent",
                      padding: "12px 16px",
                      background: isLeader ? theme.leaderRowBg : "#fff",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                        <span style={{
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          width: 24, height: 24, borderRadius: "50%", flexShrink: 0, marginRight: 4,
                          background: isLeader ? theme.badge1Bg : idx === 1 ? "linear-gradient(135deg,#e8e8e8,#c8c8c8)" : idx === 2 ? "linear-gradient(135deg,#e8d5b0,#c8a96e)" : "transparent",
                          fontSize: 12, fontWeight: 700,
                          color: isLeader ? theme.badge1Text : idx <= 2 ? "#555" : "#bbb",
                        }}>
                          {trophy(idx + 1) || idx + 1}
                        </span>
                        <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: "#1a1a1a" }}>{p.name}</span>
                          <span style={{ fontSize: 11, color: "#aaa", fontWeight: 400 }}>{p.winPct}</span>
                          {p.draftOrder && <span style={{ fontSize: 10, color: "#006747", fontWeight: 700, background: "#e6f3ec", borderRadius: 4, padding: "1px 5px" }}>· #{p.draftOrder} pick</span>}
                        </span>
                        <span style={{
                          fontWeight: 700, fontSize: 16, color: scoreColor(best, theme),
                          border: `1.5px solid ${scoreColor(best, theme)}`,
                          borderRadius: 8, padding: "3px 10px",
                          minWidth: 44, textAlign: "center",
                        }}>{formatScore(best)}</span>
                      </div>
                      {[
                        { pick: "pick1", label: p.pick1, rank: p.pick1Rank, total: pick1Total, isActive: isBest1 },
                        { pick: "pick2", label: p.pick2, rank: p.pick2Rank, total: pick2Total, isActive: isBest2 },
                      ].map(({ pick, label, rank, total, isActive }) => (
                        <div key={pick} style={{ display: "flex", alignItems: "center", paddingLeft: 28, marginBottom: 3 }}>
                          <span style={{
                            flex: 1, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                            color: isActive ? "#1a1a1a" : "#888", fontWeight: isActive ? 500 : 400,
                          }}>
                            {label}{rank && <span style={{ fontSize: 11, color: "#006747", fontWeight: 600, marginLeft: 4 }}>#{rank}</span>}
                          </span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: scoreColor(total, theme), marginLeft: 8 }}>{formatScore(total)}</span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: theme.tableHeaderBg }}>
                    {["#", "Person", "Pick 1", dayLabel, "Pick 2", dayLabel, "Best"].map((h, i) => (
                      <th key={i} style={{
                        textAlign: i <= 1 || i === 2 || i === 4 ? "left" : "center",
                        padding: i === 0 ? "11px 12px" : "11px 10px",
                        fontWeight: 500, fontSize: 11,
                        color: "rgba(255,255,255,0.75)",
                        letterSpacing: 0.8, textTransform: "uppercase",
                        width: i === 0 ? 36 : i === 3 || i === 5 ? 52 : i === 6 ? 64 : "auto",
                        borderBottom: `2px solid ${theme.accent}`,
                        borderLeft: i === 6 ? "2px solid rgba(255,255,255,0.2)" : "none",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((p, idx) => {
                    const best = getBestScore(scores, p.name, activeDay);
                    const { pick1Total, pick2Total } = getTotal(scores, p.name, activeDay);
                    const isBest1 = pick1Total !== null && pick2Total !== null && pick1Total <= pick2Total;
                    const isBest2 = pick2Total !== null && pick1Total !== null && pick2Total <= pick1Total;
                    const onlyOne1 = pick1Total !== null && pick2Total === null;
                    const onlyOne2 = pick2Total !== null && pick1Total === null;
                    const isLeader = idx === 0;
                    return (
                      <tr key={p.name} style={{
                        background: isLeader ? theme.leaderRowBg : idx % 2 === 0 ? "#fff" : "#faf9f6",
                        borderBottom: "1px solid var(--color-border-tertiary)",
                        borderLeft: isLeader ? `3px solid ${theme.accent}` : "3px solid transparent",
                      }}>
                        <td style={{ padding: "11px 12px", width: 36 }}>
                          <span style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            width: 24, height: 24, borderRadius: "50%",
                            background: isLeader ? theme.badge1Bg : idx === 1 ? "linear-gradient(135deg,#e8e8e8,#c8c8c8)" : idx === 2 ? "linear-gradient(135deg,#e8d5b0,#c8a96e)" : "transparent",
                            fontSize: 12, fontWeight: 700,
                            color: isLeader ? theme.badge1Text : idx <= 2 ? "#555" : "#bbb",
                          }}>
                            {trophy(idx + 1) || idx + 1}
                          </span>
                        </td>
                        <td style={{ padding: "11px 10px" }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15 }}>{p.name}</span>
                          <span style={{ fontSize: 11, color: "#aaa", fontWeight: 400, marginLeft: 6 }}>{p.winPct}</span>
                          {p.draftOrder && <span style={{ fontSize: 10, color: "#006747", fontWeight: 700, background: "#e6f3ec", borderRadius: 4, padding: "1px 5px", marginLeft: 4 }}>· #{p.draftOrder} pick</span>}
                        </td>
                        <td style={{ padding: "11px 10px", fontSize: 13, color: (isBest1||onlyOne1) ? "#1a1a1a":"#888", fontWeight: (isBest1||onlyOne1) ? 500:400 }}>
                          {p.pick1}{p.pick1Rank && <span style={{ fontSize: 11, color: "#006747", fontWeight: 600, marginLeft: 5 }}>#{p.pick1Rank}</span>}
                        </td>
                        <td style={{ textAlign: "center", padding: "11px 4px", width: 52, fontSize: 13, fontWeight: 600, color: scoreColor(pick1Total, theme) }}>{formatScore(pick1Total)}</td>
                        <td style={{ padding: "11px 10px", fontSize: 13, color: (isBest2||onlyOne2) ? "#1a1a1a":"#888", fontWeight: (isBest2||onlyOne2) ? 500:400 }}>
                          {p.pick2}{p.pick2Rank && <span style={{ fontSize: 11, color: "#006747", fontWeight: 600, marginLeft: 5 }}>#{p.pick2Rank}</span>}
                        </td>
                        <td style={{ textAlign: "center", padding: "11px 4px", width: 52, fontSize: 13, fontWeight: 600, color: scoreColor(pick2Total, theme) }}>{formatScore(pick2Total)}</td>
                        <td style={{ textAlign: "center", padding: "11px 12px", width: 64, fontWeight: 700, fontSize: 16, color: scoreColor(best, theme), borderLeft: "2px solid rgba(0,0,0,0.08)" }}>{formatScore(best)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Projected Winner */}
          <div style={{ display: "flex", justifyContent: "center", padding: "24px 16px 8px" }}>
            <div className="shine-card" style={{
              background: theme.projectedWinnerBg,
              border: `2px solid ${theme.accent}`,
              borderRadius: 16, padding: "22px 48px", textAlign: "center", minWidth: 260,
              boxShadow: `0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px ${theme.accentFaint} inset, 0 1px 0 rgba(255,255,255,0.06) inset`,
            }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase",
                color: theme.accent, marginBottom: 8, textShadow: `0 0 12px ${theme.accentGlow}`,
              }}>
                ✦ Projected Winner ✦
              </div>
              <div style={{
                fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700,
                color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.4)", lineHeight: 1.1,
              }}>
                {sorted[0].name}
              </div>
              <div style={{
                width: 32, height: 1,
                background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
                margin: "10px auto 8px",
              }} />
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 0.3 }}>
                {sorted[0].pick1} · {sorted[0].pick2}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Inline footer note */}
      <div style={{ padding: "12px 16px 80px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>
          Scores relative to par · best of two picks counts
        </p>
      </div>

      {/* Sticky footer */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(90deg, #0a0f0d 0%, #111815 50%, #0a0f0d 100%)",
        padding: "10px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        zIndex: 100, flexWrap: "wrap", gap: 8,
      }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link to="/" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
            color: "rgba(255,255,255,0.5)", textDecoration: "none",
          }}>
            THE MASTERS
          </Link>
          {[
            { label: "PGA Championship", date: "May", path: "/pga" },
            { label: "U.S. Open",        date: "Jun", path: "/usopen" },
            { label: "The Open",         date: "Jul", path: "/open" },
          ].map(({ label, date, path }) => (
            <Link key={label} to={path} style={{
              fontSize: 12, fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              display: "flex", alignItems: "center", gap: 4,
            }}>
              {label}
              <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.7 }}>({date})</span>
            </Link>
          ))}
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
          Made by{" "}
          <a href="https://lukestahl.io/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#FCE300", textDecoration: "underline" }}>
            Luke Stahl
          </a>
        </span>
      </div>
    </div>
  );
}
