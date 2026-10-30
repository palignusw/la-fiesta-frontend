# La Fiesta

Georgian restaurant and event venue website built with Next.js. No separate NestJS service, database, booking admin, or booking persistence is required.

## Run

```sh
npm ci
npm run dev
npm run build
```

## Telegram enquiries

Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the hosting environment (or `.env.local` for local development). Existing variables with these names are compatible. The bot must be allowed to send messages to the destination; start the bot for a private chat or add it to the group.

The browser posts to the same-origin `/api` route in this Next.js app. This small serverless handler validates the request and forwards it to Telegram. It stores no booking records and never exposes the token. A fully static browser-only implementation cannot safely keep a bot token secret. Standard Next.js hosting such as Vercel is required; static export is not supported.

Success appears only after Telegram confirms delivery. Missing configuration returns an error and offers the phone contact. Submission is an enquiry, not a confirmed reservation or availability check. The team confirms dates manually.

Abuse protection uses a honeypot, body size checks, same-origin checks and a bounded in-memory per-instance rate limiter (five attempts per ten minutes). The limiter is best effort and resets on restarts; it is not distributed. On Vercel the platform-provided forwarding header selects the bucket; other hosts use a shared bucket. For stronger production abuse controls, use hosting-level rules. Do not log booking payloads. Telegram itself retains the forwarded message; this app has no booking database.

Remove old deployment variables `NEXT_PUBLIC_API_URL`, `ADMIN_USER`, `ADMIN_PASS`, and unused Resend settings. The external NestJS deployment can be stopped separately after this version is deployed.

## Content

- `lib/content.ts`: menu packages, prices, dishes, gallery.
- `lib/booking.ts`: enquiry validation and event types.
- `app/globals.css`: shared design and responsive styles.
- `app/page.tsx`: homepage.
- `public/gallery`, `public/menu`, `public/hero`: original venue and food photography.

Existing menu prices (40/80/95 ₾), phone number and location are retained from the repository. Verify prices and event conditions before launch. No real Telegram enquiries should be sent during automated checks.

## Custom reservation experience

The enquiry form has three steps: event/date/guests, menu, then contact details and review. Values remain in React state when navigating between steps; nothing is persisted in the browser. The calendar uses Georgian labels and supports month/year selection and arrow, Home/End, PageUp/PageDown keyboard navigation. Past dates are disabled; selected dates are requests, not confirmed availability. Event and menu links may prefill `?event=` and `?menu=` using known options only.

- `components/Booking/CalendarPicker.tsx`, `CustomSelect.tsx`: custom controls, with no native date/select UI or date-picker library.
- `lib/calendar.ts`: calendar dates and Georgian formatting.
- `app/experience.css`: editorial burgundy/ivory identity and reservation styles.
- `components/Experience/EventExplorer.tsx`: event tabs on the homepage.

## Restaurant content

The homepage uses real menu data for package previews, comparison rows, price ranges and links from featured dishes to packages. Update `lib/content.ts` rather than duplicating prices in presentation components. `MenuComparison.tsx`, `CuisineSelection.tsx` and `VenueDetails.tsx` supply the richer menu and venue sections. Venue photos are examples of past setups; no capacity, parking, included decoration, testimonials or event statistics are assumed.

## Google rating

The homepage links to the owner's confirmed Google Business profile. It displays the owner's manual snapshot (4.8 from 39 ratings, 2026-10-30) with its date. Update `googleReviews` in `lib/restaurant.ts` after checking the Google profile; the displayed date is derived from `updatedAt`.

There are no Google Places API requests, API keys, subscriptions or automatic synchronization. Visitors open Google to see current ratings and individual reviews. The score is not emitted as AggregateRating and does not promise search-result stars.
