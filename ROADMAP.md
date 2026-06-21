# League of Legends Analysis — Roadmap & Ideas

This document outlines how to extend your current project: **PCA**, **time series**, **2024/2025 data**, and **website improvements**.

---

## 1. Adding PCA to the Project

### Why PCA fits your data
- You have **130 columns** and many numeric features (gold, dpm, dragons, towers, objectives, etc.).
- PCA can:
  - **Reduce dimensionality** for visualization (e.g. PC1 vs PC2 colored by `result` or `league`).
  - **Summarize “play style”** (e.g. early-aggression vs scaling) as a few components.
  - **Support modeling**: use top PCs as features instead of raw columns to avoid multicollinearity.

### Suggested approach (team-level, after filtering `position == 'team'`)

**Numeric columns to use (examples):**
- Objectives: `firstblood`, `firstdragon`, `firstherald`, `firstbaron`, `firsttower`, `dragons`, `elders`, `barons`, `towers`, `inhibitors`
- Economy: `totalgold`, `earned gpm`, `goldat10`, `goldat15`, `golddiffat10`, `golddiffat15`
- Combat: `teamkills`, `teamdeaths`, `dpm`, `damageshare`, `gamelength`
- Vision: `visionscore`, `controlwardsbought`, `wardsplaced`

**Steps:**
1. Filter to `position == 'team'`, then select numeric columns (drop IDs, dates, or fill/impute missing).
2. Standardize (e.g. `StandardScaler`) before PCA.
3. Fit `PCA(n_components=2)` for plots, or more (e.g. 5–10) for variance explained.
4. Plot: scatter PC1 vs PC2, color by `result` (win/loss) or `league` or `most_banned_champion_picked`.
5. Optional: add a new **“Exploratory PCA”** page to the website with 1–2 interactive Plotly figures (e.g. `diagram/pca_plot.html`).

### What to add to the website
- A new nav item, e.g. **“Dimensionality (PCA)”** under a suitable parent (e.g. “Data Cleaning and EDA” or a new “Advanced EDA” section).
- Short explanation: goal of PCA, which variables were used, how many components you keep, and a plot (PC1 vs PC2) with a short interpretation (e.g. “PC1 separates early vs late game focus”).

---

## 2. Time Series Ideas

Your data has **`date`** and **`patch`**, so you can do time-based analysis.

### Ideas that fit your site
- **Win rate over time**
  - By **patch**: e.g. line plot of win rate (or mean `result`) by `patch` (or by month), overall or by `most_banned_champion_picked`.
  - By **date**: daily or weekly rolling win rate for a chosen league.
- **MBC pick rate and win rate over time**
  - For each patch (or month): % of games where MBC was picked, and win rate when MBC picked vs not. Shows meta shifts.
- **Objective priority over time**
  - By patch: average `firstdragon`, `firstherald`, `firstbaron` rates; or share of games with soul/elder. Good for a small “meta evolution” section.
- **Simple forecasting (optional)**
  - E.g. predict next-patch win rate for MBC-picked from previous patches (moving average or very simple AR-like model). Good as an “extra” rather than main content.

### Implementation
- Aggregate at **patch** or **date** (e.g. `pd.to_datetime(...).dt.to_period('M')`).
- Use **Plotly** line charts (and optionally range sliders) and embed as `diagram/ts_*.html` iframes.
- Add a **“Time series”** or **“Meta over time”** page that describes the question and shows 2–3 time series plots.

---

## 3. 2024 and 2025 Data

- **Oracle’s Elixir** provides downloadable CSV data; the format is updated over time (e.g. void grubs, pick order).  
  Downloads: [oracleselixir.com/tools/downloads](https://oracleselixir.com/tools/downloads).

### What to do with new years
- **Reuse your pipeline**: same steps (filter `position == 'team'`, ban list, `most_banned_champion` by patch, `most_banned_champion_picked`, etc.). Expect new patches (e.g. 14.xx) and possibly new columns.
- **Cross-year comparisons**:
  - MBC by patch in 2023 vs 2024 vs 2025.
  - Win rate when MBC picked: 2023 vs 2024 vs 2025.
  - Time series that span multiple years (e.g. “Win rate by month” 2023–2025).
- **Code structure**: keep a single notebook (or script) that accepts a **year or file path** so you can run the same analysis on 2023, 2024, or 2025 CSVs.
- **Website**: add a short “Data” or “Years” note (e.g. “Analysis currently uses 2023 data; 2024/2025 can be added with the same methods.”). Later, add tabs or sections like “2023 vs 2024” if you run both.

---

## 4. Website Improvements (Summary)

| Area | Suggestion |
|------|------------|
| **Navigation** | Add “PCA / Dimensionality” and “Time series (meta over time)” pages; group under “Data Cleaning and EDA” or “Advanced EDA”. |
| **Consistency** | Use the same iframe pattern everywhere: responsive wrapper, `border:0`, centered, aspect-ratio where possible (you’ve already improved clean/fair diagrams). |
| **Content** | Add 1–2 sentences per diagram: “This plot shows …”; “We conclude …”. |
| **Data** | On the intro or a “Data” page: source (Oracle’s Elixir), year (2023), row counts (128k rows → 16,484 team rows), and note that 2024/2025 can be added. |
| **Reproducibility** | In the repo README or a “Code” page: “Analysis is in `template.ipynb`; diagrams are exported to `diagram/*.html`.” |

---

## 5. Suggested Order of Work

1. **PCA**: Add PCA in the notebook (team-level, numeric features → StandardScaler → PCA → PC1 vs PC2 plot). Export one Plotly HTML and add one “PCA” page to the site.
2. **Time series**: Add 1–2 time series (e.g. win rate by patch, MBC pick/win rate by patch). Export to `diagram/ts_*.html` and add a “Time series” page.
3. **2024/2025**: Download new CSVs, run the same pipeline (with minor column/year checks), then add comparison sections or a “Multi-year” page.
4. **Polish**: Apply the website improvements above (nav, captions, data source, README).

---

## 6. Quick Reference: Your Current Pipeline

- **Data**: `2023_LoL_esports_match_data_from_OraclesElixir.csv` → filter `position == 'team'` → 16,484 rows.
- **Features**: e.g. `firstblood`, `firstdragon`, `firstbaron`, `firsttower`, `most_banned_champion_picked` (+ more in final model).
- **Notebook**: `template.ipynb` (cleaning → EDA → hypothesis → prediction → fairness).
- **Site**: Jekyll/Just the Docs; pages: index, clean, miss, hypoth, predict (base, fair).

If you want, the next step can be a **concrete PCA code block** (and optionally a minimal time series example) that you can paste into `template.ipynb` and then export to the website.
