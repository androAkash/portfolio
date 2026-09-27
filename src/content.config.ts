import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.union([z.string(), z.number()]),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().optional().default(true),
    order: z.number().optional().default(0),
    metrics: z.string().optional(),
    role: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
