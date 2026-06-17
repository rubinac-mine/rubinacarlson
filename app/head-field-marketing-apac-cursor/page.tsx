import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rubina Carlson — your next Head of Field Marketing, APAC at Cursor.",
  description:
    "Rubina Carlson, your next Head of Field Marketing, APAC at Cursor. A marketer who builds with AI daily and has run South Australia's largest marketing conference for the past nine years.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Head of Field Marketing, APAC - Cursor";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/head-field-marketing-apac-cursor/Rubina-Carlson-CV.pdf";

export default function CursorPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Cursor
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
              Rubina Carlson.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Your next Head of Field Marketing, APAC at Cursor.
              <br />
              <span className="text-navy/70">
                A marketer who builds with AI daily and has run South
                Australia&apos;s largest marketing conference for the past
                nine years.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              I market AI-enabled products today and I build with AI every
              day. Two years deep in Replit, Claude Code and the Anthropic
              API. Nine years as a Director of Digital Adelaide, grown from
              40 marketers to over 270 delegates. APAC marketing leader at
              90 Seconds with $5M in opportunities generated since June
              2024. The stack Cursor sells to is the stack I already live
              in.
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

      {/* Section 2 — Why Cursor, why now */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Why Cursor, why now.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              The Head of Field Marketing, APAC role appeals to me because
              it would let me run regional strategy across enterprise
              accounts, build the field and ABM motion from first
              principles, partner with sales on the pipeline number, and
              report into leadership through a dashboard frame I already
              know how to build. All for a company whose product I already
              use and whose users I already think like.
            </p>
            <p>
              The double fluency is what I bring that career field
              marketers do not. I market AI-enabled products today at 90
              Seconds. I also build with AI every day, in Replit, Claude
              Code and the Anthropic API. Cursor&apos;s buyer and user are
              engineers and engineering-adjacent leaders. They can spot a
              marketer who has actually shipped with AI in production. I
              have.
            </p>
            <p>
              I am looking for a full-time role with dedicated budgets and
              a culture that treats AI as a first-class operating
              principle, not a side experiment. Cursor sits at the
              intersection of the work I want to do and the company I
              already pay attention to as a builder. The product is the
              proof.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Three pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
          What I would bring to the Cursor APAC function.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              AI Builder, Hands-on.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Two years building practical AI tooling with Replit, Claude
              Code and the Anthropic API. HubSpot Customer Agent
              configured at 90 Seconds, now handling inbound customer
              service queries with AI as a first touch. 300+ page website
              migration via Anthropic-API agents that crawled, classified,
              scored and migrated content automatically. 90Labs
              sales-enablement workspace built solo in Replit, with a
              Pitch Builder in beta rollout with the global sales team.
              GTM OS internal platform built in partnership with our VP of
              Product.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Field Marketing at Scale.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Nine years as a Director of Digital Adelaide, South
              Australia&apos;s largest marketing conference. Grown from
              about 40 marketers to over 270 delegates. End-to-end
              ownership year on year: regional strategy, speaker
              programmes, sponsor sales and fulfilment, vendor sourcing,
              venue and catering, on-the-day production, post-event
              reporting. Field marketing at scale is the credibility
              career field marketers without a flagship event behind them
              cannot show.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              APAC Regional Leader.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Lead the global marketing function from APAC at 90 Seconds.
              Two direct reports in the region. Daily partnership with
              sales and marketing counterparts across US, UK and EMEA.
              Comfortable being the marketing lead in a region, owning
              pipeline accountability, adapting global campaigns for the
              market and standing up the field and ABM motion from first
              principles.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — 90-day plan */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            What the first 90 days could look like.
          </h2>
          <p className="text-lg text-navy/70 mb-14 max-w-2xl">
            Written before knowing the internal context. Treat as
            direction, not commitment.
          </p>
          <div className="grid gap-12 md:grid-cols-3">
            <DayBlock
              range="Days 1 to 30"
              heading="Listen and inventory."
              body="Spend the first month with APAC Sales, the GTM team in market, the global field marketing function and the developer relations crew. Map the existing pipeline, named accounts, partner ecosystem and event calendar. Audit what global campaigns can be lifted into APAC as-is and what needs regional adaptation. Sit with engineers and engineering leaders, the buyer and user we are talking to. Document their language and what genuinely lands."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Shape three plays."
              body="Three regional plays that compound. My first guesses, subject to inventory: an APAC executive roundtable series for engineering leaders weighing AI in their stack, an ABM programme on a named-account list of high-velocity AI-native scale-ups, and a developer-first field motion built around hackathons, meetups and partner co-marketing across the region. Each stands up with a measurement frame against pipeline and product adoption."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First APAC roundtable in market. First ABM cohort in flight. First developer-first field event live with a partner. First pipeline read into the global team with marketing-sourced and marketing-influenced contribution broken out. Lessons documented. The cadence I would set for the rest of the year mapped against pipeline targets and product adoption."
            />
          </div>
        </div>
      </section>

      {/* Section 5 — My Best Results */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            My Best Results.
          </h2>
          <p className="text-lg text-cream/70 mb-14 max-w-2xl">
            I&apos;m proud of these achievements. Results that genuinely
            moved the needle.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <ReceiptCard
              title="From zero to $5M in pipeline at 90 Seconds"
              tagline="Built a global demand engine in eighteen months."
              body="When I joined 90 Seconds, the marketing function had to rebuild the demand engine from scratch. Eighteen months later, $5M in opportunities sourced and influenced across inbound, paid, content, ABM and lifecycle, feeding a complex enterprise sales motion. The number is reported into the leadership team every cycle. Credit belongs to a small team punching above its weight."
            />
            <ReceiptCard
              title="Digital Adelaide, 40 to 270 delegates"
              tagline="Nine years building South Australia's biggest marketing conference."
              body="I took on Digital Adelaide (then Social Media Day Adelaide) as a small community event for 40 marketers. Nine years later, it is South Australia's largest marketing conference, with over 270 delegates and a national speaker roster, hosted by three directors who run it on top of their day jobs. The field marketing credential behind every other number on this page."
            />
            <ReceiptCard
              title="300+ page website migration in weeks"
              tagline="A fleet of Anthropic-API agents instead of a content audit committee."
              body="The 2026 90 Seconds website rebuild had 300+ legacy pages to migrate. The conventional path would have taken months. I built a fleet of Anthropic-API agents to crawl, classify, score and migrate the content automatically, with an AI-scored inventory guiding what stayed, what merged and what dropped. A multi-month migration compressed into a few weeks."
            />
            <ReceiptCard
              title="172% lead lift for K-TIG"
              tagline="HubSpot Impact Award, Platform Excellence, 2023."
              body="K-TIG sell advanced TIG welding technology to a global industrial buyer. The HubSpot rebuild had to handle Marketing, Sales, Service and CMS in one connected system, with 307 custom reports across 17 dashboards. Three months after launch, leads were up 172%. HubSpot named it Platform Excellence at the 2023 Impact Awards."
            />
            <ReceiptCard
              title="82x ROAS for a national hostel chain"
              tagline="Paid search treated as a craft worth honing."
              body="Tight audience work, ruthless keyword pruning and weekly creative iteration delivered an 82x return on ad spend on Google Search Ads. Approximately $410,000 in attributable revenue from a single campaign, built and tuned by the team I led at Refuel Creative with clean reporting into a weekly client review."
            />
            <ReceiptCard
              title="3.8x over MQL target for UniSA execs"
              tagline="ABM for a CEO and MD audience that actually converted."
              body="A four-month social ad programme targeting CEOs, MDs and Business Owners for an executive growth programme at the University of South Australia. Tight creative, precise audience build and HubSpot lifecycle workflows delivered 3.8x over the marketing qualified leads target. The kind of executive-audience ABM I would run again in APAC against a named-account list."
            />
          </div>
        </div>
      </section>

      {/* Section 6 — From the work */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          From the work.
        </h2>
        <p className="text-lg text-navy/70 mb-14 max-w-2xl">
          A short visual tour of what I have shipped at 90 Seconds in the
          past year, plus the marketing community I have built in Adelaide
          over a decade.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Shot
            src="/work/90-seconds/website-new.png"
            alt="The new 90 Seconds website, rebuilt in 2026."
            caption="The new 90 Seconds website. Rebuilt with Claude Code and Replit, with 300+ legacy pages migrated via Anthropic-API agents."
          />
          <Shot
            src="/work/90-seconds/90labs-pitch-builder-home.png"
            alt="The 90Labs Pitch Builder homepage."
            caption="90Labs Pitch Builder. A sales-enablement tool I built in Replit, now in beta with the global sales team."
          />
          <Shot
            src="/work/scout/chat-welcome.png"
            alt="The HubSpot Customer Agent live on the 90 Seconds website."
            caption="HubSpot Customer Agent, live on 90seconds.com. Configured end to end: tone of voice, scripted answers, guardrails."
          />
          <Shot
            src="/work/digital-adelaide/crowd-oval.webp"
            alt="Digital Adelaide attendees at Adelaide Oval."
            caption="Digital Adelaide at Adelaide Oval. The marketing conference I have grown from 40 to 270+ delegates as a Director over nine years."
          />
          <Shot
            src="/work/web-attribution/hubspot-sync.png"
            alt="HubSpot lifecycle sync from the 90 Seconds web stack."
            caption="Full-funnel web attribution. GTM, GA4, PostHog and HubSpot wired together so every visitor is tracked from first touch to CRM."
          />
          <Shot
            src="/work/q2-nurture/email-01.png"
            alt="A Q2 nurture email designed for 90 Seconds enterprise marketing buyers."
            caption="Q2 nurture programme for enterprise marketing leaders. Eight fortnightly emails, HubSpot workflows, Tier-0 targeting and suppression."
          />
        </div>
      </section>

      {/* Section 7 — Credentials strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm text-navy/85">
          <Credential text="15+ years of marketing experience" />
          <Credential text="Certified Practising Marketer, AMI" />
          <Credential text="Two-time HubSpot Impact Award winner (2020, 2023)" />
          <Credential text="Director, Digital Adelaide (40 to 270+ delegates over 9 years)" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* Section 8 — My full pitch */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-12">
            My full pitch.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              I&apos;m a Certified Practising Marketer with 15+ years of
              marketing experience across B2B SaaS, tech, tourism and
              higher education. Today I&apos;m Head of Marketing at 90
              Seconds, a global B2B video creation platform. I lead the
              global marketing function from APAC, with two direct reports
              in the region and daily partnership with sales and marketing
              counterparts across the US, UK and EMEA. Since June 2024 I
              have generated $5M in opportunities through inbound, paid,
              ABM, lifecycle and field programmes feeding a complex
              enterprise sales motion.
            </p>

            <p>
              Three parts of my work map straight onto the Cursor brief.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, hands-on.
            </h3>
            <p>
              This is what makes Cursor different from any other employer
              I have approached. The team and the customer base recognise
              what shipping AI in production actually looks like. For the
              past two years I have spent significant time building
              practical AI tooling with Replit, Claude Code and the
              Anthropic API. I configured the HubSpot Customer Agent at 90
              Seconds, now handling inbound customer service queries with
              AI as a first touch. I led a 300+ page website migration
              through a fleet of Anthropic-API agents that crawled,
              classified, scored and migrated content automatically. I
              built 90Labs, a sales-enablement workspace hosting 29+
              active assets and a Pitch Builder in beta rollout with the
              global sales team. I partnered with our VP of Product on
              GTM OS, an internal AI operations platform that integrates
              CRM and SEMrush data to automate market mapping and content
              coverage. He owned the engineering. I owned the marketing
              logic, scoring criteria and prompt design. My lane is
              problem framing and rapid prototyping, not deep engineering.
              The stack Cursor sells to is the stack I already live in.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Field marketing at scale.
            </h3>
            <p>
              I have been a Director of Digital Adelaide for the past nine
              years. South Australia&apos;s largest marketing conference,
              grown from about 40 marketers to over 270 delegates.
              End-to-end ownership: regional strategy, speaker programmes,
              sponsor sales and fulfilment, vendor sourcing, venue and
              catering, on-the-day production, post-event reporting. This
              is field marketing at scale, run year on year, with budget
              responsibility and a sponsor list that compounds. The
              executive-audience ABM work for the University of South
              Australia (3.8x over MQL target) sits in the same lane.
              Field marketers without a flagship regional event behind
              them cannot show this.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              APAC built from the ground up.
            </h3>
            <p>
              My current APAC remit at 90 Seconds is the same build
              Cursor needs, without the dedicated regional budget. I run
              the regional plan end to end, partner with sales on the
              pipeline number, adapt global brand and demand programmes
              for the market, and act as the daily bridge between regional
              sales and the global function. Comfortable being the
              marketing lead in a region and standing up the muscle from
              first principles.
            </p>

            <p>
              On the rest of the brief. 172% lead lift for an industrial
              B2B SaaS client through a HubSpot platform rebuild that won
              the 2023 HubSpot Impact Award for Platform Excellence. 82x
              ROAS on a Google Search Ads campaign worth roughly $410,000
              in revenue. $900K+ in annual budgets managed at Refuel
              Creative. Fluent in MSAs, regional supplier agreements and
              Statements of Work through enterprise customer work at 90
              Seconds. Four direct reports at Refuel, two at 90 Seconds,
              seven years lecturing at TAFE SA and UniSA. Player-coach is
              the mode I already work in.
            </p>

            <p>
              Adelaide-based, remote-friendly, Australian citizen. Happy
              to travel for the regional moments that matter and for team
              meetings. I would welcome a conversation about the first 90
              days of the APAC plan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 — Contact */}
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
          Email me about Cursor
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

function ReceiptCard({
  title,
  tagline,
  body,
}: {
  title: string;
  tagline: string;
  body: string;
}) {
  return (
    <div className="border border-cream/20 bg-navy/40 rounded-lg p-8 hover:border-crimson-light/50 transition">
      <h3 className="text-xl font-semibold mb-2 text-cream">{title}</h3>
      <p className="text-crimson-light italic mb-4">{tagline}</p>
      <p className="text-cream/85 leading-relaxed">{body}</p>
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
      <p className="text-crimson font-semibold tracking-wide uppercase text-xs mb-3">
        {range}
      </p>
      <h3 className="text-xl font-semibold mb-4 text-navy">{heading}</h3>
      <p className="text-navy/85 leading-relaxed">{body}</p>
    </div>
  );
}

function Credential({ text }: { text: string }) {
  return (
    <li className="border-l-2 border-crimson pl-4 leading-snug">{text}</li>
  );
}

function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="border border-navy/10 bg-cream rounded-lg overflow-hidden">
      <div className="relative w-full aspect-[16/10] bg-navy/5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="px-5 py-4 text-sm text-navy/80 leading-snug">
        {caption}
      </figcaption>
    </figure>
  );
}
