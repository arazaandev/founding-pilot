"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer, Nav } from "@/components/site-shell";

type ValidationTrack = "specialist_recruitment" | "software_it_services" | "other_b2b_service";
type FormData = {
  fullName: string;
  workEmail: string;
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  country: string;
  primaryMarket: string;
  validationTrack: ValidationTrack;
  serviceCapabilities: string[];
  typicalClientProfile: string;
  credibleDeliveryProof: string;
  acquisitionChannels: string[];
  recentAcquisitionSuccess: string;
  paidPilotReadiness: string;
  weeklyFeedbackAvailability: string;
  contactConsent: boolean;
  privacyConsent: boolean;
  website: string;
};

const empty: FormData = {
  fullName: "",
  workEmail: "",
  jobTitle: "",
  companyName: "",
  companyWebsite: "",
  country: "Indonesia",
  primaryMarket: "Indonesia",
  validationTrack: "software_it_services",
  serviceCapabilities: [],
  typicalClientProfile: "",
  credibleDeliveryProof: "",
  acquisitionChannels: [],
  recentAcquisitionSuccess: "",
  paidPilotReadiness: "Possibly, depending on results",
  weeklyFeedbackAvailability: "Yes",
  contactConsent: false,
  privacyConsent: false,
  website: "",
};

const stepNames = ["About your company", "Market and capability", "Client acquisition", "Calibration readiness"];
const trackOptions: Array<[ValidationTrack, string, string]> = [
  ["specialist_recruitment", "Specialist recruitment", "Employer-facing specialist agencies"],
  ["software_it_services", "Software and IT services", "Project and managed-service firms"],
  ["other_b2b_service", "Other B2B service", "Interest signal for manual review"],
];
const capabilities: Record<Exclude<ValidationTrack, "other_b2b_service">, string[]> = {
  specialist_recruitment: ["Technology and digital", "Engineering and manufacturing", "Financial services", "Healthcare and life sciences", "Executive search", "Other specialist recruitment"],
  software_it_services: ["Custom software development", "Data and AI", "Cloud and DevOps", "Cybersecurity", "Systems integration", "Managed IT services", "Other software or IT service"],
};
const acquisitionOptions = ["Referrals and existing relationships", "Founder or team network", "LinkedIn or email outreach", "Events, partnerships or communities", "Inbound enquiries", "Other"];

function normalizeSaved(value: Partial<FormData> & Record<string, unknown>): FormData {
  return {
    ...empty,
    ...value,
    companyName: String(value.companyName || value.agencyName || ""),
    companyWebsite: String(value.companyWebsite || value.agencyWebsite || ""),
    serviceCapabilities: Array.isArray(value.serviceCapabilities) ? value.serviceCapabilities : Array.isArray(value.specializations) ? value.specializations as string[] : [],
    typicalClientProfile: String(value.typicalClientProfile || value.typicalEmployerProfile || ""),
    credibleDeliveryProof: String(value.credibleDeliveryProof || value.credibleRoles || ""),
  };
}

