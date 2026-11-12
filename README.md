# klimb.academy website

Static website for KLIMB, the marketing career game. No build step: plain HTML, CSS and JavaScript, ready for GitHub Pages.

## What is in this folder

| Path | What it is |
| --- | --- |
| `index.html` | The landing page: hero, how it works, kingdoms, mentors, game features, pricing, Klimb Kingdoms for companies, download, FAQ |
| `styles.css`, `site.js` | Styles and small scripts (menu, billing toggle, mentor carousel) |
| `play/` | The playable browser demo of the app (klimb.academy/play) |
| `assets/` | Logos, 2D and 3D characters, app screenshots, self hosted fonts, share image |
| `impressum.html`, `privacy.html` | Legal page templates. Fill in the bracketed fields before launch |
| `404.html` | "Lost on the mountain" page |
| `CNAME` | Tells GitHub Pages to serve the site on klimb.academy |
| `.nojekyll` | Tells GitHub to publish the files as they are |

## Publish on GitHub Pages

1. Create a GitHub account (free) and a new **public** repository, for example `klimb-website`.
2. Upload everything in this folder to the repository (Add file, then Upload files, drag the whole folder content in, then Commit).
3. In the repository go to **Settings, then Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Still in Settings, Pages, type `klimb.academy` under **Custom domain** and Save.

## Point klimb.academy to GitHub (Namecheap)

In Namecheap go to **Domain List, Manage, Advanced DNS** and add these records. Remove any existing "URL Redirect" or parking records for `@` and `www` first.

| Type | Host | Value |
| --- | --- | --- |
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | YOUR-GITHUB-USERNAME.github.io. |

Do not touch the **MX** and email records: hello@klimb.academy keeps working as it does now.

DNS can take up to 24 hours. When GitHub shows the domain as verified, tick **Enforce HTTPS** in Settings, Pages.

## Before launch, replace these placeholders

- Prices (€7.99 a month, €59.99 a year, Teams €6 per learner) and the Founding 1,000 terms
- App Store and Google Play links (they currently open an email to hello@klimb.academy)
- Impressum and privacy details
- The "Northwind Onboarding Kingdom" card is an example for the B2B section
