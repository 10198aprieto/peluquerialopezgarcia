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
