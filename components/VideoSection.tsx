import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";

const VIDEO_ID = "tpGDn0CqBq4";

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
            className="p-8 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, #152231 0%, #1B2E40 50%, #2A3D52 100%)",
            }}
          >
            <VideoPlayer videoId={VIDEO_ID} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
