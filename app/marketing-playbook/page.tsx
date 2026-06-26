import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "The Marketing Playbook — Rubina Carlson",
  description:
    "A practical, no-code guide for any B2B marketer. Capture how your marketing works, then use Claude Code to help you deliver it. Built by Rubina Carlson with Claude Code.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const GUIDE_HTML = "/marketing-playbook-guide.html";
const GUIDE_PDF = "/Marketing-Playbook-Guide.pdf";
const GUIDE_COVER = "/marketing-playbook-cover.jpg";
const TEMPLATE_DOCX = "/My-Marketing-Playbook-Template.docx";

export default function MarketingPlaybook() {
  return (
    <main className="flex-1">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <p className="text-sm uppercase tracking-wider text-crimson font-semibold">
          A free resource · built with Claude Code
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          The Marketing Playbook.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/80">
          A practical, no-code guide for any B2B marketer. Capture how your
          marketing works, then use Claude Code to help you deliver it. No
          coding, no jargon.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/80">
          I built this to show what I mean when I say I market with AI and build
          with it every day. It turns scattered marketing into a system a
          capable assistant can actually run, week after week, beside you.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={GUIDE_PDF}
            className="inline-block bg-crimson text-cream px-6 py-3 rounded-md font-medium hover:bg-crimson-dark transition"
          >
            Download the guide (PDF)
          </a>
          <a
            href={TEMPLATE_DOCX}
            className="inline-block border border-navy text-navy px-6 py-3 rounded-md font-medium hover:bg-navy hover:text-cream transition"
          >
            Get the fill-in template (Word)
          </a>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-10">
            What&apos;s inside.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <InsideCard
              n="01"
              title="Seven stages"
              body="From who you serve and how you sound, to the operating calendar and a leave-proof handover pack. Work top to bottom and your marketing is written down where anyone can run it."
            />
            <InsideCard
              n="02"
              title="A fill-in workbook"
              body="A Word template with a box for every section. A rough answer beats a blank box, and you can have a useful version going in an afternoon."
            />
            <InsideCard
              n="03"
              title="The exact prompts"
              body="Each stage has a line to hand straight to Claude Code, so it drafts the first version with you. The work that used to live in your head, out the door."
            />
          </div>
        </div>
      </section>

      {/* Read the guide */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-8">
          Read the full guide.
        </h2>
        <a
          href={GUIDE_HTML}
          target="_blank"
          rel="noopener"
          className="block rounded-lg overflow-hidden border border-navy/15 shadow-sm hover:border-crimson/50 hover:shadow-md transition"
        >
          <Image
            src={GUIDE_COVER}
            alt="Cover of the Build Your Marketing Playbook guide."
            width={1200}
            height={780}
            className="w-full h-auto"
            priority
          />
        </a>
        <p className="mt-5 text-base text-navy/80">
          <a
            href={GUIDE_HTML}
            target="_blank"
            rel="noopener"
            className="font-medium text-crimson hover:underline underline-offset-4"
          >
            Open the full guide ↗
          </a>{" "}
          or download it as a{" "}
          <a
            href={GUIDE_PDF}
            className="text-crimson hover:underline underline-offset-4"
          >
            PDF
          </a>
          .
        </p>
      </section>

      {/* Where to go next */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-3">
            Where to go next.
          </h2>
          <p className="text-lg text-navy/70 mb-10 max-w-2xl">
            Once your playbook is written, these two open-source collections are
            the best starting points I know for giving an AI agent real skills.
            Both work with Claude Code. Drop them in alongside your folder.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <RepoCard
              eyebrow="Marketing skills"
              title="Corey Haines · Conversion Factory"
              body="50+ ready-made skills for conversion, copywriting, SEO, analytics and growth. Built for marketers who want an AI agent doing the craft work with them."
              href="https://github.com/coreyhaines31/marketingskills"
            />
            <RepoCard
              eyebrow="Builder's toolkit"
              title="Garry Tan · Y Combinator"
              body="gstack turns Claude Code into a virtual team, with a clear flow from planning to shipping. A strong base if you want to build, not just write."
              href="https://github.com/garrytan/gstack"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Want this running in your team?
          </h2>
          <p className="text-lg text-cream/85 max-w-xl mx-auto">
            This is the kind of thing I build: marketing systems an AI assistant
            can actually deliver. Happy to walk you through how it works, or
            tailor one to your business.
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

function InsideCard({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border-l-2 border-crimson pl-6">
      <p className="text-sm font-semibold text-crimson">{n}</p>
      <h3 className="mt-2 text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-navy/80">{body}</p>
    </div>
  );
}

function RepoCard({
  eyebrow,
  title,
  body,
  href,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="block border border-navy/15 bg-cream rounded-lg p-8 hover:border-crimson/50 hover:shadow-sm transition"
    >
      <p className="text-xs uppercase tracking-wider text-crimson font-semibold">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-navy">
        {title} <span className="text-crimson">↗</span>
      </h3>
      <p className="mt-3 text-base leading-relaxed text-navy/80">{body}</p>
    </a>
  );
}
