import { requireUser } from "@/lib/crm/supabase/server";
import { Sidebar } from "@/components/crm/sidebar";

export default async function CrmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Proxy already gates these routes; this is the defense-in-depth check.
  await requireUser();

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-56">
        <div className="mx-auto w-full max-w-6xl px-8 py-10">{children}</div>
      </main>
    </div>
  );
}
