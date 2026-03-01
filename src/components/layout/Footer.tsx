export default function Footer() {
    return (
      <footer className="border-t border-neutral-800 mt-24">
        <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Sean Patterson
        </div>
      </footer>
    );
  }