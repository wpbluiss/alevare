import Image from "next/image";
import Particles from "@/components/Particles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[color:var(--surface-base)]"
    >
      <div
        className="absolute inset-0 opacity-[0.08] md:opacity-[0.10] pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,34,49,0.4) 0%, rgba(21,34,49,0.85) 100%)",
        }}
      />

      <div className="hero-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245, 239, 228, 0.8) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <Particles />

      <div className="relative mx-auto max-w-6xl w-full px-6 md:px-10 py-28 md:py-0">
        <div className="flex flex-col items-center text-center fade-in">
          <div className="eyebrow mb-8">
            Luxury Restoration · Preventive Maintenance · Full-Property Scope
          </div>

          <h1
            className="font-display font-medium text-[color:var(--text-primary)] text-[48px] leading-[1.05] sm:text-[64px] md:text-[80px] lg:text-[88px] max-w-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Every space.{" "}
            <span className="underline-draw italic" style={{ fontVariationSettings: "'opsz' 144" }}>
              Perfectly maintained.
            </span>
          </h1>

          <div
            className="mt-6 mb-6 text-[14px] font-medium text-[color:var(--accent-primary)]"
            style={{ letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            One Team. Every Trade. White-Glove Standard — Every Time.
          </div>

          <p className="max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
            Alevare Group is a unified team with over five years working
            together inside South Florida&rsquo;s most demanding luxury
            properties. We are not a network of subcontractors. The same core
            team brings a shared fluency across HVAC, refrigeration, MEP, pools
            &amp; water features, FF&amp;E, finishes, and high-to-low voltage
            electrical — calibrated to Forbes 5-Star and AAA Five Diamond
            standards. One team. One standard. Every time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl">
            {[
              "Guestrooms",
              "Lobbies & Public Areas",
              "F&B Venues",
              "Commercial Kitchens",
              "Pools & Water Features",
              "Spa & Wellness",
              "Ballrooms",
              "Luxury Residences",
            ].map((space) => (
              <span
                key={space}
                className="border border-[color:var(--border-hairline)] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[color:var(--accent-primary)]"
                style={{ borderRadius: "2px" }}
              >
                {space}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact-us"
              className="btn-gold inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold tracking-wide"
              style={{ borderRadius: "2px" }}
            >
              Request a Consultation <span className="ml-2">→</span>
            </a>
            <a
              href="#process"
              className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold tracking-wide"
              style={{ borderRadius: "2px" }}
            >
              Our Process
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-hint hidden md:block" aria-hidden="true">
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
            <rect x="0.5" y="0.5" width="21" height="33" rx="10.5" stroke="#B89863" strokeOpacity="0.5" />
            <circle cx="11" cy="11" r="2" fill="#B89863" />
          </svg>
        </div>
      </div>
    </section>
  );
}
