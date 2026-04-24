"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TAGLINES = [
  "No, the OptiPlex isn't dead yet.",
  "The homelab is behaving today.",
  "Cable management is on the roadmap.",
  "Yes, there's a Kubernetes cluster under my desk.",
  "Caffeinated responsibly.",
  "Coffee first, commits second.",
  "Rebuilt daily whether it needs it or not.",
  "Pushed to main. Results may vary.",
  "Currently fighting a YAML error somewhere.",
  "Statically generated on a good day.",
  "Next.js, typed strictly, reviewed loosely.",
];

export default function Footer() {
  const pathname = usePathname();
  const [tagline, setTagline] = useState<string | null>(null);

  useEffect(() => {
    setTagline(TAGLINES[Math.floor(Math.random() * TAGLINES.length)]);
  }, [pathname]);

  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="mx-auto max-w-3xl px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} Sean Patterson</span>
        <span className="italic">{tagline ?? " "}</span>
        <a
          href="mailto:slpatterson97@gmail.com"
          className="hover:text-accent transition-colors"
        >
          slpatterson97@gmail.com
        </a>
      </div>
    </footer>
  );
}
