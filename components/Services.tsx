import Image from "next/image";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Premium Paint & Surface Revival",
    body:
      "Expert touch-ups, repainting, and surface restoration to eliminate scuffs, scratches, wear, and discoloration.",
  },
  {
    title: "Preventative Maintenance",
    body:
      "A structured 24–48 hour cycle to identify issues early, prevent outages, and extend asset life.",
  },
  {
    title: "HVAC Preventative Services",
    body:
      "Drain clearing, plumbing fixes, HVAC filter changes, vent cleaning, and temperature maintenance.",
  },
  {
    title: "Luxury Standards Compliance",
    body:
      "Maintain Forbes and AAA criteria through meticulous care and flawless detailing.",
  },
  {
    title: "Damage Repair & Asset Protection",
    body:
      "Repair or replace damaged tile, baseboards, fixtures, hardware, furniture, and appliances.",
  },
  {
    title: "Quality Assurance & Reporting",
    body:
      "Detailed assessments, Alevare QC standards, photo reports, and transparent recommendations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow mb-5">What we do</div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Expert room restoration &{" "}
              <span className="italic">preventative maintenance.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
              Comprehensive services designed specifically for hotels and
              resorts. From eliminating out-of-order rooms to supporting
              overworked engineering teams, Alevare brings consistency, quality,
              and efficiency to your property.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-8 lg:gap-12 items-start">
          <Reveal delay={240}>
            <div
              className="relative border border-[color:var(--border-hairline)] overflow-hidden"
              style={{ borderRadius: "2px" }}
            >
              <div
                className="absolute inset-0 pointer-events-none z-10"
                aria-hidden="true"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(201, 169, 97, 0.25)",
                }}
              />
              <Image
                src="/alevare-service.webp"
                alt="Alevare white-glove hotel room restoration in progress"
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {services.map((s, idx) => (
              <Reveal as="article" delay={idx * 60 + 160} key={s.title}>
                <div
                  className="service-card h-full border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-5 md:p-6 transition-colors hover:border-[color:var(--accent-primary)]/60 flex flex-col"
                  style={{ borderRadius: "2px" }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-primary)] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <h3
                      className="font-display text-[17px] md:text-[18px] text-[color:var(--text-primary)] font-medium leading-snug"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[13.5px] md:text-[14px] leading-relaxed text-[color:var(--text-muted)] pl-5">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
