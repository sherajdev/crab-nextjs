import { getBlogPost, getBlogPosts } from '@/lib/blog';
import BlogPostComponent from '@/components/BlogPost';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostComponent post={post} />;
}
