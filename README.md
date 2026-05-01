# Anton Verenitch Portfolio

A lightweight GitHub Pages portfolio for Anton Verenitch, focused on product leadership, platform strategy, technical translation, partner integrations, and outcome-driven execution.

Live site: [https://ton87.github.io](https://ton87.github.io)

## Overview

This repository contains a static personal portfolio built for GitHub Pages. The site is intentionally simple to deploy: there is no framework, build command, dependency install, or generated output folder. GitHub Pages serves the files directly from the repository root.

The current design uses an off-white editorial palette, restrained HUD-inspired framing, responsive layout rules, and clear calls to action for contact, LinkedIn, and GitHub.

## Features

- Off-white responsive portfolio layout
- Hero section with positioning, profile snapshot, and primary links
- Product leadership summary and impact cards
- Experience timeline
- Skills and domain capabilities
- Education and certification section
- Contact links for email, LinkedIn, and GitHub
- GitHub Pages-ready static structure
- `.nojekyll` included so Pages serves files directly
- `.gitignore` included to keep local PDF exports out of the public repository

## Project Structure

```text
ton87.github.io/
├── .gitignore
├── .nojekyll
├── README.md
├── index.html
├── script.js
└── styles.css
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Inter and JetBrains Mono
- GitHub Pages for hosting

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally with any static file server.

Example:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deployment

This site is published from the `main` branch of the `ton87.github.io` repository.

For a GitHub user site, GitHub Pages serves the root of this repository at:

```text
https://ton87.github.io/
```

When changes are committed to `main`, GitHub Pages republishes the site automatically. CSS and script links include a simple version query to avoid stale browser caches after styling updates.

## Updating Content

- Edit `index.html` for page copy, section structure, and links.
- Edit `styles.css` for color, spacing, layout, and responsive behavior.
- Edit `script.js` for small browser interactions.
- Update the version query in `index.html` after major CSS or JavaScript changes.

## Contact Links

- Email: `averenitch@gmail.com`
- LinkedIn: [anton-verenitch](https://www.linkedin.com/in/anton-verenitch)
- GitHub: [ton87](https://github.com/ton87)
