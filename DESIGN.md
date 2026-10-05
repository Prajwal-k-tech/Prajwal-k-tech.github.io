# Portfolio design

## Direction

A personal CS portfolio for research mentors and engineering hiring teams. Preserve the Ristretto palette, candid portrait and actual project captures. Use a clear sans-serif hierarchy, substantial project summaries and restrained interaction. Design variance 6, motion intensity 3, visual density 4.

The distinctive element is the warm portrait and arched crop. The rest of the page supports reading and assessing the work. Avoid decorative labels, oversized secondary headings, animated backgrounds, technology logo walls and manufactured metrics.

## Audit and decisions

The previous version had a system-dependent serif display font mixed with Geist, orange micro-labels above most headings, a duplicate first-name wordmark, and several equally large sections with similar split layouts. The annual CTF rank could become stale. Supporting projects appeared as smaller links. Codeforces had a static fallback incorrectly labeled as current.

- Use self-hosted Geist for the whole page. One h1 introduces Prajwal; h2 sections organize the page; h3 and h4 headings organize projects and supporting evidence.
- Center the four primary navigation links, enlarge them and keep them accessible while scrolling. Mark the current reading section with a single underline.
- Keep primary text, secondary text and metadata distinct through size and weight. Use peach for the primary button, contact address, focus and modest link cues. No orange section eyebrows.
- Give the real project screenshots the same 8:5 frame without cutting off the interface. Keep the portrait bounded at every width.
- Show six featured projects under “Some of my work” and six team projects under “Some of my group projects”. Every entry has an actual interface, terminal capture, repository artifact or visualization of recorded experiment results. Both use the same two-column card grid and image dimensions, collapsing to one column on mobile.
- Put the publication with research. Put experience, CP, CTFs and hobbies under About. Avoid repeating the same project descriptions in those sections.
- CTF highlights are historical event results with event years and team attribution. Current season ranks and points belong on CTFtime.
- Codeforces uses its official JSONP API. When it fails or returns unusable data, the page shows the verified personal best rather than claiming stale data is current. Other online judges remain direct profile links.
- Preserve prototype and work-in-progress labels, private-source boundaries, team contributions and Drishti's external evaluation result.
- Keep the academic subtitle above the name, followed by the work button and Resume, GitHub and LinkedIn links. Mobile separates the work button from the three profile links.
- Experience links to Edhanta and the three CIO magazine sites. Stack labels are supported by the repositories' dependency manifests; no private source is linked.
- Put seven favorite quotes after the personal interests within About. Alternate the text and the visual from left to right, using the existing palette. Mix sourced imagery with the line motifs, and link each attribution to its source.

## Tokens

| Role | Value |
| --- | --- |
| Canvas | `#2c2525` |
| Inset surface | `#211b1b` |
| Primary text | `#e6d9db` |
| Secondary text | `#c3b7b8` |
| Peach accent | `#f38d70` |
| Divider | `#514344` |

Type: Geist Regular and Semibold, converted from the existing licensed fonts to WOFF2. H1 is fluid 40–76px; main headings 30–38px; project headings 22–26px; body 16–18px; metadata 13–14px. Container maximum 1280px. Explicit single-column layouts below 768px, with 320px reflow supported.

## Stack decision

The site is static HTML, CSS and two small JavaScript files. These provide native disclosures, responsive grids, local fonts, active navigation and optional API enhancement. GitHub Pages can serve them directly. A Next.js static export would still need an external server for APIs that block browser access, and would add build dependencies without solving the design issues. A framework migration is appropriate if the site develops substantial application state or multiple complex content routes.

## References

These are structural references, not copied layouts or endorsements.

- [Brittany Chiang](https://brittanychiang.com/): strong typography, visible experience and project evidence.
- [Lee Robinson](https://leerob.com/): direct writing and a recognizable personal visual.
- [Andrej Karpathy](https://karpathy.ai/): research, projects and personality presented together.
- [W3C heading structure](https://www.w3.org/WAI/tutorials/page-structure/headings/), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) and [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): semantic hierarchy and usable layouts.
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) and [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports): hosting and framework constraints.
- [Codeforces API](https://codeforces.com/apiHelp): official JSONP support.

## Interaction and maintenance

Motion responds to navigation and hover. Smooth scrolling and transitions honor reduced motion. There is no scroll hijacking, automatic carousel, animation loop, tracking or form backend.

Copy stays in `index.html`, grouped by commented section and project article. Keep evidence and status accurate when changing text. Project screenshots and the resume are local assets; layout and palette tokens are in `styles.css`.

## Image provenance

- BattleCP, Bluff, PokeForge and Drishti-XAI retain the existing actual interface captures.
- To-Do-or-Die is a real terminal capture of adding and listing sample tasks in an isolated temporary filesystem; no systemd timer or effects were enabled.
- LurajBot uses both of Prajwal’s supplied February and April 2022 Discord screenshots. CSS crops the unused right-hand space and scales them proportionally side by side. The original PNGs remain unchanged.
- Algorithima and KOJ are captures of their public sorting visualizer and problem archive.
- Anchor pairs home and paced-breathing screenshots from the current debug APK on an API 35 emulator; legacy PTSD Coach reference images are excluded. ZeroKlue shows the local /verify prototype route with developer tooling hidden and no wallet connection. KPlaceNet visualizes the recorded L4 held-out OSV-5M experiment from docs/results/l4_adaptive_cells.md; RayTray uses its repository’s rendered scene.
- The Yoda still is a small crop from the [official StarWars.com Databank](https://www.starwars.com/databank/yoda), credited to Lucasfilm. The Batman silhouette is the [CC0 file on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Batman_logo_(solid_black_silhouette).svg), recolored with the site's peach accent.
