import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "Scout — Customer Agent · Rubina Carlson",
  description:
    "Configured the 90 Seconds AI chat agent from scratch: tone of voice, scripted responses, guardrails and custom instructions. Live on 90seconds.com.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function Scout() {
  return (
    <main className="flex-1">
      <SiteHeader />

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
            <Metric value="100%" label="sole author, tone to guardrails" />
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
            What we needed was a brain behind it. One that sounded like us,
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
              rest of the site. No corporate hedging, no hollow enthusiasm.
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
              No sensitive data collection. Locked terminology: "video
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
            The full config lives in the GTM OS repo, version-controlled,
            so every change to Scout is tracked and reversible. HubSpot stays
            the live source; the repo is the record.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Setup.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85 mb-10">
          <p>
            Identity, knowledge and guardrails are the three configuration
            screens that determine whether the agent reads as on-brand and
            in-bounds. I wrote each one from scratch, grounded in the 90
            Seconds voice guide and the brand glossary.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-4">
          <Screenshot
            src="/work/scout/setup-identity.png"
            alt="Scout identity setup in HubSpot Customer Agent."
            caption="Identity. Persona, tone and naming, all locked to the 90 Seconds voice guide."
          />
          <Screenshot
            src="/work/scout/setup-knowledge.png"
            alt="Scout knowledge setup in HubSpot Customer Agent."
            caption="Knowledge. Curated sources Scout is allowed to draw from. Nothing else."
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          In action.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85 mb-10">
          <p>
            Scout launched site-wide on 90seconds.com in June 2026. It opens
            with warmth, not corporate hedging. It answers questions in brand
            voice, inside the guardrails. It hands off clearly when the
            conversation needs a human.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-4">
          <Screenshot
            src="/work/scout/chat-welcome.png"
            alt="Scout chat welcome message on 90seconds.com."
            caption="The opener. Warm, direct, no corporate hedging."
          />
          <Screenshot
            src="/work/scout/chat-qa.png"
            alt="Scout answering a customer question on 90seconds.com."
            caption="A live question and answer. In brand voice, inside the guardrails."
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
          Results.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-navy/85 mb-10">
          <p>
            The guardrail design means Scout cannot overpromise on pricing or
            delivery, which is the most common failure mode for B2B chat
            agents in our category. The version-controlled config means any
            update goes through a proper review, not a quiet settings change.
          </p>
          <p>
            The reports below show deflection (conversations Scout handles
            without a human) and handle rate (reliability across the full
            conversation volume).
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Screenshot
            src="/work/scout/report-deflection.png"
            alt="Scout deflection over time report."
            caption="Deflection over time. Conversations Scout handles without a human."
          />
          <Screenshot
            src="/work/scout/report-handle-rate.png"
            alt="Scout handle rate report."
            caption="Handle rate. Reliability across the full conversation volume."
          />
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

function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-navy/15 bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="text-sm text-navy/70 mt-3 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
