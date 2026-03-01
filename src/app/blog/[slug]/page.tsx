import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx-components";
import BlogPostLayout from "@/components/BlogPostLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const url = `https://yourdomain.com/blog/${slug}`; // replace later

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      url,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <BlogPostLayout title={post.meta.title}>
      <p style={{ opacity: 0.6, marginBottom: "2rem" }}>
        {post.meta.date}
      </p>

      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
            mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, {theme: "github-dark"}]],
            },
        }}
      />
    </BlogPostLayout>
  );
}