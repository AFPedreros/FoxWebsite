import { defineCollection } from "astro:content"
import { z } from "zod"

const blog = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lang: z.enum(["en", "es"]),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		cardImage: z.string().optional(),
		author: z.string().optional(),
		authorImage: z.string().optional(),
	}),
})

export const collections = { blog }
