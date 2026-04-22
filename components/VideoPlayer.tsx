"use client";

import { useState } from "react";

type Props = { videoId: string };

export default function VideoPlayer({ videoId }: Props) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 md:-inset-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(184, 152, 99, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="relative p-[2px]"
        style={{
          background:
            "linear-gradient(135deg, #B89863 0%, #D4B47A 50%, #B89863 100%)",
        }}
      >
        <div
          className="relative w-full bg-[color:var(--surface-base)] overflow-hidden"
          style={{ aspectRatio: "16 / 9" }}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Alevare Group — Why Leading Hotels Choose Alevare"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              aria-label="Play video"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailUrl}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(21, 34, 49, 0.15) 0%, rgba(21, 34, 49, 0.45) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center bg-[color:var(--accent-primary)] transition-all duration-200 group-hover:scale-105 group-hover:bg-[color:var(--accent-hover)]"
                  style={{ borderRadius: "50%" }}
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    aria-hidden="true"
                  >
                    <path d="M1 1 L17 10 L1 19 Z" fill="#F0EDE5" />
                  </svg>
                </span>
              </div>
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 text-center text-[14px] italic text-[color:var(--text-muted)]">
        Watch how we deliver guest-perfect rooms — every time.
      </p>
    </div>
  );
}
