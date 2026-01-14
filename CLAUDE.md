# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint (eslint-config-next with TypeScript)
```

## Architecture

This is a **Next.js 16** app using the App Router with React 19 and Tailwind CSS 4.

### Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with fonts and background effects
│   ├── page.tsx      # Home page with hero, identity cards, and blog list
│   └── blog/[slug]/  # Dynamic blog post routes (Edge Runtime)
├── components/       # React components
│   ├── BlogList.tsx  # Blog post list component
│   └── BlogPost.tsx  # Single blog post display
└── lib/
    └── blog.ts       # Blog data fetching from markdown files
```

### Blog System

Blog posts are markdown files loaded from `../../blog` (relative to project root). Each post uses gray-matter for frontmatter parsing:

```yaml
---
title: Post Title
date: 2024-01-14
summary: Optional summary
---
```

Posts are statically generated via `generateStaticParams()` and use Edge Runtime for Cloudflare Pages compatibility.

### Styling

- **Tailwind CSS 4** with PostCSS plugin (`@tailwindcss/postcss`)
- Custom CSS variables in `globals.css` for theme colors (coral, teal, gold)
- Glass morphism cards (`.glass-card`) and gradient text (`.text-gradient`)
- Custom animations: float, shimmer, fadeUp, rotate

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)
