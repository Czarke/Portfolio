"use client";

import { useState, useEffect } from "react";
import type { ContributionWeek } from "@/lib/github";

function cellColor(count: number): string {
  if (count === 0) return "bg-neutral-800";
  if (count <= 3) return "bg-green-900";
  if (count <= 6) return "bg-green-700";
  if (count <= 9) return "bg-green-500";
  return "bg-green-400";
}

type Tooltip = {
  text: string;
  x: number;
  y: number;
} | null;

export default function ContributionGraphClient() {
  const [weeks, setWeeks] = useState<ContributionWeek[] | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip>(null);

  useEffect(() => {
    fetch("/api/contributions")
      .then((res) => res.json())
      .then((data) => setWeeks(data))
      .catch((err) => {
        console.error("Failed to fetch contributions:", err);
        setWeeks([]);
      });
  }, []);

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>, text: string) {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      text,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  }

  function handleMouseLeave() {
    setTooltip(null);
  }

  if (weeks === null) return <div className="text-sm text-neutral-500">Loading contributions...</div>;

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex gap-[3px]" style={{ width: "max-content" }}>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.days.map((day, di) => (
                <div
                  key={di}
                  className={`w-[10px] h-[10px] rounded-sm cursor-default ${cellColor(day.count)}`}
                  onMouseEnter={(e) =>
                    handleMouseEnter(
                      e,
                      `${day.date} · ${day.count} contribution${day.count !== 1 ? "s" : ""}`
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full bg-neutral-800 text-neutral-100 text-[11px] px-2 py-1 rounded whitespace-nowrap"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}
