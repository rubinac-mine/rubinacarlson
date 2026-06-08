import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recommendations — Rubina Carlson",
  description:
    "Recommendations from clients, colleagues, mentees and the wider Adelaide marketing community.",
};

const EMAIL = "rubina.carlson@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

type Testimonial = {
  name: string;
  role: string;
  relationship: string;
  date: string;
  quote: string[];
};

const testimonials: Testimonial[] = [
  {
    name: "Richard Littleton",
    role: "Business Development | Research | Marketing | Strategic Communications | Engagement",
    relationship: "Client at Refuel Creative",
    date: "April 2025",
    quote: [
      "Rubina and I have been bumping into each other at various points of our careers for the best part of two decades, so I was ecstatic to finally work together when she was marketing manager at Refuel Creative. Together with her team we developed a national integrated digital marketing campaign for UniSA's Australian Centre for Business Growth that lifted our results to new heights. Rubina is an absolute pleasure to work with as she applies vision, anticipation, leadership and technical expertise all in one, as well as being an amazing person. I was so pleased to see her spread her wings to a global marketing role and continue to be mightily impressed at her hosting the excellent Digital Adelaide conference each year. I highly recommend Rubina!",
    ],
  },
  {
    name: "Ani Strecker",
    role: "Psychology and English @ Stanford University",
    relationship: "Direct report at 90 Seconds",
    date: "March 2025",
    quote: [
      "Rubina was an incredible boss during my internship at 90 Seconds. From my first day of work, she supported and uplifted me. She took the time in her busy schedule to train me herself and to make sure the entire 90 UK team welcomed me. She leads with grace, kindness, and efficiency, and constantly remains open to all viewpoints. Working with her has solidified my intention to pursue a career in marketing. She is a true role model! I look forward to seeing her continue to skyrocket.",
    ],
  },
  {
    name: "Hamish Cameron",
    role: "Founder @ AccuFind.ai | Non-executive Director | former CIO | AI Strategy and Execution",
    relationship: "Former colleague at SeaLink",
    date: "Earlier",
    quote: [
      "Rubina really is one of a kind. Her energy and passion in digital marketing and social are obvious once you have the pleasure of meeting her. I am continuously impressed at the level Rubina operates, especially her ability to take initiative to get things done. Rubina is adaptable, reliable, and a life-long learner. These attributes alone are difficult to find, but she is also a strategic thinker and someone you can bounce ideas off (which I did often) when we worked together at SeaLink.",
    ],
  },
  {
    name: "Louise Gleeson",
    role: "South Australian Museum | Marketing and brand strategy to drive meaningful impact",
    relationship: "Colleague at SeaLink",
    date: "December 2023",
    quote: [
      "I met Rubina while working at the SeaLink Travel Group, where we looked after a range of tourism and travel brands operating in South Australia. It was an absolute pleasure working alongside Rubina. She's an incredibly passionate marketer and shows so much dedication to the brands she manages, always striving to create impact and really drive results.",
      "While working together Rubina generously assisted me to take my digital marketing skills to the next level, providing me with guidance while I upskilled in SEO, SEM, influencer marketing and UX, as we worked with a website development team to further develop the e-commerce capacity of the business.",
      "I am constantly impressed with Rubina's leadership abilities and her dedication to building the capacity of those around her. Whether it's in the workplace, lecturing, mentoring or through her involvement delivering (and MC'ing) the Digital Adelaide Conference, she is always looking at ways she can leverage her extensive networks to provide opportunities for those around her and to develop her industry.",
      "I absolutely love Rubina's high energy and enthusiastic approach. Any team or project would be lucky to have her!",
    ],
  },
  {
    name: "Ben Mitchell",
    role: "Strategic Leadership, Stakeholder Management, Marketing and all things Innovation",
    relationship: "Client at Refuel Creative",
    date: "December 2023",
    quote: [
      "I am thrilled to write a personal recommendation for Rubina, with whom I had the pleasure of working closely as her client. From the outset, Rubina's warmth and friendliness set a positive tone for our collaboration. Her genuine enthusiasm for our projects was infectious, making every interaction not just productive but genuinely enjoyable.",
      "As the project leader and point of contact, Rubina exhibited a level of competence that exceeded my expectations. Her strategic insights were spot-on, and she consistently demonstrated an acute understanding of our brand and objectives. What truly stood out was her ability to translate complex marketing concepts into actionable plans, which resulted in successful outcomes.",
      "Working with Rubina felt like having a true partner in our marketing endeavors. She took the time to understand our unique needs and challenges, always going the extra mile to ensure that our expectations were not only met but exceeded. Her attention to detail and commitment to delivering high-quality results made a significant impact on the overall success of our initiatives.",
      "Rubina is not only an exceptional marketer but also a wonderful person to work with. Her warmth, competence, and dedication make her an asset to any team.",
    ],
  },
  {
    name: "Laurie Fletcher Martin",
    role: "User Acquisition at TreesPlease Games",
    relationship: "Client at Refuel Creative",
    date: "January 2024",
    quote: [
      "An absolute joy to work with you Rubina! Always bringing energy to our briefing calls (no matter what time of day). A credit to any team.",
    ],
  },
  {
    name: "Carmen Hutchison Wickman",
    role: "Brand and Marketing Leader",
    relationship: "Adelaide marketing peer",
    date: "January 2024",
    quote: [
      "Not only is Rubina a highly skilled marketing expert, she's warm, welcoming and always keen to support the marketing community in Adelaide and globally. As the MC and host of Digital Adelaide, Rubina does a great job building the tone for the whole event and was a huge help for me when nervously presenting. I've attended for the past few years and I'm continuously impressed by the growth each time.",
    ],
  },
  {
    name: "Wade Stokes",
    role: "Head of Marketing, Health Partners",
    relationship: "Adelaide marketing peer, Digital Adelaide speaker",
    date: "December 2023",
    quote: [
      "Rubina's warm and friendly personality shines through when you meet her, and matched with her understanding of all things marketing, it's no coincidence that she has an amazing network of friends and colleagues. As Director and Conference Organiser of Digital Adelaide, she's been a key driver of building a community of marketers in Adelaide and year after year, has put together a fantastic line-up to motivate and inspire so many people! I loved being part of Digital Adelaide as a speaker in 2023 and can't wait to see what's next. Thanks Rubina!",
    ],
  },
  {
    name: "Corey Wolf",
    role: "Senior Consultant",
    relationship: "Marketing peer (attended a meetup talk)",
    date: "November 2023",
    quote: [
      "It's my pleasure to recommend Rubina, a distinguished digital marketing professional whose expertise in marketing automation was made abundantly clear at the recent digital marketing meetup. Her presentation was not only insightful but showcased her deep knowledge and extensive experience in the field.",
      "Rubina has a remarkable talent for distilling complex marketing concepts into understandable and actionable parts, making her an invaluable asset to any team or project. Her approach to marketing automation is strategic and data-driven, which empowers her audience to leverage technology for impactful marketing campaigns.",
      "I am confident that Rubina's proficiency in digital marketing, particularly in marketing automation, will be an asset to any organization. She is truly a thought leader who can guide a team to success with her innovative strategies and clear communication.",
    ],
  },
  {
    name: "Caroline Patrick",
    role: "Group Manager, Marketing, Communications and Engagement, South East Water",
    relationship: "Marketing peer",
    date: "Earlier",
    quote: [
      "Rubina is one of the most passionate people I know. From a young age she has been regarded as a leader in her field. The effort she puts into driving the success of the digital marketing community here in Adelaide is to be admired. It demonstrates strong traits in leadership, adaptability and resilience. This is evidenced by her efforts in growing Digital Adelaide to become the largest marketing conference in the state.",
    ],
  },
  {
    name: "Michelle Prak FPRIA",
    role: "PR Consultant and Awarded Fiction Writer",
    relationship: "Marketing peer",
    date: "Earlier",
    quote: [
      "Rubina is one of those energetic and enthusiastic professionals who are a pleasure to work with. She's a natural networker and great communicator. Rubina would be an asset to any firm because she's always striving to do more, she's inquisitive, she has high standards, and she brings spark to a team environment.",
    ],
  },
];

export default function Testimonials() {
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
          Recommendations.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/80">
          Recommendations from clients, colleagues, mentees and the wider
          Adelaide marketing community. All collected from LinkedIn and
          reproduced in full.
        </p>
      </section>

      {/* List */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <section className="mx-auto max-w-5xl px-6 py-8 text-center">
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="border-l-2 border-crimson pl-6 sm:pl-8">
      <p className="text-xs uppercase tracking-wider text-crimson font-semibold">
        {testimonial.relationship} · {testimonial.date}
      </p>
      <div className="mt-4 space-y-4 text-lg leading-relaxed text-navy/85">
        {testimonial.quote.map((para, i) => (
          <p key={i}>&ldquo;{para}&rdquo;</p>
        ))}
      </div>
      <p className="mt-6 font-semibold text-navy">{testimonial.name}</p>
      <p className="text-sm text-navy/60 leading-relaxed">{testimonial.role}</p>
    </article>
  );
}
