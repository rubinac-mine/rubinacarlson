import Link from "next/link";

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export function SiteHeader() {
  return (
    <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-navy hover:text-crimson transition"
        >
          Rubina Carlson
        </Link>
        <nav className="flex items-center gap-4 sm:gap-5 text-sm">
          <Link
            href="/work"
            className="text-navy/70 hover:text-crimson transition"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-navy/70 hover:text-crimson transition"
          >
            About
          </Link>
          <Link
            href="/speaking"
            className="text-navy/70 hover:text-crimson transition"
          >
            Speaking
          </Link>
          <Link
            href="/marketing-playbook"
            className="text-navy/70 hover:text-crimson transition"
          >
            Playbook
          </Link>
          <a
            href={MAILTO}
            className="font-medium text-crimson hover:underline underline-offset-4"
          >
            Get in touch →
          </a>
        </nav>
      </div>
    </header>
  );
}
