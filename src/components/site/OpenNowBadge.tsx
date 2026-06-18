import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/hours";
import type { Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  className?: string;
  size?: "sm" | "md";
}

export function OpenNowBadge({ lang, className = "", size = "md" }: Props) {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const message = lang === "fr" ? status.messageFr : status.messageEn;
  const dotClass = status.open ? "bg-emerald-400" : "bg-rose-400";
  const ringClass = status.open
    ? "ring-emerald-500/30 bg-emerald-500/10 text-emerald-300"
    : "ring-rose-500/30 bg-rose-500/10 text-rose-300";
  const sizeClass = size === "sm" ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-mono uppercase tracking-wider ring-1 ${ringClass} ${sizeClass} ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className={`relative flex h-2 w-2`}>
        {status.open && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dotClass}`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dotClass}`} />
      </span>
      {message}
    </span>
  );
}
