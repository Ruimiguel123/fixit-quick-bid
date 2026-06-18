import type { Lang } from "./i18n";

export type ServiceKey = "iphone-screen" | "battery" | "samsung" | "pixel" | "unlocking";

export interface ServiceContent {
  slug: string;            // url segment for this lang (e.g. "ecran-iphone")
  navLabel: string;
  title: string;           // H1
  eyebrow: string;
  intro: string;
  priceFrom: string;
  models: string[];
  bullets: string[];
  faq: { q: string; a: string }[];
  metaTitle: string;       // <= 60 chars
  metaDescription: string; // 150-160 chars, ends w/ CTA
}

export const SERVICES: Record<ServiceKey, Record<Lang, ServiceContent>> = {
  "iphone-screen": {
    fr: {
      slug: "ecran-iphone",
      navLabel: "Écran iPhone",
      title: "Réparation écran iPhone à Sherbrooke",
      eyebrow: "Réparation iPhone",
      intro:
        "Vitre fissurée, écran noir, tactile inerte ou taches noires. On remplace votre écran iPhone en moins d'une heure avec une pièce de qualité et une garantie écrite de 90 jours.",
      priceFrom: "Dès 109 $",
      models: ["iPhone 7 / 7 Plus", "iPhone 8 / SE", "iPhone X / XR / XS", "iPhone 11 / 12 / 13", "iPhone 14 / 15 / 16 / 17", "Vitre arrière (14–17)"],
      bullets: [
        "Diagnostic gratuit avant toute réparation",
        "Réparation le jour même, souvent en 30 à 60 min",
        "Pièces de qualité testées (True Tone préservé quand possible)",
        "Garantie écrite de 90 jours sur pièces et main-d'œuvre",
      ],
      faq: [
        { q: "Combien coûte un écran iPhone ?", a: "À partir de 109 $ selon le modèle. On vous donne un prix ferme par téléphone ou en boutique avant de commencer." },
        { q: "Combien de temps prend la réparation ?", a: "30 à 60 minutes dans la plupart des cas. Vous pouvez attendre sur place ou repasser plus tard." },
        { q: "True Tone et Face ID fonctionneront-ils ?", a: "Oui, dans la majorité des cas. Si une fonction ne peut pas être conservée, on vous le dit avant la réparation." },
      ],
      metaTitle: "Réparation écran iPhone Sherbrooke | DigitalExpert",
      metaDescription:
        "Écran iPhone fissuré à Sherbrooke ? On le remplace en moins d'une heure dès 109 $, garantie 90 jours. Soumission gratuite — appelez le 819-300-1718.",
    },
    en: {
      slug: "iphone-screen",
      navLabel: "iPhone screen",
      title: "iPhone Screen Repair in Sherbrooke",
      eyebrow: "iPhone repair",
      intro:
        "Cracked glass, black screen, dead touch or black spots. We replace your iPhone screen in under an hour with quality parts and a 90-day written warranty.",
      priceFrom: "From $109",
      models: ["iPhone 7 / 7 Plus", "iPhone 8 / SE", "iPhone X / XR / XS", "iPhone 11 / 12 / 13", "iPhone 14 / 15 / 16 / 17", "Back glass (14–17)"],
      bullets: [
        "Free diagnostic before any repair",
        "Same-day repair, typically 30–60 minutes",
        "Quality tested parts (True Tone preserved when possible)",
        "90-day written warranty on parts and labour",
      ],
      faq: [
        { q: "How much does an iPhone screen cost?", a: "Starting at $109 depending on model. We give you a firm price by phone or in shop before we start." },
        { q: "How long does the repair take?", a: "30 to 60 minutes in most cases. You can wait on site or come back later." },
        { q: "Will True Tone and Face ID still work?", a: "Yes, in most cases. If a feature can't be preserved, we tell you before the repair." },
      ],
      metaTitle: "iPhone Screen Repair Sherbrooke | DigitalExpert",
      metaDescription:
        "Cracked iPhone screen in Sherbrooke? We replace it in under an hour from $109 with a 90-day warranty. Get a free estimate — call 819-300-1718 today.",
    },
  },
  battery: {
    fr: {
      slug: "batterie",
      navLabel: "Batterie",
      title: "Remplacement de batterie cellulaire à Sherbrooke",
      eyebrow: "Batterie",
      intro:
        "Votre téléphone se décharge en quelques heures, s'éteint au froid ou gonfle ? On remplace votre batterie en moins d'une heure avec une pièce de qualité.",
      priceFrom: "Dès 79 $",
      models: ["iPhone (tous modèles)", "Samsung Galaxy S et A", "Samsung Note", "Google Pixel", "Motorola", "Autres marques — sur demande"],
      bullets: [
        "Diagnostic batterie gratuit (capacité réelle mesurée)",
        "Remplacement en 20 à 30 minutes la plupart du temps",
        "Batteries certifiées, optimisation de la charge",
        "Garantie écrite de 90 jours",
      ],
      faq: [
        { q: "Quand faut-il remplacer sa batterie ?", a: "Quand la capacité tombe sous 80 %, que le téléphone s'éteint avec encore de la charge, ou qu'il chauffe anormalement." },
        { q: "Combien ça coûte ?", a: "Dès 79 $ selon le modèle. Prix ferme communiqué avant de commencer." },
        { q: "Mes données sont-elles à risque ?", a: "Non. Une réparation de batterie ne touche pas à vos données. On vous prévient s'il y a un risque." },
      ],
      metaTitle: "Remplacement batterie cellulaire Sherbrooke",
      metaDescription:
        "Batterie qui ne tient plus la charge à Sherbrooke ? Remplacement en moins d'une heure dès 79 $, garantie 90 jours. Soumission gratuite au 819-300-1718.",
    },
    en: {
      slug: "battery",
      navLabel: "Battery",
      title: "Cell Phone Battery Replacement in Sherbrooke",
      eyebrow: "Battery",
      intro:
        "Phone drains in a few hours, shuts down in the cold or starts swelling? We replace your battery in under an hour with a quality part.",
      priceFrom: "From $79",
      models: ["iPhone (all models)", "Samsung Galaxy S and A", "Samsung Note", "Google Pixel", "Motorola", "Other brands — on request"],
      bullets: [
        "Free battery diagnostic (real capacity measured)",
        "Replacement in 20–30 minutes most of the time",
        "Certified batteries, charge optimization",
        "90-day written warranty",
      ],
      faq: [
        { q: "When should I replace my battery?", a: "When capacity drops under 80%, the phone shuts down with charge left, or it heats up abnormally." },
        { q: "How much does it cost?", a: "From $79 depending on model. Firm price quoted before we start." },
        { q: "Is my data at risk?", a: "No. A battery repair doesn't touch your data. We warn you if there's any risk." },
      ],
      metaTitle: "Cell Phone Battery Replacement Sherbrooke",
      metaDescription:
        "Battery not holding a charge in Sherbrooke? Replacement in under an hour from $79 with a 90-day warranty. Get a free estimate — call 819-300-1718.",
    },
  },
  samsung: {
    fr: {
      slug: "samsung",
      navLabel: "Samsung Galaxy",
      title: "Réparation Samsung Galaxy à Sherbrooke",
      eyebrow: "Samsung",
      intro:
        "Écran AMOLED fissuré, batterie morte, port de charge ou caméra défectueuse. On répare votre Samsung Galaxy en atelier à Sherbrooke avec pièces de qualité.",
      priceFrom: "Soumission gratuite",
      models: ["Galaxy S22 / S23 / S24 / S25", "Galaxy S20 / S21 / S10", "Galaxy A14 / A34 / A54", "Galaxy Note 10 / 20", "Galaxy Z Fold / Flip — sur devis", "Modèles plus anciens"],
      bullets: [
        "Écrans AMOLED d'origine ou compatibles",
        "Batteries, ports de charge, caméras, haut-parleurs",
        "Diagnostic et soumission gratuits",
        "Garantie écrite de 90 jours",
      ],
      faq: [
        { q: "Réparez-vous les Galaxy Z Fold et Flip ?", a: "Oui, sur devis. Ces appareils demandent des pièces spécifiques, on confirme le prix et le délai avant de commencer." },
        { q: "Utilisez-vous des écrans d'origine ?", a: "Quand c'est possible, oui. Sinon on utilise des compatibles AMOLED de qualité, garantis 90 jours." },
        { q: "Combien de temps prend la réparation ?", a: "Écrans et batteries en 30 à 60 minutes. Les réparations plus complexes peuvent prendre la journée." },
      ],
      metaTitle: "Réparation Samsung Galaxy Sherbrooke | DigitalExpert",
      metaDescription:
        "Réparation Samsung Galaxy à Sherbrooke : écrans AMOLED, batteries, ports, caméras. Garantie 90 jours. Soumission gratuite au 819-300-1718, passez en boutique.",
    },
    en: {
      slug: "samsung",
      navLabel: "Samsung Galaxy",
      title: "Samsung Galaxy Repair in Sherbrooke",
      eyebrow: "Samsung",
      intro:
        "Cracked AMOLED screen, dead battery, faulty charging port or camera. We repair your Samsung Galaxy in shop in Sherbrooke with quality parts.",
      priceFrom: "Free estimate",
      models: ["Galaxy S22 / S23 / S24 / S25", "Galaxy S20 / S21 / S10", "Galaxy A14 / A34 / A54", "Galaxy Note 10 / 20", "Galaxy Z Fold / Flip — on request", "Older models"],
      bullets: [
        "Original or compatible AMOLED screens",
        "Batteries, charging ports, cameras, speakers",
        "Free diagnostic and estimate",
        "90-day written warranty",
      ],
      faq: [
        { q: "Do you repair Galaxy Z Fold and Flip?", a: "Yes, on request. These devices need specific parts — we confirm price and timing before starting." },
        { q: "Do you use original screens?", a: "When possible, yes. Otherwise we use quality compatible AMOLED parts, warrantied 90 days." },
        { q: "How long does the repair take?", a: "Screens and batteries in 30–60 minutes. More complex repairs may take the day." },
      ],
      metaTitle: "Samsung Galaxy Repair Sherbrooke | DigitalExpert",
      metaDescription:
        "Samsung Galaxy repair in Sherbrooke: AMOLED screens, batteries, ports, cameras. 90-day warranty. Free estimate — call 819-300-1718 or visit our shop.",
    },
  },
  pixel: {
    fr: {
      slug: "pixel",
      navLabel: "Google Pixel",
      title: "Réparation Google Pixel à Sherbrooke",
      eyebrow: "Google Pixel",
      intro:
        "Un des rares ateliers de la région à réparer les Google Pixel. Écrans, vitre arrière, batterie : on s'en occupe avec une garantie écrite de 90 jours.",
      priceFrom: "Soumission gratuite",
      models: ["Pixel 9 / 9 Pro", "Pixel 8 / 8 Pro / 8a", "Pixel 7 / 7 Pro / 7a", "Pixel 6 / 6 Pro / 6a", "Pixel 5 / 4a / 5a", "Modèles plus anciens"],
      bullets: [
        "Écrans OLED et vitre arrière",
        "Batteries, ports de charge",
        "Pièces commandées si non en stock (24–72 h)",
        "Garantie écrite de 90 jours",
      ],
      faq: [
        { q: "Pourquoi peu d'ateliers réparent les Pixel ?", a: "Les pièces Pixel sont moins disponibles. On a établi des canaux d'approvisionnement fiables pour ces appareils." },
        { q: "Avez-vous les pièces en stock ?", a: "Pour les modèles récents, souvent oui. Sinon, comptez 24 à 72 h de commande. On confirme avant que vous déposiez l'appareil." },
        { q: "Combien ça coûte ?", a: "On fait une soumission gratuite par téléphone ou en boutique. Le prix est ferme avant de commencer." },
      ],
      metaTitle: "Réparation Google Pixel Sherbrooke | DigitalExpert",
      metaDescription:
        "Réparation Google Pixel à Sherbrooke : écrans OLED, vitre arrière, batterie. Pièces fiables, garantie 90 jours. Soumission gratuite au 819-300-1718.",
    },
    en: {
      slug: "pixel",
      navLabel: "Google Pixel",
      title: "Google Pixel Repair in Sherbrooke",
      eyebrow: "Google Pixel",
      intro:
        "One of the few shops in the region that repairs Google Pixels. Screens, back glass, battery: we handle it with a 90-day written warranty.",
      priceFrom: "Free estimate",
      models: ["Pixel 9 / 9 Pro", "Pixel 8 / 8 Pro / 8a", "Pixel 7 / 7 Pro / 7a", "Pixel 6 / 6 Pro / 6a", "Pixel 5 / 4a / 5a", "Older models"],
      bullets: [
        "OLED screens and back glass",
        "Batteries, charging ports",
        "Parts ordered if not in stock (24–72 h)",
        "90-day written warranty",
      ],
      faq: [
        { q: "Why do few shops repair Pixels?", a: "Pixel parts are less widely available. We've built reliable supply channels for these devices." },
        { q: "Do you have parts in stock?", a: "For recent models, often yes. Otherwise expect 24–72 h to order. We confirm before you drop off." },
        { q: "How much does it cost?", a: "We give a free estimate by phone or in shop. Price is firm before we start." },
      ],
      metaTitle: "Google Pixel Repair Sherbrooke | DigitalExpert",
      metaDescription:
        "Google Pixel repair in Sherbrooke: OLED screens, back glass, battery. Reliable parts, 90-day warranty. Get a free estimate — call 819-300-1718 today.",
    },
  },
  unlocking: {
    fr: {
      slug: "deverrouillage",
      navLabel: "Déverrouillage",
      title: "Déverrouillage cellulaire à Sherbrooke",
      eyebrow: "Déverrouillage & logiciel",
      intro:
        "Téléphone bloqué à un opérateur, code oublié, ou problème logiciel ? On déverrouille votre cellulaire à Sherbrooke pour qu'il fonctionne avec n'importe quel forfait.",
      priceFrom: "Dès 49 $",
      models: ["iPhone (tous opérateurs)", "Samsung Galaxy", "Google Pixel", "Motorola, LG, Huawei", "Codes opérateur (Bell, Telus, Rogers, Fido…)", "Récupération de données — sur devis"],
      bullets: [
        "Déverrouillage permanent (résiste aux mises à jour)",
        "Compatible avec tous les forfaits canadiens et internationaux",
        "Récupération de données quand c'est possible",
        "Diagnostic gratuit avant intervention",
      ],
      faq: [
        { q: "Est-ce légal de déverrouiller mon téléphone ?", a: "Oui. Depuis 2017 au Canada, les opérateurs doivent vendre des téléphones non verrouillés et déverrouiller gratuitement les anciens." },
        { q: "Combien ça coûte ?", a: "Dès 49 $ selon le modèle et la méthode. On confirme le prix avant de commencer." },
        { q: "Combien de temps ça prend ?", a: "De quelques minutes à 48 h selon le téléphone et l'opérateur d'origine." },
      ],
      metaTitle: "Déverrouillage cellulaire Sherbrooke | DigitalExpert",
      metaDescription:
        "Déverrouillage de cellulaire à Sherbrooke dès 49 $ : iPhone, Samsung, Pixel et plus. Permanent, compatible tous opérateurs. Soumission gratuite : 819-300-1718.",
    },
    en: {
      slug: "unlocking",
      navLabel: "Unlocking",
      title: "Cell Phone Unlocking in Sherbrooke",
      eyebrow: "Unlocking & software",
      intro:
        "Phone locked to a carrier, forgotten code, or software issue? We unlock your cell phone in Sherbrooke so it works with any plan you choose.",
      priceFrom: "From $49",
      models: ["iPhone (all carriers)", "Samsung Galaxy", "Google Pixel", "Motorola, LG, Huawei", "Carrier codes (Bell, Telus, Rogers, Fido…)", "Data recovery — on request"],
      bullets: [
        "Permanent unlock (survives software updates)",
        "Works with all Canadian and international plans",
        "Data recovery when possible",
        "Free diagnostic before any work",
      ],
      faq: [
        { q: "Is it legal to unlock my phone?", a: "Yes. Since 2017 in Canada, carriers must sell unlocked phones and unlock older ones for free." },
        { q: "How much does it cost?", a: "From $49 depending on model and method. We confirm the price before starting." },
        { q: "How long does it take?", a: "From a few minutes to 48 h depending on phone and original carrier." },
      ],
      metaTitle: "Cell Phone Unlocking Sherbrooke | DigitalExpert",
      metaDescription:
        "Cell phone unlocking in Sherbrooke from $49: iPhone, Samsung, Pixel and more. Permanent, all carriers. Free estimate — call 819-300-1718 today.",
    },
  },
};

export const SERVICE_ORDER: ServiceKey[] = ["iphone-screen", "battery", "samsung", "pixel", "unlocking"];

export function getServiceByFrSlug(slug: string): ServiceContent | undefined {
  for (const key of SERVICE_ORDER) {
    if (SERVICES[key].fr.slug === slug) return SERVICES[key].fr;
  }
  return undefined;
}
