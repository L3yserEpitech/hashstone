export interface RewardRow {
  date: string;
  hashrate: number;
  reward: number;
  pr: number;
  electricity: number;
  service: number;
  address: string;
  totalDiscount: string;
  status: string;
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatDateShort(date: Date): string {
  const months = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sep", "Oct", "Nov", "Déc",
  ];
  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}`;
}

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

// Seeded random for consistent values across renders
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Generate 30 days of reward data with slight variations
function generateRawRows() {
  const rows = [];
  const baseReward = 0.00001170;
  const electricityValues = [1.48, 1.49, 1.50, 1.51, 1.52];
  const serviceValues = [0.73, 0.74, 0.75];

  for (let i = 0; i < 30; i++) {
    const rand = seededRandom(i);
    // Reward varies slightly around base: ±0.00000015
    const reward = +(baseReward + (rand - 0.5) * 0.00000030).toFixed(8);
    // Hashrate stays close: 26.60 - 27.00
    const hashrate = +(26.60 + rand * 0.40).toFixed(2);
    const electricity = electricityValues[Math.floor(seededRandom(i + 100) * electricityValues.length)];
    const service = serviceValues[Math.floor(seededRandom(i + 200) * serviceValues.length)];
    rows.push({
      daysBack: i,
      hashrate,
      reward,
      pr: reward,
      electricity,
      service,
      totalDiscount: seededRandom(i + 300) > 0.5 ? "6.21%" : "5.91%",
    });
  }
  return rows;
}

const rawRows = generateRawRows();

export const rewardsData: RewardRow[] = rawRows.map((row) => ({
  date: formatDate(daysAgo(row.daysBack)),
  hashrate: row.hashrate,
  reward: row.reward,
  pr: row.pr,
  electricity: row.electricity,
  service: row.service,
  address: "3312",
  totalDiscount: row.totalDiscount,
  status: "Réinvesti",
}));

export const dateRangeLabel = `${formatDate(daysAgo(29))} - ${formatDate(daysAgo(0))}`;

export interface ChartDataPoint {
  date: string;
  value: number;
}

// Charts use chronological order (oldest → newest)
export const rewardsChartData: ChartDataPoint[] = [...rawRows]
  .reverse()
  .map((row) => ({
    date: formatDateShort(daysAgo(row.daysBack)),
    value: row.reward,
  }));

export const hashrateChartData: ChartDataPoint[] = [
  { date: formatDateShort(daysAgo(7)), value: 26.50 },
  ...[...rawRows].reverse().map((row) => ({
    date: formatDateShort(daysAgo(row.daysBack)),
    value: row.hashrate,
  })),
];
