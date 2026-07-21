import { NextResponse } from "next/server";
import { z } from "zod";
import { calibrationApplicationSchema } from "@/lib/calibration-schema";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { allowSubmission } from "@/lib/rate-limit";
import { sendApplicationEmails } from "@/lib/email";

export async function POST(req:Request){try{
  const ip=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"local";
  if(!(await allowSubmission(ip)))return NextResponse.json({error:"Too many attempts. Please wait 15 minutes and try again."},{status:429});
  const body=calibrationApplicationSchema.parse(await req.json());const db=getSupabaseAdmin();let applicationId:string|undefined;
  if(db){const since=new Date(Date.now()-24*60*60*1000).toISOString();const{data:dupe}=await db.from("pilot_applications").select("id").eq("work_email",body.workEmail).gte("created_at",since).maybeSingle();if(dupe)return NextResponse.json({error:"An application from this email was recently received."},{status:409});
    const{data,error}=await db.from("pilot_applications").insert({full_name:body.fullName,work_email:body.workEmail,job_title:body.jobTitle,agency_name:body.agencyName,agency_website:body.agencyWebsite,country:body.country,primary_market:body.primaryMarket,specializations:body.specializations,typical_employer_profile:body.typicalEmployerProfile,credible_roles:body.credibleRoles,acquisition_channels:body.acquisitionChannels,recent_acquisition_success:body.recentAcquisitionSuccess||null,paid_pilot_readiness:body.paidPilotReadiness,weekly_feedback_availability:body.weeklyFeedbackAvailability,contact_consent:true,privacy_consent:true,application_status:"new",validation_stage:"application",...(body.utm||{})}).select("id").single();if(error)throw error;applicationId=data.id;
  }else console.info("Development calibration application",body);
  sendApplicationEmails({fullName:body.fullName,workEmail:body.workEmail,agencyName:body.agencyName,jobTitle:body.jobTitle,specializations:body.specializations,paidPilotReadiness:body.paidPilotReadiness,weeklyFeedbackAvailability:body.weeklyFeedbackAvailability}).catch(error=>console.error("Non-blocking email failure",error));
  return NextResponse.json({ok:true,id:applicationId});
}catch(error){if(error instanceof z.ZodError)return NextResponse.json({error:"Please check the required fields.",details:error.issues},{status:400});console.error(error);return NextResponse.json({error:"We could not submit your application. Please try again."},{status:500})}}
