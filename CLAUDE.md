@AGENTS.md

# Cling Info Tech homepage

This repo is a Next.js homepage for Cling Info Tech (Cling Info Tech Works Private Limited). The live design is a white, light-gray product page in the style of Meta.com and Google product pages. It is not a dark, serif, or “luxury” site.

GitHub: https://github.com/asitgiri1234/clinginfo (public, branch `master`).

Local: `npm run dev`, then http://localhost:3000.

## What the page is now

Light gray page (`#f0f2f5`), white rounded cards, black Inter type, Meta blue (`#0064e0`) for the logo mark, links, and the main button. Nav is a white bar: Cling, Services, Work, Global, Clients, Offices, Team, Contact.

Sections, in order:

- Hero: “Software for real operations”, short line about websites, mobile apps, ERPs, and AI, studios in Noida, Pune, and Moradabad. A photo set of people helping each other sits beside the headline.
- Three cards: custom software, engineers who stay, three offices.
- Stats from the public Cling site: 32M+ lines of code, 350+ clients, 390+ projects.
- Current Tech Focus: Cling logo animation, an advertisement film, and the surveillance model. Cleaner thumbnails than the live site. Each one opens the film Cling already publishes.
- Services: web, mobile apps, ERP, AI, 3D, digital marketing.
- Selected work, named from the public portfolio only: Seymour (real estate), Omson ERP, Phonologix, ePayLater.
- Ways to work together: project, dedicated team, support.
- Global presence: the twelve markets from clinginfotech.com, with their flags.
- Clients: the homepage logo set from clinginfotech.com, in white cards. No invented logos.
- Leadership: Ramesh Singh (Co-founder & Director), Ashi Gupta (Managing Director), Akshay Gupta (CEO), using the portraits published on clinginfotech.com. No generated portraits of real people.
- Offices: Noida head office, Pune, Moradabad. Clicking a card selects it for the form.
- Contact form. It does not post to a backend. It opens a `mailto:` to info@clinginfotech.com. Phone on the site: +91 8264469132.

Copy is plain. Do not add gold, serifs, uppercase tracking labels, marquees, fake maps, or lines that talk about the design itself (“no invented results”, “a record the company can still explain”).

Do not invent client quotes, revenue numbers, or case-study metrics. Project names and the three public stats are the proof that exists. The company timeline on clinginfotech.com only goes through 2022, so later years were not added.

## Files

- `src/app/page.tsx` — page sections
- `src/app/layout.tsx` — Inter, metadata
- `src/app/globals.css` — page color, cards, form fields
- `src/components/SiteHeader.tsx` — nav, mobile menu
- `src/components/Studios.tsx` — office picker and contact form
- `src/data/content.ts` — stats, services, work, clients, leaders, offices

Stack: Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. `create-next-app` could not run in this folder directly because the folder is named “New folder”. The app was scaffolded elsewhere and moved here. `package.json` name is `clinginfo`.

## Iterations

1. **Empty folder, Next.js, private repo `fend`.** User asked for a psychedelic chocolate brand site, 5–6 flavors, generated images in one style, Next.js, then a private GitHub repo named `fend` under `asitgiri1234`. Scaffolded Next.js. Brand was named Meltwave. Six flavors: Midnight Void, Raspberry Riot, Mango Mirage, Violet Dream, Lime Lightning, Honey Eclipse. Generated matching bar photos into `public/flavors`. Animated full-screen background (spinning blurred gradient, blobs, rings, grain). Commit `76dc686`. Pushed to private `asitgiri1234/fend`.

2. **Scroll and images.** User said scrolling felt sluggish, the background looked wrong, they wanted it darker, and the chocolate photos looked weird. The first photos did not match each other (one scored bar, others were unsquared slabs). Replaced them with a set of scored 3-by-4 bars on black. Removed the blurred spinning background, blend modes, and backdrop filters, which were what made scrolling heavy. Headline contrast was also fixed earlier by putting the title on a dark panel, because cream type disappeared on the neon field. Commit `a748797` was that contrast fix. The darker still background and new photos were made in the working tree and then replaced by the next direction before a separate commit.

3. **Cling homepage, first pass.** User asked to redesign https://clinginfotech.com/ in this repo: more technical and high-end, keep clientele and global presence, keep the founders, delete the chocolate site, rename the repo to `clinginfo`, make it public, push. Meltwave files were deleted. First Cling design was a dark page with Instrument Serif, ivory type, and gold rules. It had the hero, formatted stats, named portfolio work, six services, three engagement types, a four-step method, client names, a lab section, the 2019–2022 story, the three leaders, and the three offices. Commit `da587da`. Repo renamed from `fend` to `clinginfo` and set to public. Local git remote updated to `https://github.com/asitgiri1234/clinginfo.git`.

4. **White product page (current).** User rejected the dark design as looking generated, and asked for something clean and technical like Google and Meta, white, with the typography and colors of a Meta.com screenshot they attached (light gray page, white rounded cards, black sans headlines, blue icons and links). Removed serif, gold, the dark grid “map”, and the decorative copy. Rebuilt the page as described in “What the page is now”. Commit `7158a8f`, pushed to `master`.

5. **Images for presence, clients, and leadership.** User asked for those three sections to use the same kind of images as clinginfotech.com, and to follow that site’s layout. Global presence is a flag grid. Clients are the public homepage logos. Leadership uses the three published portraits on red circles. The rest of the page stays the white product layout. Commit `f728964`.

6. **Hero photos and Current Tech Focus.** User wanted the hero less plain, with photos of people helping one another, and a tech-focus section with stronger thumbnails than the live site. The three films are not on a public YouTube channel, so the thumbnails open the films Cling hosts.
