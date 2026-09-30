import type { Metadata } from "next";
import { Fredoka, Shrikhand } from "next/font/google";
import "./globals.css";

const display = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Fredoka({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Meltwave — psychedelic chocolate",
  description:
    "Meltwave is a loud little chocolate house. Six flavors, one spinning room, zero chill.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
