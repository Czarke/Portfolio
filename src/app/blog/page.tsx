import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}