type Input = {
  fullName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  validationTrack: string;
  serviceCapabilities: string[];
  paidPilotReadiness: string;
  weeklyFeedbackAvailability: string;
};

const esc = (value: string) => value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]!);
const trackLabel = (value: string) => ({ specialist_recruitment: "Specialist recruitment", software_it_services: "Software and IT services", other_b2b_service: "Other B2B service" })[value] || value;

export async function sendApplicationEmails(input: Input) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const admin = process.env.ADMIN_EMAIL;
  if (!apiKey || !from) {
    console.info("Email adapter: console", { applicant: input.workEmail, admin });
    return;
  }
  const messages = [
    {
      from,
      to: [input.workEmail],
      subject: "We received your Lancara calibration application",
      html: `<p>Hi ${esc(input.fullName)},</p><p>Thank you for applying for a free Lancara Opportunity Calibration. We will manually review whether a customer-specific opportunity-intelligence playbook can be configured around ${esc(input.companyName)}’s market.</p><p>Selected companies will be invited to a 30-minute configuration session. Applying does not guarantee selection.</p>`,
    },
    ...(admin ? [{
      from,
      to: [admin],
      subject: `New Lancara calibration application: ${input.companyName}`,
      html: `<p><strong>${esc(input.fullName)}</strong>, ${esc(input.jobTitle)} at ${esc(input.companyName)}</p><p>Validation track: ${esc(trackLabel(input.validationTrack))}</p><p>Capabilities: ${esc(input.serviceCapabilities.join(", ") || "See service description")}</p><p>Rp4m readiness: ${esc(input.paidPilotReadiness)}</p><p>Weekly feedback: ${esc(input.weeklyFeedbackAvailability)}</p><p>Qualification is manual; review the application in the admin workspace.</p>`,
    }] : []),
  ];
  for (const message of messages) {
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(message) });
    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Email delivery failed (${response.status}): ${detail}`);
    }
  }
}
