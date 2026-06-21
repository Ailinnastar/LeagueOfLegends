---
layout: default
title: Fairness Analysis
parent: Prediction Problem
description: "Fairness analysis"
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">
<script defer src="{{ '/assets/js/lol-charts.js' | relative_url }}"></script>

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Fairness analysis</p>
    <h1>Checking performance across draft-pressure groups</h1>
    <p class="lol-lede">
      The fairness check compares model accuracy for teams that picked the patch-specific most-banned champion and teams that did not.
    </p>
  </section>

  <section class="lol-metrics" aria-label="Fairness summary">
    <article class="lol-metric">
      <span class="lol-metric-value">97.0%</span>
      <span class="lol-metric-label">accuracy without MBC pick</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">96.0%</span>
      <span class="lol-metric-label">accuracy with MBC pick</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">-1.32 pp</span>
      <span class="lol-metric-label">observed difference</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">0.072</span>
      <span class="lol-metric-label">permutation p-value</span>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Group comparison</p>
        <h2>Accuracy by MBC-pick group</h2>
      </div>
      <p>
        The observed accuracy difference is small, and the permutation test does not show a statistically significant drop for the MBC-picked group at the 0.01 level.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="fairness"></div>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Performance matrix</p>
        <h2>Correct and incorrect predictions</h2>
      </div>
      <p>
        This matrix shows how held-out predictions split across true losses, false wins, false losses, and true wins.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="matrix"></div>
  </section>

  <section class="lol-grid lol-grid-two">
    <article class="lol-panel">
      <p class="lol-section-label">Test setup</p>
      <h2>Permutation test on accuracy difference</h2>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong>Null hypothesis</strong>
          <span>Classifier accuracy is the same for both groups.</span>
        </div>
        <div class="lol-data-row">
          <strong>Alternative hypothesis</strong>
          <span>Classifier accuracy is lower when the most-banned champion was picked.</span>
        </div>
        <div class="lol-data-row">
          <strong>Test statistic</strong>
          <span>Accuracy for MBC-picked teams minus accuracy for non-MBC-picked teams.</span>
        </div>
      </div>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Conclusion</p>
      <h2>No statistically significant performance gap</h2>
      <p>
        With p-value 0.072, the final model does not show evidence that it systematically performs worse for teams that picked the most-banned champion.
      </p>
    </article>
  </section>
</div>
