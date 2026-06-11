import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/crm/supabase/server";
import { deleteCompany, updateCompany } from "@/lib/crm/actions/companies";
import { ActionForm } from "@/components/crm/action-form";
import { ActivityTimeline } from "@/components/crm/activity-timeline";
import { EmptyState, PageHeader, Panel } from "@/components/crm/ui";
import { refName, type ActivityWithRefs, type ContactRef } from "@/lib/crm/joined";

export const metadata = { title: "Company" };

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const [{ data: company }, contactsRes, activitiesRes] = await Promise.all([
    supabase.from("companies").select("*").eq("id", id).single(),
    supabase
      .from("contacts")
      .select("id, first_name, last_name, title, email")
      .eq("company_id", id)
      .order("first_name", { ascending: true }),
    supabase
      .from("activities")
      .select("*, contacts(id, first_name, last_name), companies(id, name)")
      .eq("company_id", id)
      .order("occurred_at", { ascending: false })
      .limit(20),
  ]);

  if (!company) {
    notFound();
  }

  const contacts = (contactsRes.data ?? []) as (ContactRef & {
    title: string | null;
    email: string | null;
  })[];
  const activities = (activitiesRes.data ??
    []) as unknown as ActivityWithRefs[];

  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={company.name}
        description={[company.industry, company.website]
          .filter(Boolean)
          .join(" · ")}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <section className="card p-5">
            <h2 className="eyebrow mb-4">Details</h2>
            <ActionForm
              action={updateCompany.bind(null, company.id)}
              submitLabel="Save changes"
              pendingLabel="Saving…"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="c-name">
                    Name *
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    required
                    defaultValue={company.name}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="c-industry">
                    Industry
                  </label>
                  <input
                    id="c-industry"
                    name="industry"
                    defaultValue={company.industry ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="c-website">
                    Website
                  </label>
                  <input
                    id="c-website"
                    name="website"
                    defaultValue={company.website ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="c-email">
                    Email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    defaultValue={company.email ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="c-phone">
                    Phone
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    defaultValue={company.phone ?? ""}
                    className="input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="c-address">
                    Address
                  </label>
                  <input
                    id="c-address"
                    name="address_line"
                    defaultValue={company.address_line ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="c-city">
                    City
                  </label>
                  <input
                    id="c-city"
                    name="city"
                    defaultValue={company.city ?? ""}
                    className="input"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="c-state">
                      State
                    </label>
                    <input
                      id="c-state"
                      name="state"
                      defaultValue={company.state ?? ""}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="c-postal">
                      Postal code
                    </label>
                    <input
                      id="c-postal"
                      name="postal_code"
                      defaultValue={company.postal_code ?? ""}
                      className="input"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="c-notes">
                    Notes
                  </label>
                  <textarea
                    id="c-notes"
                    name="notes"
                    rows={3}
                    defaultValue={company.notes ?? ""}
                    className="input"
                  />
                </div>
              </div>
            </ActionForm>
          </section>

          <section className="card p-5">
            <h2 className="eyebrow mb-4">Recent activity</h2>
            <ActivityTimeline activities={activities} />
          </section>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <section className="card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="eyebrow">Contacts</h2>
              <Link
                href="/crm/contacts"
                className="text-xs text-gold hover:text-gold-hover"
              >
                All contacts →
              </Link>
            </div>
            {contacts.length === 0 ? (
              <EmptyState>No contacts at this company yet.</EmptyState>
            ) : (
              <ol className="divide-y divide-hairline">
                {contacts.map((contact) => (
                  <li key={contact.id} className="py-3 first:pt-0 last:pb-0">
                    <Link
                      href={`/crm/contacts/${contact.id}`}
                      className="text-sm text-ivory transition-colors hover:text-gold"
                    >
                      {refName(contact)}
                    </Link>
                    <p className="mt-0.5 text-xs text-muted">
                      {[contact.title, contact.email]
                        .filter(Boolean)
                        .join(" · ") || "—"}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </section>

          <Panel title="Danger zone">
            <p className="mb-2 text-sm text-muted">
              Deleting a company detaches its contacts, activities, and tasks,
              then removes the record permanently.
            </p>
            <ActionForm
              action={deleteCompany.bind(null, company.id)}
              submitLabel="Confirm delete"
              pendingLabel="Deleting…"
              ghost
            >
              <p className="text-sm text-ivory">
                Delete <span className="text-gold">{company.name}</span>?
                This cannot be undone.
              </p>
            </ActionForm>
          </Panel>
        </div>
      </div>
    </>
  );
}
