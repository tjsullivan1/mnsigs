import { defineCollection, reference } from "astro:content"
import { z } from "astro/zod"
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
    src: z.url(),
    order: z.number(),
  }),
})

const officers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/officers" }),
  schema: ({ image }) =>
    z.object({
      office: z.string(),
      name: z.string().nullable().default(null),
      email: z.email().nullable().default(null),
      photo: image().optional(),
      order: z.number(),
    }),
})

const chapters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/chapters" }),
  schema: z.object({
    designation: z.string(),
    institution: z.string(),
    city: z.string(),
    state: z.string(),
    chartered: z.number(),
    website: z.url().nullable().default(null),
    order: z.number(),
  }),
})

// One entry per *seat* in the province structure, not per person. Reporting
// lines are stored as data rather than as file nesting because the structure is
// matrixed: Ritual Peers and FLC Mentors report to the Grand Praetor (solid)
// while also advising every chapter advisor (dotted). A tree of folders cannot
// express a node with one parent and five secondary relationships.
//
// `person`/`email`/`photo` are deliberately optional and default to null. The
// chart is published as a structural diagram with no names; adding a name later
// is a one-line frontmatter edit with no schema or template change.
const provinceRoles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/province-roles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // "province" roles sit above the chapters; "chapter" roles belong to the
      // chapter named in `chapter` and are grouped under it in the tree.
      scope: z.enum(["province", "chapter"]),
      chapter: reference("chapters").nullable().default(null),
      // Solid line. The Grand Praetor is the single root and has no reportsTo.
      reportsTo: reference("provinceRoles").nullable().default(null),
      // Dotted lines: advisory relationships that are not reporting lines.
      advises: z.array(reference("provinceRoles")).default([]),
      person: z.string().nullable().default(null),
      email: z.email().nullable().default(null),
      photo: image().optional(),
      termLabel: z.string().nullable().default(null),
      summary: z.string().nullable().default(null),
      order: z.number(),
    }),
})

export const collections = { pages, gallery, officers, chapters, provinceRoles }
