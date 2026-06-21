---
title: Data Cleaning and EDA
layout: default
description: "Data cleaning and exploratory analysis"
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">
<script defer src="{{ '/assets/js/lol-charts.js' | relative_url }}"></script>

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Data cleaning and exploration</p>
    <h1>Turning raw match logs into a draft-meta dataset</h1>
    <p class="lol-lede">
      The original file has one row for every player and one row for each team. This analysis uses the team rows because bans, picks, objectives, and match results live at the team level.
    </p>
  </section>

  <section class="lol-metrics" aria-label="Cleaning summary">
    <article class="lol-metric">
      <span class="lol-metric-value">128,064</span>
      <span class="lol-metric-label">raw rows</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">21,344</span>
      <span class="lol-metric-label">team rows</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">18,014</span>
      <span class="lol-metric-label">complete team rows</span>
    </article>
    <article class="lol-metric">
      <span class="lol-metric-value">8.2%</span>
      <span class="lol-metric-label">MBC pick rate</span>
    </article>
  </section>

  <section class="lol-story-grid">
    <article class="lol-panel">
      <p class="lol-section-label">Pipeline</p>
      <h2>How the analysis dataset is built</h2>
      <ol class="lol-step-list">
        <li>Filter the raw data to rows where <code>position == team</code>.</li>
        <li>Combine <code>ban1</code> through <code>ban5</code> into a ban list for each team.</li>
        <li>Find the most-banned champion separately for every patch.</li>
        <li>Check whether that patch-specific champion appears in <code>pick1</code> through <code>pick5</code>.</li>
        <li>Use the new <code>most_banned_champion_picked</code> flag for exploration, testing, modeling, and fairness analysis.</li>
      </ol>
    </article>

    <article class="lol-panel lol-panel-tight">
      <p class="lol-section-label">Key columns</p>
      <div class="lol-data-table">
        <div class="lol-data-row">
          <strong><code>result</code></strong>
          <span>Match outcome, where 1 is a win and 0 is a loss.</span>
        </div>
        <div class="lol-data-row">
          <strong><code>patch</code></strong>
          <span>Game version used for the match.</span>
        </div>
        <div class="lol-data-row">
          <strong><code>ban1</code>-<code>ban5</code></strong>
          <span>Champions banned by the team.</span>
        </div>
        <div class="lol-data-row">
          <strong><code>pick1</code>-<code>pick5</code></strong>
          <span>Champions selected by the team.</span>
        </div>
        <div class="lol-data-row">
          <strong><code>most_banned_champion_picked</code></strong>
          <span>Whether the team picked the most-banned champion for that patch.</span>
        </div>
      </div>
    </article>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Ban meta</p>
        <h2>Most-banned champions across 2023</h2>
      </div>
      <p>
        Maokai leads the overall ban count, followed closely by Vi, Sejuani, and LeBlanc.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="ban"></div>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Patch context</p>
        <h2>The most-banned champion changes over the season</h2>
      </div>
      <p>
        Balance patches shift champion priority, so the project compares teams against the most-banned champion within the same patch.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="patch"></div>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">League view</p>
        <h2>Where the most-banned champion was picked most often</h2>
      </div>
      <p>
        The chart includes leagues with at least 100 team rows, so tiny samples do not dominate the ranking.
      </p>
    </div>
    <div class="lol-chart-card" data-lol-chart="leagues"></div>
  </section>
</div>
