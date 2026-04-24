"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrolling(false), 150);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className={`flex gap-6 px-6 py-2.5 rounded-full border backdrop-blur-sm text-sm text-neutral-400 pointer-events-auto transition-all duration-300 ${
        scrolling
          ? "bg-neutral-900/90 border-neutral-700 shadow-lg shadow-black/40"
          : "bg-neutral-900/80 border-neutral-800"
      }`}>
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <a href="https://github.com/Czarke" className="hover:text-accent transition-colors">GitHub</a>
      </div>
    </nav>
  );
}

