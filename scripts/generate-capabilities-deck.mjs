/**
 * Generates public/alevare-capabilities-deck.pdf in the site's brand system.
 * Run: node scripts/generate-capabilities-deck.mjs
 */
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const require = createRequire(import.meta.url);
const PDFDocument = require("pdfkit");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "alevare-capabilities-deck.pdf");

const FR = path.join(root, "node_modules/@fontsource/fraunces/files");
const IN = path.join(root, "node_modules/@fontsource/inter/files");

const COLORS = {
  base: "#152231",
  elevated: "#1B2E40",
  hairline: "#2A3D52",
  ivory: "#F0EDE5",
  muted: "#8A95A3",
  gold: "#B89863",
};

const W = 960;
const H = 540;
const MX = 72;

const doc = new PDFDocument({ size: [W, H], margin: 0, autoFirstPage: false });
doc.pipe(fs.createWriteStream(out));

doc.registerFont("display", path.join(FR, "fraunces-latin-500-normal.woff"));
doc.registerFont("display-italic", path.join(FR, "fraunces-latin-500-italic.woff"));
doc.registerFont("body", path.join(IN, "inter-latin-400-normal.woff"));
doc.registerFont("body-medium", path.join(IN, "inter-latin-500-normal.woff"));
doc.registerFont("body-semibold", path.join(IN, "inter-latin-600-normal.woff"));

let pageNum = 0;

function newPage(footerLabel = "Alevare Group · Capabilities") {
  doc.addPage();
  pageNum += 1;
  doc.rect(0, 0, W, H).fill(COLORS.base);
  if (pageNum > 1) {
    doc
      .moveTo(MX, H - 44)
      .lineTo(W - MX, H - 44)
      .lineWidth(0.5)
      .stroke(COLORS.hairline);
    doc
      .font("body-medium")
      .fontSize(7)
      .fillColor(COLORS.muted)
      .text(footerLabel.toUpperCase(), MX, H - 34, {
        characterSpacing: 1.5,
      });
    doc
      .font("body-medium")
      .fontSize(7)
      .fillColor(COLORS.muted)
      .text(String(pageNum).padStart(2, "0"), W - MX - 40, H - 34, {
        width: 40,
        align: "right",
        characterSpacing: 1.5,
      });
  }
}

function eyebrow(text, x, y, opts = {}) {
  doc
    .font("body-medium")
    .fontSize(8.5)
    .fillColor(opts.color || COLORS.gold)
    .text(text.toUpperCase(), x, y, {
      characterSpacing: 2.2,
      width: opts.width || W - 2 * MX,
      align: opts.align || "left",
    });
}

function goldRule(x, y, w = 56) {
  doc.moveTo(x, y).lineTo(x + w, y).lineWidth(1).stroke(COLORS.gold);
}

function card(x, y, w, h) {
  doc.rect(x, y, w, h).fillAndStroke(COLORS.elevated, COLORS.hairline);
  doc.lineWidth(0.5);
}

function star(cx, cy, r, color = COLORS.gold) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const radius = i % 2 === 0 ? r : r * 0.42;
    pts.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
  }
  doc.polygon(...pts).fill(color);
}

function diamond(cx, cy, r, color = COLORS.gold) {
  doc
    .polygon([cx, cy - r], [cx + r * 0.7, cy], [cx, cy + r], [cx - r * 0.7, cy])
    .fill(color);
}

/* ---------------------------------------------------------------- cover */
newPage();
doc.rect(28, 28, W - 56, H - 56).lineWidth(0.5).stroke(COLORS.hairline);
doc.rect(32, 32, W - 64, H - 64).lineWidth(0.5).stroke(COLORS.hairline);

eyebrow("Luxury Restoration · Preventive Maintenance · Full-Property Scope", 0, 96, {
  align: "center",
  width: W,
});

doc
  .font("display")
  .fontSize(58)
  .fillColor(COLORS.ivory)
  .text("Every space.", 0, 150, { align: "center", width: W });
doc
  .font("display-italic")
  .fontSize(58)
  .fillColor(COLORS.gold)
  .text("Perfectly maintained.", 0, 216, { align: "center", width: W });

goldRule(W / 2 - 28, 312);

doc
  .font("body")
  .fontSize(13)
  .fillColor(COLORS.muted)
  .text("One team. Every trade. White-glove standard — every time.", 0, 332, {
    align: "center",
    width: W,
  });

