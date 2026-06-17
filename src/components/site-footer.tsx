import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl">Dr. Hengameh Mohiti</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/50">
              We care about your mental and oral health—then we care about your
              smile. A serene atelier dedicated to the craft of lasting,
              confident smiles.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-ivory"
            >
              Book Appointment
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Visit
            </h4>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li>Suite 402, Medical Arts Plaza</li>
              <li>Tehran, Iran</li>
              <li>Mon–Sat · 9:00–19:00</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li><a href="tel:+989000000000" className="hover:text-gold">+98 900 000 0000</a></li>
              <li><a href="https://wa.me/989000000000" className="hover:text-gold">WhatsApp</a></li>
              <li><a href="mailto:hello@drmohiti.com" className="hover:text-gold">hello@drmohiti.com</a></li>
              <li><a href="https://instagram.com/" className="hover:text-gold">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.2em] text-ivory/30 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Dr. Hengameh Mohiti. All rights reserved.</span>
          <span>Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}