import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "90 Seconds — Rubina Carlson",
  description:
    "Head of Marketing at 90 Seconds since December 2023. Leading the global marketing function from APAC across brand, website, pipeline, and AI builds.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function NinetySeconds() {
  return (
    <main className="flex-1">
      <SiteHeader />

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
            New brand, new website, $5M in pipeline. And a stack of AI builds
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
            90 Seconds is a global video creation platform. Enterprise brands
            use it to brief, produce and deliver video at scale across more than
            160 countries. I joined as Head of Marketing in December 2023,
            reporting to the CEO and sitting on the Leadership Team.
          </p>
          <p>
            The team is APAC-based. The scope is global. Go-to-market across
            the US, UK, APAC and EMEA, partnering with sales counterparts in
            each market. Two direct reports, both in APAC.
          </p>
          <p>
            Full spectrum: brand, website, SEO, content, email, paid, ABM,
            lifecycle, field, and the AI builds that run across all of it.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Brand and website: first two months.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Delivered a new brand and a new multilingual website within the
            first two months in the role. Led the marketing and design teams
            through the build. The site went live in early 2024 as the
            foundation for everything that followed.
          </p>
          <p>
            In 2026, the site was rebuilt again. This time as a full React
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
            That number spans all channels. Not attributed to a single
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
                  Scout: HubSpot Customer Agent.
                </Link>
              </strong>{" "}
              Configured the 90 Seconds AI chat agent from scratch: tone,
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
              Built full-funnel attribution from zero: GTM container, GA4, PostHog
              identify on every form submission, HubSpot sync.
            </li>
            <li>
              <strong className="text-navy">90Labs.</strong> Sales-enablement
              workspace in Replit. 29+ assets, Pitch Builder in beta with the
              global sales team.
            </li>
            <li>
              <strong className="text-navy">GTM OS.</strong> Contributed to an
              internal operations platform alongside our VP of Product, joining
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
              End-to-end email programme: 8 nurture emails, HubSpot workflow,
              Tier-0 targeting, suppression list, plus EOFY campaign.
            </li>
          </ul>
        </div>
      </section>

      {/* Receipts */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            Receipts.
          </h2>
          <p className="text-lg text-navy/70 mb-12 max-w-2xl">
            A short tour of the website rebuild, city pages, and the 90Labs
            sales-enablement workspace.
          </p>

          <ScreenshotGroup label="Website: before and after">
            <Screenshot
              src="/work/90-seconds/website-old.png"
              alt="The previous 90 Seconds website."
              caption="Before. The legacy WordPress site I inherited."
            />
            <Screenshot
              src="/work/90-seconds/website-new.png"
              alt="The new 90 Seconds website."
              caption="After. React rebuild, vibe-coded with Claude Code and Replit."
            />
          </ScreenshotGroup>

          <ScreenshotGroup label="City pages, served from the location framework">
            <Screenshot
              src="/work/90-seconds/website-sydney.png"
              alt="The 90 Seconds Sydney location page."
              caption="Sydney. One of 90+ location and service pages built out from the framework."
            />
            <Screenshot
              src="/work/90-seconds/website-singapore.png"
              alt="The 90 Seconds Singapore location page."
              caption="Singapore. Same framework, market-adapted copy."
            />
          </ScreenshotGroup>

          <ScreenshotGroup label="90Labs: Pitch Builder">
            <Screenshot
              src="/work/90-seconds/90labs-pitch-builder-home.png"
              alt="The 90Labs Pitch Builder homepage."
              caption="Pitch Builder homepage. The marquee tool inside 90Labs."
            />
            <Screenshot
              src="/work/90-seconds/90labs-pitch-builder-action.png"
              alt="The 90Labs Pitch Builder mid-pitch."
              caption="Pitch Builder mid-flow. Composing a tailored pitch in minutes, not hours."
            />
          </ScreenshotGroup>
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

function ScreenshotGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 last:mb-0">
      <p className="text-xs uppercase tracking-wider font-semibold text-crimson mb-4">
        {label}
      </p>
      <div className="grid gap-6 md:grid-cols-2">{children}</div>
    </div>
  );
}

function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-navy/15 bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="text-sm text-navy/70 mt-3 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
