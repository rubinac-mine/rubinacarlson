import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "City Blog Programme — Rubina Carlson",
  description:
    "28 city video-production blog posts written to informational intent, deliberately separated from the commercial location pages to capture search without cannibalisation.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function CityBlogProgramme() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-navy hover:text-crimson transition"
          >
            ← Rubina Carlson
          </Link>
          <a
            href={MAILTO}
            className="text-sm font-medium text-crimson hover:underline underline-offset-4"
          >
            Get in touch →
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link
          href="/work"
          className="text-sm text-navy/60 hover:text-crimson transition"
        >
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-12">
        <p className="text-sm uppercase tracking-wider text-crimson font-semibold">
          90 Seconds · June 2026 · SEO Content
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          City Blog Programme.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          28 city posts. Informational intent.{" "}
          <span className="text-crimson">
            Capturing search queries without touching the transactional pages.
          </span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="28" label="city posts, live" />
            <Metric value="2" label="intent types, deliberately separated" />
            <Metric value="0" label="cannibalisation of location pages" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
          The problem.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            90 Seconds had strong transactional location pages. Commercial
            pages targeting buyers searching for video production in specific
            cities. They were performing. The risk with adding blog content
            targeting the same cities was simple: if we were not careful, we
            would split our own authority and dilute what was already working.
          </p>
          <p>
            At the same time, there was a real opportunity. People searching
            "how much does video production cost in Singapore" or "best
            locations to film in Sydney" are not yet in buying mode. But they
            are our audience. Leaving that traffic on the table was a waste.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The approach.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Intent separation. Every city post was written to informational
            search intent, answering the research questions a buyer has before
            they are ready to engage. None of them targeted the same transactional
            keywords as the location pages.
          </p>
          <p>
            I authored all 28 posts end-to-end, along with the supporting
            infrastructure: Cloudinary hero images for each city, retitled to
            reflect informational framing, meta descriptions written to match
            the same intent distinction. Each post was published under the
            blog route, keeping the URL structure clean and separate from the
            commercial pages.
          </p>
          <p>
            The anti-cannibalisation logic was the core design decision. It
            sounds obvious in hindsight. In practice, most teams either skip
            the city blog opportunity entirely (leaving traffic behind) or do
            it without the intent layer and wonder why the location pages start
            declining.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The outcome.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            28 posts live across priority cities including Sydney, Melbourne,
            Singapore, Hong Kong, London, New York and more. Each with a
            Cloudinary hero, correct intent-separated title and meta description.
          </p>
          <p>
            The location pages retained their positions. The blog programme
            opened up a new surface for informational queries without touching
            what was already performing. Two content types, one strategy, no
            cannibalisation.
          </p>
        </div>
      </section>

      {/* Footer nav */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Link
          href="/work"
          className="text-sm font-medium text-crimson hover:underline underline-offset-4"
        >
          ← Back to all work
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center text-sm text-navy/70">
          © Rubina Carlson 2026 · Adelaide, South Australia
        </div>
      </footer>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-5xl sm:text-6xl font-bold tracking-tight text-crimson-light">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-cream/70">
        {label}
      </p>
    </div>
  );
}
