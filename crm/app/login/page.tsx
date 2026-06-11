import { signIn } from "@/lib/actions/auth";
import { ActionForm } from "@/components/action-form";

export const metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="font-display text-xl tracking-[0.18em] text-gold">
            ALEVARE&nbsp;CRM
          </p>
          <p className="eyebrow mt-3">Private — team access only</p>
        </div>

        <div className="card p-6">
          <ActionForm
            action={signIn}
            submitLabel="Sign in"
            pendingLabel="Signing in…"
            className="space-y-4"
          >
            <div>
              <label className="field-label" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input"
              />
            </div>
            <div>
              <label className="field-label" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input"
              />
            </div>
          </ActionForm>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Alevare Group — luxury restoration &amp; preventive maintenance.
        </p>
      </div>
    </main>
  );
}
