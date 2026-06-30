import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Rubina Carlson — your next Senior Growth Marketing Manager at Shippit.",
  description:
    "Rubina Carlson, your next Senior Growth Marketing Manager at Shippit. A people leader, a marketer still genuinely on the tools, and an AI builder who lifts a whole team's AI adoption by example.",
};

const EMAIL = "rubina.carlson@gmail.com";
const EMAIL_SUBJECT = "Senior Growth Marketing Manager - Shippit";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const CV_PATH = "/senior-growth-marketing-manager-shippit/Rubina-Carlson-CV.pdf";
const COVER_LETTER_PATH =
  "/senior-growth-marketing-manager-shippit/Rubina-Carlson-Cover-Letter.pdf";

export default function ShippitPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <span className="hidden sm:inline text-sm text-navy/60">
            For Shippit
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
            <p className="text-sm font-semibold tracking-wide uppercase text-crimson mb-5">
              Maternity-leave cover · 10 to 12 month contract
            </p>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] text-navy">
              Rubina Carlson.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Your next Senior Growth Marketing Manager at Shippit.
              <br />
              <span className="text-navy/70">
                A people leader, a marketer still genuinely on the tools, and
                an AI builder who lifts a whole team&apos;s AI adoption by
                example.
              </span>
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              I lead the global marketing function at 90 Seconds, an enterprise
              B2B SaaS platform, from Adelaide. I have owned $5M in
              opportunities since June 2024 in exactly the long-cycle,
              multi-touch motion this role runs. I do not brief automations and
              wait. I build them. And I coach the team around me to work faster
              with AI every day. I am here to carry this function end to end
              through the cover, then hand it back stronger than I found it.
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

      {/* Section 1.5 - The three things you're hiring for */}
      <section className="mx-auto max-w-5xl px-6 pb-20 sm:pb-24">
        <p className="text-sm font-medium tracking-wide uppercase text-crimson text-center mb-3">
          The three things you&apos;re hiring for
        </p>
        <p className="text-center text-navy/70 mb-8 text-base">
          Rubina is a mentoring leader, hands-on marketer, and AI champion.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <PillarTile
            label="People leader"
            note="Leads a team of four by example"
            tone="navy"
          />
          <PillarTile
            label="On the tools"
            note="Builds marketing automations"
            tone="crimson-light"
          />
          <PillarTile
            label="AI builder"
            note="Drives adoption across the team"
            tone="crimson"
          />
        </div>
      </section>

      {/* Section 2 - Why Shippit, why this role */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Why Shippit, why this role.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              A member of your team encouraged me to apply, and I am glad they
              did. I would love to work for a major Australian SaaS player, and
              Shippit is exactly that: a proudly Australian scaleup, carbon
              neutral on every delivery, and an AFR Best Place to Work.
            </p>
            <p>
              This role appeals to me because it matches what I do now. Carry
              the momentum across a four-person team, own the budget, stay
              accountable to pipeline, and keep new business moving through a
              long-cycle enterprise SaaS motion. You also want someone still
              genuinely on the tools. That is the part I love most.
            </p>
            <p>
              Stepping into a parental-leave cover is its own kind of work. It
              needs a steady hand that keeps priorities clear, the team calm,
              and pipeline moving, then hands the function back stronger. I have
              stepped up to own a seven-figure marketing budget while covering
              for a manager before. I know exactly what this assignment needs.
            </p>
            <p>
              And AI. You want adoption championed by example. I build with AI
              every day, and the team around me builds faster because of it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Three pillars */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-14 max-w-2xl">
          Why I am the right hire to carry this function.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              A people leader.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I have led a team of four at agency and an APAC team, including an
              offshore report, in my current role. I set clear priorities, keep
              a calm environment and coach people to do their best work. I have
              mentored marketers for years, lecturing at UniSA and TAFE SA, and
              I have stepped up to oversee a seven-figure marketing budget while
              covering for a manager. A cover needs exactly that steady hand.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              A marketer on the tools.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I do not brief automations and wait, I build them. I architected
              a GTM Playbook at 90 Seconds that wires CRM and SEO data together to
              automate market mapping. I am a HubSpot operator at award depth,
              with 307 reports across 17 dashboards keeping marketing and Sales
              honest on attribution, in close partnership with Revenue
              Operations. On your stack, I've worked with Zapier. Webflow,
              Airtable and Factors.ai are new to me, but I'm a quick learner and
              troubleshoot myself. And I do not stop at the systems. I plan,
              manage and launch campaigns end to end.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-navy">
              An AI builder who lifts the team.
            </h3>
            <p className="text-navy/80 leading-relaxed">
              I build with AI every day. I configured a live HubSpot Customer
              Agent now handling incoming service queries, and I rebuilt our
              website as a fully vibe-coded build, running a 300+ page migration
              through a fleet of Anthropic-API agents. Just as important, I
              coach my team to find the faster, smarter way, so adoption spreads
              by example rather than by mandate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Receipts */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
            Relevant experience.
          </h2>
          <p className="text-lg text-navy/70 mb-12 max-w-2xl">
            Enterprise B2B SaaS, eCommerce, pipeline and paid, across the past
            fifteen years.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <ProofCard
              category="Enterprise B2B SaaS"
              title="Owning pipeline in a long-cycle enterprise motion"
              body="At 90 Seconds, I lead the global marketing function and have generated $5M in opportunities since June 2024 through inbound, paid and content programmes feeding a complex enterprise sales motion. Long cycles, multi-touch, considered purchases. The exact motion this role runs."
            />
            <ProofCard
              category="Pipeline & RevOps"
              title="Keeping marketing and Sales honest on attribution"
              body="On an award-winning B2B SaaS rebuild for K-TIG, I lifted leads 172% in three months and built 307 custom reports across 17 dashboards. I partner with Revenue Operations on pipeline contribution, attribution and conversion, with clean CRM handover into Sales."
            />
            <ProofCard
              category="eCommerce & DTC"
              title="Growth for eCommerce and subscription brands"
              body="At Refuel Creative I ran paid and lifecycle growth for eCommerce and subscription brands including Sugarwish, Slappa's Thongs and I'm the Chef Too. I led I'm the Chef Too onto Shopify Plus with Recharge subscriptions, which tripled their subscriber base, and ran Google Ads, Performance Max, Meta and Klaviyo email across the portfolio."
            />
            <ProofCard
              category="Paid Digital"
              title="High-yield paid performance across markets"
              body="At Refuel Creative, I delivered 82x ROAS on a Google Search Ads campaign for a national hostel chain, about $410,000 in revenue, and a multi-market acquisition campaign for UK game studio TreesPlease Games that reached 500,000+ users at a 20% reduced CPI. LinkedIn, Meta and Google Ads, run and optimised in-platform."
            />
            <ProofCard
              category="Team Leadership"
              title="Leading and steadying marketing teams"
              body="Four direct reports at Refuel Creative, and an APAC team including an offshore report at 90 Seconds. Years mentoring marketers as a lecturer at UniSA and TAFE SA. I have stepped up to oversee a seven-figure marketing budget while covering for a manager, the same kind of work as this cover."
            />
            <ProofCard
              category="Marketing Ops & Automation"
              title="Building the systems the team relies on"
              body="I architected the GTM Playbook at 90 Seconds, integrating HubSpot and SEMrush data to automate market mapping, and I maintain the automations the team works on daily. On your stack, I've worked with Zapier. Webflow, Airtable and Factors.ai are new to me, but I'm a quick learner and troubleshoot myself."
            />
          </div>
        </div>
      </section>

      {/* Section 4.5 - From the work */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          From the work.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          Leading the community, sharing the AI work, and bringing people with
          me.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          <WorkPhoto
            image="/senior-growth-marketing-manager-shippit/digital-adelaide.jpg"
            alt="Rubina at Digital Adelaide, the marketing conference she has directed for nine years."
            caption="Directing Digital Adelaide, the state's largest marketing event, for nine years."
          />
          <WorkPhoto
            image="/senior-growth-marketing-manager-shippit/ai-panel.jpg"
            alt="Rubina on an AI panel at the Women in Media SA event, June 2026."
            caption="On the AI panel at Women in Media SA, championing how marketers can build with AI."
          />
          <WorkPhoto
            image="/senior-growth-marketing-manager-shippit/rubina-teaching.jpg"
            alt="Rubina recording video lectures on a green-screen set as a marketing lecturer."
            caption="Teaching the next generation of marketers at UniSA and TAFE SA."
          />
        </div>
      </section>

      {/* Section 5 - The builds I'm proudest of */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          The builds I&apos;m proudest of.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          The AI tooling and automation I have shipped from inside the marketing
          function at 90 Seconds.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <BuildCard
            title="HubSpot Customer Agent"
            tagline="AI in production, with real customer load."
            body="Configured and shipped HubSpot's AI Customer Agent at 90 Seconds. Live, handling incoming customer service queries with AI-led triage. Vendor AI capability moved into a real workflow, with the change management to make it stick across the team."
            image="/senior-growth-marketing-manager-shippit/scout-customer-agent.png"
            imageAlt="Scout, the HubSpot Customer Agent Rubina configured for 90 Seconds, in a live chat window."
          />
          <BuildCard
            title="GTM Playbook"
            tagline="Market mapping and content coverage, automated."
            body="An internal AI operations platform that integrates HubSpot and SEMrush data to automate market mapping and content coverage analysis by segment. I build and maintain the marketing logic and automations the team relies on."
            image="/senior-growth-marketing-manager-shippit/gtm-playbook.png"
            imageAlt="The GTM Playbook tool Rubina built, showing ICP and market-mapping logic."
          />
          <BuildCard
            title="90Labs"
            tagline="Sales enablement workspace built in Replit."
            body="Designed and built via Replit, with Claude and Claude Code doing the engineering under my prompts. Hosts 29+ assets and a Pitch Builder in beta with the global sales team, giving reps tailored pitches in minutes."
            image="/senior-growth-marketing-manager-shippit/90labs-pitch-builder.png"
            imageAlt="The 90Labs Pitch Builder homepage, a sales-enablement tool Rubina built in Replit."
          />
          <BuildCard
            title="The 300-page migration"
            tagline="Website rebuild with a fleet of AI agents."
            body="Rebuilt the 90 Seconds website as a fully vibe-coded build, then migrated 300+ legacy pages through Anthropic-API agents that crawled, classified, scored and migrated content automatically. A multi-month job compressed into weeks."
            image="/senior-growth-marketing-manager-shippit/website-migration.png"
            imageAlt="The WordPress-to-React migration engine Rubina built on the Anthropic API."
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
            How I would carry the momentum without missing a beat.
          </p>
          <div className="grid gap-12 md:grid-cols-3">
            <DayBlock
              range="Days 1 to 30"
              heading="Handover and overlap."
              body="Use the overlap to learn the role directly from the outgoing Senior Growth Marketing Manager. Absorb the established growth plan, the budget and every commitment in flight. Learn the team's working rhythms and the agency relationships. Get hands on the tech stack: Airtable, Factors.ai, Webflow and Zapier. Walk through the reporting cadences and the pipeline numbers. The aim is a clean handover, so there is continuity from day one and nothing drops when she steps away."
            />
            <DayBlock
              range="Days 31 to 60"
              heading="Keep pipeline moving."
              body="Own the growth plan in full. Hold the weekly, monthly and quarterly cadences on pipeline contribution, attribution and conversion with RevOps and Sales. Direct and quality-check work across paid social, lifecycle, field and web, and keep agency partners accountable to brief. Make sound, commercial calls where things need adjusting."
            />
            <DayBlock
              range="Days 61 to 90"
              heading="Push AI and momentum."
              body="Find the automations and AI workflows that buy the team time, and coach each report to adopt them. Tune spend against the plan and commercial outcomes. Keep new-business pipeline on track against target, and document everything so the function is handed back stronger than I found it."
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
          <Credential text="$5M in opportunities since June 2024 at 90 Seconds" />
          <Credential text="B. Media in Marketing, University of Adelaide" />
        </ul>
      </section>

      {/* Section 8.5 - Cover letter */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy">
            My cover letter.
          </h2>
          <a
            href={COVER_LETTER_PATH}
            className="inline-block bg-crimson text-cream px-5 py-2.5 rounded-md font-medium hover:bg-crimson-dark transition text-sm"
          >
            Download cover letter →
          </a>
        </div>
        <div className="border border-navy/15 bg-cream rounded-lg p-8 sm:p-10 space-y-5 text-base sm:text-lg leading-relaxed text-navy/85">
          <p>Dear Team Shippit,</p>
          <p className="font-semibold text-navy">
            RE: Senior Growth Marketing Manager, Shippit
          </p>
          <p>
            I&apos;m applying for the Senior Growth Marketing Manager role, as a
            member of your team encouraged me to do so. I&apos;d also love to
            work for a major SaaS player, like Australian scaleup, Shippit.
          </p>
          <p>
            The role itself appeals to me, because I love leading a team by
            example. I love sharing my enthusiasm for AI and tech, and am
            testing new tools or ideas every day. I&apos;d carry the momentum
            across a four-person team, own the budget, stay accountable to
            pipeline, and keep new business moving through the long-cycle
            enterprise SaaS motion.
          </p>
          <p>
            I&apos;m a digital-first marketing leader and an AI builder by
            practice rather than theory. In my current role as Head of Marketing
            for 90 Seconds, an enterprise B2B SaaS platform, I lead the global
            marketing function and have owned $5M in opportunities since June
            2024, in exactly the long-cycle, multi-touch motion you&apos;ve
            described. Earlier, as Digital Marketing Manager at Refuel Creative,
            I supported FlatRateNOW, a B2B SaaS startup, from a very early stage.
            That work delivered a 445% subscription increase and won a HubSpot
            Impact Award.
          </p>
          <p>
            Your description asks for something rare: a people leader, a marketer
            who is still genuinely on the tools, and someone who drives AI
            adoption by example. That is exactly who I am.
          </p>
          <p>
            <span className="font-semibold text-navy">A people leader.</span>{" "}
            I&apos;ve led a team of four at agency and managed an APAC team, including
            an offshore report, in my current role. I lead by setting clear
            priorities, keeping a calm environment and coaching people to do
            their best work. I&apos;ve mentored marketers for years, lecturing at
            UniSA and TAFE SA, and I&apos;ve stepped up before to oversee a
            seven-figure marketing budget while covering for my manager. A
            parental-leave cover needs exactly that: a steady hand that keeps the
            team moving and hands it back stronger.
          </p>
          <p>
            <span className="font-semibold text-navy">
              A marketer on the tools.
            </span>{" "}
            I don&apos;t brief automations and wait, I build them. I architected
            a GTM Playbook at 90 Seconds that wires our CRM and SEO data together to
            automate market mapping. I&apos;m a HubSpot operator at award depth,
            and on one B2B SaaS rebuild I built 307 reports across 17 dashboards
            to keep marketing and Sales honest on attribution, working hand in
            hand with Revenue Operations on pipeline contribution and conversion.
            On your stack, I&apos;ve worked with Zapier. Webflow, Airtable and
            Factors.ai are new to me, but I&apos;m a quick learner and
            troubleshoot myself.
          </p>
          <p>
            <span className="font-semibold text-navy">
              An AI builder who lifts the whole team.
            </span>{" "}
            I build with AI every day. I configured a live HubSpot Customer Agent
            that now handles incoming service queries, and I rebuilt our website
            as a fully vibe-coded build, running a 300+ page legacy migration
            through a fleet of Anthropic-API agents. Just as important, I coach
            my team to find the faster, smarter way, so AI adoption spreads by
            example rather than by mandate. That is the work I want more of.
          </p>
          <p>
            I&apos;ll be straight on one thing: I haven&apos;t worked in
            logistics directly. I have run growth for eCommerce and retail
            brands, which sit right next to your customers, and I bring the
            enterprise B2B craft and the hands-on building on day one. In week
            one I&apos;d sit with Sales and Customer Success and listen.
            I&apos;m Adelaide-based and happy to travel to Sydney for in-person
            collaboration every couple of months.
          </p>
          <p>
            I&apos;m excited to present my skills and diversity of experience as
            complementary, and to carry your growth function with energy and care
            while your Senior Growth Marketing Manager is on leave. I look
            forward to hearing from you.
          </p>
          <p>
            Yours sincerely,
            <br />
            Rubina Carlson
          </p>
        </div>
      </section>

      {/* Section 9 - Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
          Let&apos;s make ship happen.
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
            Adelaide, South Australia. Happy to travel to Sydney. Australian
            citizen.
          </li>
        </ul>
        <a
          href={MAILTO}
          className="inline-block bg-crimson text-cream px-8 py-4 rounded-md font-medium hover:bg-crimson-dark transition"
        >
          Email me about Shippit
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

function PillarTile({
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
        What you need
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

function ProofCard({
  category,
  title,
  body,
}: {
  category: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-navy/15 bg-cream rounded-lg overflow-hidden hover:border-crimson/50 transition flex flex-col">
      <div className="p-8 flex flex-col flex-1">
        <p className="text-crimson font-semibold tracking-wide uppercase text-xs mb-3">
          {category}
        </p>
        <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
        <p className="text-navy/80 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function WorkPhoto({
  image,
  alt,
  caption,
}: {
  image: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-navy/15 bg-navy/5">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-snug text-navy/70">
        {caption}
      </figcaption>
    </figure>
  );
}

function BuildCard({
  title,
  tagline,
  body,
  image,
  imageAlt,
}: {
  title: string;
  tagline: string;
  body: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="border border-navy/15 bg-cream rounded-lg overflow-hidden hover:border-crimson/50 transition flex flex-col">
      {image && (
        <div className="relative w-full aspect-[16/10] bg-navy/5 border-b border-navy/10">
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
        <p className="text-crimson italic mb-4">{tagline}</p>
        <p className="text-navy/80 leading-relaxed">{body}</p>
      </div>
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
