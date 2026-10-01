import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Studios } from "@/components/Studios";
import { Testimonials } from "@/components/Testimonials";
import { clients, countries, engagements, focus, leaders, services, stats, works } from "@/data/content";

function BandHeading({ title, line }: { title: string; line?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-[#e2231a] sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 flex h-[3px] w-16" aria-hidden="true">
        <span className="h-full w-1/2 bg-[#6aada8]" />
        <span className="h-full w-1/2 bg-[#1c1e21]" />
      </div>
      {line ? <p className="mx-auto mt-5 max-w-3xl text-lg text-[#1c1e21]">{line}</p> : null}
    </div>
  );
}

const cardTones = ["#3d6f9a", "#2f7d82", "#6a8f71"];

const icons = [
  <svg key="card" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#3d6f9a" strokeWidth="1.6">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18" />
  </svg>,
  <svg key="team" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#2f7d82" strokeWidth="1.6">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.2" />
    <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5S14 16 14.6 19" />
    <path d="M15 14.6c1.8.2 3.2 1.3 3.8 4.4" />
  </svg>,
  <svg key="pin" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#6a8f71" strokeWidth="1.6">
    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>,
];

const serviceTones = ["#3d6f9a", "#2f7d82", "#6a8f71", "#7d6b94", "#c4786a", "#5c7ea3"];

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <section className="bg-[#e7f1f8]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-medium tracking-tight text-[#1c1e21] sm:text-6xl">
              Software for real operations
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#65676b] lg:mx-0">
              Websites, mobile apps, ERPs, and AI. Built by Cling Info Tech in Noida, Pune, and Moradabad.
            </p>
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              <a href="#contact" className="rounded-full bg-[#0064e0] px-5 py-2.5 text-sm font-medium text-white">
                Start a project
              </a>
              <a href="#work" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0064e0]">
                See the work
              </a>
            </div>
          </div>
          <img
            src="/hero/team.jpg"
            alt="Three people working through a laptop together"
            className="h-72 w-full rounded-3xl object-cover sm:h-96"
          />
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
          {[
            ["Custom software", "Web, mobile, and ERP built around how the company already works."],
            ["Engineers who stay", "A dedicated team can remain on the product after the first release."],
            ["Three offices", "Noida, Pune, and Moradabad. One engineering group."],
          ].map(([title, line], index) => (
            <article key={title} className="card border-t-4" style={{ borderTopColor: cardTones[index] }}>
              {icons[index]}
              <h2 className="mt-6 text-2xl font-medium tracking-tight">{title}</h2>
              <p className="mt-2 text-[#65676b]">{line}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card text-center">
              <p className="text-4xl font-medium tracking-tight text-[#2f7d82]">{stat.value}</p>
              <p className="mt-1 text-[#65676b]">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="focus" className="bg-[#f6f1e8]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <BandHeading title="Current Tech Focus" />
            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {focus.map((item, index) => (
                <li key={item.thumb} className={index === 2 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-1.25rem)]" : ""}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="group block text-center">
                    <span className="relative block overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(28,30,33,0.06)]">
                      <img src={item.thumb} alt="" className="aspect-video w-full object-cover" />
                      <span className="absolute right-3 bottom-3">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[#1c1e21] shadow-md transition group-hover:scale-105">
                          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    </span>
                    <p className="mt-4 text-lg font-semibold text-[#1c1e21]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#65676b]">{item.line}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="bg-[#e6f2ec]">
          <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.name} className="card border-t-4" style={{ borderTopColor: serviceTones[index] }}>
                <h3 className="text-2xl font-medium">{service.name}</h3>
                <p className="mt-2 text-[#65676b]">{service.line}</p>
              </li>
            ))}
          </ul>
          </div>
        </section>

        <section id="work" className="bg-[#f3f0f6]">
          <div className="mx-auto max-w-6xl px-5 py-16">
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
          </div>
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

        <div className="bg-[#f7f0f2]">
          <section id="presence" className="mx-auto max-w-6xl px-5 py-16">
            <BandHeading
              title="Our Global Presence"
              line="Expanding our global footprint across diverse markets and cultures"
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {countries.map((country) => (
                <li key={country.name} className="flex flex-col items-center text-center">
                  <img
                    src={country.flag}
                    alt=""
                    className="h-16 w-28 rounded-[2px] object-cover shadow-sm"
                  />
                  <p className="mt-3 text-sm font-medium text-[#1c1e21]">{country.name}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="clients" className="mx-auto max-w-6xl px-5 pb-16">
            <BandHeading title="Our Diverse Clientele" />
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map((client) => (
                <li
                  key={client.name}
                  className="flex h-28 items-center justify-center rounded-2xl bg-white px-5 shadow-[0_8px_24px_rgba(28,30,33,0.06)]"
                >
                  <img src={client.logo} alt={client.name} className="max-h-16 w-full object-contain" />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="team" className="mx-auto max-w-6xl px-5 py-16">
          <BandHeading title="Meet Our Leadership Team" />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {leaders.map((leader) => (
              <li key={leader.name} className="card flex flex-col items-center text-center">
                <img src={leader.photo} alt="" className="h-56 w-56 object-contain" />
                <h3 className="text-xl font-semibold text-[#1e4b9b]">{leader.name}</h3>
                <p className="mt-1 text-sm text-[#65676b]">{leader.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="testimonials" className="bg-[#f7f0f2]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <BandHeading
              title="Testimonials"
              line="Your Voice, Our Pride! Dive into the heartfelt accounts of our valued patrons. From life-changing experiences to exceptional service, their stories illuminate the essence of our commitment. Join our family of satisfied customers and witness firsthand the transformative power of our offerings. Your satisfaction is our greatest achievement!"
            />
            <Testimonials />
          </div>
        </section>

        <Studios />
      </main>
      <SiteFooter />
    </div>
  );
}