export default function Apply() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(empty);
  const [storageReady, setStorageReady] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("pilot-application");
    const updateFromStorage = window.setTimeout(() => {
      if (saved) {
        try { setData(normalizeSaved(JSON.parse(saved))); } catch { /* Ignore malformed local data. */ }
      }
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(updateFromStorage);
  }, []);
  useEffect(() => { if (storageReady) localStorage.setItem("pilot-application", JSON.stringify(data)); }, [data, storageReady]);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => setData((current) => ({ ...current, [key]: value }));
  function toggle(key: "serviceCapabilities" | "acquisitionChannels", value: string, checked: boolean) {
    set(key, checked ? [...data[key], value] : data[key].filter((item) => item !== value));
  }
  function selectTrack(value: ValidationTrack) {
    setData((current) => ({ ...current, validationTrack: value, serviceCapabilities: [] }));
  }
  function validate(currentStep: number) {
    if (currentStep === 1) {
      if ([data.fullName, data.workEmail, data.jobTitle, data.companyName, data.companyWebsite].some((value) => !value.trim())) return "Please complete every field in About your company.";
      if (!/^\S+@\S+\.\S+$/.test(data.workEmail)) return "Enter a valid work email address.";
      try { new URL(/^https?:\/\//i.test(data.companyWebsite) ? data.companyWebsite : `https://${data.companyWebsite}`); } catch { return "Enter a valid company website, such as company.com."; }
    }
    if (currentStep === 2) {
      if (data.validationTrack !== "other_b2b_service" && !data.serviceCapabilities.length) return "Select at least one service capability.";
      if (data.typicalClientProfile.trim().length < 10) return "Describe your typical client profile in at least 10 characters.";
      const proofMinimum = data.validationTrack === "other_b2b_service" ? 20 : 10;
      if (data.credibleDeliveryProof.trim().length < proofMinimum) return `Describe your services and delivery proof in at least ${proofMinimum} characters.`;
    }
    if (currentStep === 3 && !data.acquisitionChannels.length) return "Select at least one current client-acquisition method.";
    if (currentStep === 4 && (!data.paidPilotReadiness || !data.weeklyFeedbackAvailability)) return "Please answer both readiness questions.";
    if (currentStep === 4 && (!data.contactConsent || !data.privacyConsent)) return "Please confirm both consent statements before submitting.";
    return "";
  }
  function next() {
    const message = validate(step);
    if (message) return setError(message);
    setError("");
    setStep((value) => value + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  async function submit() {
    const message = validate(4);
    if (message) return setError(message);
    setError("");
    setSubmitting(true);
    const params = new URLSearchParams(location.search);
    const utm = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map((key) => [key, params.get(key)]).filter(([, value]) => value));
    const companyWebsite = /^https?:\/\//i.test(data.companyWebsite) ? data.companyWebsite : `https://${data.companyWebsite}`;
    try {
      const response = await fetch("/api/applications", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, companyWebsite, utm }) });
      if (response.ok) {
        localStorage.removeItem("pilot-application");
        router.push("/thank-you");
        return;
      }
      const body = await response.json();
      const detail = Array.isArray(body.details) && body.details[0]?.message ? ` ${body.details[0].message}` : "";
      setError(`${body.error || "We could not submit your application."}${detail}`);
    } catch {
      setError("We could not reach the application service. Please check your connection and try again.");
    } finally { setSubmitting(false); }
  }

  const activeCapabilities = data.validationTrack === "other_b2b_service" ? [] : capabilities[data.validationTrack];
  return (
    <>
      <Nav />
      <main><section className="section"><div className="container form">
        <div className="eyebrow"><span /> Free Opportunity Calibration</div>
        <h1>Can Lancara understand your market?</h1>
        <p className="lead">Tell us enough to assess fit. Detailed ICP configuration, exclusions, account lists, and case studies are collected only after selection.</p>
        <p className="form-note"><strong>Takes approximately 5 minutes.</strong> No payment details, client lists, CRM exports, candidate information, or confidential account data required.</p>
        <ol className="form-steps" aria-label="Application steps">{stepNames.map((name, index) => <li className={index + 1 === step ? "current" : index + 1 < step ? "done" : ""} key={name}><span>{index + 1}</span>{name}</li>)}</ol>
        <div className="progress" aria-hidden="true">{[1, 2, 3, 4].map((value) => <span className={value <= step ? "on" : ""} key={value} />)}</div>
        <form onSubmit={(event) => { event.preventDefault(); if (step < 4) next(); else submit(); }} noValidate>
          {step === 1 && <><h2>About your company</h2>{([['fullName', 'Your name'], ['workEmail', 'Work email'], ['jobTitle', 'Your role'], ['companyName', 'Company name'], ['companyWebsite', 'Company website']] as Array<[keyof FormData, string]>).map(([key, label]) => <div className="field" key={key}><label htmlFor={key}>{label}</label><input id={key} type={key === "workEmail" ? "email" : key === "companyWebsite" ? "url" : "text"} value={String(data[key])} onChange={(event) => set(key, event.target.value as never)} required /></div>)}<div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" value={data.website} onChange={(event) => set("website", event.target.value)} tabIndex={-1} autoComplete="off" /></div></>}
          {step === 2 && <><h2>Market and capability</h2><fieldset className="field checkbox-group"><legend>Current validation track</legend><div className="track-options">{trackOptions.map(([value, label, note]) => <label className="track-option" key={value}><input type="radio" name="validationTrack" value={value} checked={data.validationTrack === value} onChange={() => selectTrack(value)} />{label}<small>{note}</small></label>)}</div></fieldset>{activeCapabilities.length > 0 && <fieldset className="field checkbox-group"><legend>Service capabilities</legend>{activeCapabilities.map((option) => <label key={option}><input type="checkbox" checked={data.serviceCapabilities.includes(option)} onChange={(event) => toggle("serviceCapabilities", option, event.target.checked)} />{option}</label>)}</fieldset>}<div className="field"><label htmlFor="typicalClientProfile">Describe your typical client profile</label><textarea id="typicalClientProfile" rows={4} placeholder="For example: Indonesian financial-services companies with 200–2,000 employees." value={data.typicalClientProfile} onChange={(event) => set("typicalClientProfile", event.target.value)} /></div><div className="field"><label htmlFor="credibleDeliveryProof">{data.validationTrack === "other_b2b_service" ? "Describe your B2B service and strongest delivery proof" : "Services and proof your company can credibly deliver"}</label><textarea id="credibleDeliveryProof" rows={4} placeholder="Relevant capabilities, case-study types, outcomes, sectors, or delivery constraints. Do not name confidential clients." value={data.credibleDeliveryProof} onChange={(event) => set("credibleDeliveryProof", event.target.value)} /></div></>}
          {step === 3 && <><h2>Client acquisition</h2><fieldset className="field checkbox-group"><legend>How does your company usually acquire clients?</legend>{acquisitionOptions.map((option) => <label key={option}><input type="checkbox" checked={data.acquisitionChannels.includes(option)} onChange={(event) => toggle("acquisitionChannels", option, event.target.checked)} />{option}</label>)}</fieldset><div className="field"><label htmlFor="recentAcquisitionSuccess">Briefly describe what worked most recently <span className="muted">(optional)</span></label><textarea id="recentAcquisitionSuccess" rows={5} placeholder="Describe the approach — not the client’s identity or confidential information." value={data.recentAcquisitionSuccess} onChange={(event) => set("recentAcquisitionSuccess", event.target.value)} /></div></>}
          {step === 4 && <><h2>Calibration readiness</h2><div className="field"><label htmlFor="paidPilotReadiness">If the three briefs are relevant, can your team approve a Rp4 million four-week pilot?</label><select id="paidPilotReadiness" value={data.paidPilotReadiness} onChange={(event) => set("paidPilotReadiness", event.target.value)}>{["Yes", "Possibly, depending on results", "Not currently"].map((option) => <option key={option}>{option}</option>)}</select></div><div className="field"><label htmlFor="weeklyFeedbackAvailability">Can someone review opportunities for 20–30 minutes each week?</label><select id="weeklyFeedbackAvailability" value={data.weeklyFeedbackAvailability} onChange={(event) => set("weeklyFeedbackAvailability", event.target.value)}>{["Yes", "Possibly", "No"].map((option) => <option key={option}>{option}</option>)}</select></div><label className="consent"><input type="checkbox" checked={data.contactConsent} onChange={(event) => set("contactConsent", event.target.checked)} />I agree to be contacted about the free calibration and founding pilot.</label><label className="consent"><input type="checkbox" checked={data.privacyConsent} onChange={(event) => set("privacyConsent", event.target.checked)} />I have read the privacy notice and understand that applying does not guarantee selection.</label></>}
          {error && <p role="alert" className="warning">{error}</p>}
          <div className="actions">{step > 1 && <button type="button" className="button secondary" onClick={() => { setError(""); setStep((value) => value - 1); }}>Back</button>}<button className="button" type="submit" disabled={submitting}>{step < 4 ? "Continue" : submitting ? "Submitting…" : "Apply for calibration"}</button></div>
        </form>
      </div></section></main>
      <Footer />
    </>
  );
}
