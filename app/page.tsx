import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rubina Carlson — Marketing leader. AI builder. Storyteller.",
  description:
    "Head of Marketing at 90 Seconds. 15+ years across tech, tourism and higher education. Building AI tools to make marketing teams punch above their weight.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const LINKEDIN = "https://www.linkedin.com/in/rubinacarlson";
const CV_MARKETING = "/Rubina-your-next-senior-marketer.pdf";
const CV_AI = "/Rubina-your-next-AI-builder.pdf";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight text-navy">
            Rubina Carlson
          </span>
          <nav className="flex items-center gap-5 text-sm">
            <Link
              href="/work"
              className="text-navy/70 hover:text-crimson transition"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-navy/70 hover:text-crimson transition"
            >
              About
            </Link>
            <a
              href={MAILTO}
              className="font-medium text-crimson hover:underline underline-offset-4"
            >
              Get in touch →
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid gap-12 sm:gap-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-navy">
              Rubina Carlson.
            </h1>
            <p className="mt-8 text-2xl sm:text-3xl leading-snug text-navy">
              Marketing leader.{" "}
              <span className="text-soft-blue">AI builder.</span> Storyteller.
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/80">
              15+ years of marketing experience across tech, tourism and higher
              education. Currently Head of Marketing at 90 Seconds, leading the
              global marketing team from APAC and building AI-augmented tools
              for the function.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={MAILTO}
                className="inline-block bg-crimson text-cream px-6 py-3 rounded-md font-medium hover:bg-crimson-dark transition"
              >
                Get in touch
              </a>
              <a
                href="#proof"
                className="inline-block border border-navy text-navy px-6 py-3 rounded-md font-medium hover:bg-navy hover:text-cream transition"
              >
                See recent work
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

      {/* The lane */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-10">
            What I do.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85 max-w-3xl">
            <p>
              I&apos;m Head of Marketing at 90 Seconds. We help enterprise
              brands create video globally at scale.
            </p>
            <p>
              I lead the global marketing team from APAC, and collaborate with
              sales counterparts across APAC, US, UK and EMEA on global GTM.
            </p>
            <p>
              The work splits two ways. Traditional growth marketing: inbound,
              performance, content, brand. And AI-augmented operations: I
              prototype tools in Replit and Claude Code, and partner with our
              VP of Product on the GTM OS, our internal operations platform.
            </p>
            <p>
              Outside the day job, I&apos;ve been a Director of Digital
              Adelaide since 2015, the largest marketing conference in South
              Australia. I also lecture in marketing at UniSA and TAFE SA on
              and off since 2011, where I designed and delivered the first
              tertiary social media course in Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          Recent work.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          A short tour of the wins that explain what I do.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProofCard
            title="Building AI tools at 90 Seconds"
            role="Head of Marketing · 2024 – present"
            body="Built 90Labs, a sales-enablement workspace hosting 29+ assets and a Pitch Builder used daily by the global sales team. Helping build out the GTM OS, our internal operations platform, alongside our VP of Product."
            accent="soft-blue"
          />
          <ProofCard
            title="$5M pipeline at 90 Seconds"
            role="Head of Marketing · 2024 – 2026"
            body="$5M in pipeline opportunities through inbound lead generation and performance optimisation across HubSpot, paid, and content."
          />
          <ProofCard
            title="K-TIG, Refuel Creative"
            role="Digital Marketing Manager · 2023"
            body="172% increase in B2B website leads via a comprehensive HubSpot rebuild. Won the HubSpot Impact Award for Platform Excellence, my third Impact Award in three years."
            href="/work/k-tig"
          />
          <ProofCard
            title="Digital Adelaide"
            role="Director · 2015 – 2025"
            body="Grew Digital Adelaide 5x, from 40 delegates to 200+, into South Australia's largest marketing conference."
            href="/work/digital-adelaide"
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-block text-sm font-medium text-crimson hover:underline underline-offset-4"
          >
            See all work →
          </Link>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
          <p className="text-2xl sm:text-3xl leading-snug font-medium">
            &ldquo;Rubina is a strategic thinker and someone you can bounce
            ideas off. Adaptable, reliable, and a life-long learner.&rdquo;
          </p>
          <p className="mt-8 text-sm tracking-wide uppercase text-crimson-light">
            Hamish Cameron
          </p>
          <p className="mt-2 text-sm text-cream/70 leading-relaxed">
            Founder @ AccuFind.ai | Non-executive Director | former CIO | AI
            Strategy &amp; Execution
          </p>
          <Link
            href="/testimonials"
            className="inline-block mt-8 text-sm text-cream/70 hover:text-crimson-light underline-offset-4 hover:underline"
          >
            More voices →
          </Link>
        </div>
      </section>

      {/* About + contact */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:items-start">
          <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden border border-navy/10">
            <Image
              src="/rubina-portrait-wide.jpg"
              alt="Rubina Carlson, smiling, in a black top and black fascinator."
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-6">
              Who I am.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-navy/85">
              <p>
                Based in Adelaide. Australian citizen. Certified Practising
                Marketer (CPM) through the Australian Marketing Institute.
                Bachelor of Media in Marketing, University of Adelaide.
              </p>
              <p>
                Industry experience across tech and SaaS (90 Seconds),
                agency-side B2B (Refuel Creative), and tourism (SeaLink Travel
                Group). Recognised by HubSpot Impact Awards in 2020 (twice) and
                2023.
              </p>
              <p>
                The thing I get most excited about right now: how AI lets a
                marketing team punch well above its weight. Less template,
                more bespoke. Less throughput pressure, more thinking time.
              </p>
              <Link
                href="/about"
                className="inline-block mt-4 text-sm font-medium text-crimson hover:underline underline-offset-4"
              >
                Read the longer story →
              </Link>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-12 mb-4">
              Get in touch.
            </h3>
            <ul className="space-y-2 text-lg text-navy/85">
              <li>
                <a
                  href={MAILTO}
                  className="hover:text-crimson underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-crimson underline-offset-4 hover:underline"
                >
                  linkedin.com/in/rubinacarlson
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-10 mb-4">
              Download a CV.
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={CV_MARKETING}
                className="inline-block bg-crimson text-cream px-5 py-3 rounded-md font-medium hover:bg-crimson-dark transition"
              >
                Rubina - your next senior marketer
              </a>
              <a
                href={CV_AI}
                className="inline-block border border-navy text-navy px-5 py-3 rounded-md font-medium hover:bg-navy hover:text-cream transition"
              >
                Rubina - your next AI builder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center text-sm text-navy/70">
          © Rubina Carlson 2026 · Adelaide, South Australia
        </div>
      </footer>
    </main>
  );
}

function ProofCard({
  title,
  role,
  body,
  href,
  accent = "crimson",
}: {
  title: string;
  role: string;
  body: string;
  href?: string;
  accent?: "crimson" | "soft-blue";
}) {
  const isBlue = accent === "soft-blue";
  const classes = isBlue
    ? "block border border-navy/15 bg-cream rounded-lg p-8 hover:border-soft-blue/60 transition"
    : "block border border-navy/15 bg-cream rounded-lg p-8 hover:border-crimson/50 transition";
  const arrowClass = isBlue ? "ml-1 text-soft-blue" : "ml-1 text-crimson";
  const roleClass = isBlue
    ? "text-soft-blue italic mb-4"
    : "text-crimson italic mb-4";
  const content = (
    <>
      <h3 className="text-xl font-semibold mb-2 text-navy">
        {title}
        {href ? <span className={arrowClass}>→</span> : null}
      </h3>
      <p className={roleClass}>{role}</p>
      <p className="text-navy/80 leading-relaxed">{body}</p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return <div className={classes}>{content}</div>;
}
