import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Canva. Rubina Carlson.",
  description:
    "Rubina Carlson in the Senior B2B Product Marketing Manager, Vertical Strategy seat at Canva. A vertical GTM strategist with direct buyer-side credibility in Higher Education and Government, plus AI-builder credentials.",
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
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tight leading-[0.95] text-navy">
          For Canva.
        </h1>
        <p className="mt-10 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Rubina Carlson in the Senior B2B PMM, Vertical Strategy seat.
          <br />
          <span className="text-navy/70">
            A vertical GTM strategist who has spent her career on the buyer
            side of two of the three verticals you are hiring this role to
            own.
          </span>
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/80">
          Higher Education and Government are not adjacent for me. They are
          where I have done the work. Three years on faculty across UniSA
          Creative and TAFE SA, with a seat on the UniSA School of
          Communication Industry Advisory Panel. State-government tourism
          partnerships at SeaLink across Tasmania and South Australia.
          Regulated financial services GTM at Adelaide Bank. The vertical
          empathy this role calls for is the empathy I bring with me.
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
              The Vertical Strategy seat is the rare PMM brief where the
              fit is in the verticals themselves, not the title. The role
              owns Higher Education, Real Estate and Government. I have
              been the buyer in two of those rooms. I have sat on a
              university Industry Advisory Panel. I have built
              digital launches with state tourism authorities. I have run
              campaigns for a regulated bank. That is the kind of vertical
              context career PMMs typically have to ramp into. I would be
              ramping on Real Estate only.
            </p>
            <p>
              And the AI-builder layer. Canva is a creative AI platform.
              The stack Canva is built on, and the stack your enterprise
              buyers are evaluating, is the stack I already live in.
              That is where the differentiation sits.
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
              Vertical buyer empathy in Higher Ed and Government.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Three years on faculty across UniSA Creative and TAFE SA.
              UniSA School of Communication Industry Advisory Panel
              member. SeaLink digital launches built with Tasmanian and
              SA state tourism authorities. Adelaide Bank B2B strategy
              in regulated financial services. I have been inside the
              rooms Canva is hiring this role to win.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              Sales enablement and pitch positioning at scale.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Built 90Labs, a sales enablement workspace hosting 29+
              assets. The custom Pitch Builder inside it is in beta
              rollout with the global sales team. The PMM-adjacent core
              of this Canva role, already shipped from the marketing
              seat at 90 Seconds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              AI builder, hands-on.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Two years building practical AI tooling in Replit, Claude
              Code and the Anthropic API. The stack Canva is built on,
              and the stack your enterprise buyers are evaluating, is
              the stack I already live in. The moat against career PMMs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Vertical receipts */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            Vertical receipts.
          </h2>
          <p className="text-lg text-navy/70 mb-12 max-w-2xl">
            The buyer-side work behind the vertical claim.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <VerticalCard
              vertical="Higher Education"
              title="Lecturer, UniSA Creative (2016 – 2018)"
              body="Postgraduate teaching inside the Graduate Diploma in Communication. Developed and delivered Australia's first postgraduate Social Media Management course in 2016. Worked inside university faculty governance, curriculum approval and assessment standards."
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
            />
            <VerticalCard
              vertical="Higher Education"
              title="UniSA executive growth programme (Refuel Creative)"
              body="ABM campaign for the University of South Australia targeting CEOs, MDs and Business Owners. 3.8x over MQL target across four months."
            />
            <VerticalCard
              vertical="Government"
              title="SeaLink Bruny Island launch with Tasmanian state agencies (2018)"
              body="Launched the SeaLink Bruny Island digital presence with state government tourism stakeholders. Acted as official spokesperson within local Facebook communities. Lifted NPS from -50 to +10 through a community-led launch programme."
            />
            <VerticalCard
              vertical="Government"
              title="Kangaroo Island three-day sale with SA Tourism Commission (2018)"
              body="Multi-channel campaign blending digital and above-the-line, delivered with state tourism partners. $326,000+ in online sales over three days, up 97% year-on-year."
            />
            <VerticalCard
              vertical="Government / regulated"
              title="Adelaide Bank B2B strategy (Nucleus, 2013 – 2015)"
              body="B2B digital strategy for Adelaide Bank in regulated financial services. 30 new lender leads per month. Same procurement-and-compliance shape as the institutional buyers in Canva's vertical mix."
            />
            <VerticalCard
              vertical="Government / innovation precinct"
              title="Lot Fourteen social media strategy (Refuel Creative, 2021 – 2023)"
              body="Won and delivered the social media strategy contract for Lot Fourteen, South Australia's innovation neighbourhood. Multi-stakeholder government and innovation precinct."
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
          The PMM-adjacent and AI-builder work I have shipped from the
          marketing seat at 90 Seconds.
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
              Vertical buyer empathy in two of three.
            </h3>
            <p>
              Higher Education is the strongest hook. Three years on
              faculty across UniSA Creative (Lecturer, 2016 – 2018) and
              TAFE SA School of Business and Marketing (Lecturer, 2011 –
              2018). Industry Advisory Panel Member at the UniSA School
              of Communication in 2015. I have written curriculum, run
              tutorials, sat in faculty meetings, and watched institutional
              procurement up close. The Canva Campus pitch lands
              differently when the person carrying it has stood at the
              front of a university tutorial room. Then 3.8x over MQL
              target on an executive-audience ABM programme for the
              University of South Australia at Refuel Creative.
            </p>
            <p>
              Government is the second. SeaLink Bruny Island and Kangaroo
              Island launches built with Tasmanian and SA state tourism
              authorities. NPS lift -50 to +10 at Bruny. $326K three-day
              sale up 97% YoY at KI. Adelaide Bank B2B strategy at Nucleus
              in regulated financial services (30 new lender leads per
              month). Lot Fourteen social media strategy at Refuel
              Creative across a multi-stakeholder government and
              innovation precinct. A written testimonial in the back
              pocket from Hamish Cameron, Executive Director, Information
              Systems and Technology, South Australian Police.
            </p>
            <p>
              Real Estate is the one I would ramp on. My place-based
              experience runs through tourism rather than enterprise
              property. Honest gap. Bridgeable inside the first quarter.
            </p>

            <h3 className="text-2xl font-semibold text-navy pt-4">
              Sales enablement and PMM-adjacent positioning, already
              shipped.
            </h3>
            <p>
              At 90 Seconds I built 90Labs, a sales enablement workspace
              hosting 29+ assets. The Pitch Builder inside it is in beta
              rollout with the global sales team, designed to give reps
              tailored pitches by vertical and use case in minutes. I
              contribute to GTM OS, the internal market-mapping platform
              architected by our VP of Product, which sizes vertical
              opportunities by segment. This is the PMM-adjacent
              infrastructure work the Canva brief calls for, shipped from
              the marketing seat. I have also worked inside enterprise
              customer procurement at 90 Seconds across MSAs, regional
              supplier agreements and Statements of Work.
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
              customers is the stack I already live in. That is the
              differentiation I bring vs a career PMM.
            </p>

            <p>
              On the lane. I am not a career product marketer. The JD
              calls for 5+ years of direct PMM or solutions marketing
              experience. The honest read is that the case for me sits
              in the verticals (two of three with direct buyer-side
              credibility) and the AI-builder layer (rare among PMM
              candidates), with the sales enablement and pitch positioning
              work at 90 Seconds as the bridge into the PMM craft. I am
              applying because Canva is a wish-list employer and because
              the fit on the verticals is the kind that does not show up
              twice.
            </p>

            <p>
              Adelaide-based, Canvanaut co-working space available, happy
              to travel for the moments that matter. Australian citizen.
              I would welcome a conversation about the first 90 days of
              the Vertical Strategy plan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 - Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
          Let&apos;s talk about Higher Ed, Government and the first 90 days.
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

function VerticalCard({
  vertical,
  title,
  body,
}: {
  vertical: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-navy/15 bg-cream rounded-lg p-8 hover:border-crimson/50 transition">
      <p className="text-crimson font-semibold tracking-wide uppercase text-xs mb-3">
        {vertical}
      </p>
      <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-navy/80 leading-relaxed">{body}</p>
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
