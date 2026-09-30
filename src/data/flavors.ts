export type Flavor = {
  slug: string;
  name: string;
  cocoa: string;
  base: string;
  line: string;
  glow: string;
  ink: string;
  image: string;
};

export const flavors: Flavor[] = [
  {
    slug: "midnight-void",
    name: "Midnight Void",
    cocoa: "85%",
    base: "Dark",
    line: "So dark the wrapper filed a missing-persons report.",
    glow: "#7a5cff",
    ink: "#d8ccff",
    image: "/flavors/midnight-void.jpg",
  },
  {
    slug: "raspberry-riot",
    name: "Raspberry Riot",
    cocoa: "34%",
    base: "White",
    line: "White chocolate that showed up late, loud, and pink.",
    glow: "#ff2f8e",
    ink: "#ffd0e6",
    image: "/flavors/raspberry-riot.jpg",
  },
  {
    slug: "mango-mirage",
    name: "Mango Mirage",
    cocoa: "42%",
    base: "Milk",
    line: "Blink once and the mango has already moved.",
    glow: "#ff8a1e",
    ink: "#ffe0bf",
    image: "/flavors/mango-mirage.jpg",
  },
  {
    slug: "violet-dream",
    name: "Violet Dream",
    cocoa: "36%",
    base: "White",
    line: "Lavender wandered into a daydream and stayed for dessert.",
    glow: "#b06bff",
    ink: "#f0d9ff",
    image: "/flavors/violet-dream.jpg",
  },
  {
    slug: "lime-lightning",
    name: "Lime Lightning",
    cocoa: "70%",
    base: "Dark",
    line: "A green snap that beats the cocoa to the punch.",
    glow: "#b6ff2e",
    ink: "#e9ffc2",
    image: "/flavors/lime-lightning.jpg",
  },
  {
    slug: "honey-eclipse",
    name: "Honey Eclipse",
    cocoa: "45%",
    base: "Milk",
    line: "Caramel gold sliding across a milk-chocolate moon.",
    glow: "#ffc14a",
    ink: "#fff1cc",
    image: "/flavors/honey-eclipse.jpg",
  },
];
