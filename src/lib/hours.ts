// Shop hours in local time (America/Toronto). 24h format.
// 0 = Sunday, 1 = Monday, ... 6 = Saturday
export const SHOP_HOURS: Record<number, { open: number; close: number } | null> = {
  0: null,                       // Sunday: closed
  1: { open: 10, close: 18 },    // Monday
  2: { open: 10, close: 18 },    // Tuesday
  3: { open: 10, close: 18 },    // Wednesday
  4: { open: 10, close: 20 },    // Thursday
  5: { open: 10, close: 20 },    // Friday
  6: { open: 12, close: 17 },    // Saturday
};

export const HOURS_SUMMARY_FR = "Lun–Mer 10 h–18 h · Jeu–Ven 10 h–20 h · Sam 12 h–17 h";
export const HOURS_SUMMARY_EN = "Mon–Wed 10 am–6 pm · Thu–Fri 10 am–8 pm · Sat 12 pm–5 pm";

function nowInToronto(): Date {
  // Use the toronto local clock by formatting then parsing parts.
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(new Date());
  const weekdayShort = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const d = new Date();
  // Store as a tagged object via Date with arbitrary base — but easier: return a plain encoding.
  // We'll abuse the Date object: set hours/minutes; weekday encoded separately via getter override won't work,
  // so instead return a fake "shape" by attaching to a known Sunday epoch and adding the weekday days.
  const base = new Date(Date.UTC(2024, 0, 7 + map[weekdayShort], hour, minute)); // Jan 7 2024 was a Sunday
  return base;
}

export type OpenStatus = {
  open: boolean;
  // Localized short message
  messageFr: string;
  messageEn: string;
};

export function getOpenStatus(): OpenStatus {
  const now = nowInToronto();
  const day = now.getUTCDay();
  const hour = now.getUTCHours();
  const minute = now.getUTCMinutes();
  const minutesNow = hour * 60 + minute;
  const today = SHOP_HOURS[day];

  if (today && minutesNow >= today.open * 60 && minutesNow < today.close * 60) {
    const closeStr24 = `${today.close} h`;
    const closeStr12 = `${((today.close + 11) % 12) + 1} ${today.close >= 12 ? "pm" : "am"}`;
    return {
      open: true,
      messageFr: `Ouvert · ferme à ${closeStr24}`,
      messageEn: `Open · closes at ${closeStr12}`,
    };
  }

  // Find next opening
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const slot = SHOP_HOURS[nextDay];
    if (slot) {
      const dayNamesFr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
      const dayNamesEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const labelFr = i === 1 ? "demain" : dayNamesFr[nextDay];
      const labelEn = i === 1 ? "tomorrow" : dayNamesEn[nextDay];
      const open24 = `${slot.open} h`;
      const open12 = `${((slot.open + 11) % 12) + 1} ${slot.open >= 12 ? "pm" : "am"}`;
      // Same day, before opening
      if (i === 7 || (today === null && i === 1) || minutesNow < slot.open * 60 && i === 0) {
        // not reachable here, handled below
      }
      // If shop is closed today and it's before opening time today
      if (today && minutesNow < today.open * 60) {
        const o24 = `${today.open} h`;
        const o12 = `${((today.open + 11) % 12) + 1} ${today.open >= 12 ? "pm" : "am"}`;
        return {
          open: false,
          messageFr: `Fermé · ouvre à ${o24}`,
          messageEn: `Closed · opens at ${o12}`,
        };
      }
      return {
        open: false,
        messageFr: `Fermé · ouvre ${labelFr} à ${open24}`,
        messageEn: `Closed · opens ${labelEn} at ${open12}`,
      };
    }
  }
  return { open: false, messageFr: "Fermé", messageEn: "Closed" };
}
