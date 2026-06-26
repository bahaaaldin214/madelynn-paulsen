import { useCallback, useEffect, useState } from "react";
import type { Shot } from "../content.js";
import { Reveal } from "./Reveal.js";

interface GalleryProps {
  shots: Shot[];
}

/** A masonry-style photo gallery with an accessible lightbox. */
export function Gallery({ shots }: GalleryProps) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length],
  );
  const current = open === null ? null : (shots[open] ?? null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="gallery">
        {shots.map((shot, i) => (
          <Reveal as="figure" className="shot" delay={(i % 3) * 0.08} key={shot.src}>
            <button
              type="button"
              className="shot__btn"
              onClick={() => setOpen(i)}
              aria-label={`View ${shot.caption}`}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </button>
            <figcaption>{shot.caption}</figcaption>
          </Reveal>
        ))}
      </div>

      {current ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox__close" aria-label="Close" onClick={close}>
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <figure className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>{current.caption}</figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
