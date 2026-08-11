interface CalendlyEmbedProps {
  url: string;
  className?: string;
  minHeight?: number;
}

const EMBED_DOMAIN = "peluquerialopezgarcia.lovable.app";

export function CalendlyEmbed({ url, className = "", minHeight = 700 }: CalendlyEmbedProps) {
  const embedUrl = `${url}?embed_domain=${encodeURIComponent(EMBED_DOMAIN)}&embed_type=Inline`;

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
