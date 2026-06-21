#!/usr/bin/env python3
"""Build static HTML site into _site/ for GitHub Pages (no Jekyll)."""
from site_lib import OUT_DIR, build_site

if __name__ == "__main__":
    build_site()
    print(f"Built static site in {OUT_DIR}")
