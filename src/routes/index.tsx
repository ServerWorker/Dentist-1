import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BeforeAfter } from "@/components/before-after";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { treatments, testimonials, faqs } from "@/lib/site-data";
import drPortrait from "@/assets/dr-portrait.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";
import clinicSuite from "@/assets/clinic-suite.jpg";
import clinicAtelier from "@/assets/clinic-atelier.jpg";
import smileBefore from "@/assets/smile-before.jpg";
import smileAfter from "@/assets/smile-after.jpg";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Hengameh Mohiti — Luxury Dental Atelier" },
      { name: "description", content: "Cosmetic, restorative & pediatric dentistry in a serene atelier. We care about your mental and oral health—then your smile." },
      { property: "og:title", content: "Dr. Hengameh Mohiti — Luxury Dental Atelier" },
      { property: "og:description", content: "Cosmetic, restorative & pediatric dentistry in a serene atelier." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center px-6 pt-32 pb-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="relative z-10 animate-reveal">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Cosmetic & Wellness Dentistry
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-[5.5rem]">
              Where Healthy <br />
              <span className="italic text-gold">Smiles</span> Meet Confidence.
            </h1>
            <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-pretty text-charcoal/65">
              We care about your mental and oral health—then we care about your
              smile. Experience a sunlit atelier of dental artistry designed for
              your comfort.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="flex items-center rounded-full bg-charcoal py-2 pr-6 pl-2 text-sm font-medium text-ivory ring-1 ring-charcoal transition-colors hover:bg-charcoal/90"
              >
                <span className="mr-3 flex size-8 items-center justify-center rounded-full bg-gold text-charcoal">
                  <Calendar className="size-4" />
                </span>
                Book Appointment
              </Link>
              <Link
                to="/treatments"
                className="flex items-center rounded-full bg-transparent px-6 py-2 text-sm font-medium text-charcoal ring-1 ring-charcoal/15 transition-colors hover:bg-charcoal/5"
              >
                Explore Treatments
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-y-6 divide-x divide-charcoal/10">
              <div className="pr-8">
                <p className="font-display text-2xl">15+</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/50">Years Experience</p>
              </div>
              <div className="px-8">
                <p className="font-display text-2xl">4.9/5</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/50">Patient Score</p>
              </div>
              <div className="px-8">
                <p className="font-display text-2xl">8k+</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/50">Smiles Crafted</p>
              </div>
            </div>
          </div>

          <div className="relative animate-reveal">
            <div className="aspect-[4/5] overflow-hidden rounded-[min(2vw,24px)] ring-1 ring-charcoal/5">
              <img
                src={drPortrait}
                alt="Dr. Hengameh Mohiti in her atelier"
                width={1088}
                height={1344}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-ivory/95 p-5 shadow-2xl ring-1 ring-charcoal/5 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                Latest Recognition
              </p>
              <p className="mt-1 font-display text-base leading-snug">
                Global Aesthetics Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal px-6 py-24 text-ivory">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Our Treatments
              </p>
              <h2 className="font-display text-4xl text-balance md:text-5xl">
                Curation of Expertise
              </h2>
              <p className="mt-6 max-w-[48ch] text-pretty text-ivory/55">
                Specialized treatments tailored to the architecture of your
                unique smile — from delicate bonding to full reconstructions.
              </p>
            </div>
            <Link
              to="/treatments"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"
            >
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                to="/treatments/$slug"
                params={{ slug: t.slug }}
                className="group relative bg-charcoal p-8 transition-colors hover:bg-ivory/5"
              >
                <p className="text-gold">{t.number}</p>
                <h3 className="mt-6 font-display text-2xl">{t.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/50">{t.short}</p>
                <div className="mt-8 h-px w-8 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Smile Gallery
            </p>
            <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl">
              Radiant Transformations
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-charcoal/60">
              Drag the slider to see real outcomes crafted by Dr. Mohiti's hand.
            </p>
          </div>
          <BeforeAfter
            before={smileBefore}
            after={smileAfter}
            beforeAlt="Patient smile before cosmetic treatment"
            afterAlt="Patient smile after cosmetic treatment"
          />
          <div className="mt-10 flex justify-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory hover:bg-charcoal/90"
            >
              Explore the gallery
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Experience */}
      <section className="bg-ivory-soft px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              The Clinic
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Designed for tranquility.
            </h2>
            <p className="max-w-[48ch] text-pretty text-charcoal/65">
              Step into a sunlit marble atelier where every surface is soft,
              warm and quiet. Our space was designed to dissolve dental anxiety
              through sensory architecture.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img src={clinicReception} alt="Reception" loading="lazy" className="size-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img src={clinicSuite} alt="Treatment suite" loading="lazy" className="size-full object-cover" />
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[min(2vw,32px)]">
            <img src={clinicAtelier} alt="Clinic equipment detail" loading="lazy" className="size-full object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              In their words
            </p>
            <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl">
              Stories of trust & transformation.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.name} className="rounded-3xl bg-ivory-soft p-8 ring-1 ring-charcoal/5">
                <div className="mb-4 text-gold">{"★".repeat(t.rating)}</div>
                <blockquote className="font-display text-lg leading-snug text-pretty">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm text-charcoal/60">
                  <span className="font-medium text-charcoal">{t.name}</span> · {t.treatment}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal hover:text-gold">
              Read more stories <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-soft px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Frequently Asked
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Considered answers to thoughtful questions.
            </h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-charcoal hover:text-gold">
              Still curious? Ask us anything <ArrowRight className="size-4" />
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-charcoal/10">
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl leading-tight md:text-6xl">
            Your most confident smile <span className="italic text-gold">starts here.</span>
          </h2>
          <p className="mt-8 text-pretty text-charcoal/60">
            Book a bespoke consultation to discuss your vision with Dr. Mohiti.
          </p>
          <Link
            to="/book"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-ivory transition-transform hover:scale-[1.02]"
          >
            Schedule your visit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
