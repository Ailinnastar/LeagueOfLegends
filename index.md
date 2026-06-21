---
layout: home
title: League of Legends Analysis
nav_order: 1
description: "League of Legends champion ban and win-rate analysis"
permalink: /
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">

<div class="lol-dashboard">
  <section class="lol-hero">
    <p class="lol-kicker">2023 professional League of Legends data</p>
    <h1>If the most-banned champion is picked, does that team win more often?</h1>
    <p class="lol-lede">
      This project follows the champion ban meta across professional matches and tests whether picking the patch-specific most-banned champion is linked to winning.
    </p>
    <div class="lol-actions" aria-label="Primary analysis links">
      <a class="lol-button lol-button-primary" href="{{ '/clean.html' | relative_url }}">Explore the analysis</a>
      <a class="lol-button" href="{{ '/interactive.html' | relative_url }}">Try the model</a>
    </div>
  </section>

  <section class="lol-metrics" aria-label="Project summary">
    <article class="lol-metric">
      <span class="lol-metric-value">128,064</span>
      <span class="lol-metric-label">raw records</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">21,344</span>
      <span class="lol-metric-label">team rows</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">22</span>
      <span class="lol-metric-label">patches</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">+5.1 pp</span>
      <span class="lol-metric-label">MBC win-rate lift</span>
    </article>
  </section>

  <section class="lol-grid lol-grid-two">
    <article class="lol-panel">
      <p class="lol-section-label">Research question</p>
      <h2>We compare win rates when the patch-specific most-banned champion is picked versus when it is not.</h2>
      <p>
        The analysis defines the most-banned champion separately for each patch, then compares match outcomes when that champion is picked versus when it is not.
      </p>
      <div class="lol-callout">
        <strong>Key result:</strong>
        Teams that picked the patch-specific most-banned champion won 54.7% of those games, compared with 49.6% when they did not.
      </div>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Fast read</p>
      <ul class="lol-checklist">
        <li>Maokai was the most-banned champion overall in the 2023 dataset.</li>
        <li>The patch-specific most-banned champion changed throughout the season.</li>
        <li>Early objectives and 15-minute game state were the strongest result signals.</li>
        <li>The model performed similarly for teams with and without the most-banned champion picked.</li>
      </ul>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Project map</p>
        <h2>Follow the analysis path</h2>
      </div>
      <p>
        Move from raw data, to the draft-meta signal, to statistical testing, model interaction, and fairness checks.
      </p>
    </div>
    <div class="lol-next-steps">
      <a href="{{ '/clean.html' | relative_url }}">
        <span>Step 1</span>
        <strong>Build the team-level draft-meta dataset.</strong>
      </a>
      <a href="{{ '/hypoth.html' | relative_url }}">
        <span>Step 2</span>
        <strong>Test whether the most-banned pick is linked to wins.</strong>
      </a>
      <a href="{{ '/interactive.html' | relative_url }}">
        <span>Step 3</span>
        <strong>Try a 15-minute match state in the interactive model.</strong>
      </a>
      <a href="{{ '/fair.html' | relative_url }}">
        <span>Step 4</span>
        <strong>Check model performance across draft-pressure groups.</strong>
      </a>
    </div>
  </section>
</div>
