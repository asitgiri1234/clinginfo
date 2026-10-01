"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#presence", label: "Global" },
  { href: "#clients", label: "Clients" },
  { href: "#offices", label: "Offices" },
  { href: "#team", label: "Team" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[#e4e6eb] bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold text-[#1c1e21]">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0064e0] text-sm text-white">C</span>
          Cling
        </a>
        <nav className="hidden items-center gap-6 text-[15px] text-[#1c1e21] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#0064e0]">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="ml-auto hidden text-[15px] font-medium text-[#0064e0] md:inline">
          Contact
        </a>
        <button
          type="button"
          className="ml-auto text-[15px] font-medium text-[#0064e0] md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-[#e4e6eb] bg-white px-5 py-4 md:hidden">
          <ul className="space-y-3 text-[15px]">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-[#0064e0]" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