eyebrow("Alevare Group · Capabilities · 2026", 0, 420, { align: "center", width: W, color: COLORS.muted });
eyebrow("Miami · New York", 0, 440, { align: "center", width: W });

/* ----------------------------------------------------------- who we are */
newPage();
eyebrow("Who we are", MX, 64);
doc
  .font("display")
  .fontSize(34)
  .fillColor(COLORS.ivory)
  .text("One team. One standard. ", MX, 88, { continued: true })
  .font("display-italic")
  .fillColor(COLORS.gold)
  .text("Every time.");

doc
  .font("body")
  .fontSize(11.5)
  .fillColor(COLORS.muted)
  .text(
    "Alevare Group is a unified team with over five years working together inside South Florida's most demanding luxury properties. We are not a network of subcontractors. The same core team brings a shared fluency across HVAC, refrigeration, MEP, pools & water features, FF&E, finishes, and high-to-low voltage electrical — calibrated to Forbes 5-Star and AAA Five Diamond standards.",
    MX,
    150,
    { width: W - 2 * MX, lineGap: 4 }
  );

const stats = [
  ["5+", "Years working together"],
  ["8", "Trades mastered in-house"],
  ["4", "Active industry certifications"],
];
const statW = (W - 2 * MX - 2 * 16) / 3;
stats.forEach(([num, label], i) => {
  const x = MX + i * (statW + 16);
  card(x, 260, statW, 110);
  doc
    .font("display")
    .fontSize(40)
    .fillColor(COLORS.gold)
    .text(num, x, 282, { width: statW, align: "center" });
  doc
    .font("body-medium")
    .fontSize(8.5)
    .fillColor(COLORS.muted)
    .text(label.toUpperCase(), x + 12, 334, {
      width: statW - 24,
      align: "center",
      characterSpacing: 1.4,
    });
});

doc
  .font("body")
  .fontSize(10.5)
  .fillColor(COLORS.muted)
  .text(
    "What makes Alevare different isn't just where we've worked — it's how we work together. One team owns the outcome, start to finish.",
    MX,
    402,
    { width: W - 2 * MX, lineGap: 3, align: "center" }
  );

/* ----------------------------------------------------------- the trades */
newPage();
eyebrow("Capabilities", MX, 64);
doc
  .font("display")
  .fontSize(34)
  .fillColor(COLORS.ivory)
  .text("Eight trades. ", MX, 88, { continued: true })
  .font("display-italic")
  .fillColor(COLORS.gold)
  .text("Mastered in-house.");

const trades = [
  ["HVAC", "Controls · Commissioning"],
  ["Refrigeration", "Commercial Kitchens"],
  ["Pools & Water Features", "Treatment · Maintenance"],
  ["MEP Systems", "Mechanical · Plumbing"],
  ["Electrical", "High & Low Voltage"],
  ["Data & Network", "Structured Cabling"],
  ["FF&E Restoration", "Furniture · Fixtures"],
  ["Finishes", "Paint · Wall · Millwork"],
];
const tw = (W - 2 * MX - 3 * 14) / 4;
trades.forEach(([name, sub], i) => {
  const x = MX + (i % 4) * (tw + 14);
  const y = 160 + Math.floor(i / 4) * 124;
  card(x, y, tw, 110);
  doc.circle(x + 20, y + 26, 2).fill(COLORS.gold);
  doc
    .font("body-semibold")
    .fontSize(11.5)
    .fillColor(COLORS.ivory)
    .text(name, x + 16, y + 42, { width: tw - 32, lineGap: 1 });
  doc
    .font("body-medium")
    .fontSize(8)
    .fillColor(COLORS.gold)
    .text(sub.toUpperCase(), x + 16, y + 78, {
      width: tw - 32,
      characterSpacing: 0.8,
    });
});

doc
  .font("body")
  .fontSize(10.5)
  .fillColor(COLORS.muted)
  .text(
    "No subcontractor roulette, no handoffs, no finger-pointing. The same core team carries the work from guestrooms to commercial kitchens to pools.",
    MX,
    426,
    { width: W - 2 * MX, align: "center" }
  );

/* ------------------------------------------------------ spaces we serve */
newPage();
eyebrow("Full-property scope", MX, 64);
doc
  .font("display")
  .fontSize(34)
  .fillColor(COLORS.ivory)
  .text("Every space ", MX, 88, { continued: true })
  .font("display-italic")
  .fillColor(COLORS.gold)
  .text("on the property.");

