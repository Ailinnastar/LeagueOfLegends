(function () {
  const DATA = {"topBans":[{"label":"Maokai","value":3871},{"label":"Vi","value":3027},{"label":"Sejuani","value":3009},{"label":"LeBlanc","value":2994},{"label":"Jayce","value":2741},{"label":"Ashe","value":2581},{"label":"Jax","value":2475},{"label":"Neeko","value":2368},{"label":"Tristana","value":2247},{"label":"Varus","value":2159},{"label":"Annie","value":2125},{"label":"Xayah","value":2092},{"label":"Renekton","value":1967},{"label":"Caitlyn","value":1958},{"label":"Elise","value":1935},{"label":"Rakan","value":1900}],"patchMeta":[{"patch":"13.01","mbc":"Maokai","games":1842,"pickRate":13.0,"winMbc":61.0,"winNoMbc":48.4,"lift":12.6},{"patch":"13.03","mbc":"Ashe","games":840,"pickRate":7.3,"winMbc":53.3,"winNoMbc":49.7,"lift":3.5},{"patch":"13.04","mbc":"Ashe","games":1010,"pickRate":3.7,"winMbc":55.4,"winNoMbc":49.8,"lift":5.6},{"patch":"13.05","mbc":"Annie","games":917,"pickRate":8.1,"winMbc":49.7,"winNoMbc":50.0,"lift":-0.4},{"patch":"13.06","mbc":"Vi","games":266,"pickRate":13.5,"winMbc":58.3,"winNoMbc":48.7,"lift":9.6},{"patch":"13.07","mbc":"Varus","games":161,"pickRate":2.8,"winMbc":44.4,"winNoMbc":50.2,"lift":-5.7},{"patch":"13.08","mbc":"Vi","games":244,"pickRate":3.7,"winMbc":55.6,"winNoMbc":49.8,"lift":5.8},{"patch":"13.09","mbc":"Xayah","games":78,"pickRate":0.0,"winMbc":null,"winNoMbc":50.0,"lift":null},{"patch":"13.10","mbc":"Milio","games":464,"pickRate":10.6,"winMbc":46.9,"winNoMbc":50.4,"lift":-3.4},{"patch":"13.11","mbc":"Neeko","games":999,"pickRate":6.0,"winMbc":46.2,"winNoMbc":50.2,"lift":-4.0},{"patch":"13.12","mbc":"Neeko","games":833,"pickRate":5.0,"winMbc":57.1,"winNoMbc":49.6,"lift":7.5},{"patch":"13.13","mbc":"LeBlanc","games":1086,"pickRate":7.6,"winMbc":51.8,"winNoMbc":49.9,"lift":2.0},{"patch":"13.14","mbc":"Tristana","games":772,"pickRate":14.2,"winMbc":49.5,"winNoMbc":50.0,"lift":-0.5},{"patch":"13.15","mbc":"Tristana","games":234,"pickRate":9.6,"winMbc":55.6,"winNoMbc":49.4,"lift":6.1},{"patch":"13.16","mbc":"Kindred","games":34,"pickRate":1.5,"winMbc":100.0,"winNoMbc":49.3,"lift":50.7},{"patch":"13.17","mbc":"Tristana","games":170,"pickRate":6.8,"winMbc":78.3,"winNoMbc":47.9,"lift":30.3},{"patch":"13.18","mbc":"LeBlanc","games":139,"pickRate":2.2,"winMbc":83.3,"winNoMbc":49.3,"lift":34.1},{"patch":"13.19","mbc":"Orianna","games":397,"pickRate":6.4,"winMbc":60.8,"winNoMbc":49.3,"lift":11.5},{"patch":"13.20","mbc":"Orianna","games":44,"pickRate":8.0,"winMbc":57.1,"winNoMbc":49.4,"lift":7.8},{"patch":"13.21","mbc":"Jarvan IV","games":86,"pickRate":5.2,"winMbc":22.2,"winNoMbc":51.5,"lift":-29.3},{"patch":"13.22","mbc":"K'Sante","games":5,"pickRate":0.0,"winMbc":null,"winNoMbc":50.0,"lift":null},{"patch":"13.24","mbc":"Ashe","games":41,"pickRate":4.9,"winMbc":50.0,"winNoMbc":50.0,"lift":0.0}],"missingness":{"ban":[{"label":"ban1","value":8.3},{"label":"ban2","value":8.2},{"label":"ban3","value":8.4},{"label":"ban4","value":8.3},{"label":"ban5","value":8.6}],"fifteen":[{"label":"goldat15","value":15.6},{"label":"xpat15","value":15.6},{"label":"csat15","value":15.6},{"label":"opp_goldat15","value":15.6},{"label":"opp_xpat15","value":15.6},{"label":"opp_csat15","value":15.6},{"label":"golddiffat15","value":15.6},{"label":"xpdiffat15","value":15.6},{"label":"csdiffat15","value":15.6},{"label":"killsat15","value":15.6},{"label":"deathsat15","value":15.6}],"soul":[{"label":"infernals","value":15.6},{"label":"mountains","value":15.6},{"label":"clouds","value":15.6},{"label":"oceans","value":15.6},{"label":"chemtechs","value":15.6},{"label":"hextechs","value":15.6}]},"hypothesis":{"observedLift":5.1,"pValue":"< 0.001","histogram":[{"x0":-4.41,"x1":-4.09,"count":1},{"x0":-4.09,"x1":-3.77,"count":4},{"x0":-3.77,"x1":-3.45,"count":9},{"x0":-3.45,"x1":-3.14,"count":7},{"x0":-3.14,"x1":-2.82,"count":16},{"x0":-2.82,"x1":-2.5,"count":34},{"x0":-2.5,"x1":-2.18,"count":56},{"x0":-2.18,"x1":-1.87,"count":72},{"x0":-1.87,"x1":-1.55,"count":121},{"x0":-1.55,"x1":-1.23,"count":196},{"x0":-1.23,"x1":-0.91,"count":200},{"x0":-0.91,"x1":-0.6,"count":261},{"x0":-0.6,"x1":-0.28,"count":287},{"x0":-0.28,"x1":0.04,"count":296},{"x0":0.04,"x1":0.36,"count":275},{"x0":0.36,"x1":0.67,"count":263},{"x0":0.67,"x1":0.99,"count":251},{"x0":0.99,"x1":1.31,"count":216},{"x0":1.31,"x1":1.63,"count":167},{"x0":1.63,"x1":1.94,"count":106},{"x0":1.94,"x1":2.26,"count":66},{"x0":2.26,"x1":2.58,"count":44},{"x0":2.58,"x1":2.9,"count":24},{"x0":2.9,"x1":3.21,"count":16},{"x0":3.21,"x1":3.53,"count":3},{"x0":3.53,"x1":3.85,"count":8},{"x0":3.85,"x1":4.17,"count":1}]},"leagues":[{"label":"WLDs","value":16.8,"games":137},{"label":"LMF","value":15.7,"games":86},{"label":"GLL","value":14.3,"games":164},{"label":"AL","value":13.3,"games":173},{"label":"EM","value":13.3,"games":271},{"label":"UL","value":13.3,"games":245},{"label":"LEC","value":12.7,"games":287},{"label":"LPL","value":12.7,"games":755},{"label":"LRS","value":12.2,"games":119},{"label":"MSI","value":11.8,"games":76}],"model":{"accuracy":[{"label":"Baseline train","value":73.6},{"label":"Baseline test","value":73.6},{"label":"Final train","value":98.7},{"label":"Final test","value":98.6}],"drivers":[{"label":"Early objectives","value":99.8},{"label":"MBC picked","value":0.2},{"label":"15-min economy","value":78.0},{"label":"Combat pace","value":62.0},{"label":"Vision and CS","value":45.0}],"matrix":{"tn":1966,"fp":84,"fn":35,"tp":2036}},"fairness":{"accuracy":[{"label":"MBC not picked","value":97.0},{"label":"MBC picked","value":96.0}],"observedDiff":-1.32,"pValue":0.072},"stats":{"rawRows":128064,"teamRows":21344,"completeRows":18014,"patches":22,"mbcPickRate":8.2,"winMbc":54.7,"winNoMbc":49.6}};

  function make(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function pct(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "n/a";
    return `${Number(value).toFixed(1)}%`;
  }

  function number(value) {
    return Number(value).toLocaleString();
  }

  function signedPct(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "n/a";
    const v = Number(value);
    return `${v > 0 ? "+" : ""}${v.toFixed(1)} pp`;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function renderBars(target, rows, options) {
    clear(target);
    const opts = Object.assign({ max: null, valueType: "count", signed: false, meta: null }, options || {});
    const values = rows.map((row) => Math.abs(Number(row.value || 0)));
    const max = opts.max || Math.max(...values, 1);
    const wrap = make("div", "lol-chart-bars");

    rows.forEach((row) => {
      const value = Number(row.value || 0);
      const item = make("div", `lol-chart-bar${value < 0 ? " is-negative" : ""}`);
      const label = make("div", "lol-chart-bar-label");
      label.innerHTML = `<strong>${row.label}</strong>${row.meta ? `<span>${row.meta}</span>` : ""}`;
      const track = make("div", "lol-chart-bar-track");
      const fill = make("span", "");
      fill.style.width = `${Math.max(2, Math.min(100, Math.abs(value) / max * 100))}%`;
      track.appendChild(fill);
      const valueNode = make("div", "lol-chart-bar-value");
      if (opts.valueType === "percent") valueNode.textContent = pct(value);
      else if (opts.valueType === "signed") valueNode.textContent = signedPct(value);
      else valueNode.textContent = number(value);
      item.append(label, track, valueNode);
      wrap.appendChild(item);
    });

    target.appendChild(wrap);
  }

  function tabs(target, config) {
    target.classList.add("has-tabs");
    const tabWrap = make("div", "lol-chart-tabs");
    const body = make("div", "lol-chart-body");
    target.append(tabWrap, body);

    config.forEach((tab, index) => {
      const button = make("button", `lol-chart-tab${index === 0 ? " is-active" : ""}`, tab.label);
      button.type = "button";
      button.setAttribute("aria-selected", index === 0 ? "true" : "false");
      button.addEventListener("click", () => {
        tabWrap.querySelectorAll("button").forEach((node) => node.classList.remove("is-active"));
        tabWrap.querySelectorAll("button").forEach((node) => node.setAttribute("aria-selected", "false"));
        button.classList.add("is-active");
        button.setAttribute("aria-selected", "true");
        tab.render(body);
      });
      tabWrap.appendChild(button);
      if (index === 0) tab.render(body);
    });
  }

  function renderBanChart(target) {
    tabs(target, [8, 12, 16].map((count) => ({
      label: `Top ${count}`,
      render(body) {
        const rows = DATA.topBans.slice(0, count);
        renderBars(body, rows, { valueType: "count", max: DATA.topBans[0].value });
      },
    })));
  }

  function renderPatchChart(target) {
    tabs(target, [
      {
        label: "Pick rate",
        render(body) {
          const rows = DATA.patchMeta.map((row) => ({ label: row.patch, value: row.pickRate, meta: `${row.mbc}, ${row.games} games` }));
          renderBars(body, rows, { valueType: "percent", max: 16 });
        },
      },
      {
        label: "Win-rate lift",
        render(body) {
          const rows = DATA.patchMeta.filter((row) => row.lift !== null).map((row) => ({ label: row.patch, value: row.lift, meta: row.mbc }));
          renderBars(body, rows, { valueType: "signed", max: 35 });
        },
      },
    ]);
  }

  function renderMissingness(target) {
    tabs(target, [
      {
        label: "Ban columns",
        render(body) {
          renderBars(body, DATA.missingness.ban, { valueType: "percent", max: 100 });
        },
      },
      {
        label: "15-min columns",
        render(body) {
          renderBars(body, DATA.missingness.fifteen, { valueType: "percent", max: 100 });
        },
      },
      {
        label: "Soul columns",
        render(body) {
          renderBars(body, DATA.missingness.soul, { valueType: "percent", max: 100 });
        },
      },
    ]);
  }

  function renderLeagueChart(target) {
    const rows = DATA.leagues.map((row) => ({ label: row.label, value: row.value, meta: `${row.games} games` }));
    renderBars(target, rows, { valueType: "percent", max: Math.max(...rows.map((row) => row.value), 1) });
  }

  function renderHypothesis(target) {
    clear(target);
    const hist = DATA.hypothesis.histogram;
    const width = 720;
    const height = 300;
    const pad = { left: 48, right: 24, top: 28, bottom: 46 };
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;
    const minX = Math.min(...hist.map((d) => d.x0));
    const maxX = Math.max(...hist.map((d) => d.x1), DATA.hypothesis.observedLift);
    const maxY = Math.max(...hist.map((d) => d.count), 1);
    const x = (value) => pad.left + ((value - minX) / (maxX - minX || 1)) * plotW;
    const y = (value) => pad.top + plotH - (value / maxY) * plotH;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Permutation null distribution and observed win-rate lift");
    svg.classList.add("lol-histogram");

    hist.forEach((d) => {
      const rect = document.createElementNS(svg.namespaceURI, "rect");
      rect.setAttribute("x", x(d.x0));
      rect.setAttribute("y", y(d.count));
      rect.setAttribute("width", Math.max(1, x(d.x1) - x(d.x0) - 2));
      rect.setAttribute("height", pad.top + plotH - y(d.count));
      rect.setAttribute("rx", "3");
      rect.setAttribute("data-label", `${d.x0} to ${d.x1} pp: ${d.count}`);
      svg.appendChild(rect);
    });

    const observedX = x(DATA.hypothesis.observedLift);
    const line = document.createElementNS(svg.namespaceURI, "line");
    line.setAttribute("x1", observedX);
    line.setAttribute("x2", observedX);
    line.setAttribute("y1", pad.top - 6);
    line.setAttribute("y2", pad.top + plotH);
    line.classList.add("lol-observed-line");
    svg.appendChild(line);

    const label = document.createElementNS(svg.namespaceURI, "text");
    label.setAttribute("x", Math.min(observedX - 6, width - 210));
    label.setAttribute("y", pad.top + 14);
    label.classList.add("lol-svg-label");
    label.textContent = `Observed ${DATA.hypothesis.observedLift.toFixed(2)} pp`;
    svg.appendChild(label);

    const axis = document.createElementNS(svg.namespaceURI, "line");
    axis.setAttribute("x1", pad.left);
    axis.setAttribute("x2", width - pad.right);
    axis.setAttribute("y1", pad.top + plotH);
    axis.setAttribute("y2", pad.top + plotH);
    axis.classList.add("lol-axis-line");
    svg.appendChild(axis);

    const caption = make("div", "lol-chart-caption", `Permutation p-value: ${DATA.hypothesis.pValue}`);
    target.append(svg, caption);
  }

  function renderModel(target) {
    tabs(target, [
      {
        label: "Accuracy",
        render(body) {
          renderBars(body, DATA.model.accuracy, { valueType: "percent", max: 100 });
        },
      },
      {
        label: "Drivers",
        render(body) {
          renderBars(body, DATA.model.drivers, { valueType: "percent", max: 100 });
        },
      },
    ]);
  }

  function renderMatrix(target) {
    clear(target);
    const m = DATA.model.matrix;
    const total = m.tn + m.fp + m.fn + m.tp;
    const cells = [
      { label: "True loss", detail: "Actual loss, predicted loss", value: m.tn, tone: "good" },
      { label: "False win", detail: "Actual loss, predicted win", value: m.fp, tone: "bad" },
      { label: "False loss", detail: "Actual win, predicted loss", value: m.fn, tone: "bad" },
      { label: "True win", detail: "Actual win, predicted win", value: m.tp, tone: "good" },
    ];
    const matrix = make("div", "lol-matrix");
    cells.forEach((cell) => {
      const item = make("div", `lol-matrix-cell is-${cell.tone}`);
      item.append(
        make("span", "lol-matrix-label", cell.label),
        make("strong", "lol-matrix-value", number(cell.value)),
        make("span", "lol-matrix-detail", cell.detail),
        make("span", "lol-matrix-share", `${(cell.value / total * 100).toFixed(1)}% of held-out predictions`),
      );
      matrix.appendChild(item);
    });
    target.appendChild(matrix);
  }

  function renderFairness(target) {
    target.classList.add("is-compact");
    clear(target);
    renderBars(target, DATA.fairness.accuracy, { valueType: "percent", max: 100 });
    const caption = make(
      "div",
      "lol-chart-caption",
      `Observed difference: ${DATA.fairness.observedDiff} pp. Permutation p-value: ${DATA.fairness.pValue}.`,
    );
    const notes = make("div", "lol-fairness-notes");
    [
      ["Test statistic", "Accuracy when MBC picked minus accuracy when MBC not picked."],
      ["Significance level", "Two-sided permutation test at α = 0.01."],
      ["Takeaway", "Both groups stay above 96% accuracy; the gap is not statistically significant."],
    ].forEach(([label, text]) => {
      const item = make("div", "");
      item.append(make("strong", "", label), make("span", "", text));
      notes.appendChild(item);
    });
    target.append(caption, notes);
  }

  const renderers = {
    ban: renderBanChart,
    patch: renderPatchChart,
    missingness: renderMissingness,
    hypothesis: renderHypothesis,
    model: renderModel,
    matrix: renderMatrix,
    fairness: renderFairness,
    leagues: renderLeagueChart,
  };

  document.querySelectorAll("[data-lol-chart]").forEach((target) => {
    const type = target.getAttribute("data-lol-chart");
    const renderer = renderers[type];
    if (renderer) renderer(target);
  });
})();
