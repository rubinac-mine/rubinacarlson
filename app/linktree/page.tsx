import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Linktree. Rubina Carlson.",
  description:
    "Rubina Carlson in the Growth Marketing Manager (SEO, AEO) seat at Linktree. A content strategist who builds with AI, not just writes about it.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Growth Marketing Manager (SEO, AEO) - Linktree";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/linktree/Rubina-Carlson-CV.pdf";

export default function LinktreePage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Linktree
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
        <div className="grid gap-12 sm:gap-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-navy">
              For Linktree.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Rubina Carlson in the Growth Marketing Manager (SEO, AEO) seat.
              <br />
              <span className="text-navy/70">
                A content strategist who builds with AI, not just writes about
                it.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              I read this JD twice because it sounded too aligned to be
              true. Owning the seat where creators, musicians,
              podcasters, realtors and SMBs meet AI Search. Content
              systems at scale. ICP-led segmentation across diverse
              audiences. That is the work I have been shipping at 90
              Seconds for the past two years.
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
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-crimson/20 mx-auto md:mx-0">
            <Image
              src="/rubina-portrait-square.jpg"
              alt="Rubina Carlson, smiling, in a black top and black fascinator."
              fill
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 20rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1.5 - Linktree-style link stack */}
      <section className="mx-auto max-w-5xl px-6 pb-20 sm:pb-24">
        <p className="text-sm font-medium tracking-wide uppercase text-crimson text-center mb-3">
          A small nod to the product
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy text-center mb-12 max-w-2xl mx-auto">
          If I built a Linktree for this application, it would look like this.
        </h2>
        <div className="mx-auto max-w-sm">
          <div className="bg-navy rounded-3xl p-8 shadow-2xl border border-navy/20">
            <div className="text-center mb-6">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-crimson-light mb-4">
                <Image
                  src="/rubina-portrait-square.jpg"
                  alt="Rubina Carlson"
                  fill
                  sizes="6rem"
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-cream text-lg">
                @rubinacarlson
              </p>
              <p className="text-cream/70 text-sm mt-1">
                AI builder. Content strategist. CPM SMC.
              </p>
            </div>
            <div className="space-y-3">
              <LinkPill href={CV_PATH} label="Download my CV" />
              <LinkPill href={MAILTO} label="Email Rubina" />
              <LinkPill
                href="https://www.linkedin.com/in/rubinacarlson"
                label="LinkedIn"
                external
              />
              <LinkPill href="https://rubinacarlson.com" label="rubinacarlson.com" />
            </div>
            <p className="text-center text-cream/50 text-xs mt-6 tracking-wide">
              Built with the brand tokens of the actual site.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Three pillars */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
            Why I am the right hire for the AEO seat.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, not just AI marketer.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling in Replit, Claude Code
                and the Anthropic API. Live in the stack answer engines run
                on. Curious by default about how AI models cite, rank and
                recommend.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Content systems at scale.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Shipped a 300+ page website migration at 90 Seconds on
                the Anthropic API. Pages crawled, classified, scored and
                migrated by agents. The pattern is the one a Marketing
                Engineer partnership runs on.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Organic growth depth.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                15+ years across HubSpot, inbound, lifecycle and conversion.
                Three HubSpot Impact Awards. Briefed editorial direction across
                creator, B2B SaaS and consumer ICPs. Trained to think in buyer
                moments, not keywords.
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
          A short tour of the AI and content systems work I have shipped from
          the marketing seat.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages from the legacy 90 Seconds site to the new multilingual site. Built an AI-scored content inventory and an automated migrator on the Anthropic API. Pages crawled, classified, scored and migrated by agents."
          />
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="AI in production marketing, with real customer load."
            body="Configured and shipped HubSpot's AI Customer Agent at 90 Seconds. Live, handling incoming customer service queries with AI-led triage. Vendor AI moved into a live workflow, with the change management to make it stick."
          />
          <BuildCard
            title="GTM OS"
            tagline="Market mapping with CRM and SEO data."
            body="Internal AI operations tool architected by our VP of Product. Integrates CRM and SEMrush data with a Postgres database to automate market mapping, ICP segmentation and content coverage analysis. I own the marketing and content layer: prompting, scoring criteria, workflow refinement."
          />
          <BuildCard
            title="90Labs"
            tagline="Sales-enablement platform built in Replit."
            body="Designed and built solo via Replit, with Claude and Claude Code doing the engineering under my prompts. Hosts 29+ assets and a Pitch Builder, in beta rollout to the global sales team. Initial signals promising."
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
              heading="Listen and map."
              body="Spend the first month with the Product SEO Lead, Director of Content, Website Experience Manager and the Marketing Engineer. Audit the current organic surface area: which queries Linktree wins, where the ICPs overlap, where the content lives, and which AI surfaces already cite the brand. Build the ICP-to-search-moment map for creators, musicians, podcasters, realtors and SMBs from inside the room, not from the JD."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Stand up the AEO programme."
              body="Define the AEO scorecard: which AI surfaces, which prompts, which citation patterns. Pick three answer-first content formats to pilot against the highest-intent ICP first. Partner with the Marketing Engineer on the content operations layer so the formats are scalable, not hand-built. Brief the editorial direction in line with the Director of Content's voice."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and measure."
              body="First answer-first content waves live. First AEO visibility readouts against the scorecard. First read on organic signup and revenue contribution. Identify which high-authority surfaces AI models cite, prioritise the ones aligned to ICP search moments, and stand up the content systems to feed them."
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
          <Credential text="Director, Digital Adelaide (40 to 200+ delegates over 9 years)" />
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
              15+ years of marketing experience. Certified Practising
              Marketer. Today Head of Marketing at 90 Seconds, a global
              B2B SaaS video platform. Two direct reports in APAC.
              Daily collaboration with sales and marketing counterparts
              across the US, UK and EMEA. The work that matches this
              role is the AI-fluent content operations work I have been
              shipping for the past two years.
            </p>
            <p>
              Three parts of my work map straight onto the AEO brief.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, hands-on.
            </h3>
            <p>
              AEO is a brand-new specialism. Career SEOs are still
              learning to prompt. I have spent the past two years
              building practical AI tooling in Replit, Claude Code and
              the Anthropic API. My lane is problem framing and
              prompting, not deep engineering. The stack the answer
              engines run on is the stack I already live in.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Content systems that scale, not handcrafted pages.
            </h3>
            <p>
              I shipped a 300+ page website migration at 90 Seconds
              using an AI-scored content inventory and an automated
              migrator on the Anthropic API. Pages get crawled,
              classified, scored and migrated by agents. I configured
              the HubSpot Customer Agent for AI-led service triage, now
              live in production. With our VP of Product I contribute to
              GTM OS, an internal AI operations tool that integrates
              CRM and SEMrush data to automate market mapping and
              content coverage.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Customer empathy across diverse ICPs.
            </h3>
            <p>
              At 90 Seconds I segment by enterprise vertical and
              customer status. At Refuel Creative I briefed editorial
              direction across industrial B2B SaaS (K-TIG), professional
              services (ACBG, BDO), national consumer travel (a hostel
              chain), accessible services (Carers and Disability Link),
              gaming consumer (TreesPlease Games), property tech
              (FlatRateNow) and public-sector innovation (Lot Fourteen).
              At SeaLink I segmented by buyer type and geography across
              Kangaroo Island, Bruny Island and the Murray. Creators,
              musicians, podcasters, realtors and SMBs is a different
              audience set; ICP-led segmentation is the same discipline.
            </p>

            <p>
              An honest read on the specialism. My 15+ years sit in the
              organic growth lane: HubSpot, inbound, lifecycle,
              conversion, three HubSpot Impact Awards. I have not been a
              career SEO content strategist. The bridge is the
              organic-growth depth, the AI-builder fluency that career
              SEOs do not have yet, and a track record of getting up
              the curve fast on a new buyer and a new discipline.
              Useful in week one on AEO experiments, content operations
              and ICP mapping. Ramped on the Linktree organic surface
              area and the creator economy inside the first quarter.
            </p>

            <p>
              Adelaide-based, remote-friendly, Australian citizen.
              Happy to travel for the moments that matter. I would
              welcome a conversation about the first 90 days of the AEO
              programme.
            </p>
          </div>
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
          Email me about Linktree
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

function LinkPill({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="block w-full bg-cream text-navy text-center py-3 px-4 rounded-full font-medium hover:bg-crimson-light hover:text-navy transition border border-cream/0 hover:border-crimson-light"
    >
      {label}
    </a>
  );
}
