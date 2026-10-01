# Ristretto portfolio draft

Static HTML/CSS portfolio for Prajwal Kumar K, prepared on the local `draft/ristretto-portfolio` branch. No framework, tracking, external runtime assets or JavaScript required. The current GitHub Pages page is unchanged until explicitly published.

Preview from this directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. There is no compilation step; these files are the deployable site. Browser screenshots and review notes are stored outside this repository under `career/portfolio-review/`.

Content is in `index.html`; design tokens and responsive rules are in `styles.css`. Typeface: self-hosted Geist, SIL Open Font License in `assets/fonts/OFL.txt`. Project images are actual BattleCP and local Bluff screenshots converted to WebP. The latter is explicitly identified as a local prototype. The downloadable current SDE resume draft contains no phone number or street address. Review content and resume before publication.

Design read: developer/research portfolio for technical reviewers with restrained Ristretto colors. Native CSS implements the aesthetic; no external design system implied. DESIGN_VARIANCE 5, MOTION_INTENSITY 2, VISUAL_DENSITY 3. Dark mode is an explicit brand choice. One accent, consistent 8px image/button radius, real artifacts and native disclosures provide hierarchy.

Updated 2 October 2026: added Anchor under More work with team award attribution, a specific contribution summary and an explicit note that several product flows remain unfinished. Desktop, tablet and mobile screenshots were refreshed in `career/portfolio-review/`; the October 1 Lighthouse and accessibility reports have not been rerun after this content/layout edit.
