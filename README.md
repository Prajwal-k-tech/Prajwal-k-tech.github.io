# Prajwal Kumar K · Portfolio

Personal portfolio hosted on [GitHub Pages](https://prajwal-k-tech.github.io/). Static HTML/CSS with small scripts for active navigation and an optional Codeforces rating refresh.

## Local preview

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173>.

## Editing

- `index.html` contains all copy, project order, status labels and links. Comments mark each main section.
- `styles.css` contains palette tokens, the type scale, layout and responsive rules.
- `profiles.js` refreshes Codeforces from the official JSONP API. The HTML fallback is a personal best, not a stale current rating. Other judges link directly to their profiles.
- `site.js` marks the current navigation section. The content and anchor links work without JavaScript.
- `assets/` contains the portrait, actual project screenshots, local fonts and downloadable resume.
- `DESIGN.md` explains the design audit, information architecture and stack choice.

The portfolio uses the Ristretto palette and self-hosted Geist. The four main captures and six additional project summaries are visible on the page. Preserve team attribution, private-source boundaries, prototype labels and evaluation scope when editing. CTF highlights refer to specific historical events; live season standings stay on CTFtime.

There is no build step, API key, scraping proxy, analytics or application server.
