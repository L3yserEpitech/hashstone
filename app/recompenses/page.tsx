import { TopNavbar } from "@/components/top-navbar";
import { SubNavbar } from "@/components/sub-navbar";
import { RewardsTable } from "@/components/rewards-table";

export default function RecompensesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavbar />
      <SubNavbar />
      <main className="mx-auto max-w-[1520px] px-6 py-6 space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Récompenses</h1>
        <RewardsTable />
      </main>
    </div>
  );
}
