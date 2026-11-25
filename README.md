# Onkar Warade Portfolio

A React and Vite portfolio website.

## Update portfolio content

Most frequently changed information is in `src/data/portfolioData.js`:

- **Personal information:** edit `personalInfo` for the name, initials, roles, email, phone, and location.
- **Current role and company:** edit `currentRole` for the job title, company, description, and focus areas.
- **Skills:** add, edit, reorder, or remove entries in `technologies`. Skill logos are imported at the top of the same file. Toolkit totals update automatically.
- **Projects:** add, edit, reorder, or remove entries in `projects`. Keep `variant` as `flow`, `ops`, or `commerce` to use one of the existing card visuals.
- **Contact and social links:** edit `personalInfo`, `socialLinks`, and `contactFormUrl`.
- **Resume and toolkit video paths:** edit `siteAssets`.

The current resume and video files are:

- `public/Onkar-Warade-Resume.pdf`
- `public/x.webm`

Replace either file with a file of the same name, or update its path in `siteAssets`.

## Update a website section

Each major section has its own file in `src/sections`:

- `HeroSection.jsx`
- `ApproachSection.jsx`
- `ToolkitSection.jsx`
- `ExperienceSection.jsx`
- `ProjectsSection.jsx`
- `ContactSection.jsx`

Shared page elements are in `src/components`. The main page order is in `src/App.jsx`.

Styles are in `src/styles`:

- `site.css` contains the main site, section, responsive, and animation styles.
- `interactive-sections.css` contains the orbit and toolkit visual effects.
- `responsive-polish.css` contains final layout and responsive adjustments and must stay loaded last.

## Run locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Check the code:

```bash
npm run lint
```
