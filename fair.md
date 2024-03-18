---
layout: default
title: Fairness Analysis
parent: Prediction Problem
description: "Fairness Analysis"
nav_order: 5
---

## Fairness Analysis

Utilise **permutation test** to see if the difference in accuracy is significant.

**Null Hypothesis**: The classifier's accuracy is the same for both Blue side and Red side, and any differences are due to chance.

**Alternative Hypothesis**: The classifier's accuracy is higher for Red side.

Test statistic: Difference in accuracy (Blue side minus Red side).

Significance level: 0.01.
  
<img width="548" alt="image" src="https://github.com/Ailinnastar/LeagueOfLegends/assets/156360722/9830697f-806b-4d17-8003-3fa39a240762">


<iframe src="diagram/fairdiff.html" width=630 height=430 frameBorder=50></iframe> 
