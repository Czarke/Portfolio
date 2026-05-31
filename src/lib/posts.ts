import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Section = "blog" | "personal";

const contentRoot = path.join(process.cwd(), "content");

const sectionDir = (section: Section) => path.join(contentRoot, section);

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

export function getAllPosts(section: Section): PostMeta[] {
  const dir = sectionDir(section);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(dir, file);
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

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(section: Section, slug: string): Post {
  const fullPath = path.join(sectionDir(section), `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    content,
    meta: frontmatter,
  };
}

export function getAllSlugs(section: Section): { slug: string }[] {
  const dir = sectionDir(section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}
