import {
  addDaysToKey,
  dateKeyWeekday,
  etDateKey,
  etToUtc,
  formatEtTime,
  parseDateKey,
} from "@/lib/et";

export const SLOT_MINUTES = 30;
export const DAY_START_HOUR_ET = 9; // 9:00 AM ET
export const DAY_END_HOUR_ET = 17; // 5:00 PM ET (last slot starts 4:30 PM)
export const MIN_LEAD_MS = 60 * 60 * 1000; // slots must be >= 1 hour out

export interface BookedRange {
  start: number; // epoch ms
  end: number; // epoch ms
}

export interface Slot {
  startsAtIso: string;
  endsAtIso: string;
  label: string; // e.g. "9:00 AM"
}

/**
 * The next 14 Eastern calendar days (today included), excluding Saturdays
 * and Sundays. Returned as "YYYY-MM-DD" keys.
 */
export function getBookableDayKeys(now: Date): string[] {
  const todayKey = etDateKey(now);
  const keys: string[] = [];
  for (let i = 0; i < 14; i++) {
    const key = addDaysToKey(todayKey, i);
    const weekday = dateKeyWeekday(key);
    if (weekday === 0 || weekday === 6) continue;
    keys.push(key);
  }
  return keys;
}

/**
 * All available 30-minute slots for an Eastern calendar day between
 * 9:00 AM and 5:00 PM ET, excluding booked overlaps and anything starting
 * less than one hour from `now`.
 */
export function generateDaySlots(
  dayKey: string,
  now: Date,
  booked: BookedRange[]
): Slot[] {
  const { year, month, day } = parseDateKey(dayKey);
  const slots: Slot[] = [];
  const earliestStart = now.getTime() + MIN_LEAD_MS;

  for (let hour = DAY_START_HOUR_ET; hour < DAY_END_HOUR_ET; hour++) {
    for (const minute of [0, 30]) {
      const start = etToUtc(year, month, day, hour, minute);
      const startMs = start.getTime();
      const endMs = startMs + SLOT_MINUTES * 60 * 1000;

      if (startMs < earliestStart) continue;

      const overlaps = booked.some(
        (b) => startMs < b.end && endMs > b.start
      );
      if (overlaps) continue;

      slots.push({
        startsAtIso: start.toISOString(),
        endsAtIso: new Date(endMs).toISOString(),
        label: formatEtTime(start),
      });
    }
  }

  return slots;
}
