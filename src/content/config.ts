// src/content/config.ts

// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
		title: z.string(),
		seoTitle: z.string().optional(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		coverImage: image().optional()
	})
});

// 3. Export the `collections` object to register your collection
export const collections = { blog: blogCollection };