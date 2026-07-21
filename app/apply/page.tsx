"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Nav, Footer } from "@/components/site-shell";

const empty = {fullName:"",workEmail:"",jobTitle:"",agencyName:"",agencyWebsite:"",country:"Indonesia",primaryMarket:"Indonesia",recruiters:"",specializations:[] as string[],weeklyResearchHours:"",biggestProblem:"",shareIcp:"Possibly",shareAccounts:"Possibly",reviewSample:"Possibly",paidPilot:"Possibly",contactConsent:false,privacyConsent:false,website:""};
const stepNames = ["About your agency", "Agency profile", "Client-acquisition workflow", "Pilot readiness"];

export default function Apply() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(empty);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  useEffect(() => { const saved = localStorage.getItem("pilot-application"); if (saved) { try { setData({...empty,...JSON.parse(saved)}); } catch {} } }, []);
  useEffect(() => { localStorage.setItem("pilot-application", JSON.stringify(data)); }, [data]);
  const set = (key:string, value:unknown) => setData(current => ({...current,[key]:value}));

  function validate(currentStep:number) {
    if (currentStep === 1) {
      if ([data.fullName,data.workEmail,data.jobTitle,data.agencyName,data.agencyWebsite,data.country,data.primaryMarket].some(v => !String(v).trim())) return "Please complete every field in About your agency.";
      if (!/^\S+@\S+\.\S+$/.test(data.workEmail)) return "Enter a valid work email address.";
      try { new URL(/^https?:\/\//i.test(data.agencyWebsite) ? data.agencyWebsite : `https://${data.agencyWebsite}`); } catch { return "Enter a valid agency website, such as agency.com."; }
    }
    if (currentStep === 2) {
      const recruiters = Number(data.recruiters);
      if (!Number.isFinite(recruiters) || recruiters < 1 || recruiters > 500) return "Enter a recruiter count between 1 and 500.";
      if (!data.specializations.length) return "Select at least one specialization.";
    }
    if (currentStep === 3) {
      const hours = Number(data.weeklyResearchHours);
      if (data.weeklyResearchHours === "" || !Number.isFinite(hours) || hours < 0 || hours > 168) return "Enter weekly research hours between 0 and 168.";
      if (data.biggestProblem.trim().length < 10) return "Describe your current research challenge in at least 10 characters.";
    }
    if (currentStep === 4 && (!data.contactConsent || !data.privacyConsent)) return "Please confirm both consent statements before submitting.";
    return "";
  }

  function next() { const message = validate(step); if (message) return setError(message); setError(""); setStep(x => x + 1); window.scrollTo({top:0,behavior:"smooth"}); }
  async function submit() {
    const message = validate(4); if (message) return setError(message);
    setError(""); setSubmitting(true);
    const params = new URLSearchParams(location.search);
    const utm = Object.fromEntries(["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].map(k => [k,params.get(k)]).filter(([,v]) => v));
    const agencyWebsite = /^https?:\/\//i.test(data.agencyWebsite) ? data.agencyWebsite : `https://${data.agencyWebsite}`;
    try {
      const response = await fetch("/api/applications",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...data,agencyWebsite,utm})});
      if (response.ok) { localStorage.removeItem("pilot-application"); router.push("/thank-you"); return; }
      const body = await response.json();
      const detail = Array.isArray(body.details) && body.details[0]?.message ? ` ${body.details[0].message}` : "";
      setError(`${body.error || "We could not submit your application."}${detail}`);
    } catch { setError("We could not reach the application service. Please check your connection and try again."); }
    finally { setSubmitting(false); }
  }

  return <><Nav/><main><section><div className="container form">
    <div className="eyebrow">Lancara Founding Pilot application</div>
    <h1>Tell us how your agency currently finds new clients.</h1>
    <p className="lead">This helps us determine whether the pilot can produce useful opportunities for your team.</p>
    <p className="form-note"><strong>Takes approximately 5 minutes.</strong> No payment details required.</p>
    <ol className="form-steps" aria-label="Application steps">{stepNames.map((name,index) => <li className={index + 1 === step ? "current" : index + 1 < step ? "done" : ""} key={name}><span>{index + 1}</span>{name}</li>)}</ol>
    <div className="progress" aria-hidden="true">{[1,2,3,4].map(x => <span className={x <= step ? "on" : ""} key={x}/>)}</div>
    <form onSubmit={e => {e.preventDefault(); if (step < 4) next(); else submit();}} noValidate>
      {step===1&&<><h2>About your agency</h2>{[["fullName","Full name"],["workEmail","Work email"],["jobTitle","Job title"],["agencyName","Agency name"],["agencyWebsite","Agency website"],["country","Country"],["primaryMarket","Primary market served"]].map(([k,l])=><div className="field" key={k}><label htmlFor={k}>{l}</label><input id={k} type={k==="workEmail"?"email":k==="agencyWebsite"?"url":"text"} value={(data as any)[k]} onChange={e=>set(k,e.target.value)} required/></div>)}<div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" value={data.website} onChange={e=>set("website",e.target.value)} tabIndex={-1} autoComplete="off"/></div></>}
      {step===2&&<><h2>Agency profile</h2><div className="field"><label htmlFor="recruiters">Number of recruiters</label><input id="recruiters" type="number" min="1" max="500" value={data.recruiters} onChange={e=>set("recruiters",e.target.value)} required/></div><fieldset className="field checkbox-group"><legend>Main specializations</legend>{["Technology","Software engineering","Data / AI","Cloud / DevOps","Cybersecurity","Product / digital"].map(x=><label key={x}><input type="checkbox" checked={data.specializations.includes(x)} onChange={e=>set("specializations",e.target.checked?[...data.specializations,x]:data.specializations.filter(y=>y!==x))}/>{x}</label>)}</fieldset></>}
      {step===3&&<><h2>Client-acquisition workflow</h2><div className="field"><label htmlFor="weeklyResearchHours">Hours per week spent researching possible client accounts</label><input id="weeklyResearchHours" type="number" min="0" max="168" value={data.weeklyResearchHours} onChange={e=>set("weeklyResearchHours",e.target.value)} required/></div><div className="field"><label htmlFor="biggestProblem">What is the biggest challenge in your current account-research process?</label><textarea id="biggestProblem" rows={6} minLength={10} value={data.biggestProblem} onChange={e=>set("biggestProblem",e.target.value)} required/></div></>}
      {step===4&&<><h2>Pilot readiness</h2>{[["shareIcp","Would you provide your ICP for a sample?"],["shareAccounts","Would you provide 5–20 target accounts?"],["reviewSample","Would you review three manually prepared reports?"],["paidPilot","Would you consider a paid concierge pilot if useful?"]].map(([k,l])=><div className="field" key={k}><label htmlFor={k}>{l}</label><select id={k} value={(data as any)[k]} onChange={e=>set(k,e.target.value)}>{["Yes, immediately","Yes, after a discovery call","Possibly","Not currently"].map(x=><option key={x}>{x}</option>)}</select></div>)}{[["contactConsent","I agree to be contacted about the founding pilot."],["privacyConsent","I have read the privacy notice and understand that applying does not guarantee acceptance."]].map(([k,l])=><label className="consent" key={k}><input type="checkbox" checked={(data as any)[k]} onChange={e=>set(k,e.target.checked)}/>{l}</label>)}</>}
      {error&&<p role="alert" className="warning">{error}</p>}
      <div className="actions">{step>1&&<button type="button" className="button secondary" onClick={()=>{setError("");setStep(x=>x-1)}}>Back</button>}<button className="button" type="submit" disabled={submitting}>{step<4?"Continue":submitting?"Submitting…":"Submit application"}</button></div>
    </form>
  </div></section></main><Footer/></>;
}
