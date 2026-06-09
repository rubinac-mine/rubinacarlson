import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "About — Rubina Carlson",
  description:
    "15+ years in marketing across tech, tourism and higher education. Now leading the global marketing function at 90 Seconds from APAC and building AI tools from the marketing seat.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const LINKEDIN = "https://www.linkedin.com/in/rubinacarlson";
const CV_MARKETING = "/Rubina-your-next-senior-marketer.pdf";
const CV_AI = "/Rubina-your-next-AI-builder.pdf";

const stack = [
  {
    group: "AI tooling",
    accent: "soft-blue" as const,
    items: [
      "Claude (Sonnet, Opus, Code)",
      "Anthropic API",
      "Replit",
      "Midjourney",
      "Kling",
      "ElevenLabs",
      "OpusClip",
    ],
  },
  {
    group: "Design and prototyping",
    accent: "crimson" as const,
    items: ["FigmaMake", "Figma"],
  },
  {
    group: "Marketing platforms",
    accent: "crimson" as const,
    items: [
      "HubSpot (Marketing, Sales, Service, CMS, Customer Agent)",
      "Google Ads",
      "Google Analytics",
      "Meta Ads",
      "LinkedIn Campaign Manager",
      "SEMrush",
    ],
  },
  {
    group: "Project management",
    accent: "crimson" as const,
    items: ["Linear", "Notion"],
  },
];

export default function About() {
  return (
    <main className="flex-1">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-navy">
          About.
        </h1>
        <p className="mt-8 max-w-2xl text-2xl sm:text-3xl leading-snug text-navy">
          Marketing leader.{" "}
          <span className="text-soft-blue">AI builder.</span> Storyteller.
        </p>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-5xl px-6 mb-16">
        <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden border border-navy/10">
          <Image
            src="/rubina-portrait-wide.jpg"
            alt="Rubina Carlson, smiling, in a black top and black fascinator."
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Journey */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            The journey.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Adelaide-based, 15+ years in marketing across three very
              different sectors. Tourism at SeaLink Travel Group. Agency at
              Refuel Creative. Tech and SaaS at 90 Seconds.
            </p>
            <p>
              The through-line across all three: small teams, limited budgets,
              against real numbers. At SeaLink, took the Bruny Island NPS from{" "}
              <span className="text-crimson">−50 to +10</span> launching a
              new ferry service into a community that did not want it. At
              Refuel, won the 2023 HubSpot Impact Award for Platform
              Excellence after a comprehensive HubSpot rebuild for K-TIG. At
              90 Seconds, generated{" "}
              <span className="text-crimson">$5M in pipeline opportunities</span>{" "}
              since June 2024 and shipped AI tooling from the marketing seat.
            </p>
            <p>
              Outside the day job, ten years as a Director of Digital
              Adelaide. Grew the conference from 40 delegates in a UniSA
              tutorial room to 200+ at Adelaide Oval. Lectured in marketing
              at UniSA and TAFE SA on and off since 2011. Delivered the first
              tertiary social media course in Australia at TAFE SA in 2011,
              well before the creator economy made it obvious.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
            Right now.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Head of Marketing at 90 Seconds, leading the global marketing
              function from APAC. The team is APAC-based. The work covers the
              business globally, partnering with sales counterparts in the
              US, UK and EMEA on go-to-market.
            </p>
            <p>
              Alongside the marketing work, I build. Replit, Claude Code and
              the Anthropic API are daily tools. Live builds include 90Labs, a
              sales-enablement workspace with 29+ assets and a Pitch Builder in
              beta with the global sales team. Contributed to the GTM OS, an
              internal operations platform, alongside our VP of Product.
              Configured Scout, the 90 Seconds HubSpot Customer Agent. Migrated
              300+ pages using an AI-scored content inventory and an
              Anthropic-API-powered automated migrator.
            </p>
            <p>
              The two things feed each other. The marketing work tells me what
              the team actually needs. The build work means I can ship the
              thing rather than write a brief for someone else to ship.
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
            How I work.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy/85">
            <p>
              Long-cycle positioning beats short-cycle pipeline pressure.
              The temptation in any marketing seat is to chase the quarter.
              The work that compounds is the work that earns the right to a
              conversation 18 months from now.
            </p>
            <p>
              Less template, more bespoke. AI lets a small team punch well
              above its weight, but only if you use the time to think
              harder, not to ship more sameness faster.
            </p>
            <p>
              Build the thing rather than commission a brief. Most of the
              best ideas die in the gap between strategy and execution. The
              AI tools collapse that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-3">
          The stack.
        </h2>
        <p className="text-lg text-navy/70 mb-12 max-w-2xl">
          What I use day to day. Not exhaustive. Updated when the workflow
          shifts.
        </p>
        <div className="space-y-10">
          {stack.map((group) => (
            <StackGroup key={group.group} group={group} />
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-navy/[0.04] border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8">
            Recognition.
          </h2>
          <ul className="space-y-3 text-lg leading-relaxed text-navy/85">
            <Recognition
              year="2023"
              text="HubSpot Impact Award, Platform Excellence. K-TIG. 172% lead lift."
            />
            <Recognition
              year="2022"
              text="BDO Fast Movers List. Refuel Creative named top 25 fastest-moving companies in SA."
            />
            <Recognition
              year="2020"
              text="HubSpot Impact Award, Grow Better: Sales. SaaS startup, 445% subscription increase."
            />
            <Recognition
              year="2020"
              text="HubSpot Impact Award, Integrations Innovation. Same SaaS client."
            />
          </ul>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mt-16 mb-8">
            Education and credentials.
          </h2>
          <ul className="space-y-3 text-lg leading-relaxed text-navy/85">
            <Recognition
              year="2022"
              text="Certified Practising Marketer (CPM), Australian Marketing Institute."
            />
            <Recognition
              year="2022"
              text="Scrum Master Certified (SMC), SCRUM Alliance."
            />
            <Recognition
              year="2020"
              text="Inbound Certified, HubSpot Academy."
            />
            <Recognition
              year="2013"
              text="Bachelor of Media in Marketing, University of Adelaide."
            />
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-8 text-center">
          Get in touch.
        </h2>
        <ul className="space-y-3 text-lg text-navy/85 text-center mb-12">
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
        <div className="flex flex-wrap justify-center gap-4">
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

function StackGroup({
  group,
}: {
  group: { group: string; accent: "crimson" | "soft-blue"; items: string[] };
}) {
  const labelClass =
    group.accent === "soft-blue"
      ? "text-xs uppercase tracking-wider font-semibold text-soft-blue mb-3"
      : "text-xs uppercase tracking-wider font-semibold text-crimson mb-3";
  const pillClass =
    group.accent === "soft-blue"
      ? "inline-block rounded-full border border-soft-blue/40 bg-soft-blue/10 px-3 py-1 text-sm text-navy"
      : "inline-block rounded-full border border-crimson/30 bg-crimson/5 px-3 py-1 text-sm text-navy";
  return (
    <div>
      <p className={labelClass}>{group.group}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className={pillClass}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Recognition({ year, text }: { year: string; text: string }) {
  return (
    <li className="border-l-2 border-crimson pl-4">
      <span className="font-semibold text-navy mr-3">{year}</span>
      <span className="text-navy/85">{text}</span>
    </li>
  );
}
