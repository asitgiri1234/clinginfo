import { SiteHeader } from "@/components/SiteHeader";
import { Studios } from "@/components/Studios";
import { clients, engagements, leaders, services, stats, works } from "@/data/content";

const icons = [
  <svg key="card" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#0064e0" strokeWidth="1.6">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18" />
  </svg>,
  <svg key="team" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#0064e0" strokeWidth="1.6">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.2" />
    <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5S14 16 14.6 19" />
    <path d="M15 14.6c1.8.2 3.2 1.3 3.8 4.4" />
  </svg>,
  <svg key="pin" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#0064e0" strokeWidth="1.6">
    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>,
];

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-[#1c1e21] sm:text-6xl">
            Software for real operations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#65676b]">
            Websites, mobile apps, ERPs, and AI. Built by Cling Info Tech in Noida, Pune, and Moradabad.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#contact" className="rounded-full bg-[#0064e0] px-5 py-2.5 text-sm font-medium text-white">
              Start a project
            </a>
            <a href="#work" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0064e0]">
              See the work
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
          {[
            ["Custom software", "Web, mobile, and ERP built around how the company already works."],
            ["Engineers who stay", "A dedicated team can remain on the product after the first release."],
            ["Three offices", "Noida, Pune, and Moradabad. One engineering group."],
          ].map(([title, line], index) => (
            <article key={title} className="card">
              {icons[index]}
              <h2 className="mt-6 text-2xl font-medium tracking-tight">{title}</h2>
              <p className="mt-2 text-[#65676b]">{line}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card text-center">
              <p className="text-4xl font-medium tracking-tight">{stat.value}</p>
              <p className="mt-1 text-[#65676b]">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.name} className="card">
                <h3 className="text-2xl font-medium">{service.name}</h3>
                <p className="mt-2 text-[#65676b]">{service.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-8">
          <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Selected work</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {works.map((work) => (
              <li key={work.name} className="card">
                <p className="text-sm text-[#0064e0]">{work.kind}</p>
                <h3 className="mt-2 text-2xl font-medium">{work.name}</h3>
                <p className="mt-2 text-[#65676b]">{work.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Ways to work together</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {engagements.map((item) => (
              <li key={item.name} className="card">
                <h3 className="text-2xl font-medium">{item.name}</h3>
                <p className="mt-2 text-[#65676b]">{item.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="clients" className="mx-auto max-w-6xl px-5 py-8">
          <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Clients</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((name) => (
              <li key={name} className="card py-6 text-center text-[15px] font-medium text-[#1c1e21]">
                {name}
              </li>
            ))}
          </ul>
        </section>

        <section id="team" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Leadership</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {leaders.map((leader) => (
              <li key={leader.name} className="card text-center">
                <h3 className="text-2xl font-medium">{leader.name}</h3>
                <p className="mt-2 text-[#65676b]">{leader.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <Studios />
      </main>
      <footer className="border-t border-[#e4e6eb] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-sm text-[#65676b]">
          <p className="font-medium text-[#1c1e21]">Cling Info Tech Works Private Limited</p>
          <p>Noida · Pune · Moradabad</p>
        </div>
      </footer>
    </div>
  );
}
