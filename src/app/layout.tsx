import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AST Irish Roadshow 2026 | 12 Months • 12 Events • 12 Counties",
  description:
    "Affinity Sales Training presents The Irish Roadshow - a transformational sales training experience across 12 counties. Workshops, Masterminds, Live Training, and our signature Closing Dinner.",
  keywords: [
    "sales training",
    "Ireland",
    "networking",
    "workshops",
    "masterminds",
    "professional development",
  ],
  openGraph: {
    title: "AST Irish Roadshow 2026",
    description:
      "12 Months • 12 Events • 12 Counties - A transformational sales training experience never seen before in Ireland.",
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AST Irish Roadshow 2026",
    description:
      "12 Months • 12 Events • 12 Counties - Transform your sales game across Ireland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
