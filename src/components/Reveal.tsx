import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger in seconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Reveal fades + lifts its children into view once, when scrolled near. Uses
 * IntersectionObserver and respects prefers-reduced-motion (renders visible).
 */
export function Reveal({ children, delay = 0, className = "", as }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag: ElementType = as ?? "div";
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "reveal--in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
