import type { ReviewsPayload } from "./reviews.types";

// Copia estática de las reseñas reales de Google (última sincronización).
// Se usa si la Places API no está disponible en el entorno de despliegue.
export const FALLBACK_REVIEWS: ReviewsPayload = {
  rating: 4.9,
  total: 30,
  mapsUri: "https://maps.google.com/?cid=11861801989970685649",
  reviews: [
    {
      author: "Me Reto",
      photo: null,
      rating: 5,
      text: "Fui por primera vez a esta peluquería y salí encantadísima. Escucharon exactamente lo que quería y el corte quedó perfecto, incluso mejor de lo que esperaba. El ambiente es muy agradable y se nota la profesionalidad. Volveré.",
      when: "Hace 8 meses",
    },
    {
      author: "Mariola Arranz",
      photo: null,
      rating: 5,
      text: "Totalmente recomendable. Fui un día por casualidad hace varios años y me quedé. Tienen servicio de peluquería y estética. Son muy majas y te dan muy buenos consejos. Productos de 10.",
      when: "Hace 2 años",
    },
    {
      author: "Ana Tadeo",
      photo: null,
      rating: 5,
      text: "Totalmente recomendables los servicios de peluquería y estética. Buenas profesionales y educadas. Un 10 en todo.",
      when: "Hace un año",
    },
    {
      author: "Lucía Álvarez Centeno",
      photo: null,
      rating: 5,
      text: "Muy recomendable, corte y peinado con mucho estilo y un trato extraordinario.",
      when: "Hace un año",
    },
    {
      author: "Carmen Castanedo Ruiz",
      photo: null,
      rating: 5,
      text: "Fui a hacerme la manicura francesa y he de decir que va muy acorde calidad-precio. He quedado muy contenta con el resultado y por supuesto, volveré.",
      when: "Hace 3 años",
    },
  ],
};
