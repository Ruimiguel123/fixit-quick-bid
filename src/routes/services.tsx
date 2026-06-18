import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Smartphone,
  Battery,
  Wrench,
  Camera,
  Unlock,
  Phone,
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Mail,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DigitalExpert.ca | Sherbrooke" },
      {
        name: "description",
        content:
          "Réparation iPhone, Samsung & Google Pixel à Sherbrooke. Écrans, batteries, caméras. Diagnostic gratuit, garantie 90 jours. 819-300-1718.",
      },
      {
        property: "og:title",
        content: "Nos services — DigitalExpert.ca",
      },
      {
        property: "og:description",
        content:
          "Écrans, batteries, caméras et plus. Diagnostic gratuit, garantie 90 jours.",
      },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const PHONE = "819-300-1718";
const TEL = "tel:+18193001718";
const ADDRESS = "1394 rue Denault, Sherbrooke QC";
const EMAIL = "info@digitalexpert.ca";

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-graphite text-graphite-foreground shadow-lg shadow-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link
            to="/"
            className="font-display text-lg font-extrabold tracking-tight text-graphite-foreground hover:text-brand transition-colors"
          >
            DigitalExpert.ca
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              to="/services"
              className="text-sm font-medium text-brand transition-colors"
            >
              Services
            </Link>
            <Link
              to="/"
              className="text-sm text-graphite-foreground/80 hover:text-brand transition-colors"
            >
              Accueil
            </Link>
            <a
              href="mailto:info@digitalexpert.ca"
              className="text-sm text-graphite-foreground/80 hover:text-brand transition-colors"
            >
              Contact
            </a>
          </nav>
          <a
            href={TEL}
            className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2 font-display text-xs font-bold text-brand-foreground hover:brightness-110 transition md:text-sm md:px-4"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div className="absolute inset-0 cube-cascade opacity-40" aria-hidden />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 md:px-6 md:pt-20 md:pb-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">
                Tous nos services
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Réparation
                <br />
                <span className="text-brand">cellulaire</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-ink/70 md:text-lg">
                Depuis 2016, on répare vos téléphones avec des pièces de qualité
                et une garantie écrite de 90 jours. Diagnostic gratuit avant
                chaque réparation.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3.5 font-display text-base font-bold text-brand-foreground shadow-lg shadow-brand/25 hover:brightness-110 transition"
                >
                  <Phone size={18} /> Appeler maintenant
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink px-5 py-3.5 font-display text-base font-bold text-ink hover:bg-ink hover:text-paper transition"
                >
                  Voir les prix <ArrowRight size={18} />
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-ash">
                {[
                  "Diagnostic gratuit",
                  "Garantie 90 jours",
                  "Le jour même",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-ash/40">·</span>}
                    <span className="flex items-center gap-1.5">
                      <Check size={14} className="text-brand" /> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section id="pricing" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">
                  Tarification transparente
                </p>
                <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
                  Nos réparations
                </h2>
              </div>
              <p className="text-sm text-ink/60">
                Prix indicatifs — peut varier selon le modèle
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.name}
                    className="group flex flex-col rounded-md bg-card ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                  >
                    <header className="flex items-center justify-between rounded-t-md bg-graphite px-5 py-3 text-graphite-foreground">
                      <span className="font-display text-[11px] font-bold uppercase tracking-widest">
                        Service
                      </span>
                      <span className="font-mono text-xs text-brand">
                        N° {String(i + 1).padStart(2, "0")}
                      </span>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-5">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md bg-brand/10 p-2 text-brand">
                          <Icon size={20} />
                        </div>
                        <h3 className="font-display text-xl font-extrabold leading-tight">
                          {s.name}
                        </h3>
                      </div>
                      <p className="text-sm text-ink/70">{s.desc}</p>
                      <ul className="space-y-1.5">
                        {s.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-ink/70"
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0 text-brand"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex items-center justify-between border-t border-dashed border-ink/15 pt-4">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-ash">
                          À partir de
                        </span>
                        <span className="font-display text-base font-extrabold text-brand">
                          {s.price}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* CTA card */}
              <article className="flex flex-col justify-between rounded-md bg-graphite p-6 text-graphite-foreground">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                    {PHONE}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">
                    Pas sûr du problème ?
                  </h3>
                  <p className="mt-2 text-sm text-graphite-foreground/70">
                    On regarde ça gratuitement. Aucune obligation.
                  </p>
                </div>
                <a
                  href={TEL}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-display text-sm font-bold text-brand-foreground hover:brightness-110 transition"
                >
                  <Phone size={16} /> Appeler
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative bg-graphite py-16 text-graphite-foreground md:py-24">
          <div className="absolute inset-0 cube-pattern" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="max-w-2xl font-display text-3xl font-extrabold md:text-5xl">
              Comment ça marche
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-md border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand font-display text-xl font-extrabold text-brand-foreground">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-extrabold">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm text-graphite-foreground/70">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">
              Pourquoi DigitalExpert.ca
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_US.map((w) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.title}
                    className="rounded-md bg-card p-6 ring-1 ring-black/5 shadow-sm"
                  >
                    <div className="rounded-md bg-brand/10 p-2 text-brand w-fit">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-extrabold">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/70">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Bar */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-md bg-graphite p-8 text-graphite-foreground md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-extrabold md:text-4xl">
                  Prêt à réparer votre téléphone ?
                </h2>
                <p className="mt-4 text-graphite-foreground/70">
                  Passez nous voir au centre-ville de Sherbrooke ou appelez pour
                  un rendez-vous.
                </p>
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
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-graphite-foreground/60">
                  <MapPin size={16} />
                  {ADDRESS}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-graphite py-8 text-graphite-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-graphite-foreground/60">
            &copy; {new Date().getFullYear()} DigitalExpert.ca — Sherbrooke
          </p>
          <div className="flex items-center gap-4 text-sm text-graphite-foreground/60">
            <Link
              to="/"
              className="hover:text-brand transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="hover:text-brand transition-colors"
            >
              Services
            </Link>
            <a
              href="https://www.facebook.com/digitalexpert.ca"
              target="_blank"
              rel="noopener"
              className="hover:text-brand transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const SERVICES = [
  {
    name: "Remplacement d'écran",
    desc: "Écran fissuré, tactile qui ne répond plus ou pixels morts. On remplace votre écran avec une pièce de qualité.",
    icon: Smartphone,
    price: "109 $",
    details: [
      "iPhone, Samsung, Google Pixel",
      "Tous les modèles acceptés",
      "Garantie 90 jours",
      "30–60 min",
    ],
  },
  {
    name: "Remplacement de batterie",
    desc: "Batterie qui se décharge trop vite ou qui gonfle ? Un nouveau bloc batterie redonne vie à votre téléphone.",
    icon: Battery,
    price: "79 $",
    details: [
      "Batteries certifiées",
      "Optimisation de la charge",
      "Garantie 90 jours",
      "20–30 min",
    ],
  },
  {
    name: "Réparation de connecteur",
    desc: "Le téléphone ne charge plus ou le câble tient à peine ? On répare ou remplace le port de charge.",
    icon: Wrench,
    price: "89 $",
    details: [
      "USB-C, Lightning, micro-USB",
      "Détection de court-circuit",
      "Garantie 90 jours",
      "45–60 min",
    ],
  },
  {
    name: "Caméra avant / arrière",
    desc: "Photos floues, caméra noire ou lentille brisée. On remplace le module caméra pour des images nettes.",
    icon: Camera,
    price: "99 $",
    details: [
      "Avant et arrière",
      "Mise au point testée",
      "Garantie 90 jours",
      "30–45 min",
    ],
  },
  {
    name: "Déverrouillage & logiciel",
    desc: "Téléphone bloqué, oubli de code, ou problème logiciel. On réinitialise et récupère vos données quand possible.",
    icon: Unlock,
    price: "49 $",
    details: [
      "Déverrouillage d'opérateur",
      "Récupération de données",
      "Mise à jour iOS/Android",
      "Sur devis",
    ],
  },
];

const STEPS = [
  {
    n: "1",
    t: "Diagnostic gratuit",
    d: "On inspecte votre téléphone sans frais. On vous explique le problème et le coût exact avant toute réparation.",
  },
  {
    n: "2",
    t: "Réparation sur place",
    d: "La plupart des réparations sont faites le jour même, directement dans notre atelier au centre-ville de Sherbrooke.",
  },
  {
    n: "3",
    t: "Garantie 90 jours",
    d: "Chaque réparation est couverte par une garantie écrite de 90 jours. On reste là si quelque chose ne va pas.",
  },
];

const WHY_US = [
  {
    title: "Garantie 90 jours",
    desc: "Toutes nos réparations sont couvertes par une garantie écrite. Pas de surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Le jour même",
    desc: "Écrans et batteries remplacés en 30–60 minutes. Repartez avec un téléphone neuf.",
    icon: Clock,
  },
  {
    title: "Pièces de qualité",
    desc: "On utilise des pièces testées et fiables. Pas de copies bas de gamme.",
    icon: Wrench,
  },
  {
    title: "Depuis 2016",
    desc: "Plus de 8 ans d'expérience et des milliers de téléphones réparés à Sherbrooke.",
    icon: Smartphone,
  },
];
