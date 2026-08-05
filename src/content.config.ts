import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lead: z.string().optional(),
  }),
})

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: z.object({
    caption: z.string(),
    alt: z.string(),
    src: z.string().url(),
    order: z.number(),
  }),
})

const officers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/officers" }),
  schema: ({ image }) =>
    z.object({
      office: z.string(),
      name: z.string().nullable().default(null),
      email: z.string().email().nullable().default(null),
      photo: image().optional(),
      order: z.number(),
    }),
})

export const collections = { pages, gallery, officers }
