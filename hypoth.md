---
title: Hypothesis Testing
layout: default
description: "Hypothesis Testing"
nav_order: 4
---

# Hypothesis Testing

As we want to test whether the MBC picked will raise the win rate or not, we will perform **a** permutation test, shuffling `most_banned_champion_picked` and **computing the** difference in mean**s** since it is comparing two groups.

**Null hypothesis**: If the **most banned** champion is picked the chances of win **will still stay** the same.

**Alternative hypothesis**: If the **most banned** champion is picked the chances of win will increase.

**Test statistics**: Difference in means for wins and losses given the **most banned** champion is picked.

**Method:** **Permutation** test with 10,000 simulations with significance level 0.05 (significance level commonly used).

<div style="text-align: center; margin: 1rem 0;">
<iframe src="diagram/hypothe-ditribution.html" width=630 height=400 frameBorder=50></iframe>
</div>



**Result**

**p-value**: 0.0

We **reject the null hypothesis** that **when** the most banned champion is picked the chances of win **will still stay** the same.
Therefore, picking the most banned champion does influence the win rate.

**Interpretation:** In our data, when the team picked the most banned champion, win rate was higher than when they did not; the observed difference in win rate between the two groups was statistically significant. This is an **association** in observational data, not proof of causation.
