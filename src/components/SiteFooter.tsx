import type { ReactNode } from "react";

const site = "https://clinginfotech.com";

const quickLinks = [
  { href: "#top", label: "Home" },
  { href: `${site}/video3d`, label: "3D Videos" },
  { href: `${site}/ai`, label: "AI/ML" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: `${site}/portfolio`, label: "Portfolio" },
  { href: `${site}/achievements`, label: "Achievements" },
  { href: "#team", label: "Team" },
  { href: `${site}/career`, label: "Career" },
  { href: `${site}/sitemap.xml`, label: "Sitemap" },
  { href: `${site}/privacy`, label: "Privacy Policy" },
  { href: `${site}/refund-policy`, label: "Cancellation & Refund Policy" },
  { href: `${site}/terms-and-condition`, label: "Terms and Conditions" },
];

const footerServices = [
  "App Development",
  "Website Designing",
  "Web Design",
  "Digital Marketing",
  "Social Media Marketing",
  "IT Team for Entrepreneurship",
  "Career Counselling",
  "ERPs",
];

const addresses = [
  {
    title: "Head Office Noida",
    lines: ["130, 131, 132, 2nd Floor, Wave Galleria, Wave City,", "NH-24, Noida, Uttar Pradesh - 201015"],
  },
  {
    title: "Pune Office Address",
    lines: [
      "2nd Floor, Raj Square, Pashan - Sus Rd,",
      "near Abhinav kala college, opposite",
      "Reliance Fresh, Sutarwadi, Pashan,",
      "Pune, Maharashtra - 411021",
    ],
  },
  {
    title: "Moradabad Office Address",
    lines: ["2/652, Avas Vikas, Buddhi Vihar", "Moradabad, UP - 244001"],
  },
  {
    title: "Guinea Office Address",
    lines: ["Lanbandji, Commune de Lanbandji", "Conakry, Republic of Guinea"],
  },
];

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-[#f7f0f2] text-[#1c1e21]"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-[#e4e6eb] bg-white px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <img src="/brand/logo.png" alt="Cling" className="h-12 w-auto" />
            <div className="flex gap-3">
              <IconLink href="https://www.instagram.com/clinginfotechworks/" label="Instagram">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </IconLink>
              <IconLink href="https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/" label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z" />
                </svg>
              </IconLink>
            </div>
          </div>

          <div className="mt-8 grid gap-10 border-t border-[#e4e6eb] pt-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-semibold text-[#1c1e21]">Cling Info Tech Works Private Limited</p>
              <p className="mt-4 text-sm font-semibold text-[#1c1e21]">Address</p>
              <ul className="mt-3 space-y-4">
                {addresses.map((office) => (
                  <li key={office.title}>
                    <p className="text-sm font-medium text-[#1c1e21]">{office.title}</p>
                    {office.lines.map((line) => (
                      <p key={line} className="text-sm leading-6 text-[#65676b]">
                        {line}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-3 text-sm text-[#1c1e21]">
                <li>Maharashtra, Uttar Pradesh</li>
                <li>
                  <a href="tel:+918264469132">+91 8264469132</a>
                </li>
                <li>
                  <a href="mailto:info@clinginfotech.com">info@clinginfotech.com</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-[#1c1e21]">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#65676b] hover:text-[#0064e0]"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-[#1c1e21]">Services</p>
              <ul className="mt-4 space-y-2 text-sm text-[#65676b]">
                {footerServices.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 border-t border-[#e4e6eb] pt-6 text-center text-sm text-[#65676b]">
            Copyright © Cling Infotech All Rights Reserved
          </p>
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send?phone=8264469132&text=Hey%20I%20am%20trying%20to%20connect%20with%20you"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed right-5 bottom-5 z-30 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#25d366] shadow-[0_8px_24px_rgba(28,30,33,0.16)]"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.15h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.88c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.91-4.35-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39h.37c.12 0 .28-.04.44.34.16.39.56 1.36.61 1.46.05.1.08.22.02.35-.06.14-.1.22-.19.34-.1.12-.2.26-.29.35-.1.1-.2.2-.08.39.11.19.5.82 1.07 1.33.73.65 1.35.86 1.54.95.19.1.3.08.41-.05.11-.12.47-.55.6-.74.12-.19.25-.16.42-.1.17.07 1.08.51 1.27.6.18.1.3.14.35.22.04.08.04.46-.2 1.14z" />
        </svg>
      </a>
    </>
  );
}
