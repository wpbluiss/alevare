import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-hairline)] py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Image
              src="/alevare-logo.webp"
              alt="Alevare Group"
              width={1200}
              height={1071}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-[color:var(--text-muted)]">
              White-glove room restoration for luxury hospitality.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="nav-link">
                  Process
                </a>
              </li>
              <li>
                <a href="#team" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Contact</div>
            <ul className="space-y-3 text-[14px] text-[color:var(--text-muted)]">
              <li>
                <a href="mailto:info@alevaregroup.com" className="nav-link">
                  info@alevaregroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:var(--border-hairline)] flex flex-col md:flex-row justify-between gap-3 text-[12px] text-[color:var(--text-muted)]">
          <div>© 2026 Alevare Group, Inc. All rights reserved.</div>
          <div className="tracking-wider uppercase">
            Forbes &amp; AAA Standards
          </div>
        </div>
      </div>
    </footer>
  );
}
