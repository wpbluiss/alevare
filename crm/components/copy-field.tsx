"use client";

import { useState } from "react";

export function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context) — the field is selectable.
    }
  }

  return (
    <div className="flex items-stretch gap-2">
      <input
        type="text"
        readOnly
        value={value}
        onFocus={(e) => e.currentTarget.select()}
        className="input flex-1 font-mono text-[13px]"
        aria-label="Public booking link"
      />
      <button type="button" onClick={copy} className="btn-ghost shrink-0">
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
