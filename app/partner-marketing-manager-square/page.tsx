import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rubina Carlson — your next Partner Marketing Manager at Square.",
  description:
    "Rubina Carlson, your next Partner Marketing Manager at Square. A three-time HubSpot Impact Award winner who grows B2B platforms through partners, channels and ecosystems.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Partner Marketing Manager - Square";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/partner-marketing-manager-square/Rubina-Carlson-CV.pdf";

export default function SquarePage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Square
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
              Your next Partner Marketing Manager at Square.
              <br />
              <span className="text-navy/70">
                A three-time HubSpot Impact Award winner who grows B2B
                platforms through partners, channels and ecosystems.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              I have spent 15+ years helping small and mid-sized businesses
              grow, which is the reason Square&apos;s partner ecosystem is work
              I want. Today I lead the global marketing function from APAC at 90
              Seconds, a two-sided platform connecting 14,000 video creators
              with 4,500 brands. Since June 2024 I have generated $5M in
              opportunities against pipeline and SQL targets. Before that I
              co-marketed as a HubSpot Solutions Partner, ran HubSpot User Group
              meetups to build the Adelaide HubSpot community, and won three
              HubSpot Impact Awards.
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

      {/* Section 2 — Why Square, why now */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Why Square, why now.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              This role appeals to me because it matches what I do today: own
              the marketing relationship with partners, build joint marketing
              and enablement plans against segment and opportunity size,
              localise global playbooks for the Australian market, and run the
              campaigns that turn partner relationships into qualified leads,
              self-onboarded sellers and product attach.
            </p>
            <p>
              Partner marketing is familiar ground. At Refuel I marketed as a
              HubSpot Solutions Partner: co-marketing with the platform, running
              HubSpot User Group meetups to build the Adelaide HubSpot
              community, and winning three Impact Awards. One of them,
              Integrations Innovation, was for driving adoption of third-party
              integrations, which is partner product attach by another name.
            </p>
            <p>
              Square exists to make commerce and financial services reachable
              for sellers of every size. I have spent my career helping small
              businesses grow, so a role built around Square&apos;s partner
              ecosystem in Australia is one I genuinely want. I am looking for a
              full-time role with dedicated budgets and a culture that keeps
              moving with the tools its customers are buying. Square fits.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Three pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
          What I would bring to Square&apos;s partner marketing.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              A partner and ecosystem marketer.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I market through partners and platform ecosystems. At Refuel I
              co-marketed as a HubSpot Solutions Partner, ran HubSpot User Group
              meetups to build the Adelaide HubSpot community, and won three
              Impact Awards. For a decade at Digital Adelaide I built and grew
              the sponsor and partner relationships behind South
              Australia&apos;s largest marketing conference, giving partners a
              stage in front of 270+ marketers. Building demand through
              partners, not direct alone, is how I already think.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Programmes measured to outcomes.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I own programmes end to end and I measure to results, not
              activity. I generated $5M in opportunities at 90 Seconds against
              pipeline and SQL targets, lifted B2B leads 172% in three months on
              one build, and drove a 445% subscription increase for an
              early-stage SaaS partner. Each of those maps to what this role
              measures: qualified leads, self-onboarded sellers and product
              attach. I document plans, track performance and optimise the next
              round from what the numbers say.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              An AI builder for repeatable campaigns.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I build with AI every day. I built 90Labs, a sales enablement
              workspace, in Replit, configured the HubSpot Customer Agent at 90
              Seconds, now handling live customer queries, and ran a 300+ page
              website migration with a fleet of Anthropic-API agents,
              compressing months into weeks. Repeatable partner campaigns are
              exactly the kind of work AI makes faster, and I would put that to
              work for Square&apos;s AU partners so the team ships more with the
              same headcount.
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
              heading="Meet the partners."
              body="Spend the first month with the AU partners I would own, the global partner marketing team whose playbooks I would localise, and the sales leaders who receive the leads. Audit the current joint marketing plans, the enablement assets partners actually use, and the reporting into leadership. Listen for which partners drive real seller growth and which relationships have drifted. The first month is about earning context, not making changes."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Localise and prioritise."
              body="Take the global partner playbooks and adapt them to how the Australian market actually buys. Build joint marketing and enablement plans for the highest-opportunity partners, tiered by segment and opportunity size. My first guesses, subject to what the audit reveals: a repeatable co-marketing campaign template, a lifecycle motion for self-onboarded sellers, and an industry-body partnership that amplifies Square's own marketing."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First localised partner campaign live with a clean measurement frame against SALs, self-onboarded sellers and product attach. First joint plan documented and running with a priority partner. First performance read into leadership, with insights on what to double down on next quarter. Recaps written so the next campaign starts from what worked, not from scratch."
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
              title="Partner product attach, recognised by HubSpot"
              tagline="Integrations Innovation Impact Award, 2020."
              body="Marketing as a HubSpot Solutions Partner at Refuel, I drove adoption of third-party integrations for a SaaS client and HubSpot named the work Integrations Innovation at the 2020 Impact Awards. Getting a partner ecosystem to attach and adopt the right integrations is exactly the outcome this role is built around."
            />
            <ReceiptCard
              title="From zero to $5M in pipeline at 90 Seconds"
              tagline="Built a global demand engine in eighteen months."
              body="When I joined 90 Seconds, marketing had to rebuild the demand engine from scratch. Eighteen months later, $5M in opportunities sourced and influenced across inbound, paid, content, ABM and lifecycle, feeding a complex enterprise sales motion. The number is reported into the leadership team every cycle. Credit belongs to a small team punching above its weight."
            />
            <ReceiptCard
              title="445% subscription increase for FlatRateNOW"
              tagline="Self-onboarding growth for an early-stage SaaS partner."
              body="Supporting SaaS startup FlatRateNOW from very early stage, I drove a 445% subscription increase and a re-engagement programme that brought 1,000 of 4,000 inactive users back at a 20% trial lift. HubSpot named the work Grow Better Sales at the 2020 Impact Awards. Turning sign-ups into active, self-onboarded users is exactly what this role needs for sellers."
            />
            <ReceiptCard
              title="A HubSpot partner community in Adelaide"
              tagline="HubSpot User Group meetups as a Solutions Partner."
              body="As a HubSpot Solutions Partner at Refuel, I ran HubSpot User Group meetups to build the HubSpot community in Adelaide, bringing users and partners together to share what actually works. Co-marketing with the platform over three years earned three HubSpot Impact Awards, including Integrations Innovation for driving adoption of third-party integrations. Partner marketing that shows up as community, not just campaigns."
            />
            <ReceiptCard
              title="172% lead lift for K-TIG"
              tagline="HubSpot Impact Award, Platform Excellence, 2023."
              body="K-TIG sell advanced welding technology to a global industrial buyer. The HubSpot rebuild spanned Marketing, Sales, Service and CMS in one connected system, with 307 custom reports across 17 dashboards. Three months after launch, leads were up 172%. HubSpot named it Platform Excellence at the 2023 Impact Awards."
            />
            <ReceiptCard
              title="Digital Adelaide, 40 to 270 delegates"
              tagline="A decade building a partner and sponsor ecosystem."
              body="I grew Digital Adelaide from a 40-person meetup into South Australia's largest marketing conference, with 270+ delegates and a national speaker roster. Nine years of building sponsor and partner relationships, giving partners a stage in front of the community. The partnership work behind every other number on this page."
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
            caption="Full-funnel attribution. GTM, GA4, PostHog and HubSpot wired together so every visitor is tracked from first touch to CRM."
          />
          <Shot
            src="/work/digital-adelaide/crowd-oval.webp"
            alt="Digital Adelaide attendees at Adelaide Oval."
            caption="Digital Adelaide at Adelaide Oval. The conference I grew from 40 to 270+ delegates as a Director over nine years."
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
          <Credential text="Three-time HubSpot Impact Award winner (2020, 2020, 2023)" />
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
              marketing experience across B2B SaaS, financial services, tourism
              and higher education. Today I&apos;m Head of Marketing at 90
              Seconds, a two-sided B2B platform connecting 14,000 video creators
              with 4,500 brands worldwide. I lead the global marketing function
              from APAC, with two direct reports in the region and daily
              partnership with counterparts across the US, UK and EMEA. Since
              June 2024 I have generated $5M in opportunities against pipeline
              and SQL targets.
            </p>

            <p>
              Partner and channel marketing is where I have real depth. At
              Refuel Creative I marketed as a HubSpot Solutions Partner:
              co-marketing with the platform, running HubSpot User Group meetups
              to build the Adelaide HubSpot community, and winning three HubSpot
              Impact Awards in three years, including Integrations Innovation for
              driving adoption of third-party integrations. For a decade I also
              built and grew the sponsor and partner relationships behind Digital
              Adelaide, South Australia&apos;s largest marketing conference. At
              SeaLink I produced the sales enablement the business development
              team used to win partnerships across the tourism trade.
            </p>

            <p>
              My background sits squarely in B2B SaaS and platform technology,
              with financial-services roots. I led B2B digital strategy for
              Adelaide Bank and Bendigo Bank early in my career, and I have
              marketed SaaS platforms end to end ever since. I own programmes
              from strategy through execution to measurement, and I hold myself
              to outcomes: $5M in opportunities at 90 Seconds, a 172% lead lift
              in three months on one build, and a 445% subscription increase for
              an early-stage SaaS partner. Each maps to what this role measures,
              qualified leads, self-onboarded sellers and product attach.
            </p>

            <p>
              Localising global playbooks for the Australian market is my daily
              reality. I run integrated campaigns across APAC, North America,
              the UK and EMEA, and my job is to take a global brand and make it
              land locally. I know both sides of the agency relationship, so I
              brief and manage external partners against a return, and I
              document plans, track performance and optimise from what the
              numbers say. I&apos;m Scrum Master Certified and I have sat on the
              Leadership Team in my current and prior roles, so holding
              marketing, sales, product and external partners to the same number
              is familiar ground.
            </p>

            <p>
              One more thing I would bring. I build with AI every day. I built
              90Labs, a sales enablement workspace, in Replit, configured a
              HubSpot Customer Agent now handling live customer queries, and ran
              a 300+ page website migration with a fleet of Anthropic-API
              agents. Repeatable partner campaigns are exactly the
              kind of work AI makes faster, and I would put that to work for
              Square&apos;s AU partners.
            </p>

            <p>
              I&apos;m Adelaide-based and an Australian citizen, happy to travel
              for the moments that matter. Square exists to make commerce
              reachable for sellers of every size, which is the work I care
              about. I would welcome the chance to talk through how I would grow
              Square&apos;s partner ecosystem in Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
          Let&apos;s talk about Square&apos;s AU partners.
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
            Adelaide, South Australia. Available fully remote. Australian
            citizen.
          </li>
        </ul>
        <a
          href={MAILTO}
          className="inline-block bg-crimson text-cream px-8 py-4 rounded-md font-medium hover:bg-crimson-dark transition"
        >
          Email me about Square
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
