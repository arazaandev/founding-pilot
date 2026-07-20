import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:`${siteConfig.name} | Opportunity intelligence for recruiters`,
  description:"Research-backed hiring signals and human-reviewed opportunity recommendations for technology recruitment agencies.",
  openGraph:{title:siteConfig.name,description:"Find companies that may need recruitment support before competitors do.",type:"website",images:[{url:"/og.png",width:1728,height:902,alt:"Founding Pilot opportunity intelligence"}]},
  twitter:{card:"summary_large_image",title:siteConfig.name,description:"Find companies that may need recruitment support before competitors do.",images:["/og.png"]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
