# hyeminbang.com

Personal website of Hyemin (Helen) Bang, built with [Astro](https://astro.build)
and deployed to GitHub Pages at [hyeminbang.com](https://hyeminbang.com).

## Develop

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Editing content

Most content lives in plain data files, so you rarely need to touch markup:

- **Bio, news, publications, links** — [`src/data/site.ts`](src/data/site.ts)
- **CV (HTML version)** — [`src/data/cv.ts`](src/data/cv.ts)
- **CV PDF** — replace [`public/CV.pdf`](public/CV.pdf)
- **Images** — [`public/images/`](public/images/) (profile photo, publication
  thumbnails, hobby photos, favicons)

Pages are in [`src/pages/`](src/pages/) (`index`, `publications`, `cv`), shared
layout/components in [`src/layouts/`](src/layouts/) and
[`src/components/`](src/components/), and theme tokens (including the accent
color and dark mode) in [`src/styles/global.css`](src/styles/global.css).

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes `dist/` to GitHub Pages. The custom domain is configured via
the [`CNAME`](CNAME) file.
