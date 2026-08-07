"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { fictionalOpportunity as opportunity } from "@/lib/fictional-opportunity";

const stages = [
  { id: "evidence", label: "Evidence observed" },
  { id: "interpretation", label: "Lancara’s interpretation" },
  { id: "action", label: "Recommended next step" },
] as const;

type StageId = (typeof stages)[number]["id"];

function EvidenceStage() {
  return (
    <div className="walkthrough-stage walkthrough-stage-evidence">
      <div className="walkthrough-stage-heading">
        <span className="walkthrough-kicker">Observed</span>
        <h3>Three related changes appeared within two weeks.</h3>
        <p>Each observation keeps its fictional source type, observation date, and last-check date visible.</p>
      </div>
      <div className="walkthrough-evidence-list">
        {opportunity.evidence.map((item) => (
          <article key={item.type}>
            <div className="walkthrough-evidence-meta">
              <span>{item.type}</span>
              <time dateTime={item.observedDateIso}>Observed {item.observedDate}</time>
            </div>
            <h4>{item.observed}</h4>
            <p>Last checked {item.checkedDate} <span aria-hidden="true">·</span> Current within this fictional brief</p>
          </article>
        ))}
      </div>
      <div className="walkthrough-limits">
        <article>
          <span className="walkthrough-kicker amber">Unknown</span>
          <h4>Commercial ownership is not public.</h4>
          <p>{opportunity.unknowns[2][1]}</p>
        </article>
        <article>
          <span className="walkthrough-kicker dark">Verify next</span>
          <h4>Start with what the evidence cannot answer.</h4>
          <p>{opportunity.nextStep.verify[0]} Confirm priority and partner status before treating the pattern as actionable.</p>
        </article>
      </div>
    </div>
  );
}

function InterpretationStage() {
  return (
    <div className="walkthrough-stage walkthrough-stage-interpretation">
      <div className="walkthrough-pattern-card">
        <span className="walkthrough-kicker">Opportunity pattern</span>
        <h3>{opportunity.pattern.name}</h3>
        <p>{opportunity.pattern.interpretation}</p>
      </div>
      <div className="walkthrough-assessments">
        <article>
          <span>Commercial potential</span>
          <strong>{opportunity.commercialPotential.level}</strong>
          <p>{opportunity.commercialPotential.summary}</p>
        </article>
        <article>
          <span>Evidence confidence</span>
          <strong>{opportunity.evidenceConfidence.level}</strong>
          <p>{opportunity.evidenceConfidence.summary}</p>
        </article>
      </div>
      <div className="walkthrough-caveat">
        <span className="walkthrough-kicker amber">Why Lancara may be wrong</span>
        <h4>The same signals have plausible alternative explanations.</h4>
        <p>{opportunity.unknowns[0][1]} {opportunity.unknowns[1][1]}</p>
      </div>
    </div>
  );
}

function ActionStage() {
  const stakeholder = opportunity.stakeholders[0];
  return (
    <div className="walkthrough-stage walkthrough-stage-action">
      <div className="walkthrough-decision">
        <div>
          <span className="walkthrough-kicker">Recommended status</span>
          <h3>{opportunity.nextStep.status}</h3>
          <p>The evidence supports a careful qualification step, not a claim of confirmed buying intent.</p>
        </div>
        <span className="walkthrough-review-pill">Human review required</span>
      </div>
      <div className="walkthrough-action-grid">
        <article>
          <span className="walkthrough-kicker dark">Stakeholder priority</span>
          <p className="walkthrough-order">01</p>
          <h4>{stakeholder.role}</h4>
          <p>{stakeholder.reason}</p>
          <b>Conversation objective</b>
          <p>{stakeholder.objective}</p>
        </article>
        <article>
          <span className="walkthrough-kicker dark">What to verify first</span>
          <ol>
            {opportunity.nextStep.verify.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </article>
      </div>
      <div className="walkthrough-human-note">
        <span aria-hidden="true">✓</span>
        <p><strong>Human-controlled recommendation.</strong> {opportunity.nextStep.humanReview}</p>
      </div>
    </div>
  );
}

const stageContent: Record<StageId, () => React.JSX.Element> = {
  evidence: EvidenceStage,
  interpretation: InterpretationStage,
  action: ActionStage,
};

export function OpportunityWalkthrough() {
  const [selectedStage, setSelectedStage] = useState<StageId>("evidence");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = stages.findIndex((stage) => stage.id === selectedStage);
  const SelectedStage = stageContent[selectedStage];

  function selectStage(index: number, moveFocus = false) {
    const nextIndex = (index + stages.length) % stages.length;
    setSelectedStage(stages[nextIndex].id);
    if (moveFocus) tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectStage(activeIndex + 1, true);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectStage(activeIndex - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectStage(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      selectStage(stages.length - 1, true);
    }
  }

  return (
    <section className="evidence-walkthrough section" aria-labelledby="walkthrough-title">
      <div className="container">
        <div className="walkthrough-intro reveal">
          <div>
            <p className="eyebrow"><span /> Current deliverable</p>
            <h2 id="walkthrough-title">From public evidence to a commercial next step</h2>
            <p className="lead">Lancara separates observations, interpretation, uncertainty, and recommended action so each conclusion can be inspected before a team acts.</p>
          </div>
          <div className="walkthrough-disclosure" role="note">
            <strong>Fictional demonstration</strong>
            <p>Based on Lancara’s current human-reviewed brief format. No real company, customer, or source data.</p>
            <p>This is a current deliverable preview, not a live autonomous monitoring dashboard.</p>
          </div>
        </div>

        <div className="walkthrough-tabs" role="tablist" aria-label="Opportunity brief stages">
          {stages.map((stage, index) => (
            <button
              aria-controls={`walkthrough-panel-${stage.id}`}
              aria-selected={selectedStage === stage.id}
              id={`walkthrough-tab-${stage.id}`}
              key={stage.id}
              onClick={() => selectStage(index)}
              onKeyDown={handleKeyDown}
              ref={(element) => { tabRefs.current[index] = element; }}
              role="tab"
              tabIndex={selectedStage === stage.id ? 0 : -1}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {stage.label}
            </button>
          ))}
        </div>

        <article className="walkthrough-panel" aria-label="Fictional NusantaraPay opportunity brief">
          <header className="walkthrough-panel-header">
            <div>
              <span className="micro-label">FICTIONAL OPPORTUNITY BRIEF</span>
              <h3>{opportunity.account.name}</h3>
              <p>Prepared for {opportunity.customer.name} <span aria-hidden="true">·</span> {opportunity.account.industry} <span aria-hidden="true">·</span> {opportunity.account.market}</p>
            </div>
            <span className="walkthrough-stage-count">Stage {activeIndex + 1} of {stages.length}</span>
          </header>
          <div
            aria-labelledby={`walkthrough-tab-${selectedStage}`}
            className="walkthrough-panel-content"
            id={`walkthrough-panel-${selectedStage}`}
            key={selectedStage}
            role="tabpanel"
            tabIndex={0}
          >
            <SelectedStage />
          </div>
        </article>

        <div className="walkthrough-ctas">
          <Link className="button button-dark" href="/sample-opportunity">Explore the complete fictional brief <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/apply">Request a free calibration <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
