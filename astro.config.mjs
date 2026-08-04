// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://mnsigs.com",
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    format: "file",
  },
  image: {
    // Gallery photos live in Azure Blob Storage; Astro downloads and optimises
    // them at build time so the originals (some >4 MB) are never served to users.
    domains: ["samnsigs001.blob.core.windows.net"],
  },
})
