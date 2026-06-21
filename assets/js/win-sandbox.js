(function () {
  const root = document.getElementById("prediction-sandbox");
  if (!root) return;

  const model = {
    intercept: 0.004066665275014512,
    features: [
      "firstblood",
      "firstdragon",
      "firstherald",
      "firsttower",
      "golddiffat15",
      "xpdiffat15",
      "csdiffat15",
      "killdiffat15",
      "most_banned_champion_picked",
    ],
    means: {
      firstblood: 0.5055888666814716,
      firstdragon: 0.5019616551928344,
      firstherald: 0.4990746909467762,
      firsttower: 0.500777259604708,
      golddiffat15: 4.342438374417055,
      xpdiffat15: -0.24428159005107705,
      csdiffat15: 0.09401139980753571,
      killdiffat15: -0.01902435413428085,
      most_banned_champion_picked: 0.08734917462432452,
    },
    scales: {
      firstblood: 0.49996876359350373,
      firstdragon: 0.49999615189409646,
      firstherald: 0.4999991438024229,
      firsttower: 0.4999993958671419,
      golddiffat15: 3063.7717057187465,
      xpdiffat15: 1896.422076899061,
      csdiffat15: 39.72738603766813,
      killdiffat15: 3.5868723594578844,
      most_banned_champion_picked: 0.2823460577319502,
    },
    coefficients: {
      firstblood: 0.027885868732181476,
      firstdragon: 0.3253513130731905,
      firstherald: 0.03265375413879942,
      firsttower: 0.1666265010480253,
      golddiffat15: 0.9395849329869094,
      xpdiffat15: 0.2143813035312811,
      csdiffat15: 0.37126634611564313,
      killdiffat15: 0.27683328613109076,
      most_banned_champion_picked: 0.04398923979759402,
    },
  };

  const fields = {
    firstblood: document.getElementById("firstblood"),
    firstdragon: document.getElementById("firstdragon"),
    firstherald: document.getElementById("firstherald"),
    firsttower: document.getElementById("firsttower"),
    most_banned_champion_picked: document.getElementById("mbc-picked"),
    golddiffat15: document.getElementById("gold-diff"),
    xpdiffat15: document.getElementById("xp-diff"),
    csdiffat15: document.getElementById("cs-diff"),
    killdiffat15: document.getElementById("kill-diff"),
  };

  const valueLabels = {
    golddiffat15: document.getElementById("gold-diff-value"),
    xpdiffat15: document.getElementById("xp-diff-value"),
    csdiffat15: document.getElementById("cs-diff-value"),
    killdiffat15: document.getElementById("kill-diff-value"),
  };

  const probabilityOutput = document.getElementById("win-probability");
  const probabilityFill = document.getElementById("win-probability-fill");
  const probabilitySummary = document.getElementById("win-probability-summary");
  const presetButtons = Array.from(root.querySelectorAll("[data-preset]"));

  const presets = {
    even: {
      firstblood: 0,
      firstdragon: 0,
      firstherald: 0,
      firsttower: 0,
      most_banned_champion_picked: 0,
      golddiffat15: 0,
      xpdiffat15: 0,
      csdiffat15: 0,
      killdiffat15: 0,
    },
    objective: {
      firstblood: 1,
      firstdragon: 1,
      firstherald: 1,
      firsttower: 1,
      most_banned_champion_picked: 1,
      golddiffat15: 1200,
      xpdiffat15: 800,
      csdiffat15: 15,
      killdiffat15: 3,
    },
    gold: {
      firstblood: 0,
      firstdragon: 1,
      firstherald: 0,
      firsttower: 1,
      most_banned_champion_picked: 0,
      golddiffat15: 3000,
      xpdiffat15: 1200,
      csdiffat15: 35,
      killdiffat15: 2,
    },
  };

  function formatSigned(value) {
    const numeric = Number(value);
    if (numeric === 0) return "0";
    return numeric > 0 ? `+${numeric.toLocaleString()}` : numeric.toLocaleString();
  }

  function readFeature(feature) {
    const field = fields[feature];
    if (!field) return 0;
    if (field.type === "checkbox") return field.checked ? 1 : 0;
    return Number(field.value);
  }

  function writeFeature(feature, value) {
    const field = fields[feature];
    if (!field) return;
    if (field.type === "checkbox") {
      field.checked = Boolean(value);
    } else {
      field.value = value;
    }
  }

  function calculateProbability() {
    const logit = model.features.reduce((score, feature) => {
      const centered = (readFeature(feature) - model.means[feature]) / model.scales[feature];
      return score + model.coefficients[feature] * centered;
    }, model.intercept);

    return 1 / (1 + Math.exp(-logit));
  }

  function summaryFor(probability) {
    if (probability >= 0.72) return "Strong winning profile: the team has both early control and a large 15-minute lead.";
    if (probability >= 0.58) return "Favored position: the model sees enough early advantages to expect a win more often than a loss.";
    if (probability >= 0.45) return "Close game profile: small changes in gold, objectives, or kills can swing the estimate.";
    return "Behind unless the team owns early objectives or a meaningful 15-minute lead.";
  }

  function fillColor(probability) {
    if (probability >= 0.58) return "#46d39b";
    if (probability >= 0.45) return "#e6b34f";
    return "#ff6f61";
  }

  function updateLabels() {
    Object.entries(valueLabels).forEach(([feature, label]) => {
      label.value = formatSigned(fields[feature].value);
    });
  }

  function updateResult() {
    updateLabels();
    const probability = calculateProbability();
    const rounded = Math.round(probability * 100);
    probabilityOutput.value = `${rounded}%`;
    probabilityFill.style.width = `${Math.max(3, Math.min(100, rounded))}%`;
    probabilityFill.style.background = fillColor(probability);
    probabilitySummary.textContent = summaryFor(probability);
  }

  function setPreset(name) {
    const preset = presets[name];
    if (!preset) return;
    Object.entries(preset).forEach(([feature, value]) => writeFeature(feature, value));
    presetButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.preset === name));
    updateResult();
  }

  Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => {
      presetButtons.forEach((button) => button.classList.remove("is-active"));
      updateResult();
    });
    field.addEventListener("change", () => {
      presetButtons.forEach((button) => button.classList.remove("is-active"));
      updateResult();
    });
  });

  presetButtons.forEach((button) => {
    button.addEventListener("click", () => setPreset(button.dataset.preset));
  });

  setPreset("even");
})();
