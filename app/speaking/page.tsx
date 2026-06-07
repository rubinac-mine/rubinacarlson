import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking and press — Rubina Carlson",
  description:
    "Podcasts, webinars, press mentions, conference speaking and teaching across 15+ years in marketing.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

type Entry = {
  title: string;
  outlet: string;
  date: string;
  description: string;
  href: string;
};

const podcasts: Entry[] = [
  {
    title: "Why every marketer is already a prompt engineer",
    outlet: "xGrowth podcast",
    date: "2025",
    description:
      "On AI, prompt engineering, and the marketing function that's already practising both without naming it.",
    href: "https://xgrowth.com.au/podcast/why-every-marketer-is-already-a-prompt-engineer-with-rubina-carlson/",
  },
  {
    title: "Social strategy with Rubina Carlson",
    outlet: "TechSoup Connect South Australia",
    date: "2021",
    description:
      "Webinar on social strategy for non-profits, delivered through the TechSoup community.",
    href: "https://events.techsoup.org/events/details/techsoup-techsoup-connect-south-australia-presents-social-strategy-with-rubina-carlson/",
  },
  {
    title: "Be prepared for a career in digital marketing",
    outlet: "The Dobcast",
    date: "2019",
    description:
      "On building a career in digital marketing, with notes for early-career marketers entering the field.",
    href: "https://castro.fm/episode/nHOr49",
  },
];

const press: Entry[] = [
  {
    title: "Exploring new frontiers at Digital Adelaide 2025",
    outlet: "InDaily",
    date: "June 2025",
    description:
      "Quoted on Digital Adelaide's evolution and the 2025 programme at Adelaide Oval.",
    href: "https://www.indailysa.com.au/news/business/2025/06/30/exploring-new-frontiers-at-digital-adelaide-2025",
  },
  {
    title:
      "This digital marketing conference will make your B2B and B2C campaigns better",
    outlet: "InDaily",
    date: "August 2024",
    description:
      "Quoted on Digital Adelaide's reach across B2B and B2C marketing practice.",
    href: "https://www.indailysa.com.au/news/archive/2024/08/12/this-digital-marketing-conference-will-make-your-b2b-and-b2c-campaigns-better",
  },
];

const conference: Entry[] = [
  {
    title: "B2B session, Digital Adelaide 2025",
    outlet: "Digital Adelaide",
    date: "2025",
    description:
      "Speaker in the B2B stream at Adelaide Oval. Session on growth marketing in a global SaaS function.",
    href: "https://digitaladl.au/sessions/2025/d1-b2b-s3-rubina-carlson/",
  },
];

export default function Speaking() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-navy hover:text-crimson transition"
          >
            ← Rubina Carlson
          </Link>
          <a
            href={MAILTO}
            className="text-sm font-medium text-crimson hover:underline underline-offset-4"
          >
            Get in touch →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Speaking and press.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/80">
          Podcasts, webinars, press mentions, conference speaking and
          teaching across 15+ years in marketing. Happy to talk about B2B
          growth marketing, AI in the marketing seat, regional planning,
          and how to build a marketing community that lasts.
        </p>
      </section>

      {/* Podcasts and webinars */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-8">
            Podcasts and webinars.
          </h2>
          <div className="space-y-8">
            {podcasts.map((entry) => (
              <EntryCard key={entry.href} entry={entry} kind="Podcast" />
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-8">
          Press and quotes.
        </h2>
        <div className="space-y-8">
          {press.map((entry) => (
            <EntryCard key={entry.href} entry={entry} kind="Press" />
          ))}
        </div>
      </section>

      {/* Conference */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-8">
            Conference speaking.
          </h2>
          <div className="space-y-8">
            {conference.map((entry) => (
              <EntryCard key={entry.href} entry={entry} kind="Conference" />
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-navy/10">
            <p className="text-lg leading-relaxed text-navy/85">
              Plus ten years hosting and MC-ing Digital Adelaide as a founding
              director, 2015 to 2025. The full story is on the{" "}
              <Link
                href="/work/digital-adelaide"
                className="text-crimson hover:underline underline-offset-4"
              >
                Digital Adelaide case study
              </Link>
              . Confirmed on the 2026 lineup as a speaker.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-8">
          Teaching.
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-navy/85">
          <p>
            <strong className="text-navy">Lecturer, UniSA Creative</strong>{" "}
            (University of South Australia), 2016 to 2018. Postgraduate
            social media management course as part of the Graduate Diploma
            in Communication (Public Relations). The first dedicated social
            media management course inside that programme.
          </p>
          <p>
            <strong className="text-navy">
              Lecturer, School of Business and Marketing, TAFE SA
            </strong>
            , 2011 to 2018. Courses in social media management and digital
            marketing. Delivered the{" "}
            <span className="text-crimson font-semibold">
              first tertiary social media course in Australia
            </span>{" "}
            at TAFE SA in 2011, well before the creator economy made it
            obvious.
          </p>
          <p>
            <strong className="text-navy">
              Industry Advisory Panel Member, UniSA School of Communication
            </strong>
            , International Studies and Languages, 2015.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Want me on your show or stage?
          </h2>
          <p className="text-lg text-cream/85 max-w-xl mx-auto">
            I&apos;m always up for a good conversation about B2B marketing,
            AI in the marketing seat, or building marketing communities
            that compound.
          </p>
          <a
            href={MAILTO}
            className="inline-block mt-8 bg-crimson text-cream px-6 py-3 rounded-md font-medium hover:bg-crimson-dark transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer nav */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-crimson hover:underline underline-offset-4"
        >
          ← Back to home
        </Link>
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

function EntryCard({ entry, kind }: { entry: Entry; kind: string }) {
  return (
    <article className="border-l-2 border-crimson pl-6 sm:pl-8">
      <p className="text-xs uppercase tracking-wider text-crimson font-semibold">
        {kind} · {entry.date}
      </p>
      <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-navy leading-snug">
        <a
          href={entry.href}
          target="_blank"
          rel="noopener"
          className="hover:text-crimson underline-offset-4 hover:underline"
        >
          {entry.title} <span className="text-crimson">↗</span>
        </a>
      </h3>
      <p className="mt-2 text-sm text-navy/60 italic">{entry.outlet}</p>
      <p className="mt-3 text-base leading-relaxed text-navy/85">
        {entry.description}
      </p>
    </article>
  );
}
