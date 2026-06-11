import type {
  ActivityRow,
  CompanyRow,
  ContactRow,
  TaskRow,
} from "@/lib/crm/database.types";

export interface ContactRef {
  id: string;
  first_name: string;
  last_name: string | null;
}

export interface CompanyRef {
  id: string;
  name: string;
}

export interface ActivityWithRefs extends ActivityRow {
  contacts: ContactRef | null;
  companies: CompanyRef | null;
}

export interface TaskWithContact extends TaskRow {
  contacts: ContactRef | null;
}

export interface ContactWithCompany extends ContactRow {
  companies: CompanyRef | null;
}

export interface CompanyWithContactCount extends CompanyRow {
  contacts: { count: number }[];
}

export function refName(contact: ContactRef): string {
  return [contact.first_name, contact.last_name].filter(Boolean).join(" ");
}
