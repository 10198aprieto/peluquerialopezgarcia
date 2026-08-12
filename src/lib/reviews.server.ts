const PLACE_ID = "ChIJwVs47UQTRw0R0W45OBCWnaQ";
const FIELDS = "rating,userRatingCount,reviews,googleMapsUri";

export interface GoogleReview {
  author: string;
  photo: string | null;
  rating: number;
  text: string;
  when: string;
}

export interface ReviewsPayload {
  rating: number | null;
  total: number;
  mapsUri: string | null;
  reviews: GoogleReview[];
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    originalText?: { text?: string };
    text?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string; photoUri?: string };
  }>;
}

export async function fetchGoogleReviews(apiKey: string): Promise<ReviewsPayload> {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`,
    { headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": FIELDS } },
  );
  if (!res.ok) throw new Error(`Places API error: ${res.status}`);
  const data = (await res.json()) as PlacesResponse;

  return {
    rating: data.rating ?? null,
    total: data.userRatingCount ?? 0,
    mapsUri: data.googleMapsUri ?? null,
    reviews: (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Cliente de Google",
        photo: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? 5,
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        when: r.relativePublishTimeDescription ?? "",
      }))
      .filter((r) => r.text.length > 0),
  };
}
