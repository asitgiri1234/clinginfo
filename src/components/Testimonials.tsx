"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const scroller = useRef<HTMLUListElement>(null);
  const [stops, setStops] = useState<number[]>([0]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const measure = () => {
      const child = el.firstElementChild as HTMLElement | null;
      if (!child) return;
      const visible = Math.max(1, Math.round(el.clientWidth / (child.offsetWidth + 16)));
      const step = visible >= 3 ? 2 : 1;
      const max = Math.max(0, testimonials.length - visible);
      const next: number[] = [];
      for (let index = 0; index <= max; index += step) next.push(index);
      if (next[next.length - 1] !== max) next.push(max);
      setStops(next);
      setActive((value) => next.reduce((best, stop) => (Math.abs(stop - value) < Math.abs(best - value) ? stop : best)));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function show(index: number) {
    const el = scroller.current;
    const child = el?.children[index] as HTMLElement | undefined;
    if (!el || !child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setActive(index);
  }

  return (
    <div>
      <ul
        ref={scroller}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pt-10 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <li
            key={item.name}
            className="card relative flex w-full shrink-0 snap-start flex-col items-center px-6 pt-12 text-center md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <img
              src={item.photo}
              alt=""
              className="absolute top-0 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover shadow-sm"
            />
            <p className="text-[15px] leading-6 text-[#1c1e21]">{item.quote}</p>
            <p className="mt-6 font-semibold text-[#1c1e21]">{item.name}</p>
            {item.role ? <p className="mt-1 text-sm text-[#65676b]">{item.role}</p> : null}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center gap-2">
        {stops.map((stop) => (
          <button
            key={stop}
            type="button"
            aria-label={`Show testimonials starting with ${testimonials[stop].name}`}
            aria-current={stop === active}
            onClick={() => show(stop)}
            className={`h-2.5 w-2.5 rounded-full ${stop === active ? "bg-[#1c1e21]" : "bg-[#d5d8dc]"}`}
          />
        ))}
      </div>
    </div>
  );
}
