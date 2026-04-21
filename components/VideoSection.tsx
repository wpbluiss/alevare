import Reveal from "@/components/Reveal";

// TODO: Swap PLACEHOLDER_YOUTUBE_ID with the real Alevare YouTube video ID from Jonathan.
// Location: components/VideoSection.tsx (VIDEO_ID constant below, ~line 6)
const VIDEO_ID = "PLACEHOLDER_YOUTUBE_ID";

export default function VideoSection() {
  return (
    <section
      id="why-alevare"
      className="section-divider py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="eyebrow mb-5">Why leading hotels choose Alevare</div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Where engineering meets{" "}
              <span className="italic">white-glove standards.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
              Alevare supports hotel teams with expert room restoration, precise
              finishes, and reliable operational readiness.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-14">
          <div
            className="mx-auto max-w-4xl border border-[color:var(--accent-primary)]/40 bg-[color:var(--surface-elevated)] overflow-hidden"
            style={{ borderRadius: "2px" }}
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Alevare Group — Why Leading Hotels Choose Alevare"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
