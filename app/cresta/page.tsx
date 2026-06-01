import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Cresta. Rubina Carlson.",
  description:
    "Rubina Carlson on the APAC Marketing Manager seat at Cresta. A marketer who builds with the technology her customers are buying.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "APAC Marketing Manager - Cresta";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/cresta/Rubina-Carlson-CV.pdf";

export default function CrestaPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Cresta
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
          For Cresta.
        </h1>
        <p className="mt-10 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Rubina Carlson on the APAC Marketing Manager seat.
          <br />
          <span className="text-navy/70">
            A marketer who builds with the technology her customers are buying.
          </span>
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/80">
          $5M in opportunities at 90 Seconds since June 2024 across
          inbound, paid, ABM, lifecycle and field. APAC pipeline owned
          end to end. 90Labs sales-enablement platform built solo in
          Replit, with a Pitch Builder in beta with the global sales
          team. Ten years building Digital Adelaide from 40 marketers to
          over 200 delegates.
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

      {/* Section 2 -Three pillars */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
            Why I am the right founding APAC hire.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                APAC built from the ground up.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                I run the APAC marketing function at 90 Seconds today. Pipeline
                number, regional adaptation of global campaigns, field and ABM,
                sales partnership, daily liaison with the global team.
                Comfortable being the only marketer in a region and building
                the muscle from first principles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                $5M pipeline, generated.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Since June 2024, I have generated $5M in opportunities through
                inbound, paid, ABM, lifecycle and field at 90 Seconds.
                Marketing-sourced and marketing-influenced contribution
                reported into the leadership team each cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, hands-on.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling with Replit, Claude
                Code and the Anthropic API. I market AI products at 90
                Seconds and I build with AI daily. The stack Cresta sells
                against is the stack I already live in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 -Build receipts */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          Build receipts.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          A short tour of the AI tooling I have shipped from the marketing
          seat.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="90Labs"
            tagline="Live sales-enablement platform built in Replit."
            body="Hosts 29+ active assets and a Pitch Builder tool. Used by the global 90 Seconds sales team every day. Built and maintained by me from the marketing seat, with the design team for the visual layer."
          />
          <BuildCard
            title="GTM OS"
            tagline="Internal go-to-market operations platform."
            body="Integrates CRM and SEMrush data to automate market mapping and content coverage analysis. Architected in partnership with our VP of Product. I owned the problem framing and the marketing logic; he owned the engineering."
          />
          <BuildCard
            title="Pitch Builder"
            tagline="Sales-pitch composer built into 90Labs."
            body="Lets sales reps compose tailored pitches in minutes by pulling from a structured asset library. Built so the field can move at the speed an enterprise deal actually demands."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages from the legacy 90 Seconds site to the new multilingual site. Used an AI-scored content inventory and an automated migrator instead of doing it by hand."
          />
        </div>
      </section>

      {/* Section 4 -First 90 days */}
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
              body="Spend the first month with APAC Sales, the VP International Marketing, Product Marketing and the global demand team. Map the existing pipeline, named accounts, channel partners and field calendar. Audit what global campaigns can be lifted into APAC as-is and what needs adaptation. Document the contact centre buyer persona from inside the room, not from the JD."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Pick three plays."
              body="Three regional plays that compound. My first guesses, subject to inventory: an APAC executive roundtable series for contact centre leaders, an ABM programme on a named-account list with the AI-agent product as the wedge, and a partner co-marketing motion with the regional cloud or CX ecosystem. Stand each up with a measurement frame against pipeline."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First roundtable in market. First ABM cohort in flight. First partner co-marketing campaign live. First pipeline read into the VP International Marketing meeting with marketing-sourced and marketing-influenced breakdown. Lessons documented."
            />
          </div>
        </div>
      </section>

      {/* Section 5 -Credentials strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm text-navy/85">
          <Credential text="15+ years of marketing experience" />
          <Credential text="Certified Practising Marketer, AMI" />
          <Credential text="2023 HubSpot Impact Award, Platform Excellence (172% lead lift)" />
          <Credential text="Director, Digital Adelaide (40 to 200+ delegates over 10 years)" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* Section 6 -The full pitch */}
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
              in opportunities through inbound, paid, ABM, lifecycle and
              field.
            </p>
            <p>
              Two parts of my work map straight onto the Cresta brief.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              APAC built from the ground up.
            </h3>
            <p>
              My current APAC remit at 90 Seconds is the same build,
              without the dedicated regional budget. I run the regional
              plan end to end, own the pipeline number, adapt global
              brand and demand programmes for the market, and act as the
              daily bridge between regional sales and the global function.
              Comfortable being the only marketer in a region and
              creating the muscle from first principles.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, hands-on.
            </h3>
            <p>
              Beyond running the marketing function I have spent the past
              two years building practical AI tooling in Replit, Claude
              Code and the Anthropic API. Working with our VP of Product
              I contribute to an internal GTM operations platform that
              integrates CRM and SEMrush data to automate market mapping
              and content coverage. I built 90Labs, a sales-enablement
              workspace hosting 29+ assets, with a custom Pitch Builder
              in beta rollout to the global sales team. I migrated a 300+
              page website using an AI-scored content inventory and an
              automated migrator on the Anthropic API. My lane is problem
              framing and rapid prototyping with AI, not deep
              engineering. Cresta sells enterprise AI. The stack the team
              recommends to customers is the stack I already live in.
            </p>

            <p>
              On the rest of the brief: ten years as a Director of
              Digital Adelaide, South Australia&apos;s largest marketing
              conference, grown from about 40 marketers to over 200
              delegates. Field events at scale, end to end. 3.8x over MQL
              target on an executive-audience ABM programme at the
              University of South Australia. 172% lead lift for an
              industrial B2B SaaS client through a HubSpot platform
              rebuild that won the 2023 HubSpot Impact Award for Platform
              Excellence. Fluent in MSAs, regional supplier agreements
              and Statements of Work through enterprise customer work at
              90 Seconds.
            </p>

            <p>
              On contact centre and CX automation, I will be honest. I
              have not bought, sold or sat inside one. The bridge is
              enterprise B2B SaaS at 90 Seconds, AI fluency from two
              years of hands-on building, and a track record of getting
              up the curve fast on a new buyer. Useful in week one on
              regional planning, events and demand. Ramped on the
              contact centre buyer and the AI agent product inside the
              first quarter.
            </p>

            <p>
              Adelaide-based, remote-friendly, Australian citizen. Happy
              to travel for the regional moments that matter. I would
              welcome a conversation about the first 90 days of the APAC
              plan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 -Contact */}
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
          Email me about Cresta
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
