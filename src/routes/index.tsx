import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Phone, MapPin, Clock, Mail, Facebook, Check, ChevronDown,
  Star, Smartphone, Battery, Wrench, Camera, Unlock, ArrowRight,
} from "lucide-react";
import { translations, type Lang, type Dict } from "@/lib/i18n";
import logoAsset from "@/assets/digitalexpert-logo-sharp.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Réparation cellulaire Sherbrooke — DigitalExpert.ca | Écrans, batteries, garantie 90 jours" },
      { name: "description", content: "Réparation de cellulaire à Sherbrooke depuis 2016. Écrans iPhone dès 109 $, batteries dès 79 $. Diagnostic gratuit, garantie écrite 90 jours. 819-300-1718." },
      { property: "og:title", content: "DigitalExpert.ca — Réparation cellulaire Sherbrooke" },
      { property: "og:description", content: "Écrans, batteries, déverrouillage. Diagnostic gratuit, garantie 90 jours. Le jour même." },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Page,
});

const PHONE = "819-300-1718";
const TEL = "tel:+18193001718";

function Page() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <BrandsStrip label={t.brands} />
        <Services t={t} />
        <HowItWorks t={t} />
        <About t={t} />
        <Reviews t={t} />
        <Faq t={t} />
        <RequestForm t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <MobileCallBar label={t.mobileBar} />
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-graphite text-graphite-foreground transition-shadow ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-6">
        <a href="#top" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {[
            ["services", "#services"],
            ["how", "#how"],
            ["about", "#about"],
            ["reviews", "#reviews"],
            ["faq", "#faq"],
            ["contact", "#contact"],
          ].map(([k, href]) => (
            <a key={k} href={href} className="text-sm text-graphite-foreground/80 hover:text-brand transition-colors">
              {t.nav[k as keyof typeof t.nav]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-md border border-white/15 px-2 py-1.5 font-mono text-xs uppercase tracking-wider text-graphite-foreground/90 hover:border-brand hover:text-brand transition-colors"
            aria-label="Toggle language"
          >
            {lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
            <span className="text-graphite-foreground/40"> / </span>
            <span className="text-graphite-foreground/40">{lang === "fr" ? "EN" : "FR"}</span>
          </button>
          <a
            href={TEL}
            className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2 font-display text-xs font-bold text-brand-foreground hover:brightness-110 transition md:text-sm md:px-4"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">{t.nav.call}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <img
      src={logoAsset.url}
      alt="DigitalExpert.ca"
      className="h-14 w-auto object-contain md:h-20"
      style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.85))" }}
      width={360}
      height={80}
      loading="eager"
    />
  );
}

/* ---------- Hero ---------- */
function Hero({ t }: { t: Dict }) {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 cube-cascade opacity-40" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-12 pb-16 md:px-6 md:pt-20 md:pb-24 lg:grid-cols-12 lg:gap-8 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {t.hero.title1}
            <br />
            <span className="text-brand">{t.hero.title2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink/70 md:text-lg">{t.hero.subtitle}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3.5 font-display text-base font-bold text-brand-foreground shadow-lg shadow-brand/25 hover:brightness-110 transition"
            >
              <Phone size={18} /> {t.hero.callBtn}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink px-5 py-3.5 font-display text-base font-bold text-ink hover:bg-ink hover:text-paper transition"
            >
              {t.hero.seeServices} <ArrowRight size={18} />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-ash">
            {t.hero.trust.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-ash/40">·</span>}
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-brand" /> {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center">
          <RepairTicket t={t} hero />
        </div>
      </div>
    </section>
  );
}

function RepairTicket({ t, hero = false }: { t: Dict; hero?: boolean }) {
  return (
    <div className={`relative w-full max-w-sm ${hero ? "ticket-float" : ""}`}>
      <div className="relative rounded-md bg-card shadow-2xl shadow-black/15 ring-1 ring-black/5">
        <div className="flex items-center justify-between rounded-t-md bg-graphite px-5 py-3 text-graphite-foreground">
          <span className="font-display text-xs font-bold uppercase tracking-widest">{t.ticket.header}</span>
          <span className="font-mono text-xs text-brand">{t.ticket.number}</span>
        </div>
        <div className="space-y-3 px-5 py-5">
          <TicketRow label={t.ticket.device} value={t.ticket.deviceVal} />
          <TicketRow label={t.ticket.issue} value={t.ticket.issueVal} />
          <TicketRow label={t.ticket.dropoff} value={t.ticket.dropoffVal} />
          <TicketRow label={t.ticket.ready} value={t.ticket.readyVal} />
          <TicketRow label={t.ticket.warranty} value={t.ticket.warrantyVal} />
          <div className="border-t border-dashed border-ink/15 pt-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ash">{t.ticket.price}</p>
          </div>
        </div>
        <div className="perforated-bottom h-2" />
      </div>
      <div className="stamp absolute -right-2 top-16 z-10 rotate-[-12deg] text-sm md:-right-4 md:top-20 md:text-base">
        {t.ticket.stamp}
      </div>
    </div>
  );
}

function TicketRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink/15 pb-2 last:border-0 last:pb-0">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ash">{label}</span>
      <span className="font-display text-sm font-bold text-ink">{value}</span>
    </div>
  );
}

