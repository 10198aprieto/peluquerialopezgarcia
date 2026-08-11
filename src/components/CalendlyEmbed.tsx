import { useEffect, useRef } from "react";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  minHeight?: number;
}

export function CalendlyEmbed({ url, className = "", minHeight = 700 }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("calendly-script")) return;

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: 320, width: "100%", height: minHeight }}
    />
  );
}
