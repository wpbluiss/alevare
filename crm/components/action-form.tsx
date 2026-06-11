"use client";

import { useActionState } from "react";
import type { ActionState } from "@/lib/actions/types";
import { initialActionState } from "@/lib/actions/types";

interface ActionFormProps {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  submitLabel: string;
  pendingLabel?: string;
  children: React.ReactNode;
  className?: string;
  ghost?: boolean;
}

/**
 * Generic form wrapper around useActionState: renders children (server- or
 * client-rendered fields), an inline error, and a pending-aware submit
 * button.
 */
export function ActionForm({
  action,
  submitLabel,
  pendingLabel,
  children,
  className,
  ghost = false,
}: ActionFormProps) {
  const [state, formAction, pending] = useActionState(
    action,
    initialActionState
  );

  return (
    <form action={formAction} className={className}>
      {children}
      {state.error ? (
        <p className="mt-3 text-sm text-[#e2a3a3]" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className="mt-4">
        <button
          type="submit"
          disabled={pending}
          className={ghost ? "btn-ghost" : "btn-gold"}
        >
          {pending ? (pendingLabel ?? "Working…") : submitLabel}
        </button>
      </div>
    </form>
  );
}
