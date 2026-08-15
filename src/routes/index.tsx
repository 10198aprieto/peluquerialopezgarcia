import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors,
  Palette,
  Sparkles,
  Wind,
  Crown,
  Baby,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Menu,
  X,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { GoogleReviews } from "@/components/GoogleReviews";

import { Link } from "@tanstack/react-router";

const logo = { url: "/images/logo-text.png" };
const logoMark = { url: "/images/logo-mark.png" };
const sala = { url: "/images/sala.jpg" };
const recepcion = { url: "/images/recepcion.jpg" };
const lavado = { url: "/images/lavado.jpg" };

const PHONE = "+34983082785";
const WHATSAPP =
  "https://wa.me/34983082785?text=" +
  encodeURIComponent("Hola, quiero pedir cita en Peluquería López García");
const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=Peluquer%C3%ADa+L%C3%B3pez+Garc%C3%ADa%2C+Calle+Delicias+17%2C+Valladolid&travelmode=driving";
const MAPS_DEST =
  "https://www.google.com/maps/dir/?api=1&destination=Peluquer%C3%ADa+L%C3%B3pez+Garc%C3%ADa%2C+Calle+Delicias+17%2C+Valladolid";

const COMO_LLEGAR = [
  {
    emoji: "🚶",
    title: "Cómo llegar andando",
    desc: "Ruta a pie hasta la puerta del salón.",
    href: `${MAPS_DEST}&travelmode=walking`,
  },
  {
    emoji: "🚌",
    title: "Autobús",
    desc: "Líneas urbanas con parada en la calle Delicias.",
    href: `${MAPS_DEST}&travelmode=transit`,
  },
  {
    emoji: "🚗",
    title: "Cómo llegar en coche",
    desc: "Indicaciones en coche desde donde estés.",
    href: `${MAPS_DEST}&travelmode=driving`,
  },
];

const APARCAMIENTOS = [
  { name: "Aparcamiento cercano 1", time: "11 min andando (estimado)", href: "https://maps.app.goo.gl/iyGPcR9QjWUQ8PqN6" },
  { name: "Aparcamiento cercano 2", time: "9 min andando (estimado)", href: "https://maps.app.goo.gl/dK2QczcEpwDQpUWBA" },
];

const HISTORIA = [
  {
    year: "2013",
    emoji: "📍",
    title: "Abrimos en Las Delicias",
    desc:
      "El 11 de mayo de 2013 levantamos la persiana en la calle Delicias, 17. Dos sillones, muchas ganas y la idea de hacer una peluquería de barrio donde a cada clienta se la atiende por su nombre.",
  },
  {
    year: "2018",
    emoji: "✂️",
    title: "Seguimos creciendo junto al barrio",
    desc:
      "Cinco años después renovamos el salón y ampliamos servicios: color, mechas y tratamientos con producto profesional Cotril. Nos formamos cada temporada para que las técnicas nuevas también lleguen a Las Delicias.",
  },
  {
    year: "2023",
    emoji: "❤️",
    title: "10 años y nuestros clientes siguen confiando en nosotras",
    desc:
      "Cumplimos una década con muchas de las personas que entraron por la puerta el primer año. Familias enteras: abuelas, madres, hijas y los peques con su primer corte.",
  },
  {
    year: "2026",
    emoji: "✨",
    title: "Más de 13 años cuidando tu cabello",
    desc:
      "Hoy seguimos en el mismo sitio, siempre con cita previa para dedicarte todo el tiempo que necesitas, y con la misma idea del primer día: que salgas por la puerta contenta con tu pelo.",
  },
];



export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Peluquería López García - Las Delicias, Valladolid" },
      {
        name: "description",
        content:
          "Peluquería de familia en Las Delicias, Valladolid. Corte, color, mechas, tratamientos y recogidos con trato cercano. Pide cita por teléfono o WhatsApp. Calle Delicias 17.",
      },
      { property: "og:title", content: "Peluquería López García - Las Delicias, Valladolid" },
      {
        property: "og:description",
        content:
          "Corte, color, mechas y tratamientos en el barrio de Las Delicias. Peluquería de familia, para tu familia. Calle Delicias 17, Valladolid.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Peluquería López García",
          telephone: "+34983082785",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Delicias, 17",
            postalCode: "47013",
            addressLocality: "Valladolid",
            addressCountry: "ES",
          },
          openingHours: ["Tu-Th 09:30-13:30", "Tu-Th 16:00-19:00", "Fr 09:00-19:00", "Sa 09:00-14:00"],
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nuestro trabajo", href: "#trabajo" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Cómo llegar", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICIOS = [
  { icon: Scissors, name: "Corte y peinado", desc: "Cortes de mujer y hombre, adaptados a tu pelo y a tu día a día." },
  { icon: Palette, name: "Color y mechas", desc: "Coloración, balayage, babylights y retoque de raíz con acabado natural." },
  { icon: Sparkles, name: "Tratamientos capilares", desc: "Hidratación, keratina y cuidado del cuero cabelludo con productos Cotril." },
  { icon: Wind, name: "Alisados y ondas", desc: "Alisado progresivo, permanente moderna y ondas suaves de larga duración." },
  { icon: Crown, name: "Recogidos y eventos", desc: "Peinados para bodas, comuniones y celebraciones, con o sin prueba previa." },
  { icon: Baby, name: "Peluquería infantil", desc: "Primeros cortes tranquilos y con paciencia. Los peques, encantados." },
];

