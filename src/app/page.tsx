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
      <section className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8">
        <div>
          <h1 className="text-3xl font-bold">Sean Patterson</h1>
          <p className="mt-2 text-neutral-400 text-lg">
            DevOps engineer. On a career break in Tokyo, studying Japanese.
          </p>
          <p className="mt-4 text-neutral-300 max-w-xl">
            Most of what&apos;s here is me documenting the work I do on my homelab — Kubernetes,
            observability, and whatever else I&apos;m building. AI is the thing on my mind
            constantly right now: a massive enabler, and a quiet source of anxiety about what it
            means for the people (myself included) who build things for a living.
          </p>
          <p className="mt-4 text-neutral-300 max-w-xl">
            Away from the terminal I&apos;ve been powerlifting for ten years — figuring out,
            year by year, what that looks like as I get older and the desk hours stack up.
            When I&apos;m not training, I&apos;m usually at the coffee shop down the road from
            my apartment, playing with my Gaggimate and practicing my Japanese with the owner
            and the regulars — my neighbors.
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
          <Link href="/blog" className="text-sm text-neutral-400 hover:text-accent transition-colors">
            All posts →
          </Link>
        </div>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:text-accent transition-colors">
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
