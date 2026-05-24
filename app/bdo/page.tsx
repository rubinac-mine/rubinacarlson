import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For BDO. Rubina Carlson.",
  description:
    "Rubina Carlson on the Marketing Lead seat at BDO. A B2B marketing leader who builds disciplined programmes, lifts capability, and ships with AI.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Marketing Lead (JR102982) - BDO";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/bdo/Rubina-Carlson-CV.pdf";

export default function BdoPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For BDO
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
          For BDO.
        </h1>
        <p className="mt-10 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Rubina Carlson on the Marketing Lead seat.
          <br />
          <span className="text-navy/70">
            A B2B marketing leader who scales programmes, lifts capability, and
            builds with AI.
          </span>
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/80">
          This page exists because the Workday form does not take a cover
          letter. So I built one. Treat it as a working sample of how I would
          approach the Clients and Markets agenda: tailored, on-brand, shipped
          fast, using the AI tooling I would bring to the function.
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
            Why I am the right Marketing Lead.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                A disciplined programme of work.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                I lead the global marketing function at 90 Seconds from APAC.
                Annual plan, prioritised activity, pipeline accountability,
                monthly read into the executive. Translating strategy into a
                disciplined, measurable programme of work is the part of
                marketing leadership I enjoy most.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                CRM and demand generation, at expert level.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                HubSpot at expert level. Three-time HubSpot Impact Award
                winner. 172% lead lift for a B2B industrial SaaS client via a
                platform rebuild. 4,000 inactive subscribers re-engaged through
                a nurture workflow. Segmentation, lifecycle, funnel reporting,
                ROI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, not just AI marketer.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling with Replit, Claude
                Code and the Anthropic API. For a JD that names openness to AI
                as a criterion, I bring more than openness. I bring working
                examples shipped from the marketing seat.
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
          seat.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="90Labs"
            tagline="Live sales-enablement workspace built in Replit."
            body="Live and hosting 29+ active assets used by the global 90 Seconds sales team. The marquee tool, a Pitch Builder, is in beta rollout with promising early signals. Built and maintained by me from the marketing seat, with the design team for the visual layer."
          />
          <BuildCard
            title="GTM OS"
            tagline="Internal go-to-market operations platform."
            body="Integrates CRM and SEMrush data to automate market mapping and content coverage analysis. Co-designed with our VP of Product. I owned the problem framing and the marketing logic; he owned the engineering."
          />
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="AI-handled customer service queries in production."
            body="Configured the HubSpot Customer Agent for 90 Seconds. Now handles incoming customer service queries with AI. A useful proof of CRM-plus-AI in production for a function that will need to do this kind of work itself."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages from the legacy 90 Seconds site to the new multilingual site. Used an AI-scored content inventory and an automated migrator built with the Anthropic API instead of doing it by hand."
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
              body="Spend the first month with the Head of Marketing & Communications, the Clients & Markets leadership, BD partners across sectors, the Brand and Digital leads, and the national marketing team. Audit the current plan, campaign calendar, CRM and marketing automation health, thought-leadership backlog, and BD partnership cadence. Map the named-account list and the partner-led demand flow."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Pick three plays."
              body="Three integrated plays that compound. My first guesses, subject to inventory: a sector-led campaign with thought leadership as the wedge, an ABM motion against a named-account list paired with BD activation, and a CRM and marketing automation tightening pass for cleaner segmentation, nurture and funnel reporting. Each with a measurement frame against pipeline and brand."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First sector campaign live. First ABM cohort in flight with BD coverage. First quarterly thought-leadership piece in market. First marketing-sourced and influenced pipeline read into the Marketing & Communications leadership meeting. Lessons documented. Capability-uplift plan for the national team drafted."
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
          <Credential text="Refuel Creative, BDO Fast Movers List 2022 (during my tenure)" />
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
              I have a personal connection to BDO. In 2022, Refuel Creative
              (where I was Digital Marketing Manager) was named in the BDO Fast
              Movers List, recognising the top 25 fastest-moving companies in
              South Australia. The recognition mattered to a small agency. It
              also gave me a real-life look at how BDO shows up locally for the
              businesses it advises. When I saw the Marketing Lead role open,
              I wanted to put my hand up.
            </p>
            <p>
              I am a Certified Practising Marketer and a senior B2B marketing
              leader. My experience spans professional services, advisory, B2B
              SaaS, tourism and higher education. I am drawn to BDO for two
              reasons. The role sits inside Clients and Markets and reports to
              the Head of Marketing and Communications. It is also genuinely
              about translating strategy into a disciplined, measurable
              programme of work. That is the part of marketing leadership I
              enjoy most.
            </p>
            <p>
              In my current role as Head of Marketing at 90 Seconds, a global
              B2B SaaS video platform, I lead the global marketing function
              from APAC. Two direct reports sit in the region. I collaborate
              with sales and marketing counterparts across the US, UK and
              EMEA. The work covers the full marketing function: regional and
              global strategy, brand, content and video, demand generation,
              lifecycle, sales enablement and field events. I own the pipeline
              number and report marketing-sourced and influenced contribution
              into the executive each month. Since June 2024, that programme
              has generated $5M in opportunities.
            </p>
            <p>
              I am ready for a bigger national platform, a deeper team, and
              the kind of partner-led environment that rewards careful
              prioritisation and relationship building. BDO fits.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              How my experience maps to the role.
            </h3>

            <p>
              <strong>Senior marketing leadership in complex B2B and professional services.</strong>{" "}
              Fifteen plus years across enterprise B2B SaaS, advisory, tourism
              and higher education. At Refuel Creative, I delivered for K-TIG
              (aerospace and defence welding manufacturer), the University of
              South Australia Australian Centre for Business Growth, Carers and
              Disability Link, Lot Fourteen (SA innovation precinct) and a
              national hostel chain. At 90 Seconds, I work inside enterprise
              procurement processes covering Master Services Agreements,
              regional supplier agreements and Statements of Work for
              institutional and regulated buyers.
            </p>

            <p>
              <strong>Go-to-market planning, campaigns and thought leadership.</strong>{" "}
              I built and run 90Labs, a live sales enablement workspace
              hosting 29+ active assets used by the global sales team. The
              marquee tool, a Pitch Builder, is in beta rollout with promising
              early signals. For nine years, I have co-directed Digital
              Adelaide, growing it from about 40 marketers to 200+ delegates
              and into South Australia&apos;s largest marketing conference. I
              also developed and delivered Australia&apos;s first tertiary
              social media course at TAFE SA in 2011, and Australia&apos;s
              first postgraduate Social Media Management course at UniSA
              Creative in 2016. Capability building and translating expertise
              into the market is a thread that runs through my career.
            </p>

            <p>
              <strong>CRM and marketing automation for measurable demand generation.</strong>{" "}
              HubSpot at expert level. Three-time HubSpot Impact Award winner.
              The standout result was K-TIG: a HubSpot rebuild across
              Marketing, Sales, Service and CMS Hubs that delivered a 172%
              lift in leads within three months. I also re-engaged 4,000
              inactive SaaS subscribers through a nurture workflow; 1,000
              signed back in; trial users lifted 20%.
            </p>

            <p>
              <strong>Commercial accountability and campaign ROI.</strong> At
              90 Seconds, $5M in pipeline since June 2024. At Refuel Creative,
              82x ROAS on Google Search for a national hostel chain (about
              $410K revenue) and 3.8x over MQL target on executive ABM (CEO,
              MD and Business Owner audiences) for UniSA Australian Centre
              for Business Growth. At SeaLink Travel Group, 10x ROAS on a
              $120K annual ad spend (about $1M revenue per year).
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Honest on team scale.
            </h3>
            <p>
              I will be honest about scale. I have not yet led a national team
              of 20 plus people. What I have done is lead a function with
              global scope, lift capability across teams I have managed, and
              build a measurable cadence of planning, execution, reporting and
              review. I am a Member of the Leadership Team in my current role
              and was in my previous one. I have built teams from four people
              up, delivered multi-channel HubSpot rebuilds, and led brand and
              website relaunches inside tight timeframes. The leap to a larger
              team is the right next step for me.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              On the AI criterion.
            </h3>
            <p>
              This is where I lean in hardest. At 90 Seconds, I co-designed an
              internal GTM operations platform with our VP of Product that
              joins CRM and SEO data to automate market mapping and content
              coverage analysis. I configured the HubSpot Customer Agent,
              which now handles incoming customer service queries with AI. I
              migrated 300+ pages from the legacy site to a new multilingual
              site through an AI-scored content inventory and an automated
              migrator. I work daily with Claude, Replit and the Anthropic
              API to make the marketing function move faster.
            </p>

            <p>
              Adelaide-based, remote-friendly, Australian citizen. Happy to
              travel for the moments that matter. I would welcome a
              conversation about how this experience translates into BDO&apos;s
              Clients and Markets agenda, and what the first 90 days would
              look like.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
          Let&apos;s talk about the Clients and Markets agenda.
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
          Email me about BDO
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
