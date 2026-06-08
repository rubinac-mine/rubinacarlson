import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Q2 Nurture + EOFY Emails — Rubina Carlson",
  description:
    "End-to-end email programme for enterprise marketing leaders at 90 Seconds: 8 fortnightly nurture emails, HubSpot workflow, Tier-0 targeting, and EOFY campaign.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function Q2Nurture() {
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
          90 Seconds · April – June 2026 · HubSpot Email
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Q2 Nurture +{" "}
          <span className="block">EOFY Emails.</span>
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          A full email programme for enterprise marketing leaders.{" "}
          <span className="text-crimson">
            Copy, visuals, HubSpot workflow and targeting. End-to-end.
          </span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="8" label="nurture emails, fortnightly cadence" />
            <Metric value="Tier-0" label="Tier-0 market targeting + suppression" />
            <Metric value="EOFY" label="campaign + enrolment broadcast" />
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
            90 Seconds had no structured nurture programme for enterprise
            prospects. The buying cycle is long, sometimes months or more,
            and without a reason to stay in contact, warm leads went cold.
            We were investing in demand generation but had no systematic way
            to hold the relationship while prospects were still deciding.
          </p>
          <p>
            Q2 2026 was also the first major campaign period on the new site.
            We needed a lifecycle programme ready to run alongside it, plus
            dedicated campaign emails for EOFY and an upcoming enrolment
            webinar.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The approach.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            I built the programme from scratch: copy, design brief, HubSpot
            setup and targeting logic. Everything.
          </p>

          <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
            Q2 nurture sequence
          </h3>
          <p>
            Eight "Our Thinking" emails targeting enterprise marketing leaders,
            sent fortnightly. Each email leads with a useful idea, not a
            product push. The editorial angle reflects how senior marketers
            think about brand, production quality, and the content formats that
            move buyers.
          </p>
          <ul className="space-y-3 list-disc list-outside ml-6 marker:text-crimson">
            <li>
              <strong className="text-navy">HubSpot workflow setup.</strong>{" "}
              Contact-based enrolment with Tier-0 market targeting (US, UK,
              AU, SG, HK, NZ), persona refinements, and a suppression list
              covering current customers, open deals, recently-lost contacts
              and unsubscribes.
            </li>
            <li>
              <strong className="text-navy">CAN-SPAM compliance.</strong> Full
              merge-tag footer, office location, unsubscribe and legal
              fine-print across all eight emails. Built to the HubSpot template
              contract so the sequence loads correctly.
            </li>
            <li>
              <strong className="text-navy">Renders delivered.</strong> PNG
              previews of every email so the team could review how each would
              display before anything went live.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
            EOFY 2026 campaign
          </h3>
          <p>
            Standalone campaign emails and a hero asset scoped to the ANZ
            market. ANZ-specific offer mechanics, commit-by-30-June
            call-to-action, Cloudinary-hosted hero on a versioned URL, and
            CTA routed to the{" "}
            <code className="text-sm bg-navy/5 px-1 rounded">/get-started/</code>{" "}
            form rather than a mailto.
          </p>

          <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
            Enrolment webinar programme
          </h3>
          <p>
            Broadcast invite email plus six sales templates: three outreach,
            one bump, two post-event. Designed so a sales rep could run a
            personalised outreach programme for the webinar without starting
            from a blank page.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The outcome.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            The Q2 nurture sequence went into HubSpot ready to send. Copy
            locked, renders delivered, workflow documented so the team could
            build the sequence in one sitting rather than piecing it together
            across multiple sessions.
          </p>
          <p>
            The EOFY campaign launched with all assets in place and compliant
            across jurisdictions. The enrolment webinar had a full outreach kit
            the sales team could pick up and use immediately.
          </p>
          <p>
            For the first time, 90 Seconds had a structured lifecycle
            programme. Not a collection of one-off sends. A coherent
            reason to stay in contact with enterprise prospects across the
            full buying cycle.
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
      <p className="text-4xl sm:text-5xl font-bold tracking-tight text-crimson-light">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-cream/70">
        {label}
      </p>
    </div>
  );
}
