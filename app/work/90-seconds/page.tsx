import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "90 Seconds — Rubina Carlson",
  description:
    "Head of Marketing at 90 Seconds since December 2023. Leading the global marketing function from APAC — brand, website, pipeline, and AI builds.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function NinetySeconds() {
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
          Head of Marketing · December 2023 – Present · Global
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          90 Seconds.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Leading the global marketing function from APAC.{" "}
          <span className="text-crimson">
            New brand, new website, $5M in pipeline — and a stack of AI builds
            alongside.
          </span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="$5M" label="pipeline opportunities since June 2024" />
            <Metric value="300+" label="pages migrated via AI agents" />
            <Metric value="2 months" label="brand and website delivered" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
          The role.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            90 Seconds is a global video creation platform — enterprise brands
            use it to brief, produce and deliver video at scale across more than
            160 countries. I joined as Head of Marketing in December 2023,
            reporting to the CEO and sitting on the Leadership Team.
          </p>
          <p>
            The team is APAC-based. The scope is global — go-to-market across
            the US, UK, APAC and EMEA, partnering with sales counterparts in
            each market. Two direct reports, both in APAC.
          </p>
          <p>
            Full spectrum: brand, website, SEO, content, email, paid, ABM,
            lifecycle, field, and the AI builds that run across all of it.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Brand and website — first two months.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Delivered a new brand and a new multilingual website within the
            first two months in the role. Led the marketing and design teams
            through the build. The site went live in early 2024 as the
            foundation for everything that followed.
          </p>
          <p>
            In 2026, the site was rebuilt again — this time as a full React
            build, 100% vibe-coded with Claude Code and Replit. The legacy
            WordPress content (300+ pages) was migrated using an AI-scored
            content inventory and a fleet of Anthropic-API agents that crawled,
            classified, scored and migrated pages automatically. Compressed what
            would have been a multi-month manual migration into a matter of
            weeks.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Pipeline.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Generated{" "}
            <span className="text-crimson font-semibold">
              $5M in pipeline opportunities
            </span>{" "}
            since June 2024 through inbound, paid, ABM, lifecycle and field.
            That number spans all channels — not attributed to a single
            campaign or build.
          </p>
          <p>
            The programmes behind it: SEO and content build-out across 90+
            location and service pages, a Q2 2026 enterprise nurture sequence
            (8 emails, Tier-0 market targeting), paid and ABM work across the
            US and UK, and lifecycle flows rebuilt from the ground up in
            HubSpot.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          AI builds.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Alongside the core marketing work, a run of AI builds shipped from
            the marketing seat.
          </p>
          <ul className="space-y-3 list-disc list-outside ml-6 marker:text-crimson">
            <li>
              <strong className="text-navy">
                <Link
                  href="/work/scout"
                  className="hover:text-crimson underline-offset-2 hover:underline"
                >
                  Scout — HubSpot Customer Agent.
                </Link>
              </strong>{" "}
              Configured the 90 Seconds AI chat agent from scratch — tone,
              scripted responses, guardrails, custom instructions. Live on
              90seconds.com.
            </li>
            <li>
              <strong className="text-navy">
                <Link
                  href="/work/web-attribution"
                  className="hover:text-crimson underline-offset-2 hover:underline"
                >
                  Web Attribution.
                </Link>
              </strong>{" "}
              Built full-funnel attribution from zero — GTM container, GA4, PostHog
              identify on every form submission, HubSpot sync.
            </li>
            <li>
              <strong className="text-navy">90Labs.</strong> Sales-enablement
              workspace in Replit. 29+ assets, Pitch Builder in beta with the
              global sales team.
            </li>
            <li>
              <strong className="text-navy">GTM OS.</strong> Contributed to an
              internal operations platform alongside our VP of Product — joining
              CRM and SEO data to automate market mapping and content coverage
              analysis.
            </li>
            <li>
              <strong className="text-navy">
                <Link
                  href="/work/city-blog-programme"
                  className="hover:text-crimson underline-offset-2 hover:underline"
                >
                  City Blog Programme.
                </Link>
              </strong>{" "}
              28 city posts written to informational intent, separated from the
              transactional location pages by design.
            </li>
            <li>
              <strong className="text-navy">
                <Link
                  href="/work/q2-nurture"
                  className="hover:text-crimson underline-offset-2 hover:underline"
                >
                  Q2 Nurture + EOFY Emails.
                </Link>
              </strong>{" "}
              End-to-end email programme — 8 nurture emails, HubSpot workflow,
              Tier-0 targeting, suppression list, plus EOFY campaign.
            </li>
          </ul>
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
