import { notFound, redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { isAdmin } from "@/lib/admin-auth";
import { AdminApplicationEditor } from "@/components/admin-application-editor";

const labels: Record<string, string> = {
  specialist_recruitment: "Specialist recruitment",
  software_it_services: "Software and IT services",
  other_b2b_service: "Other B2B service",
};

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const db = getSupabaseAdmin();
  if (!db) notFound();
  const { data } = await db.from("pilot_applications").select("*").eq("id", id).single();
  if (!data) notFound();
  const { data: eventData } = await db.from("pilot_application_events").select("*").eq("application_id", id).order("created_at", { ascending: false });
  const events = eventData ?? [];
  const companyName = data.company_name || data.agency_name;
  const companyWebsite = data.company_website || data.agency_website;
  const capabilities = data.service_capabilities?.length ? data.service_capabilities : data.specializations;
  const typicalClient = data.typical_client_profile || data.typical_employer_profile;
  const deliveryProof = data.credible_delivery_proof || data.credible_roles;
  const track = data.validation_track || "specialist_recruitment";
  return <main><section className="section"><div className="container form">
    <div className="eyebrow"><span /> Manual qualification · {data.application_status}</div>
    <h1>{data.full_name}</h1><p className="lead">{data.job_title} at {companyName}</p>
    <AdminApplicationEditor id={id} initial={data} />
    <div className="card"><h2>Manual review checklist</h2><ul className="list"><li>Category verified before detailed ICP review</li><li>B2B service revenue and active company-client acquisition</li><li>Clear specialization or differentiated delivery capability</li><li>Decision-maker can participate in configuration and review</li><li>Typical client profile, proof, constraints, and exclusions can be configured</li><li>Public evidence can support a credible research playbook</li><li>Can provide weekly feedback and consider the Rp4 million pilot</li>{track === "other_b2b_service" && <li>Manual review confirms whether a usable playbook can be configured for this unvalidated track</li>}</ul><p className="muted">No automated qualification score is generated. Commercial potential and evidence confidence must be reviewed separately.</p></div>
    <h2>Application</h2>
    <div className="card"><p><b>Company:</b> {companyName}</p><p><b>Website:</b> {companyWebsite}</p><p><b>Validation track:</b> {labels[track] || track}</p><p><b>Capabilities:</b> {capabilities?.join(", ") || "See service description"}</p><p><b>Typical client profile:</b> {typicalClient || "Not provided"}</p><p><b>Services and delivery proof:</b> {deliveryProof || "Not provided"}</p><p><b>Acquisition methods:</b> {data.acquisition_channels?.join(", ") || "Not provided"}</p><p><b>Recent acquisition success:</b> {data.recent_acquisition_success || "Not provided"}</p><p><b>Paid-pilot readiness:</b> {data.paid_pilot_readiness || "Legacy application"}</p><p><b>Weekly feedback:</b> {data.weekly_feedback_availability || "Legacy application"}</p>{!data.company_name && <p className="warning">Legacy recruitment application rendered from preserved fields.</p>}</div>
    <h2>Activity history</h2>{events.length ? events.map((event: any) => <div className="card" key={event.id}><b>{event.event_type.replaceAll("_", " ")}</b><p className="muted">{new Date(event.created_at).toLocaleString()} · {event.actor || "system"}</p></div>) : <p className="muted">No updates recorded yet.</p>}
  </div></section></main>;
}
