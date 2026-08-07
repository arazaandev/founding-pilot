import Link from "next/link";
import { OpportunityBriefPreview } from "@/components/opportunity-brief-preview";
import { OpportunityWalkthrough } from "@/components/opportunity-walkthrough";
import { Reveal } from "@/components/reveal";
import { Footer, Nav } from "@/components/site-shell";
import { siteConfig } from "@/lib/config";

const workflow = [
  ["Customer ICP", "Define services, proof, markets, constraints, and exclusions."],
  ["Account universe", "Build a category-verified set of companies worth researching."],
  ["Evidence", "Collect dated observations from approved public sources."],
  ["Signals", "Organize related evidence without treating it as intent."],
  ["Opportunity pattern", "Form a customer-specific hypothesis about need and timing."],
  ["Qualification", "Test fit, commercial relevance, confidence, and disqualifiers."],
  ["Stakeholders", "Identify roles to understand and the questions they can answer."],
  ["Recommended action", "Set the next verification or commercial step for human review."],
  ["Feedback", "Use approve, edit, reject, and postpone decisions to improve the playbook."],
];

const briefElements = [
  ["Account", "The company being evaluated and the category it belongs to."],
  ["Fit", "Why it may match your services, proof, market, and constraints."],
  ["Evidence", "What was observed, where it came from, and when it was checked."],
  ["Interpretation", "What the evidence may mean for this customer."],
  ["Timing", "Why the account may deserve attention now — or why it may not."],
  ["Confidence", "How reliable and complete the supporting evidence is."],
  ["Uncertainty", "What remains unknown, contradictory, or easy to misread."],
  ["Stakeholders", "Which roles may understand the need or influence a decision."],
  ["Action", "Whether to contact, research further, monitor, postpone, or exclude."],
  ["Preparation", "What to verify and how to prepare before any approach."],
];

const accountDecisions = ["Contact", "Research further", "Monitor", "Postpone", "Exclude"];

const timeline = [
  ["Day 1", "Configure the customer profile", "Define capabilities, proof, markets, commercial constraints, and exclusions."],
  ["Days 2–4", "Research and qualify", "Build the account universe, collect evidence, qualify patterns, and draft three briefs."],
  ["Day 5", "Review the briefs", "Approve, edit, reject, or postpone each recommendation and explain what should improve."],
  ["After a useful calibration", "Consider the paid pilot", "Continue only if the research is relevant enough to use."],
];

