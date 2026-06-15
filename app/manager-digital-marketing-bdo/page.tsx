import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rubina Carlson — your next Manager, Digital Marketing at BDO.",
  description:
    "Rubina Carlson, your next Manager, Digital Marketing at BDO. A two-time HubSpot Impact Award winner who has spent fifteen years inside the professional-services buyer mindset.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Manager, Digital Marketing - BDO Australia";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/manager-digital-marketing-bdo/Rubina-Carlson-CV.pdf";

export default function BDOPage() {
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
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid gap-12 sm:gap-16 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] text-navy">
              Rubina Carlson.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Your next Manager, Digital Marketing at BDO.
              <br />
              <span className="text-navy/70">
                A two-time HubSpot Impact Award winner who has spent fifteen
                years inside the professional-services buyer mindset.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              Since joining 90 Seconds I have generated $5M in opportunities
              across inbound, paid, content, ABM and lifecycle. Before that I
              led a four-person team at Refuel Creative to a HubSpot Impact
              Award for Platform Excellence (172% lead lift) and an 82x ROAS
              Google Search campaign worth roughly $410,000 in revenue. For
              the past ten years I have also served as a Director of Digital
              Adelaide, growing it from a 40-person meetup into South
              Australia&apos;s largest marketing conference with over 270
              delegates.
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

      {/* Section 2 — Why BDO, why now */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Why BDO, why now.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              The Manager, Digital Marketing role appeals to me because it
              would enable me to own the digital strategy across social,
              website, email and paid, run the lead generation engine on
              HubSpot, coach a small team of specialists and report
              performance into leadership.
            </p>
            <p>
              The professional services buyer is familiar territory. At Refuel
              Creative I led the digital function across clients in government,
              defence, aged care, disability, higher education and B2B SaaS.
              Refuel itself made the 2022 BDO Fast Movers List during that time.
              I have spent years inside the partner and principal buyer mindset.
            </p>
            <p>
              I am looking for a full-time role with dedicated budgets and a
              culture that embraces innovation. BDO sits at the intersection of
              two things I care about: a global advisory firm with deep
              professional-services craft, and a marketing function with the
              budget and the appetite to keep moving with the tools its
              customers are buying.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Three pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
          What I would bring to the BDO marketing function.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Award-winning HubSpot Expert.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              HubSpot is the spine of how I run a digital marketing function,
              and I know it end to end. I have won two HubSpot Impact Awards:
              Platform Excellence in 2023 for the K-TIG rebuild that lifted
              leads by 172% within three months, and Grow Better Sales in 2020
              for a SaaS startup nurture programme that drove a 445%
              subscription increase. At 90 Seconds the same HubSpot muscle now
              sits behind the $5M pipeline number, with the Customer Agent
              configured to handle inbound queries as a first touch.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Proven Paid Performance Manager.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I have managed multi-channel paid budgets above $900K year on
              year and I know what a good return looks like in the numbers and
              in the daily pacing. For a national hostel chain at Refuel I
              delivered an 82x ROAS on Google Search Ads, approximately
              $410,000 in revenue from a single campaign. For an executive
              growth programme at the University of South Australia I exceeded
              the MQL target by 3.8x, and for a UK mobile game developer I
              helped acquire 500,000+ users across six countries at a 20%
              reduced CPI.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Innovative AI Builder.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Beyond running the marketing function, I have spent the past two
              years building practical AI tooling with Replit, Claude Code and
              the Anthropic API. I configured the HubSpot Customer Agent at 90
              Seconds, led a 300+ page website migration using Anthropic-API
              agents, and built 90Labs, a sales-enablement workspace now in
              beta with the global sales team. I market AI-enabled products
              today and I build with AI every day. For a firm whose clients
              are weighing how AI changes their function, that double fluency
              is genuinely useful.
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
              body="Spend the first month with the digital team, the marketing leadership, and the partners across the advisory practices who own the growth priorities I am here to support. Audit the current HubSpot setup, the live paid campaigns, the channel performance and the reporting cadence into leadership. Listen carefully to what is already working, what has drifted, and where the team is feeling the friction. The first month is about earning context, not making changes."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Shape three plays."
              body="Pick three digital plays that compound. My first guesses, subject to what the inventory reveals: a HubSpot lifecycle rebuild for the highest-value demand pathway, a paid performance audit and pacing reset across the largest budget lines, and an account-based motion targeting the CFO and CEO audiences BDO advises. Each play stands up with a clean measurement frame against pipeline contribution."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First HubSpot lifecycle build live. First paid optimisation cycle reported with before-and-after metrics. First account-based cohort in flight against a defined target list. First clean performance read into the marketing leadership meeting, with sourced and influenced pipeline broken out. Lessons documented for the next quarter."
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
            I&apos;m proud of these achievements. Results that genuinely moved
            the needle.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <ReceiptCard
              title="From zero to $5M in pipeline at 90 Seconds"
              tagline="Built a global demand engine in eighteen months."
              body="When I joined 90 Seconds, the marketing function had to rebuild the demand engine from scratch. Eighteen months later, $5M in opportunities sourced and influenced across inbound, paid, content, ABM and lifecycle, feeding a complex enterprise sales motion. The number is reported into the leadership team every cycle. Credit belongs to a small team punching above its weight."
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
              title="NPS from -50 to +10 for SeaLink Bruny Island"
              tagline="A community-led launch in 2018."
              body="In 2018 SeaLink entered the Bruny Island market against a local community that had been vocal in its objections. I stood up the website, the email programme and the social presence in parallel, and acted as official spokesperson in local Facebook groups, answering every question that came in. Six months later, NPS had moved from -50 to +10. Trust earned, not bought."
            />
            <ReceiptCard
              title="300+ page website migration in weeks"
              tagline="AI-scored inventory and Anthropic-API agents."
              body="The 2026 90 Seconds website rebuild had 300+ legacy pages to migrate. The conventional path would have taken months. I built a fleet of Anthropic-API agents to crawl, classify, score and migrate the content automatically, with an AI-scored inventory guiding what stayed, what merged and what dropped. A multi-month migration compressed into a few weeks."
            />
            <ReceiptCard
              title="Digital Adelaide, 40 to 270 delegates"
              tagline="Nine years building South Australia&apos;s biggest marketing conference."
              body="I took on Digital Adelaide (then Social Media Day Adelaide) as a small community event for 40 marketers. Nine years later, it is South Australia&apos;s largest marketing conference, with over 270 delegates and a national speaker roster, hosted by three directors who run it on top of their day jobs. The community-builder muscle behind every other number on this page."
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
              defence, aged care, disability, higher education and SaaS
              sectors. That period delivered two HubSpot Impact Awards:
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
              Refuel itself made the BDO Fast Movers List in 2022. Working
              inside an agency that BDO had recognised gave me a useful read
              on what the firm values: growth fundamentals, commercial
              discipline, and the kind of operators who can move quickly
              without breaking things.
            </p>

            <p>
              For the past two years I have also been building practical AI
              tooling alongside the day-to-day marketing function. Working
              with our VP of Product (who owned the engineering), I helped
              architect an internal GTM operations platform that integrates
              HubSpot CRM and SEMrush data to automate market mapping and
              content coverage analysis. I built 90Labs, a sales-enablement
              workspace hosting 29+ assets, with a Pitch Builder now in beta
              with the global sales team. I led the 300+ page website
              migration using Anthropic-API agents. I configured the HubSpot
              Customer Agent so inbound queries are now handled with AI as a
              first touch. My lane is problem framing and rapid prototyping
              with AI, not deep engineering. BDO is advising clients who are
              weighing how AI changes their business. The double fluency,
              marketing AI-enabled products and building with AI daily, is
              genuinely useful for a marketing team supporting that
              conversation.
            </p>

            <p>
              On team leadership: player-coach is the mode I already work in.
              I had four direct reports at Refuel across creative, paid and
              content specialists, each running multi-million-dollar client
              portfolios. I have two direct reports at 90 Seconds today,
              supporting a global business. Brief writing, coaching, capacity
              planning, quality oversight, and still hands-on in the work
              that matters. It is the mode this role calls for and the mode
              I am most useful in.
            </p>

            <p>
              I&apos;m Adelaide-based and an Australian citizen. I&apos;m happy
              to travel for the moments that matter. I would welcome the
              chance to talk through what the first 90 days of the BDO
              digital plan could look like in practice.
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
