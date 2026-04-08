# Masters 2026 — Family Pool

A golf major pool tracker for the Stahl family. Tracks picks, world rankings, draft order, and live scores across all four 2026 majors.

## Tech Stack

- **React 18** — UI
- **React Router v7** — client-side routing between tournament pages
- **Vite** — build tool and dev server
- **CSS** — custom properties, Google Fonts (Playfair Display, Inter), CSS animations

## Project Structure

```
src/
  MajorLeaderboard.jsx   # Shared leaderboard component (theme-driven)
  main.jsx               # Router setup
  index.css              # Global styles, animations
  pages/
    Masters.jsx          # The Masters — picks, scores, theme
    PGA.jsx              # PGA Championship (coming soon)
    USOpen.jsx           # U.S. Open (coming soon)
    TheOpen.jsx          # The Open (coming soon)
public/
  logos/                 # All four major logos
```

## Routes

| Path | Tournament |
|------|-----------|
| `/` | The Masters |
| `/pga` | PGA Championship |
| `/usopen` | U.S. Open |
| `/open` | The Open |

## Running Locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173` (or next available port).

## Updating Scores

Scores are stored in each tournament's page file (e.g., `src/pages/Masters.jsx`) in the `SCORES` object. Scores are relative to par per round — use `null` for rounds not yet played.

```js
const SCORES = {
  Floyd: { pick1: [-3, -2, null, null], pick2: [null, null, null, null] },
  ...
};
```

The leaderboard automatically re-sorts and updates the Projected Winner card as scores are entered.

## Deployment

### Vercel

Connected to the `main` branch on GitHub. Every push to `main` triggers an automatic deployment.

**Build settings (auto-detected):**
- Build command: `npm run build`
- Output directory: `dist`

### Webflow Cloud

Also connected to the `main` branch. Every push to `main` triggers an automatic deployment.

**Build settings:**
- Framework specified via `webflow.json` at the repo root:
  ```json
  {
    "cloud": {
      "framework": "vite"
    }
  }
  ```
- Build command: `npm run build`
- Output directory: `dist`
