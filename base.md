---
layout: default
title: Trial of Models
parent: Prediction Problem
description: "Trial of models"
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Model trials</p>
    <h1>From early-objective baseline to final match-result model</h1>
    <p class="lol-lede">
      The baseline model starts with a small set of early objective features. The final model adds 15-minute economy, combat, vision, CS, and objective-control features.
    </p>
  </section>

  <section class="lol-metrics" aria-label="Model trial summary">
    <article class="lol-metric">
      <span class="lol-metric-value">73.6%</span>
      <span class="lol-metric-label">baseline test accuracy</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">98.6%</span>
      <span class="lol-metric-label">final test accuracy</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">98.3%</span>
      <span class="lol-metric-label">final precision</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">96.0%</span>
      <span class="lol-metric-label">final recall</span>
    </article>
  </section>

  <section class="lol-story-grid">
    <article class="lol-panel">
      <p class="lol-section-label">Baseline model</p>
      <h2>Early objective signal</h2>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong>Features</strong>
          <span><code>firstblood</code>, <code>firstbaron</code>, <code>firstdragon</code>, <code>firsttower</code>, and <code>most_banned_champion_picked</code>.</span>
        </div>
        <div class="lol-data-row">
          <strong>Test accuracy</strong>
          <span>73.6%, which is above the 50% balanced-class baseline.</span>
        </div>
        <div class="lol-data-row">
          <strong>Main driver</strong>
          <span>The combined early-objective feature dominates the baseline feature importance.</span>
        </div>
      </div>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Final model</p>
      <h2>Wider match-state signal</h2>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong>Features</strong>
          <span>Early objectives, 15-minute gold and XP, team KPM, earned GPM, DPM, vision, CS, dragons, barons, and towers.</span>
        </div>
        <div class="lol-data-row">
          <strong>Test accuracy</strong>
          <span>98.6% with precision 98.3% and recall 96.0%.</span>
        </div>
        <div class="lol-data-row">
          <strong>Best use</strong>
          <span>Understanding which match-state signals are most connected with a final win or loss.</span>
        </div>
      </div>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Feature families</p>
        <h2>What the final model adds</h2>
      </div>
      <p>
        The final feature set expands beyond draft to include how the team is performing inside the match.
      </p>
    </div>
    <ol class="lol-step-list">
      <li>Early objectives: first blood, first dragon, first herald, first baron, and first tower.</li>
      <li>Economy: gold at 15, XP at 15, earned gold per minute, and gold differences.</li>
      <li>Combat: kills, deaths, team kills per minute, and damage per minute.</li>
      <li>Control: dragons, barons, towers, vision score, wards, and CS per minute.</li>
      <li>Draft pressure: whether the team picked the patch-specific most-banned champion.</li>
    </ol>
  </section>
</div>
