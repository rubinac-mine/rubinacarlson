import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rubina Carlson — your next Marketing & Communications Advisor at GHD.",
  description:
    "Rubina Carlson, your next Marketing & Communications Advisor at GHD. A two-time HubSpot Impact Award winner with a working AI-builder toolkit, embedding AI into how the marketing function runs.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Marketing & Communications Advisor - GHD";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/marketing-communications-advisor-ghd/Rubina-Carlson-CV.pdf";

export default function GHDPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For GHD
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
              Your next Marketing & Communications Advisor at GHD.
              <br />
              <span className="text-navy/70">
                A two-time HubSpot Impact Award winner with a working
                AI-builder toolkit, in Adelaide and ready to embed AI into how
                the marketing function runs.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              Today I&apos;m Head of Marketing at 90 Seconds, a global B2B
              video creation platform. Since June 2024 I have generated $5M in
              opportunities across inbound, paid, content, ABM and lifecycle.
              Before that I led a four-person team at Refuel Creative to a
              HubSpot Impact Award for Platform Excellence (172% lead lift on
              an industrial B2B client) and an 82x ROAS Google Search campaign
              worth roughly $410,000 in revenue. For the past ten years I have
              also served as a Director of Digital Adelaide, growing it from a
              40-person meetup into South Australia&apos;s largest marketing
              conference with over 270 delegates.
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

      {/* Section 2 — Why GHD, why now */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Why GHD, why now.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              I market AI-enabled products today and I build with AI every day.
              That double fluency is why this seat appeals to me. A global
              engineering and advisory firm with a marketing function that
              owns how AI gets embedded in its own workflows is exactly the
              kind of work I want to do daily.
            </p>
            <p>
              The engineering and advisory buyer is familiar territory. At
              Refuel Creative I led the digital function across clients in
              government, defence, aged care, disability, higher education and
              industrial B2B SaaS. Years inside the technical SME and
              advisory-services buyer mindset, briefing campaigns for people
              who care about credibility, accuracy and clean reporting.
            </p>
            <p>
              I am Adelaide-based, an Australian citizen, and looking for a
              full-time role with dedicated budgets and a culture that
              embraces innovation. GHD sits at the intersection of two things
              I care about: a global engineering and advisory firm with
              serious enterprise customers, and a marketing function with the
              appetite to keep moving with the tools its clients are buying.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Three pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
          What I would bring to the GHD marketing function.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Award-winning HubSpot operator.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              HubSpot is the spine of how I run a marketing function, and I
              know it end to end. I have won two HubSpot Impact Awards:
              Platform Excellence in 2023 for the K-TIG rebuild that lifted
              leads by 172% within three months, and Grow Better Sales in 2020
              for a SaaS startup nurture programme that drove a 445%
              subscription increase. Platform fluency at this depth transfers
              cleanly across CRM stacks. I would ramp on Salesforce inside the
              first month.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              AI embedded in marketing workflows.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I have spent the past two years building practical AI tooling
              with Replit, Claude Code and the Anthropic API. I configured the
              HubSpot Customer Agent at 90 Seconds, so inbound queries are
              now handled with AI as a first touch. I led a 300+ page website
              migration via a fleet of Anthropic-API agents that crawled,
              classified, scored and migrated content automatically. I built
              90Labs, a sales-enablement workspace now in beta with the global
              sales team. Problem framing and rapid prototyping, not deep
              engineering.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              A senior marketer&apos;s eye.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              15+ years of marketing experience across B2B SaaS, professional
              services, tourism and higher education. Leadership team member
              in current and prior roles, reporting to the CEO. Player-coach
              by default: brief writing, coaching, capacity planning, quality
              oversight, and still hands-on in the work that matters. Comfortable
              presenting to C-suite, sales, product, design and agency
              partners.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3.5 — 90-day plan */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            What the first 90 days could look like.
          </h2>
          <p className="text-lg text-navy/70 mb-14 max-w-2xl">
            Written before knowing the internal context. Treat as direction,
            not commitment.
          </p>
          <div className="grid gap-12 md:grid-cols-3">
            <DayBlock
              range="Days 1 to 30"
              heading="Listen and learn."
              body="Spend the first month with the marketing team, the advisory and engineering leads I&#39;ll be supporting, and the wider CX and Delivery functions where AI embedding is already underway. Audit the current campaign stack, the marketing automation setup, the channel performance and the reporting cadence into the business. Listen carefully to what is already working, what has drifted, and where the team is feeling the friction. The first month is about earning context, not making changes."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Shape three plays."
              body="Pick three plays that compound. My first guesses, subject to what the inventory reveals: a lifecycle nurture rebuild for the highest-value advisory pathway, a content-and-campaign sprint anchored on a flagship sector story, and an AI-embedded workflow inside the marketing function itself (e.g. an internal research agent for sector intel, or a content classification layer for the existing library). Each play stands up with a clean measurement frame."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First lifecycle build live in Salesforce. First content-and-campaign sprint shipped against a defined target audience. First AI-embedded workflow in pilot with a clear before-and-after on team output. First clean performance read into the marketing leadership meeting, with sourced and influenced contribution broken out. Lessons documented for the next quarter."
            />
          </div>
        </div>
      </section>

      {/* Section 4 — My Best Results */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            My Best Results.
          </h2>
          <p className="text-lg text-cream/70 mb-14 max-w-2xl">
            I&apos;m proud of these. Results that genuinely moved the needle.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <ReceiptCard
              title="172% lead lift for K-TIG"
              tagline="HubSpot Impact Award, Platform Excellence, 2023."
              body="K-TIG sell advanced TIG welding technology to a global industrial buyer. The HubSpot rebuild had to handle Marketing, Sales, Service and CMS in one connected system, with 307 custom reports across 17 dashboards. Three months after launch, leads were up 172%. HubSpot named it Platform Excellence at the 2023 Impact Awards. The closest analogue I have to the kind of technical-product, advisory-led buyer GHD writes to."
            />
            <ReceiptCard
              title="HubSpot Customer Agent in production at 90 Seconds"
              tagline="AI embedded in marketing service, day one."
              body="Configured the HubSpot Customer Agent for 90 Seconds end to end: tone of voice, scripted answers, guardrails, escalation rules. Inbound customer queries are now handled with AI as a first touch. The direct equivalent of the AI-in-marketing-workflow work GHD&#39;s marketing function is set up to own."
            />
            <ReceiptCard
              title="300+ page website migration in weeks"
              tagline="AI-scored inventory and Anthropic-API agents."
              body="The 2026 90 Seconds website rebuild had 300+ legacy pages to migrate. The conventional path would have taken months. I built a fleet of Anthropic-API agents to crawl, classify, score and migrate the content automatically, with an AI-scored inventory guiding what stayed, what merged and what dropped. A multi-month migration compressed into a few weeks."
            />
            <ReceiptCard
              title="From zero to $5M in pipeline at 90 Seconds"
              tagline="Built a global demand engine in eighteen months."
              body="When I joined 90 Seconds, the marketing function had to rebuild the demand engine from scratch. Eighteen months later, $5M in opportunities sourced and influenced across inbound, paid, content, ABM and lifecycle, feeding a complex enterprise sales motion. The number is reported into the leadership team every cycle. Credit belongs to a small team punching above its weight."
            />
            <ReceiptCard
              title="82x ROAS for a national hostel chain"
              tagline="Paid search treated as a craft worth honing."
              body="Tight audience work, ruthless keyword pruning and weekly creative iteration delivered an 82x return on ad spend on Google Search Ads. Approximately $410,000 in attributable revenue from a single campaign, built and tuned by the team I led at Refuel Creative with clean reporting into a weekly client review."
            />
            <ReceiptCard
              title="Digital Adelaide, 40 to 270 delegates"
              tagline="Nine years building South Australia&#39;s biggest marketing conference."
              body="I took on Digital Adelaide (then Social Media Day Adelaide) as a small community event for 40 marketers. Nine years later, it is South Australia&#39;s largest marketing conference, with over 270 delegates and a national speaker roster, hosted by three directors who run it on top of their day jobs. The community-builder muscle behind every other number on this page."
            />
          </div>
        </div>
      </section>

      {/* Section 4.5 — From the work */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          From the work.
        </h2>
        <p className="text-lg text-navy/70 mb-14 max-w-2xl">
          A short visual tour of what I have shipped at 90 Seconds in the past
          year, plus the marketing community I have built in Adelaide over a
          decade.
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
            src="/work/web-attribution/hubspot-sync.png"
            alt="HubSpot lifecycle sync from the 90 Seconds web stack."
            caption="Full-funnel web attribution. GTM, GA4, PostHog and HubSpot wired together so every visitor is tracked from first touch to CRM."
          />
          <Shot
            src="/work/digital-adelaide/crowd-oval.webp"
            alt="Digital Adelaide attendees at Adelaide Oval."
            caption="Digital Adelaide at Adelaide Oval. The marketing conference I have grown from 40 to 270+ delegates as a Director over nine years."
          />
          <Shot
            src="/work/q2-nurture/email-01.png"
            alt="A Q2 nurture email designed for 90 Seconds enterprise marketing buyers."
            caption="Q2 nurture programme for enterprise marketing leaders. Eight fortnightly emails, HubSpot workflows, Tier-0 targeting and suppression."
          />
        </div>
      </section>

      {/* Section 5 — Credentials strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm text-navy/85">
          <Credential text="15+ years of marketing experience" />
          <Credential text="Certified Practising Marketer, AMI" />
          <Credential text="Two-time HubSpot Impact Award winner (2020, 2023)" />
          <Credential text="Director, Digital Adelaide (40 to 270+ delegates over 10 years)" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* Section 6 — My full pitch */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-12">
            My full pitch.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              I&apos;m a Certified Practising Marketer with 15+ years of
              marketing experience across B2B SaaS, professional services,
              tourism and higher education. Today I&apos;m Head of Marketing at
              90 Seconds, a global B2B video creation platform. I lead the
              global marketing function from APAC, with two direct reports in
              the region and daily partnership with sales and marketing
              counterparts across the US, UK and EMEA. Since June 2024 I have
              generated $5M in opportunities through inbound, paid, content,
              ABM and lifecycle programmes feeding a complex enterprise sales
              motion.
            </p>

            <p>
              Before 90 Seconds I spent three years as Digital Marketing
              Manager at Refuel Creative, leading a team of four through
              multi-channel work for B2B and B2C clients across government,
              defence, aged care, disability, higher education and industrial
              SaaS sectors. That period delivered two HubSpot Impact Awards:
              Platform Excellence in 2023 for the K-TIG rebuild that lifted
              leads 172%, and Grow Better Sales in 2020 for a SaaS startup
              nurture programme that drove a 445% subscription increase. It
              also delivered the kind of paid performance numbers that
              don&apos;t happen by accident: an 82x ROAS on a Google Search
              Ads campaign worth roughly $410,000 in revenue, 3.8x over MQL
              target on an executive-audience programme at the University of
              South Australia, and 500,000+ app installs across six countries
              for a UK mobile game developer at a 20% reduced CPI.
            </p>

            <p>
              For the past two years I have been building practical AI tooling
              alongside the day-to-day marketing function. Working with our VP
              of Product (who owned the engineering), I helped architect an
              internal GTM operations platform that integrates HubSpot CRM
              and SEMrush data to automate market mapping and content coverage
              analysis. I built 90Labs, a sales-enablement workspace hosting
              29+ assets, with a Pitch Builder now in beta with the global
              sales team. I led the 300+ page website migration using
              Anthropic-API agents. I configured the HubSpot Customer Agent so
              inbound queries are now handled with AI as a first touch. My
              lane is problem framing and rapid prototyping with Replit,
              Claude Code and the Anthropic API. Not deep engineering. For a
              marketing function set up to own how AI gets embedded in its own
              workflows, that double fluency is genuinely useful.
            </p>

            <p>
              On CRM: my depth sits in HubSpot. Two HubSpot Impact Awards.
              307 custom reports across 17 dashboards on a single client
              build. Customer Agent in production. The platform fluency
              transfers cleanly across CRM stacks. I would ramp on Salesforce
              inside the first month.
            </p>

            <p>
              On team and stakeholder work: player-coach is the mode I already
              work in. I had four direct reports at Refuel across creative,
              paid and content specialists, each running multi-million-dollar
              client portfolios. I have two direct reports at 90 Seconds
              today, supporting a global business. Brief writing, coaching,
              capacity planning, quality oversight, and still hands-on in the
              work that matters. Outside the day job I have served nine years
              as a Director of Digital Adelaide and two years as Chair of the
              Governing Council at Allenby Gardens Primary School.
              Board-level fluency is part of the kit.
            </p>

            <p>
              I&apos;m Adelaide-based and an Australian citizen. I would
              welcome the chance to talk through what the first 90 days of the
              GHD marketing plan could look like in practice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Contact */}
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
            Adelaide, South Australia. Australian citizen.
          </li>
        </ul>
        <a
          href={MAILTO}
          className="inline-block bg-crimson text-cream px-8 py-4 rounded-md font-medium hover:bg-crimson-dark transition"
        >
          Email me about GHD
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
