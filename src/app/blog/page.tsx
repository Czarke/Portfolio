import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { getAllPosts } from "@/lib/posts";


export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on home infrastructure, Kubernetes, and DevOps.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-neutral-400">No posts yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg font-medium group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-neutral-500 shrink-0">{post.date}</span>
                </div>
                {post.description && (
                  <p className="mt-1 text-sm text-neutral-400">{post.description}</p>
                )}
              </article>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
