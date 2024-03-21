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
  
<iframe src="diagram/diffference_acc.html" width=630 height=430 frameBorder=50></iframe> 

P - value is 0.072

Therefore **accept** the null hypothesis, that is the classifier's accuracy is the same for Blue side and Red side, and any differences are due to chance. While impliying there is not a statistically significant difference between the accuracy of `Blue` and `Red` side from our model.

Below is the confusion matrix displaying how many True Positive, True Negative, False Positive, False Negative fro the prediction on unseen data.
<img width="545" alt="image" src="https://github.com/Ailinnastar/LeagueOfLegends/assets/156360722/0eb9cd01-8aed-4f30-a520-e9847b21f17c">

below is how well the model performed for that particular side (Red or Blue):

| Side | Accuracy |
|:-----------:|:-----------:|
| Blue | 0.98|
| Red | 0.99 |
