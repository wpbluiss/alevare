"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/actions/auth";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/companies", label: "Companies" },
  { href: "/contacts", label: "Contacts" },
  { href: "/activities", label: "Activities" },
  { href: "/tasks", label: "Tasks" },
  { href: "/calendar", label: "Calendar" },
  { href: "/automations", label: "Automations" },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="fixed inset-y-0 left-0 flex w-56 flex-col border-r border-hairline bg-surface">
      <div className="px-6 pb-6 pt-8">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.18em] text-gold"
        >
          ALEVARE&nbsp;CRM
        </Link>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-[2px] border-l-2 px-3 py-2 text-sm transition-colors ${
                    active
                      ? "border-gold bg-gold-subtle text-gold"
                      : "border-transparent text-muted hover:text-ivory"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-hairline p-4">
        <form action={signOut}>
          <button type="submit" className="btn-ghost w-full">
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
