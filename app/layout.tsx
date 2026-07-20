import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
export const metadata: Metadata={title:`${siteConfig.name} | Opportunity intelligence for recruiters`,description:"Research-backed hiring signals and human-reviewed opportunity recommendations for technology recruitment agencies."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
