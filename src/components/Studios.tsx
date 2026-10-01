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
      setSent("Add your name, email, and a short message.");
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
    setSent(`This opens an email to info@clinginfotech.com for the ${office.city} office.`);
  }

  return (
    <>
      <section id="offices" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-4xl font-medium tracking-tight text-[#1c1e21] sm:text-5xl">
          Offices
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[#65676b]">
          Head office in Noida. The same team also works from Pune and Moradabad.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {offices.map((item) => {
            const active = item.id === officeId;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setOfficeId(item.id)}
                  className={`card h-full w-full text-left ${active ? "ring-2 ring-[#0064e0]" : ""}`}
                >
                  <p className="text-sm text-[#0064e0]">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-medium">{item.city}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#65676b]">{item.address}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="card mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-medium tracking-tight">Contact {office.city}</h2>
          <p className="mt-3 text-center text-[#65676b]">
            +91 8264469132 · info@clinginfotech.com
          </p>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="field sm:col-span-2">
              Office
              <select name="office" value={officeId} onChange={(event) => setOfficeId(event.target.value)}>
                {offices.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.city}
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
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-[#0064e0] px-5 py-2.5 text-sm font-medium text-white">
                Send
              </button>
              {sent ? <p className="mt-3 text-sm text-[#65676b]">{sent}</p> : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
