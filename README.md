# Crab Next.js

A modern personal website built with Next.js 16, React 19, and Tailwind CSS 4. Features a blog system with markdown support, custom animations, glass morphism design, and automated daily blog posting.

## Features

- **Next.js App Router** with React 19
- **Markdown Blog System** with gray-matter frontmatter parsing and marked rendering
- **Tailwind CSS 4** with custom animations and glass morphism effects
- **Edge Runtime** for optimal Cloudflare Pages deployment
- **Responsive Design** with custom gradient and animation effects
- **TypeScript** for type safety
- **Featured Images** with banner support for blog posts
- **Automated Blog Posting** via daily-blog sub-agent integration

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parse YAML frontmatter from markdown
- [marked](https://github.com/markedjs/marked) - Markdown parser and compiler

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
crab-nextjs/
├── blog/                 # Blog posts (original location)
├── content/
│   └── blog/            # Blog posts with featured images
│       ├── 2026-01-14.md
│       ├── 2026-01-15.md
│       ├── 2026-01-16.md
│       └── _template.md  # Blog post template
├── public/
│   └── banner.jpg       # Default featured image
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout with fonts and background effects
│   │   ├── page.tsx     # Home page with hero, identity cards, and blog list
│   │   └── blog/
│   │       └── [slug]/  # Dynamic blog post routes (Edge Runtime)
│   ├── components/      # React components
│   │   ├── BlogList.tsx # Blog post list component
│   │   └── BlogPost.tsx # Single blog post display
│   └── lib/
│       └── blog.ts      # Blog data fetching from markdown files
└── CLAUDE.md            # Claude Code guidance
```

## Blog System

Blog posts are markdown files stored in the `content/blog/` directory. Each post includes YAML frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-16"
tags: ["tag1", "tag2"]
featured_image: "/banner.jpg"
---

Your markdown content here...
```

### Blog Post Template

Use the `_template.md` file as a starting point for new posts:

```yaml
---
title: ""
date: "YYYY-MM-DD"
tags: []
featured_image: "/banner.jpg"
---

## Summary

## Highlights

## Notes

---
About the Author
_Sheraj Hussein – Tech & automation enthusiast._
*Tags:*
```

Posts are statically generated at build time and use Edge Runtime for optimal performance on Cloudflare Pages.

## Blog Workflow

The project includes integration with the `daily-blog` sub-agent for automated blog posting:

1. User triggers: "post daily blog"
2. Agent reads memory and drafts content
3. User approves the draft
4. Agent commits and pushes to GitHub

## Styling

The project uses Tailwind CSS 4 with custom features:

- **CSS Variables** for theme colors (coral, teal, gold)
- **Glass Morphism** cards with backdrop blur effects
- **Custom Animations**: float, shimmer, fadeUp, rotate
- **Gradient Text** effects
- **Featured Images** with full-width banner support

### Custom CSS Classes

| Class | Description |
|-------|-------------|
| `.glass-card` | Glass morphism card with blur effect |
| `.text-gradient` | Gradient text effect |
| `.animate-float` | Floating animation |
| `.animate-shimmer` | Shimmer loading effect |
| `.animate-fadeUp` | Fade up animation |
| `.animate-rotate` | Rotation animation |

## Deployment

This project is optimized for deployment on [Cloudflare Pages](https://pages.cloudflare.com) with Edge Runtime support. It can also be deployed on:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- Any platform supporting Next.js

For Cloudflare Pages, the app automatically uses Edge Runtime for optimal performance.

## Recent Updates

### January 16, 2026
- Built `file-organizer` skill with auto-categorization
- Set up cron jobs for automated file checks and blog posting
- Overhauled blog template with featured banner image support
- Created `daily-blog` sub-agent for automated posting
- Added banner.jpg as default featured image
- Integrated `marked` for markdown rendering

### January 15, 2026
- Daily blog with swimming, chilli crab, and Telegram tips

### January 14, 2026
- Initial blog system with gray-matter parsing
- Custom glass morphism design
- Identity cards and hero section

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React 19
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS 4
- [gray-matter Documentation](https://github.com/jonschlinkert/gray-matter) - Parse YAML frontmatter
- [marked Documentation](https://marked.js.org) - Markdown parsing and compilation

## License

MIT
