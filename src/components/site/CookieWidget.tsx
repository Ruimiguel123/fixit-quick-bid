import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";

const STORAGE_KEY = "de-cookie-consent";

export function CookieWidget() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = pathname.startsWith("/en") ? "en" : "fr";
  const label = lang === "fr" ? "Préférences cookies" : "Cookie preferences";

  // Hide while the consent banner itself is showing (no stored choice, or reopened).
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    const sync = () => {
      try {
        setBannerOpen(!localStorage.getItem(STORAGE_KEY));
      } catch {
        setBannerOpen(true);
      }
    };
    sync();
    const onOpen = () => setBannerOpen(true);
    const onChange = () => setBannerOpen(false);
    window.addEventListener("de-open-cookie-consent", onOpen);
    window.addEventListener("de-consent-change", onChange);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("de-open-cookie-consent", onOpen);
      window.removeEventListener("de-consent-change", onChange);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (bannerOpen) return null;

  const open = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent("de-open-cookie-consent"));
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={open}
      aria-label={label}
      title={label}
      className="fixed bottom-4 left-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg shadow-black/20 transition-all hover:scale-105 hover:text-brand md:bottom-6 md:left-6 md:h-12 md:w-12"
    >
      <Cookie size={20} />
    </button>
  );
}

export default CookieWidget;
