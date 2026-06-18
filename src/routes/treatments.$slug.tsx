import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { treatments, type Treatment } from "@/lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const t = treatments.find((x) => x.slug === params.slug);
    if (!t) throw notFound();
    return t;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Treatment"} — Dr. Mohiti` },
      { name: "description", content: loaderData?.short ?? "Treatment details" },
      { property: "og:title", content: `${loaderData?.name ?? "Treatment"} — Dr. Mohiti` },
      { property: "og:description", content: loaderData?.short ?? "" },
      { property: "og:url", content: `/treatments/${loaderData?.slug}` },
    ],
    links: [{ rel: "canonical", href: `/treatments/${loaderData?.slug}` }],
  }),
  errorComponent: () => <SiteLayout><div className="px-6 pt-44 pb-32 text-center"><h1 className="font-display text-4xl">Something went wrong</h1></div></SiteLayout>,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="px-6 pt-44 pb-32 text-center">
        <h1 className="font-display text-4xl">Treatment not found</h1>
        <Link to="/treatments" className="mt-6 inline-flex items-center gap-2 text-gold">View all treatments</Link>
      </div>
    </SiteLayout>
  ),
  component: TreatmentDetail,
});

function TreatmentDetail() {
  const t = Route.useLoaderData() as Treatment;
  const related = treatments.filter((x) => x.slug !== t.slug).slice(0, 3);
  return (
    <SiteLayout>
      <section className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-5xl">
          <Link to="/treatments" className="text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/50 hover:text-gold">
            ← All treatments
          </Link>
          <div className="mt-6 flex items-baseline gap-6">
            <span className="font-display text-2xl text-gold">{t.number}</span>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">{t.name}</h1>
          </div>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-charcoal/70">{t.description}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-ivory-soft p-10 ring-1 ring-charcoal/5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Benefits</p>
            <ul className="mt-6 space-y-4">
              {t.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/75">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-charcoal p-10 text-ivory">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Recovery</p>
            <p className="mt-6 text-ivory/75 leading-relaxed">{t.recovery}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">The Process</p>
          <h2 className="mt-4 font-display text-4xl">From consultation to completion.</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p, i) => (
              <li key={p.step} className="bg-ivory p-8">
                <span className="font-display text-2xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl">{p.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Frequently Asked</p>
          <h2 className="mt-4 font-display text-4xl">Common questions.</h2>
          <Accordion type="single" collapsible className="mt-8">
            {t.faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-charcoal/10">
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-ivory-soft px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl">Related treatments</h2>
            <Link to="/treatments" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 hover:text-gold">View all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/treatments/$slug" params={{ slug: r.slug }} className="group rounded-3xl bg-ivory p-8 ring-1 ring-charcoal/5 transition-colors hover:bg-charcoal hover:text-ivory">
                <p className="text-gold">{r.number}</p>
                <h3 className="mt-4 font-display text-2xl">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60 group-hover:text-ivory/60">{r.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl">Begin with a private consultation.</h2>
          <Link to="/book" className="mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-ivory hover:bg-charcoal/90">
            Book {t.name} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}