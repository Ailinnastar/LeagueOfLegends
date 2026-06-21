---
title: Hypothesis Testing
layout: default
description: "Hypothesis testing"
nav_order: 4
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">
<script defer src="{{ '/assets/js/lol-charts.js' | relative_url }}"></script>

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Hypothesis test</p>
    <h1>Testing whether the most-banned pick is linked to wins</h1>
    <p class="lol-lede">
      The test compares win rate when the patch-specific most-banned champion is picked against win rate when it is not picked.
    </p>
  </section>

  <section class="lol-metrics" aria-label="Hypothesis testing summary">
    <article class="lol-metric">
      <span class="lol-metric-value">54.7%</span>
      <span class="lol-metric-label">win rate when MBC picked</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">49.6%</span>
      <span class="lol-metric-label">win rate without MBC pick</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">+5.1 pp</span>
      <span class="lol-metric-label">observed lift</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">&lt;0.001</span>
      <span class="lol-metric-label">permutation p-value</span>
    </article>
  </section>

  <section class="lol-grid lol-grid-two">
    <article class="lol-panel">
      <p class="lol-section-label">Test setup</p>
      <h2>Permutation test</h2>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong>Null hypothesis</strong>
          <span>Picking the most-banned champion has the same win rate as not picking it.</span>
        </div>
        <div class="lol-data-row">
          <strong>Alternative hypothesis</strong>
          <span>Teams that pick the most-banned champion have a higher win rate.</span>
        </div>
        <div class="lol-data-row">
          <strong>Test statistic</strong>
          <span>Difference in mean result between the two groups.</span>
        </div>
      </div>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Result</p>
      <h2>The observed lift is larger than expected by chance</h2>
      <p>
        The shuffled-label distribution is centered near 0 percentage points. The observed lift is 5.1 percentage points.
      </p>
      <div class="lol-callout">
        This is evidence of an association in the 2023 professional match data. It does not prove that the champion pick alone caused the win.
      </div>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Permutation distribution</p>
        <h2>Observed lift versus shuffled outcomes</h2>
      </div>
      <p>
        The gold line marks the observed difference in win rate.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="hypothesis"></div>
  </section>
</div>
