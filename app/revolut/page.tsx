import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Revolut. Rubina Carlson.",
  description:
    "Rubina Carlson on the Marketing Manager seat for Revolut Business, Australia. A senior B2B growth marketer choosing closer to the campaigns, not further away.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Marketing Manager (Revolut Business) - Australia";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/revolut/Rubina-Carlson-CV.pdf";

export default function RevolutPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Revolut
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
          For Revolut.
        </h1>
        <p className="mt-10 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Rubina Carlson on the Marketing Manager seat for Revolut Business,
          Australia.
          <br />
          <span className="text-navy/70">
            A senior B2B growth marketer choosing closer to the campaigns, not
            further away.
          </span>
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/80">
          This page is a working sample of how I would approach the Australian
          Revolut Business role. Tailored, on-brand, shipped fast. Built in an
          evening with the AI tooling I use every day.
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
            Why this is the right Marketing Manager hire.
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                Australian B2B, end to end.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                15+ years across Australian B2B sectors: SaaS, financial
                services, defence, professional services, tourism. ATL, BTL,
                demand gen, partnerships, events. Salesforce-adjacent CRM and
                HubSpot at expert level. No ramp on the market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                $5M pipeline, generated.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Since June 2024, I have generated $5M in opportunities at 90
                Seconds through inbound, paid, ABM, lifecycle and field.
                Performance read weekly, experiments shipped quarterly. I
                carry the number.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-navy">
                AI builder, not just AI marketer.
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Two years building practical AI tooling with Claude Code and
                Replit. Problem framing and rapid prototyping, not deep
                engineering. For a fintech building heavily with AI, useful in
                the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Build receipts */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          Receipts.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          A short tour of campaigns and builds that map to your JD.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ReceiptCard
            title="172% lead lift"
            tagline="HubSpot platform rebuild, industrial B2B SaaS."
            body="As Digital Marketing Manager at Refuel Creative, I shaped a HubSpot rebuild for K-TIG across Marketing, Sales, Service and CMS Hubs. 307 custom reports across 17 dashboards. 172% increase in leads within three months. 2023 HubSpot Impact Award for Platform Excellence."
          />
          <ReceiptCard
            title="30 lender leads / month"
            tagline="B2B digital strategy, Adelaide Bank."
            body="At Nucleus, I led the B2B digital strategy for Adelaide Bank's commercial lending team. Steady pipeline of 30 new lender leads per month. Financial services lead gen is not new territory."
          />
          <ReceiptCard
            title="3.8x over MQL target"
            tagline="LinkedIn and Meta to a CEO and MD audience."
            body="Four-month campaign for an executive growth programme at the University of South Australia. 3.8x over MQL target on an audience of CEOs, MDs and business owners. Hypothesis-led, tightly measured."
          />
          <ReceiptCard
            title="82x ROAS"
            tagline="Google Search Ads, national hostel chain."
            body="Approximately $410K in attributable revenue. Tight measurement loop, quick reads, fast moves on creative and bids."
          />
          <ReceiptCard
            title="90Labs"
            tagline="Live sales-enablement platform built in Replit."
            body="Hosts 29+ active assets and a Pitch Builder tool, in beta rollout with the global 90 Seconds sales team. Built and maintained from the marketing seat."
          />
          <ReceiptCard
            title="Bruny Island NPS, -50 to +10"
            tagline="Community-led launch for SeaLink."
            body="Acted as official spokesperson inside local Facebook communities to address objections. Lifted NPS from -50 to +10 in a market that did not want us there. Field and community marketing under pressure."
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
              body="Time with the AU sales team, the regional GM, the global Demand Gen and Product Marketing leads. Map current pipeline, named accounts, partner channels and the Australian customer base. Audit which global Revolut Business plays lift into AU unchanged, which need local nuance, and which are missing. Interview 8 to 10 Aussie Business customers to ground the buyer story in real voices."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Pick three plays."
              body="First guesses, subject to inventory: an Australian executive roundtable series for CFOs and founders of high-growth SMBs and scale-ups, an ABM programme on a named-account list with payments and FX as the wedge, and a partner co-marketing motion with the AU accounting and fintech ecosystem. Stand each up with a clear measurement frame against pipeline."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and report."
              body="First roundtable in market. First ABM cohort in flight. First partner campaign live. First Australia pipeline read into senior leadership with marketing-sourced and marketing-influenced breakdown. One hypothesis confirmed, one killed, one moved to round two. Lessons documented."
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
          <Credential text="Director, Digital Adelaide (40 to 270+ delegates over 10 years)" />
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
              Revolut Business is the part of the brand I have been watching
              with most interest. A consumer fintech with serious momentum,
              going hard at B2B. Australian market in build mode. Modern
              brand, clear voice, commercial bias. Owning the Australian
              growth function for that product is the role I want next.
            </p>
            <p>
              I am a Certified Practising Marketer with 15+ years of marketing
              experience. Today I am Head of Marketing at 90 Seconds, a global
              B2B SaaS video platform. Two direct reports in APAC, daily
              partnership with sales and marketing counterparts across US, UK
              and EMEA. Since June 2024 I have generated $5M in opportunities
              through inbound, paid, ABM, lifecycle and field. I run the
              demand engine end to end and carry the pipeline number.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              On the seniority gap.
            </h3>
            <p>
              The JD asks for 4+ years of B2B marketing. I bring 15. That is
              the conversation worth having early, and the honest answer is
              this: I am applying because the work is exactly what I want to
              do hands-on right now, not in spite of the title. Australian
              B2B, full-funnel, against a pipeline number, for a brand I
              respect. A senior operator who has led teams and wants to ship
              the work brings faster ramp, sharper judgement and zero ego
              about the title. I am not pitching this as &quot;a role I will
              grow into.&quot; I am pitching it as a role I want to do.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Australian B2B, end to end.
            </h3>
            <p>
              15 years across Australian B2B: SaaS, financial services,
              defence, professional services. ATL, BTL, demand gen,
              partnerships, events. At Refuel Creative, a 172% lead lift for
              K-TIG via a HubSpot platform rebuild that won the 2023 HubSpot
              Impact Award. At Nucleus, B2B digital strategy for Adelaide
              Bank delivering 30 new lender leads per month. At UniSA, a 3.8x
              over MQL target on an executive-audience LinkedIn and Meta
              programme. Ten years as a Director of Digital Adelaide, growing
              the conference from 40 marketers to over 270 delegates. Field
              and community activations are not theoretical work for me.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, not just AI marketer.
            </h3>
            <p>
              Beyond the marketing function, I have spent the past two years
              building practical AI tooling in Replit and Claude Code. I
              architected an internal GTM operations platform with our VP of
              Product, integrating CRM and SEMrush data to automate market
              mapping and content coverage. I built 90Labs, a live
              sales-enablement platform in beta rollout with the global sales
              team. My lane is problem framing and rapid prototyping with AI
              tooling. For a fintech building heavily with AI, having a
              marketer in the regional seat who ships her own tooling earns
              its keep.
            </p>

            <p>
              On payments and fintech specifically, I will be honest. I have
              worked with financial services clients (Adelaide Bank, Bendigo
              Bank) and across enterprise B2B SaaS, but I have not sat inside
              a payments business. The bridge is 15 years of Australian B2B
              fundamentals, hands-on experience with the channels and
              technology Revolut Business needs to scale here, and a track
              record of ramping fast on a new buyer and a new category.
              Productive in week one on planning, demand and field. Ramped on
              the Revolut Business buyer and the global platform inside the
              first quarter.
            </p>

            <p>
              Adelaide-based, remote-friendly, Australian citizen. Happy to
              travel for the moments that matter. I would love a conversation
              about the Australian plan.
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
          Email me about Revolut Business
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
