import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Adelaide — Rubina Carlson",
  description:
    "Director of Digital Adelaide, 2015 – 2025. Grew the conference from 40 delegates to 200+, into South Australia's largest marketing event.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const gallery = [
  {
    src: "/work/digital-adelaide/speaker-main-stage.webp",
    alt: "Keynote speaker on the main stage at Digital Adelaide.",
    caption: "Main stage, Adelaide Oval.",
    span: "md:col-span-2",
  },
  {
    src: "/work/digital-adelaide/crowd-oval.webp",
    alt: "Attendees seated at Adelaide Oval for Digital Adelaide.",
    caption: "A full room at the Oval.",
  },
  {
    src: "/work/digital-adelaide/hosts-laughing.webp",
    alt: "Event hosts laughing together at Digital Adelaide.",
    caption: "Behind the scenes with the organisers.",
  },
  {
    src: "/work/digital-adelaide/banner-group.webp",
    alt: "Group of attendees in front of the Digital Adelaide banner.",
    caption: "The community that turns up year after year.",
  },
  {
    src: "/work/digital-adelaide/networking-canapes.webp",
    alt: "Attendees networking during a break with canapés.",
    caption: "Networking break.",
  },
];

export default function DigitalAdelaide() {
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

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link
          href="/work"
          className="text-sm text-navy/60 hover:text-crimson transition"
        >
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-12">
        <p className="text-sm uppercase tracking-wider text-crimson font-semibold">
          Director · 2015 – 2025
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Digital Adelaide.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Ten years building South Australia&apos;s largest marketing
          conference, from 40 delegates in a uni tutorial room to 200+ at
          Adelaide Oval.
        </p>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-5xl px-6 mb-16">
        <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden border border-navy/10">
          <Image
            src="/work/digital-adelaide/rubina-speaking.webp"
            alt="Rubina Carlson speaking in a breakout session at Digital Adelaide."
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            How it started.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Digital Adelaide started in 2015 as Social Media Day Adelaide. A
              few Google Hangouts, one face-to-face seminar in a University of
              South Australia tutorial room, and after-work drinks. About 40
              people.
            </p>
            <p>
              I co-directed it from day one. Over the next decade we shifted
              it into a fully in-person conference, partnered with UniSA,
              broadened from social to all of digital, pivoted virtual through
              COVID, and rebuilt it on the other side at the National Wine
              Centre. From 2024 it lived at Adelaide Oval.
            </p>
            <p>
              At handover in 2025, it was the largest marketing conference in
              South Australia. 200+ delegates, working practitioners only,
              real campaigns and real results. No vendor pitches. Ever.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
            What I actually did.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Programming. Speaker scouting and curation. Sponsor and
              partnership conversations. Venue negotiation as we outgrew each
              one. Marketing and ticket sales for every event. MC and host on
              the day. And the unglamorous middle: running the committee,
              setting the calendar, and the year-round community work that
              made each event feel inevitable rather than a launch.
            </p>
            <p>
              In 2025, Jen Evison and I signed off and handed the reins to
              Ryan Jones, who runs it now as sole organiser. I still speak
              there. The 2026 event has me on the lineup as Head of Marketing
              at 90 Seconds.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
            Why it matters on this page.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Most marketing leadership CVs list one employer at a time.
              Digital Adelaide is what I did on top of those, for a decade,
              unpaid. It is the clearest signal I can offer about how I work
              when no one is making me: build the community I want to work
              inside, stay close to working practitioners, and keep doing it
              for long enough that compounding does the heavy lifting.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          The room.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          Photography from recent events. All courtesy of Digital Adelaide.
        </p>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo) => (
            <figure
              key={photo.src}
              className={`relative ${photo.span ?? ""}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-navy/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-navy/60 mt-2 italic">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-xl sm:text-2xl leading-snug font-medium">
            &ldquo;As the MC and host of Digital Adelaide, Rubina does a
            great job building the tone for the whole event. I&apos;ve
            attended for the past few years and I&apos;m continuously
            impressed by the growth each time.&rdquo;
          </p>
          <p className="mt-8 text-sm tracking-wide uppercase text-crimson-light">
            Carmen Hutchison Wickman
          </p>
          <p className="mt-2 text-sm text-cream/70 leading-relaxed">
            Brand and Marketing Leader
          </p>
          <Link
            href="/testimonials"
            className="inline-block mt-6 text-sm text-cream/70 hover:text-crimson-light underline-offset-4 hover:underline"
          >
            More recommendations →
          </Link>
        </div>
      </section>

      {/* External link */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg text-navy/85">
            Digital Adelaide lives on under Ryan Jones.
          </p>
          <a
            href="https://digitaladl.au/"
            target="_blank"
            rel="noopener"
            className="inline-block mt-6 bg-crimson text-cream px-6 py-3 rounded-md font-medium hover:bg-crimson-dark transition"
          >
            Visit digitaladl.au ↗
          </a>
        </div>
      </section>

      {/* Footer nav */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Link
          href="/work"
          className="text-sm font-medium text-crimson hover:underline underline-offset-4"
        >
          ← Back to all work
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
