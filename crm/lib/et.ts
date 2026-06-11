/**
 * Eastern Time (America/New_York) helpers.
 *
 * All math goes through Intl.DateTimeFormat with an explicit timeZone so it
 * is correct regardless of the server/browser timezone and across DST
 * transitions. Kept deliberately simple over clever.
 */

export const ET_TIME_ZONE = "America/New_York";

export interface EtParts {
  year: number;
  month: number; // 1-12
  day: number; // 1-31
  hour: number; // 0-23
  minute: number;
  weekday: number; // 0 = Sunday ... 6 = Saturday
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const partsFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: ET_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  weekday: "short",
});

/** Returns the wall-clock parts of the given instant in Eastern Time. */
export function getEtParts(date: Date): EtParts {
  const parts = partsFormatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes): string =>
    parts.find((p) => p.type === type)?.value ?? "";

  // "24" can be returned for midnight by some ICU versions with hour12: false.
  const rawHour = Number(get("hour"));

  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: rawHour === 24 ? 0 : rawHour,
    minute: Number(get("minute")),
    weekday: WEEKDAYS.indexOf(get("weekday")),
  };
}

/**
 * Converts an Eastern wall-clock time (y/m/d h:mm) to the UTC instant.
 * Uses an iterative fixed-point correction that converges for any real
 * UTC offset, including across DST changes.
 */
export function etToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): Date {
  const target = Date.UTC(year, month - 1, day, hour, minute);
  let ts = target;

  for (let i = 0; i < 3; i++) {
    const p = getEtParts(new Date(ts));
    const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
    const diff = asUtc - target;
    if (diff === 0) break;
    ts -= diff;
  }

  return new Date(ts);
}

/** "YYYY-MM-DD" key for the Eastern calendar day containing the instant. */
export function etDateKey(date: Date): string {
  const p = getEtParts(date);
  const mm = String(p.month).padStart(2, "0");
  const dd = String(p.day).padStart(2, "0");
  return `${p.year}-${mm}-${dd}`;
}

/** Parses a "YYYY-MM-DD" key into numeric parts. */
export function parseDateKey(key: string): {
  year: number;
  month: number;
  day: number;
} {
  const [year, month, day] = key.split("-").map(Number);
  return { year, month, day };
}

/** Start of the Eastern calendar day (as a UTC instant) for a date key. */
export function etDayStart(key: string): Date {
  const { year, month, day } = parseDateKey(key);
  return etToUtc(year, month, day, 0, 0);
}

/** Adds whole days to a date key (calendar math, DST-safe). */
export function addDaysToKey(key: string, days: number): string {
  const { year, month, day } = parseDateKey(key);
  // Noon UTC avoids any day rollover from pure calendar arithmetic.
  const d = new Date(Date.UTC(year, month - 1, day + days, 12, 0));
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${d.getUTCFullYear()}-${mm}-${dd}`;
}

/** Day-of-week (0=Sun..6=Sat) of a date key — timezone independent. */
export function dateKeyWeekday(key: string): number {
  const { year, month, day } = parseDateKey(key);
  return new Date(Date.UTC(year, month - 1, day, 12, 0)).getUTCDay();
}

export function formatEtTime(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: ET_TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function formatEtDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: ET_TIME_ZONE,
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatEtDateTime(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: ET_TIME_ZONE,
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

/** e.g. "Wednesday, June 11" for a date key. */
export function formatDateKeyLong(key: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: ET_TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(etToUtc(...keyToNoonArgs(key)));
}

/** e.g. "Wed, Jun 11" for a date key. */
export function formatDateKeyShort(key: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: ET_TIME_ZONE,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(etToUtc(...keyToNoonArgs(key)));
}

function keyToNoonArgs(
  key: string
): [number, number, number, number, number] {
  const { year, month, day } = parseDateKey(key);
  return [year, month, day, 12, 0];
}
