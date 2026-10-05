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
- `assets/` contains the portrait, actual project screenshots, local fonts and downloadable resumes.
- Contact links to separate software engineering, AI/research and cybersecurity resume PDFs. Outbound links and resume PDFs open in a new tab, while section navigation stays on the page. The hero Resume link opens the software engineering version; PDF query strings use the first 12 characters of each file's SHA-256 hash.
- Favorite quotes follow the personal interests within About, with linked attributions and alternating imagery. Keep excerpts short and check attribution when editing.
- `DESIGN.md` explains the design audit, information architecture and stack choice.

The portfolio uses the Ristretto palette and self-hosted Geist, with static CSS contour bands flowing through the page background. Six featured projects and six group projects each have a real interface, terminal capture or recorded experiment image. The quote section uses source imagery and original themed illustrations with a shared warm photo treatment. All copy and direct links remain in the page. Preserve team attribution, private-source boundaries, prototype labels and evaluation scope when editing. CTF highlights refer to specific historical events; live season standings stay on CTFtime.

There is no build step, API key, scraping proxy, analytics or application server.

To edit project text, open `index.html` and search for the project's heading. Each adjacent `<article>` contains its image, description, status, stack and available links. Keep these two sections and their order:

1. **Some of my work:** BattleCP, Bluff, PokeForge, Drishti-XAI, To-Do-or-Die, LurajBot.
2. **Some of my group projects:** Algorithima, KOJ, Zero-Klue, Anchor, KPlaceNet, RayTray.

Both sections share the same two-column card and image layout. Drishti-XAI's source is private, so its card shows that status without a source link.
