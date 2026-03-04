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
| False | 0.97|
| True | 0.96 |


<div style="text-align: center; margin: 1rem 0;">
<iframe src="diagram/diffference_acc.html" width=530 height=530 frameBorder=50></iframe> 
</div>


**Above** shows how well the model performed **for** MBC**-picked** side **vs** MBC**-not-picked** side; we can see there is a small difference in accuracy between the two groups. Therefore we use a **permutation test** to see if the difference in accuracy is significant.

**Null Hypothesis**: The classifier's accuracy is the same for both MBC picked side and MBC not picked, and any differences are due to chance.

**Alternative Hypothesis**: The classifier's accuracy is lower for MBC picked.

**Test statistic**: Difference in accuracy (MBC picked **minus** MBC not picked).

**Significance level**: 0.01.

**Observed difference**: -0.013223530127444705

P**-**value is 0.072

Therefore **accept** the null hypothesis: the classifier's accuracy is the same for both MBC picked side and MBC not picked, and any differences are due to chance. **This implies** there is not a statistically significant difference between the accuracy when MBC picked is `True` and when it is `False` for our model. So the model does not systematically perform worse for teams that picked the most-banned champion.
