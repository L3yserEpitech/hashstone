import { TopNavbar } from "@/components/top-navbar";
import { SubNavbar } from "@/components/sub-navbar";
import { PageHeader } from "@/components/page-header";
import { StatCardsGrid } from "@/components/stat-cards-grid";
import { RewardsChart } from "@/components/rewards-chart";
import { HashrateChart } from "@/components/hashrate-chart";
import { RewardsTable } from "@/components/rewards-table";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavbar />
      <SubNavbar />
      <main className="mx-auto max-w-[1520px] px-6 py-6 space-y-6">
        <PageHeader />
        <StatCardsGrid />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <RewardsChart />
          <HashrateChart />
        </div>
        <RewardsTable />
      </main>
    </div>
  );
}
