import { Bell, User } from "lucide-react";

function SiteName() {
  return (
    <span className="text-lg font-bold text-white">HashStone</span>
  );
}

const navItems = [
  { label: "Mes mineurs", active: true },
];

export function TopNavbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-border bg-[#0c0b14] px-6">
      <div className="flex items-center gap-8">
        <SiteName />
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-[#7c3aed] text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 text-muted-foreground hover:text-foreground">
          <User className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
