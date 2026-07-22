import { notFound, redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { isAdmin } from "@/lib/admin-auth";
import { AdminApplicationEditor } from "@/components/admin-application-editor";

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const db = getSupabaseAdmin();
  if (!db) notFound();
  const { data } = await db.from("pilot_applications").select("*").eq("id", id).single();
  if (!data) notFound();
  const { data: eventData } = await db.from("pilot_application_events").select("*").eq("application_id", id).order("created_at", { ascending: false });
  const events = eventData ?? [];
  return <main><section><div className="container form">
    <div className="eyebrow">Manual qualification · {data.application_status}</div>
    <h1 style={{ fontSize: 50 }}>{data.full_name}</h1><p className="lead">{data.job_title} at {data.agency_name}</p>
    <AdminApplicationEditor id={id} initial={data}/>
    <div className="card"><h2>Manual review checklist</h2><ul className="list"><li>Specializes in technology or difficult-to-fill roles</li><li>Actively seeks employer clients</li><li>A decision-maker is participating</li><li>Has a clear employer profile and credible role capability</li><li>Can provide weekly feedback</li><li>Can consider the Rp4 million pilot</li><li>Suitable for manual research</li></ul><p className="muted">Record the assessment in internal notes and update the application status. No automated qualification score is generated.</p></div>
    <h2>Application</h2>{Object.entries(data).filter(([k]) => !/[iI]d|breakdown|notes|owner|status|stage/.test(k)).map(([k, v]) => <p key={k}><b>{k.replaceAll("_", " ")}:</b> {typeof v === "object" ? JSON.stringify(v) : String(v ?? "")}</p>)}
    <h2>Activity history</h2>{events.length ? events.map((e: any) => <div className="card" key={e.id}><b>{e.event_type.replaceAll("_", " ")}</b><p className="muted">{new Date(e.created_at).toLocaleString()} · {e.actor || "system"}</p></div>) : <p className="muted">No updates recorded yet.</p>}
  </div></section></main>;
}
