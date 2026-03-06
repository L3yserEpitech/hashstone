"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Tableau de bord", href: "/" },
  { label: "Récompenses", href: "/recompenses" },
];

export function SubNavbar() {
  const pathname = usePathname();

  return (
    <div className="border-b border-border bg-[#0c0b14] px-6">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`relative py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#7c3aed]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
