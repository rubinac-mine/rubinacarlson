import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For the Marketing Manager role. Rubina Carlson.",
  description:
    "Rubina Carlson in the Marketing Manager seat at WEX. A growth and lifecycle marketer who builds with the AI tools her team needs in production.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Marketing Manager - WEX";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/marketing-manager-wex/Rubina-Carlson-CV.pdf";

export default function WexPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For the Marketing Manager role at WEX
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
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid gap-12 sm:gap-16 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] text-navy">
              For the Marketing Manager role.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Rubina Carlson in the Marketing Manager seat at WEX.
              <br />
              <span className="text-navy/70">
                A growth and lifecycle marketer who builds with the AI tools
                her team needs in production.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              $5M in opportunities at 90 Seconds since June 2024 across
              inbound, paid, content, ABM and lifecycle. HubSpot Impact Award
              for a 172% lead lift on an industrial B2B SaaS rebuild. Four
              production AI builds shipped from the marketing seat, including
              a HubSpot Customer Agent that handles inbound queries today.
              Genuinely curious about closed-loop payment infrastructure and
              the rails the Mobility business runs on.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
          </div>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-crimson/20 mx-auto md:mx-0 md:mt-4">
            <Image
              src="/rubina-portrait-square.jpg"
              alt="Rubina Carlson, smiling, in a black top and black fascinator."
              fill
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 18rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
            Three things I would bring to this seat.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Growth and lifecycle spine.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                HubSpot at expert level. 2023 HubSpot Impact Award for
                Platform Excellence (172% lead lift). $5M in opportunities
                since June 2024 at 90 Seconds. Lifecycle workflows, lead
                scoring, attribution and clean sales handover. Paid in the
                mix too: 82x ROAS on a national hostel chain Google Ads
                programme worth roughly $410K in revenue.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, hands-on.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling with Replit, Claude
                Code and the Anthropic API. I market AI-enabled video
                products at 90 Seconds and I build with AI daily. The brief
                asks for high comfort with GenAI; I am a couple of steps
                further along that curve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Curious about the rails.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Closed-loop payment infrastructure is one of those categories
                most people walk past. I find it genuinely interesting. Fuel
                cards are one half of the picture. Owning the rails the
                largest petrol retailers run their own programs on is the
                other half. That is a marketing problem I want to work on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build receipts */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          Build receipts.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          Four production AI builds I have shipped from the marketing seat.
          The kind of work that maps onto &quot;high comfort using GenAI for
          content scale and workflow automation.&quot;
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="AI as the first touch on inbound customer queries."
            body="Configured the HubSpot Customer Agent for 90 Seconds. Now handles incoming customer service queries with AI. Frees the team for higher-leverage work. Direct match for the workflow-automation line in your brief."
          />
          <BuildCard
            title="GTM OS"
            tagline="Internal go-to-market operations platform."
            body="Integrates HubSpot CRM and SEMrush data to automate market mapping, content coverage analysis and named-account research. Architected in partnership with our VP of Product. I owned the problem framing and the marketing logic; he owned the engineering."
          />
          <BuildCard
            title="90Labs"
            tagline="Live sales-enablement workspace built in Replit."
            body="Hosts 29+ active assets and a custom Pitch Builder in beta rollout to the global sales team. Initial signals promising. Built and maintained by me from the marketing seat."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages of the multilingual 90 Seconds site using an AI-scored content inventory and Anthropic-API agents. Lifted organic traffic, conversion rates and lead quality."
          />
        </div>
      </section>

      {/* Sector research — what I found interesting */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            What I found interesting about WEX Mobility.
          </h2>
          <p className="text-lg text-navy/70 mb-12 max-w-2xl">
            A short note on the category I read into, and what makes it the
            kind of marketing problem I want to work on.
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Closed-loop rails are a platform play.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Fuel cards into businesses is the visible half. Owning the
                closed-loop payment infrastructure that the largest petrol
                retailers run their own branded programs on is the half
                people miss. White-label rails under someone else&apos;s
                brand is the same shape as Stripe under retail or Twilio
                under apps. A category most people walk past, but a real
                platform underneath it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                The category has a long runway.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Fleet, logistics, energy transition and EV charging all sit
                on top of payment rails that have to work. Fleet operators
                need verified spend control. Logistics buyers need rich
                reporting. The EV transition needs new closed-loop
                infrastructure for charging at scale. The category
                compounds with every macro shift, not against it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                The data layer is genuinely rich.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Every closed-loop transaction generates litres, location,
                vehicle, driver and time. That is a B2B data set most
                fintech buyers cannot get to. From a marketing seat, that
                is a backbone for lifecycle segmentation, account expansion
                and product-led growth in a way most fintech competitors
                cannot match.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                The buyer is the buyer I already serve.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Enterprise procurement, Master Services Agreements, regional
                supplier agreements, the full paperwork stack. That is the
                buying committee I work with at 90 Seconds. Fleet managers,
                finance leads, operations directors, procurement.
                Long-cycle decisions that need careful nurture, the right
                evidence and a marketing function that respects the
                timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First 90 days */}
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
              heading="Audit the journey."
              body="Spend the first month with the WEX Mobility team, sales counterparts, product marketing and the existing CRM. Audit the customer journey from first touch to advocacy. Map lifecycle stages, scoring, attribution and handover in HubSpot. Document the fleet and retail-program buyer personas from inside the room, not from outside."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Pick three growth experiments."
              body="Three experiments that compound. First guesses, subject to inventory: a lifecycle nurture rebuild for fleet buyers using AI-assisted personalisation, a partner co-marketing motion with the retail-program network, and an executive-audience ABM cohort on a named-account list. Stand each up with a measurement frame against pipeline."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First lifecycle rebuild in production. First partner co-marketing campaign live. First ABM cohort in flight. First pipeline read into the leadership team with marketing-sourced and marketing-influenced breakdown. Lessons documented."
            />
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm text-navy/85">
          <Credential text="15+ years of marketing experience" />
          <Credential text="Certified Practising Marketer, AMI" />
          <Credential text="2023 HubSpot Impact Award, Platform Excellence (172% lead lift)" />
          <Credential text="Director, Digital Adelaide (40 to 270+ delegates over 10 years)" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* The full pitch */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-12">
            The full pitch.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              I market AI-enabled products today and I build with AI every
              day. The role reads as a clean match: audit the customer
              journey end to end, run integrated paid and owned programmes,
              develop ecosystem partnerships for acquisition scaling, and
              weave GenAI into the workflow rather than bolting it on.
            </p>
            <p>
              15+ years of marketing experience. Certified Practising
              Marketer. Today Head of Marketing at 90 Seconds, a global B2B
              SaaS video creation platform. Since June 2024 I have generated
              $5M in opportunities through inbound, paid, content, ABM and
              lifecycle programmes feeding a complex enterprise sales
              motion.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Growth and lifecycle spine, with HubSpot at the core.
            </h3>
            <p>
              HubSpot is where my growth reps have been done. At Refuel
              Creative I shaped a HubSpot rebuild for K-TIG, an industrial
              B2B SaaS client, across Marketing, Sales, Service and CMS
              Hubs. 172% increase in leads within three months of new
              website launch. That work won the 2023 HubSpot Impact Award
              for Platform Excellence. Lifecycle workflows, lead scoring,
              attribution reporting and clean sales handover. At 90 Seconds
              the same muscle now sits behind the $5M pipeline number. Paid
              is part of the toolkit too: 82x ROAS on a Google Search Ads
              programme worth roughly $410K in revenue, and a $120K-per-year
              SeaLink ad spend that delivered approximately $1M in revenue
              per year at 10x ROAS.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, not just AI user.
            </h3>
            <p>
              The brief asks for high comfort using GenAI and predictive
              tools for content scale and workflow automation. I am a couple
              of steps further along that curve. I configured the HubSpot
              Customer Agent for 90 Seconds, so inbound customer queries are
              now handled with AI as a first touch. I migrated a 300+ page
              multilingual website using an AI-scored content inventory and
              Anthropic-API agents that produced the migration plan and
              helped execute it. Working with our VP of Product I helped
              architect an internal GTM operations platform that integrates
              HubSpot CRM and SEMrush data to automate market mapping,
              content coverage analysis and named-account research. My daily
              stack is Claude (Sonnet and Opus), Replit, the Anthropic API
              and the HubSpot AI layer. My contribution to those builds is
              problem framing and prompting, not engineering.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Partnerships and ecosystem.
            </h3>
            <p>
              Nine years building Digital Adelaide into South
              Australia&apos;s largest marketing conference ran on sponsor
              and partner relationships. At 90 Seconds I run partner
              co-marketing into our enterprise field motion. Acquisition
              through partners, not just through paid, is a discipline I
              have lived in for a decade.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              On the BI and dashboarding layer.
            </h3>
            <p>
              My depth is HubSpot reporting at expert level (307 custom
              reports across 17 dashboards on the K-TIG build), Google
              Looker Studio for cross-source dashboards, GA4 and SEMrush.
              Tableau and Power BI specifically I have not run a programme
              inside, but dashboard architecture, data modelling and
              stakeholder reporting are the disciplines underneath all of
              them. Tool-level swap, not a starting-from-zero ramp.
            </p>

            <p>
              I am looking for a full-time role with dedicated budgets and a
              culture that embraces innovation. A growth seat at a B2B
              fintech with real infrastructure scale, an AI build brief, and
              the kind of buyer I already serve is exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
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
          Email me about the role
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
