Update opening hours in the bilingual i18n translation file.

Current hours (both FR and EN) list Mon–Fri as a single block with Saturday 10–17. The shop now has split weekday hours and a shorter Saturday window.

Changes in `src/lib/i18n.ts`:

**French section (`fr.contact.hours`)**
- Monday – Wednesday: "Lundi – Mercredi", "10 h – 18 h"
- Thursday – Friday: "Jeudi – Vendredi", "10 h – 20 h"
- Saturday: "Samedi", "12 h – 17 h"
- Sunday: "Dimanche", "Fermé"

**English section (`en.contact.hours`)**
- Monday – Wednesday: "Monday – Wednesday", "10 am – 6 pm"
- Thursday – Friday: "Thursday – Friday", "10 am – 8 pm"
- Saturday: "Saturday", "12 pm – 5 pm"
- Sunday: "Sunday", "Closed"

No other files need to change; the `Contact` component in `HomePage.tsx` already maps over `t.contact.hours` dynamically.