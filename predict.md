---
title: Prediction Problem
layout: default
description: "Prediction Problem"
nav_order: 5
has_children: true
---

## Framing a Prediction Problem

**Prediction Problem:** Predict the match result for all the team from all professional League of Legends (LoL)

**Model Type:** It will be Classification, as the result will be eaither 1 for win, 0 for loss.

**Response variable:** The model will predict the `result`, as result is the most important element in the game as a streamer, so that we can understand what factors can contribute to higher win rate and improve ourselve in playing LOL. While similarly it is significant for the player to analyse team performance and strategy, which will lead to better decision and more successes.

**Evaluation Metric:** It will be evaluate on `Accuracy`, which is the proportion of correct prediction out of all prediction. As the number of win and lose are well balanced, and the distribution is not skewed, metrics such as the F1-score, Precision, or Recall will not be used and not be appropriate.

