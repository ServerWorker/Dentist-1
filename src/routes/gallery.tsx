import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { BeforeAfter } from "@/components/before-after";
import smileBefore from "@/assets/smile-before.jpg";
import smileAfter from "@/assets/smile-after.jpg";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Dr. Mohiti" },
      { name: "description", content: "Real before-and-after smile transformations crafted by Dr. Hengameh Mohiti." },
      { property: "og:title", content: "Smile Gallery — Dr. Mohiti" },
      { property: "og:description", content: "Real before-and-after transformations." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const filters = ["All", "Smile Design", "Veneers", "Implants", "Whitening"] as const;

const cases = [
  { title: "Full porcelain reconstruction", category: "Smile Design", before: smileBefore, after: smileAfter },
  { title: "Eight-veneer transformation", category: "Veneers", before: smileBefore, after: smileAfter },
  { title: "Single-tooth implant restoration", category: "Implants", before: smileBefore, after: smileAfter },
  { title: "In-office whitening protocol", category: "Whitening", before: smileBefore, after: smileAfter },
];

function GalleryPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.category === active);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Smile Gallery"
        title={<>Evidence of <span className="italic text-gold">artistry</span>.</>}
        subtitle="Every transformation is unique. Drag the slider on any case to see what was, and what came to be."
      />
      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                active === f ? "bg-charcoal text-ivory" : "bg-ivory-soft text-charcoal/70 hover:bg-charcoal/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {filtered.map((c) => (
            <div key={c.title}>
              <BeforeAfter before={c.before} after={c.after} beforeAlt={`${c.title} before`} afterAlt={`${c.title} after`} />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-xl">{c.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50">{c.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}