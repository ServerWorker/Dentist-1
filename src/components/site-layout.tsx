import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-ivory text-charcoal font-sans selection:bg-gold/20">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="px-6 pt-40 pb-16 sm:pt-44">
      <div className="mx-auto max-w-5xl text-center">
        {eyebrow && (
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold animate-reveal">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-5xl leading-[1.05] text-balance md:text-7xl animate-reveal">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-8 max-w-2xl text-lg text-pretty leading-relaxed text-charcoal/65 animate-reveal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}