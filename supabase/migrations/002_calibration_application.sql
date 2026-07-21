alter table public.pilot_applications
  add column if not exists typical_employer_profile text,
  add column if not exists credible_roles text,
  add column if not exists acquisition_channels jsonb not null default '[]'::jsonb,
  add column if not exists recent_acquisition_success text,
  add column if not exists paid_pilot_readiness text,
  add column if not exists weekly_feedback_availability text;

alter table public.pilot_applications
  alter column recruiter_count_range drop not null,
  alter column biggest_acquisition_problem drop not null,
  alter column willing_to_share_icp drop not null,
  alter column willing_to_share_accounts drop not null,
  alter column willing_to_review_sample drop not null,
  alter column paid_pilot_openness drop not null,
  alter column qualification_score drop not null,
  alter column qualification_band drop not null,
  alter column score_breakdown drop not null;

comment on column public.pilot_applications.qualification_score is 'Legacy automated score; no longer generated for calibration applications.';
comment on column public.pilot_applications.qualification_band is 'Legacy automated band; new applications are reviewed manually.';
