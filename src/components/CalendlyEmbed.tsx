import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  minHeight?: number;
}

export function CalendlyEmbed({ url, className = "", minHeight = 700 }: CalendlyEmbedProps) {
  const [embedDomain, setEmbedDomain] = useState("peluquerialopezgarcia.lovable.app");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedDomain(window.location.host);
    }
  }, []);

  const embedUrl = `${url}?embed_domain=${encodeURIComponent(embedDomain)}&embed_type=Inline`;

  return (
    <div className={`w-full ${className}`} style={{ minHeight }}>
      <iframe
        src={embedUrl}
        title="Reservar cita online"
        className="w-full rounded-2xl border-0 bg-white"
        style={{ minHeight, height: minHeight }}
        loading="lazy"
      />
    </div>
  );
}
