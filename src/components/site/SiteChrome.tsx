import { Phone, Facebook, Instagram } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import logoAsset from "@/assets/digitalexpert-logo-v3.png.asset.json";
import { SERVICES, SERVICE_ORDER } from "@/lib/services-data";
import { OpenNowBadge } from "./OpenNowBadge";
import { ThemeToggle } from "./ThemeToggle";

const PHONE = "819-300-1718";
const TEL = "tel:+18193001718";
const FB = "https://www.facebook.com/digitalexpert.ca";
const IG = "https://www.instagram.com/digitalexpert.ca/";

interface Props {
  lang: Lang;
}

export function SiteHeader({ lang }: Props) {
  const homeHref = lang === "fr" ? "/" : "/en";
  const otherLangHref = lang === "fr" ? "/en" : "/";
  const requestHref = lang === "fr" ? "/demande-reparation" : "/en/repair-request";
  const labels = lang === "fr"
    ? { home: "Accueil", services: "Services", request: "Demande", call: "Appeler" }
    : { home: "Home", services: "Services", request: "Request", call: "Call" };

  return (
    <header className="sticky top-0 z-50 bg-graphite text-graphite-foreground shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-6">
        <a href={homeHref} className="flex items-center">
          <img
            src={logoAsset.url}
            alt="DigitalExpert.ca"
            className="h-14 w-auto object-contain md:h-16"
            width={1600}
            height={392}
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          <a href={homeHref} className="text-sm text-graphite-foreground/80 hover:text-brand transition-colors">
            {labels.home}
          </a>
          <div className="group relative">
            <button className="text-sm text-graphite-foreground/80 hover:text-brand transition-colors">
              {labels.services}
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-64 rounded-md bg-graphite p-2 opacity-0 shadow-xl ring-1 ring-white/10 transition-all group-hover:visible group-hover:opacity-100">
              {SERVICE_ORDER.map((key) => {
                const s = SERVICES[key][lang];
                const href = lang === "fr" ? `/services/${s.slug}` : `/en/services/${s.slug}`;
                return (
                  <a
                    key={key}
                    href={href}
                    className="block rounded px-3 py-2 text-sm text-graphite-foreground/85 hover:bg-white/5 hover:text-brand"
                  >
                    {s.navLabel}
                  </a>
                );
              })}
            </div>
          </div>
          <a
            href={requestHref}
            className="text-sm text-graphite-foreground/80 hover:text-brand transition-colors"
          >
            {labels.request}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={FB}
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="rounded-md border border-white/15 p-2 text-graphite-foreground/80 hover:border-brand hover:text-brand transition-colors"
          >
            <Facebook size={18} />
          </a>
          <a
            href={IG}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="rounded-md border border-white/15 p-2 text-graphite-foreground/80 hover:border-brand hover:text-brand transition-colors"
          >
            <Instagram size={18} />
          </a>
          <ThemeToggle lang={lang} />
          <a
            href={otherLangHref}
            className="rounded-md border border-white/15 px-2 py-1.5 font-mono text-xs uppercase tracking-wider text-graphite-foreground/90 hover:border-brand hover:text-brand transition-colors"
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </a>
          <a
            href={TEL}
            className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2 font-display text-xs font-bold text-brand-foreground hover:brightness-110 transition md:text-sm md:px-4"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">{labels.call}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }: Props) {
  const tagline = lang === "fr"
    ? "Réparation cellulaire à Sherbrooke depuis 2016."
    : "Cell phone repair in Sherbrooke since 2016.";
  const rights = lang === "fr" ? "Tous droits réservés." : "All rights reserved.";

  return (
    <footer className="bg-graphite py-10 text-graphite-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="DigitalExpert.ca" className="h-12 w-auto" width={1600} height={392} />
          <div>
            <p className="font-display text-base font-extrabold">
              DigitalExpert<span className="text-brand">.ca</span>
            </p>
            <p className="text-xs text-graphite-foreground/60">{tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href={TEL} className="inline-flex items-center gap-2 hover:text-brand">
            <Phone size={14} /> {PHONE}
          </a>
          <a href={FB} target="_blank" rel="noopener" aria-label="Facebook" className="inline-flex items-center gap-2 hover:text-brand">
            <Facebook size={14} /> Facebook
          </a>
          <a href={IG} target="_blank" rel="noopener" aria-label="Instagram" className="inline-flex items-center gap-2 hover:text-brand">
            <Instagram size={14} /> Instagram
          </a>
          <button
            type="button"
            onClick={() => {
              try {
                localStorage.removeItem("de-cookie-consent");
                window.dispatchEvent(new CustomEvent("de-open-cookie-consent"));
              } catch {}
            }}
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            {lang === "fr" ? "Préférences cookies" : "Cookie preferences"}
          </button>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-wider text-graphite-foreground/50">
          © {new Date().getFullYear()} DigitalExpert.ca · {rights}
        </p>
      </div>
    </footer>
  );
}

export function MobileCallBar({ lang }: Props) {
  const label = lang === "fr" ? "Appeler maintenant — 819-300-1718" : "Call now — 819-300-1718";
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="flex items-center justify-center bg-graphite/95 px-3 py-1.5 backdrop-blur">
        <OpenNowBadge lang={lang} size="sm" />
      </div>
      <a
        href={TEL}
        className="flex items-center justify-center gap-2 bg-brand py-3.5 font-display text-sm font-bold text-brand-foreground shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.4)]"
      >
        <Phone size={16} /> {label}
      </a>
    </div>
  );
}
