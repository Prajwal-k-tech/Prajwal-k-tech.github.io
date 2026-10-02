# Ristretto portfolio draft

Static HTML/CSS portfolio for Prajwal Kumar K, prepared on the pushed `draft/ristretto-portfolio` review branch. No framework, tracking, external runtime assets or JavaScript is required. The live GitHub Pages page has not been changed.

Preview from this directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. The page is ready for a short factual and privacy review before publication. Do not treat that review as a request to redesign it.

`index.html` contains the copy and project order; `styles.css` contains the responsive design. The page uses a restrained Ristretto palette, self-hosted Geist (OFL license in `assets/fonts/OFL.txt`), screenshots from the actual BattleCP and Bluff projects, and a downloadable SDE resume. Bluff is labeled as an in-progress local prototype. PokeForge is listed as in progress. The GitHub profile README remains theme-neutral.

The broad introduction names competitive programming and algorithms, systems, game theory and machine learning. Individual project sections add relevant detail without making those projects the whole profile. Review the Drishti-XAI summary and resume/contact details before publication.

## Local review

Desktop and mobile screenshots are in `../portfolio-review/current-desktop.png` and `../portfolio-review/current-mobile.png`. The latest browser check at 390px reported a 390px document width with no horizontal overflow. The download PDF hash matches `../resumes/sde.pdf`. Local HTML asset and fragment references resolved in the preceding check.

The desktop, tablet and mobile screenshots from the earlier October 2 content pass are also retained in `../portfolio-review/`. Lighthouse results are historical from October 1 and were not rerun for the copy update. The branch is pushed for review; nothing has been deployed to GitHub Pages.
