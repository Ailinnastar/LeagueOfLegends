# Historical analysis source

`archive/original_analysis.ipynb` was recovered from the local League of Legends project directory. Code and narrative are retained as historical project evidence; saved outputs, execution counts, and notebook metadata were removed, and old absolute export paths were changed to `graph/`.

This notebook predates the current static website and interactive model. It is not presented as a verified end-to-end reproduction. It references a course utility module (`dsc80_utils`) which is not redistributed here, an external Oracle's Elixir CSV, and older pandas/scikit-learn APIs. It includes expensive grid-search and permutation-test experiments.

Known review points include random team-row splitting rather than match-level splitting, post-game predictors in some experiments, cohort-wide preprocessing, reversed precision/recall arguments, legacy plotting calls, and a `result`/`results` variable typo in the fairness section. Historical metrics must be read in this context. A future reproduction should fix and rerun these issues with match-grouped or chronological validation before publishing new performance claims.

For the current public presentation, use the website linked from the repository README. Source availability and website build checks do not establish scientific validity of every archived experiment.