const HORARIO = [
  ["Lunes", "Cerrado"],
  ["Martes a jueves", "9:30–13:30 y 16:00–19:00"],
  ["Viernes", "9:00–19:00"],
  ["Sábado", "9:00–14:00"],
  ["Domingo", "Cerrado"],
];

const TRABAJOS = [
  { src: sala.url, alt: "ESPACIO DE PEINADO Y CORTE" },
  { src: lavado.url, alt: "Zona de lavado y productos profesionales" },
  { src: recepcion.url, alt: "RECEPCIÓN DE LA PELUQUERÍA" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [fab, setFab] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center">
            <img src={logo.url} alt="Peluquería López García" className="h-8 w-auto sm:h-10" />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
            >
              Pedir cita
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="justify-self-end rounded-full border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-base text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block w-full rounded-full bg-accent px-5 py-3 text-center font-medium text-accent-foreground"
            >
              Pedir cita
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[92vh] items-end overflow-hidden pt-20">
        <img
          src={sala.url}
          alt="Interior de Peluquería López García en Las Delicias, Valladolid"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30" />
        <img
          src={logoMark.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-24 w-[38rem] max-w-none opacity-[0.07] invert lg:right-0"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 lg:px-8 lg:pb-24">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary-foreground/80">
              BARRIO DE LAS DELICIAS · VALLADOLID
            </p>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
              Peluquería de familia,
              <br />
              <em className="text-accent-soft">para tu familia</em>
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              13 años cortando, cuidando y aconsejando en Las Delicias. Siempre con cita previa, en
              la calle Delicias, 17.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Pedir cita por WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> 983 08 27 85
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Banner de reseñas de Google */}
      <ReviewsBanner />



      {/* Sobre nosotros */}
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Sobre nosotros</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              La peluquería de siempre, con la mirada puesta en hoy
            </h2>
            <p className="mt-6 text-muted-foreground">
              Desde el 11 de mayo de 2013, Peluquería López García forma parte del día a día de Las
              Delicias. Más de una década después, seguimos siendo el sitio de siempre para cuidar tu
              pelo: sin prisa, y con el trato cercano de quien te conoce por tu nombre.
            </p>
            <p className="mt-4 text-muted-foreground">
              El barrio ha cambiado mucho en estos años, pero nosotras hemos seguido aquí, con la puerta
              abierta para quien entra por primera vez y para quien lleva viniendo desde el principio.
              Muchas de las que empezaron en 2013 siguen viniendo hoy, y esa es la mejor carta de
              presentación que podemos darte.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["13", "años en el barrio"],
                ["Cotril", "producto profesional"],
                ["Cita", "siempre previa"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl text-accent sm:text-3xl">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <img
                src={recepcion.url}
                alt="Recepción de Peluquería López García"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-sm bg-accent px-6 py-5 text-accent-foreground sm:block">
                <p className="font-display text-xl leading-tight">Calle Delicias, 17</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Valladolid</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nuestra historia */}
      <section id="historia" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
        <img
          src={logoMark.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 w-[30rem] max-w-none opacity-[0.05]"
        />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Nuestra historia</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              Más de una década en la misma esquina
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-0 border-l border-border pl-8 sm:pl-12">
            {HISTORIA.map((h, i) => (
              <Reveal key={h.year} delay={i * 90}>
                <li className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm text-accent-foreground sm:-left-[3.85rem] sm:h-10 sm:w-10 sm:text-base"
                  >
                    {h.emoji}
                  </span>
                  <p className="font-display text-3xl text-accent sm:text-4xl">{h.year}</p>
                  <p className="mt-2 font-medium">{h.title}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {h.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>


      {/* Servicios */}
      <section id="servicios" className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Servicios</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              Todo lo que tu pelo necesita
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <article className="h-full bg-card p-8 transition-colors hover:bg-accent-soft/40">
                  <s.icon className="h-7 w-7 text-accent" strokeWidth={1.4} />
                  <h3 className="mt-5 font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <p className="mt-5 text-xs uppercase tracking-widest text-accent">
                    PRECIO · POR DEFINIR
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro trabajo */}
      <section id="trabajo" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Nuestro trabajo</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              La peluquería y lo que sale de ella
            </h2>
          </Reveal>
        </div>

        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:px-8">
          <div className="hidden shrink-0 lg:block lg:w-[calc((100vw-72rem)/2)]" />
          {TRABAJOS.map((t) => (
            <figure
              key={t.src}
              className="w-[78vw] shrink-0 snap-center sm:w-[46vw] lg:w-[32rem]"
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {t.alt}
              </figcaption>
            </figure>
          ))}
          <a
            href="https://www.instagram.com/peluquerialopezgarcia/"
            target="_blank"
            rel="noreferrer"
            className="flex w-[78vw] shrink-0 snap-center flex-col justify-between rounded-sm bg-primary p-8 text-primary-foreground sm:w-[46vw] lg:w-[24rem]"
          >
            <Instagram className="h-8 w-8" strokeWidth={1.4} />
            <div>
              <p className="font-display text-3xl leading-tight">@peluquerialopezgarcia</p>
              <p className="mt-2 text-sm opacity-80">
                Mira nuestros últimos posts en Instagram →
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Reseñas de Google */}
      <GoogleReviews />

      {/* Horario y ubicación */}
      <section id="ubicacion" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Horario y ubicación</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              Cuándo y dónde encontrarnos
            </h2>
            <table className="mt-8 w-full border-collapse text-sm">
              <tbody>
                {HORARIO.map(([d, h]) => (
                  <tr key={d} className="border-b border-border">
                    <th scope="row" className="py-3 pr-4 text-left font-medium">
                      {d}
                    </th>
                    <td
                      className={`py-3 text-right ${h === "Cerrado" ? "text-muted-foreground" : "text-accent"}`}
                    >
                      {h}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p>Calle Delicias, 17 · 47013 Valladolid (Barrio de Las Delicias)</p>
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Cómo llegar
            </a>
          </Reveal>
          <Reveal delay={120}>
            <iframe
              title="Mapa de Peluquería López García, Calle Delicias 17, Valladolid"
              src="https://www.google.com/maps?q=Calle%20Delicias%2017%2C%2047013%20Valladolid&output=embed"
              loading="lazy"
              className="h-[380px] w-full rounded-sm border border-border lg:h-full lg:min-h-[460px]"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-4 lg:px-8">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              {COMO_LLEGAR.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-card p-6 transition-colors hover:bg-accent-soft/40"
                >
                  <p className="text-2xl">{c.emoji}</p>
                  <h3 className="mt-3 font-display text-xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-accent">Abrir en Google Maps →</p>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-sm border border-border bg-card p-6">
              <h3 className="font-display text-xl">🅿️ Aparcamiento cercano</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {APARCAMIENTOS.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 rounded-sm border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      <span>{p.name}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{p.time}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

      </section>

      {/* Contacto / Footer */}
      <footer id="contacto" className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-24">
        <img
          src={logoMark.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 w-[34rem] max-w-none opacity-[0.06] invert"
        />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              ¿Nos vemos esta semana?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Pedir cita por WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> 983 08 27 85
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-primary-foreground/15 pt-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-xl">Peluquería López García</p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Calle Delicias, 17
                <br />
                47013 Valladolid
              </p>
            </div>
            <div className="text-sm text-primary-foreground/70">
              <p className="mb-2 flex items-center gap-2 text-primary-foreground">
                <Clock className="h-4 w-4" /> Horario
              </p>
              <p>Mar–Jue: 9:30–13:30 · 16:00–19:00</p>
              <p>Vie: 9:00–19:00 · Sáb: 9:00–14:00</p>
              <p>Lun y Dom: cerrado</p>
            </div>
            <div>
              <p className="mb-3 text-sm text-primary-foreground">Síguenos</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/peluquerialopezgarcia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-primary-foreground/30 p-3 transition-colors hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/peluquerialopezgarcia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-primary-foreground/30 p-3 transition-colors hover:bg-primary-foreground/10"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-primary-foreground/50">
            <p>
              © {new Date().getFullYear()} Peluquería López García · Las Delicias, Valladolid
            </p>
            <Link to="/aviso-legal" className="underline transition-colors hover:text-primary-foreground">
              Aviso legal
            </Link>
            <Link
              to="/politica-privacidad"
              className="underline transition-colors hover:text-primary-foreground"
            >
              Política de privacidad
            </Link>
          </div>

        </div>
      </footer>

      {/* Botón flotante de contacto */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {fab && (
            <motion.div
              key="fab-options"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex flex-col items-end gap-3"
            >
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                onClick={() => setFab(false)}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.2, delay: 0.04 }}
                className="flex items-center gap-3 rounded-full bg-card px-4 py-3 text-sm font-medium shadow-[var(--shadow-soft)] ring-1 ring-border"
              >
                <MessageCircle className="h-5 w-5 text-accent" /> Enviar WhatsApp
              </motion.a>
              <motion.a
                href={`tel:${PHONE}`}
                onClick={() => setFab(false)}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-full bg-card px-4 py-3 text-sm font-medium shadow-[var(--shadow-soft)] ring-1 ring-border"
              >
                <Phone className="h-5 w-5 text-accent" /> Llamar por teléfono
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setFab((v) => !v)}
          aria-expanded={fab}
          aria-label={fab ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
          whileTap={{ scale: 0.92 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-soft)]"
        >
          <motion.span
            key={fab ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {fab ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </motion.button>
      </div>


    </div>
  );
}
