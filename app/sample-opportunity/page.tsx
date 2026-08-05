import { OpportunityBriefPreview } from "@/components/opportunity-brief-preview";
import { Footer, Nav } from "@/components/site-shell";

const evidence = [
  {
    type: "Company announcement",
    observed: "NusantaraPay announced expansion of its merchant services into two additional Indonesian cities.",
    observedDate: "18 July 2026",
    checkedDate: "2 August 2026",
  },
  {
    type: "Leadership announcement",
    observed: "A new Head of Data was appointed with a stated remit covering data foundations and analytics delivery.",
    observedDate: "29 July 2026",
    checkedDate: "2 August 2026",
  },
  {
    type: "Official careers page",
    observed: "Four open roles referenced data platform, cloud infrastructure, governance, and analytics engineering work.",
    observedDate: "31 July 2026",
    checkedDate: "2 August 2026",
  },
];

const stakeholders = [
  {
    order: "01",
    role: "Head of Data",
    reason: "Likely to understand the platform priorities, internal capability, and delivery constraints.",
    objective: "Clarify ownership, sequencing, and whether external delivery support is relevant.",
  },
  {
    order: "02",
    role: "Chief Technology Officer",
    reason: "May own technology investment, architecture risk, and partner decisions.",
    objective: "Understand the strategic importance of modernization and the partner-selection process.",
  },
  {
    order: "03",
    role: "VP Merchant Operations",
    reason: "Can connect expansion requirements to reporting, reliability, and operational-data needs.",
    objective: "Verify which operational outcomes matter and where current systems create friction.",
  },
];

const unknowns = [
  ["Internal capacity", "The new roles may be sufficient to deliver the work without external support."],
  ["Incumbent partner", "An existing consultancy or cloud partner may already own the modernization programme."],
  ["Priority and budget", "The public evidence does not confirm an approved project, timeline, or buying process."],
];

