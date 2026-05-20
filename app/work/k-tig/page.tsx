import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "K-TIG — Rubina Carlson",
  description:
    "Comprehensive HubSpot rebuild for an aerospace and defence welding manufacturer. 172% lead lift in three months. HubSpot Impact Award winner, 2023.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const REFUEL_URL =
  "https://www.refuelcreative.com.au/case-studies/k-tig-a-comprehensive-hubspot-rebuild";

export default function KTig() {
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
          Refuel Creative · 2023 · HubSpot Impact Award winner
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          K-TIG.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          A comprehensive HubSpot rebuild for an aerospace and defence
          welding manufacturer.{" "}
          <span className="text-terracotta">172% lead lift in three months.</span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="172%" label="increase in website leads, 3 months" />
            <Metric value="45%" label="increase in website traffic, 3 months" />
            <Metric value="1.5x" label="session-to-contact rate, 2 months" />
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
            K-TIG sold advanced keyhole welding systems into aerospace,
            defence and heavy industry. They had every HubSpot hub they could
            buy (Sales, Marketing, Service, CMS) and almost no strategy
            underneath. Every deal funnelled to a single rep. Data entry was
            ad hoc. Reporting was vibes. Marketing leads sat in inboxes
            instead of pipelines.
          </p>
          <p>
            The investment was real. The return was invisible. They needed
            someone to come in and rebuild the thing for the way they
            actually sold.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The approach.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            I led the rebuild from the Refuel side as Digital Marketing
            Manager, with a team of four. Five workstreams ran in parallel.
          </p>
          <ul className="space-y-3 list-disc list-outside ml-6 marker:text-terracotta">
            <li>
              <strong className="text-navy">Data hygiene.</strong> Stripped
              the obvious mess. 132 duplicate properties removed.
            </li>
            <li>
              <strong className="text-navy">Sales pipeline redesign.</strong>{" "}
              Clear lifecycle stages, automated deal creation, marketing
              leads auto-allocated to the right rep instead of dying in one
              inbox.
            </li>
            <li>
              <strong className="text-navy">Knowledge base and service.</strong>{" "}
              Multi-tier access for public, prospect, customer, distributor
              and internal users. AI chatbot for 24/7 first-line support.
            </li>
            <li>
              <strong className="text-navy">Marketing hub overhaul.</strong>{" "}
              New landing pages with content offers, automated lead scoring
              and segmentation, paid and social tracking joined up to the
              CRM.
            </li>
            <li>
              <strong className="text-navy">Reporting infrastructure.</strong>{" "}
              307 custom reports across 17 dashboards. The leadership team
              could finally see pipeline health, conversion rates and
              attribution without asking three people to export to Excel.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The outcome.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            172% increase in website leads in three months. 45% lift in
            traffic over the same window. Session-to-contact rate up 1.5x.
            Form submissions running at 40+ a month against a baseline of
            close to nothing meaningful.
          </p>
          <p>
            The work won the HubSpot Impact Award for Platform Excellence in
            2023. More importantly, K-TIG could forecast sales for the first
            time, and their marketing investment finally had a number next
            to it.
          </p>
        </div>
      </section>

      {/* External link */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg text-navy/85">
            Refuel Creative hosts the full case study with screenshots and
            client quotes.
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
