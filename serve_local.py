#!/usr/bin/env python3
"""Local preview server for the static LeagueOfLegends site."""
import http.server
import json
import os
import socketserver

from site_lib import BASE, PAGES, ROOT, build_search_index, render_page

PORT = int(os.environ.get("PORT", "8765"))
_SEARCH_INDEX = json.dumps(build_search_index())


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path.startswith(BASE):
            path = path[len(BASE) :] or "/"
        path = path.lstrip("/")

        if path == "search-index.json":
            payload = _SEARCH_INDEX.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(payload)
            return

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

        if path.endswith(".html") and (ROOT / path).exists():
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
