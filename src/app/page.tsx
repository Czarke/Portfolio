import Link from "next/link";
import Container from "@/components/layout/Container";
import { getAllPosts } from "@/lib/posts";
import GitHubActivity from "@/components/GitHubActivity";
import ContributionGraph from "@/components/ContributionGraph";
import Image from "next/image";

export const revalidate = 3600;

export default async function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Container>
      <section className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <h1 className="text-3xl font-bold">Sean Patterson</h1>
          <p className="mt-2 text-neutral-400 text-lg">DevOps Engineer</p>
          <p className="mt-4 text-neutral-300 max-w-xl">
            I&apos;m a DevOps engineer currently on break attending Japanese language school.
            I use this site to document the infrastructure work I do on my home lab —
            KVM virtualization, Kubernetes, and whatever else I&apos;m building.
          </p>
        </div>
        <Image
          src="/Portrait.jpg"
          alt="Sean Patterson"
          width={120}
          height={120}
          className="rounded-full shrink-0"
          priority
        />
      </section>


      <ContributionGraph />

      <GitHubActivity />

      <section className="mt-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <Link href="/blog" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
            All posts →
          </Link>
        </div>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:text-neutral-300 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-neutral-500 shrink-0">{post.date}</span>
                </div>
                {post.description && (
                  <p className="mt-1 text-sm text-neutral-400">{post.description}</p>
                )}
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
