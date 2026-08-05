// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://mnsigs.com",
  trailingSlash: "never",
  integrations: [sitemap()],
  // Astro 7 changed this default to "jsx", which strips whitespace between
  // elements using JSX rules. That silently removes rendered spaces between
  // adjacent *inline* elements — e.g. the footer's `Privacy &middot; Sigma Chi`
  // became `Privacy &middot;Sigma Chi`. Pinning to the previous HTML-aware
  // behaviour keeps this upgrade a pure dependency change. Switching to "jsx"
  // is a separate, deliberate decision.
  compressHTML: true,
  build: {
    // "directory" emits /about/index.html, which Azure Static Web Apps serves
    // at /about without an extension. "file" would emit /about.html and make
    // the canonical URL disagree with the nav links and sitemap.
    format: "directory",
  },
  image: {
    // Gallery photos live in Azure Blob Storage; Astro downloads and optimises
    // them at build time so the originals (some >4 MB) are never served to users.
    domains: ["samnsigs001.blob.core.windows.net"],
  },
})
