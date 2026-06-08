import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Rubina Carlson",
  description:
    "Selected projects from 15+ years in marketing across tech, tourism, agency and the SA marketing community.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

type Project = {
  title: string;
  role: string;
  year: string;
  outcome: string;
  href: string;
  external?: boolean;
  image?: string;
  imageAlt?: string;
  metric?: string;
  metricLabel?: string;
};

const projects: Project[] = [
  {
    title: "90 Seconds",
    role: "Head of Marketing",
    year: "2023 – present",
    outcome:
      "Leading the global marketing function from APAC. New brand and website delivered in the first two months. $5M in pipeline opportunities since June 2024 across inbound, paid, ABM, lifecycle and field.",
    href: "/work/90-seconds",
    metric: "$5M",
    metricLabel: "pipeline since June 2024",
  },
  {
    title: "Scout — Customer Agent",
    role: "90 Seconds",
    year: "2026",
    outcome:
      "Configured the brand AI chat agent end-to-end — tone of voice, scripted responses, guardrails and custom instructions. Handles top-of-funnel enquiries in the 90 Seconds brand voice.",
    href: "/work/scout",
    metric: "Live",
    metricLabel: "on 90seconds.com",
  },
  {
    title: "Web Attribution",
    role: "90 Seconds",
    year: "2026",
    outcome:
      "Built full-funnel attribution from zero. GTM container, GA4, PostHog identify on every form submission, HubSpot sync. Every visitor tracked from first touch to CRM.",
    href: "/work/web-attribution",
    metric: "GTM → PostHog",
    metricLabel: "full funnel tracked",
  },
  {
    title: "City Blog Programme",
    role: "90 Seconds",
    year: "2026",
    outcome:
      "28 city video-production posts written to informational intent — deliberately separated from the commercial location pages to capture search queries without cannibalising the transactional pages.",
    href: "/work/city-blog-programme",
    metric: "28",
    metricLabel: "city posts, live",
  },
  {
    title: "Q2 Nurture + EOFY Emails",
    role: "90 Seconds",
    year: "2026",
    outcome:
      "End-to-end email programme for enterprise marketing leaders. 8 fortnightly nurture emails, HubSpot workflow setup, Tier-0 market targeting and suppression list. Plus EOFY campaign and enrolment broadcast.",
    href: "/work/q2-nurture",
    metric: "8",
    metricLabel: "nurture emails",
  },
  {
    title: "Digital Adelaide",
    role: "Director",
    year: "2015 – 2025",
    outcome:
      "Grew the conference 5x, from 40 delegates to 200+, into South Australia's largest marketing event.",
    href: "/work/digital-adelaide",
    image: "/work/digital-adelaide/crowd-oval.webp",
    imageAlt: "A full house of Digital Adelaide attendees at Adelaide Oval.",
  },
  {
    title: "K-TIG",
    role: "Refuel Creative",
    year: "2023",
    outcome:
      "Comprehensive HubSpot rebuild for a defence and aerospace welding manufacturer. HubSpot Impact Award winner.",
    href: "/work/k-tig",
    metric: "172%",
    metricLabel: "lead lift in 3 months",
  },
  {
    title: "Carers and Disability Link",
    role: "Refuel Creative",
    year: "2022 – 2023",
    outcome:
      "End-to-end digital transformation. Brand, website, social and email reset for a regional SA non-profit.",
    href: "/work/carers-and-disability-link",
    metric: "37%",
    metricLabel: "average email open rate",
  },
  {
    title: "SeaLink",
    role: "SeaLink Travel Group",
    year: "2015 – 2020",
    outcome:
      "Five years across SeaLink Kangaroo Island, Bruny Island, Adelaide Sightseeing and the PS Murray Princess. Including a launch from −50 to +10 NPS.",
    href: "/work/sealink",
    metric: "-50 → +10",
    metricLabel: "Bruny Island NPS turnaround",
  },
  {
    title: "TreesPlease Games",
    role: "Refuel Creative",
    year: "2021 – 2022",
    outcome:
      "Video game ad strategy that delivered Play Store scale at a reduced cost per install.",
    href: "https://www.refuelcreative.com.au/case-studies/treesplease-games-video-game-ads-built-to-convert",
    external: true,
    metric: "500K+",
    metricLabel: "Play Store users",
  },
  {
    title: "Australian Centre for Business Growth",
    role: "Refuel Creative",
    year: "2020 – 2022",
    outcome:
      "Executive-audience social campaigns for an Australian university-affiliated growth program.",
    href: "https://www.refuelcreative.com.au/case-studies/first-place-digital-marketing-for-the-australian-centre-for-business-growth",
    external: true,
    metric: "3.8x",
    metricLabel: "over MQL target",
  },
  {
    title: "Lot Fourteen",
    role: "Refuel Creative",
    year: "2021 – 2023",
    outcome:
      "Stakeholder engagement and social media strategy for South Australia's innovation precinct.",
    href: "https://www.refuelcreative.com.au/case-studies/engaging-stakeholders-lot-fourteens-stellar-social-media-success-story",
    external: true,
    metric: "Precinct",
    metricLabel: "stakeholder strategy",
  },
  {
    title: "FlatRateNow",
    role: "Refuel Creative",
    year: "2021",
    outcome:
      "HubSpot streamlining for a trade services SaaS, focused on the lead-to-customer flow.",
    href: "https://www.refuelcreative.com.au/case-studies/flatratenow-reimagining-business-streamlining-success-with-hubspot",
    external: true,
    metric: "HubSpot",
    metricLabel: "rebuild",
  },
  {
    title: "SOIO",
    role: "Refuel Creative",
    year: "2022",
    outcome:
      "Website built for sales with HubSpot. Conversion-led design and integrations.",
    href: "https://www.refuelcreative.com.au/case-studies/soio-a-website-built-for-sales-with-hubspot",
    external: true,
    metric: "Sales",
    metricLabel: "site rebuild",
  },
];

export default function WorkIndex() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-navy/10 bg-cream/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
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
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-navy">
          Recent work.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/80">
          Selected projects from 15+ years across tech, agency, tourism and
          the SA marketing community. Internal pages for the work I led
          end-to-end. External links to my agency case studies, hosted by
          Refuel Creative.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-navy/70">
          © Rubina Carlson 2026 · Adelaide, South Australia
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isInternal = !project.external;
  const Wrapper = isInternal ? Link : "a";
  const wrapperProps = isInternal
    ? { href: project.href }
    : { href: project.href, target: "_blank", rel: "noopener" };

  return (
    <Wrapper
      {...wrapperProps}
      className="group block border border-navy/15 bg-cream rounded-lg overflow-hidden hover:border-crimson/60 hover:shadow-sm transition"
    >
      {/* Media */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-cream px-6 text-center">
            <p className="text-5xl sm:text-6xl font-bold tracking-tight text-crimson-light">
              {project.metric}
            </p>
            <p className="mt-3 text-sm uppercase tracking-wider text-cream/70">
              {project.metricLabel}
            </p>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-navy">
          {project.title}
          <span className="ml-1 text-crimson">
            {project.external ? " ↗" : " →"}
          </span>
        </h2>
        <p className="text-sm text-crimson italic mt-1">
          {project.role} · {project.year}
        </p>
        <p className="text-navy/80 leading-relaxed mt-3">{project.outcome}</p>
      </div>
    </Wrapper>
  );
}
