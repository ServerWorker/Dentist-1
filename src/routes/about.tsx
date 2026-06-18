import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import drPortrait from "@/assets/dr-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Mohiti — Philosophy & Credentials" },
      { name: "description", content: "Meet Dr. Hengameh Mohiti — cosmetic dentist, restorative specialist and founder of a serene dental atelier." },
      { property: "og:title", content: "About Dr. Mohiti" },
      { property: "og:description", content: "Philosophy, credentials and the journey behind the practice." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2009", event: "Doctor of Dental Surgery, Tehran University of Medical Sciences" },
  { year: "2012", event: "Advanced Aesthetic Dentistry residency, NYU Continuing Education" },
  { year: "2015", event: "Certified Digital Smile Design provider" },
  { year: "2018", event: "Founded Mohiti Dental Atelier" },
  { year: "2022", event: "Speaker, International Cosmetic Dentistry Symposium" },
  { year: "2024", event: "Global Aesthetics Excellence Recognition" },
];

const credentials = [
  "DDS — Tehran University of Medical Sciences",
  "Member, Iranian Academy of Cosmetic Dentistry",
  "Certified DSD (Digital Smile Design) Provider",
  "Advanced Implantology, ITI Foundation",
  "Member, World Federation of Orthodontists (affiliate)",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={<>A philosophy of <span className="italic text-gold">care</span> first, craft second.</>}
        subtitle="Dr. Hengameh Mohiti believes the most beautiful smiles begin with calm minds and healthy mouths. Every patient is treated as a long story, not a single visit."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div className="overflow-hidden rounded-[min(2vw,32px)] ring-1 ring-charcoal/5">
            <img src={drPortrait} alt="Dr. Hengameh Mohiti" width={1088} height={1344} className="size-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-6 text-charcoal/75 leading-relaxed">
            <p className="text-lg">
              I came into dentistry because I believe a smile is one of the most
              honest forms of communication we have. When it is hidden — by
              fear, by pain, by self-doubt — something essential is muted.
            </p>
            <p>
              My work is to restore that voice. Sometimes that means a single,
              precise restoration. Sometimes it means months of choreographed
              reconstruction. Always, it begins with a conversation in which I
              listen far more than I speak.
            </p>
            <p>
              Our atelier is small by design. It allows me to know my patients,
              to remember the names of their children, to celebrate the wedding
              for which a smile was reborn. This is dentistry the way I always
              wished it could be.
            </p>
            <p className="font-display text-xl italic text-charcoal">— Dr. Hengameh Mohiti</p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Journey</p>
            <h2 className="mt-4 font-display text-4xl">Fifteen years, one philosophy.</h2>
          </div>
          <ol className="space-y-6">
            {timeline.map((t) => (
              <li key={t.year} className="flex gap-6 border-b border-ivory/10 pb-6">
                <span className="font-display text-2xl text-gold">{t.year}</span>
                <span className="text-ivory/70 leading-relaxed">{t.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Credentials</p>
          <h2 className="mt-4 font-display text-4xl">Trained where it matters.</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c} className="rounded-2xl bg-ivory-soft p-6 ring-1 ring-charcoal/5">
                <span className="text-charcoal/80">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}