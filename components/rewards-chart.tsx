"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Calendar, ChevronDown } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { rewardsChartData, dateRangeLabel } from "@/lib/data";

const chartConfig = {
  value: {
    label: "Récompense",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

export function RewardsChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Récompenses</h3>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-accent px-3 py-1.5 text-sm text-foreground">
            Mode minage
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-accent px-3 py-1.5 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {dateRangeLabel}
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[250px] w-full">
        <AreaChart data={rewardsChartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="rewardsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#1e1d2e" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b6b80", fontSize: 12 }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value) => `${Number(value).toFixed(8)} BTC`}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="url(#rewardsGradient)"
            fillOpacity={1}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
