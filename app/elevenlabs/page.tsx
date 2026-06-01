import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For ElevenLabs. Rubina Carlson.",
  description:
    "Rubina Carlson in the B2B Marketing - ANZ seat at ElevenLabs. A marketer who lives inside the AI stack she would be hired to market.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "B2B Marketing ANZ - ElevenLabs";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/elevenlabs/Rubina-Carlson-CV.pdf";

export default function ElevenLabsPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For ElevenLabs
          </span>
          <a
            href={CV_PATH}
            className="text-sm font-medium text-crimson hover:underline underline-offset-4"
          >
            Download CV →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tight leading-[0.95] text-navy">
          For ElevenLabs.
        </h1>
        <p className="mt-10 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Rubina Carlson in the B2B Marketing ANZ seat.
          <br />
          <span className="text-navy/70">
            I market AI-enabled products today, and I build with AI every day.
          </span>
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/80">
          $5M in opportunities at 90 Seconds since June 2024 across
          inbound, paid, ABM, lifecycle, partner and field. HubSpot
          Customer Agent shipped and live in production. 90Labs
          sales-enablement platform built solo in Replit, with a Pitch
          Builder in beta with the global sales team. Ten years building
          Digital Adelaide from 40 marketers to over 200 delegates.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={CV_PATH}
            className="inline-block bg-crimson text-cream px-6 py-3 rounded-md font-medium hover:bg-crimson-dark transition"
          >
            Download CV
          </a>
          <a
            href={MAILTO}
            className="inline-block border border-navy text-navy px-6 py-3 rounded-md font-medium hover:bg-navy hover:text-cream transition"
          >
            Email me
          </a>
        </div>
      </section>

      {/* Section 2 - Three pillars */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
            Why I am the right hire for the ANZ seat.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, hands-on.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling in Replit, Claude
                Code and the Anthropic API. I market AI-enabled products at 90
                Seconds and I build with AI daily. The stack ElevenLabs
                customers are buying is the stack I already live in.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                $5M in opportunities, full-funnel.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Generated $5M in opportunities at 90 Seconds since June
                2024 across inbound, paid, ABM, lifecycle, partner and
                field. Brief a regional ABM programme in the morning,
                write the lifecycle copy in the afternoon, run the field
                event the next week.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Events and ABM at enterprise tier.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Ten years as a Director of Digital Adelaide, grown from
                40 marketers to over 200 delegates. End-to-end events,
                sponsor sales, speaker programmes. 3.8x over MQL target
                on an executive-audience ABM programme at the University
                of South Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Build receipts */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          Build receipts.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          A short tour of the AI tooling I have shipped from the marketing
          seat at 90 Seconds.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="90Labs"
            tagline="Sales-enablement platform built in Replit."
            body="Designed and built solo via Replit, with Claude and Claude Code doing the engineering under my prompts. Hosts 29+ active assets and a Pitch Builder tool. The Pitch Builder is in beta rollout with the global sales team. Initial signals promising."
          />
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="AI in production marketing, with real customer load."
            body="Configured and shipped HubSpot's AI Customer Agent at 90 Seconds. Live, handling incoming customer service queries with AI-led triage. Vendor AI capability moved into a live workflow, with the change management to make it stick."
          />
          <BuildCard
            title="GTM OS"
            tagline="Market mapping with CRM and SEO data."
            body="Internal AI operations platform architected by our VP of Product. Integrates HubSpot and SEMrush data to automate market mapping and content coverage analysis. I own the marketing logic and content layer: prompting, scoring criteria, workflow refinement."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages from the legacy 90 Seconds site to the new multilingual site. Built an AI-scored content inventory and an automated migrator on the Anthropic API. Pages crawled, classified, scored and migrated by agents."
          />
        </div>
      </section>

      {/* Section 4 - First 90 days */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            A sketch of the first 90 days.
          </h2>
          <p className="text-lg text-cream/70 mb-14 max-w-2xl">
            Written before knowing the internal context. Treat as direction,
            not commitment.
          </p>
          <div className="grid gap-12 md:grid-cols-3">
            <DayBlock
              range="Days 1 to 30"
              heading="Listen and inventory."
              body="Spend the first month with the Growth team, ANZ Sales, the global demand engine and any in-market partners. Map the existing ANZ pipeline, named accounts, partner ecosystem and event calendar. Audit which global campaigns can be lifted into ANZ as-is and what needs regional adaptation. Document the ElevenLabs buyer across ElevenAgents, ElevenCreative and ElevenAPI from inside the room, not from the JD."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Pick three plays."
              body="Three regional plays that compound. First guesses, subject to inventory: an outbound sequence at enterprise content and CX leaders for ElevenAgents, an ABM motion on a named-account list for ElevenCreative with a category-defining creative wedge, and an ANZ developer event series for ElevenAPI co-marketed with a regional cloud partner. Stand each up with a measurement frame against pipeline."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First outbound sequence in market. First ABM cohort in flight. First developer event live. First pipeline read into the Growth team with marketing-sourced and marketing-influenced breakdown. Lessons documented; second wave teed up."
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Credentials strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm text-navy/85">
          <Credential text="15+ years of marketing experience" />
          <Credential text="Certified Practising Marketer, AMI" />
          <Credential text="2023 HubSpot Impact Award, Platform Excellence (172% lead lift)" />
          <Credential text="Director, Digital Adelaide (40 to 200+ delegates over 10 years)" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* Section 6 - The full pitch */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-12">
            The full pitch.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              15+ years of marketing experience. Certified Practising
              Marketer. Today Head of Marketing at 90 Seconds, a global
              B2B SaaS video platform. Two direct reports in APAC. Daily
              collaboration with sales and marketing counterparts across
              the US, UK and EMEA. Since June 2024 I have generated $5M
              in opportunities through inbound, paid, ABM, lifecycle,
              partner and field.
            </p>
            <p>
              Three parts of my work map straight onto the ANZ brief.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, hands-on.
            </h3>
            <p>
              I have spent the past two years building practical AI
              tooling in Replit, Claude Code and the Anthropic API. I
              built 90Labs, a sales-enablement workspace hosting 29+
              assets, with a custom Pitch Builder in beta rollout to the
              global sales team. I configured and shipped the HubSpot
              Customer Agent, now handling incoming customer service
              queries with AI in production. I designed the 300+ page
              website migration system on the Anthropic API, with rollout
              in flight. Working with our VP of Product I contribute to
              the internal GTM operations platform he architected, which
              integrates HubSpot and SEMrush data to automate market
              mapping. My lane is problem framing and rapid prototyping
              with AI, not deep engineering. ElevenLabs sells voice AI.
              The stack the team recommends to customers is the stack I
              already live in.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Full-funnel ANZ pipeline.
            </h3>
            <p>
              My day at 90 Seconds spans full-funnel. Brief and ship a
              regional ABM programme in the morning. Write the lifecycle
              copy in the afternoon. Run the field event the next week.
              $5M in opportunities since June 2024 across inbound, paid,
              ABM, lifecycle, partner and field. No-fixed-function by
              necessity, by choice, and by the size of the brief.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Events, outbound and partnerships at the enterprise tier.
            </h3>
            <p>
              Ten years as a Director of Digital Adelaide, South
              Australia&apos;s largest marketing conference, grown from
              about 40 marketers to over 200 delegates. End-to-end
              event delivery, sponsor sales and speaker programmes.
              3.8x over MQL target on an executive-audience ABM
              programme at the University of South Australia. 172%
              lead lift for an industrial B2B SaaS client through a
              HubSpot platform rebuild that won the 2023 HubSpot
              Impact Award for Platform Excellence. Fluent in MSAs,
              regional supplier agreements and Statements of Work
              through enterprise customer work at 90 Seconds.
            </p>

            <p>
              Happy to talk about the first 90 days of the ANZ plan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6.5 - On the location */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
          On the location.
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-navy/85">
          <p>
            I am Adelaide-based, remote-friendly, Australian citizen.
            The JD prefers Sydney 3+ days a week with Melbourne as the
            travel-frequent backup. I would be asking for a remote-AU
            exception, with travel for the moments that matter: Sydney
            customer days, ANZ conferences, partner events, team
            offsites.
          </p>
          <p>
            The trade is the AI-builder profile above. Career B2B
            marketers are still learning to prompt. I have spent two
            years inside the stack ElevenLabs customers are buying.
          </p>
        </div>
      </section>

      {/* Section 7 - Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
          Let&apos;s talk about the first 90 days.
        </h2>
        <ul className="space-y-3 text-lg text-navy/85 mb-12">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-crimson underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </li>
          <li>0434 617 672</li>
          <li>
            <a
              href="https://www.linkedin.com/in/rubinacarlson"
              target="_blank"
              rel="noopener"
              className="hover:text-crimson underline-offset-4 hover:underline"
            >
              linkedin.com/in/rubinacarlson
            </a>
          </li>
          <li className="text-navy/60 text-base">
            Adelaide, South Australia. Remote-friendly. Australian citizen.
          </li>
        </ul>
        <a
          href={MAILTO}
          className="inline-block bg-crimson text-cream px-8 py-4 rounded-md font-medium hover:bg-crimson-dark transition"
        >
          Email me about ElevenLabs
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center">
          <p className="font-caveat text-2xl text-navy/70">
            Built in an evening with Claude Code. © Rubina Carlson 2026.
          </p>
        </div>
      </footer>
    </main>
  );
}

function BuildCard({
  title,
  tagline,
  body,
}: {
  title: string;
  tagline: string;
  body: string;
}) {
  return (
    <div className="border border-navy/15 bg-cream rounded-lg p-8 hover:border-crimson/50 transition">
      <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
      <p className="text-crimson italic mb-4">{tagline}</p>
      <p className="text-navy/80 leading-relaxed">{body}</p>
    </div>
  );
}

function DayBlock({
  range,
  heading,
  body,
}: {
  range: string;
  heading: string;
  body: string;
}) {
  return (
    <div>
      <p className="text-crimson-light font-semibold tracking-wide uppercase text-xs mb-3">
        {range}
      </p>
      <h3 className="text-xl font-semibold mb-4">{heading}</h3>
      <p className="text-cream/85 leading-relaxed">{body}</p>
    </div>
  );
}

function Credential({ text }: { text: string }) {
  return (
    <li className="border-l-2 border-crimson pl-4 leading-snug">{text}</li>
  );
}
