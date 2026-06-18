import { Phone, Check, ArrowRight, ChevronDown, MapPin, Clock, Mail } from "lucide-react";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import type { ServiceContent } from "@/lib/services-data";
import { SiteHeader, SiteFooter, MobileCallBar } from "./SiteChrome";

const PHONE = "819-300-1718";
const TEL = "tel:+18193001718";
const EMAIL = "info@digitalexpert.ca";

interface Props {
  lang: Lang;
  service: ServiceContent;
}

export function ServicePage({ lang, service }: Props) {
  const cta = lang === "fr" ? "Appeler maintenant" : "Call now";
  const requestHref = lang === "fr" ? "/demande-reparation" : "/en/repair-request";
  const requestLabel = lang === "fr" ? "Faire une demande" : "Make a request";
  const includedLabel = lang === "fr" ? "Modèles couverts" : "Models covered";
  const whyLabel = lang === "fr" ? "Pourquoi DigitalExpert.ca" : "Why DigitalExpert.ca";
  const faqLabel = lang === "fr" ? "Questions fréquentes" : "Frequently asked questions";
  const priceLabel = lang === "fr" ? "À partir de" : "Starting at";
  const ctaSectionTitle = lang === "fr"
    ? "Prêt à faire réparer votre téléphone ?"
    : "Ready to get your phone fixed?";
  const ctaSectionSub = lang === "fr"
    ? "Passez en boutique au centre-ville de Sherbrooke ou appelez pour un prix ferme avant de commencer."
    : "Walk in to our shop in downtown Sherbrooke, or call for a firm price before we start.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader lang={lang} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div className="absolute inset-0 cube-cascade opacity-40" aria-hidden />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-12 md:px-6 md:pt-20 md:pb-16">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-ink/70 md:text-lg">{service.intro}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3.5 font-display text-base font-bold text-brand-foreground shadow-lg shadow-brand/25 hover:brightness-110 transition"
              >
                <Phone size={18} /> {cta}
              </a>
              <a
                href={requestHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink px-5 py-3.5 font-display text-base font-bold text-ink hover:bg-ink hover:text-paper transition"
              >
                {requestLabel} <ArrowRight size={18} />
              </a>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-ash">
              <span className="text-brand">{priceLabel}</span> {service.priceFrom}
            </p>
          </div>
        </section>

        {/* Bullets / why */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display text-2xl font-extrabold md:text-4xl">{whyLabel}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-md bg-card p-5 ring-1 ring-black/5 shadow-sm">
                  <Check className="mt-0.5 shrink-0 text-brand" size={18} />
                  <span className="text-sm text-ink/80 md:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Models */}
        <section className="relative bg-graphite py-16 text-graphite-foreground md:py-24">
          <div className="absolute inset-0 cube-pattern" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display text-2xl font-extrabold md:text-4xl">{includedLabel}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.models.map((m) => (
                <li key={m} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
                  <Check size={14} className="shrink-0 text-brand" />
                  <span className="text-sm text-graphite-foreground/90">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="font-display text-2xl font-extrabold md:text-4xl">{faqLabel}</h2>
            <FaqList items={service.faq} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-md bg-graphite p-8 text-graphite-foreground md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-2xl font-extrabold md:text-4xl">{ctaSectionTitle}</h2>
                <p className="mt-4 text-graphite-foreground/70">{ctaSectionSub}</p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={TEL}
                    className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 font-display text-base font-bold text-brand-foreground hover:brightness-110 transition"
                  >
                    <Phone size={18} /> {PHONE}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-md border-2 border-white/20 px-6 py-3.5 font-display text-base font-bold text-graphite-foreground hover:border-brand hover:text-brand transition"
                  >
                    <Mail size={18} /> {EMAIL}
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-graphite-foreground/60">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> 1394 rue Denault, Sherbrooke</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {lang === "fr" ? "Lun–Ven 10 h–18 h" : "Mon–Fri 10 am–6 pm"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
      <MobileCallBar lang={lang} />
    </div>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-bold md:text-lg">{item.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-sm text-ink/70 md:text-base">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
