import { useRef, useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { SiteHeader, SiteFooter, MobileCallBar } from "./SiteChrome";

const PHONE = "819-300-1718";
const TEL = "tel:+18193001718";

const COPY = {
  fr: {
    h1: "Demande de réparation",
    intro:
      "Décrivez votre problème : on vous rappelle dans la journée avec un prix ferme et un délai. C'est gratuit et sans engagement.",
    callKicker: "Vous préférez appeler ?",
    name: "Nom",
    phone: "Téléphone",
    device: "Modèle d'appareil",
    devicePlaceholder: "iPhone 14, Galaxy S23…",
    problem: "Description du problème",
    photo: "Photo du dommage (facultatif)",
    submit: "Envoyer la demande",
    sent: "Demande envoyée. On vous rappelle dans la journée.",
    contactTitle: "Ou passez en boutique",
    address: "1394 rue Denault, Sherbrooke QC J1H 2P8",
    hours: "Lun–Ven 10 h–18 h · Sam 10 h–17 h",
  },
  en: {
    h1: "Repair Request",
    intro:
      "Describe your issue: we'll call you back within the day with a firm price and timing. Free, no obligation.",
    callKicker: "Prefer to call?",
    name: "Name",
    phone: "Phone",
    device: "Device model",
    devicePlaceholder: "iPhone 14, Galaxy S23…",
    problem: "Problem description",
    photo: "Damage photo (optional)",
    submit: "Send request",
    sent: "Request sent. We'll call you back within the day.",
    contactTitle: "Or walk in to our shop",
    address: "1394 rue Denault, Sherbrooke QC J1H 2P8",
    hours: "Mon–Fri 10 am–6 pm · Sat 10 am–5 pm",
  },
} as const;

interface Props {
  lang: Lang;
}

export function RepairRequestPage({ lang }: Props) {
  const t = COPY[lang];
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `${lang === "fr" ? "Demande de réparation" : "Repair request"} — ${fd.get("device") || ""}`
    );
    const body = encodeURIComponent(
      `${lang === "fr" ? "Nom" : "Name"}: ${fd.get("name")}\n${lang === "fr" ? "Téléphone" : "Phone"}: ${fd.get("phone")}\n${lang === "fr" ? "Appareil" : "Device"}: ${fd.get("device")}\n\n${fd.get("problem")}`
    );
    window.location.href = `mailto:info@digitalexpert.ca?subject=${subject}&body=${body}`;
    setSent(true);
    formRef.current?.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader lang={lang} />

      <main>
        <section className="relative overflow-hidden bg-paper">
          <div className="absolute inset-0 cube-cascade opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-4 pt-12 pb-8 md:px-6 md:pt-20 md:pb-12">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              {t.h1}
            </h1>
            <p className="mt-5 text-base text-ink/70 md:text-lg">{t.intro}</p>
            <p className="mt-4 text-sm text-ink/60">
              {t.callKicker}{" "}
              <a href={TEL} className="font-bold text-brand hover:underline">
                <Phone size={14} className="mb-1 inline" /> {PHONE}
              </a>
            </p>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="space-y-4 rounded-md bg-card p-6 ring-1 ring-black/5 shadow-sm md:p-8"
            >
              <Field label={t.name} name="name" required />
              <Field label={t.phone} name="phone" type="tel" required />
              <Field label={t.device} name="device" placeholder={t.devicePlaceholder} required />
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-ash">
                  {t.problem}
                </label>
                <textarea
                  name="problem"
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-md border border-ink/15 bg-background px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-ash">
                  {t.photo}
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="mt-1.5 block w-full text-sm text-ink/70 file:mr-3 file:rounded-md file:border-0 file:bg-ink file:px-3 file:py-2 file:font-display file:text-xs file:font-bold file:text-paper hover:file:brightness-110"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-brand px-5 py-3.5 font-display text-base font-bold text-brand-foreground hover:brightness-110 transition"
              >
                {t.submit}
              </button>
              {sent && <p className="text-sm font-medium text-brand">{t.sent}</p>}
            </form>
          </div>
        </section>

        <section className="bg-paper py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="font-display text-xl font-extrabold md:text-2xl">{t.contactTitle}</h2>
            <div className="mt-4 space-y-2 text-sm text-ink/80">
              <p className="flex items-center gap-2"><MapPin size={16} className="text-brand" /> {t.address}</p>
              <p className="flex items-center gap-2"><Clock size={16} className="text-brand" /> {t.hours}</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-brand" /> <a href="mailto:info@digitalexpert.ca" className="hover:text-brand">info@digitalexpert.ca</a></p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
      <MobileCallBar lang={lang} />
    </div>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-wider text-ash">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-ink/15 bg-background px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
