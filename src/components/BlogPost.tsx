import { BlogPost } from '@/lib/blog';
import Link from 'next/link';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  return (
    <section className="glass-card p-10 mb-8 animate-fade-up">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[var(--teal)] hover:text-[var(--coral-light)] transition-colors mb-6"
      >
        <span>← Back</span>
      </Link>

      <header className="mb-8 pb-6 border-b border-[var(--glass-border)]">
        <span className="text-sm font-bold text-[var(--teal)] uppercase tracking-wider block mb-2">
          {post.date}
        </span>
        <h1 className="font-bebas text-5xl text-gradient inline-block animate-shimmer">
          {post.title}
        </h1>
      </header>

      <div className="prose prose-invert max-w-none">
        <div
          className="text-[var(--text-primary)] leading-7 font-light text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
}
