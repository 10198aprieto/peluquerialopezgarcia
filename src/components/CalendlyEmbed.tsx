import { useEffect, useRef, useState } from "react";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement?: HTMLElement;
        prefill?: Record<string, string>;
      }) => void;
      initPopupWidget: (options: { url: string; prefill?: Record<string, string> }) => void;
    };
  }
}

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  minHeight?: number;
}

export function CalendlyEmbed({ url, className = "", minHeight = 700 }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = document.getElementById("calendly-script") as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") {
        setScriptLoaded(true);
      } else {
        existing.addEventListener("load", () => setScriptLoaded(true), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.dataset.loaded = "false";
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      setScriptLoaded(true);
    });
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.Calendly) return;

    // Clear any previously rendered content to avoid duplicates on re-renders
    containerRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url,
      parentElement: containerRef.current,
    });
  }, [scriptLoaded, url]);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      style={{ minWidth: 320, width: "100%", minHeight }}
    />
  );
}
