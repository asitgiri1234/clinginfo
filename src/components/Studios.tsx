"use client";

import { FormEvent, useState } from "react";
import { offices } from "@/data/content";

export function Studios() {
  const [officeId, setOfficeId] = useState(offices[0].id);
  const [sent, setSent] = useState("");
  const office = offices.find((item) => item.id === officeId) ?? offices[0];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setSent("Name, email, and a short note are required.");
      return;
    }

    const body = [
      `Office: ${office.city}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Company: ${company || "—"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:info@clinginfotech.com?subject=${encodeURIComponent(
      `Project enquiry — ${office.city}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(`Opening a note to the ${office.city} desk at info@clinginfotech.com.`);
  }

  return (
    <>
      <section id="studios" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Global presence</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Three studios. One practice.</h2>
          </div>
          <p className="max-w-sm text-[var(--muted)]">
            Noida holds the head office. Pune and Moradabad carry the same work.
          </p>
        </div>

        <div className="presence-map mt-10">
          {offices.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`pin ${item.id === officeId ? "pin-active" : ""}`}
              style={{ left: item.pin.left, top: item.pin.top }}
              onClick={() => setOfficeId(item.id)}
            >
              {item.city}
            </button>
          ))}
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {offices.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setOfficeId(item.id)}
                className={`h-full w-full border p-5 text-left ${
                  item.id === officeId
                    ? "border-[var(--gold)] bg-[#14120e]"
                    : "border-[var(--line)]"
                }`}
              >
                <p className="text-xs tracking-[0.18em] text-[var(--gold)] uppercase">{item.label}</p>
                <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">{item.city}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.region}</p>
                <p className="mt-4 text-sm leading-6">{item.address}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Write to {office.city}.</h2>
            <p className="mt-5 max-w-sm text-[var(--muted)]">
              One form. It opens a message to info@clinginfotech.com for the studio you select.
            </p>
            <p className="mt-8 text-sm">
              +91 8264469132
              <br />
              info@clinginfotech.com
            </p>
          </div>
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="field sm:col-span-2">
              Studio
              <select
                name="office"
                value={officeId}
                onChange={(event) => setOfficeId(event.target.value)}
              >
                {offices.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.city} — {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              Full name
              <input name="name" autoComplete="name" required />
            </label>
            <label className="field">
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              Phone
              <input name="phone" autoComplete="tel" />
            </label>
            <label className="field">
              Company
              <input name="company" autoComplete="organization" />
            </label>
            <label className="field sm:col-span-2">
              Message
              <textarea name="message" rows={5} required />
            </label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button type="submit" className="bg-[var(--ivory)] px-5 py-3 text-sm font-semibold text-[#090a0b]">
                Send to {office.city}
              </button>
              {sent ? <p className="text-sm text-[var(--muted)]">{sent}</p> : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
