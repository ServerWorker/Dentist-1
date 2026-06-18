import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { treatments } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Mohiti Dental Atelier" },
      { name: "description", content: "Smile design, cosmetic, restorative, root canal, prosthodontics and pediatric dentistry — crafted in a calm, luxurious atelier." },
      { property: "og:title", content: "Treatments at Mohiti Dental" },
      { property: "og:description", content: "Six specialized treatments crafted in a serene atelier." },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Treatments"
        title={<>Six disciplines. <span className="italic text-gold">One</span> standard of care.</>}
        subtitle="Explore the full range of treatments performed personally by Dr. Mohiti — each delivered with the same attention to comfort, aesthetics and long-term health."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl bg-charcoal/5 ring-1 ring-charcoal/5 md:grid-cols-2">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              to="/treatments/$slug"
              params={{ slug: t.slug }}
              className="group bg-ivory p-10 transition-colors hover:bg-ivory-soft"
            >
              <div className="flex items-start justify-between">
                <p className="text-gold">{t.number}</p>
                <ArrowRight className="size-5 text-charcoal/30 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </div>
              <h3 className="mt-8 font-display text-3xl">{t.name}</h3>
              <p className="mt-4 max-w-md text-charcoal/65 leading-relaxed">{t.short}</p>
              <div className="mt-8 h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}