const spaces = [
  "Guestrooms",
  "Lobbies & Public Areas",
  "F&B Venues",
  "Commercial Kitchens",
  "Pools & Water Features",
  "Spa & Wellness",
  "Ballrooms",
  "Luxury Residences",
];
const sw = (W - 2 * MX - 3 * 14) / 4;
spaces.forEach((name, i) => {
  const x = MX + (i % 4) * (sw + 14);
  const y = 168 + Math.floor(i / 4) * 78;
  doc.rect(x, y, sw, 62).lineWidth(0.5).stroke(COLORS.hairline);
  const th = doc.font("body-medium").fontSize(9.5).heightOfString(name.toUpperCase(), {
    width: sw - 24,
    characterSpacing: 1.2,
  });
  doc
    .fillColor(COLORS.gold)
    .text(name.toUpperCase(), x + 12, y + (62 - th) / 2, {
      width: sw - 24,
      align: "center",
      characterSpacing: 1.2,
    });
});

eyebrow("Built for", MX, 356, { color: COLORS.muted });
doc
  .font("body-medium")
  .fontSize(12)
  .fillColor(COLORS.ivory)
  .text(
    "Luxury Hotels   ·   HOA Boards   ·   Property Managers   ·   Facility Directors   ·   Luxury Residences",
    MX,
    380,
    { width: W - 2 * MX }
  );

/* -------------------------------------------------------- command center */
newPage();
eyebrow("The Alevare Command Center · Live & Deployed", MX, 64);
doc
  .font("display")
  .fontSize(30)
  .fillColor(COLORS.ivory)
  .text("Your property. ", MX, 88, { continued: true })
  .font("display-italic")
  .fillColor(COLORS.gold)
  .text("In your hands. In real time.");

doc
  .font("body")
  .fontSize(10.5)
  .fillColor(COLORS.muted)
  .text(
    "Most contractors send you an email when the job is done. Alevare clients are already watching their properties get restored in real time — through a dedicated client app, live today at properties across South Florida.",
    MX,
    136,
    { width: W - 2 * MX, lineGap: 3 }
  );

const features = [
  ["Live Chat with the On-Site Team", "Chat directly with whoever is on site. Real answers, real time."],
  ["Live Photo Uploads", "Before-and-after photos the moment work happens — not next week in a report."],
  ["Real-Time Status Updates", "Cycle completion, room-by-room progress, and estimated dates, updated live."],
  ["Past Reports & Full Project History", "Permanently accessible records. Built for audits, boards, and insurance."],
  ["Preventive Maintenance Tracking", "PM programs tracked live. Nothing deferred without your knowledge."],
  ["Asset & Repair Documentation", "A complete audit trail of every decision, repair, and cost. Proof, not promises."],
];
const fw = (W - 2 * MX - 2 * 14) / 3;
features.forEach(([title, body], i) => {
  const x = MX + (i % 3) * (fw + 14);
  const y = 196 + Math.floor(i / 3) * 116;
  card(x, y, fw, 104);
  doc
    .font("body-semibold")
    .fontSize(10.5)
    .fillColor(COLORS.ivory)
    .text(title, x + 16, y + 16, { width: fw - 32, lineGap: 1 });
  doc
    .font("body")
    .fontSize(8.5)
    .fillColor(COLORS.muted)
    .text(body, x + 16, y + 52, { width: fw - 32, lineGap: 2 });
});

doc
  .font("display-italic")
  .fontSize(13)
  .fillColor(COLORS.gold)
  .text("Complete transparency. Every time.", MX, 448, {
    width: W - 2 * MX,
    align: "center",
  });

/* ------------------------------------------------------ instant approval */
newPage();
eyebrow("Out-of-Scope · Instant Approval", MX, 64);
doc
  .font("display")
  .fontSize(28)
  .fillColor(COLORS.ivory)
  .text("Unexpected findings. Instant decisions.", MX, 88, { width: 440 });
doc
  .font("display-italic")
  .fontSize(28)
  .fillColor(COLORS.gold)
  .text("Zero project delays.", MX, 158);

