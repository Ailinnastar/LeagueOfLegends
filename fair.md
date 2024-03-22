---
layout: default
title: Fairness Analysis
parent: Prediction Problem
description: "Fairness Analysis"
nav_order: 5
---

# Fairness Analysis

| most_banned_champion_picked | Accuracy |
|:-----------:|:-----------:|
| False |  0.97|
| True |  0.96 |


Above shows how well the model performed for whether both MBC picked side and MBC not picked, we can see there is a little difference in accuracy between picks. Thefore we utilise **permutation test** to see if the difference in accuracy is significant.

 **Null Hypothesis**: The classifier's accuracy is the same for both MBC picked side and MBC not picked, and any differences are due to chance.
  
 **Alternative Hypothesis**: The classifier's accuracy is lower for MBC picked.
  
  **Test statistic**: Difference in accuracy (MBC picked side and MBC not picked).
  
 **Significance level**: 0.01.

**Obeserve difference**:  -0.013223530127444705


<iframe src="diagram/diffference_acc.html" width=630 height=430 frameBorder=50></iframe> 

P - value is 0.072

Therefore  **accept** the null hypothesis, that is The classifier's accuracy is the same for both MBC picked side and MBC not picked, and any differences are due to chance.Impliying there is not a statistically significant difference between the accuracy of MBC picked is  `True` and `False` from our model.
