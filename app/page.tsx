import Link from "next/link";
import { OpportunityBriefPreview } from "@/components/opportunity-brief-preview";
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

const briefQuestions = [
  ["Observed", "What was observed?"],
  ["Fit", "Why might this account fit your capabilities?"],
  ["Timing", "Why might the timing matter?"],
  ["Stakeholders", "Who should be understood or approached?"],
  ["Unknowns", "What remains unknown or may be wrong?"],
  ["Verify next", "What should the team verify or do next?"],
];

const timeline = [
  ["Day 1", "Configure the customer profile", "Define capabilities, proof, markets, commercial constraints, and exclusions."],
  ["Days 2–4", "Research and qualify", "Build the account universe, collect evidence, qualify patterns, and draft three briefs."],
  ["Day 5", "Review the briefs", "Approve, edit, reject, or postpone each recommendation and explain what should improve."],
  ["After a useful calibration", "Consider the paid pilot", "Continue only if the research is relevant enough to use."],
];

const faqs = [
  ["Is Lancara a contact database?", "No. Lancara is a customer-specific research and qualification workflow. It prioritizes a small number of evidence-backed accounts rather than selling bulk contacts."],
  ["Is this software or a managed service today?", "Today it is a founder-led, manual service supported by structured research tools. The research and final recommendations are human reviewed while the workflow is being validated."],
  ["Which companies are eligible for the current calibration?", "Lancara is currently researching specialist recruitment agencies and software or IT service firms. Other B2B service businesses may register interest, but a calibrated playbook is not implied for every industry."],
  ["Which sources are used?", "Approved public sources may include company websites, careers pages, public announcements, reputable reporting, registries, tenders, and customer-provided account context after onboarding."],
  ["Does Lancara continuously monitor accounts?", "No. During validation, research is manual and completed on an agreed schedule. Continuous automated monitoring is not currently operational."],
  ["Does Lancara scrape LinkedIn or send outreach?", "No. The current service does not depend on LinkedIn scraping and does not send automated outreach. The customer reviews and sends any commercial communication."],
  ["Is a signal proof that a company will buy?", "No. A signal supports a commercial hypothesis. Every brief shows evidence, interpretation, unknowns, and what should be verified before action."],
  ["What is free and what becomes paid?", "The configuration session, three briefs, and review session are free. A four-week founding pilot is offered only after a useful calibration and costs Rp4 million upfront."],
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
            <p className="hero-lede">Lancara turns public evidence, account signals, and your commercial strengths into human-reviewed opportunity briefs. Each brief explains why an account may fit, what may have changed, who matters, what remains uncertain, and what to verify next.</p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/apply">Request a free opportunity calibration <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/sample-opportunity">Explore a sample brief <span aria-hidden="true">→</span></Link>
            </div>
            <p className="trust-line">Manual research during validation <span>·</span> Human reviewed <span>·</span> Evidence linked <span>·</span> No automated outreach</p>
          </div>
          <div className="hero-brief reveal delay-1"><OpportunityBriefPreview linked /></div>
        </section>

        <section className="section problem-section" id="problem">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow"><span /> The commercial problem</p>
              <h2>Prospecting is rarely a list problem. <em>It is a judgment problem.</em></h2>
              <p className="lead">Service businesses can find companies. The difficult part is deciding which accounts fit, why the timing may matter, and how to begin a credible conversation without inventing intent.</p>
            </div>
            <div className="failure-grid">
              <article className="reveal"><span>01</span><h3>Broad account lists</h3><p>Volume obscures which companies genuinely fit your strengths and commercial constraints.</p></article>
              <article className="reveal delay-1"><span>02</span><h3>Isolated signals</h3><p>A vacancy, appointment, or announcement lacks meaning without customer-specific context.</p></article>
              <article className="reveal delay-2"><span>03</span><h3>Generic outreach</h3><p>A name and job title do not create a credible reason to begin the conversation.</p></article>
            </div>
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
            <div className="reveal"><p className="eyebrow light"><span /> The deliverable</p><h2>Six questions<br />every brief <em>must answer.</em></h2><p>One consistent brief keeps observations, interpretation, uncertainty, and action easy to inspect.</p></div>
            <div className="brief-question-list reveal delay-1">{briefQuestions.map(([label, question], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{label}</b><p>{question}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section container tracks-section">
          <div className="section-heading reveal"><p className="eyebrow"><span /> Current research tracks</p><h2>Two markets under active comparison.</h2></div>
          <div className="track-grid">
            <article className="reveal"><span className="track-code">01 / RECRUITMENT</span><h3>Specialist recruitment</h3><p className="track-question">Which employers may need specialist recruitment support?</p><div><b>Example evidence</b><p>Hiring patterns, recurring vacancies, expansion, and capability match.</p></div></article>
            <article className="reveal delay-1"><span className="track-code">02 / IT SERVICES</span><h3>Software and IT services</h3><p className="track-question">Which companies may have a timely need for the firm’s services?</p><div><b>Example evidence</b><p>Transformation initiatives, new leadership, expansion, technology changes, delivery requirements, and capability match.</p></div></article>
          </div>
          <p className="track-note">These are current validation tracks, not permanent limits on Lancara’s product.</p>
        </section>

        <section className="section container sample-section">
          <div className="sample-copy reveal"><p className="eyebrow"><span /> Show the judgment</p><h2>See how one opportunity hypothesis is built.</h2><p>The fictional NusantaraPay brief shows a data-platform modernization scenario for a fictional Indonesian data and cloud consultancy.</p><Link className="button button-dark" href="/sample-opportunity">Explore the full sample <span aria-hidden="true">↗</span></Link></div>
          <div className="reveal delay-1"><OpportunityBriefPreview linked /></div>
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
            <article><span className="tag">Stage 1 · No payment</span><h3>Free Opportunity Calibration</h3><p>See whether Lancara can understand your market.</p><ul><li>One 30-minute configuration session</li><li>Three manually researched, human-reviewed briefs</li><li>One 20-minute review session</li><li>Delivery within five business days after complete inputs</li><li>No payment</li></ul><Link className="button button-dark" href="/apply">Request calibration <span aria-hidden="true">↗</span></Link><small>Applications are manually reviewed. Applying does not guarantee selection.</small></article>
            <article className="paid-offer"><span className="tag">Stage 2 · Paid</span><h3>Four-Week Founding Pilot</h3><div className="price">Rp4 million <small>paid upfront</small></div><ul><li>One configured playbook</li><li>10–15 accounts researched weekly</li><li>5–8 complete human-reviewed briefs weekly</li><li>Weekly calibration</li><li>Up to two participating customer team members</li></ul><strong className="availability">Offered after a useful calibration</strong><small>Maximum two simultaneous paid customers.</small></article>
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
