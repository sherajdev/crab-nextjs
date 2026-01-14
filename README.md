# Crab Next.js

A modern personal website built with Next.js 16, React 19, and Tailwind CSS 4. Features a blog system with markdown support, custom animations, and glass morphism design.

## Features

- **Next.js App Router** with React 19
- **Markdown Blog System** with gray-matter frontmatter parsing
- **Tailwind CSS 4** with custom animations and glass morphism effects
- **Edge Runtime** for optimal Cloudflare Pages deployment
- **Responsive Design** with custom gradient and animation effects
- **TypeScript** for type safety

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parse YAML frontmatter from markdown

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint with TypeScript support
```

## Project Structure

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

## Blog System

Blog posts are markdown files stored in the `blog/` directory at the project root. Each post includes YAML frontmatter:

```yaml
---
title: Post Title
date: 2024-01-14
summary: Optional summary
---

Your markdown content here...
```

Posts are statically generated at build time and use Edge Runtime for optimal performance on Cloudflare Pages.

## Styling

The project uses Tailwind CSS 4 with custom features:

- **CSS Variables** for theme colors (coral, teal, gold)
- **Glass Morphism** cards with backdrop blur effects
- **Custom Animations**: float, shimmer, fadeUp, rotate
- **Gradient Text** effects

## Deployment

This project is optimized for deployment on [Cloudflare Pages](https://pages.cloudflare.com) with Edge Runtime support. It can also be deployed on:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- Any platform supporting Next.js

For Cloudflare Pages, the app automatically uses Edge Runtime for optimal performance.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React 19
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS 4

## License

MIT