const faqs = [
  ["Is Lancara a contact database?", "No. Lancara is a customer-specific research and qualification workflow. It prioritizes a small number of evidence-backed accounts rather than selling bulk contacts."],
  ["Is this software or a managed service today?", "Today it is a founder-led, AI-assisted managed service. Structured tools help collect and organize research, but a human verifies sources, qualifies each account, assigns confidence, and approves every customer-facing recommendation."],
  ["Which companies are eligible for the current calibration?", "The strongest fit is a B2B service firm that wins company clients, has a clear specialization and meaningful project value, can provide inputs and exclusions, and has a commercial reviewer able to act on the research. Lancara is currently validating specialist recruitment and software or IT services playbooks."],
  ["What does my team need to provide?", "The initial application asks only for enough information to assess fit. If selected, your team then provides service priorities, ICP requirements, exclusions, relevant proof, any approved account context, and one honest decision-maker for the 30-minute configuration session."],
  ["Which sources are used?", "Approved public sources may include company websites, careers pages, public announcements, reputable reporting, registries, tenders, and customer-provided account context after selection."],
  ["Does Lancara continuously monitor accounts?", "No. During validation, research is manual and completed on an agreed schedule. Continuous automated monitoring is not currently operational."],
  ["Does Lancara scrape LinkedIn or send outreach?", "No. The current service does not depend on LinkedIn scraping and does not send automated outreach. The customer reviews and sends any commercial communication."],
  ["Is a signal proof that a company will buy?", "No. A signal supports a commercial hypothesis. Every brief shows evidence, interpretation, unknowns, and what should be verified before action."],
  ["What is free and what becomes paid?", "The 30-minute configuration session, three briefs, and 20-minute review are free. A four-week founding pilot is offered only after a useful calibration and costs Rp4 million upfront. It tests whether repeated briefs remain useful and whether delivery is sustainable; it is not proof of guaranteed outcomes."],
  ["What happens after an application?", "Lancara manually reviews fit. Selected companies are invited to a 30-minute configuration session. The five-business-day delivery window begins after complete onboarding inputs are received."],
];

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <section className="home-hero container">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Opportunity intelligence for B2B service businesses</p>
            <h1>Know which companies deserve your attention — <em>and why now.</em></h1>
            <p className="hero-lede">Lancara turns scattered company evidence into a short, human-reviewed set of accounts you can evaluate and approach with context. Each brief shows what was observed, why the company fits your services, why the timing may matter, what remains uncertain, who may matter, and what to verify or do next.</p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/apply">Request a free opportunity calibration <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/sample-opportunity">Explore a sample brief <span aria-hidden="true">→</span></Link>
            </div>
            <p className="trust-line">Manual research during validation <span>·</span> Human reviewed <span>·</span> Evidence linked <span>·</span> No automated outreach</p>
          </div>
          <div className="hero-brief reveal delay-1"><OpportunityBriefPreview linked /></div>
        </section>

        <OpportunityWalkthrough />

        <section className="section problem-section" id="problem">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow"><span /> The commercial problem</p>
              <h2>The goal is not another lead list. <em>It is a defensible account decision.</em></h2>
              <p className="lead">Lancara connects fit, dated evidence, timing, uncertainty, and customer context so a human can decide what an account deserves next without inventing buying intent.</p>
            </div>
            <div className="failure-grid">
              <article className="reveal"><span>01</span><h3>Scattered inputs</h3><p>Company pages, hiring activity, announcements, and internal knowledge rarely arrive as one usable view.</p></article>
              <article className="reveal delay-1"><span>02</span><h3>Customer-specific judgment</h3><p>The same public evidence can matter differently depending on your capabilities, proof, constraints, and exclusions.</p></article>
              <article className="reveal delay-2"><span>03</span><h3>A prepared next step</h3><p>A recommendation is only useful when its evidence, uncertainty, and next verification step remain inspectable.</p></article>
            </div>
            <div className="decision-strip reveal" aria-label="Possible human-reviewed account decisions"><span>Possible decisions</span><ul>{accountDecisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>
          </div>
        </section>

        <section className="section container" id="product">
          <div className="product-heading reveal">
            <div><p className="eyebrow"><span /> The product model</p><h2>From evidence<br />to <em>commercial direction.</em></h2></div>
            <p>Evidence remains linked to the recommendation. A human verifies sources, assigns confidence, and approves every customer-facing brief.</p>
          </div>
          <ol className="workflow-grid">
            {workflow.map(([title, copy], index) => <li className="reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p>{index === 7 && <b>Human approval</b>}</li>)}
          </ol>
        </section>

        <section className="section deliverable-section">
          <div className="container deliverable-grid">
            <div className="reveal"><p className="eyebrow light"><span /> The deliverable</p><h2>Ten elements make the account decision <em>inspectable.</em></h2><p>Each customer-specific brief keeps facts, interpretation, evidence confidence, uncertainty, and the recommended action distinct.</p></div>
            <div className="brief-question-list reveal delay-1">{briefElements.map(([label, description], index) => <article className="brief-element" key={label}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{label}</b><p>{description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section container tracks-section">
          <div className="section-heading reveal"><p className="eyebrow"><span /> Current calibration fit</p><h2>Built for service firms that can act on the research.</h2><p className="lead">The strongest fit is a commercially accountable B2B service firm with a clear specialization, meaningful project value, and no mature opportunity-intelligence operation.</p></div>
          <div className="fit-grid">
            <article className="reveal"><span className="track-code">STRONG FIT</span><h3>Ready to evaluate real accounts</h3><ul><li>Wins company clients through project or retained service work</li><li>Still relies on founder research, spreadsheets, general tools, or ad hoc prospecting</li><li>Can provide service priorities, proof, ICP requirements, and exclusions</li><li>Has a founder, director, or commercial owner who can review and act</li><li>Can report which recommendations were useful, wrong, or premature</li></ul></article>
            <article className="reveal delay-1"><span className="track-code">NOT CURRENTLY DESIGNED FOR</span><h3>Models where this workflow is a poor match</h3><ul><li>Consumer businesses or pure self-service SaaS products</li><li>Freelance collectives or firms dependent on marketplace work</li><li>Large companies with mature intelligence operations</li><li>Teams unable or unwilling to approach qualified accounts</li></ul></article>
          </div>
          <div className="track-heading reveal"><p className="eyebrow"><span /> Current validation groups</p><h3>Two service markets under active comparison.</h3></div>
          <div className="track-grid">
            <article className="reveal"><span className="track-code">01 / RECRUITMENT</span><h3>Specialist recruitment</h3><p className="track-question">Which employers may need specialist recruitment support?</p><div><b>Example evidence</b><p>Hiring patterns, recurring vacancies, expansion, and capability match.</p></div></article>
            <article className="reveal delay-1"><span className="track-code">02 / IT SERVICES</span><h3>Software and IT services</h3><p className="track-question">Which companies may have a timely need for the firm’s services?</p><div><b>Example evidence</b><p>Transformation initiatives, new leadership, expansion, technology changes, delivery requirements, and capability match.</p></div></article>
          </div>
          <p className="track-note">These are current validation groups, not proof of demand or permanent limits on Lancara’s product.</p>
        </section>

        <section className="section evidence-standard" id="how-it-works">
          <div className="container">
            <div className="section-heading reveal"><p className="eyebrow light"><span /> Evidence standard</p><h2>Trust comes from showing the limits.</h2><p className="lead">Public signals are not proof of buying intent. Final qualification and every customer-facing recommendation are human reviewed.</p></div>
            <div className="standard-grid">
              <article><span>Observed</span><p>What the source actually says, with its date and provenance.</p></article>
              <article><span>Interpreted</span><p>What Lancara thinks the evidence may mean for this customer.</p></article>
              <article><span>Unknown</span><p>What cannot be concluded and why the hypothesis may be wrong.</p></article>
              <article><span>Verify next</span><p>The next question or research step before commercial action.</p></article>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="container">
            <div className="process-heading reveal"><div><p className="eyebrow light"><span /> Your first five business days</p><h2>Configure.<br />Research. <em>Review.</em></h2></div><p>The five-day clock starts after the configuration session and receipt of complete onboarding inputs.</p></div>
            <div className="timeline-grid">{timeline.map(([date, title, copy], index) => <article className={`timeline-card reveal ${index === 2 ? "active" : ""}`} key={date}><span>{date}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </div>
        </section>

        <section className="section container offer-section" id="calibration">
          <div className="offer-heading reveal"><p className="eyebrow"><span /> Clear commercial stages</p><h2>Review real output before discussing a paid pilot.</h2></div>
          <div className="offer-grid reveal">
            <article className="calibration-offer"><span className="tag">Stage 1 · No payment</span><h3>Free Opportunity Calibration</h3><p>Review three customer-specific briefs before any paid commitment.</p><div className="offer-structure"><div><h4>What you provide</h4><ul><li>After selection: service priorities, ICP requirements, exclusions, and relevant delivery proof</li><li>One honest decision-maker for a 30-minute configuration session</li></ul></div><div><h4>What Lancara delivers</h4><ul><li>Three researched, human-reviewed opportunity briefs</li><li>Delivery within five business days after complete onboarding</li><li>One 20-minute review session</li></ul></div><div><h4>What you can decide</h4><ul><li>Approve, edit, reject, or postpone each recommendation</li><li>Contact, research further, monitor, postpone, or exclude</li><li>Whether recurring research deserves a paid test</li></ul></div></div><p className="offer-confidence">No software purchase, workflow configuration, or paid commitment is required before reviewing real output.</p><Link className="button button-dark" href="/apply">Request calibration <span aria-hidden="true">↗</span></Link><small>Applications are manually reviewed. Applying does not guarantee selection.</small></article>
            <article className="paid-offer"><span className="tag">Stage 2 · Paid</span><h3>Four-Week Founding Pilot</h3><p>A four-week paid test of whether Lancara can repeatedly deliver relevant briefs for your team.</p><div className="price">Rp4 million <small>paid upfront after a useful calibration</small></div><div className="offer-structure"><div><h4>Pilot scope</h4><ul><li>One configured playbook</li><li>10–15 accounts researched weekly</li><li>5–8 complete human-reviewed briefs weekly</li><li>Weekly calibration with up to two customer team members</li></ul></div></div><p className="pilot-purpose">The pilot tests recurring usefulness and delivery sustainability. It does not prove buying intent or guarantee commercial outcomes.</p><details className="offer-boundary"><summary>What the pilot does not include</summary><p>No automated outreach, CRM sync, customer dashboard, contact-data waterfall, or guaranteed outcomes.</p></details><strong className="availability">Offered after a useful calibration</strong><small>Maximum two simultaneous paid customers because research and final review remain founder led.</small></article>
          </div>
        </section>

        <section className="operator-section section">
          <div className="container operator-card reveal">
            <div><p className="eyebrow light"><span /> Founder-led by design</p><h2>Built by a founder who does the research and reviews the recommendation.</h2></div>
            <div><p><strong>Daffa Arazaan</strong> combines economics, data analytics, business research, and AI-enabled workflow development. He is directly responsible for discovery, research, qualification, workflow design, and quality review while Lancara validates its first playbooks.</p><div className="operator-links"><a className="arrow-link" href={siteConfig.linkedIn} target="_blank" rel="noreferrer">View LinkedIn <span aria-hidden="true">↗</span></a><a className="arrow-link" href={`mailto:${siteConfig.email}`}>Email Daffa <span aria-hidden="true">↗</span></a></div></div>
          </div>
        </section>

        <section className="section container faq-section">
          <div className="section-label"><span>FAQ</span> Before you apply</div>
          <div className="faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="final-cta section">
          <div className="container"><p className="eyebrow light"><span /> Free Opportunity Calibration</p><h2>See whether Lancara can understand <em>your market.</em></h2><p>Configure one playbook, receive three human-reviewed briefs, and decide whether the research is useful before discussing a paid pilot.</p><Link className="button button-lime" href="/apply">Request a free opportunity calibration <span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
