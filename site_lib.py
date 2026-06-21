"""Shared static-site rendering for local preview and GitHub Pages builds."""
from __future__ import annotations

import json
import re
import shutil
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BASE = "/LeagueOfLegends"
OUT_DIR = ROOT / "_site"

PAGES = {
    "": "index.md",
    "index.html": "index.md",
    "clean.html": "clean.md",
    "fair.html": "fair.md",
    "hypoth.html": "hypoth.md",
    "interactive.html": "interactive.md",
    "miss.html": "miss.md",
    "predict.html": "predict.md",
    "base.html": "base.md",
}

try:
    import markdown
except ImportError as exc:
    raise ImportError(
        "Missing dependency: markdown. Install with: pip install markdown"
    ) from exc

_md = markdown.Markdown(extensions=["tables", "fenced_code", "nl2br"])

ICON_BRAND = """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7l-8-4Z"/><path d="M9.5 12.2 11 14l3.5-4"/></svg>"""

NAV_ICONS = {
    "home": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"/></svg>""",
    "clean": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M8 11v7M12 11v7M16 11v7"/><path d="M7 18h10l1 3H6l1-3Z"/></svg>""",
    "hypoth": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 18V6l6-3 6 3v12"/><path d="M9 15h6M9 11h6M9 7h6"/></svg>""",
    "miss": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a3 3 0 0 1 5 2.2c0 2-2.5 2.3-2.5 4.3"/><circle cx="12" cy="17.2" r="0.7" fill="currentColor" stroke="none"/></svg>""",
    "predict": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 18V6l8-3 8 3v12"/><path d="M8 14l3 3 5-6"/></svg>""",
    "fair": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 5h10"/><path d="M12 5v14"/><path d="M7 19h10"/><path d="M5 9h4l-2 4 2 4H5"/><path d="M19 9h-4l2 4-2 4h4"/></svg>""",
    "interactive": """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 8h14M5 12h10M5 16h6"/><circle cx="17" cy="12" r="2.2"/><circle cx="13" cy="16" r="2.2"/></svg>""",
}

NAV_ITEMS = [
    ("", "Home", "home"),
    ("clean.html", "Data Cleaning", "clean"),
    ("hypoth.html", "Hypothesis", "hypoth"),
    ("miss.html", "Missingness", "miss"),
    ("predict.html", "Prediction", "predict"),
    ("fair.html", "Fairness", "fair"),
    ("interactive.html", "Interactive Model", "interactive"),
]

SEARCH_LABELS = {
    "": "Home",
    "index.html": "Home",
    "clean.html": "Data Cleaning",
    "hypoth.html": "Hypothesis",
    "miss.html": "Missingness",
    "predict.html": "Prediction",
    "fair.html": "Fairness",
    "interactive.html": "Interactive Model",
    "base.html": "Trial of Models",
}


def expand_relative_url(text: str, base: str = BASE) -> str:
    def replace(match: re.Match[str]) -> str:
        path = match.group(1)
        if path.startswith("/"):
            return f"{base}{path}"
        return f"{base}/{path}"

    return re.sub(r"\{\{\s*'([^']+)'\s*\|\s*relative_url\s*\}\}", replace, text)


def parse_front_matter(text: str) -> tuple[str, str]:
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            return text[end + 3 :].lstrip("\n"), text[3:end]
    return text, ""


def strip_html(text: str) -> str:
    plain = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", plain).strip()


def page_href(url_path: str, base: str = BASE) -> str:
    if url_path in ("", "index.html"):
        return f"{base}/"
    return f"{base}/{url_path}"


def render_page(md_path: Path, base: str = BASE) -> str:
    raw = md_path.read_text(encoding="utf-8")
    body, fm = parse_front_matter(raw)
    body = expand_relative_url(body, base)
    title_match = re.search(r"^title:\s*(.+)$", fm, re.M)
    title = title_match.group(1).strip() if title_match else md_path.stem
    _md.reset()
    content = _md.convert(body)

    nav_links = "".join(
        f'<a href="{page_href(href, base)}">{NAV_ICONS[icon_key]}<span>{label}</span></a>'
        for href, label, icon_key in NAV_ITEMS
    )
    nav = f"""
  <nav class="lol-local-nav" aria-label="Site navigation">
    <div class="lol-local-nav-brand">
      <div class="lol-local-nav-brand-icon">{ICON_BRAND}</div>
      <div>
        <strong>LoL Win Rate Analysis</strong>
        <span>2023 pro match data</span>
      </div>
    </div>
    <div class="lol-local-nav-links">{nav_links}</div>
  </nav>"""

    search = f"""
  <div class="lol-site-search" role="search">
    <label class="lol-site-search-label" for="lol-search-input">Search site</label>
    <div class="lol-site-search-field">
      <svg class="lol-site-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16.5 16.5 4 4"/></svg>
      <input id="lol-search-input" type="search" placeholder="Search pages..." autocomplete="off" spellcheck="false">
    </div>
    <div id="lol-search-results" class="lol-site-search-results" hidden></div>
  </div>"""

    css_link = f'<link rel="stylesheet" href="{base}/assets/css/lol-dashboard.css">'
    css_link += f'<link rel="stylesheet" href="{base}/assets/css/local-nav.css">'

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(title)}</title>
  {css_link}
</head>
<body class="has-local-nav" data-base="{base}">
  {nav}
  {search}
  <main>{content}</main>
  <script defer src="{base}/assets/js/site-search.js"></script>
</body>
</html>"""


def build_search_index(base: str = BASE) -> list[dict[str, str]]:
    entries: list[dict[str, str]] = []
    seen: set[str] = set()

    for url_path, md_name in PAGES.items():
        if url_path in seen:
            continue
        seen.add(url_path)
        md_path = ROOT / md_name
        if not md_path.exists():
            continue
        raw = md_path.read_text(encoding="utf-8")
        body, fm = parse_front_matter(raw)
        body = expand_relative_url(body, base)
        title_match = re.search(r"^title:\s*(.+)$", fm, re.M)
        title = title_match.group(1).strip() if title_match else SEARCH_LABELS.get(url_path, md_path.stem)
        _md.reset()
        html = _md.convert(body)
        text = strip_html(html)[:1200]
        entries.append(
            {
                "title": title,
                "url": page_href(url_path, base),
                "text": text,
            }
        )
    return entries


def build_site(out_dir: Path = OUT_DIR, base: str = BASE) -> None:
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    for folder in ("assets", "diagram"):
        src = ROOT / folder
        if src.exists():
            shutil.copytree(src, out_dir / folder)

    written: set[str] = set()
    for url_path, md_name in PAGES.items():
        out_name = "index.html" if url_path in ("", "index.html") else url_path
        if out_name in written:
            continue
        written.add(out_name)
        html = render_page(ROOT / md_name, base)
        (out_dir / out_name).write_text(html, encoding="utf-8")

    index = build_search_index(base)
    (out_dir / "search-index.json").write_text(json.dumps(index, ensure_ascii=False), encoding="utf-8")
    (out_dir / ".nojekyll").write_text("", encoding="utf-8")
