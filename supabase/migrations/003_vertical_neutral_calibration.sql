alter table public.pilot_applications
  add column if not exists company_name text,
  add column if not exists company_website text,
  add column if not exists validation_track text,
  add column if not exists service_capabilities jsonb not null default '[]'::jsonb,
  add column if not exists typical_client_profile text,
  add column if not exists credible_delivery_proof text;

update public.pilot_applications
set
  company_name = coalesce(company_name, agency_name),
  company_website = coalesce(company_website, agency_website),
  validation_track = coalesce(validation_track, 'specialist_recruitment'),
  service_capabilities = case when service_capabilities = '[]'::jsonb then coalesce(specializations, '[]'::jsonb) else service_capabilities end,
  typical_client_profile = coalesce(typical_client_profile, typical_employer_profile),
  credible_delivery_proof = coalesce(credible_delivery_proof, credible_roles)
where company_name is null
   or company_website is null
   or validation_track is null
   or service_capabilities = '[]'::jsonb
   or typical_client_profile is null
   or credible_delivery_proof is null;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'pilot_applications_validation_track_check'
      and conrelid = 'public.pilot_applications'::regclass
  ) then
    alter table public.pilot_applications
      add constraint pilot_applications_validation_track_check
      check (validation_track is null or validation_track in ('specialist_recruitment', 'software_it_services', 'other_b2b_service'));
  end if;
end $$;

create index if not exists pilot_app_validation_track_idx on public.pilot_applications(validation_track);

comment on column public.pilot_applications.validation_track is 'Current validation track. Legacy recruitment applications are backfilled as specialist_recruitment.';
comment on column public.pilot_applications.service_capabilities is 'Customer services or specialist capabilities used for manual qualification.';
