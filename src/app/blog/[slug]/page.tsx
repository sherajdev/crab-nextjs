import { getBlogPost, getBlogPosts } from '@/lib/blog';
import BlogPostComponent from '@/components/BlogPost';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export default async function BlogPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostComponent post={post} />;
}
