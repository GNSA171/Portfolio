# Geeth Namal — Portfolio

A responsive freelance portfolio for Geeth Namal, built with HTML, CSS, and JavaScript for GitHub Pages. It showcases three production websites, four development previews, and the confirmed contact email dkgnsa171@gmail.com.

**Live URL:** https://gnsa171.github.io/Portfolio/

## Run locally

Open `index.html` directly, or serve the repository with a static server:

```bash
python -m http.server 8080
```

Then open http://localhost:8080. No dependencies or build step are needed.

## Edit

- `index.html`: profile text, services, projects, contact email, and page metadata.
- `style.css`: layout, colours, typography, and responsive styles.
- `main.js`: copy-email interaction, email draft generation, and current year.
- `assets/images/profile.png`: existing portrait.
- `assets/previews/`: seven public homepage screenshots.
- `docs/projects.json`: project inventory with descriptions, status, and technology notes.
- `docs/PROJECT-EVIDENCE.md`: technology verification boundaries.
- `docs/FREELANCE-PROFILE.md`: reusable freelance overview, headline, bio, and service copy.
- `docs/GITHUB-PROFILE-README.md`: README intended for the `GNSA171/GNSA171` profile repository.

The contact address appears in `index.html`, `main.js`, and the profile documents. Update all occurrences together.

## Contact behaviour

The project brief opens the visitor's configured email app using a `mailto:` URL. This website does not receive or store submissions. Visitors must review and send the email themselves. A mail client is required; the direct email link and copy button provide alternatives. Keep briefs concise because mail-client URL limits vary.

## Deployment

The workflow in `.github/workflows/deploy.yml` stages only the public HTML, CSS, JavaScript, and portrait. It deploys on pushes to `main` or manual dispatch. In repository Settings → Pages, the source must be **GitHub Actions**. GitHub Pages availability and deployment permissions remain controlled by GitHub and repository settings.

## Content and attribution

The gallery lists CeylonDrive, Black Soul, and Vellora Fashion as production sites, following the owner's declaration. Kasagala YBA, Ceylon C Tours, 3S 3D, and Facebook Post Scheduler are development previews. Images are real public homepage captures. No unverified revenue, conversion, credentials, or backend-security outcomes are claimed.

The new site uses system fonts and locally stored project screenshots, without third-party runtime scripts, analytics, or remote font requests. Existing unused legacy assets remain in Git history and the repository but are not included in the deployment artifact. No blanket open-source licence has been added; rights in existing assets and third-party work remain with their respective owners.
