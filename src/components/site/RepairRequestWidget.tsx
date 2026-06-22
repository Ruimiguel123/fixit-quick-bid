import { useEffect, useRef, useState, type FormEvent } from "react";
import { Wrench, X, Phone } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const PHONE = "819-300-1718";
const TEL = "tel:+18193001718";

const COPY = {
  fr: {
    open: "Demande de réparation",
    title: "Demande rapide",
    subtitle: "On vous rappelle dans la journée avec un prix ferme.",
    name: "Nom",
    phone: "Téléphone",
    device: "Appareil",
    devicePh: "iPhone 14, Galaxy S23…",
    problem: "Problème",
    submit: "Envoyer",
    sent: "Demande envoyée. On vous rappelle bientôt.",
    or: "ou appelez",
    close: "Fermer",
  },
  en: {
    open: "Repair request",
    title: "Quick request",
    subtitle: "We'll call you back today with a firm price.",
    name: "Name",
    phone: "Phone",
    device: "Device",
    devicePh: "iPhone 14, Galaxy S23…",
    problem: "Problem",
    submit: "Send",
    sent: "Request sent. We'll call you soon.",
    or: "or call",
    close: "Close",
  },
} as const;

export function RepairRequestWidget({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `${lang === "fr" ? "Demande de réparation" : "Repair request"} — ${fd.get("device") || ""}`,
    );
    const body = encodeURIComponent(
      `${t.name}: ${fd.get("name")}\n${t.phone}: ${fd.get("phone")}\n${t.device}: ${fd.get("device")}\n\n${fd.get("problem")}`,
    );
    window.location.href = `mailto:info@digitalexpert.ca?subject=${subject}&body=${body}`;
    setSent(true);
    formRef.current?.reset();
  };

  return (
    <div className="fixed right-4 z-[60] bottom-24 md:bottom-6">
      {open && (
        <div className="mb-3 w-[min(92vw,360px)] overflow-hidden rounded-lg bg-card text-card-foreground shadow-2xl ring-1 ring-black/10 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between bg-graphite px-4 py-3 text-graphite-foreground">
            <div>
              <p className="font-display text-sm font-extrabold uppercase tracking-wider">{t.title}</p>
              <p className="mt-0.5 text-[11px] text-graphite-foreground/70">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="rounded-md p-1 text-graphite-foreground/80 hover:bg-white/10 hover:text-brand"
            >
              <X size={18} />
            </button>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="space-y-3 p-4">
            <WField label={t.name} name="name" required />
            <WField label={t.phone} name="phone" type="tel" required />
            <WField label={t.device} name="device" placeholder={t.devicePh} required />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-ash">
                {t.problem}
              </label>
              <textarea
                name="problem"
                required
                rows={3}
                className="mt-1 w-full rounded-md border border-ink/15 bg-background px-2.5 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-brand px-4 py-2.5 font-display text-sm font-bold text-brand-foreground hover:brightness-110 transition"
            >
              {t.submit}
            </button>
            {sent && <p className="text-xs font-medium text-brand">{t.sent}</p>}
            <p className="pt-1 text-center text-[11px] text-ink/60">
              {t.or}{" "}
              <a href={TEL} className="font-bold text-brand hover:underline">
                <Phone size={11} className="mb-0.5 inline" /> {PHONE}
              </a>
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.open}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full bg-brand px-4 py-3 font-display text-sm font-bold text-brand-foreground shadow-xl shadow-brand/30 hover:brightness-110 transition"
      >
        <Wrench size={18} />
        <span className="hidden sm:inline">{t.open}</span>
      </button>
    </div>
  );
}

function WField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-wider text-ash">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-ink/15 bg-background px-2.5 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
