import type { Lang } from "@/lib/i18n";
import { SiteHeader, SiteFooter, MobileCallBar } from "./SiteChrome";

const COPY = {
  fr: {
    h1: "Politique de confidentialité",
    updated: "Dernière mise à jour : juillet 2026",
    sections: [
      {
        h: "Qui nous sommes",
        p: [
          "DigitalExpert.ca est un atelier de réparation de téléphones cellulaires situé au 1394 rue Denault, Sherbrooke (Québec) J1H 2P8. Le responsable de la protection des renseignements personnels peut être joint à info@digitalexpert.ca ou au 819-300-1718.",
        ],
      },
      {
        h: "Renseignements que nous recueillons",
        p: [
          "Formulaire de demande de réparation : nom, numéro de téléphone, modèle d'appareil, description du problème et, si vous en fournissez une, photo du dommage. Ces renseignements servent uniquement à vous rappeler et à préparer votre réparation.",
          "Témoins (cookies) de mesure d'audience : avec votre consentement seulement, nous utilisons Google Analytics 4 et le pixel Meta pour comprendre l'utilisation du site et mesurer nos publicités. Aucun témoin de suivi n'est déposé si vous refusez.",
        ],
      },
      {
        h: "Utilisation et communication",
        p: [
          "Vos renseignements ne sont jamais vendus. Ils ne sont communiqués qu'aux fournisseurs nécessaires au fonctionnement du site et de nos outils (hébergement, Google, Meta), qui peuvent les traiter à l'extérieur du Québec. Nous limitons ces communications au strict nécessaire.",
        ],
      },
      {
        h: "Conservation",
        p: [
          "Les demandes de réparation sont conservées le temps de traiter votre dossier et de respecter nos obligations de garantie, puis supprimées. Les données de mesure d'audience sont conservées selon les durées standards de Google Analytics (14 mois).",
        ],
      },
      {
        h: "Vos droits",
        p: [
          "Conformément à la Loi 25, vous pouvez demander l'accès à vos renseignements personnels, leur rectification ou leur suppression, et retirer votre consentement en tout temps. Écrivez-nous à info@digitalexpert.ca. Vous pouvez aussi porter plainte auprès de la Commission d'accès à l'information du Québec.",
        ],
      },
      {
        h: "Gérer vos témoins",
        p: [
          "Vous pouvez modifier votre choix en tout temps via le bouton de préférences de témoins affiché sur le site.",
        ],
      },
    ],
  },
  en: {
    h1: "Privacy Policy",
    updated: "Last updated: July 2026",
    sections: [
      {
        h: "Who we are",
        p: [
          "DigitalExpert.ca is a cell phone repair shop located at 1394 rue Denault, Sherbrooke, Quebec J1H 2P8. Our privacy officer can be reached at info@digitalexpert.ca or 819-300-1718.",
        ],
      },
      {
        h: "Information we collect",
        p: [
          "Repair request form: name, phone number, device model, problem description and, if you provide one, a photo of the damage. This information is used solely to call you back and prepare your repair.",
          "Analytics cookies: only with your consent, we use Google Analytics 4 and the Meta pixel to understand how the site is used and measure our advertising. No tracking cookies are set if you decline.",
        ],
      },
      {
        h: "Use and disclosure",
        p: [
          "Your information is never sold. It is only shared with the providers needed to run the site and our tools (hosting, Google, Meta), who may process it outside Quebec. We limit these disclosures to what is strictly necessary.",
        ],
      },
      {
        h: "Retention",
        p: [
          "Repair requests are kept for as long as needed to handle your file and honour our warranty obligations, then deleted. Analytics data follows Google Analytics' standard retention period (14 months).",
        ],
      },
      {
        h: "Your rights",
        p: [
          "Under Quebec's Law 25, you may request access to your personal information, its correction or deletion, and withdraw your consent at any time. Write to info@digitalexpert.ca. You may also file a complaint with the Commission d'accès à l'information du Québec.",
        ],
      },
      {
        h: "Managing cookies",
        p: [
          "You can change your choice at any time using the cookie preferences button shown on the site.",
        ],
      },
    ],
  },
} as const;

export function PrivacyPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader lang={lang} />
      <main>
        <section className="mx-auto max-w-3xl px-4 pt-12 pb-20 md:px-6 md:pt-20">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-ash">{t.updated}</p>
          {t.sections.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="font-display text-xl font-extrabold md:text-2xl">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-3 text-sm text-ink/75 md:text-base">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </section>
      </main>
      <SiteFooter lang={lang} />
      <MobileCallBar lang={lang} />
    </div>
  );
}
