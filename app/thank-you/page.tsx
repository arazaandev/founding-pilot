import Link from "next/link";
import { Nav, Footer } from "@/components/site-shell";
import { siteConfig } from "@/lib/config";

export default function Thanks() { return <><Nav/><main><section><div className="container form">
  <div className="eyebrow">Application received</div>
  <h1>Thank you for applying.</h1>
  <p className="lead">We’ll review your agency profile and pilot-readiness answers. Selected agencies may be invited to a discovery conversation and asked to share their ICP and 5–20 target accounts.</p>
  <p>Submitting an application does not guarantee acceptance.</p>
  <div className="actions">{siteConfig.bookingUrl&&<a className="button" href={siteConfig.bookingUrl}>Book a discovery conversation</a>}<Link className="button secondary" href="/">Return home</Link></div>
  <p>Questions? <a className="inline-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
</div></section></main><Footer/></>; }
