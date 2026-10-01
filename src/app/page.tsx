import { SiteHeader } from "@/components/SiteHeader";
import { Studios } from "@/components/Studios";
import {
  clients,
  engagements,
  industries,
  labs,
  leaders,
  milestones,
  process,
  services,
  stats,
  works,
} from "@/data/content";

const ticker = [...clients, ...clients];

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl items-end gap-14 px-5 pt-16 pb-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Cling Info Tech · Est. 2019</p>
            <h1 className="display mt-5 text-5xl sm:text-7xl">
              Software for companies that intend to last.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Websites, applications, and ERPs, plus the team to keep them.
              Studios in Noida, Pune, and Moradabad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="bg-[var(--ivory)] px-5 py-3 text-sm font-semibold text-[#090a0b]">
                Start a project
              </a>
              <a href="#work" className="border border-[var(--line)] px-5 py-3 text-sm">
                Selected work
              </a>
            </div>
          </div>

          <aside className="frame p-5 sm:p-6">
            <div className="flex items-center justify-between text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
              <span>Selected</span>
              <span>Seymour</span>
            </div>
            <div className="mt-5 border border-[var(--line)] p-5">
              <p className="text-xs tracking-[0.16em] text-[var(--gold)] uppercase">Real estate</p>
              <p className="display mt-3 text-4xl">Property, on one record.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                {["Inventory", "People", "Daily log"].map((item) => (
                  <div key={item} className="border border-[var(--line)] px-3 py-4 text-[var(--muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Seymour, a real estate management system. Operational software with a record the
              company can still explain.
            </p>
          </aside>
        </section>

        <section className="border-y border-[var(--line)]">
          <dl className="mx-auto grid max-w-6xl sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-[var(--line)] px-5 py-8 sm:border-l sm:first:border-l-0">
                <dt className="text-sm text-[var(--muted)]">{stat.label}</dt>
                <dd className="display mt-2 text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Selected work</p>
          <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
            Work with a name on it.
          </h2>
          <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {works.map((work) => (
              <li key={work.name} className="grid gap-3 py-7 md:grid-cols-[220px_220px_1fr] md:items-baseline">
                <h3 className="font-[family-name:var(--font-serif)] text-3xl">{work.name}</h3>
                <p className="text-sm tracking-[0.12em] text-[var(--gold)] uppercase">{work.kind}</p>
                <p className="text-[var(--muted)]">{work.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="practice" className="border-t border-[var(--line)] bg-[#0c0d0f]">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="eyebrow">Practice</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">What the firm is hired for.</h2>
            <ul className="mt-12 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.name} className="bg-[#0c0d0f] p-6">
                  <p className="text-xs text-[var(--gold)]">{service.index}</p>
                  <h3 className="mt-4 font-[family-name:var(--font-serif)] text-3xl">{service.name}</h3>
                  <p className="mt-3 text-[var(--muted)]">{service.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Engagements</p>
            <h2 className="display mt-3 text-4xl">How a client hires Cling.</h2>
            <ul className="mt-8 space-y-6">
              {engagements.map((item) => (
                <li key={item.name} className="border-t border-[var(--line)] pt-5">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="mt-2 text-[var(--muted)]">{item.line}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Method</p>
            <h2 className="display mt-3 text-4xl">Four steps. Then it stays up.</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <li key={step.name} className="border border-[var(--line)] p-5">
                  <p className="text-xs text-[var(--gold)]">0{index + 1}</p>
                  <h3 className="mt-3 text-xl">{step.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{step.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="clients">
          <div className="mx-auto max-w-6xl px-5 pt-8">
            <p className="eyebrow">Clientele</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Companies already on the books.</h2>
          </div>
          <div className="marquee mt-10" aria-hidden="true">
            <div className="marquee-track">
              {ticker.map((name, index) => (
                <span key={`${name}-${index}`} className="client-name">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <ul className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-3 px-5 pb-20">
            {industries.map((industry) => (
              <li key={industry} className="border border-[var(--line)] px-3 py-1 text-sm text-[var(--muted)]">
                {industry}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[var(--line)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Current focus</p>
              <h2 className="display mt-3 text-4xl">The lab.</h2>
            </div>
            <ul className="space-y-8">
              {labs.map((lab) => (
                <li key={lab.name} className="border-t border-[var(--line)] pt-6">
                  <h3 className="font-[family-name:var(--font-serif)] text-3xl">{lab.name}</h3>
                  <p className="mt-3 text-[var(--muted)]">{lab.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[#0c0d0f]">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="eyebrow">The firm</p>
            <h2 className="display mt-3 max-w-3xl text-4xl sm:text-5xl">
              Founded in Noida in 2019. Still close to the work.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Cling builds websites, applications, ERPs, and the teams that run them. The point is
              a system a company can still explain after the project ends.
            </p>
            <ol className="mt-12 grid gap-6 md:grid-cols-4">
              {milestones.map((item) => (
                <li key={item.year}>
                  <p className="font-[family-name:var(--font-serif)] text-3xl text-[var(--gold)]">{item.year}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="leadership" className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Leadership</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Founder and directors.</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <li key={leader.name} className="border border-[var(--line)] p-6">
                <p className="flex h-16 w-16 items-center justify-center border border-[var(--gold)] font-[family-name:var(--font-serif)] text-xl text-[var(--gold)]">
                  {leader.initials}
                </p>
                <h3 className="mt-8 font-[family-name:var(--font-serif)] text-3xl">{leader.name}</h3>
                <p className="mt-2 text-sm tracking-[0.12em] text-[var(--muted)] uppercase">{leader.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <Studios />
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-[family-name:var(--font-serif)] text-3xl">Cling</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Cling Info Tech Works Private Limited</p>
          </div>
          <p className="text-sm text-[var(--muted)]">Noida · Pune · Moradabad</p>
        </div>
      </footer>
    </div>
  );
}
