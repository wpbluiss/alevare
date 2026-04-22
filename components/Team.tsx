import Image from "next/image";
import Reveal from "@/components/Reveal";

const team = [
  {
    name: "Claudia Castro-Ameri",
    role: "President / CEO",
    image: "/team-claudia.webp",
    bio: "Founder and hospitality operations executive with over 15 years of experience leading engineering, facility management, and asset operations across New York City and Miami — two of the most dynamic hospitality markets in the world. Her leadership at five-star, five-diamond, Forbes-trained and certified hotels, resorts, and condo-hotels such as Pier Sixty-Six, The Ritz-Carlton, Acqualina Resort & Residences, and The Biltmore Hotel led her to shape the foundation of a Turned-Key Perfect Room Program (PRP) — a white-glove maintenance model that merges engineering precision, brand presentation, and 24-hour turnaround into one seamless system. Claudia oversees Alevare's global strategy, quality standards, and client partnerships, ensuring each project reflects the same professionalism and discipline found inside the luxury properties that shaped her career.",
  },
  {
    name: "Jonathan Lozano",
    role: "Vice-President / CGO",
    image: "/team-jonathan.jpg",
    bio: "Co-founder and growth strategist guiding Alevare's expansion, partnerships, and brand development. Jonathan has successfully launched and managed multiple ventures, combining operational structure with entrepreneurial drive. At Alevare, he leads business development, proposals, and client onboarding, ensuring every partnership is grounded in transparency, trust, and measurable value. He works directly with hotel GMs, DOEs, and ownership teams to tailor PRP and Concierge Maintenance programs that enhance performance and protect brand reputation.",
  },
  {
    name: "Julio Castro",
    role: "Vice-President / COO",
    image: "/team-julio.webp",
    bio: "Co-founder and operations executive with deep experience in painting, surface restoration, and R&M materials management. Julio leads the field coordination, logistics, and execution behind every Alevare project, ensuring precision, safety, and timely completion. He manages team performance and on-site supervision to ensure that every room and space under PRP or Concierge Maintenance meets Alevare's 24-hour completion commitment. Julio's focus on detail, quality, and consistency has helped Alevare become a trusted partner for properties seeking predictable, polished, and white-glove delivery.",
  },
  {
    name: "Skylar Siegel",
    role: "Hospitality Sales Consultant",
    image: "/team-skylar.webp",
    bio: "With nearly 15 years in luxury hospitality, Skylar Siegel brings an operations-driven approach to leadership, guest experience, and business performance. Her background spans hotels, resorts, food halls, and high-volume food and beverage concepts, with expertise in operations, engineering oversight, and senior leadership. After nearly a decade with Marriott International, including extensive experience with The Ritz-Carlton brand, Skylar developed a strong foundation in service excellence and people-first leadership. She has also worked with Hilton and other luxury resort brands, giving her broad perspective across global systems and independent concepts. Now consulting, Skylar supports teams in operational refinement, leadership development, service culture enhancement, and scalable growth — always through a luxury lens.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-divider bg-[color:var(--surface-elevated)] border-b border-[color:var(--border-hairline)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="eyebrow mb-5">Our Leadership</div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Dedicated to{" "}
              <span className="italic">your success.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
              Alevare Group was founded by hospitality professionals shaped by
              the five-star, five-diamond, Forbes-trained standards of New York
              City and Miami — two cities that define global luxury. Our
              leadership team brings together deep expertise in engineering,
              asset management, field operations, and strategic expansion.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {team.map((m, idx) => (
            <Reveal as="article" delay={idx * 80} key={m.name} className="h-full">
              <div
                className="team-card h-full bg-[color:var(--surface-base)] border border-[color:var(--border-hairline)] overflow-hidden flex flex-col"
                style={{ borderRadius: "2px" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                  <Image
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(21, 34, 49, 0.45) 100%)",
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
                  <p className="mt-4 text-[13px] leading-relaxed text-[color:var(--text-muted)]">
                    {m.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
