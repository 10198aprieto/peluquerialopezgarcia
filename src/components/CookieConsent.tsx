import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type Consent = "accepted" | "rejected";

const STORAGE_KEY = "plg-cookie-consent";
export const OPEN_COOKIE_PREFS_EVENT = "plg:open-cookie-preferences";

const GA_BY_HOST: { match: (h: string) => boolean; gaId: string }[] = [
  { match: (h) => h.endsWith("peluquerialopezgarcia.es"), gaId: "G-4TE7CMDCNQ" },
  { match: (h) => h.endsWith("lovable.app"), gaId: "G-8KDR9QETLB" },
];

function gaIdForHost(host: string): string | null {
  return GA_BY_HOST.find((c) => c.match(host))?.gaId ?? null;
}

function loadAnalytics(gaId: string) {
  if (document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s);

  const inline = document.createElement("script");
  inline.text = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`;
  document.head.appendChild(inline);
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFS_EVENT));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const apply = useCallback((choice: Consent) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
    if (choice === "accepted") {
      const gaId = gaIdForHost(window.location.hostname);
      if (gaId) loadAnalytics(gaId);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "accepted") {
      const gaId = gaIdForHost(window.location.hostname);
      if (gaId) loadAnalytics(gaId);
    } else if (!stored) {
      setVisible(true);
    }

    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, open);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[80] animate-in slide-in-from-bottom duration-300 p-3 sm:p-5"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-6">
        <h2 className="font-display text-xl leading-tight">Cookies en esta web</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Usamos cookies propias necesarias para que la web funcione y cookies analíticas de Google
          Analytics para saber cómo se navega y mejorar el sitio. Puedes aceptarlas o rechazarlas;
          las analíticas solo se activan si das tu consentimiento. Más información en la{" "}
          <Link to="/politica-cookies" className="text-accent underline">
            Política de cookies
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => apply("rejected")}
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => apply("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
