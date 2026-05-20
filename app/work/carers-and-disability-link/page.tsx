import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carers and Disability Link — Rubina Carlson",
  description:
    "End-to-end digital transformation for a regional SA non-profit. Brand, website, social and email, rebuilt as a single ecosystem.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const REFUEL_URL =
  "https://www.refuelcreative.com.au/case-studies/carers-and-disability-link-an-end-to-end-digital-transformation";

export default function CADL() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-navy hover:text-terracotta transition"
          >
            ← Rubina Carlson
          </Link>
          <a
            href={MAILTO}
            className="text-sm font-medium text-terracotta hover:underline underline-offset-4"
          >
            Get in touch →
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link
          href="/work"
          className="text-sm text-navy/60 hover:text-terracotta transition"
        >
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-12">
        <p className="text-sm uppercase tracking-wider text-terracotta font-semibold">
          Refuel Creative · 2022 – 2023
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Carers and Disability Link.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          End-to-end digital transformation for a regional SA non-profit.
          Brand, website, social and email,{" "}
          <span className="text-terracotta">rebuilt as a single ecosystem.</span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="37%" label="average email open rate" />
            <Metric value="8.4%" label="social engagement rate at month 9" />
            <Metric value="13.5K" label="social impressions, month 9" />
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
            Carers and Disability Link is a regional South Australian
            non-profit. They support carers, people with disabilities and
            seniors. The work is serious. The digital presence underselling
            them was not.
          </p>
          <p>
            The website was hard to navigate and full of broken links. Social
            posting was irregular, branding inconsistent across channels, and
            email was barely happening. Each piece on its own was a problem.
            Together they made the organisation look smaller and less
            professional than it actually was.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The approach.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            I led the work from Refuel as Digital Marketing Manager. The
            project was scoped as five connected workstreams, deliberately,
            so each one would compound the others rather than launch in
            isolation.
          </p>
          <ul className="space-y-3 list-disc list-outside ml-6 marker:text-terracotta">
            <li>
              <strong className="text-navy">Brand refresh.</strong> New
              logo, accessible colour palette, applied consistently across
              every surface.
            </li>
            <li>
              <strong className="text-navy">Website redesign.</strong>{" "}
              Modern, accessible, SEO-optimised. Designed for the people who
              actually need to find services, not a brochure layout.
            </li>
            <li>
              <strong className="text-navy">Visual content.</strong> On-site
              photo and video shoots so future posts could speak in CADL&apos;s
              own visual language instead of stock imagery.
            </li>
            <li>
              <strong className="text-navy">Social strategy.</strong> Content
              pillars, posting cadence, consistent branding. Built to be
              maintainable by a small team after handover.
            </li>
            <li>
              <strong className="text-navy">Email marketing.</strong> Monthly
              newsletter on HubSpot with drag-and-drop templates so the
              client could keep producing without us in the loop.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The outcome.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Over nine months: social impressions grew to 13,547 per month,
            engagements lifted to 1,137 a month with an 8.4% engagement rate.
            Facebook engagements lifted 2,600% in month one off a small base,
            and were still growing at 140% month-over-month nine months in.
          </p>
          <p>
            Email landed at a 37% average open rate and a 14.6%
            click-through, with the best month hitting 39% open and 24%
            click. For a non-profit audience, those are best-in-class
            benchmarks.
          </p>
          <p>
            The real measure: CADL came out of the project with a brand,
            website and channel stack that matched the seriousness of the
            work they do. Sustainable for a small in-house team to run
            without agency dependence.
          </p>
        </div>
      </section>

      {/* External link */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg text-navy/85">
            Refuel Creative hosts the full case study with screenshots from
            the new site and channels.
          </p>
          <a
            href={REFUEL_URL}
            target="_blank"
            rel="noopener"
            className="inline-block mt-6 bg-terracotta text-cream px-6 py-3 rounded-md font-medium hover:bg-terracotta-dark transition"
          >
            Read the full case study on refuelcreative.com.au ↗
          </a>
        </div>
      </section>

      {/* Footer nav */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Link
          href="/work"
          className="text-sm font-medium text-terracotta hover:underline underline-offset-4"
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
      <p className="text-5xl sm:text-6xl font-bold tracking-tight text-terracotta">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-cream/70">
        {label}
      </p>
    </div>
  );
}
