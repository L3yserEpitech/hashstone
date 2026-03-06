import { Calendar, ChevronDown, Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { rewardsData, dateRangeLabel, totalRewardUsd } from "@/lib/data";

function BitcoinIconSmall() {
  return (
    <svg className="inline-block h-4 w-4" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#f7931a" />
      <path
        d="M22.5 14.2c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.6-.4-.7 2.7c-.4-.1-.9-.2-1.3-.3l.7-2.7-1.6-.4-.7 2.7c-.3-.1-.7-.2-1-.2l-2.2-.6-.5 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.1c0 0 .1 0 .2.1h-.2l-1.1 4.4c-.1.2-.3.5-.7.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2.1.5c.4.1.8.2 1.2.3l-.7 2.8 1.6.4.7-2.7c.4.1.9.2 1.3.3l-.7 2.7 1.6.4.7-2.8c2.9.5 5.1.3 6-2.3.7-2.1 0-3.3-1.5-4.1 1.1-.2 1.9-1.1 2.1-2.7zm-3.8 5.3c-.5 2.1-4.1 1-5.3.7l.9-3.8c1.2.3 4.9.9 4.4 3.1zm.5-5.4c-.5 1.9-3.5.9-4.4.7l.8-3.4c1 .2 4.1.7 3.6 2.7z"
        fill="white"
      />
    </svg>
  );
}

function GoMiningIconSmall() {
  return (
    <svg className="inline-block h-4 w-4" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#22c55e" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        G
      </text>
    </svg>
  );
}

export function RewardsTable() {
  return (
    <div className="flex max-h-[calc(100vh-220px)] flex-col rounded-xl border border-border bg-card p-5">
      {/* Header */}
      <div className="mb-5 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-foreground">
            Récompenses pour la période
          </h3>
          <span className="text-lg font-semibold text-foreground">
            ${totalRewardUsd}
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-accent px-3 py-1.5 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {dateRangeLabel}
        </div>
      </div>

      {/* Controls */}
      <div className="mb-5 flex shrink-0 items-center justify-between">
        <button className="flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-2 text-sm text-muted-foreground">
          Choisir une devise
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-border bg-accent px-3 py-1.5 text-sm text-foreground">
          Mode minage
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Table */}
      <div className="min-h-0 flex-1 overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-card">
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">
                Puissance de calcul
              </TableHead>
              <TableHead className="text-muted-foreground">
                <span className="flex items-center gap-1">
                  Récompense
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#22c55e] text-[9px] font-bold text-white">$</span>
                </span>
              </TableHead>
              <TableHead className="text-muted-foreground">
                <span className="flex items-center gap-1">
                  PR
                  <BitcoinIconSmall />
                </span>
              </TableHead>
              <TableHead className="text-muted-foreground">
                <span className="flex items-center gap-1">
                  Électricité
                  <GoMiningIconSmall />
                  <Info className="h-3.5 w-3.5" />
                </span>
              </TableHead>
              <TableHead className="text-muted-foreground">Adresse</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rewardsData.map((row) => (
              <TableRow
                key={row.date}
                className="border-border hover:bg-accent/50"
              >
                <TableCell className="font-medium text-foreground">
                  {row.date}
                </TableCell>
                <TableCell className="text-foreground">
                  {row.hashrate.toFixed(2)}
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1.5 font-mono text-[#22c55e]">
                    ${row.rewardUsd.toFixed(2)}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1.5 font-mono text-foreground">
                    {row.pr.toFixed(8)}
                    <BitcoinIconSmall />
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1.5 font-mono text-foreground">
                    {row.electricity.toFixed(2)}
                    <GoMiningIconSmall />
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1.5 text-foreground">
                    <BitcoinIconSmall />
                    {row.address}
                    <svg
                      className="h-3.5 w-3.5 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
