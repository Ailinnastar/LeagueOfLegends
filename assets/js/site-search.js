(function () {
  const base = document.body.dataset.base || "";
  const input = document.getElementById("lol-search-input");
  const results = document.getElementById("lol-search-results");
  if (!input || !results) return;

  let index = [];

  fetch(`${base}/search-index.json`)
    .then((res) => res.json())
    .then((data) => {
      index = data;
    })
    .catch(() => {
      index = [];
    });

  function snippet(text, query) {
    const lower = text.toLowerCase();
    const pos = lower.indexOf(query);
    if (pos === -1) return text.slice(0, 110) + (text.length > 110 ? "…" : "");
    const start = Math.max(0, pos - 40);
    const end = Math.min(text.length, pos + query.length + 70);
    const chunk = text.slice(start, end).trim();
    return (start > 0 ? "…" : "") + chunk + (end < text.length ? "…" : "");
  }

  function render() {
    const query = input.value.trim().toLowerCase();
    results.innerHTML = "";

    if (!query) {
      results.hidden = true;
      return;
    }

    const hits = index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.text.toLowerCase().includes(query),
      )
      .slice(0, 8);

    if (!hits.length) {
      results.hidden = false;
      results.innerHTML = '<p class="lol-site-search-empty">No matching pages.</p>';
      return;
    }

    hits.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.innerHTML = `<strong>${item.title}</strong><span>${snippet(item.text, query)}</span>`;
      results.appendChild(link);
    });
    results.hidden = false;
  }

  input.addEventListener("input", render);
  input.addEventListener("focus", render);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".lol-site-search")) {
      results.hidden = true;
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      input.value = "";
      results.hidden = true;
      input.blur();
    }
  });
})();
