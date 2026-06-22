import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const STORAGE_KEY = "de-cookie-consent";

type Lang = "fr" | "en";

const COPY: Record<Lang, {
  title: string;
  body: string;
  accept: string;
  reject: string;
  settings: string;
}> = {
  fr: {
    title: "Nous respectons votre vie privée.",
    body:
      "Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies.",
    accept: "Tout accepter",
    reject: "Refuser",
    settings: "Préférences",
  },
  en: {
    title: "We value your privacy.",
    body:
      "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept all\", you consent to our use of cookies.",
    accept: "Accept all",
    reject: "Reject",
    settings: "Preferences",
  },
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang: Lang = pathname.startsWith("/en") ? "en" : "fr";

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "all" | "rejected") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, ts: Date.now() })
      );
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;
  const t = COPY[lang];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed bottom-4 left-4 right-4 z-[70] md:left-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-xl border border-border bg-card text-card-foreground shadow-2xl p-4 md:p-5">
        <h2 className="font-display text-base font-bold">{t.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {t.body}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          <button
            onClick={() => decide("rejected")}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.reject}
          </button>
          <button
            onClick={() => decide("all")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
