# mnsigs.com

Website for the [Greater Minnesota Alumni Chapter](https://mnsigs.com) of the
Sigma Chi Fraternity.

Built with [Astro](https://astro.build) as a fully static site and deployed to
Azure Static Web Apps.

## Getting started

Requires Node.js 20.3 or newer.

```bash
npm install
npm run dev        # dev server at http://localhost:4321
```

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the local dev server                 |
| `npm run build`   | Type-check and build the site into `dist/` |
| `npm run preview` | Serve the built site locally               |
| `npm run check`   | Type-check only                            |
| `npm run format`  | Format source files with Prettier          |

## Project structure

```
public/              served as-is, byte for byte (favicon.ico, robots.txt)
  staticwebapp.config.json  Azure SWA routing, redirects and headers
src/
  assets/            images processed at build time (logo, officer headshots)
  config.ts          site metadata, nav links, external URLs
  content.config.ts  content collection schemas
  content/
    pages/           long-form pages (about, privacy, bylaws)
    gallery/         one file per gallery photo
    officers/        one file per chapter office
  components/        BaseHead, Header, Footer
  layouts/           Base (shell) and Page (title + prose wrapper)
  pages/             one file per route
  styles/global.css  all site styling
astro.config.mjs     Astro configuration
```

Put images in `src/assets/`, not `public/`. Anything in `public/` is copied
verbatim and bypasses the image pipeline entirely, while `src/assets/` images go
through `astro:assets` — resized, converted to WebP and content-hashed for
immutable caching. The logo went from a 244 KB PNG on every page load to a
1.6 KB WebP by making exactly that move.

`staticwebapp.config.json` lives in `public/` rather than the repo root on
purpose. Azure only reads it from the root of the **deployed output**, so it has
to be copied into `dist/` by the build. Both workflows assert it is there before
deploying, because if it goes missing the redirects, headers and CSP silently
stop applying rather than failing loudly.

## Editing content

Most updates do not require touching any templates.

**Add or change an officer** — edit the matching file in
`src/content/officers/`. Set `name` and optionally `email`:

```yaml
---
office: President
name: Jane Doe
email: president@mnsigs.com
order: 1
---
```

**Add a gallery photo** — upload the image to the `media/photos` container in
the `samnsigs001` storage account, then add a file to `src/content/gallery/`:

```yaml
---
caption: Brothers at the 2025 holiday party
alt: Chapter brothers gathered at the holiday party
src: https://samnsigs001.blob.core.windows.net/media/photos/example.jpg
order: 7
---
```

Photos are downloaded and converted to WebP at build time, so the large
originals in blob storage are never served to visitors. New source domains must
be added to `image.domains` in `astro.config.mjs`.

**Edit page copy** — the About, Privacy, and Bylaws pages are Markdown files in
`src/content/pages/`. The bylaws use raw `<h2>`/`<h3>` tags so the original
anchor IDs (`#article1`, `#a3s6`, and so on) keep working for existing links.

## Deployment

Pushing to `main` builds the site and deploys it to Azure Static Web Apps via
`.github/workflows/deploy.yml`. Pull requests get their own staging environment,
which is torn down when the PR closes.

The build runs in GitHub Actions on Node 22 with `npm ci`, and the result is
uploaded with `skip_app_build: true`, so the artifact that ships is exactly the
one CI produced rather than a separate rebuild on Azure's side.

`.github/workflows/ci.yml` runs formatting, type checking and a build on every
pull request. CodeQL scanning runs on `main`, on pull requests, and weekly.

## Notes

- The site ships no client-side JavaScript and sets no cookies.
- The mailing list signup links out to a Mailchimp-hosted page; no form data is
  handled by this site.
- There is no authentication. All pages are public.
