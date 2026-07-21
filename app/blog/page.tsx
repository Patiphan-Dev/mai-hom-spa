import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { formatThaiDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "บทความ",
  description: "บทความความรู้เรื่องนวดและสุขภาพ อัปเดตเป็นประจำ",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="บทความ" title="ความรู้เรื่องนวดและสุขภาพ" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 hover:shadow-lg hover:shadow-charcoal/10"
          >
            <PlaceholderImage id={post.coverImage} className="h-40 w-full rounded-none" />
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="text-xs text-charcoal/50">
                {formatThaiDate(post.publishedAt)} · อ่าน {post.readMinutes} นาที
              </p>
              <h2 className="font-heading text-lg text-charcoal group-hover:text-terracotta">
                {post.title}
              </h2>
              <p className="line-clamp-2 text-sm text-charcoal/70">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
