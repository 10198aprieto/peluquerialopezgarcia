import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { getGoogleReviews, type ReviewsPayload } from "@/lib/reviews.functions";
import { FALLBACK_REVIEWS } from "@/lib/reviews.fallback";

export function ReviewsBanner() {
  const [data, setData] = useState<ReviewsPayload>(FALLBACK_REVIEWS);

  useEffect(() => {
    let active = true;
    getGoogleReviews()
      .then((d) => active && d.reviews.length && setData(d))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  if (!data || !data.rating) return null;

  return (
    <section aria-label="Valoración en Google" className="border-y border-border bg-accent-soft/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-5 lg:flex-row lg:items-center lg:gap-8 lg:px-8">
        <a
          href={data.mapsUri ?? "#resenas"}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="font-display text-4xl leading-none text-accent">
            {data.rating.toFixed(1)}
          </span>
          <span>
            <span className="flex gap-0.5" aria-label={`${data.rating} de 5 estrellas en Google`}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  strokeWidth={1.5}
                  className={`h-4 w-4 ${i <= Math.round(data.rating!) ? "fill-accent text-accent" : "text-border"}`}
                />
              ))}
            </span>
            <span className="mt-0.5 block text-[0.68rem] uppercase tracking-widest text-muted-foreground">
              {data.total} reseñas en Google
            </span>
          </span>
        </a>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto lg:flex-1">
          {data.reviews.slice(0, 8).map((r, i) => (
            <blockquote
              key={`${r.author}-${i}`}
              className="flex w-[78vw] shrink-0 snap-start items-start gap-2 rounded-sm border border-border bg-card px-4 py-3 text-sm sm:w-[22rem]"
            >
              <Quote className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="line-clamp-2 text-muted-foreground">{r.text}</span>
                <cite className="mt-1 block text-[0.68rem] not-italic uppercase tracking-widest text-foreground/70">
                  {r.author}
                </cite>
              </span>
            </blockquote>
          ))}
        </div>

        <a
          href="#resenas"
          className="shrink-0 self-start rounded-full border border-accent px-5 py-2 text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-accent-foreground lg:self-auto"
        >
          Ver reseñas
        </a>
      </div>
    </section>
  );
}
