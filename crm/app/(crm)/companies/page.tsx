import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createCompany } from "@/lib/actions/companies";
import { ActionForm } from "@/components/action-form";
import { EmptyState, PageHeader, Panel } from "@/components/ui";
import type { CompanyWithContactCount } from "@/lib/joined";

export const metadata = { title: "Companies" };

export default async function CompaniesPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("companies")
    .select("*, contacts(count)")
    .order("name", { ascending: true });

  const companies = (data ?? []) as unknown as CompanyWithContactCount[];

  return (
    <>
      <PageHeader
        eyebrow="Accounts"
        title="Companies"
        description="Every property group and partner Alevare works with."
      />

      <div className="mb-6">
        <Panel title="New company">
          <ActionForm action={createCompany} submitLabel="Create company">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="nc-name">
                  Name *
                </label>
                <input id="nc-name" name="name" required className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="nc-industry">
                  Industry
                </label>
                <input id="nc-industry" name="industry" className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="nc-website">
                  Website
                </label>
                <input id="nc-website" name="website" className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="nc-email">
                  Email
                </label>
                <input
                  id="nc-email"
                  name="email"
                  type="email"
                  className="input"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="nc-phone">
                  Phone
                </label>
                <input id="nc-phone" name="phone" className="input" />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="nc-address">
                  Address
                </label>
                <input id="nc-address" name="address_line" className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="nc-city">
                  City
                </label>
                <input id="nc-city" name="city" className="input" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="field-label" htmlFor="nc-state">
                    State
                  </label>
                  <input id="nc-state" name="state" className="input" />
                </div>
                <div>
                  <label className="field-label" htmlFor="nc-postal">
                    Postal code
                  </label>
                  <input id="nc-postal" name="postal_code" className="input" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="nc-notes">
                  Notes
                </label>
                <textarea
                  id="nc-notes"
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
        {companies.length === 0 ? (
          <EmptyState>No companies yet — add the first one above.</EmptyState>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-hairline">
                <th className="th">Name</th>
                <th className="th">Industry</th>
                <th className="th">City / State</th>
                <th className="th">Phone</th>
                <th className="th text-right">Contacts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {companies.map((company) => (
                <tr key={company.id}>
                  <td className="td">
                    <Link
                      href={`/companies/${company.id}`}
                      className="text-ivory transition-colors hover:text-gold"
                    >
                      {company.name}
                    </Link>
                  </td>
                  <td className="td text-muted">{company.industry ?? "—"}</td>
                  <td className="td text-muted">
                    {[company.city, company.state].filter(Boolean).join(", ") ||
                      "—"}
                  </td>
                  <td className="td text-muted">{company.phone ?? "—"}</td>
                  <td className="td text-right text-muted">
                    {company.contacts[0]?.count ?? 0}
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
