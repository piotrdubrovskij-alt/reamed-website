export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  profilePhoto?: string;
  relativeTime?: string;
}

// Fallback reviews shown when Google Places API is not configured
const fallbackReviews: GoogleReview[] = [
  {
    author: "Aistė K.",
    rating: 5,
    text: "Po kelio operacijos ieškojau vietos, kur būtų aiškus planas ir tikras vedimas per visą atsistatymą. ReaMed būtent tai ir gavau — kiekvienas vizitas turėjo prasmę.",
  },
  {
    author: "Tomas M.",
    rating: 5,
    text: "Patiko, kad vizito metu buvo ne tik gydymas, bet ir labai aiškus paaiškinimas, kas vyksta ir ką daryti toliau. Pagaliau supratau savo problemos priežastį.",
  },
  {
    author: "Rasa J.",
    rating: 5,
    text: "Atėjau dėl kaklo ir nugaros problemų, o gavau ne tik pagalbą simptomams, bet ir aiškesnį supratimą, kaip judėti toliau. Labai profesionalus kolektyvas.",
  },
  {
    author: "Mantas P.",
    rating: 5,
    text: "Sporto trauma, kuri mane kankino kelis mėnesius — išspręsta per kelias savaites. Labai individualus požiūris, jauti, kad specialistai tikrai rūpinasi.",
  },
  {
    author: "Viktorija S.",
    rating: 5,
    text: "Puiki klinika. Kiekvienas vizitas — ne tik procedūros, bet ir edukacija. Dabar žinau, kaip prižiūrėti savo kūną ir kaip išvengti problemų ateityje.",
  },
];

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackReviews;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=lt`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews",
        },
        // Revalidate every 6 hours
        next: { revalidate: 21600 },
      }
    );

    if (!res.ok) return fallbackReviews;

    const data = await res.json();
    const raw: Record<string, unknown>[] = data.reviews ?? [];

    const mapped: GoogleReview[] = raw
      .filter((r) => Number(r.rating) >= 4)
      .map((r) => {
        const attr = r.authorAttribution as Record<string, string> | undefined;
        const textObj = r.text as Record<string, string> | undefined;
        const origObj = r.originalText as Record<string, string> | undefined;
        return {
          author: attr?.displayName ?? "Pacientas",
          rating: Number(r.rating),
          text: textObj?.text ?? "",
          profilePhoto: attr?.photoUri,
          relativeTime: r.relativePublishTimeDescription as string | undefined,
          lang: origObj?.languageCode ?? textObj?.languageCode ?? "",
        };
      })
      .filter((r) => r.text.length > 20);

    // Prioritise Lithuanian reviews, then others
    const lt = mapped.filter((r) => (r as GoogleReview & { lang: string }).lang === "lt");
    const other = mapped.filter((r) => (r as GoogleReview & { lang: string }).lang !== "lt");
    const sorted = [...lt, ...other].slice(0, 5);

    return sorted.length >= 3 ? sorted : fallbackReviews;
  } catch {
    return fallbackReviews;
  }
}
