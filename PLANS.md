# Lancara Execution Plans

This file defines how Codex should create and maintain execution plans for substantial Lancara work.

An execution plan is a living implementation document. It should allow another agent or developer to understand the objective, constraints, current progress, decisions, validation requirements, and remaining work without relying on chat history.

## When an execution plan is required

Create an execution plan before:

- Major product features
- Architecture changes
- Database migrations
- New n8n workflow systems
- Authentication or authorization changes
- Production integrations
- Multi-step refactors
- Changes spanning several application areas
- Work expected to require more than one focused pull request
- Work with meaningful data, privacy, or operational risk

An execution plan is usually unnecessary for small copy corrections, documentation-only changes, isolated visual fixes, minor bug fixes, or one-file changes with obvious validation.

## Required context

Before writing a plan, read:

- `context/current-status.md`
- `context/decisions.md`
- `context/experiments.md`
- `context/research-findings.md`
- `context/next-actions.md`

Also read any relevant product, architecture, or workflow documentation.

Do not assume that recruitment is Lancara’s permanent vertical.

## Plan principles

Every plan must:

- Start from the customer or operational problem
- Separate verified facts from assumptions
- Respect current validation gates
- Prefer the smallest useful implementation
- Preserve human review where required
- Avoid features listed as explicitly deferred
- Explain why the work is necessary now
- Define how success will be verified
- Include rollback or recovery considerations when production is affected
- Be updated as implementation progresses

## Standard plan structure

Use the following format:

```md
# <Plan title>

Status: Draft | Approved | In progress | Blocked | Complete
Owner:
Created:
Last updated:

## 1. Objective

Describe the outcome in customer or operational terms.

## 2. Why now

Explain which validated need, failure, or decision requires this work.

## 3. Current state

Describe the existing implementation and relevant constraints.

## 4. Scope

### Included

- ...

### Excluded

- ...

## 5. Assumptions and open questions

- Assumption:
- Evidence:
- How it will be tested:

## 6. Proposed design

Describe the workflow, data model, interface, integration, and human-review points.

## 7. Implementation milestones

### Milestone 1

- Tasks
- Expected output
- Validation

## 8. Data and privacy considerations

Describe collected data, storage, retention, access, and prohibited data.

## 9. Failure handling and rollback

Describe retries, fallbacks, recovery, and rollback steps.

## 10. Testing and validation

Include relevant unit tests, integration tests, browser tests, workflow fixtures, manual review, production verification, and customer or operational acceptance criteria.

## 11. Observability

Define logs, metrics, alerts, audit records, and cost tracking.

## 12. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|

## 13. Progress log

- Date — change, result, or decision

## 14. Decision log

- Decision:
- Reason:
- Alternatives rejected:

## 15. Completion criteria

List the exact conditions required before the plan can be marked complete.

## 16. Follow-up work

List work intentionally deferred.
```

## n8n-specific plan requirements

For n8n workflow plans, also define:

- Workflow purpose
- Trigger
- Input schema
- Output schema
- Credentials used
- Development and production separation
- Idempotency rules
- Retry behaviour
- Error path
- Human-approval point
- Execution logging
- Cost tracking
- Workflow export path
- Test fixtures
- Version number
- Rollback workflow version

Avoid one large workflow when modular sub-workflows are clearer.

Important business logic, prompts, schemas, and rules should be version-controlled in the repository rather than existing only inside visual nodes.

## Database-plan requirements

For database changes, include the current schema, proposed schema, migration order, backfill requirements, compatibility, indexes, constraints, access policies, rollback strategy, and test and production migration procedure.

Do not create tables merely because they may be useful later. Each field and table must connect to a validated operational requirement.

## Customer-facing feature requirements

Before planning a customer-facing feature, identify which validation gate supports it:

- Gate A: messaging discovery
- Gate B: output validation
- Gate C: payment validation
- Gate D: repeatability

If no gate or direct operational need supports the feature, defer it.

## Plan maintenance

During implementation:

- Update status and progress
- Record material deviations
- Record new decisions
- Mark blocked items clearly
- Do not silently expand scope
- Link relevant pull requests, commits, migrations, workflow versions, and test results

After completion:

- Mark the plan complete
- Summarize the delivered result
- Record remaining limitations
- Update the relevant context files
- Move durable decisions into `context/decisions.md`
- Move experiment outcomes into `context/experiments.md`
- Update `context/current-status.md` and `context/next-actions.md`