doc
  .font("body")
  .fontSize(10.5)
  .fillColor(COLORS.muted)
  .text(
    "During restoration, we find things. It happens at every luxury property. Instead of stalling the project with back-and-forth emails, Alevare sends an in-app notification the moment something is discovered — with photos, a clear explanation, the impact if left unaddressed, and instant pricing. You approve, defer, or decline right from your phone. The project keeps moving.",
    MX,
    212,
    { width: 400, lineGap: 4 }
  );

doc
  .font("body")
  .fontSize(10.5)
  .fillColor(COLORS.muted)
  .text("No chasing contractors. No unanswered emails. No uncertainty.", MX, 380, {
    width: 400,
    lineGap: 3,
  });

const mx2 = 530;
const mw = W - MX - mx2;
card(mx2, 96, mw, 330);
doc
  .font("body-medium")
  .fontSize(7.5)
  .fillColor(COLORS.gold)
  .text("OUT-OF-SCOPE ITEM · PENDING YOUR APPROVAL", mx2 + 24, 120, {
    characterSpacing: 1.6,
  });
doc.rect(mx2 + 24, 144, mw - 48, 230).lineWidth(0.5).stroke(COLORS.hairline);
doc
  .font("body-semibold")
  .fontSize(12)
  .fillColor(COLORS.ivory)
  .text("Subfloor moisture damage — Room 412", mx2 + 42, 166, { width: mw - 84 });
doc
  .font("body")
  .fontSize(9)
  .fillColor(COLORS.muted)
  .text("Discovered during flooring restoration", mx2 + 42, 188);
doc
  .font("body-semibold")
  .fontSize(12)
  .fillColor(COLORS.gold)
  .text("$1,850", mx2 + 42, 186, { width: mw - 84, align: "right" });
doc
  .font("body")
  .fontSize(9)
  .fillColor(COLORS.muted)
  .text(
    "Moisture intrusion detected beneath existing flooring. Recommend remediation before new finish to prevent long-term structural damage. 3 photos attached.",
    mx2 + 42,
    214,
    { width: mw - 84, lineGap: 3 }
  );
const btnY = 290;
doc.rect(mx2 + 42, btnY, 84, 26).fill(COLORS.gold);
doc
  .font("body-semibold")
  .fontSize(8)
  .fillColor(COLORS.base)
  .text("APPROVE", mx2 + 42, btnY + 9, { width: 84, align: "center", characterSpacing: 1 });
doc.rect(mx2 + 134, btnY, 94, 26).lineWidth(0.5).stroke(COLORS.hairline);
doc
  .font("body-medium")
  .fontSize(8)
  .fillColor(COLORS.muted)
  .text("MAYBE LATER", mx2 + 134, btnY + 9, { width: 94, align: "center", characterSpacing: 1 });
doc.rect(mx2 + 236, btnY, 80, 26).lineWidth(0.5).stroke(COLORS.hairline);
doc
  .font("body-medium")
  .fontSize(8)
  .fillColor(COLORS.muted)
  .text("DECLINE", mx2 + 236, btnY + 9, { width: 80, align: "center", characterSpacing: 1 });
doc
  .font("body")
  .fontSize(8)
  .fillColor(COLORS.muted)
  .text("Instant pricing · Photo documentation · No project delays", mx2 + 24, 342, {
    width: mw - 48,
    align: "center",
  });

/* --------------------------------------------------- standards and certs */
newPage();
eyebrow("Standards we're fluent in", MX, 64);

const stdY = 100;
const stdW = (W - 2 * MX - 16) / 2;
card(MX, stdY, stdW, 130);
for (let i = 0; i < 5; i++) star(MX + 34 + i * 26, stdY + 36, 9);
doc
  .font("body-semibold")
  .fontSize(12.5)
  .fillColor(COLORS.ivory)
  .text("Forbes Travel Guide · 5-Star", MX + 24, stdY + 58);
doc
  .font("body")
  .fontSize(9.5)
  .fillColor(COLORS.muted)
  .text(
    "900+ service and physical condition criteria. We know what inspectors see — and what they don't forgive.",
    MX + 24,
    stdY + 80,
    { width: stdW - 48, lineGap: 3 }
  );

const sx2 = MX + stdW + 16;
card(sx2, stdY, stdW, 130);
for (let i = 0; i < 5; i++) diamond(sx2 + 34 + i * 26, stdY + 36, 10);
doc
  .font("body-semibold")
  .fontSize(12.5)
  .fillColor(COLORS.ivory)
  .text("AAA · Five Diamond", sx2 + 24, stdY + 58);
