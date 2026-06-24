import { useEffect, useState } from "react";

const STORAGE_KEY = "de-cookie-consent";
const GA_ID = "G-9697H158J0";
const FB_PIXEL_ID = "3203930396534208";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      push?: unknown;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: unknown;
    __deTrackingLoaded?: boolean;
  }
}

function hasConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return JSON.parse(raw).value === "all";
  } catch {
    return false;
  }
}

function loadTracking() {
  if (typeof window === "undefined" || window.__deTrackingLoaded) return;
  window.__deTrackingLoaded = true;

  // GA4
  const ga = document.createElement("script");
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(ga);
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);

  // Meta Pixel
  (function (f: Window, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = function (...args: unknown[]) {
      n.callMethod
        ? n.callMethod.apply(n, args)
        : n.queue.push(args);
    };
    f.fbq = n;
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  window.fbq!("init", FB_PIXEL_ID);
  window.fbq!("track", "PageView");
}

export function TrackingScripts() {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (hasConsent()) loadTracking();

    const onChange = () => {
      if (hasConsent()) {
        loadTracking();
        setTick((t) => t + 1);
      }
    };
    window.addEventListener("de-consent-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("de-consent-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return null;
}

export default TrackingScripts;
