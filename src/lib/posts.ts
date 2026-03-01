import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type Frontmatter = {
  title: string;
  date: string;
  description: string;
};

export type PostMeta = Frontmatter & {
  slug: string;
};

export type Post = {
  slug: string;
  content: string;
  meta: Frontmatter;
};
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);
    const frontmatter = data as Frontmatter;

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      description: frontmatter.description,
    };
  });

  // Sort newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    content,
    meta: frontmatter,
  };
}

export function getAllSlugs(): { slug: string }[] {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}