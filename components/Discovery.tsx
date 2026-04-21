"use client";

import { useState } from "react";

const inputBase =
  "w-full bg-[color:var(--surface-base)] border border-[color:var(--border-hairline)] text-[color:var(--text-primary)] placeholder-[color:var(--text-muted)] px-4 py-3 text-[14px] outline-none transition-colors focus:border-[color:var(--accent-primary)]";
const inputStyle = { borderRadius: "2px" };

const labelClass =
  "block text-[11px] font-medium uppercase tracking-[0.15em] text-[color:var(--text-muted)] mb-2";

const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-[color:var(--accent-primary)] flex-shrink-0"
  >
    <path d="M3 8.5l3.5 3.5L13 4.5" />
  </svg>
);

export default function Discovery() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to Formspree/Resend endpoint
    setSubmitted(true);
  };

  return (
    <section id="discovery" className="section-divider py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div
              className="bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] p-7 md:p-10"
              style={{ borderRadius: "2px" }}
            >
              {submitted ? (
                <div className="py-20 text-center">
                  <div className="eyebrow mb-6 text-[color:var(--accent-primary)]">
                    Request received
                  </div>
                  <h3
                    className="font-display text-[28px] md:text-[32px] text-[color:var(--text-primary)] font-medium leading-tight"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Thank you — we&rsquo;ll be in touch{" "}
                    <span className="italic">within 24 hours.</span>
                  </h3>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>
                        Full name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyName" className={labelClass}>
                        Property name
                      </label>
                      <input
                        id="propertyName"
                        name="propertyName"
                        type="text"
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="location" className={labelClass}>
                        Property location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="City, State"
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="consultDate" className={labelClass}>
                        Preferred date
                      </label>
                      <input
                        id="consultDate"
                        name="consultDate"
                        type="date"
                        className={inputBase}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={inputBase}
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold tracking-wide mt-2 self-start"
                    style={{ borderRadius: "2px" }}
                  >
                    Schedule Consultation <span className="ml-2">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-4">
            <div className="eyebrow mb-5">Begin the conversation</div>
            <h2
              className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Request <span className="italic">a call.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
              Every property is unique. Begin with a brief property evaluation —
              we&rsquo;ll craft a tailored plan aligned with your operational
              goals, budget, and Forbes/AAA standards.
            </p>

            <p className="mt-8 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-muted)]">
              A 15-minute call is enough for us to understand your property,
              your current engineering workload, and the standards your guests
              expect. From there, we&rsquo;ll return a tailored Perfect Room
              Program proposal within 48 hours.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "No cost, no obligation",
                "Forbes/AAA-aligned recommendations",
                "24-hour response commitment",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14px] md:text-[15px] text-[color:var(--text-primary)]"
                >
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-[14px] text-[color:var(--text-muted)]">
              Or reach us directly at{" "}
              <a
                href="mailto:info@alevaregroup.com"
                className="text-[color:var(--accent-primary)] hover:text-[color:var(--accent-hover)] transition-colors"
              >
                info@alevaregroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