doc
  .font("body")
  .fontSize(9.5)
  .fillColor(COLORS.muted)
  .text(
    "Exceptional facility condition is non-negotiable. Our PM programs are built to sustain that rating year-round.",
    sx2 + 24,
    stdY + 80,
    { width: stdW - 48, lineGap: 3 }
  );

eyebrow("Certifications", MX, 276, { color: COLORS.muted });
const certs = [
  ["CPO", "Certified Pool Operator"],
  ["EPA", "Environmental Protection"],
  ["OSHA 30", "Construction Safety"],
  ["FMP", "Facility Management Professional"],
];
const cw = (W - 2 * MX - 3 * 14) / 4;
certs.forEach(([abbr, name], i) => {
  const x = MX + i * (cw + 14);
  card(x, 304, cw, 110);
  doc
    .font("display")
    .fontSize(22)
    .fillColor(COLORS.gold)
    .text(abbr, x, 330, { width: cw, align: "center" });
  doc
    .font("body-medium")
    .fontSize(8)
    .fillColor(COLORS.muted)
    .text(name.toUpperCase(), x + 12, 366, {
      width: cw - 24,
      align: "center",
      characterSpacing: 1,
    });
});

/* ------------------------------------------------------------ properties */
newPage();
eyebrow("Properties our team knows from the inside", MX, 64);

const props = [
  ["Ritz-Carlton", "Luxury Hotel · South Florida"],
  ["Acqualina Resort & Residences", "Ultra-Luxury · Sunny Isles"],
  ["Pier Sixty-Six", "Luxury Resort · Fort Lauderdale"],
  ["Four Seasons", "Luxury Hotel · South Florida"],
  ["Trump International", "Luxury Resort · South Florida"],
  ["Boca Raton Resort", "Historic Luxury · Boca Raton"],
];
const pw = (W - 2 * MX - 2 * 14) / 3;
props.forEach(([name, type], i) => {
  const x = MX + (i % 3) * (pw + 14);
  const y = 110 + Math.floor(i / 3) * 142;
  card(x, y, pw, 128);
  doc
    .font("display")
    .fontSize(17)
    .fillColor(COLORS.ivory)
    .text(name, x + 20, y + 28, { width: pw - 40, lineGap: 1 });
  doc
    .font("body-medium")
    .fontSize(8)
    .fillColor(COLORS.gold)
    .text(type.toUpperCase(), x + 20, y + 90, {
      width: pw - 40,
      characterSpacing: 1,
    });
});

doc
  .font("body")
  .fontSize(10)
  .fillColor(COLORS.muted)
  .text(
    "Our founders and core team have operated as a unit inside these properties — building a shared standard of execution that no assembled crew can replicate.",
    MX,
    416,
    { width: W - 2 * MX, align: "center", lineGap: 3 }
  );

/* --------------------------------------------------------------- contact */
newPage();
doc.rect(28, 28, W - 56, H - 56).lineWidth(0.5).stroke(COLORS.hairline);

eyebrow("Begin your partnership", 0, 100, { align: "center", width: W });
doc
  .font("display")
  .fontSize(40)
  .fillColor(COLORS.ivory)
  .text("Ready to experience", 0, 136, { align: "center", width: W });
doc
  .font("display-italic")
  .fontSize(40)
  .fillColor(COLORS.gold)
  .text("a different standard?", 0, 184, { align: "center", width: W });

doc
  .font("body")
  .fontSize(11)
  .fillColor(COLORS.muted)
  .text(
    "Alevare is currently accepting new property partnerships in Miami, Fort Lauderdale, and New York.\nLet's talk about what full-property visibility looks like for your asset.",
    120,
    256,
    { width: W - 240, align: "center", lineGap: 4 }
  );

doc
  .font("body-semibold")
  .fontSize(13)
  .fillColor(COLORS.gold)
  .text("info@alevaregroup.com   ·   alevaregroup.com", 0, 330, {
    align: "center",
    width: W,
  });

goldRule(W / 2 - 28, 386);

doc
  .font("display-italic")
  .fontSize(13)
  .fillColor(COLORS.muted)
  .text('"Every great hotel tells a story. We make sure the space is ready for it."', 0, 408, {
    align: "center",
    width: W,
  });

eyebrow("Alevare Group · Miami · New York", 0, 458, { align: "center", width: W, color: COLORS.muted });

doc.end();
console.log("Wrote", out);
