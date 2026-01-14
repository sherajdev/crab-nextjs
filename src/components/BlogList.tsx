import { BlogPost } from '@/lib/blog';
import Link from 'next/link';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <section className="glass-card p-10 mb-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <h2 className="font-bebas text-4xl mb-4 text-gradient inline-block">Daily Blog</h2>
        <p className="text-[var(--text-secondary)]">No posts yet. Check back soon!</p>
      </section>
    );
  }

  return (
    <section className="glass-card p-10 mb-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
      <h2 className="font-bebas text-4xl mb-8 text-gradient inline-block">Daily Blog</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="p-6 rounded-2xl bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.2)] hover:border-[var(--teal)] hover:bg-[rgba(45,212,191,0.15)] transition-all duration-300 hover:translate-y-[-4px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold text-[var(--teal)] uppercase tracking-wider">
                  {post.date}
                </span>
                {post.summary && (
                  <span className="text-sm text-[var(--text-secondary)]">
                    {post.summary}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--coral-light)] transition-colors">
                {post.title}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
