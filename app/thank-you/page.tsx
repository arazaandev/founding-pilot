import Link from "next/link";
import { Footer, Nav } from "@/components/site-shell";
import { siteConfig } from "@/lib/config";

export default function Thanks() {
  return <><Nav /><main><section className="section"><div className="container form"><div className="eyebrow"><span /> Calibration application received</div><h1>Thank you for applying.</h1><p className="lead">We’ll manually review whether a customer-specific opportunity-intelligence playbook can be configured around your company’s market.</p><p>Selected companies will be invited to one 30-minute configuration session. The three-brief, five-business-day delivery window begins only after that session and receipt of complete onboarding information.</p><p>Other B2B service applications are treated as interest signals and require manual review. Applying does not guarantee selection.</p><div className="actions">{siteConfig.bookingUrl && <a className="button" href={siteConfig.bookingUrl}>Book a configuration conversation</a>}<Link className="button secondary" href="/">Return home</Link></div><p>Questions? <a className="inline-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p></div></section></main><Footer /></>;
}
