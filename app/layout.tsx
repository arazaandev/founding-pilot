import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteDescription =
  "Short, customer-specific account sets and human-reviewed opportunity briefs covering evidence, fit, timing, uncertainty, stakeholders, and what to do next.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} | Opportunity intelligence for B2B service businesses`,
  description: siteDescription,
  openGraph: {
    title: `${siteConfig.name} — Research less. Approach better.`,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1737,
        height: 906,
        alt: "Lancara opportunity intelligence for B2B service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Research less. Approach better.`,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
