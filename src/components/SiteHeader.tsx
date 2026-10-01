"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#clients", label: "Clients" },
  { href: "#studios", label: "Studios" },
  { href: "#leadership", label: "Leadership" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[#090a0b]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="font-[family-name:var(--font-serif)] text-2xl tracking-tight text-[var(--ivory)]">
          Cling
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--ivory)]">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden border border-[var(--ivory)] px-4 py-2 text-sm text-[var(--ivory)] md:inline-block">
          Start a project
        </a>
        <button
          type="button"
          className="border border-[var(--line)] px-3 py-2 text-sm text-[var(--ivory)] md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-[var(--line)] px-5 py-4 md:hidden">
          <ul className="space-y-3 text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Start a project
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
