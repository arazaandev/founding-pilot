import { Nav, Footer } from "@/components/site-shell";
import { siteConfig } from "@/lib/config";

export default function Privacy() {
  return <><Nav/><main><section><article className="container form legal-copy">
    <div className="eyebrow">Privacy notice</div>
    <h1>How we handle applicant data</h1>
    <p className="muted"><strong>Effective date:</strong> 21 July 2026</p>
    <h2>Data controller and operator</h2>
    <p>{siteConfig.operator}, operating from {siteConfig.jurisdiction}, is the controller and operator responsible for information collected through the {siteConfig.program}. The primary contact is {siteConfig.operatorContact}. Questions about this notice can be sent to <a className="inline-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    <h2>Information we collect and why</h2>
    <p>We collect the information submitted in the founding-pilot application, including contact details, agency information, acquisition workflow, research challenges, and pilot-readiness answers. We use it to evaluate fit, contact applicants, operate and improve the pilot, prevent abuse, and maintain necessary application records. Applications may be reviewed manually.</p>
    <h2>Use and sharing</h2>
    <p>We do not sell applicant data. We may use service providers for hosting, database storage, email delivery, security, and privacy-conscious analytics. These providers process information only as needed to support the pilot. Sensitive form answers are not intentionally sent to third-party analytics providers.</p>
    <h2>Retention</h2>
    <p>Application information is normally retained for up to 12 months after submission. We may retain limited records for longer when reasonably necessary to meet legal obligations, resolve disputes, prevent abuse, or document a deletion request.</p>
    <h2>Access, correction, and deletion</h2>
    <p>To request access to, correction of, or deletion of your application information, email <a className="inline-link" href={`mailto:${siteConfig.email}?subject=Privacy%20request`}>{siteConfig.email}</a> with the subject “Privacy request.” We may ask you to verify your identity before acting on a request and will respond within a reasonable period.</p>
    <h2>Changes to this notice</h2>
    <p>If this notice changes materially, the effective date above will be updated. This notice is written for the founding-pilot stage and may be revised as the service and its legal obligations develop.</p>
    <h2>Applicable jurisdiction</h2>
    <p>This pilot is operated in Indonesia. This notice and the handling of applicant information are governed by applicable laws and regulations of the Republic of Indonesia.</p>
  </article></section></main><Footer/></>;
}
