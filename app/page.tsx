import type { Metadata } from "next";
import Image from "next/image";

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
          <a
            href={MAILTO}
            className="text-sm font-medium text-terracotta hover:underline underline-offset-4"
          >
            Get in touch →
          </a>
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
              <span className="text-terracotta">AI builder.</span> Storyteller.
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
                className="inline-block bg-terracotta text-cream px-6 py-3 rounded-md font-medium hover:bg-terracotta-dark transition"
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
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-terracotta/20 mx-auto md:mx-0">
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
              and off since 2011.
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
            title="GTM OS at 90 Seconds"
            role="Head of Marketing · 2025 – present"
            body="Architected the GTM OS, an internal operations platform that combines CRM and SEO data to automate market mapping and content coverage analysis. Built with the VP of Product. In daily use across the global marketing function."
          />
          <ProofCard
            title="$5M pipeline at 90 Seconds"
            role="Head of Marketing · 2024 – 2026"
            body="$5M in pipeline opportunities through inbound lead generation and performance optimisation across HubSpot, paid, and content."
          />
          <ProofCard
            title="HubSpot Impact Award, Refuel Creative"
            role="Digital Marketing Manager · 2020 – 2023"
            body="172% increase in B2B website leads via HubSpot platform optimisation. HubSpot Impact Award for Platform Excellence, 2023. Led a team of four."
          />
          <ProofCard
            title="Digital Adelaide"
            role="Director · 2015 – 2025"
            body="Grew Digital Adelaide 5x, from 40 delegates to 200+, into South Australia's largest marketing conference."
          />
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
          <p className="text-2xl sm:text-3xl leading-snug font-medium">
            &ldquo;Rubina is a strategic thinker and someone you can bounce
            ideas off. Adaptable, reliable, and a life-long learner.&rdquo;
          </p>
          <p className="mt-8 text-sm tracking-wide uppercase text-terracotta">
            Hamish Cameron
          </p>
          <p className="mt-2 text-sm text-cream/70 leading-relaxed">
            Founder @ AccuFind.ai | Non-executive Director | former CIO | AI
            Strategy &amp; Execution
          </p>
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
            </div>

            <h3 className="text-xl font-semibold text-navy mt-12 mb-4">
              Get in touch.
            </h3>
            <ul className="space-y-2 text-lg text-navy/85">
              <li>
                <a
                  href={MAILTO}
                  className="hover:text-terracotta underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-terracotta underline-offset-4 hover:underline"
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
                className="inline-block bg-terracotta text-cream px-5 py-3 rounded-md font-medium hover:bg-terracotta-dark transition"
              >
                Rubina – your next senior marketer
              </a>
              <a
                href={CV_AI}
                className="inline-block border border-navy text-navy px-5 py-3 rounded-md font-medium hover:bg-navy hover:text-cream transition"
              >
                Rubina – your next AI builder
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
}: {
  title: string;
  role: string;
  body: string;
}) {
  return (
    <div className="border border-navy/15 bg-cream rounded-lg p-8 hover:border-terracotta/50 transition">
      <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
      <p className="text-terracotta italic mb-4">{role}</p>
      <p className="text-navy/80 leading-relaxed">{body}</p>
    </div>
  );
}
