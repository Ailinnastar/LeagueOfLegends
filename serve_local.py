#!/usr/bin/env python3
"""Simple local preview for LeagueOfLegends site (no Jekyll required)."""
import http.server
import os
import re
import socketserver
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8765"))
BASE = "/LeagueOfLegends"

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
except ImportError:
    import sys

    print(
        "Missing dependency: markdown\n\n"
        "Homebrew Python cannot auto-install packages. Use one of:\n"
        "  python3 -m venv .venv && .venv/bin/pip install markdown && .venv/bin/python serve_local.py\n"
        "  /Users/ailinna/Downloads/Download/envs/dsc80/bin/python serve_local.py\n",
        file=sys.stderr,
    )
    raise SystemExit(1) from None

md = markdown.Markdown(extensions=["tables", "fenced_code", "nl2br"])

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


def expand_relative_url(text):
    def replace(match):
        path = match.group(1)
        if path.startswith("/"):
            return f"{BASE}{path}"
        return f"{BASE}/{path}"

    return re.sub(r"\{\{\s*'([^']+)'\s*\|\s*relative_url\s*\}\}", replace, text)


def parse_front_matter(text):
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            return text[end + 3 :].lstrip("\n"), text[3:end]
    return text, ""


def render_page(md_path: Path) -> str:
    raw = md_path.read_text(encoding="utf-8")
    body, fm = parse_front_matter(raw)
    body = expand_relative_url(body)
    title_match = re.search(r"^title:\s*(.+)$", fm, re.M)
    title = title_match.group(1).strip() if title_match else md_path.stem
    md.reset()
    content = md.convert(body)
    nav_links = "".join(
        f'<a href="{BASE}/{href}">{NAV_ICONS[icon_key]}<span>{label}</span></a>'
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
    css_path = Path("assets/css/lol-dashboard.css")
    nav_css_path = Path("assets/css/local-nav.css")
    css_link = ""
    if css_path.exists():
        css_link += f'<link rel="stylesheet" href="{BASE}/assets/css/lol-dashboard.css">'
    if nav_css_path.exists():
        css_link += f'<link rel="stylesheet" href="{BASE}/assets/css/local-nav.css">'
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  {css_link}
</head>
<body class="has-local-nav">
  {nav}
  <main>{content}</main>
</body>
</html>"""


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path.startswith(BASE):
            path = path[len(BASE) :] or "/"
        path = path.lstrip("/")  # clean.html, index.html, or empty for home
        if path in PAGES or path == "":
            md_file = ROOT / PAGES[path if path else ""]
            if md_file.exists():
                html = render_page(md_file)
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write(html.encode("utf-8"))
                return
        if path.startswith("diagram/") or path.startswith("assets/"):
            self.path = "/" + path
            return super().do_GET()
        if path.endswith(".html") and (ROOT / path.lstrip("/")).exists():
            return super().do_GET()
        self.send_response(302)
        self.send_header("Location", f"{BASE}/")
        self.end_headers()


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://127.0.0.1:{PORT}{BASE}/"
        print(f"Local preview: {url}")
        print(f"  Clean page:  http://127.0.0.1:{PORT}{BASE}/clean.html")
        print(f"  Model page:  http://127.0.0.1:{PORT}{BASE}/interactive.html")
        print(f"  Fair page:   http://127.0.0.1:{PORT}{BASE}/fair.html")
        print("Press Ctrl+C to stop.")
        httpd.serve_forever()
