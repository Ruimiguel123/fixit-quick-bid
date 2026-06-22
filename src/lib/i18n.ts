export type Lang = "fr" | "en";

export interface Dict {
  nav: { services: string; how: string; about: string; reviews: string; faq: string; contact: string; request: string; call: string };
  hero: { eyebrow: string; title1: string; title2: string; subtitle: string; callBtn: string; seeServices: string; trust: string[] };
  ticket: { header: string; number: string; device: string; deviceVal: string; issue: string; issueVal: string; dropoff: string; dropoffVal: string; ready: string; readyVal: string; warranty: string; warrantyVal: string; price: string; stamp: string };
  brands: string;
  services: { title: string; kicker: string; list: { n: string; name: string; desc: string; price: string }[] };
  how: { title: string; steps: { n: string; t: string; d: string }[] };
  about: { title: string; p1: string; p2: string; stats: { v: string; l: string }[]; photoAlt: string };
  reviews: { title: string; list: { q: string; a: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  form: { title: string; kicker: string; name: string; phone: string; device: string; problem: string; photo: string; submit: string; sent: string; required: string };
  contact: { title: string; addressLabel: string; phoneLabel: string; hoursLabel: string; emailLabel: string; hours: { d: string; h: string }[] };
  footer: { tagline: string; rights: string; facebook: string };
  mobileBar: string;
}

export const translations: Record<Lang, Dict> = {
  fr: {
    nav: {
      services: "Services",
      how: "Comment ça marche",
      about: "À propos",
      reviews: "Avis",
      faq: "FAQ",
      contact: "Contact",
      request: "Demande de réparation",
      call: "Appeler",
    },
    hero: {
      eyebrow: "Atelier de réparation · Sherbrooke",
      title1: "Écran fissuré ? Batterie morte ?",
      title2: "On répare aujourd'hui.",
      subtitle:
        "Diagnostic gratuit, pièces de qualité, garantie écrite de 90 jours. Atelier indépendant à Sherbrooke depuis 2016.",
      callBtn: "Appeler — 819-300-1718",
      seeServices: "Voir services et prix",
      trust: ["Depuis 2016", "Réparations le jour même", "4,7/5 sur Google", "Garantie 90 jours"],
    },
    ticket: {
      header: "Bon de réparation",
      number: "N° 2847",
      device: "Appareil",
      deviceVal: "iPhone 14",
      issue: "Problème",
      issueVal: "Écran fissuré",
      dropoff: "Déposé à",
      dropoffVal: "10:15",
      ready: "Prêt à",
      readyVal: "11:05",
      warranty: "Garantie",
      warrantyVal: "90 jours",
      price: "Prix ferme à l'avance",
      stamp: "RÉPARÉ ✓",
    },
    brands: "Marques réparées",
    services: {
      title: "Services",
      kicker: "Prix honnêtes, soumission gratuite",
      list: [
        {
          n: "01",
          name: "Écran iPhone",
          desc: "Écrans fissurés ou noirs, du iPhone 7 au plus récent. Vitre arrière aussi remplacée en atelier (séries 14 à 17).",
          price: "Dès 109 $",
        },
        {
          n: "02",
          name: "Batterie",
          desc: "Nouvelle batterie en moins d'une heure. iPhone, Samsung, la plupart des marques.",
          price: "Dès 79 $",
        },
        {
          n: "03",
          name: "Samsung Galaxy",
          desc: "Écrans AMOLED, batteries, ports de charge, caméras (séries S, A, Note).",
          price: "Soumission gratuite",
        },
        {
          n: "04",
          name: "Google Pixel",
          desc: "Un des rares ateliers de la région à réparer les Pixel : écrans et vitre arrière.",
          price: "Soumission gratuite",
        },
        {
          n: "05",
          name: "Déverrouillage et plus",
          desc: "Déverrouillage d'appareils, ports de charge, caméras, haut-parleurs, dégâts d'eau.",
          price: "Soumission gratuite",
        },
      ],
    },
    how: {
      title: "Comment ça marche",
      steps: [
        { n: "1", t: "Diagnostic gratuit", d: "Apportez votre appareil. On évalue le problème, on vous donne un prix ferme avant de commencer. Note : si l'appareil doit être ouvert pour poser un diagnostic, des frais s'appliquent." },
        { n: "2", t: "Réparation le jour même", d: "Écrans et batteries en moins d'une heure dans la plupart des cas. Pièces de qualité en stock." },
        { n: "3", t: "Garantie 90 jours", d: "Garantie écrite sur les pièces et la main-d'œuvre. Un souci ? On reprend l'appareil." },
      ],
    },
    about: {
      title: "Un atelier de quartier, pas une chaîne.",
      p1: "DigitalExpert.ca répare les téléphones cellulaires à Sherbrooke depuis 2016. Toutes les réparations courantes se font sur place, dans notre atelier du 1394 rue Denault.",
      p2: "Pour les travaux spécialisés comme la micro-soudure, on passe par un partenaire de confiance. Si une réparation ne vaut pas la peine, on vous le dit franchement.",
      stats: [
        { v: "2016", l: "En affaires depuis" },
        { v: "<1h", l: "Écrans et batteries" },
        { v: "90j", l: "Garantie écrite" },
      ],
      photoAlt: "Atelier DigitalExpert.ca à Sherbrooke",
    },
    reviews: {
      title: "Ce que disent les clients",
      list: [
        { q: "Professionnalisme, Qualité, Rapport qualité-prix. Bon service après-vente !", a: "K. Tankappan" },
        { q: "Réparation rapide et soignée. On m'a expliqué clairement ce qui n'allait pas avant de commencer. Je recommande.", a: "Client vérifié" },
        { q: "Prix honnête, garantie respectée. Mon téléphone fonctionne comme neuf depuis plusieurs mois.", a: "Cliente vérifiée" },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "Combien de temps prend une réparation ?", a: "La plupart des écrans et batteries se font en moins d'une heure. Les réparations plus complexes peuvent prendre la journée. On vous donne un délai précis avant de commencer." },
        { q: "Faut-il prendre rendez-vous ?", a: "Non. Vous pouvez passer directement à l'atelier durant nos heures d'ouverture. Un appel à l'avance peut nous aider à confirmer que la pièce est en stock." },
        { q: "Vais-je perdre mes données ?", a: "Non. Une réparation d'écran ou de batterie ne touche pas à vos données. On vous prévient si une intervention présente un risque." },
        { q: "Quels sont vos prix ?", a: "Écrans dès 109 $, batteries dès 79 $. Pour les autres réparations, on donne une soumission gratuite. Le prix est ferme avant qu'on commence." },
        { q: "Le diagnostic est-il toujours gratuit ?", a: "Le diagnostic visuel et fonctionnel est gratuit. Si l'appareil doit être ouvert pour identifier le problème (dégât d'eau, panne interne, carte mère), des frais de diagnostic s'appliquent. On vous en informe avant d'ouvrir quoi que ce soit." },
        { q: "Que couvre la garantie de 90 jours ?", a: "La garantie écrite couvre les pièces installées et la main-d'œuvre pendant 90 jours. Elle ne couvre pas les nouveaux dommages physiques. Important : tout dégât d'eau (avant ou après la réparation) annule la garantie — la corrosion peut continuer à endommager des composants des semaines plus tard, ce qui rend impossible de garantir le travail effectué." },
      ],
    },
    form: {
      title: "Demande de réparation",
      kicker: "Préférez appeler ? 819-300-1718",
      name: "Nom",
      phone: "Téléphone",
      device: "Modèle d'appareil",
      problem: "Description du problème",
      photo: "Photo du dommage (facultatif)",
      submit: "Envoyer la demande",
      sent: "Demande envoyée. On vous rappelle dans la journée.",
      required: "Champ requis",
    },
    contact: {
      title: "Nous trouver",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      hoursLabel: "Heures d'ouverture",
      emailLabel: "Courriel",
      hours: [
        { d: "Lundi – Mercredi", h: "10 h – 18 h" },
        { d: "Jeudi – Vendredi", h: "10 h – 20 h" },
        { d: "Samedi", h: "12 h – 17 h" },
        { d: "Dimanche", h: "Fermé" },
      ],
    },
    footer: {
      tagline: "Réparation cellulaire à Sherbrooke depuis 2016.",
      rights: "Tous droits réservés.",
      facebook: "Facebook",
    },
    mobileBar: "Appeler maintenant — 819-300-1718",
  },
  en: {
    nav: {
      services: "Services",
      how: "How it works",
      about: "About",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      request: "Repair request",
      call: "Call",
    },
    hero: {
      eyebrow: "Repair shop · Sherbrooke",
      title1: "Cracked screen? Dead battery?",
      title2: "We'll fix it today.",
      subtitle:
        "Free diagnostic, quality parts, 90-day written warranty. Independent shop in Sherbrooke since 2016.",
      callBtn: "Call — 819-300-1718",
      seeServices: "See services and prices",
      trust: ["Since 2016", "Same-day repairs", "4.7/5 on Google", "90-day warranty"],
    },
    ticket: {
      header: "Repair ticket",
      number: "No. 2847",
      device: "Device",
      deviceVal: "iPhone 14",
      issue: "Issue",
      issueVal: "Cracked screen",
      dropoff: "Dropped off",
      dropoffVal: "10:15",
      ready: "Ready at",
      readyVal: "11:05",
      warranty: "Warranty",
      warrantyVal: "90 days",
      price: "Firm price up front",
      stamp: "FIXED ✓",
    },
    brands: "Brands we repair",
    services: {
      title: "Services",
      kicker: "Honest pricing, free estimate",
      list: [
        {
          n: "01",
          name: "iPhone screen",
          desc: "Cracked or black screens, iPhone 7 to latest. Back glass also done in shop (14–17 series).",
          price: "From $109",
        },
        {
          n: "02",
          name: "Battery",
          desc: "New battery in under an hour. iPhone, Samsung, most brands.",
          price: "From $79",
        },
        {
          n: "03",
          name: "Samsung Galaxy",
          desc: "AMOLED screens, batteries, ports, cameras (S, A, Note series).",
          price: "Free estimate",
        },
        {
          n: "04",
          name: "Google Pixel",
          desc: "One of the few shops in the region that repairs Pixels: screens and back glass.",
          price: "Free estimate",
        },
        {
          n: "05",
          name: "Unlocking & more",
          desc: "Device unlocking, charging ports, cameras, speakers, water damage.",
          price: "Free estimate",
        },
      ],
    },
    how: {
      title: "How it works",
      steps: [
        { n: "1", t: "Free diagnostic", d: "Bring in your device. We assess the problem and give you a firm price before starting. Note: if the device has to be opened to diagnose the issue, a diagnostic fee applies." },
        { n: "2", t: "Same-day repair", d: "Screens and batteries in under an hour in most cases. Quality parts in stock." },
        { n: "3", t: "90-day warranty", d: "Written warranty on parts and labour. Any issue, bring the device back." },
      ],
    },
    about: {
      title: "A neighbourhood shop, not a chain.",
      p1: "DigitalExpert.ca has been repairing cell phones in Sherbrooke since 2016. All standard repairs are done on site, at our shop on 1394 rue Denault.",
      p2: "Specialized work like micro-soldering goes through a trusted partner. If a repair isn't worth doing, we tell you straight.",
      stats: [
        { v: "2016", l: "In business since" },
        { v: "<1h", l: "Screens & batteries" },
        { v: "90d", l: "Written warranty" },
      ],
      photoAlt: "DigitalExpert.ca repair shop in Sherbrooke",
    },
    reviews: {
      title: "What customers say",
      list: [
        { q: "Professionalism, Quality, Value for money. Good after-sales service!", a: "K. Tankappan" },
        { q: "Fast, clean repair. They explained what was wrong before starting. Recommend.", a: "Verified customer" },
        { q: "Fair price, warranty honoured. My phone has worked like new for months.", a: "Verified customer" },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How long does a repair take?", a: "Most screens and batteries are done in under an hour. More complex repairs may take the day. We give you a precise timeframe before starting." },
        { q: "Do I need an appointment?", a: "No. Walk in any time during opening hours. A quick call ahead helps us confirm the part is in stock." },
        { q: "Will I lose my data?", a: "No. A screen or battery repair doesn't touch your data. We let you know in advance if any work carries a risk." },
        { q: "What are your prices?", a: "Screens from $109, batteries from $79. For other repairs we give a free estimate. Price is firm before we start." },
        { q: "Is the diagnostic always free?", a: "The visual and functional diagnostic is free. If the device has to be opened to identify the problem (water damage, internal failure, motherboard), a diagnostic fee applies. We tell you before opening anything." },
        { q: "What does the 90-day warranty cover?", a: "The written warranty covers installed parts and labour for 90 days. It doesn't cover new physical damage. Important: any water damage (before or after the repair) voids the warranty — corrosion can keep damaging components weeks later, which makes it impossible to guarantee the work performed." },
      ],
    },
    form: {
      title: "Repair request",
      kicker: "Prefer to call? 819-300-1718",
      name: "Name",
      phone: "Phone",
      device: "Device model",
      problem: "Problem description",
      photo: "Damage photo (optional)",
      submit: "Send request",
      sent: "Request sent. We'll call you back within the day.",
      required: "Required field",
    },
    contact: {
      title: "Find us",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Opening hours",
      emailLabel: "Email",
      hours: [
        { d: "Monday – Wednesday", h: "10 am – 6 pm" },
        { d: "Thursday – Friday", h: "10 am – 8 pm" },
        { d: "Saturday", h: "12 pm – 5 pm" },
        { d: "Sunday", h: "Closed" },
      ],
    },
    footer: {
      tagline: "Cell phone repair in Sherbrooke since 2016.",
      rights: "All rights reserved.",
      facebook: "Facebook",
    },
    mobileBar: "Call now — 819-300-1718",
  },
};
