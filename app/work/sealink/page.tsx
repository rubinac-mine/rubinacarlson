import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SeaLink Travel Group — Rubina Carlson",
  description:
    "Five years across SeaLink Kangaroo Island, Bruny Island, Adelaide Sightseeing and the PS Murray Princess. Brand, digital, sponsorship and the launch of a brand-new tourism service.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function SeaLink() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-navy hover:text-terracotta transition"
          >
            ← Rubina Carlson
          </Link>
          <a
            href={MAILTO}
            className="text-sm font-medium text-terracotta hover:underline underline-offset-4"
          >
            Get in touch →
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <Link
          href="/work"
          className="text-sm text-navy/60 hover:text-terracotta transition"
        >
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-12">
        <p className="text-sm uppercase tracking-wider text-terracotta font-semibold">
          SeaLink Travel Group · 2015 – 2020
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          SeaLink.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          Five years across SeaLink Kangaroo Island, Bruny Island, Adelaide
          Sightseeing and the PS Murray Princess.{" "}
          <span className="text-terracotta">
            Brand, digital, sponsorship, and the launch of a brand-new tourism
            service.
          </span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="-50 → +10" label="Bruny Island NPS turnaround" />
            <Metric value="$326K" label="KI 3-day sale, +97% YoY" />
            <Metric value="10x" label="ROAS on $120K/year ad spend" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
          The brief.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            SeaLink runs marine and tourism services across some of the best
            of South Australia and Tasmania. I joined as Digital Marketing
            Executive in 2015 and was promoted to Brand Marketing Executive,
            with expanded scope across digital and traditional channels,
            budgets, and brand consistency.
          </p>
          <p>
            The work spanned five years and four brands. SeaLink Kangaroo
            Island, Adelaide Sightseeing, the PS Murray Princess, and the
            launch of an entirely new service, SeaLink Bruny Island. Across
            all of it, B2C digital marketing strategy was the throughline,
            with my work delivering ~10% YoY increases in online revenue.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Bruny Island, from −50 to +10.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            In 2018 SeaLink entered the Bruny Island market. The local
            community was not thrilled. NPS started at −50 and most of the
            commentary on local Facebook groups was hostile.
          </p>
          <p>
            I built the digital presence for the new service from zero,
            website, email marketing, social content. I also became the
            official SeaLink spokesperson in the local community Facebook
            groups, showing up consistently and engaging on real concerns
            instead of broadcasting at people.
          </p>
          <p>
            Over the launch period, NPS moved from −50 to +10. The change of
            tone in the community was the more telling result.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Kangaroo Island, $326K in three days.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Short-burst campaigns combining digital and above-the-line
            channels for the SeaLink Kangaroo Island 3-day sale period in
            2018. Online sales pushed past $326,000, up 97% year on year for
            the same window.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Always-on, $1M/year at 10x ROAS.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Managed roughly $120,000 a year in ad spend across Google and
            Facebook for the SeaLink portfolio. Delivered a 10x return on ad
            spend, or about $1M in revenue a year, sustainably.
          </p>
          <p>
            Across five years I also advocated for and secured doubled
            digital ad budgets for SeaLink Kangaroo Island, Adelaide
            Sightseeing and the PS Murray Princess, against internal
            scepticism about digital channels.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Influencer program, built from scratch.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Initiated, scoped and built the framework for SeaLink&apos;s
            first influencer program. Risk assessment, brand-safety vetting,
            partnership outreach with creators whose work would actually
            stand up to commercial use.
          </p>
          <p>
            Doubled the size of SeaLink&apos;s legal-use media library with
            high-quality UGC. The program kept paying off long after each
            individual partnership wrapped.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Why this matters on this page.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Tourism marketing is its own discipline. Long lead times,
            geographically specific demand, local community context that you
            cannot solve from a marketing dashboard, and a constant tension
            between brand and direct response. Five years in it taught me
            how to hold those tensions and ship anyway.
          </p>
          <p>
            South Australian roots are not just biographical. They were the
            asset that made the Bruny Island launch land and kept Kangaroo
            Island campaigns culturally accurate. I still use that lens.
          </p>
        </div>
      </section>

      {/* Footer nav */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Link
          href="/work"
          className="text-sm font-medium text-terracotta hover:underline underline-offset-4"
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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl sm:text-5xl font-bold tracking-tight text-terracotta">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-cream/70">
        {label}
      </p>
    </div>
  );
}
