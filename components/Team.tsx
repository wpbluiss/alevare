import Image from "next/image";

const team = [
  {
    name: "Claudia Castro-Ameri",
    role: "President / CEO",
    image: "/team-claudia.webp",
    bio: "Founder and hospitality operations executive with over 15 years of experience leading engineering, facility management, and asset operations across New York City and Miami. Her leadership at five-star, five-diamond, Forbes-trained hotels — Pier Sixty-Six, The Ritz-Carlton, Acqualina Resort & Residences, The Biltmore Hotel — shaped the foundation of Alevare's Perfect Room Program.",
  },
  {
    name: "Jonathan Lozano",
    role: "Vice-President / CGO",
    image: "/team-jonathan.jpg",
    bio: "Co-founder and growth strategist guiding Alevare's expansion, partnerships, and brand development. Jonathan leads business development, proposals, and client onboarding — working directly with hotel GMs, DOEs, and ownership teams to tailor PRP and Concierge Maintenance programs that enhance performance and protect brand reputation.",
  },
  {
    name: "Julio Castro",
    role: "Vice-President / COO",
    image: "/team-julio.webp",
    bio: "Co-founder and operations executive with deep experience in painting, surface restoration, and R&M materials management. Julio leads field coordination, logistics, and execution — ensuring every project meets Alevare's 24-hour completion commitment with precision, safety, and polish.",
  },
  {
    name: "Skylar Siegel",
    role: "Hospitality Sales Consultant",
    image: "/team-skylar.webp",
    bio: "Nearly 15 years in luxury hospitality, with an operations-driven approach to leadership, guest experience, and business performance. After nearly a decade with Marriott International — including extensive experience with The Ritz-Carlton brand — Skylar brings broad perspective across global systems and independent luxury concepts.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-[color:var(--surface-elevated)] border-y border-[color:var(--border-hairline)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-5">Our Leadership</div>
          <h2
            className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Dedicated to{" "}
            <span className="italic">your success.</span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
            Alevare Group was founded by hospitality professionals shaped by the
            five-star, five-diamond, Forbes-trained standards of New York City
            and Miami — two cities that define global luxury. Our leadership
            team brings together deep expertise in engineering, asset
            management, field operations, and strategic expansion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {team.map((m) => (
            <article
              key={m.name}
              className="bg-[color:var(--surface-base)] border border-[color:var(--border-hairline)] overflow-hidden flex flex-col"
              style={{ borderRadius: "2px" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover object-top grayscale-[0.08]"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(26, 24, 20, 0.4) 100%)",
                  }}
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[color:var(--accent-primary)]">
                  {m.role}
                </div>
                <h3
                  className="mt-2 font-display text-[21px] md:text-[22px] text-[color:var(--text-primary)] font-medium leading-tight"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {m.name}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
