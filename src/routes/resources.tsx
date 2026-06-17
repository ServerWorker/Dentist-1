import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Patient Resources — Dr. Mohiti" },
      { name: "description", content: "First-visit guide, aftercare and oral health articles." },
      { property: "og:title", content: "Patient Resources" },
      { property: "og:description", content: "Guides and articles from Dr. Mohiti." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: () => {
    const resources = [
      { title: "Your First Visit", desc: "What to expect on the day you walk in — from welcome to walk-out.", tag: "Guide" },
      { title: "Aftercare for Veneers", desc: "Five small habits that keep new ceramic restorations pristine for decades.", tag: "Aftercare" },
      { title: "Caring for Implants", desc: "A simple daily and weekly routine for long-term implant health.", tag: "Aftercare" },
      { title: "Children & Oral Health", desc: "How to build lifelong dental habits from age one onward.", tag: "Article" },
      { title: "The Calm Patient", desc: "Breathing techniques and mindset shifts for the dental-anxious.", tag: "Article" },
      { title: "Whitening, Truthfully", desc: "What works, what doesn't and what damages enamel forever.", tag: "Article" },
    ];
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Patient Resources"
          title={<>Knowledge, <span className="italic text-gold">generously</span> shared.</>}
          subtitle="Guides and articles to help you understand your treatment and care for your smile long after you leave the atelier."
        />
        <section className="px-6 pb-32">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <article key={r.title} className="group rounded-3xl bg-ivory-soft p-8 ring-1 ring-charcoal/5 transition-colors hover:bg-charcoal hover:text-ivory">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{r.tag}</span>
                <h3 className="mt-4 font-display text-2xl leading-tight">{r.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/65 group-hover:text-ivory/60">{r.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </SiteLayout>
    );
  },
});