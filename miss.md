---
title: Assessment of Missingness
layout: default
description: "Assessment of missingness"
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">
<script defer src="{{ '/assets/js/lol-charts.js' | relative_url }}"></script>

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Missingness</p>
    <h1>Which blanks matter for the analysis?</h1>
    <p class="lol-lede">
      Missing values appear in ban slots, 15-minute game-state columns, and elemental soul columns. The project handles each type according to how it arises in professional matches.
    </p>
  </section>

  <section class="lol-grid lol-grid-two">
    <article class="lol-panel">
      <p class="lol-section-label">Ban slots</p>
      <h2>Empty bans are part of draft behavior</h2>
      <p>
        Some professional teams do not use all five bans. These blank ban slots are not imputed because they can reflect strategy, confidence, tournament rules, or match context.
      </p>
      <div class="lol-callout">
        The ban-list feature uses the non-missing bans only, preserving empty bans as empty instead of inventing champion names.
      </div>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Dependency tests</p>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong>15-minute columns</strong>
          <span>Permutation test p-value: 0.518. Missingness was not treated as dependent on game length.</span>
        </div>
        <div class="lol-data-row">
          <strong>Soul columns</strong>
          <span>Permutation test p-value: 0.000. Missingness is structurally tied to patch availability.</span>
        </div>
      </div>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Missing values</p>
        <h2>Missingness by feature group</h2>
      </div>
      <p>
        Switch between the feature groups to see where missingness appears in the team-level dataset.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="missingness"></div>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Decision</p>
        <h2>How missing values are handled</h2>
      </div>
      <p>
        The model uses rows with the required prediction features available. Ban slots stay blank when teams did not use all bans.
      </p>
    </div>
    <ol class="lol-step-list">
      <li>Keep empty ban slots as missing and build ban lists from available values.</li>
      <li>Use patch-specific most-banned champions after resolving missing patch labels from match context.</li>
      <li>Drop rows without required 15-minute model features for the interactive prediction model.</li>
      <li>Treat soul-column missingness as structural because those columns depend on patch-era data availability.</li>
    </ol>
  </section>
</div>
