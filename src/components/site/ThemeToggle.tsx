import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "de-theme";

function getInitial(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

interface Props {
  lang: "fr" | "en";
  className?: string;
}

export function ThemeToggle({ lang, className }: Props) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = getInitial();
    setTheme(t);
    setMounted(true);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const next = theme === "dark" ? "light" : "dark";
  const label =
    lang === "fr"
      ? next === "dark"
        ? "Activer le mode sombre"
        : "Activer le mode clair"
      : next === "dark"
        ? "Switch to dark mode"
        : "Switch to light mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
      className={
        "rounded-md border border-white/15 p-2 text-graphite-foreground/80 hover:border-brand hover:text-brand transition-colors " +
        (className ?? "")
      }
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
