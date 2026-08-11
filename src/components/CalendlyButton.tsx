import { useEffect, useRef } from "react";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function CalendlyButton({ url, children, className, ariaLabel }: CalendlyButtonProps) {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("calendly-script")) {
      scriptLoaded.current = true;
      return;
    }
    if (scriptLoaded.current) return;

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
    };
    document.body.appendChild(script);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
