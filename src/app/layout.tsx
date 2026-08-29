import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Oswald, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site-config";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Oswald({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: set to the real production domain before launch
  metadataBase: new URL("https://thesekuwastation.com"),
  title: {
    default: `${site.name} — Charcoal Grilled Nepali Kitchen`,
    template: `%s — ${site.name}`,
  },
  description: `${site.tagline}. Charcoal-grilled sekuwa, chhoila, momo & more in ${site.address}.`,
  keywords: ["sekuwa", "Nepali grill", "chhoila", "momo", "Hetauda restaurant", site.name],
  openGraph: {
    title: `${site.name} — Charcoal Grilled Nepali Kitchen`,
    description: site.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1411",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full scroll-smooth antialiased",
        display.variable,
        sans.variable,
        serif.variable,
        mono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
