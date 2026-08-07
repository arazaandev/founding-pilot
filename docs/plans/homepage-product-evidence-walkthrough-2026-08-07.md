# Homepage product-evidence walkthrough

Status: Complete
Owner: Daffa Arazaan
Created: 7 August 2026
Last updated: 7 August 2026

## 1. Objective

Help a public website visitor understand, in approximately 20 seconds, how Lancara turns public evidence into a human-reviewed commercial recommendation.

## 2. Why now

Lancara is at Gate A (messaging discovery). The website already describes the offer and includes a complete fictional opportunity brief, but the homepage does not yet present the transformation from observation to interpretation to action in one readable product view. This change improves evidence for the current manual deliverable; it does not validate demand or introduce a customer application.

## 3. Current state

- The homepage hero contains a compact fictional opportunity visual and links to `/sample-opportunity`.
- The complete fictional NusantaraPay brief already contains dated sources, an opportunity hypothesis, uncertainty, stakeholder priority, and a recommended next action.
- The homepage is a Server Component. A narrowly scoped Client Component is appropriate for stage-selection state.
- The working tree contains unrelated user changes that must remain untouched.

## 4. Scope

### Included

- One accessible three-stage walkthrough after the hero trust strip
- One large brief-style panel that updates for evidence, interpretation, and recommended action
- Canonical reusable fictional sample data shared with the full sample where appropriate
- Links to the complete fictional brief and free calibration application
- Focused browser tests and responsive visual verification
- Concise current-status and next-actions entries after verification

### Excluded

- A real dashboard, authentication, storage, monitoring, outreach, integrations, or scoring changes
- New customer claims, performance claims, or live-data claims
- Broader homepage redesign
- Deployment, commit, push, or pull request

## 5. Assumptions and open questions

- Assumption: The existing NusantaraPay fictional brief is the canonical sample in this checkout.
- Evidence: `/sample-opportunity` defines its source, hypothesis, uncertainty, stakeholder, and action fields.
- How it will be tested: The homepage walkthrough will reuse those fields and link to the same route.

## 6. Proposed design

Use a three-button tab interface with roving keyboard focus, visible selected state, and one associated tab panel. The surrounding section will state that this is a fictional current deliverable, not a live autonomous dashboard. Content will distinguish observed facts, Lancara interpretation, unknowns, commercial potential, evidence confidence, and a human-controlled next action.

## 7. Implementation milestones

### Milestone 1 — Data and component

- Extract only the fictional sample fields needed by both views.
- Implement the interactive walkthrough as a focused Client Component.
- Validate TypeScript and semantic markup.

### Milestone 2 — Presentation and placement

- Place the walkthrough after the trust strip and before longer process material.
- Add responsive styles, focus states, restrained transitions, and reduced-motion behavior.
- Validate at 390px, 768px, and 1440px.

### Milestone 3 — Verification and documentation

- Add tests for rendering, selection, keyboard operation, CTAs, disclosure, and overflow.
- Run lint, TypeScript, unit tests, production build, and browser tests.
- Update living documentation with observed implementation facts only.

## 8. Data and privacy considerations

The component uses static fictional data only. It stores no information, sends no requests, and contains no real company, customer, source, candidate, or contact data.

## 9. Failure handling and rollback

The first stage renders by default and remains understandable without animation. If client JavaScript does not hydrate, the server-rendered first stage and both links remain visible. Rollback consists of removing the walkthrough import/render, its component/data module, focused styles, and focused tests; no migration or external rollback is required.

## 10. Testing and validation

- ESLint
- TypeScript no-emit check
- Vitest unit suite
- Next.js production build
- Playwright tests for interaction, keyboard state, CTAs, disclosure, and overflow
- Manual browser inspection and screenshots at 390px, 768px, and 1440px
- Reduced-motion inspection

## 11. Observability

No runtime logging or product analytics is added. Test output and local screenshots provide implementation evidence.

## 12. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---:|---:|---|
| The visual implies live software | Medium | High | Explicit current-deliverable and non-dashboard disclosure |
| Evidence and interpretation blur together | Medium | High | Separate stages, labels, confidence, unknowns, and caveats |
| Tab behavior is inaccessible | Low | High | Semantic tab roles, roving focus, keyboard tests, visible focus |
| Mobile content overflows | Medium | Medium | Single-column breakpoints and measured overflow tests |
| Scope expands into a redesign | Low | Medium | Insert one self-contained section and leave other sections intact |

## 13. Progress log

- 7 August 2026 — Reviewed repository context, current homepage/sample, Next.js 16.3 local documentation, test setup, and working-tree changes.
- 7 August 2026 — Centralized the reused fictional sample fields and implemented the three-stage homepage walkthrough.
- 7 August 2026 — ESLint, TypeScript, 9 Vitest tests, the production build, and 10 Playwright tests passed.
- 7 August 2026 — Visually inspected evidence, interpretation, and action stages at 390px, 768px, and 1440px; no horizontal overflow was observed by the automated viewport checks.

## 14. Decision log

- Decision: Use the existing fictional NusantaraPay brief in this checkout.
- Reason: It is the canonical complete sample and avoids inventing a second data set.
- Alternatives rejected: A fabricated software screenshot or dashboard; both would misrepresent the current deliverable.

## 15. Completion criteria

- The section is placed near the hero and uses the specified title.
- All three stages are understandable, selectable, and keyboard operable.
- The large panel reflects canonical fictional brief fields and separates facts from interpretation.
- Fictional and current-deliverable disclosures are prominent.
- Both CTAs use the existing routes.
- Required automated and responsive checks pass, with any omissions documented.

## 16. Follow-up work

- Use discovery feedback to refine wording only after visitors or prospects react to the walkthrough.
- Do not add live monitoring or dashboard behavior without later validation-gate support.
- Include the walkthrough in the existing Vercel preview review before production promotion.
