# League of Legends Match Analysis

A data science project exploring professional League of Legends matches: data cleaning, missingness, champion-ban patterns, hypothesis testing, outcome prediction, and performance comparisons between draft groups.

**[Explore the analysis website](https://ailinnastar.github.io/LeagueOfLegends/)** | **[Try the interactive model](https://ailinnastar.github.io/LeagueOfLegends/interactive.html)** | **[Historical analysis notebook](analysis/archive/original_analysis.ipynb)**

## Research question

When the patch-specific most-banned champion is picked, is that team more likely to win? The analysis examines association rather than claiming a champion pick causes a win.

The site presents a 2023 match-data study. Its 15-minute interactive model uses early objectives and gold, experience, CS, and kill differences. That model is distinct from the historical notebook's broader random-forest experiments.

## Explore the repository

| Files | Purpose |
| --- | --- |
| `clean.md`, `miss.md` | Cleaning and missingness analysis |
| `hypoth.md` | Champion-selection hypothesis test |
| `predict.md`, `base.md`, `fair.md` | Model evaluation and group comparisons |
| `assets/js/win-sandbox.js` | Browser inference for the interactive model |
| `analysis/archive/original_analysis.ipynb` | Original local notebook, with outputs and machine-specific metadata removed |
| `site_lib.py`, `build_site.py`, `serve_local.py` | Static site build and local preview |

## Build and preview

Python 3.10+ is recommended. These commands build the presentation website, not a new model:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python build_site.py
python serve_local.py
```

Open the URL printed by the preview server. Generated files are written to `_site/`; GitHub Actions deploys them to Pages.

## Data and interpretation

The local analysis references `2023_LoL_esports_match_data_from_OraclesElixir.csv`, an Oracle's Elixir esports dataset. It should not be described as data supplied directly by Riot Games. The raw CSV is not redistributed here. Obtain an appropriate copy from the source and review its terms before reproducing the analysis.

The historical notebook is an archive, not a turnkey training pipeline. It relies on older course utilities and APIs and contains experiments with post-game features. Its random team-row split can place opposing teams from the same match across train/test sets; champion popularity computed across a whole patch also requires care in a prospective evaluation. The historical accuracy in the CV should not be interpreted as a verified pre-match forecasting result.

The website's interactive coefficients are already exported. Rebuilding the site does not retrain or independently validate them. Group-performance comparisons here are limited to the selected groups and metric, not a general guarantee of fairness.
