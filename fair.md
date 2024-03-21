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

Utilise **permutation test** to see if the difference in accuracy is significant.

- **Null Hypothesis**: The classifier's accuracy is the same for both Blue side and Red side, and any differences are due to chance.
- 
- **Alternative Hypothesis**: The classifier's accuracy is higher for Red side.
- 
- **Test statistic**: Difference in accuracy (Red side minus Blue side).
- 
- **Significance level**: 0.01.
  
<img width="529" alt="image" src="https://github.com/Ailinnastar/LeagueOfLegends/assets/156360722/37acf8ba-6e8c-489f-9335-a5b8e0b9b579">


P - value is 0.341

Therefore reject the accept hypothesis, that is the classifier's accuracy is the same for Blue side and Red side, and any differences are due to chance. While impliying there is not a statistically significant difference between the accuracy of `Blue` and `Red` side from our model.

<iframe src="diagram/diffference_acc.html" width=630 height=430 frameBorder=50></iframe> 
