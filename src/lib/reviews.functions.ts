import { createServerFn } from "@tanstack/react-start";
import { FALLBACK_REVIEWS } from "./reviews.fallback";
import type { ReviewsPayload } from "./reviews.types";

export type { GoogleReview, ReviewsPayload } from "./reviews.types";

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewsPayload> => {
    const apiKey = process.env["GOOGLE_API_KEY"];
    if (!apiKey) return FALLBACK_REVIEWS;
    try {
      const { fetchGoogleReviews } = await import("./reviews.server");
      const data = await fetchGoogleReviews(apiKey);
      return data.reviews.length ? data : FALLBACK_REVIEWS;
    } catch {
      return FALLBACK_REVIEWS;
    }
  },
);
