export default function Navbar() {
    return (
      <nav className="border-b border-neutral-800">
        <div className="mx-auto max-w-3xl px-6 py-4 flex justify-between">
          <span className="font-semibold">Sean Patterson</span>
          <div className="space-x-6 text-sm text-neutral-400">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="https://github.com/yourusername">GitHub</a>
          </div>
        </div>
      </nav>
    );
  }