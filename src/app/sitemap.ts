import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries = posts.map((post) => ({
    url: `https://seanpatterson.me/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://seanpatterson.me",
      lastModified: new Date(),
    },
    {
      url: "https://seanpatterson.me/blog",
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
