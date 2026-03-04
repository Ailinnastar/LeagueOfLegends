---
title: Prediction Problem
layout: default
description: "Prediction Problem"
nav_order: 5
has_children: true
---

# Framing a Prediction Problem

**Prediction Problem:** Predict the match result for all the team from all professional League of Legends (LoL)

**Model Type:** It will be Classification, as the result will be **either** 1 for win, 0 for loss.

**Response variable:** The model will predict the `result`, as result is the most important element in the game as a streamer, so that we can understand what factors can contribute to higher win rate and improve **ourselves** in playing LOL. While similarly it is significant for the player to analyse team performance and strategy, which will lead to better decision and more successes.

**Evaluation Metric:** It will be **evaluated** on `Accuracy`, which is the proportion of correct prediction out of all prediction. As the number of win and lose are well balanced (50% each), a classifier that always predicts the same class would get **50% accuracy**; our models are compared against this baseline. Metrics such as F1-score, Precision, or Recall are also reported for the final model.
