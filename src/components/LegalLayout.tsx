import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-text.asset.json";

export function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-4 leading-relaxed text-muted-foreground ${className}`}>{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-2xl leading-tight sm:text-3xl">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 font-display text-xl">{children}</h3>;
}

export function UL({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
      {items.map((i) => (
        <li key={i.slice(0, 40)}>{i}</li>
      ))}
    </ul>
  );
}

export function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 lg:px-8">
          <Link to="/" className="flex items-center">
            <img src={logo.url} alt="Peluquería López García" className="h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Volver
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
        <h1 className="font-display text-3xl leading-tight sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-accent">{subtitle}</p>
        )}
        {children}
      </main>
      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-3xl px-4 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} Peluquería López García · LOGARVA C.B. · Calle Delicias, 17,
          47013 Valladolid
        </p>
      </footer>
    </div>
  );
}
