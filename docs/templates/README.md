# Tracker instructions

Open the CSV files in Excel or Google Sheets. Keep one row per agency in the outreach tracker and one row per opportunity review in the feedback record. Use ISO dates (`YYYY-MM-DD`) and Indonesian rupiah without currency symbols.

## Agency outreach tracker

Use these current-status values: `identified`, `contacted`, `replied`, `call_scheduled`, `discovery_complete`, `calibration_selected`, `nurture`, or `rejected`. A status describes what has happened; `next_action` and `next_action_date` describe what should happen next.

Do not add contacts without a specific reason the agency fits. Do not store unnecessary personal information.

## Opportunity feedback record

- `decision`: `approve`, `edit`, `reject`, or `postpone`.
- `rejection_reason`: `wrong_market`, `wrong_roles`, `insufficient_urgency`, `weak_evidence`, `existing_relationship`, `commercially_unattractive`, `agency_lacks_relevant_capability`, or `other`. Complete it for rejections; explain `other` in `additional_comment`.
- `recommendation`: `contact_now`, `verify_first`, `monitor`, or `do_not_pursue`.
- `evidence_confidence`: `high`, `medium`, or `low`. This is separate from commercial scoring. Low-confidence opportunities cannot be marked `contact_now` without further verification.
- Boolean outcome fields use `yes`, `no`, or remain blank when not yet known.
- `accounts_screened` is the number considered to produce this brief. Record it once for the relevant production batch rather than repeating the same batch total on every row.
- `total_production_minutes` includes research, human review, and revision time. Record variable data and tool costs even when they are zero.

Do not infer a reply or meeting from an approved brief. Update those fields only after observed activity.
