import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getGoogleReviews, type ReviewsPayload } from "@/lib/reviews.functions";
import { Reveal } from "@/components/Reveal";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= Math.round(rating) ? "fill-accent text-accent" : "text-border"}`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

export function GoogleReviews() {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    getGoogleReviews()
      .then((d) => active && setData(d))
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, []);

  if (failed) return null;

  return (
    <section id="resenas" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Reseñas de Google</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            Lo que dicen nuestras clientas
          </h2>
        </Reveal>

        {data && (
          <Reveal className="mt-8">
            <div className="inline-flex flex-wrap items-center gap-4 rounded-sm border border-border bg-card px-6 py-5">
              <span className="font-display text-5xl leading-none text-accent">
                {data.rating?.toFixed(1) ?? "—"}
              </span>
              <span>
                <Stars rating={data.rating ?? 0} />
                <span className="mt-1 block text-xs uppercase tracking-widest text-muted-foreground">
                  {data.total} reseñas en Google
                </span>
              </span>
            </div>
          </Reveal>
        )}
      </div>

      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:px-8">
        <div className="hidden shrink-0 lg:block lg:w-[calc((100vw-72rem)/2)]" />
        {(data?.reviews ?? []).map((r, i) => (
          <article
            key={`${r.author}-${i}`}
            className="flex w-[82vw] shrink-0 snap-center flex-col rounded-sm border border-border bg-card p-7 sm:w-[46vw] lg:w-[24rem]"
          >
            <div className="flex items-center gap-3">
              {r.photo ? (
                <img
                  src={r.photo}
                  alt={r.author}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft font-display text-xl text-accent">
                  {r.author.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="min-w-0">
                <span className="block truncate font-medium">{r.author}</span>
                <Stars rating={r.rating} className="mt-0.5" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </article>
        ))}
        {!data && (
          <div className="h-40 w-[82vw] shrink-0 animate-pulse rounded-sm bg-card sm:w-[46vw] lg:w-[24rem]" />
        )}
      </div>
    </section>
  );
}
