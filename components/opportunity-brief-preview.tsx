import Link from "next/link";

export function OpportunityBriefPreview({ linked = false }: { linked?: boolean }) {
  const content = (
    <article className="brief-preview" aria-label="Fictional NusantaraPay opportunity brief preview">
      <div className="brief-preview-top">
        <div>
          <span className="micro-label">FICTIONAL OPPORTUNITY BRIEF</span>
          <h3>NusantaraPay</h3>
          <p>Financial technology · Indonesia</p>
        </div>
        <span className="review-state">Human review required</span>
      </div>
      <div className="brief-pattern">
        <span>Opportunity pattern</span>
        <strong>Data-platform modernization window</strong>
      </div>
      <div className="brief-assessments">
        <div>
          <span>Commercial potential</span>
          <strong>Promising</strong>
          <p>Capability match and multi-team relevance.</p>
        </div>
        <div>
          <span>Evidence confidence</span>
          <strong>Moderate</strong>
          <p>Three source types; partner status unknown.</p>
        </div>
      </div>
      <dl className="brief-evidence">
        <div>
          <dt>Observed · 29 Jul 2026</dt>
          <dd>New Head of Data role announced.</dd>
        </div>
        <div className="unknown-row">
          <dt>Unknown</dt>
          <dd>Whether an incumbent delivery partner already owns the work.</dd>
        </div>
        <div className="verify-row">
          <dt>Verify next</dt>
          <dd>Confirm ownership, priority, and partner status before outreach.</dd>
        </div>
      </dl>
    </article>
  );

  return linked ? <Link className="brief-preview-link" href="/sample-opportunity">{content}</Link> : content;
}
