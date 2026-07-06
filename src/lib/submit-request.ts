import type { Lang } from "./i18n";

/**
 * Paste your Make.com custom webhook URL here (Scenario → Webhooks → Custom webhook).
 * The form posts multipart/form-data with fields:
 *   name, phone, device, problem, photo (file, optional), lang, page, submittedAt
 * From Make you can route it anywhere: SMS via Twilio, email, QuickBooks, Google Sheet.
 *
 * While this is empty, the form falls back to opening the visitor's mail app (mailto),
 * which silently loses leads on phones with no mail app configured — set it up early.
 */
export const FORM_WEBHOOK_URL = "";

export type SubmitResult = "sent" | "mailto" | "error";

export async function submitRepairRequest(fd: FormData, lang: Lang): Promise<SubmitResult> {
  if (FORM_WEBHOOK_URL) {
    try {
      fd.set("lang", lang);
      fd.set("page", typeof window !== "undefined" ? window.location.pathname : "");
      fd.set("submittedAt", new Date().toISOString());
      // Drop empty file inputs so Make doesn't receive a zero-byte part.
      const photo = fd.get("photo");
      if (photo instanceof File && photo.size === 0) fd.delete("photo");

      const res = await fetch(FORM_WEBHOOK_URL, { method: "POST", body: fd });
      return res.ok ? "sent" : "error";
    } catch {
      return "error";
    }
  }

  // Fallback: open the visitor's email client prefilled.
  const subject = encodeURIComponent(
    `${lang === "fr" ? "Demande de réparation" : "Repair request"} — ${fd.get("device") || ""}`,
  );
  const body = encodeURIComponent(
    `${lang === "fr" ? "Nom" : "Name"}: ${fd.get("name")}\n` +
      `${lang === "fr" ? "Téléphone" : "Phone"}: ${fd.get("phone")}\n` +
      `${lang === "fr" ? "Appareil" : "Device"}: ${fd.get("device")}\n\n${fd.get("problem")}`,
  );
  window.location.href = `mailto:info@digitalexpert.ca?subject=${subject}&body=${body}`;
  return "mailto";
}

export const SUBMIT_COPY = {
  fr: {
    sending: "Envoi en cours…",
    sent: "Demande reçue. On vous rappelle dans la journée.",
    mailto: "Votre application courriel va s'ouvrir. Si rien ne se passe, appelez-nous au 819-300-1718.",
    error: "L'envoi a échoué. Appelez-nous au 819-300-1718 ou réessayez.",
  },
  en: {
    sending: "Sending…",
    sent: "Request received. We'll call you back within the day.",
    mailto: "Your email app will open. If nothing happens, call us at 819-300-1718.",
    error: "Sending failed. Call us at 819-300-1718 or try again.",
  },
} as const;
