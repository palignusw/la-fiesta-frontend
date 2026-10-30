import { googleReviews, restaurant } from "./restaurant";

export type GoogleReputationData = {
  rating: number;
  reviewCount: number;
  url: string;
  source: "google" | "snapshot";
  updatedAt?: string;
};
export const reputationSnapshot: GoogleReputationData = {
  ...googleReviews,
  source: "snapshot",
};

// The API key is used only by the server. No personal review text is requested.
export async function getGoogleReputation(): Promise<GoogleReputationData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;
  if (!key || !placeId || !/^[A-Za-z0-9_-]{10,256}$/.test(placeId)) {
    return reputationSnapshot;
  }
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask":
            "id,displayName,location,rating,userRatingCount,googleMapsUri",
        },
        next: { revalidate: 3600, tags: ["google-reputation"] },
        signal: AbortSignal.timeout(4500),
      },
    );
    if (!response.ok) return reputationSnapshot;
    const place: unknown = await response.json();
    if (!place || typeof place !== "object") return reputationSnapshot;
    const data = place as Record<string, unknown>;
    const location = data.location as
      { latitude?: unknown; longitude?: unknown } | undefined;
    const displayName = data.displayName as { text?: unknown } | undefined;
    const normalized =
      typeof displayName?.text === "string"
        ? displayName.text.toLocaleLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
        : "";
    // Reject an unrelated Place ID rather than showing another business's score.
    if (
      data.id !== placeId ||
      !(normalized.includes("lafiesta") || normalized.includes("ლაფიესტა")) ||
      typeof location?.latitude !== "number" ||
      typeof location.longitude !== "number" ||
      Math.abs(location.latitude - restaurant.latitude) > 0.02 ||
      Math.abs(location.longitude - restaurant.longitude) > 0.02 ||
      typeof data.rating !== "number" ||
      !Number.isFinite(data.rating) ||
      data.rating < 1 ||
      data.rating > 5 ||
      typeof data.userRatingCount !== "number" ||
      !Number.isSafeInteger(data.userRatingCount) ||
      data.userRatingCount < 1
    )
      return reputationSnapshot;
    let url = restaurant.googleMapsUrl as string;
    if (typeof data.googleMapsUri === "string") {
      try {
        const candidate = new URL(data.googleMapsUri);
        if (
          candidate.protocol === "https:" &&
          ["google.com", "www.google.com", "maps.google.com"].includes(
            candidate.hostname,
          )
        )
          url = candidate.href;
      } catch {
        /* Keep the owner-confirmed Google link. */
      }
    }
    return {
      rating: data.rating,
      reviewCount: data.userRatingCount,
      url,
      source: "google",
    };
  } catch {
    // Do not log the request URL/headers or claim the saved snapshot is current.
    return reputationSnapshot;
  }
}
