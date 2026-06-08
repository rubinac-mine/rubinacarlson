import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Attribution — Rubina Carlson",
  description:
    "Built full-funnel attribution for 90 Seconds from zero — GTM container, GA4, PostHog identify, HubSpot sync. Every visitor tracked from first touch to CRM.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function WebAttribution() {
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
          90 Seconds · May 2026 · GTM · GA4 · PostHog · HubSpot
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Web Attribution.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Built the full attribution stack for 90 Seconds from zero.{" "}
          <span className="text-crimson">
            Every visitor identified, tracked and tied to a contact in HubSpot.
          </span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="GTM → GA4" label="SPA page views tracked" />
            <Metric value="PostHog" label="visitor identified at form submit" />
            <Metric value="HubSpot" label="contact synced end-to-end" />
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
            When I joined 90 Seconds, we had no reliable way to know where
            pipeline came from. The site had some tracking in place, but it was
            inconsistent — pixels firing twice, SPA navigation not registering
            as page views, form submissions not connecting an anonymous visitor
            to a HubSpot contact.
          </p>
          <p>
            That made attribution guesswork. We were investing in paid, SEO,
            email and events — and could not say with confidence what was
            working. Going into go-live on the new React site, this had to be
            fixed properly.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The approach.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            I built the attribution stack end-to-end. This was my initiative —
            I scoped, designed and shipped it.
          </p>
          <ul className="space-y-3 list-disc list-outside ml-6 marker:text-crimson">
            <li>
              <strong className="text-navy">GTM container.</strong> Set up the
              container from scratch. Moved the runtime config out of
              environment variables and into a{" "}
              <code className="text-sm bg-navy/5 px-1 rounded">
                system_settings
              </code>{" "}
              table with an admin UI — so tracking IDs could be updated
              without a deploy.
            </li>
            <li>
              <strong className="text-navy">SPA page view tracking.</strong>{" "}
              The new site is a React single-page app. Without explicit
              instrumentation, GA4 only sees the initial load. I wired
              route-change events to push{" "}
              <code className="text-sm bg-navy/5 px-1 rounded">page_view</code>{" "}
              to the dataLayer on every navigation — so GA4 sees the full
              journey.
            </li>
            <li>
              <strong className="text-navy">PostHog identify.</strong> On
              every HubSpot form submission, I fire a PostHog{" "}
              <code className="text-sm bg-navy/5 px-1 rounded">identify</code>{" "}
              call with the submitter&apos;s email. That stitches the anonymous
              visitor session to a known person — so PostHog&apos;s person
              timeline becomes a real attribution record from first click to
              form fill.
            </li>
            <li>
              <strong className="text-navy">Pixel audit.</strong> Found and
              removed a double-firing pixel that had been inflating event
              counts. Deduplication matters more than adding more tags.
            </li>
            <li>
              <strong className="text-navy">HubSpot sync.</strong> Confirmed
              the form-to-contact flow was clean — submissions creating or
              updating contacts in HubSpot with correct attribution fields.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The outcome.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            We launched the new 90seconds.com with a clean, end-to-end
            attribution stack. Visitors are tracked across the full SPA journey
            in GA4. Form submitters are identified in PostHog and tied to
            HubSpot contacts. Channel and campaign data flows through
            consistently.
          </p>
          <p>
            For the first time, we can look at a deal in HubSpot and trace it
            back through the marketing touchpoints that influenced it. That is
            what attribution is supposed to do.
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
      <p className="text-3xl sm:text-4xl font-bold tracking-tight text-crimson-light">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-cream/70">
        {label}
      </p>
    </div>
  );
}
