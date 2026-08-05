import Link from "next/link";
import { redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { isAdmin } from "@/lib/admin-auth";

const labels: Record<string, string> = {
  specialist_recruitment: "Specialist recruitment",
  software_it_services: "Software and IT services",
  other_b2b_service: "Other B2B service",
};

export default async function Applications() {
  if (!(await isAdmin())) redirect("/admin/login");
  const db = getSupabaseAdmin();
  const { data = [] } = db ? await db.from("pilot_applications").select("id,full_name,company_name,agency_name,job_title,validation_track,service_capabilities,specializations,paid_pilot_readiness,weekly_feedback_availability,application_status,validation_stage,created_at").order("created_at", { ascending: false }) : ({ data: [] } as any);
  return <main><section className="section"><div className="container"><h1>Calibration applications</h1><p className="lead">Qualification remains manual. Review category fit before market, capability, decision-maker, commercial-readiness, and feedback criteria.</p><div className="table-scroll"><table><thead><tr><th>Applicant</th><th>Company</th><th>Validation track</th><th>Capabilities</th><th>Rp4m readiness</th><th>Weekly feedback</th><th>Status</th><th>Stage</th></tr></thead><tbody>{data.map((item: any) => { const capabilities = item.service_capabilities?.length ? item.service_capabilities : item.specializations; return <tr key={item.id}><td><Link className="inline-link" href={`/admin/applications/${item.id}`}>{item.full_name}</Link><br /><span className="muted">{item.job_title}</span></td><td>{item.company_name || item.agency_name}</td><td>{labels[item.validation_track] || "Specialist recruitment (legacy)"}</td><td>{capabilities?.join(", ") || "See description"}</td><td>{item.paid_pilot_readiness || "Legacy application"}</td><td>{item.weekly_feedback_availability || "—"}</td><td>{item.application_status}</td><td>{item.validation_stage}</td></tr>; })}</tbody></table></div>{!db && <p className="warning">Connect Supabase to view applications.</p>}</div></section></main>;
}
