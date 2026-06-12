"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/crm/supabase/client";
import {
  addDaysToKey,
  etDayStart,
  formatDateKeyLong,
  formatDateKeyShort,
  formatEtDateTime,
} from "@/lib/crm/et";
import {
  generateDaySlots,
  getBookableDayKeys,
  type Slot,
} from "@/lib/crm/slots";

type Step = "day" | "slot" | "form" | "success";

interface Confirmation {
  startsAtIso: string;
}

const RPC_ERROR_MESSAGES: [string, string][] = [
  ["NAME_REQUIRED", "Please enter your name."],
  ["EMAIL_INVALID", "Please enter a valid email address."],
  ["SLOT_IN_PAST", "That time has already passed — please pick another slot."],
  [
    "SLOT_MISALIGNED",
    "That time isn't a valid slot — please pick one of the listed times.",
  ],
  [
    "SLOT_TAKEN",
    "That time was just booked — please pick another slot.",
  ],
];

function friendlyRpcError(message: string): string {
  for (const [code, friendly] of RPC_ERROR_MESSAGES) {
    if (message.includes(code)) return friendly;
  }
  return "Something went wrong while booking. Please try again.";
}

export function BookingFlow() {
  const [supabase] = useState(createClient);

  // Day keys are computed after mount so server-rendered HTML never depends
  // on the build-time clock.
  const [dayKeys, setDayKeys] = useState<string[] | null>(null);
  const [step, setStep] = useState<Step>("day");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[] | null>(null);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  useEffect(() => {
    setDayKeys(getBookableDayKeys(new Date()));
  }, []);

  const loadSlots = useCallback(
    async (dayKey: string) => {
      setSlots(null);
      setSlotsError(null);

      const from = etDayStart(dayKey);
      const to = etDayStart(addDaysToKey(dayKey, 1));

      const { data, error } = await supabase.rpc("get_booked_slots", {
        p_from: from.toISOString(),
        p_to: to.toISOString(),
      });

      if (error) {
        setSlotsError(
          "Could not load availability. Please refresh and try again."
        );
        return;
      }

      const booked = (data ?? []).map((row) => ({
        start: new Date(row.starts_at).getTime(),
        end: new Date(row.ends_at).getTime(),
      }));

      setSlots(generateDaySlots(dayKey, new Date(), booked));
    },
    [supabase]
  );

  function chooseDay(dayKey: string) {
    setSelectedDay(dayKey);
    setSelectedSlot(null);
    setFormError(null);
    setStep("slot");
    void loadSlots(dayKey);
  }

  function chooseSlot(slot: Slot) {
    setSelectedSlot(slot);
    setFormError(null);
    setStep("form");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedSlot || !selectedDay) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    if (!name) {
      setFormError("Please enter your name.");
      return;
    }
    if (!email || !email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setFormError(null);

    const { error } = await supabase.rpc("book_meeting", {
      p_name: name,
      p_email: email,
      p_phone: phone === "" ? null : phone,
      p_company: company === "" ? null : company,
      p_starts_at: selectedSlot.startsAtIso,
      p_notes: notes === "" ? null : notes,
    });

    setSubmitting(false);

    if (error) {
      const friendly = friendlyRpcError(error.message);
      setFormError(friendly);
      // If the slot became unavailable, send them back to fresh slots.
      if (
        error.message.includes("SLOT_TAKEN") ||
        error.message.includes("SLOT_IN_PAST")
      ) {
        setSelectedSlot(null);
        setStep("slot");
        setSlotsError(friendly);
        void loadSlots(selectedDay);
      }
      return;
    }

    // Best-effort email notification to the Alevare inbox.
    try {
      await fetch("https://formsubmit.co/ajax/info@alevaregroup.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Consultation Booked · ${name} — ${formatEtDateTime(new Date(selectedSlot.startsAtIso))} ET`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
          "Booking type": "30-minute consultation (booked online)",
          "Scheduled for": `${formatEtDateTime(new Date(selectedSlot.startsAtIso))} ET`,
          "Name": name,
          "Email": email,
          "Phone": phone === "" ? "Not provided" : phone,
          "Company / Property": company === "" ? "Not provided" : company,
          "Notes": notes === "" ? "—" : notes,
          "Next step": "This is confirmed on the Alevare CRM calendar. Reply to this email to reach the client.",
        }),
      });
    } catch {
      // The booking itself succeeded and is in the CRM calendar.
    }

    setConfirmation({ startsAtIso: selectedSlot.startsAtIso });
    setStep("success");
  }

  if (step === "success" && confirmation) {
    return (
      <div className="card p-8 text-center">
        <p className="eyebrow mb-3">You&apos;re booked</p>
        <h2 className="font-display text-2xl text-ivory">
          {formatEtDateTime(new Date(confirmation.startsAtIso))} ET
        </h2>
        <p className="mt-3 text-sm text-muted">
          A 30-minute consultation with the Alevare Group team. We look
          forward to speaking with you.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      {/* Step 1 — pick a day */}
      <div>
        <p className="eyebrow mb-4">1 · Choose a day</p>
        {dayKeys === null ? (
          <p className="py-4 text-sm text-muted">Loading availability…</p>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {dayKeys.map((key) => {
              const active = key === selectedDay;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => chooseDay(key)}
                  className={`rounded-[2px] border px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "border-gold bg-gold text-surface font-semibold"
                      : "border-hairline text-ivory hover:border-gold"
                  }`}
                >
                  {formatDateKeyShort(key)}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Step 2 — pick a time */}
      {selectedDay && step !== "day" ? (
        <div className="mt-8 border-t border-hairline pt-6">
          <p className="eyebrow mb-1">2 · Choose a time</p>
          <p className="mb-4 text-sm text-muted">
            {formatDateKeyLong(selectedDay)} — 30 minutes, Eastern Time
          </p>

          {slotsError ? (
            <p className="mb-3 text-sm text-[#e2a3a3]" role="alert">
              {slotsError}
            </p>
          ) : null}

          {slots === null && !slotsError ? (
            <p className="py-2 text-sm text-muted">Checking open times…</p>
          ) : slots !== null && slots.length === 0 ? (
            <p className="py-2 text-sm text-muted">
              No open times left this day — please pick another day.
            </p>
          ) : slots !== null ? (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {slots.map((slot) => {
                const active = selectedSlot?.startsAtIso === slot.startsAtIso;
                return (
                  <button
                    key={slot.startsAtIso}
                    type="button"
                    onClick={() => chooseSlot(slot)}
                    className={`rounded-[2px] border px-2 py-2 text-sm transition-colors ${
                      active
                        ? "border-gold bg-gold text-surface font-semibold"
                        : "border-hairline text-ivory hover:border-gold"
                    }`}
                  >
                    {slot.label}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Step 3 — details */}
      {step === "form" && selectedSlot && selectedDay ? (
        <div className="mt-8 border-t border-hairline pt-6">
          <p className="eyebrow mb-1">3 · Your details</p>
          <p className="mb-4 text-sm text-muted">
            {formatDateKeyLong(selectedDay)} · {selectedSlot.label} ET
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="bk-name">
                Name *
              </label>
              <input id="bk-name" name="name" required className="input" />
            </div>
            <div>
              <label className="field-label" htmlFor="bk-email">
                Email *
              </label>
              <input
                id="bk-email"
                name="email"
                type="email"
                required
                className="input"
              />
            </div>
            <div>
              <label className="field-label" htmlFor="bk-phone">
                Phone
              </label>
              <input id="bk-phone" name="phone" className="input" />
            </div>
            <div>
              <label className="field-label" htmlFor="bk-company">
                Company
              </label>
              <input id="bk-company" name="company" className="input" />
            </div>
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="bk-notes">
                What would you like to cover?
              </label>
              <textarea id="bk-notes" name="notes" rows={3} className="input" />
            </div>

            {formError ? (
              <p className="text-sm text-[#e2a3a3] sm:col-span-2" role="alert">
                {formError}
              </p>
            ) : null}

            <div className="sm:col-span-2">
              <button type="submit" disabled={submitting} className="btn-gold">
                {submitting ? "Booking…" : "Confirm booking"}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
