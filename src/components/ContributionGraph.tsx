import { getContributionCalendar } from "@/lib/github";

function cellColor(count: number): string {
  if (count === 0) return "bg-neutral-800";
  if (count <= 3) return "bg-green-900";
  if (count <= 6) return "bg-green-700";
  if (count <= 9) return "bg-green-500";
  return "bg-green-400";
}

export default async function ContributionGraph() {
  const weeks = await getContributionCalendar();

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Contributions</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-[3px]" style={{ width: "max-content" }}>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.days.map((day, di) => (
                <div
                    key={di}
                    data-date={`${day.date} · ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                    className={`contribution-cell w-[10px] h-[10px] rounded-sm ${cellColor(day.count)}`}
                />
              
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
