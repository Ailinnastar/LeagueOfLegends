---
title: Interactive Model
layout: default
description: "Interactive win probability sandbox"
nav_order: 7
---

<link rel="stylesheet" href="{{ '/assets/css/lol-dashboard.css' | relative_url }}">
<script defer src="{{ '/assets/js/win-sandbox.js' | relative_url }}"></script>

<div class="lol-dashboard lol-page">
  <section class="lol-page-hero">
    <p class="lol-kicker">Interactive model</p>
    <h1>Build a 15-minute game state</h1>
    <p class="lol-lede">
      Choose early objectives, move the gold/XP/CS/kills sliders, and watch the estimated win chance update.
    </p>
  </section>

  <section class="lol-panel lol-sandbox" id="prediction-sandbox" aria-labelledby="sandbox-title">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Rift state</p>
        <h2 id="sandbox-title">Win probability sandbox</h2>
      </div>
      <p>
        The calculator uses a readable logistic model trained on complete team rows with 15-minute game-state features.
      </p>
    </div>

    <div class="lol-sandbox-layout lol-sandbox-feature">
      <div class="lol-controls" aria-label="Model inputs">
        <div class="lol-preset-row" aria-label="Scenario presets">
          <button type="button" class="lol-preset is-active" data-preset="even">No objectives</button>
          <button type="button" class="lol-preset" data-preset="objective">Objective lead</button>
          <button type="button" class="lol-preset" data-preset="gold">Gold lead</button>
        </div>

        <div class="lol-toggle-grid">
          <label class="lol-toggle"><input type="checkbox" id="firstblood"> First blood</label>
          <label class="lol-toggle"><input type="checkbox" id="firstdragon"> First dragon</label>
          <label class="lol-toggle"><input type="checkbox" id="firstherald"> First herald</label>
          <label class="lol-toggle"><input type="checkbox" id="firsttower"> First tower</label>
          <label class="lol-toggle lol-toggle-wide"><input type="checkbox" id="mbc-picked"> Picked most-banned champion</label>
        </div>

        <label class="lol-range" for="gold-diff">
          <span>Gold difference at 15</span>
          <output id="gold-diff-value">0</output>
          <input id="gold-diff" type="range" min="-7000" max="7000" step="250" value="0">
        </label>

        <label class="lol-range" for="xp-diff">
          <span>XP difference at 15</span>
          <output id="xp-diff-value">0</output>
          <input id="xp-diff" type="range" min="-5000" max="5000" step="250" value="0">
        </label>

        <label class="lol-range" for="cs-diff">
          <span>CS difference at 15</span>
          <output id="cs-diff-value">0</output>
          <input id="cs-diff" type="range" min="-120" max="120" step="5" value="0">
        </label>

        <label class="lol-range" for="kill-diff">
          <span>Kill difference at 15</span>
          <output id="kill-diff-value">0</output>
          <input id="kill-diff" type="range" min="-12" max="12" step="1" value="0">
        </label>
      </div>

      <div class="lol-result-card" aria-live="polite">
        <span class="lol-result-label">Estimated win chance</span>
        <output class="lol-probability" id="win-probability">36%</output>
        <div class="lol-probability-track" aria-hidden="true">
          <span id="win-probability-fill"></span>
        </div>
        <p id="win-probability-summary">Behind unless the team owns early objectives or a meaningful 15-minute lead.</p>
        <dl class="lol-model-stats">
          <div>
            <dt>Rows used</dt>
            <dd>18,012</dd>
          </div>
          <div>
            <dt>Held-out accuracy</dt>
            <dd>76.9%</dd>
          </div>
          <div>
            <dt>AUC</dt>
            <dd>0.851</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">Outcome guide</p>
        <h2>What the percentage means</h2>
      </div>
      <p>
        The number is the estimated chance that this team wins from the 15-minute state you entered.
      </p>
    </div>
    <div class="lol-outcome-grid" aria-label="Win chance guide">
      <article>
        <span>0-44%</span>
        <strong>Behind state</strong>
        <p>The team usually needs a major objective, fight, or economy swing.</p>
      </article>
      <article>
        <span>45-57%</span>
        <strong>Contested state</strong>
        <p>Small changes in gold, XP, CS, kills, or objectives can flip the read.</p>
      </article>
      <article>
        <span>58-71%</span>
        <strong>Favored state</strong>
        <p>The current lead is meaningful, but the game is still playable for both sides.</p>
      </article>
      <article>
        <span>72%+</span>
        <strong>Strong winning profile</strong>
        <p>The team has several early advantages working together.</p>
      </article>
    </div>
  </section>

  <section class="lol-panel">
    <div class="lol-section-heading">
      <div>
        <p class="lol-section-label">How to read it</p>
        <h2>Three-step workflow</h2>
      </div>
      <p>
        Start with a preset, tune the match state, then compare the changed estimate with the original no-objective state.
      </p>
    </div>
    <ol class="lol-step-list">
      <li>Pick a preset to load a quick game-state scenario.</li>
      <li>Toggle early objectives and adjust the 15-minute lead values.</li>
      <li>Use the estimate as an in-game state read, not as a pre-game prediction.</li>
    </ol>
  </section>
</div>
