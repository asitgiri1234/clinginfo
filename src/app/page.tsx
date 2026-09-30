import Image from "next/image";
import { PsychedelicBackground } from "@/components/PsychedelicBackground";
import { flavors } from "@/data/flavors";

const ticker = [...flavors, ...flavors];

export default function Home() {
  return (
    <div className="site">
      <PsychedelicBackground />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-6">
        <a href="#top" className="font-[family-name:var(--font-display)] text-3xl leading-none">
          Meltwave
        </a>
        <nav className="flex items-center gap-3 text-sm font-semibold sm:text-base">
          <a href="#flavors" className="rounded-full px-3 py-2 hover:bg-black/30">
            Flavors
          </a>
          <a href="#flavors" className="sticker px-4 py-2 text-sm">
            Taste the static
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/50 bg-black/40 px-4 py-1 text-sm font-semibold tracking-wide">
              Chocolate house · est. in a very bright room
            </p>
            <h1 className="aberration font-[family-name:var(--font-display)] text-6xl leading-[0.9] sm:text-8xl">
              <span className="melt">Meltwave</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-snug text-[#fff6e4] sm:text-2xl">
              Six bars. One color wheel that refuses to stop. Dark, white, and
              milk chocolate dressed up like a poster from a dream you can eat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#flavors" className="sticker px-6 py-3 text-lg">
                Meet the six
              </a>
              <a href="#spectrum" className="sticker sticker-ghost px-6 py-3 text-lg">
                See the spectrum
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-md">
            {flavors.slice(0, 3).map((flavor, index) => (
              <div
                key={flavor.slug}
                className="absolute overflow-hidden rounded-[28px] border-[3px] border-[#fff6e4] shadow-[12px_14px_0_rgba(26,5,32,0.4)]"
                style={{
                  width: "72%",
                  aspectRatio: "1 / 1",
                  left: `${index * 14}%`,
                  top: `${index * 46}px`,
                  rotate: `${index * 7 - 8}deg`,
                  zIndex: 3 - index,
                }}
              >
                <Image
                  src={flavor.image}
                  alt={`${flavor.name} chocolate bar`}
                  fill
                  priority={index === 0}
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track font-[family-name:var(--font-display)] text-2xl">
            {ticker.map((flavor, index) => (
              <span key={`${flavor.slug}-${index}`} className="flex items-center gap-10">
                {flavor.name}
                <span className="text-[#ffe14a]">✦</span>
              </span>
            ))}
          </div>
        </div>

        <section id="spectrum" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
            The spectrum
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[#fff6e4]/90">
            Every bar is poured the same way. The swirl is the only thing that
            changes — indigo, raspberry, mango, violet, lime, honey.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {flavors.map((flavor) => (
              <li key={flavor.slug}>
                <a
                  href={`#${flavor.slug}`}
                  className="block rounded-2xl border-2 border-[#1a0520] px-3 py-4 text-center font-bold text-[#1a0520] shadow-[4px_4px_0_#1a0520]"
                  style={{ background: flavor.glow }}
                >
                  {flavor.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="flavors" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
              Six flavors
            </h2>
            <p className="max-w-sm text-[#fff6e4]/90">
              Same bar. Same camera. Completely different mood.
            </p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {flavors.map((flavor, index) => (
              <li key={flavor.slug} id={flavor.slug}>
                <article
                  className="card overflow-hidden rounded-[28px]"
                  style={{ rotate: index % 2 === 0 ? "-1.5deg" : "1.5deg" }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={flavor.image}
                      alt={`${flavor.name}, a ${flavor.base.toLowerCase()} chocolate bar`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-[family-name:var(--font-display)] text-3xl leading-none">
                        {flavor.name}
                      </h3>
                      <span
                        className="rounded-full px-3 py-1 text-sm font-bold text-[#1a0520]"
                        style={{ background: flavor.glow }}
                      >
                        {flavor.cocoa}
                      </span>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: flavor.ink }}>
                      {flavor.base} chocolate
                    </p>
                    <p className="text-lg leading-snug">{flavor.line}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-white/20 bg-black/40 px-5 py-8 text-center">
        <p className="font-[family-name:var(--font-display)] text-3xl">Meltwave</p>
        <p className="mt-2 text-[#fff6e4]/80">
          Psychedelic chocolate. The room spins. The bar stays put.
        </p>
      </footer>
    </div>
  );
}
