/**
 * Canonical site configuration shared across metadata, sitemap, robots,
 * and structured data. Update `siteUrl` here if the production domain changes.
 */
export const siteUrl = "https://www.alevaregroup.com";

export const siteName = "Alevare Group";

export const siteDescription =
  "One team, every trade — HVAC, refrigeration, MEP, pools & water features, FF&E, finishes, and electrical — calibrated to Forbes 5-Star and AAA Five Diamond standards. Full-property restoration and preventive maintenance with real-time client visibility.";

/** Public, indexable routes (the CRM and API routes are intentionally excluded). */
export const publicRoutes = ["/", "/privacy", "/terms"] as const;
