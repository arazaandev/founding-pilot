import Link from "next/link";
import { fictionalOpportunity as opportunity } from "@/lib/fictional-opportunity";

export function OpportunityBriefPreview({ linked = false }: { linked?: boolean }) {
  const content = (
    <article className="brief-preview" aria-label="Fictional NusantaraPay opportunity brief preview">
      <div className="brief-preview-top">
        <div>
          <span className="micro-label">FICTIONAL OPPORTUNITY BRIEF</span>
          <h3>{opportunity.account.name}</h3>
          <p>{opportunity.account.industry} · {opportunity.account.market}</p>
        </div>
        <span className="review-state">Human review required</span>
      </div>
      <div className="brief-pattern">
        <span>Opportunity pattern</span>
        <strong>{opportunity.pattern.name}</strong>
      </div>
      <div className="brief-assessments">
        <div>
          <span>Commercial potential</span>
          <strong>{opportunity.commercialPotential.level}</strong>
          <p>Capability match and multi-team relevance.</p>
        </div>
        <div>
          <span>Evidence confidence</span>
          <strong>{opportunity.evidenceConfidence.level}</strong>
          <p>Three source types; partner status unknown.</p>
        </div>
      </div>
      <dl className="brief-evidence">
        <div>
          <dt>Observed · 29 Jul 2026</dt>
          <dd>{opportunity.evidence[1].observed}</dd>
        </div>
        <div className="unknown-row">
          <dt>Unknown</dt>
          <dd>{opportunity.unknowns[1][1]}</dd>
        </div>
        <div className="verify-row">
          <dt>Verify next</dt>
          <dd>{opportunity.nextStep.verify[0]} Confirm priority and partner status before outreach.</dd>
        </div>
      </dl>
    </article>
  );

  return linked ? <Link className="brief-preview-link" href="/sample-opportunity">{content}</Link> : content;
}
