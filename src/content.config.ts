import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    stack: z.array(z.string()),
    // Orden en la home: menor número aparece primero.
    orden: z.number().default(100),
    demo: z.url().optional(),
    repo: z.url().optional(),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { proyectos };
