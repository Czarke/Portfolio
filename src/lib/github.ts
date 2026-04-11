export type Repo = {
    name: string;
    description: string | null;
    url: string;
    language: string | null;
    stars: number;
  };
  
  export type ContributionDay = {
    date: string;
    count: number;
  };
  
  export type ContributionWeek = {
    days: ContributionDay[];
  };
  
  export async function getRecentRepos(): Promise<Repo[]> {
    const res = await fetch(
      "https://api.github.com/users/Czarke/repos?sort=updated&per_page=5",
      {
        headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
        next: { revalidate: 3600 },
      }
    );
    const data = await res.json();
    return data.map((r: any) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      language: r.language,
      stars: r.stargazers_count,
    }));
  }
  
  export async function getContributionCalendar(): Promise<ContributionWeek[]> {
    const query = `{
      user(login: "Czarke") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }`;
  
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });
  
    const json = await res.json();
    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
    return weeks.map((week: any) => ({
      days: week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
      })),
    }));
  }
  