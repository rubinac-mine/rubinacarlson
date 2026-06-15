import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For BDO. Rubina Carlson.",
  description:
    "Rubina Carlson in the Manager, Digital Marketing seat at BDO. A two-time HubSpot Impact Award winner with paid performance depth and a modern AI-builder toolkit.",
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
              For BDO.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Rubina Carlson in the Manager, Digital Marketing seat.
              <br />
              <span className="text-navy/70">
                A two-time HubSpot Impact Award winner with paid performance depth and a modern AI-builder toolkit.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              $5M in opportunities at 90 Seconds since June 2024 across
              inbound, paid, content, ABM and lifecycle. 172% lead lift for an industrial B2B
              client through a HubSpot rebuild that won the 2023 HubSpot Impact Award. 82x ROAS
              on a Google Search Ads campaign at Refuel Creative. Ten years building Digital
              Adelaide from 40 marketers to over 270 delegates.
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
          Three reasons I am the right Manager, Digital Marketing.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              HubSpot at award depth.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Two-time HubSpot Impact Award winner. The 2023 award for Platform
              Excellence came from a K-TIG rebuild that lifted leads 172% within
              three months, with 307 custom reports across 17 dashboards. The
              2020 award for Grow Better Sales came from a SaaS startup nurture
              programme that delivered a 445% subscription increase. Marketing
              automation is the spine of how I run a digital function.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Paid performance, owned end to end.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              82x ROAS on a Google Search Ads campaign for a national hostel
              chain at Refuel. 3.8x over MQL target on an executive-audience
              programme at the University of South Australia. 500,000+ app
              installs across six countries for a UK mobile game developer at a
              20% reduced CPI. Multi-channel budgets above $900K, owned end to
              end, year on year.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              AI-builder modern toolkit.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Two years building practical AI tooling with Replit, Claude Code
              and the Anthropic API. HubSpot Customer Agent in production at 90
              Seconds. 300+ page website migration via Anthropic-API agents.
              I market AI-enabled products today and I build with AI every day.
              Useful muscle for a function that wants to keep its toolkit modern.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Selected receipts */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Selected receipts.
          </h2>
          <p className="text-lg text-cream/70 mb-14 max-w-2xl">
            A short tour of the work behind the numbers.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <ReceiptCard
              title="$5M in opportunities at 90 Seconds"
              tagline="Inbound, paid, content, ABM and lifecycle. Since June 2024."
              body="Total marketing pipeline sourced and influenced into a complex enterprise sales motion. Reported into the leadership team each cycle."
            />
            <ReceiptCard
              title="172% lead lift for K-TIG"
              tagline="HubSpot Impact Award, Platform Excellence, 2023."
              body="Shaped a full HubSpot rebuild across Marketing, Sales, Service and CMS Hubs for an industrial B2B SaaS client. 307 granular custom reports across 17 dashboards."
            />
            <ReceiptCard
              title="82x ROAS for a national hostel chain"
              tagline="Google Search Ads, approx $410K in revenue."
              body="B2C paid performance campaign at Refuel Creative. Built and tuned by the team I led, with clean reporting into a weekly client review."
            />
            <ReceiptCard
              title="NPS from -50 to +10 for SeaLink Bruny Island"
              tagline="A community-led launch in 2018."
              body="Acted as official spokesperson in local Facebook groups. Stood up the website, the email programme and the social presence in parallel. Trust earned, not bought."
            />
            <ReceiptCard
              title="300+ page website migration"
              tagline="AI-scored inventory and an automated migrator."
              body="Led the 2026 90 Seconds website rebuild. Used Anthropic-API agents to crawl, classify, score and migrate. Compressed a multi-month migration into a few weeks."
            />
            <ReceiptCard
              title="Digital Adelaide from 40 to 270 delegates"
              tagline="South Australia's largest marketing conference."
              body="Nine years as a Director. Speaker programmes, national partners, COVID-19 pivot to virtual. The community-builder muscle behind every other number on this page."
            />
          </div>
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

      {/* Section 6 — The full pitch */}
      <section className="bg-cream-light border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-12">
            The full pitch.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-navy/85">
            <p>
              15+ years of marketing experience. Certified Practising Marketer.
              Today Head of Marketing at 90 Seconds, a global B2B video creation
              platform. I lead the global marketing function from APAC. Two
              direct reports in the region. Daily collaboration with sales and
              marketing counterparts across the US, UK and EMEA. Since June 2024
              I have generated $5M in opportunities through inbound, paid,
              content, ABM and lifecycle programmes.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              HubSpot at the spine.
            </h3>
            <p>
              HubSpot is where my marketing automation reps have been done. The
              K-TIG rebuild at Refuel won the 2023 HubSpot Impact Award for
              Platform Excellence: 172% lift in leads within three months and
              307 granular custom reports across 17 dashboards. The FlatRateNOW
              work won the 2020 HubSpot Impact Award for Grow Better Sales:
              445% subscription increase, plus a re-engagement workflow that
              brought 1,000 inactive SaaS subscribers back at a 20% trial lift.
              At 90 Seconds the same muscle now sits behind the $5M pipeline
              number, with the HubSpot Customer Agent configured to handle
              inbound queries with AI as a first touch.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Paid performance, owned end to end.
            </h3>
            <p>
              82x ROAS on a Google Search Ads campaign for a national hostel
              chain, approximately $410,000 in revenue. 3.8x over MQL target on
              an executive growth programme at the University of South
              Australia. 500,000+ app installs across six countries for a UK
              mobile game developer at a 20% reduced CPI. Multi-channel budgets
              above $900K at Refuel, with paid pacing, attribution and ROAS
              reporting baked into the weekly cadence.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Team leadership, player-coach mode.
            </h3>
            <p>
              4 direct reports at Refuel across creative, paid and content
              specialists, with multi-million-dollar client portfolios on each.
              2 direct reports at 90 Seconds today, supporting a global
              business. Player-coach is the mode I already work in: brief
              writing, coaching, capacity planning, quality oversight, and
              still hands-on in the work that matters.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI-builder modern toolkit.
            </h3>
            <p>
              Beyond running the marketing function I have spent the past two
              years building practical AI tooling with Replit, Claude Code and
              the Anthropic API. Working with our VP of Product (who owned the
              engineering) I contributed to an internal GTM operations platform
              that integrates HubSpot CRM and SEMrush data to automate market
              mapping and content coverage analysis. I built 90Labs, a
              sales-enablement workspace hosting 29+ assets, with a Pitch
              Builder now in beta rollout to the global sales team. I led the
              300+ page website migration using an AI-scored inventory on the
              Anthropic API. My lane is problem framing and rapid prototyping
              with AI, not deep engineering. BDO sells advisory craft to
              clients who are weighing how AI changes their function. The
              modern toolkit is in the kit.
            </p>

            <p>
              Adelaide-based. Australian citizen. Happy to travel for the
              moments that matter. I would welcome a conversation about the
              first 90 days of the BDO digital plan.
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

function Credential({ text }: { text: string }) {
  return (
    <li className="border-l-2 border-crimson pl-4 leading-snug">{text}</li>
  );
}
