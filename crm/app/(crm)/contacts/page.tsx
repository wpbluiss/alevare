import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createContact } from "@/lib/actions/contacts";
import { ActionForm } from "@/components/action-form";
import { EmptyState, PageHeader, Panel } from "@/components/ui";
import { refName, type CompanyRef, type ContactWithCompany } from "@/lib/joined";

export const metadata = { title: "Contacts" };

export default async function ContactsPage() {
  const supabase = await createClient();

  const [contactsRes, companiesRes] = await Promise.all([
    supabase
      .from("contacts")
      .select("*, companies(id, name)")
      .order("first_name", { ascending: true }),
    supabase.from("companies").select("id, name").order("name"),
  ]);

  const contacts = (contactsRes.data ?? []) as unknown as ContactWithCompany[];
  const companies = (companiesRes.data ?? []) as CompanyRef[];

  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Contacts"
        description="Decision makers and day-to-day points of contact."
      />

      <div className="mb-6">
        <Panel title="New contact">
          <ActionForm action={createContact} submitLabel="Create contact">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="ct-first">
                  First name *
                </label>
                <input
                  id="ct-first"
                  name="first_name"
                  required
                  className="input"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="ct-last">
                  Last name
                </label>
                <input id="ct-last" name="last_name" className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="ct-title">
                  Title
                </label>
                <input id="ct-title" name="title" className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="ct-company">
                  Company
                </label>
                <select id="ct-company" name="company_id" className="input">
                  <option value="">No company</option>
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="ct-email">
                  Email
                </label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  className="input"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="ct-phone">
                  Phone
                </label>
                <input id="ct-phone" name="phone" className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="ct-mobile">
                  Mobile
                </label>
                <input id="ct-mobile" name="mobile" className="input" />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="ct-notes">
                  Notes
                </label>
                <textarea
                  id="ct-notes"
                  name="notes"
                  rows={3}
                  className="input"
                />
              </div>
            </div>
          </ActionForm>
        </Panel>
      </div>

      <div className="card overflow-hidden">
        {contacts.length === 0 ? (
          <EmptyState>No contacts yet — add the first one above.</EmptyState>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-hairline">
                <th className="th">Name</th>
                <th className="th">Title</th>
                <th className="th">Company</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="td">
                    <Link
                      href={`/contacts/${contact.id}`}
                      className="text-ivory transition-colors hover:text-gold"
                    >
                      {refName(contact)}
                    </Link>
                  </td>
                  <td className="td text-muted">{contact.title ?? "—"}</td>
                  <td className="td text-muted">
                    {contact.companies ? (
                      <Link
                        href={`/companies/${contact.companies.id}`}
                        className="text-gold hover:text-gold-hover"
                      >
                        {contact.companies.name}
                      </Link>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="td text-muted">{contact.email ?? "—"}</td>
                  <td className="td text-muted">
                    {contact.phone ?? contact.mobile ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
