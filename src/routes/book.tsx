import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { treatments, treatmentSlots } from "@/lib/site-data";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Dr. Mohiti" },
      { name: "description", content: "Reserve a private consultation with Dr. Hengameh Mohiti in four steps." },
      { property: "og:title", content: "Book Appointment — Dr. Mohiti" },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [info, setInfo] = useState({ name: "", phone: "", email: "" });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = () => {
    toast.success("Your appointment request has been received. We'll confirm shortly.");
    setStep(4);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Book Appointment"
        title={<>A few <span className="italic text-gold">gentle</span> questions.</>}
        subtitle="Reserve your private consultation in four short steps."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex flex-1 items-center">
                <div className={`flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${step >= n ? "bg-gold text-charcoal" : "bg-ivory-soft text-charcoal/40"}`}>
                  {step > n ? <Check className="size-4" /> : n}
                </div>
                {n < 4 && <div className={`mx-2 h-px flex-1 ${step > n ? "bg-gold" : "bg-charcoal/10"}`} />}
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-ivory-soft p-8 ring-1 ring-charcoal/5 sm:p-12">
            {step === 1 && (
              <div>
                <h2 className="font-display text-3xl">Select a treatment</h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {treatments.map((t) => (
                    <button
                      key={t.slug}
                      onClick={() => setTreatment(t.name)}
                      className={`rounded-2xl p-5 text-left ring-1 transition-colors ${treatment === t.name ? "bg-charcoal text-ivory ring-charcoal" : "bg-ivory ring-charcoal/10 hover:ring-gold"}`}
                    >
                      <p className={`text-xs ${treatment === t.name ? "text-gold" : "text-gold"}`}>{t.number}</p>
                      <p className="mt-2 font-display text-lg">{t.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-3xl">Pick a date & time</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">Preferred date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full rounded-xl border border-charcoal/10 bg-ivory px-4 py-3 outline-none focus:border-gold" />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">Time</label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {treatmentSlots.map((s) => (
                        <button key={s} onClick={() => setTime(s)} className={`rounded-lg py-2 text-sm transition-colors ${time === s ? "bg-charcoal text-ivory" : "bg-ivory ring-1 ring-charcoal/10 hover:ring-gold"}`}>{s}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-3xl">Your details</h2>
                <div className="mt-8 grid gap-6">
                  {(["name", "phone", "email"] as const).map((k) => (
                    <div key={k}>
                      <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">{k}</label>
                      <input value={info[k]} onChange={(e) => setInfo({ ...info, [k]: e.target.value })} className="mt-2 w-full rounded-xl border border-charcoal/10 bg-ivory px-4 py-3 outline-none focus:border-gold" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold"><Check className="size-7 text-charcoal" /></div>
                <h2 className="mt-6 font-display text-3xl">Request received</h2>
                <p className="mt-4 text-charcoal/65">We'll confirm your appointment for <strong>{treatment}</strong> on <strong>{date || "your selected date"}</strong> at <strong>{time || "your selected time"}</strong> shortly.</p>
              </div>
            )}

            {step < 4 && (
              <div className="mt-10 flex justify-between gap-3">
                <button onClick={back} disabled={step === 1} className="rounded-full px-6 py-3 text-sm font-medium text-charcoal/60 disabled:opacity-30">Back</button>
                {step < 3 ? (
                  <button onClick={next} disabled={(step === 1 && !treatment) || (step === 2 && (!date || !time))} className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory disabled:opacity-40">
                    Continue <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button onClick={submit} disabled={!info.name || !info.phone} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-charcoal disabled:opacity-40">
                    Confirm <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}