import { useRef, useState, useCallback } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromEvent = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[min(2vw,32px)] ring-1 ring-charcoal/5"
      onMouseMove={(e) => dragging.current && setFromEvent(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromEvent(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt={afterAlt}
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
          style={{ width: ref.current?.offsetWidth ?? "100%" }}
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-ivory shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 -left-5 flex size-10 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-ivory text-charcoal shadow-xl ring-1 ring-charcoal/10"
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory backdrop-blur">
        Before
      </span>
      <span className="absolute bottom-4 right-4 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal backdrop-blur">
        After
      </span>
    </div>
  );
}