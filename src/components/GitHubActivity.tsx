import { getRecentRepos } from "@/lib/github";

export default async function GitHubActivity() {
  const repos = await getRecentRepos();

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-sm font-medium group-hover:text-neutral-300 transition-colors">
                {repo.name}
              </span>
              {repo.language && (
                <span className="text-xs text-neutral-500 shrink-0">{repo.language}</span>
              )}
            </div>
            {repo.description && (
              <p className="mt-0.5 text-sm text-neutral-400">{repo.description}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
