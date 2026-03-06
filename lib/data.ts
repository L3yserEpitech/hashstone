export interface RewardRow {
  date: string;
  hashrate: number;
  reward: number;
  rewardUsd: number;
  pr: number;
  electricity: number;
  service: number;
  address: string;
  totalDiscount: string;
  status: string;
}

const BTC_PRICE_USD = 90000;

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

// 100k€ machine, 30% annual → ~0.00096700 BTC/day, ~500 TH/s
function generateRawRows() {
  const rows = [];
  const baseReward = 0.00096700;
  const electricityValues = [28.37, 28.74, 29.13, 29.48, 29.82];
  const serviceValues = [12.28, 12.63, 13.07];

  for (let i = 0; i < 30; i++) {
    const rand = seededRandom(i);
    const rand2 = seededRandom(i + 50);
    // Reward varies more organically: base + two noise sources
    const reward = +(baseReward + (rand - 0.5) * 0.00003800 + (rand2 - 0.5) * 0.00001200).toFixed(8);
    // PR slightly different from reward (fees etc)
    const pr = +(reward + (seededRandom(i + 77) - 0.5) * 0.00000600).toFixed(8);
    // Hashrate stable at 500
    const hashrate = 500.00;
    const electricity = electricityValues[Math.floor(seededRandom(i + 100) * electricityValues.length)];
    const service = serviceValues[Math.floor(seededRandom(i + 200) * serviceValues.length)];
    rows.push({
      daysBack: i,
      hashrate,
      reward,
      pr,
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
  rewardUsd: +(row.reward * BTC_PRICE_USD).toFixed(2),
  pr: row.pr,
  electricity: row.electricity,
  service: row.service,
  address: "3312",
  totalDiscount: row.totalDiscount,
  status: "Réinvesti",
}));

export const totalRewardUsd = rewardsData.reduce((sum, r) => sum + r.rewardUsd, 0).toFixed(2);

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
  { date: formatDateShort(daysAgo(31)), value: 500.00 },
  ...[...rawRows].reverse().map((row) => ({
    date: formatDateShort(daysAgo(row.daysBack)),
    value: row.hashrate,
  })),
];
