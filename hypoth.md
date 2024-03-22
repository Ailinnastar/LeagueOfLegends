---
title: Hypothesis Testing 
layout: default
description: "Hypothesis Testing"
nav_order: 4
---

# Hypothesis Testing

As we want to test whether the MBC picked will raise the win rate or not, we will perform Permutation test, shuffling `most_banned_champion_picked` and do Difference in Mean since it is comparing two groups.

**Null hypothesis**: If the highest band champion is picked the chances of win will still stays the same. 

**Alternative hypothesis**: If the highest band champion is picked the chances of win will increase.

**Test statistics**: Difference in Means for wins and losses given the most banded champion is picked.

**Method:**  **permutation** test with 10,000 simulations with significance level 0.05 (significance level commonly used).


<iframe src="diagram/hypothe-ditribution.html" width=630 height=430 frameBorder=50></iframe>
**Result**

**p-value**: 0.0

We **reject the null hypothesis** that the highest band champion is picked the chances of win will still stays the same.
Therefore, picking the highest banned champion does influence the win rate.





