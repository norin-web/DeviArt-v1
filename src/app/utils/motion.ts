import { useEffect, useLayoutEffect, useRef, useState } from "react";

const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Writes the element's scroll progress to the CSS variable --p:
 * 0 when its top meets the viewport bottom, 1 when its bottom meets the viewport top.
 * Styles derive transforms from --p, so nothing re-renders while scrolling.
 * rAF is throttled in hidden documents, so scroll events update directly there.
 */
export function useScrollVar<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (document.hidden) update();
      else if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

/** Counts a number up once `run` turns true; non-numeric values render as-is. */
export function useCountUp(value: string, run: boolean, ms = 900) {
  const m = value.match(/^(\d+)(.*)$/);
  const [n, setN] = useState(() => (m && run && !reduced() ? 0 : null));
  useEffect(() => {
    if (!m || !run || reduced() || document.hidden) return setN(null);
    const to = +m[1];
    const t0 = performance.now();
    let raf = requestAnimationFrame(function tick(t) {
      const k = Math.min(1, (t - t0) / ms);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
      else setN(null);
    });
    return () => cancelAnimationFrame(raf);
  }, [run]); // eslint-disable-line react-hooks/exhaustive-deps
  return n === null ? value : `${n}${m?.[2] ?? ""}`;
}

/**
 * Every .glow drifts toward the pointer while the pointer is over the glow's
 * section: the section gets --mx / --my (0..1). Mounted once in Root, so it
 * covers any page hero and the footer without per-page wiring.
 */
export function useGlowFollow() {
  useEffect(() => {
    if (reduced() || !matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const update = () => {
      raf = 0;
      document.querySelectorAll<HTMLElement>(".glow").forEach((g) => {
        const host = g.parentElement;
        if (!host) return;
        const r = host.getBoundingClientRect();
        if (x < r.left || x > r.right || y < r.top || y > r.bottom) return;
        host.style.setProperty("--mx", ((x - r.left) / r.width).toFixed(3));
        host.style.setProperty("--my", ((y - r.top) / r.height).toFixed(3));
      });
    };
    const on = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };
    addEventListener("pointermove", on, { passive: true });
    return () => {
      removeEventListener("pointermove", on);
      cancelAnimationFrame(raf);
    };
  }, []);
}
