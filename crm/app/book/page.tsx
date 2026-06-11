import { BookingFlow } from "./booking-flow";

export const metadata = {
  title: "Book a consultation — Alevare Group",
  description:
    "Reserve a 30-minute consultation with the Alevare Group team. Weekdays, 9 AM – 5 PM Eastern.",
};

export default function BookPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16">
      <header className="mb-10 text-center">
        <p className="font-display text-xl tracking-[0.18em] text-gold">
          ALEVARE&nbsp;GROUP
        </p>
        <h1 className="font-display mt-6 text-3xl text-ivory sm:text-4xl">
          Book a consultation
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Thirty minutes with our team to walk through your property, your
          standards, and how Alevare keeps both impeccable. Weekdays, 9 AM –
          5 PM Eastern.
        </p>
      </header>

      <BookingFlow />

      <p className="mt-10 text-center text-xs text-muted">
        Luxury restoration &amp; preventive maintenance — calibrated to
        Forbes 5-Star standards.
      </p>
    </main>
  );
}
