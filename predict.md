---
title: Prediction Problem
layout: default
description: "Prediction problem"
nav_order: 6
has_children: true
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">
<script defer src="{{ '/assets/js/lol-charts.js' | relative_url }}"></script>

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Prediction problem</p>
    <h1>Estimating match result from draft and early-game state</h1>
    <p class="lol-lede">
      The response variable is <code>result</code>: 1 for a win and 0 for a loss. Accuracy is the headline metric, with precision, recall, and the confusion matrix used to explain model behavior.
    </p>
  </section>

  <section class="lol-grid lol-grid-two">
    <article class="lol-panel">
      <p class="lol-section-label">Framing</p>
      <h2>Classification task</h2>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong>Target</strong>
          <span><code>result</code>, where 1 is a team win and 0 is a team loss.</span>
        </div>
        <div class="lol-data-row">
          <strong>Baseline</strong>
          <span>A no-information classifier would be around 50% because the dataset is balanced.</span>
        </div>
        <div class="lol-data-row">
          <strong>Signal</strong>
          <span>Early objectives, 15-minute gold and XP state, combat pace, and whether the most-banned champion was picked.</span>
        </div>
      </div>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Model lens</p>
      <h2>Try the model separately</h2>
      <p>
        The interactive calculator has its own page so this section can focus on model framing and performance.
      </p>
      <a class="lol-button lol-button-primary" href="{{ '/interactive.html' | relative_url }}">Open Interactive Model</a>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Model overview</p>
        <h2>Baseline and final model scores</h2>
      </div>
      <p>
        The child page gives the full model details. This view keeps the comparison quick.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="model"></div>
  </section>

</div>
