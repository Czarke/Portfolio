import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-4 text-neutral-400">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-block mt-6 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
      >
        ← Back home
      </Link>
    </Container>
  );
}