/* ---------- Brands ---------- */
function BrandsStrip({ label }: { label: string }) {
  const brands = ["Apple", "Samsung", "Google Pixel", "Motorola", "LG", "Huawei"];
  return (
    <section className="bg-graphite py-5 text-graphite-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 md:px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite-foreground/50">
          {label}
        </span>
        {brands.map((b) => (
          <span key={b} className="font-display text-sm font-bold tracking-wide text-graphite-foreground/85">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICE_ICONS = [Smartphone, Battery, Wrench, Camera, Unlock];

function Services({ t }: { t: Dict }) {
  return (
    <section id="services" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 reveal">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">{t.services.kicker}</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">{t.services.title}</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.list.map((s, i) => {
            const Icon = SERVICE_ICONS[i] ?? Wrench;
            return (
              <article
                key={s.n}
                className="reveal group flex flex-col rounded-md bg-card ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <header className="flex items-center justify-between rounded-t-md bg-graphite px-5 py-3 text-graphite-foreground">
                  <span className="font-display text-[11px] font-bold uppercase tracking-widest">
                    {translations.fr === t ? "Bon de réparation" : "Repair ticket"}
                  </span>
                  <span className="font-mono text-xs text-brand">N° {s.n}</span>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-brand/10 p-2 text-brand">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-xl font-extrabold leading-tight">{s.name}</h3>
                  </div>
                  <p className="text-sm text-ink/70">{s.desc}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-ink/15 pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ash">Prix / Price</span>
                    <span className="font-display text-base font-extrabold text-brand">{s.price}</span>
                  </div>
                </div>
              </article>
            );
          })}

          {/* CTA card */}
          <article className="reveal flex flex-col justify-between rounded-md bg-graphite p-6 text-graphite-foreground">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{PHONE}</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">
                {t === translations.fr ? "Pas sûr du problème ? On regarde ça gratuitement." : "Not sure what's wrong? We'll look for free."}
              </h3>
            </div>
            <a
              href={TEL}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-display text-sm font-bold text-brand-foreground hover:brightness-110 transition"
            >
              <Phone size={16} /> {t.hero.callBtn}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks({ t }: { t: Dict }) {
  return (
    <section id="how" className="relative bg-graphite py-16 text-graphite-foreground md:py-24">
      <div className="absolute inset-0 cube-pattern" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="reveal max-w-2xl font-display text-3xl font-extrabold md:text-5xl">{t.how.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((s) => (
            <div key={s.n} className="reveal rounded-md border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand font-display text-xl font-extrabold text-brand-foreground">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold">{s.t}</h3>
              <p className="mt-2 text-sm text-graphite-foreground/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About({ t }: { t: Dict }) {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">{t.about.title}</h2>
          <p className="mt-5 text-base text-ink/75 md:text-lg">{t.about.p1}</p>
          <p className="mt-4 text-base text-ink/75 md:text-lg">{t.about.p2}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            {t.about.stats.map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-ash">{s.l}</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-brand md:text-3xl">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md ring-1 ring-black/5 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-graphite via-ink to-graphite" />
            <div className="absolute inset-0 cube-pattern opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-md bg-card/95 px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink/70 backdrop-blur">
              {t.about.photoAlt}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
function Reviews({ t }: { t: Dict }) {
  return (
    <section id="reviews" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="reveal flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">{t.reviews.title}</h2>
          <p className="hidden font-mono text-xs uppercase tracking-wider text-ash sm:block">
            4.7 / 5 · Google
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.reviews.list.map((r, i) => (
            <figure key={i} className="reveal flex flex-col rounded-md bg-card p-6 ring-1 ring-black/5 shadow-sm">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-ink/80">"{r.q}"</blockquote>
              <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-wider text-ash">
                — {r.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq({ t }: { t: Dict }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="reveal font-display text-3xl font-extrabold md:text-5xl">{t.faq.title}</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal">
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
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-ink/70 md:text-base">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Request Form ---------- */
function RequestForm({ t }: { t: Dict }) {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Demande de réparation — ${fd.get("device") || ""}`);
    const body = encodeURIComponent(
      `Nom / Name: ${fd.get("name")}\nTéléphone / Phone: ${fd.get("phone")}\nAppareil / Device: ${fd.get("device")}\n\n${fd.get("problem")}`
    );
    window.location.href = `mailto:info@digitalexpert.ca?subject=${subject}&body=${body}`;
    setSent(true);
    formRef.current?.reset();
  };

  return (
    <section id="request" className="bg-paper py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-5">
        <div className="reveal lg:col-span-2">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">{t.form.title}</h2>
          <p className="mt-3 text-sm text-ink/70">{t.form.kicker}</p>
          <a
            href={TEL}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-3 font-display text-sm font-bold text-brand-foreground hover:brightness-110 transition"
          >
            <Phone size={16} /> {PHONE}
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="reveal space-y-4 rounded-md bg-card p-6 ring-1 ring-black/5 shadow-sm lg:col-span-3"
        >
          <Field label={t.form.name} name="name" required />
          <Field label={t.form.phone} name="phone" type="tel" required />
          <Field label={t.form.device} name="device" placeholder="iPhone 14, Galaxy S23..." required />
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ash">{t.form.problem}</label>
            <textarea
              name="problem"
              required
              rows={4}
              className="mt-1.5 w-full rounded-md border border-ink/15 bg-background px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ash">{t.form.photo}</label>
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
            {t.form.submit}
          </button>
          {sent && (
            <p className="text-sm font-medium text-brand">{t.form.sent}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
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

/* ---------- Contact ---------- */
function Contact({ t }: { t: Dict }) {
  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="reveal font-display text-3xl font-extrabold md:text-5xl">{t.contact.title}</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <InfoBlock icon={<MapPin size={18} />} label={t.contact.addressLabel}>
              1394 rue Denault<br />Sherbrooke, Québec J1H 2P8
            </InfoBlock>
            <InfoBlock icon={<Phone size={18} />} label={t.contact.phoneLabel}>
              <a href={TEL} className="font-display text-xl font-extrabold text-brand hover:underline">
                {PHONE}
              </a>
            </InfoBlock>
            <InfoBlock icon={<Clock size={18} />} label={t.contact.hoursLabel}>
              <ul className="space-y-1 font-mono text-sm">
                {t.contact.hours.map((h) => (
                  <li key={h.d} className="flex justify-between gap-6">
                    <span className="text-ink/70">{h.d}</span>
                    <span className="text-ink">{h.h}</span>
                  </li>
                ))}
              </ul>
            </InfoBlock>
            <InfoBlock icon={<Mail size={18} />} label={t.contact.emailLabel}>
              <a href="mailto:info@digitalexpert.ca" className="hover:text-brand">
                info@digitalexpert.ca
              </a>
            </InfoBlock>
          </div>

          <div className="reveal overflow-hidden rounded-md ring-1 ring-black/5 shadow-md">
            <iframe
              title="DigitalExpert.ca map"
              src="https://www.google.com/maps?q=1394+rue+Denault+Sherbrooke+QC&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ash">{label}</p>
        <div className="mt-1 text-sm text-ink/90 md:text-base">{children}</div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer({ t }: { t: Dict }) {
  return (
    <footer className="bg-graphite py-10 text-graphite-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="font-display text-base font-extrabold">
              DigitalExpert<span className="text-brand">.ca</span>
            </p>
            <p className="text-xs text-graphite-foreground/60">{t.footer.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href={TEL} className="inline-flex items-center gap-2 hover:text-brand">
            <Phone size={14} /> {PHONE}
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <Facebook size={14} /> {t.footer.facebook}
          </a>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-wider text-graphite-foreground/50">
          © {new Date().getFullYear()} DigitalExpert.ca · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

/* ---------- Mobile call bar ---------- */
function MobileCallBar({ label }: { label: string }) {
  return (
    <a
      href={TEL}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-brand py-3.5 font-display text-sm font-bold text-brand-foreground shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.4)] md:hidden"
    >
      <Phone size={16} /> {label}
    </a>
  );
}
