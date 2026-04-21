import { NextResponse } from "next/server";

export async function GET() {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });
    }

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
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
    });

    const json = await res.json();

    if (json.errors || !json?.data?.user) {
        return NextResponse.json({ error: "GitHub API error", detail: json }, { status: 500 });
    }

    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
    return NextResponse.json(weeks.map((week: any) => ({
        days: week.contributionDays.map((day: any) => ({
            date: day.date,
            count: day.contributionCount,
        })),
    })));
}
