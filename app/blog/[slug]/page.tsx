import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { formatThaiDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-xs text-charcoal/50">
        {formatThaiDate(post.publishedAt)} · อ่าน {post.readMinutes} นาที
      </p>
      <h1 className="font-heading mt-2 text-3xl text-charcoal sm:text-4xl">{post.title}</h1>

      <PlaceholderImage id={post.coverImage} className="mt-6 h-64 w-full" />

      <div className="mt-8 flex flex-col gap-4 text-charcoal/80">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-moss/10 px-3 py-1 text-xs text-moss-dark">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
