import { createServerFn } from "@tanstack/react-start";
import { fetchGoogleReviews, type ReviewsPayload } from "./reviews.server";

export type { GoogleReview, ReviewsPayload } from "./reviews.server";

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewsPayload> => {
    const apiKey = process.env["GOOGLE_API_KEY"];
    if (!apiKey) throw new Error("GOOGLE_API_KEY no configurada");
    return fetchGoogleReviews(apiKey);
  },
);
