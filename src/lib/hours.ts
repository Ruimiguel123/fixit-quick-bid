// Shop hours in local time (America/Toronto). 24h format.
// 0 = Sunday ... 6 = Saturday
export const SHOP_HOURS: Record<number, { open: number; close: number } | null> = {
  0: null,
  1: { open: 10, close: 18 },
  2: { open: 10, close: 18 },
  3: { open: 10, close: 18 },
  4: { open: 10, close: 20 },
  5: { open: 10, close: 20 },
  6: { open: 12, close: 17 },
};

export const HOURS_SUMMARY_FR = "Lun–Mer 10 h–18 h · Jeu–Ven 10 h–20 h · Sam 12 h–17 h";
export const HOURS_SUMMARY_EN = "Mon–Wed 10 am–6 pm · Thu–Fri 10 am–8 pm · Sat 12 pm–5 pm";

function nowInToronto(): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(new Date());
  const weekdayShort = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { day: map[weekdayShort] ?? 0, minutes: hour * 60 + minute };
}

function fmt24(h: number) {
  return `${h} h`;
}
function fmt12(h: number) {
  const hh = ((h + 11) % 12) + 1;
  return `${hh} ${h >= 12 ? "pm" : "am"}`;
}

export type OpenStatus = { open: boolean; messageFr: string; messageEn: string };

export function getOpenStatus(): OpenStatus {
  const { day, minutes } = nowInToronto();
  const today = SHOP_HOURS[day];

  if (today && minutes >= today.open * 60 && minutes < today.close * 60) {
    return {
      open: true,
      messageFr: `Ouvert · ferme à ${fmt24(today.close)}`,
      messageEn: `Open · closes at ${fmt12(today.close)}`,
    };
  }

  if (today && minutes < today.open * 60) {
    return {
      open: false,
      messageFr: `Fermé · ouvre à ${fmt24(today.open)}`,
      messageEn: `Closed · opens at ${fmt12(today.open)}`,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const slot = SHOP_HOURS[nextDay];
    if (!slot) continue;
    const dayNamesFr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const dayNamesEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const labelFr = i === 1 ? "demain" : dayNamesFr[nextDay];
    const labelEn = i === 1 ? "tomorrow" : dayNamesEn[nextDay];
    return {
      open: false,
      messageFr: `Fermé · ouvre ${labelFr} à ${fmt24(slot.open)}`,
      messageEn: `Closed · opens ${labelEn} at ${fmt12(slot.open)}`,
    };
  }
  return { open: false, messageFr: "Fermé", messageEn: "Closed" };
}
