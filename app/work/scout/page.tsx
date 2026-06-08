import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scout — Customer Agent · Rubina Carlson",
  description:
    "Configured the 90 Seconds AI chat agent from scratch — tone of voice, scripted responses, guardrails and custom instructions. Live on 90seconds.com.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function Scout() {
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
          90 Seconds · June 2026 · HubSpot Customer Agent
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Scout.
        </h1>
        <p className="mt-8 text-2xl sm:text-3xl leading-snug max-w-3xl text-navy">
          The 90 Seconds AI chat agent, configured end-to-end.{" "}
          <span className="text-crimson">Live on the site, in brand voice, from day one.</span>
        </p>
      </section>

      {/* Metric strip */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <Metric value="Live" label="on 90seconds.com" />
            <Metric value="100%" label="sole author — tone to guardrails" />
            <Metric value="Zero" label="fabricated prices, stats or promises" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
          The problem.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            90 Seconds sells video creation to enterprise marketing leaders.
            The buying journey is long. Prospects often visit the site weeks
            before they are ready to talk to sales. A generic chat widget
            would either say too little to be useful or too much and get the
            brand wrong.
          </p>
          <p>
            HubSpot released their Customer Agent feature. We had the tool.
            What we needed was a brain behind it — one that sounded like us,
            knew its limits, and handed off cleanly when the conversation
            outgrew it.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The approach.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            I designed and wrote the Scout configuration from scratch. Every
            section was intentional.
          </p>
          <ul className="space-y-3 list-disc list-outside ml-6 marker:text-crimson">
            <li>
              <strong className="text-navy">Tone and response style.</strong>{" "}
              Warm, direct, unhurried. Matches the voice we use across the
              rest of the site — no corporate hedging, no hollow enthusiasm.
            </li>
            <li>
              <strong className="text-navy">Scripted responses.</strong>{" "}
              Covering the five moments that matter most: greeting,
              portfolio questions, pricing questions, apologies when Scout
              cannot help, and handoff to the team.
            </li>
            <li>
              <strong className="text-navy">Guardrails.</strong> No
              fabricated prices, stats or delivery dates. No legal promises.
              No sensitive data collection. Locked terminology — "video
              creation", not "video production". Every guardrail documented
              with the reason behind it.
            </li>
            <li>
              <strong className="text-navy">Custom instructions.</strong>{" "}
              Top-of-funnel framing, shorthand understanding (so "TVC" and
              "social cutdown" land correctly), define-on-first-use for
              industry terms, and a clear rule: guide enquiries, never
              close them.
            </li>
          </ul>
          <p>
            I grounded the config in the 90 Seconds voice and tone guide and
            the brand glossary. Ran a HubSpot pre-flight to confirm what the
            platform could and could not do. Documented the known platform
            limitations so the team had a reference for what to expect.
          </p>
          <p>
            The full config lives in the GTM OS repo — version-controlled,
            so every change to Scout is tracked and reversible. HubSpot stays
            the live source; the repo is the record.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          The outcome.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85">
          <p>
            Scout launched site-wide on 90seconds.com in June 2026. It handles
            incoming customer queries in brand voice without a human in the loop
            — and hands off clearly when the conversation needs one.
          </p>
          <p>
            The guardrail design means it cannot overpromise on pricing or
            delivery, which is the most common failure mode for B2B chat
            agents in our category. The version-controlled config means any
            update goes through a proper review, not a quiet settings change.
          </p>
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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl sm:text-5xl font-bold tracking-tight text-crimson-light">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-cream/70">
        {label}
      </p>
    </div>
  );
}
