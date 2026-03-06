import { Bot, Lightbulb, Zap } from "lucide-react";

function BitcoinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="16" fill="#f7931a" />
      <path
        d="M22.5 14.2c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.6-.4-.7 2.7c-.4-.1-.9-.2-1.3-.3l.7-2.7-1.6-.4-.7 2.7c-.3-.1-.7-.2-1-.2l-2.2-.6-.5 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.1c0 0 .1 0 .2.1h-.2l-1.1 4.4c-.1.2-.3.5-.7.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2.1.5c.4.1.8.2 1.2.3l-.7 2.8 1.6.4.7-2.7c.4.1.9.2 1.3.3l-.7 2.7 1.6.4.7-2.8c2.9.5 5.1.3 6-2.3.7-2.1 0-3.3-1.5-4.1 1.1-.2 1.9-1.1 2.1-2.7zm-3.8 5.3c-.5 2.1-4.1 1-5.3.7l.9-3.8c1.2.3 4.9.9 4.4 3.1zm.5-5.4c-.5 1.9-3.5.9-4.4.7l.8-3.4c1 .2 4.1.7 3.6 2.7z"
        fill="white"
      />
    </svg>
  );
}

function GoMiningTokenSmall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#22c55e" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        G
      </text>
    </svg>
  );
}

interface StatCardProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  subValue?: string;
  linkText?: string;
}

function StatCard({ label, icon, value, subValue, linkText }: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="mb-2 flex items-center gap-3">
        <div className="h-8 w-8">{icon}</div>
        <span className="text-xl font-bold text-foreground">{value}</span>
      </div>
      {subValue && (
        <p className="text-sm text-muted-foreground">{subValue}</p>
      )}
      {linkText && (
        <p className="text-sm text-muted-foreground">{linkText}</p>
      )}
    </div>
  );
}

export function StatCardsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Rémunération totale"
        icon={<BitcoinIcon className="h-8 w-8" />}
        value="$63,867"
      />
      <StatCard
        label="Mineurs"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]">
            <Bot className="h-5 w-5 text-white" />
          </div>
        }
        value="1 Mineur"
      />
      <StatCard
        label="Énergie"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]">
            <Zap className="h-5 w-5 text-white" />
          </div>
        }
        value="500 TH/s"
        linkText="Mise à niveau"
      />
      <StatCard
        label="Efficacité moyenne"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eab308]">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
        }
        value="20 W/TH"
        linkText="Mise à niveau"
      />
    </div>
  );
}
