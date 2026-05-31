import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts("blog");
  const personalPosts = getAllPosts("personal");

  const blogEntries = blogPosts.map((post) => ({
    url: `https://seanpatterson.me/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const personalEntries = personalPosts.map((post) => ({
    url: `https://seanpatterson.me/personal/${post.slug}`,
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
    {
      url: "https://seanpatterson.me/personal",
      lastModified: new Date(),
    },
    ...blogEntries,
    ...personalEntries,
  ];
}