export default function Sample() {
  return (
    <>
      <Nav />
      <main>
        <section className="sample-hero">
          <div className="container">
            <span className="sample-label">Fictional demonstration · no real company or source data</span>
            <h1>NusantaraPay opportunity brief</h1>
            <p className="lead">Prepared for AwanData, a fictional Indonesian data and cloud consultancy · Target account: financial technology · Indonesia</p>
            <div className="sample-summary">
              <article><span>Opportunity pattern</span><strong>Data-platform modernization window</strong><p>Expansion, data leadership, and related delivery roles appear close in time.</p></article>
              <article><span>Commercial potential</span><strong>Promising</strong><p>Relevant multi-team need and strong customer capability match, subject to verification.</p></article>
              <article><span>Evidence confidence</span><strong>Moderate</strong><p>Three recent source types support the pattern; ownership and partner status are unknown.</p></article>
            </div>
          </div>
        </section>

        <section className="section container sample-section">
          <div className="sample-copy"><p className="eyebrow"><span /> Target account summary</p><h2>A plausible change window, not confirmed buying intent.</h2><p>NusantaraPay is presented as an expanding Indonesian financial-technology company. The fictional evidence suggests related changes in commercial reach, data leadership, and technical delivery capacity.</p></div>
          <OpportunityBriefPreview />
        </section>

        <section className="section tint">
          <div className="container">
            <div className="sample-content-heading"><p className="eyebrow"><span /> Fact versus interpretation</p><h2>What was observed — and what Lancara inferred.</h2></div>
            <div className="fact-interpretation">
              <article className="fact-card"><span className="tag">Observed</span><h3>Three public changes appeared within two weeks.</h3><ul className="list"><li>Merchant-services expansion announcement</li><li>New Head of Data appointment</li><li>Data, cloud, governance, and analytics roles</li></ul><p>These are fictional observations shown in the format a real brief would use.</p></article>
              <article className="interpretation-card"><span className="tag">Interpreted</span><h3>The changes may create a modernization window.</h3><p>The combination supports a hypothesis that NusantaraPay may be strengthening its data platform for expansion. It does not establish an approved project, external-service need, or buying intent.</p><b>Alternative explanation</b><p>The company may be building the capability internally or already working with an incumbent partner.</p></article>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="sample-content-heading"><p className="eyebrow"><span /> Customer-specific fit</p><h2>Why this account may fit AwanData.</h2><p className="lead">The same account could be irrelevant to another provider. Qualification reflects the fictional customer’s capabilities and proof.</p></div>
          <div className="grid3">
            <article className="card"><span className="tag">Capability</span><h3>Data-platform delivery</h3><p>AwanData can design cloud data foundations, analytics pipelines, and data-governance controls.</p></article>
            <article className="card"><span className="tag">Comparable proof</span><h3>Regional payments case</h3><p>A fictional case study covers modernization for a regulated Indonesian payments business with similar data-volume challenges.</p></article>
            <article className="card"><span className="tag">Commercial fit</span><h3>Cross-functional scope</h3><p>The apparent need may involve a meaningful project across technology, data, and merchant operations.</p></article>
          </div>
        </section>

        <section className="section tint">
          <div className="container">
            <div className="sample-content-heading"><p className="eyebrow"><span /> Evidence timeline</p><h2>Dated observations with visible freshness.</h2><p className="lead">All entries below are fictional. In a customer brief, each item would remain linked to its source.</p></div>
            <div className="timeline-evidence">
              {evidence.map((item) => <article key={item.type}><div className="evidence-meta"><span>{item.type}</span><span>Observed {item.observedDate}</span><span>Last checked {item.checkedDate}</span></div><h3>{item.observed}</h3><p className="muted">Source unavailable in this fictional demonstration.</p></article>)}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="sample-content-heading"><p className="eyebrow"><span /> Separate assessments</p><h2>Commercial value and evidence quality answer different questions.</h2></div>
          <div className="decision-grid">
            <article><span className="tag">Commercial potential</span><strong className="metric-word">Promising</strong><p>The potential project may suit AwanData’s delivery capabilities, reference proof, geography, and preferred contract profile. The assessment is qualitative because the model is not customer validated.</p><b>What could reduce it</b><p>Small internal scope, an incumbent contract, or a procurement route inaccessible to AwanData.</p></article>
            <article><span className="tag">Evidence confidence</span><strong className="metric-word">Moderate</strong><p>Three recent and related fictional source types support the change pattern. None confirms project ownership, urgency, budget, external-support need, or partner status.</p><b>Why it is not high</b><p>The most commercially important facts remain internal and require direct verification.</p></article>
          </div>
        </section>

        <section className="section tint">
          <div className="container">
            <div className="sample-content-heading"><p className="eyebrow"><span /> Stakeholders</p><h2>Roles to understand, not personal contacts to harvest.</h2><p className="lead">No personal stakeholder data is used in this demonstration. Each role has a specific conversation objective.</p></div>
            <div className="stakeholder-grid">{stakeholders.map((person) => <article key={person.role}><span>{person.order}</span><h3>{person.role}</h3><p>{person.reason}</p><b>Conversation objective</b><p>{person.objective}</p></article>)}</div>
          </div>
        </section>

        <section className="section container">
          <div className="sample-content-heading"><p className="eyebrow"><span /> Unknowns and disqualifiers</p><h2>Why the interpretation may be wrong.</h2></div>
          <div className="unknown-grid">{unknowns.map(([title, copy]) => <article key={title}><span className="tag">Unknown</span><h3>{title}</h3><p className="muted">{copy}</p></article>)}</div>
        </section>

        <section className="section tint">
          <div className="container grid2">
            <article className="card"><span className="tag">Verify next</span><h2>Confirm ownership, priority, and partner status.</h2><ol className="list"><li>Who owns the data-platform roadmap?</li><li>Which outcomes are currently prioritized?</li><li>Is delivery planned internally, with an incumbent, or through a new partner?</li><li>What would disqualify an external consultancy?</li></ol></article>
            <article className="card conversation-card"><span className="tag">Careful conversation angle</span><h2>Begin with a hypothesis, not a claim.</h2><p>“The combination of NusantaraPay’s merchant expansion, new data leadership, and related platform roles suggests that the data foundation may be evolving. AwanData has supported a similar regulated payments environment. Is platform delivery already fully covered internally or by an existing partner, or would an outside perspective be useful?”</p><div className="demo-controls" aria-label="Disabled demonstration review controls"><button disabled>Approve</button><button disabled>Edit</button><button disabled>Reject</button><button disabled>Postpone</button></div><p className="demo-note">Demonstration only. A human customer would review and decide the next action.</p></article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
