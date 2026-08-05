# Lancara Decisions

Last updated: 5 August 2026

This document records material decisions and the reasoning behind them.

## 1. Lancara is broader than recruitment

**Decision:** Lancara will be positioned as an opportunity-intelligence company for B2B service businesses.

**Reason:** The underlying workflow can serve several industries. Defining the company permanently around recruitment would restrict future expansion before the first market has been validated.

Recruitment remains one possible playbook and validation vertical.

## 2. Use industry-specific playbooks

**Decision:** Customers will use ready-to-run, customer-specific playbooks instead of building workflows from a blank canvas.

**Reason:** Lessons from Clay and Bitscale show that sourcing, enrichment, signals, research, qualification, and activation are reusable product primitives. Most target customers do not want to become GTM engineers.

## 3. Keep the core architecture vertical-neutral

**Decision:** Core data structures and workflow logic must not assume that every customer is a recruitment agency.

**Reason:** Recruitment and software or IT services can use the same underlying process while applying different signals and qualification rules.

## 4. Recruitment is not yet rejected

**Decision:** Do not fully pivot away from recruitment based on the first five-company test.

**Reason:** The sample included platforms, generalists, and weak category matches. It effectively tested only one reasonably aligned prospect.

## 5. Compare recruitment with software and IT services

**Decision:** Run a parallel vertical-comparison sprint.

**Reason:** Software and IT service firms use a similar B2B account-acquisition workflow and may provide a larger market, stronger deal economics, and more observable opportunity signals.

## 6. Category verification comes before scoring

**Decision:** Confirm that a company genuinely belongs to the intended category before assigning an ICP score.

**Reason:** The original research process wasted effort scoring companies that were not valid examples of the intended customer type.

## 7. Manual delivery comes before automation

**Decision:** Establish and test the research workflow manually before encoding it into n8n, Supabase, or customer-facing software.

**Reason:** Automating an unvalidated process creates technical complexity without proving customer value.

## 8. Human review remains mandatory

**Decision:** Automation may collect, normalize, summarize, and nominate accounts. Humans retain responsibility for final qualification and recommendations.

**Reason:** Public signals do not prove buying intent, and poor recommendations can damage customer trust and reputation.

## 9. Evidence confidence is separate from commercial score

**Decision:** Opportunity potential and evidence reliability must be presented separately.

**Reason:** An account may appear commercially attractive while relying on incomplete evidence. Low-confidence opportunities should not be recommended as “contact now.”

## 10. No automated outreach during validation

**Decision:** Lancara will not send outreach automatically during the current phase.

**Reason:** The current value proposition is better research and preparation, not mass message automation. High-value B2B selling requires human judgment.

## 11. Free calibration and paid pilot are separate

**Decision:** The free stage is called Free Opportunity Calibration. The paid stage is the Four-Week Founding Pilot.

**Reason:** Free feedback tests relevance. Payment tests commercial demand. Calling both stages a pilot weakens offer clarity.

## 12. Current paid-pilot test

**Decision:** Test a four-week founding price of Rp4 million.

**Current intended scope:**

- One configured playbook
- 10–15 accounts researched weekly
- 5–8 complete human-reviewed briefs weekly
- Weekly calibration
- Up to two participating customer team members
- Maximum two simultaneous paid customers

**Reason:** This creates a clear commercial test while keeping early delivery capacity manageable.

## 13. Prefer full upfront payment

**Decision:** After a successful free calibration, request Rp4 million before the paid pilot begins.

**Reason:** The customer has already seen real output. Upfront payment provides stronger demand validation.

## 14. Validate both demand and delivery economics

**Decision:** Track production time and cost from the first researched account.

**Reason:** A customer payment is not sufficient if the service requires unsustainable founder effort.

## 15. Use staged validation gates

**Decision:**

- Gate A: three qualified discovery conversations
- Gate B: real opportunity briefs reviewed by customers
- Gate C: at least one paid pilot
- Gate D: repeat payment, renewal, continuation, or referral

**Reason:** Conversations, usage, payment, and repeatability provide different levels of evidence.

## 16. Connect n8n and Codex gradually

**Decision:** Set up the development connection during Phase 1.5, build Workflow V0 after discovery interviews, and productionize after payment.

**Reason:** Technical foundations can be prepared early, but business logic should follow validated customer and research requirements.

## 17. Defer large product features

**Decision:** Do not currently build:

- CRM synchronization
- Automated outreach
- Contact-data waterfalls
- Self-service workflow builders
- Credit-based pricing
- Large dashboards
- Fully automated scoring
- Multi-industry customer interfaces

**Reason:** These features do not resolve the present commercial-risk question.

## 18. Use a vertical-neutral acquisition site with compatible application data

**Decision:** Present Lancara as opportunity intelligence for B2B service businesses, show specialist recruitment and software/IT services as current validation tracks, and generalize the application through an additive database migration that preserves recruitment-era columns and records.

**Reason:** The public message, sample deliverable, and application must agree with the current two-vertical Gate A experiment without implying that multiple mature products or automated monitoring already exist. Additive fields and temporary dual writes provide a recoverable deployment sequence for the live funnel.

**Implementation note:** The local implementation is verified on `website-vertical-neutral-upgrade`; database integration and preview deployment remain pending before production promotion.
