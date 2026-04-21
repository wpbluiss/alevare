import Image from "next/image";
import Particles from "@/components/Particles";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[color:var(--surface-base)]"
    >
      <div
        className="absolute inset-0 opacity-[0.12] md:opacity-[0.18] pointer-events-none"
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
            "linear-gradient(180deg, rgba(26,24,20,0.4) 0%, rgba(26,24,20,0.85) 100%)",
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
            Luxury Hotel Room Restoration · Preventative Maintenance
          </div>

          <h1
            className="font-display font-medium text-[color:var(--text-primary)] text-[48px] leading-[1.05] sm:text-[64px] md:text-[80px] lg:text-[88px] max-w-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Guest-perfect rooms.{" "}
            <span className="underline-draw italic" style={{ fontVariationSettings: "'opsz' 144" }}>
              Every time.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] md:text-[20px] leading-relaxed text-[color:var(--text-muted)]">
            Alevare Group delivers Forbes- and AAA-standard room restoration for
            luxury hotels. 24–48 hour turnaround. White-glove execution. Full
            documentation.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold tracking-wide"
              style={{ borderRadius: "2px" }}
            >
              Request Quote <span className="ml-2">→</span>
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
            <rect x="0.5" y="0.5" width="21" height="33" rx="10.5" stroke="#C9A961" strokeOpacity="0.5" />
            <circle cx="11" cy="11" r="2" fill="#C9A961" />
          </svg>
        </div>
      </div>
    </section>
  );
}
