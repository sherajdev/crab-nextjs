import { BlogPost } from '@/lib/blog';
import Link from 'next/link';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  return (
    <section className="glass-card p-8 md:p-10 mb-8 animate-fade-up">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[var(--teal)] hover:text-[var(--coral-light)] transition-colors mb-6"
      >
        <span>← Back to Home</span>
      </Link>

      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
      )}

      <header className="mb-8 pb-6 border-b border-[var(--glass-border)]">
        <span className="text-sm font-bold text-[var(--teal)] uppercase tracking-wider block mb-3">
          {post.date}
        </span>
        <h1 className="font-bebas text-4xl md:text-5xl text-gradient inline-block animate-shimmer pb-1">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-4 text-[var(--text-secondary)] text-lg">
            {post.summary}
          </p>
        )}
      </header>

      <article
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
