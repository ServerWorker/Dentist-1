import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6 sm:py-3 backdrop-blur-md ring-1 ring-charcoal/5 transition-colors ${
            scrolled ? "bg-ivory/90 shadow-sm" : "bg-ivory/70"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-tight text-charcoal">
              Mohiti
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-charcoal/40 sm:inline">
              Dental Atelier
            </span>
          </Link>
          <div className="hidden gap-8 lg:flex">
            {links.slice(0, 5).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/contact"
              className="hidden text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal sm:inline"
            >
              Contact
            </Link>
            <Link
              to="/book"
              className="rounded-full bg-charcoal px-5 py-2 text-sm font-medium text-ivory ring-1 ring-charcoal transition-transform hover:scale-[1.02]"
            >
              Book
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-charcoal"
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-3xl bg-ivory/95 p-6 ring-1 ring-charcoal/5 backdrop-blur-md lg:hidden">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-charcoal/80 hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}