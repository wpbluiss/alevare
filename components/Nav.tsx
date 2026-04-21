"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#team", label: "About" },
  { href: "/#discovery", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[color:var(--surface-base)]/85 backdrop-blur-md border-b border-[color:var(--border-hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Alevare Group — Home">
            <Image
              src="/alevare-logo.webp"
              alt="Alevare Group"
              width={1200}
              height={1071}
              priority
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-[14px] font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#discovery"
              className="btn-gold inline-flex items-center px-5 py-2.5 text-[13px] font-semibold tracking-wide"
              style={{ borderRadius: "2px" }}
            >
              Request Quote
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center text-[color:var(--text-primary)]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 7h18" strokeLinecap="round" />
                  <path d="M3 17h18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[color:var(--border-hairline)] py-4">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="nav-link text-[15px]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#discovery"
                onClick={() => setOpen(false)}
                className="btn-gold inline-flex w-fit items-center px-5 py-2.5 text-[13px] font-semibold tracking-wide"
                style={{ borderRadius: "2px" }}
              >
                Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
