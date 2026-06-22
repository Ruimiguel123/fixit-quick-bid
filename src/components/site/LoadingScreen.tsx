import { useEffect, useMemo, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import logoAsset from "@/assets/digitalexpert-logo-transparent.png.asset.json";

// One-time intro loader. Plays once per browser session.
const STORAGE_KEY = "de-intro-played";

function buildCracksSvg() {
  let seed = 20240622;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const cx = 46, cy = 72, N = 9;
  const paths: string[] = [];
  for (let i = 0; i < N; i++) {
    const ang = (i / N) * Math.PI * 2 + (rnd() - 0.5) * 0.55;
    const len = 72 + rnd() * 50;
    const steps = 3 + Math.floor(rnd() * 2);
    let d = `M ${cx.toFixed(1)} ${cy.toFixed(1)}`;
    for (let s = 1; s <= steps; s++) {
      const r = len * (s / steps);
      const a = ang + (rnd() - 0.5) * (12 / r);
      const x = Math.max(3, Math.min(97, cx + Math.cos(a) * r));
      const y = Math.max(4, Math.min(210, cy + Math.sin(a) * r));
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    paths.push(d);
  }
  [32, 60].forEach((ringR) => {
    let d = "M";
    let first = true;
    for (let k = 0; k <= N; k++) {
      const ang = (k / N) * Math.PI * 2;
      const r = ringR * (0.78 + rnd() * 0.4);
      const x = Math.max(3, Math.min(97, cx + Math.cos(ang) * r));
      const y = Math.max(4, Math.min(210, cy + Math.sin(ang) * r));
      d += (first ? " " : " L ") + `${x.toFixed(1)} ${y.toFixed(1)}`;
      first = false;
    }
    paths.push(d);
  });
  return paths
    .map((d, i) => {
      const stroke =
        i >= paths.length - 2
          ? "rgba(170,210,245,.6)"
          : "rgba(206,234,255,.92)";
      return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`;
    })
    .join("");
}

export function LoadingScreen() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang: "fr" | "en" = pathname.startsWith("/en") ? "en" : "fr";

  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        setRemoved(true);
        return;
      }
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setMounted(true);
    const t1 = setTimeout(() => setHide(true), 2200);
    const t2 = setTimeout(() => setRemoved(true), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const cracksSvg = useMemo(
    () =>
      `<svg viewBox="0 0 100 214" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 0 1px rgba(150,210,255,.55))">${buildCracksSvg()}</svg>`,
    []
  );

  if (removed) return null;

  const tagline = lang === "fr" ? "On répare votre expérience" : "Fixing your experience";
  const loadword = lang === "fr" ? "Chargement" : "Loading";

  return (
    <div
      aria-hidden="true"
      className="dl-root"
      data-mounted={mounted ? "1" : "0"}
      data-hide={hide ? "1" : "0"}
    >
      <style>{`
        .dl-root{position:fixed;inset:0;z-index:9999;opacity:1;transition:opacity .6s ease;pointer-events:none}
        .dl-root[data-hide="1"]{opacity:0}
        .dl-root *{box-sizing:border-box}
        @keyframes dl-dot{0%,100%{transform:translateY(0);opacity:.35}50%{transform:translateY(-5px);opacity:1}}
        @keyframes dl-amb{0%,100%{opacity:.5}50%{opacity:.85}}
        @keyframes dl-shake{0%{transform:translate(0,0)}25%{transform:translate(1.5px,-1px)}50%{transform:translate(-1px,1px)}100%{transform:translate(0,0)}}
        @keyframes dl-fade-crack{0%{opacity:1;filter:blur(0)}20%{opacity:1;filter:blur(0)}100%{opacity:0;filter:blur(7px)}}
        @keyframes dl-restore{0%{filter:brightness(.5) saturate(.7)}100%{filter:brightness(1) saturate(1)}}
        .dl-stage{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden;
          background:radial-gradient(120% 90% at 50% 38%, #14171b 0%, #0a0c0e 62%, #060708 100%);
          font-family:'Public Sans',system-ui,sans-serif}
        .dl-amb{position:absolute;inset:0;animation:dl-amb 4s ease-in-out infinite;
          background:radial-gradient(60% 45% at 50% 42%, rgba(12,163,0,.10), transparent 70%)}
        .dl-grain{position:absolute;inset:0;
          background:repeating-linear-gradient(0deg, rgba(255,255,255,.014) 0 1px, transparent 1px 4px)}
        .dl-phone{position:relative;width:230px;height:480px;border-radius:40px;padding:9px;
          transform:scale(1.18);transform-origin:center;
          background:linear-gradient(150deg,#23262a,#0b0c0e 62%);
          box-shadow:0 24px 54px -14px rgba(0,0,0,.55), inset 0 0 0 2px #2d3034, inset 0 1px 1px rgba(255,255,255,.14)}
        .dl-btn{position:absolute;background:linear-gradient(180deg,#34373b,#16181a)}
        .dl-b1{left:-3px;top:118px;width:3px;height:54px;border-radius:3px 0 0 3px}
        .dl-b2{right:-3px;top:96px;width:3px;height:34px;border-radius:0 3px 3px 0}
        .dl-b3{right:-3px;top:142px;width:3px;height:60px;border-radius:0 3px 3px 0}
        .dl-screen{position:relative;width:100%;height:100%;border-radius:32px;overflow:hidden;background:#000;
          box-shadow:inset 0 0 0 2px #050505}
        .dl-fixed{position:absolute;inset:0;background:#f5f7f5;display:flex;flex-direction:column;
          align-items:center;justify-content:center;gap:16px;animation:dl-restore 1.5s .56s both ease-out}
        .dl-glow-t{position:absolute;top:0;left:0;right:0;height:150px;
          background:radial-gradient(125% 80% at 50% -25%, rgba(12,163,0,.20), transparent 70%)}
        .dl-logo{width:76%;height:auto;position:relative}
        .dl-tagline{font-size:15px;font-weight:600;color:#23272b;text-align:center;letter-spacing:.2px;
          padding:0 22px;line-height:1.3}
        .dl-dots{display:flex;gap:7px;margin-top:2px}
        .dl-dots span{width:8px;height:8px;border-radius:50%;background:#0CA300;animation:dl-dot 1.1s ease-in-out infinite}
        .dl-dots span:nth-child(2){animation-delay:.18s}
        .dl-dots span:nth-child(3){animation-delay:.36s}
        .dl-loadword{font-size:10px;letter-spacing:2.5px;color:#9a9a9a;text-transform:uppercase;font-family:'IBM Plex Mono',ui-monospace,monospace}
        .dl-crack{position:absolute;inset:0;animation:dl-shake .38s ease, dl-fade-crack 1.6s .6s forwards ease-in}
        .dl-crack-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0b0d0f,#16191c)}
        .dl-crack-grain{position:absolute;inset:0;
          background:repeating-linear-gradient(0deg, rgba(255,255,255,.022) 0 1px, transparent 1px 3px)}
        .dl-crack-slash{position:absolute;inset:0;mix-blend-mode:screen;
          background:linear-gradient(118deg, transparent 42%, rgba(214,42,42,.16) 50%, transparent 58%)}
        .dl-err{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
          font-size:9px;letter-spacing:3px;color:rgba(214,80,80,.45);font-family:'IBM Plex Mono',ui-monospace,monospace}
        .dl-notch{position:absolute;top:10px;left:50%;transform:translateX(-50%);width:62px;height:7px;
          border-radius:6px;background:#070809;z-index:6;box-shadow:inset 0 0 0 1px #1d2023}
        .dl-gloss{position:absolute;inset:0;z-index:7;pointer-events:none;border-radius:32px;
          background:linear-gradient(125deg, rgba(255,255,255,.10) 0%, transparent 22%, transparent 80%, rgba(255,255,255,.05) 100%)}
        .dl-footer{position:absolute;left:0;right:0;bottom:44px;display:flex;align-items:center;
          justify-content:center;gap:10px;opacity:.9}
        .dl-fdot{width:6px;height:6px;border-radius:50%;background:#0CA300;box-shadow:0 0 10px 2px rgba(12,163,0,.6)}
        .dl-footer .dl-lbl{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#9a9ea2;font-family:'IBM Plex Mono',ui-monospace,monospace}
        @media (prefers-reduced-motion: reduce){
          .dl-crack,.dl-fixed,.dl-amb,.dl-dots span{animation:none !important}
        }
      `}</style>
      <div className="dl-stage">
        <div className="dl-amb" />
        <div className="dl-grain" />
        <div className="dl-phone">
          <div className="dl-btn dl-b1" />
          <div className="dl-btn dl-b2" />
          <div className="dl-btn dl-b3" />
          <div className="dl-screen">
            <div className="dl-fixed">
              <div className="dl-glow-t" />
              <img className="dl-logo" alt="DigitalExpert.ca" src={logoAsset.url} />
              <div className="dl-tagline">{tagline}</div>
              <div className="dl-dots"><span /><span /><span /></div>
              <div className="dl-loadword">{loadword}</div>
            </div>
            <div className="dl-crack">
              <div className="dl-crack-bg" />
              <div className="dl-crack-grain" />
              <div className="dl-crack-slash" />
              <div className="dl-err">// ERROR</div>
              <div dangerouslySetInnerHTML={{ __html: cracksSvg }} />
            </div>
            <div className="dl-notch" />
            <div className="dl-gloss" />
          </div>
        </div>
        <div className="dl-footer">
          <span className="dl-fdot" />
          <span className="dl-lbl">DigitalExpert.ca</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
