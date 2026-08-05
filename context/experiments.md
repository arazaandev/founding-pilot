# Lancara Experiments

Last updated: 5 August 2026

This document records tests, assumptions, evidence, outcomes, and next decisions.

## Experiment 1 — Original recruitment ICP sourcing

**Status:** Completed, inconclusive

**Assumption:** Indonesia contains enough technology-focused recruitment agencies that match Lancara’s original ICP.

**Method:** Five companies were researched and scored: HuntHire, Sunrecruit, EKRUT, Glints, and Talent Hunts.

**Outcome:**

- Several companies were not true specialist boutique agencies.
- Some category and specialization claims were overstated.
- Only Talent Hunts was reasonably close to the intended profile.
- Talent Hunts had an unresolved score discrepancy: the recorded dimensions summed to 73 while the asserted total was 81.

**Learning:** The sample-selection process was unreliable. The test does not support a full industry pivot.

**Next action:** Add category verification before scoring and test a broader specialist-agency ICP.

---

## Experiment 2 — Recruitment positioning and public offer

**Status:** Public implementation complete; commercial result pending

**Assumption:** Recruitment agencies will understand and value evidence-backed hiring-demand opportunity briefs.

**Implementation:**

- Lancara for Recruitment positioning
- Hiring Demand Playbook
- Free Opportunity Calibration
- Four-Week Founding Pilot
- Fictional sample opportunity
- Public application workflow

**Technical result:** Application storage, thank-you redirect, and notification emails were tested successfully.

**Commercial result:** Not yet known.

**Success evidence still required:**

- Agencies apply or accept direct invitations
- Agencies review real briefs
- Approved accounts are contacted
- Customers pay for continued delivery

---

## Experiment 3 — Free Opportunity Calibration

**Status:** Planned

**Assumption:** Three customer-specific opportunity briefs are sufficient to demonstrate relevance and justify a paid pilot discussion.

**Current design:**

- One 30-minute configuration session
- Three researched opportunity briefs
- One 20-minute review session
- Delivery within five business days after complete onboarding
- No payment

**Primary metrics:**

- Brief approval rate
- Would-contact rate
- Actual-contact rate
- Research time saved
- Customer objections
- Production time and cost

**Decision rule:** Proceed to a paid-pilot offer only when the customer confirms that the briefs are relevant enough to use.

---

## Experiment 4 — Rp4 million paid pilot

**Status:** Planned

**Assumption:** A customer that values the free calibration will pay Rp4 million for four weeks of recurring delivery.

**Current design:**

- One customer-specific playbook
- 10–15 accounts researched weekly
- 5–8 full briefs weekly
- Weekly calibration
- Activity and relevance reporting
- Full payment requested upfront

**Demand success condition:** At least one customer pays.

**Delivery success condition:** Founder time and variable costs indicate that delivery can become economically sustainable.

---

## Experiment 5 — Revised specialist recruitment ICP

**Status:** Planned

**Assumption:** The viable recruitment market is broader than pure technology recruitment and includes specialist agencies serving engineering, manufacturing, finance, healthcare, and executive search.

**Proposed sample:** Technology and digital; engineering and manufacturing; financial services; healthcare and life sciences.

**Category gate:** A company must be employer-facing, commercially active, specialized enough for signal interpretation, reachable by founder or business-development leadership, and open to proactive client acquisition.

**Next action:** Research ten valid specialist agencies before detailed scoring.

---

## Experiment 6 — Software and IT services comparison

**Status:** Planned

**Assumption:** Software and IT service firms may show stronger client-acquisition pain, larger market depth, and better opportunity economics than recruitment agencies.

**Target company profile:**

- B2B service revenue
- Approximately 10–100 employees
- Clear specialization
- Founder or business-development leader reachable
- Mid-market or enterprise client potential
- Regular need for new customer accounts

**Potential service categories:** Custom software, data and AI, cloud, cybersecurity, systems integration, and managed IT services.

**Next action:** Research ten qualified firms and conduct comparable interviews.

---

## Experiment 7 — Parallel vertical discovery

**Status:** Planned

**Assumption:** Behavioural comparison across two verticals will produce a better market decision than additional recruitment-only desk research.

**Target:**

- Four specialist recruitment conversations
- Four software or IT service conversations

**Comparison dimensions:**

- Pain severity
- Pain frequency
- Current workaround
- Observable signals
- Account actionability
- Deal economics
- Decision-maker access
- Delivery feasibility
- Market depth
- Willingness to invest time or money

**Decision:** Select the primary vertical only after comparable discovery and output tests.

---

## Experiment 8 — n8n-assisted research workflow

**Status:** Not started

**Assumption:** Repetitive evidence collection and brief preparation can be accelerated without removing human qualification.

**Timing:**

- Connect n8n MCP to Codex during Phase 1.5
- Build Workflow V0 after discovery calls
- Refine after real brief feedback
- Productionize after payment

**V0 scope:** Account intake, company normalization, approved-source collection, evidence extraction, deduplication, draft signal classification, research queue creation, brief drafting, and a human-review checkpoint.

**Explicit exclusion:** Autonomous opportunity approval.
