# Blog routes are temporarily disabled

The blog content and implementation are intentionally preserved, but its public routes are disabled.

Preserved capabilities:

- Articles: `src/content/blog/`
- Content collection: `src/content.config.ts`
- Article layout: `src/layouts/BlogPost.astro`
- Date component: `src/components/FormattedDate.astro`
- Post query helper: `src/utils/posts.ts`
- MDX and RSS dependencies in `package.json`

To restore the blog:

1. Move `routes/blog/index.astro` to `src/pages/blog/index.astro`.
2. Move `routes/blog/[...slug].astro` to `src/pages/blog/[...slug].astro`.
3. Move `routes/rss.xml.js` to `src/pages/rss.xml.js`.
4. Restore the blog navigation link and the RSS `<link rel="alternate">` in `BaseHead.astro`.
5. Run `npm run build` and verify the blog, feed, and sitemap output.

Files outside `src/pages/` are not treated as public routes by Astro.
