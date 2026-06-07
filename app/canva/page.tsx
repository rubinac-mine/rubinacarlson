import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Canva. Rubina Carlson.",
  description:
    "Rubina Carlson in the Senior B2B Product Marketing Manager, Vertical Strategy seat at Canva. A vertical GTM strategist with direct credibility across all three of Canva's target verticals (Higher Education, Real Estate, Government) plus AI-builder credentials.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Senior B2B PMM, Vertical Strategy - Canva";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/canva/Rubina-Carlson-CV.pdf";

export default function CanvaPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Canva
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
              For Canva.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Rubina Carlson in the Senior B2B PMM, Vertical Strategy seat.
              <br />
              <span className="text-navy/70">
                I have lived inside all three of the verticals this role
                owns.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              Higher Education, Real Estate and Government are not
              adjacent for me. They are where I have done the work. Three
              years on faculty across UniSA Creative and TAFE SA, with a
              seat on the UniSA School of Communication Industry Advisory
              Panel in 2015. Client-specific sales enablement for global
              enterprise commercial real estate customers at 90 Seconds
              today. State-government stakeholder management at SeaLink
              through a contested Bruny Island ferry change in Tasmania.
              Adelaide Bank B2B strategy in regulated financial services
              at Nucleus.
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

      {/* Section 1.5 - A small nod to the product (vertical cards in Canva-style aesthetic) */}
      <section className="mx-auto max-w-5xl px-6 pb-20 sm:pb-24">
        <p className="text-sm font-medium tracking-wide uppercase text-crimson text-center mb-3">
          The three verticals
        </p>
        <p className="text-center text-navy/70 mb-8 text-base">
          A small nod to the product. All three, from inside the room.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <VerticalTile
            label="Higher Education"
            note="On faculty 2011 – 2018"
            tone="navy"
          />
          <VerticalTile
            label="Real Estate"
            note="Enterprise customers at 90 Seconds today"
            tone="crimson-light"
          />
          <VerticalTile
            label="Government"
            note="Lot Fourteen + state-gov tourism partners"
            tone="crimson"
          />
        </div>
      </section>

      {/* Section 2 - Why Canva, why this role */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Why Canva, why this role.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Canva has been on my wish-list employer shortlist for years.
              I have watched the brand redefine how the world experiences
              design. I have used the product across every role on the CV
              below, and worked inside a Canva partner agency (Refuel
              Creative, 2020 – 2023) where the platform sat at the centre
              of daily client production and pitch work.
            </p>
            <p>
              The role owns Higher Education, Real Estate and Government.
              I have lived inside all three. I have lectured at two SA
              universities and sat on the UniSA Industry Advisory Panel.
              I have managed state-government stakeholders through a
              contested ferry-service change at SeaLink. I have run
              campaigns for a regulated bank. And at 90 Seconds today, I
              deliver client-specific sales enablement for global
              enterprise customers in commercial real estate and
              financial services.
            </p>
            <p>
              Plus five years inside B2B tech and SaaS at 90 Seconds and
              Refuel Creative.
            </p>
            <p>
              And AI. Canva is a creative AI platform. The stack Canva is
              built on, and the stack your enterprise buyers are
              evaluating, is the stack I already live in.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Three pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
          Why I am the right hire for Vertical Strategy.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              All three verticals, from inside the room.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Three years on faculty at UniSA Creative and TAFE SA. UniSA
              Industry Advisory Panel member. State-government
              stakeholder management at SeaLink through a contested Bruny
              Island ferry change. Lot Fourteen social media strategy
              across SA's state-government-owned innovation precinct.
              Adelaide Bank B2B strategy at Nucleus. Enterprise sales
              enablement for global commercial real estate and financial
              services customers at 90 Seconds today.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Sales enablement and positioning, already shipped.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I built 90Labs at 90 Seconds, a sales enablement workspace
              with 29+ assets. The Pitch Builder inside it is in beta
              with the global sales team, giving reps tailored pitches by
              vertical and use case in minutes. I contribute to GTM OS,
              our internal market-mapping platform that sizes vertical
              opportunities by segment. Positioning, qualification and
              demo enablement, all live in the field today.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              AI builder, hands-on.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Two years building practical AI tooling in Replit, Claude
              Code and the Anthropic API. I configured and shipped the
              HubSpot Customer Agent at 90 Seconds, now handling customer
              service queries with AI in production. I designed the 300+
              page website migration on the Anthropic API. The stack
              Canva is built on, and the stack your enterprise buyers
              are evaluating, is the stack I already live in.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Vertical receipts */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            Relevant industry experience.
          </h2>
          <p className="text-lg text-navy/70 mb-12 max-w-2xl">
            Government, education and regulated industries, across the
            past fifteen years.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <VerticalCard
              vertical="Higher Education"
              title="Lecturer, UniSA Creative (2016 – 2018)"
              body="Postgraduate teaching inside the Graduate Diploma in Communication. Developed and delivered Australia's first postgraduate Social Media Management course in 2016. Worked inside university faculty governance, curriculum approval and assessment standards."
              image="/canva/rubina-lecturing-unisa.jpg"
              imageAlt="Rubina lecturing at UniSA Creative."
            />
            <VerticalCard
              vertical="Higher Education"
              title="UniSA School of Communication Industry Advisory Panel (2015)"
              body="Sat on the panel shaping industry alignment of the School's communication programmes. Direct exposure to school-level institutional decision-making and faculty-industry partnership norms."
            />
            <VerticalCard
              vertical="Higher Education"
              title="Lecturer, TAFE SA School of Business and Marketing (2011 – 2018)"
              body="Developed and delivered Australia's first tertiary social media course at TAFE SA in 2011. Ran a paid acquisition campaign that delivered 100 new student enquiries in a single month for the School."
              image="/canva/rubina-lecturing-tafe.jpg"
              imageAlt="Rubina recording video lectures on a green-screen set for TAFE SA."
            />
            <VerticalCard
              vertical="Higher Education"
              title="UniSA executive growth programme (Refuel Creative)"
              body="ABM campaign for the University of South Australia targeting CEOs, MDs and Business Owners. 3.8x over MQL target across four months."
            />
            <VerticalCard
              vertical="Real Estate"
              title="Enterprise commercial real estate customers (90 Seconds, 2023 – current)"
              body="Deliver client-specific sales enablement and account-based marketing for global enterprise customers in commercial real estate, including some of the largest commercial property firms in the world. Relationship-led GTM, with vertical-specific assets built per account."
            />
            <VerticalCard
              vertical="Regulated / Financial Services"
              title="Enterprise financial services customers (90 Seconds, 2023 – current)"
              body="Same relationship-led GTM and account-specific sales enablement model applied to enterprise financial services customers at 90 Seconds. The procurement-and-compliance shape familiar from the Adelaide Bank work years earlier, now at a larger scale."
            />
            <VerticalCard
              vertical="Government"
              title="SeaLink Bruny Island launch (2018)"
              body="Stood up the SeaLink Bruny Island digital presence through a contested ferry-service change the local community didn't want. State-government and council stakeholders engaged on reputation management. Acted as official spokesperson inside local Facebook communities. Lifted NPS from -50 to +10."
              image="/canva/rubina-sealink-ferry.jpg"
              imageAlt="Rubina with a SeaLink ferry."
            />
            <VerticalCard
              vertical="Tourism"
              title="SeaLink Kangaroo Island three-day sale (2018)"
              body="SeaLink-led multi-channel sale across digital and above-the-line. $326,000+ in online sales over three days, up 97% year-on-year. Ran inside the broader Kangaroo Island destination programme where SA Tourism Commission was a stakeholder."
              image="/canva/sealink-ki-ad-thumbnail.jpg"
              imageAlt="Still from the SeaLink Kangaroo Island TV ad."
              link="https://www.youtube.com/watch?v=inYsiP_X8YY"
              linkLabel="Watch the ad"
            />
            <VerticalCard
              vertical="Regulated"
              title="Adelaide Bank B2B strategy (Nucleus, 2013 – 2015)"
              body="B2B digital strategy for Adelaide Bank in regulated financial services. 30 new lender leads per month. The same procurement and compliance shape as the institutional buyers in Canva's vertical mix."
            />
            <VerticalCard
              vertical="Government"
              title="Lot Fourteen social media strategy (Refuel Creative, 2021 – 2023)"
              body="Won and delivered the social media strategy contract for Lot Fourteen, SA's state-government-owned innovation precinct. Multi-stakeholder, multi-tenant, all the usual."
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Build receipts */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          Build receipts.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          The AI tooling and sales enablement I have shipped from inside
          the marketing function at 90 Seconds.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="90Labs"
            tagline="Sales enablement platform built in Replit."
            body="Designed and built solo via Replit, with Claude and Claude Code doing the engineering under my prompts. Hosts 29+ active assets and a Pitch Builder tool. The Pitch Builder is in beta rollout with the global sales team. Initial signals promising. The closest mirror to PMM work I have shipped: positioning, qualification, demo enablement, all live in the hands of the field."
          />
          <BuildCard
            title="GTM OS"
            tagline="Market mapping and content coverage by vertical."
            body="Internal AI operations platform architected by our VP of Product. Integrates HubSpot and SEMrush data to automate market mapping and content coverage analysis by segment. I contribute the marketing logic and content layer: prompting, scoring criteria, vertical opportunity sizing."
          />
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="AI in production marketing, with real customer load."
            body="Configured and shipped HubSpot's AI Customer Agent at 90 Seconds. Live, handling incoming customer service queries with AI-led triage. Vendor AI capability moved into a live workflow, with the change management to make it stick."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website migration with an AI-scored content inventory."
            body="Migrated 300+ pages from the legacy 90 Seconds site to the new multilingual site. Built an AI-scored content inventory and an automated migrator on the Anthropic API. Pages crawled, classified, scored and migrated by agents."
          />
        </div>
      </section>

      {/* Section 6 - First 90 days */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            A sketch of the first 90 days.
          </h2>
          <p className="text-lg text-cream/70 mb-14 max-w-2xl">
            Written before knowing the internal context. Treat as
            direction, not commitment.
          </p>
          <div className="grid gap-12 md:grid-cols-3">
            <DayBlock
              range="Days 1 to 30"
              heading="Listen and inventory."
              body="Spend the first month with Enterprise Sales, Customer Marketing, Enablement, Demand Gen, Product and Legal. Map the existing vertical motions for Higher Ed, Real Estate and Government. Inventory the assets in market today: pitch decks, solutions pages, qualification guides, demo scripts. Sit in on customer calls. Pull together what the Win/Loss programme currently surfaces and where the gaps are."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Frame the verticals."
              body="Sharpen ICP, buyer personas, pain points and buying behaviour for each of the three verticals. First guesses, subject to inventory: a Canva Campus narrative refresh for Higher Ed with faculty and procurement-buyer cuts, an enterprise Real Estate positioning frame anchored to brand and listing workflows, a compliance-safe Government narrative for regulated buyer journeys. Stand up the Win/Loss intake so insights flow back into positioning weekly, not quarterly."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Ship and equip."
              body="First refreshed pitch deck per vertical in the field. First updated qualification guides and demo scripts in the hands of sales. First Win/Loss insight loop running. First joint campaign briefed with Customer Marketing, Enablement and Demand Gen on the highest-priority vertical. Pipeline-impact frame agreed with Sales Leadership. Lessons documented; the next wave teed up."
            />
          </div>
        </div>
      </section>

      {/* Section 7 - Credentials strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-sm text-navy/85">
          <Credential text="15+ years of marketing experience" />
          <Credential text="Certified Practising Marketer, AMI" />
          <Credential text="2023 HubSpot Impact Award, Platform Excellence (172% lead lift)" />
          <Credential text="Director, Digital Adelaide (40 to 200+ delegates over 10 years)" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* Section 8 - The full pitch */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
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
              Three things make me a serious candidate for this seat.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Vertical credibility across all three.
            </h3>
            <p>
              Higher Education first. Three years on faculty across UniSA
              Creative (Lecturer, 2016 – 2018) and TAFE SA School of
              Business and Marketing (Lecturer, 2011 – 2018). Industry
              Advisory Panel Member at the UniSA School of Communication
              in 2015. I have written curriculum, run tutorials, sat in
              faculty meetings, and watched institutional procurement up
              close. The Canva Campus pitch lands differently when the
              person carrying it has stood at the front of a university
              tutorial room. Plus 3.8x over MQL target on an
              executive-audience ABM programme for the University of
              South Australia at Refuel Creative.
            </p>
            <p>
              Then Government and regulated. At SeaLink in Tasmania, I
              stood up the Bruny Island digital launch through a contested
              ferry-service change the local community didn't want, with
              state-government and council stakeholders engaged on
              reputation management. NPS -50 to +10. At SeaLink in SA, I
              ran the Kangaroo Island three-day sale ($326K, up 97% YoY)
              inside the broader destination programme where SA Tourism
              Commission was a stakeholder. Lot Fourteen social media
              strategy at
              Refuel Creative across SA's state-government-owned
              innovation precinct. Adelaide Bank B2B strategy at Nucleus
              in regulated financial services (30 new lender leads per
              month). A written testimonial in the back pocket from
              Hamish Cameron, now founder of AccuFind.ai (formerly
              Executive Director, Information Systems and Technology at
              South Australian Police).
            </p>
            <p>
              And Real Estate. At 90 Seconds today, I deliver
              client-specific sales enablement and account-based
              marketing for global enterprise customers in commercial
              real estate, including some of the largest commercial
              property firms in the world. Relationship-led GTM,
              vertical-specific assets built per account. The same shape
              this Canva role would carry into the Real Estate vertical.
              Same model again for enterprise financial services
              customers at 90 Seconds, which sits under the JD's
              regulated-industries strong plus.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Sales enablement and positioning, already shipped.
            </h3>
            <p>
              I built 90Labs at 90 Seconds, a sales enablement workspace
              with 29+ assets. The Pitch Builder inside it is in beta
              with the global sales team, giving reps tailored pitches by
              vertical and use case in minutes. I also contribute to GTM
              OS, the internal market-mapping platform our VP of Product
              architected, which sizes vertical opportunities by segment.
              And I have worked inside enterprise customer procurement
              across MSAs, regional supplier agreements and Statements of
              Work.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              AI builder, hands-on.
            </h3>
            <p>
              I have spent the past two years building practical AI
              tooling in Replit, Claude Code and the Anthropic API. I
              configured and shipped the HubSpot Customer Agent, now
              handling incoming customer service queries with AI in
              production. I designed the 300+ page website migration
              system on the Anthropic API. My lane is problem framing and
              rapid prototyping with AI, not deep engineering. Canva is
              a creative AI platform. The stack the team recommends to
              customers is the stack I already live in.
            </p>

            <p>
              I'm not a career product marketer. The JD asks for 5+
              years of direct PMM or solutions marketing experience, and
              I'd be a stretch on that. Not on the verticals though, I
              have lived inside all three. I am applying because Canva
              has been on my wish-list for years, and because the AI
              stack your customers are evaluating is the AI stack I
              already build with daily.
            </p>

            <p>
              Adelaide-based, Canvanaut co-working space available, happy
              to travel for the moments that matter. Australian citizen.
              Happy to talk about the first 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 - Contact */}
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
            Adelaide, South Australia. Canvanaut co-working space
            available. Australian citizen.
          </li>
        </ul>
        <a
          href={MAILTO}
          className="inline-block bg-crimson text-cream px-8 py-4 rounded-md font-medium hover:bg-crimson-dark transition"
        >
          Email me about Canva
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

function VerticalTile({
  label,
  note,
  tone,
}: {
  label: string;
  note: string;
  tone: "navy" | "crimson" | "crimson-light";
}) {
  const toneClasses =
    tone === "navy"
      ? "bg-navy text-cream"
      : tone === "crimson"
      ? "bg-crimson text-cream"
      : "bg-crimson-light text-navy";
  const noteOpacity =
    tone === "crimson-light" ? "text-navy/75" : "text-cream/75";
  return (
    <div
      className={`${toneClasses} rounded-xl p-6 sm:p-8 aspect-[4/3] flex flex-col justify-between`}
    >
      <p className="text-xs font-semibold tracking-wide uppercase opacity-80">
        Vertical
      </p>
      <div>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
          {label}
        </p>
        <p className={`mt-2 text-sm ${noteOpacity}`}>{note}</p>
      </div>
    </div>
  );
}

function VerticalCard({
  vertical,
  title,
  body,
  image,
  imageAlt,
  link,
  linkLabel,
}: {
  vertical: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div className="border border-navy/15 bg-cream rounded-lg overflow-hidden hover:border-crimson/50 transition flex flex-col">
      {image && (
        <div className="relative w-full aspect-[3/2] bg-navy/5">
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <p className="text-crimson font-semibold tracking-wide uppercase text-xs mb-3">
          {vertical}
        </p>
        <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
        <p className="text-navy/80 leading-relaxed">{body}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex items-center text-crimson font-medium hover:underline underline-offset-4"
          >
            {linkLabel || "View"} →
          </a>
        )}
      </div>
    </div>
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
