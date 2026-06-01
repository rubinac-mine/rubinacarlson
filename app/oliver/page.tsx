import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For OLIVER. Rubina Carlson.",
  description:
    "Rubina Carlson on the Director, Marketing Technology & Gen-AI Solutions (APAC) role at OLIVER. A marketer who builds the AI she would otherwise be asking someone else to deploy.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT =
  "Director, Marketing Technology & Gen-AI Solutions (APAC) - OLIVER";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/oliver/Rubina-Carlson-CV.pdf";

export default function OliverPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For OLIVER
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
          For OLIVER.
        </h1>
        <p className="mt-10 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Rubina Carlson on the Director, Marketing Technology &amp; Gen-AI
          Solutions (APAC) seat.
          <br />
          <span className="text-navy/70">
            A marketer who builds the AI she would otherwise be asking someone
            else to deploy.
          </span>
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/80">
          The Greenhouse form is comprehensive, but it does not leave much room
          to show how I work. So I built this page. Treat it as a working
          sample: tailored, on-brand, shipped fast, using the Anthropic tools
          the practice would deploy for clients.
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
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
            Why I am the right APAC Director for this practice.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, hands-on.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling in Replit, Claude Code
                and the Anthropic API. The JD asks for hands-on builders who
                actively prototype with AI-native tooling. That is what I do
                every week, from the marketing seat, not in a slide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                APAC marketing leadership.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                I run the APAC marketing function at 90 Seconds today.
                Regional pipeline, adaptation of global programmes, sales
                partnership, daily liaison with the global function. Ready to
                bring that operating rhythm to a multi-client portfolio.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Marketing transformation, operationalised.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                $5M in opportunities since June 2024. 172% lead lift through a
                HubSpot platform rebuild (2023 HubSpot Impact Award). HubSpot
                Customer Agent live in production. The pattern of
                operationalising new AI into a marketing function is the work
                this practice does for clients.
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
          seat. Internal stakeholders treated as the client throughout.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="90Labs"
            tagline="Live sales-enablement platform built in Replit."
            body="Workspace hosts 29+ active assets used by the field team. The custom Pitch Builder, the marquee tool inside it, is currently in beta rollout with the global 90 Seconds sales team. Built and maintained by me from the marketing seat, with the design team for the visual layer. Early users report time-to-pitch dropping from hours to closer to 30 minutes."
          />
          <BuildCard
            title="GTM OS"
            tagline="Internal go-to-market operations platform."
            body="Integrates CRM and SEMrush data to automate market mapping and content coverage analysis. Architected in partnership with our VP of Product. I owned the problem framing and the marketing logic; he owned the engineering."
          />
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="Off-the-shelf AI deployed into a marketing function."
            body="Configured and shipped the HubSpot Customer Agent for 90 Seconds. Now handles incoming customer service queries with AI in production. The pattern is exactly what OLIVER deploys for clients: an off-the-shelf AI capability integrated into a live marketing workflow, with the change management to make it stick."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages from the legacy 90 Seconds site to the new multilingual site. Used an AI-scored content inventory and an automated migrator instead of doing it by hand. Anthropic API agents in the pipeline."
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
              body="Spend the first month with the APAC client portfolio leads, the GenAI Solutions practice team, and the global Brandtech capability heads. Map current AI deployments across the client base. Identify the engagement patterns that scale, the ones that do not, and where the practice is leaving value on the table."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Anchor two flagship engagements."
              body="Pick two client engagements to anchor the year. Define a repeatable engagement model the team can run: discovery, build, pilot, measure. Stand up an internal capability-sharing rhythm so wins from one engagement compound into the next."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and document."
              body="First flagship engagements in flight. First measurable outcomes back to clients. First version of the engagement playbook in the team's hands. First read into the practice leadership on what is working and what to bet on next."
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
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-12">
            The full pitch.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              OLIVER is building a Gen-AI and Marketing Technology practice at
              the moment most enterprise marketing functions are deciding what
              AI actually means for them. Leading the APAC arm of that
              practice, helping client teams move from experiment to
              production, is the role I am looking for.
            </p>
            <p>
              I am a Certified Practising Marketer with 15+ years of marketing
              experience. Today I am Head of Marketing at 90 Seconds, a global
              B2B SaaS video platform. I lead the APAC marketing team and
              collaborate with sales and marketing counterparts across US, UK
              and EMEA. Since June 2024 I have generated $5M in opportunities
              through inbound, paid, ABM, lifecycle and field.
            </p>
            <p>
              Two things I would bring to the APAC Director seat that are
              harder to find together.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, not just AI marketer.
            </h3>
            <p>
              This is the differentiator and it is the line in the JD I am
              writing toward. I have spent the past two years building
              practical AI tooling in Replit, Claude Code and the Anthropic
              API. Working with our VP of Product I helped architect an
              internal GTM operations platform that integrates CRM and SEMrush
              data to automate market mapping and content coverage. I built
              90Labs, a live sales-enablement workspace hosting 29+ assets,
              with a custom Pitch Builder currently in beta rollout with the
              global sales team. I configured the HubSpot Customer Agent so it
              now handles incoming
              customer service queries with AI in production. I migrated a
              300+ page website using an AI-scored content inventory and an
              automated migrator. My lane is problem framing and rapid
              prototyping with AI tooling, not deep engineering. For a
              practice whose product is helping clients deploy AI into
              marketing operations, having a regional leader who can build
              with the technology the team is recommending is a doubly
              relevant combination.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              APAC marketing leadership, ready for client-side scope.
            </h3>
            <p>
              My current APAC remit at 90 Seconds is a one-region build:
              regional pipeline number, adapted global programmes, field and
              ABM, sales partnership, daily liaison between the region and the
              global function. The APAC Director role at OLIVER asks for the
              same operating muscle applied across a multi-client portfolio.
              The shape of the work is familiar. The shift is from one
              employer to several clients in parallel.
            </p>

            <p>
              I want to be transparent about that shift. My Gen-AI
              implementation work to date has been internal at 90 Seconds
              rather than external client consulting. I have not yet
              orchestrated an enterprise Gen-AI engagement on behalf of a
              paying brand. What I bring instead is a real track record of
              standing up AI capability inside a marketing function from
              scratch, with the change management to make it stick, run with
              internal-client rigour. The bridge is the engagement model:
              discovery, build, pilot, iterate, measure. I have run it on
              internal stakeholders. The leap to external clients is a real
              leap, and one I am clear-eyed about.
            </p>

            <p>
              Against the rest of the JD: ten years as a Director of Digital
              Adelaide, South Australia&apos;s largest marketing conference,
              grown from about 40 marketers to over 200 delegates. Field
              events at scale, end to end. 3.8x over MQL target on an
              executive-audience ABM programme. 172% lead lift for an
              industrial B2B SaaS client through a HubSpot platform rebuild
              that won the 2023 HubSpot Impact Award for Platform Excellence.
              Fluent in MSAs, regional supplier agreements and Statements of
              Work through enterprise customer work at 90 Seconds.
            </p>

            <p>
              Adelaide-based, remote-friendly, Australian citizen. Happy to
              travel for the regional moments that matter. I would welcome a
              conversation about the first APAC engagements and where this
              practice is heading.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
          Let&apos;s talk about the first APAC engagements.
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
          Email me about OLIVER
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
