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
public/              static assets served as-is (logo, favicon)
src/
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
staticwebapp.config.json  Azure Static Web Apps routing and headers
```

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

## Notes

- The site ships no client-side JavaScript and sets no cookies.
- The mailing list signup links out to a Mailchimp-hosted page; no form data is
  handled by this site.
- There is no authentication. All pages are public.
