import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials — Dr. Mohiti" },
      { name: "description", content: "Stories from patients of Dr. Hengameh Mohiti's dental atelier." },
      { property: "og:title", content: "Patient Testimonials" },
      { property: "og:description", content: "Stories of trust and transformation." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Testimonials"
        title={<>In their <span className="italic text-gold">own</span> words.</>}
        subtitle="The most honest reviews of our work come from the people who trusted us with their smiles."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-ivory-soft p-10 ring-1 ring-charcoal/5">
              <div className="mb-4 text-gold text-lg">{"★".repeat(t.rating)}</div>
              <blockquote className="font-display text-xl leading-snug text-pretty">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm text-charcoal/60">
                <span className="font-medium text-charcoal">{t.name}</span> · {t.treatment}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});