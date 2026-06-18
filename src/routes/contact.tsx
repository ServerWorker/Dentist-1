import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Mohiti" },
      { name: "description", content: "Visit, call or message Dr. Hengameh Mohiti's dental atelier." },
      { property: "og:title", content: "Contact Dr. Mohiti" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <span className="italic text-gold">hear</span> from you.</>}
        subtitle="Reach out by phone, WhatsApp or the form below. We typically respond within one business day."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Visit</p>
              <p className="mt-3 text-lg">Suite 402, Medical Arts Plaza, Tehran</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Hours</p>
              <p className="mt-3 text-lg">Mon–Sat · 9:00–19:00</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Phone</p>
              <a href="tel:+989000000000" className="mt-3 block text-lg hover:text-gold">+98 900 000 0000</a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">WhatsApp</p>
              <a href="https://wa.me/989000000000" className="mt-3 block text-lg hover:text-gold">Chat with us</a>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-charcoal/5">
              <iframe
                title="Clinic location"
                className="size-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=51.38%2C35.69%2C51.43%2C35.73&layer=mapnik"
                loading="lazy"
              />
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                toast.success("Message sent. We'll be in touch shortly.");
                (e.target as HTMLFormElement).reset();
                setSending(false);
              }, 600);
            }}
            className="rounded-3xl bg-charcoal p-10 text-ivory"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/50">Message</label>
                <textarea required name="message" rows={5} className="mt-2 w-full border-b border-ivory/20 bg-transparent py-2 text-ivory outline-none focus:border-gold" />
              </div>
            </div>
            <button disabled={sending} className="mt-10 w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal disabled:opacity-60 transition-colors hover:bg-ivory">
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/50">{label}</label>
      <input required name={name} type={type} className="mt-2 w-full border-b border-ivory/20 bg-transparent py-2 text-ivory outline-none focus:border-gold" />
    </div>
  );
}