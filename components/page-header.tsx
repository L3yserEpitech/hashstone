import { Settings, Share2 } from "lucide-react";

export function PageHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Tableau de bord</h1>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent">
          <Settings className="h-4 w-4" />
          <span>Paramètres des récompenses</span>
        </button>
        <button className="rounded-lg p-2 text-muted-foreground hover:text-foreground">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
