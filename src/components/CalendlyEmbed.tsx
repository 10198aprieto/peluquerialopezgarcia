interface CalendlyEmbedProps {
  url: string;
  className?: string;
  minHeight?: number;
}

export function CalendlyEmbed({ url, className = "", minHeight = 700 }: CalendlyEmbedProps) {
  const embedUrl = `${url}?embed_domain=${encodeURIComponent(typeof window !== "undefined" ? window.location.host : "peluquerialopezgarcia.lovable.app")}&embed_type=Inline`;

  return (
    <div className={`w-full ${className}`} style={{ minHeight }}>
      <iframe
        src={embedUrl}
        title="Reservar cita online"
        className="w-full rounded-2xl border-0 bg-white"
        style={{ minHeight, height: "100%" }}
        loading="lazy"
      />
    </div>
  );
}
